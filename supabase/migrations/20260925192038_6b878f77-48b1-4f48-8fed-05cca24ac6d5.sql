create type public.app_role as enum ('admin','user');
create table public.user_roles (id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade, role app_role not null, unique(user_id, role));
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create or replace function public.has_role(_user_id uuid, _role app_role) returns boolean language sql stable security definer set search_path=public as $$ select exists(select 1 from public.user_roles where user_id=_user_id and role=_role) $$;
create policy "own roles" on public.user_roles for select to authenticated using (user_id = auth.uid() or public.has_role(auth.uid(),'admin'));

create or replace function public.handle_first_admin() returns trigger language plpgsql security definer set search_path=public as $$
begin
  if not exists (select 1 from public.user_roles where role='admin') then
    insert into public.user_roles(user_id, role) values (new.id, 'admin');
  end if;
  return new;
end $$;
create trigger on_auth_user_created_admin after insert on auth.users for each row execute function public.handle_first_admin();

create table public.pages (id uuid primary key default gen_random_uuid(), slug text unique not null, label_en text not null, label_es text not null, title_en text not null default '', title_es text not null default '', body_en text not null default '', body_es text not null default '', sort_order int not null default 0, visible boolean not null default true, is_system boolean not null default false);
create table public.content_blocks (key text primary key, value_en text not null default '', value_es text not null default '');
create table public.dropoffs (id uuid primary key default gen_random_uuid(), name text not null, address text not null default '', hours_en text not null default '', hours_es text not null default '', phone text not null default '', map_url text not null default '', sort_order int not null default 0, visible boolean not null default true);
create table public.volunteer_needs (id uuid primary key default gen_random_uuid(), title_en text not null, title_es text not null, desc_en text not null default '', desc_es text not null default '', sort_order int not null default 0, visible boolean not null default true);
create table public.donation_methods (id uuid primary key default gen_random_uuid(), title_en text not null, title_es text not null, details_en text not null default '', details_es text not null default '', link text not null default '', sort_order int not null default 0, visible boolean not null default true);
create table public.messages (id uuid primary key default gen_random_uuid(), kind text not null default 'contact', name text not null, email text not null, phone text not null default '', message text not null default '', created_at timestamptz not null default now());

do $$ declare t text; begin
  foreach t in array array['pages','content_blocks','dropoffs','volunteer_needs','donation_methods'] loop
    execute format('grant select on public.%I to anon, authenticated', t);
    execute format('grant insert, update, delete on public.%I to authenticated', t);
    execute format('grant all on public.%I to service_role', t);
    execute format('alter table public.%I enable row level security', t);
    execute format('create policy "public read" on public.%I for select to anon, authenticated using (true)', t);
    execute format('create policy "admin write" on public.%I for all to authenticated using (public.has_role(auth.uid(),''admin'')) with check (public.has_role(auth.uid(),''admin''))', t);
  end loop;
end $$;

grant insert on public.messages to anon, authenticated;
grant select, delete on public.messages to authenticated;
grant all on public.messages to service_role;
alter table public.messages enable row level security;
create policy "anyone submit" on public.messages for insert to anon, authenticated with check (char_length(name) between 1 and 100 and char_length(email) between 3 and 255 and char_length(message) <= 2000 and kind in ('contact','volunteer'));
create policy "admin read" on public.messages for select to authenticated using (public.has_role(auth.uid(),'admin'));
create policy "admin delete" on public.messages for delete to authenticated using (public.has_role(auth.uid(),'admin'));

insert into public.pages (slug,label_en,label_es,sort_order,is_system) values
('home','Home','Inicio',0,true),('values','Values & Beliefs','Valores y creencias',1,true),('help','How You Can Help','Cómo puedes ayudar',2,true),('volunteer','Volunteer','Voluntariado',3,true),('drop-off','Drop-Off Points','Puntos de entrega',4,true),('donate','Donate','Donar',5,true),('contact','Contact Us','Contáctanos',6,true);

insert into public.content_blocks (key,value_en,value_es) values
('hero_kicker','Playa del Carmen, Mexico','Playa del Carmen, México'),
('hero_title','Breath of Life — Caring in Action','Aliento de Vida — Amor en Acción'),
('hero_sub','Helping less-fortunate families in the Playa del Carmen area. Your contributions, donations and volunteering time are all very much appreciated.','Ayudamos a familias de escasos recursos en Playa del Carmen. Tus aportaciones, donativos y tiempo como voluntario son muy apreciados.'),
('mission_title','Come and make them smile','Ven y hazlos sonreír'),
('mission_body','With your support, we are already assisting hundreds of grateful families in Playa del Carmen.','Con tu apoyo, ya ayudamos a cientos de familias agradecidas en Playa del Carmen.'),
('story_body','Breath of Life Ministry is a passion project formed in 2020 by Michele Avila to help impoverished families in Playa del Carmen — especially single mothers — in their critical time of need. It began with groceries bought from personal savings; during the pandemic, more people came for help, and the community began raising funds together.','Aliento de Vida es un proyecto nacido en 2020 por Michele Avila para ayudar a familias vulnerables de Playa del Carmen — especialmente madres solteras — en su momento de mayor necesidad. Comenzó con despensas compradas con ahorros personales; durante la pandemia llegaron más personas y la comunidad comenzó a recaudar fondos en conjunto.'),
('programs','Bi-weekly grocery distributions|Weekly women''s support group|Life & business skills training|Emotional and domestic violence support|Sunday School for children|Back-to-school support|Emergency medical support|Holiday celebrations & gift giveaways','Entrega quincenal de despensas|Grupo semanal de apoyo para mujeres|Talleres de vida y negocios|Apoyo emocional y ante violencia doméstica|Escuela dominical para niños|Apoyo de regreso a clases|Apoyo médico de emergencia|Celebraciones y regalos navideños'),
('stat_1','2020|Founded','2020|Fundado'),('stat_2','100s|Families helped','Cientos|Familias apoyadas'),('stat_3','2x|Monthly distributions','2x|Entregas al mes'),('stat_4','8+|Drop-off points','8+|Puntos de entrega'),
('values_intro','Breath of Life – Caring in Action is a non-denominational Christian ministry focused on social action and the personal, psycho-emotional, spiritual, and socio-economic development of individuals. It was born during the pandemic, from a single mother''s desire to help other women.','Breath of Life - Caring in Action es un ministerio cristiano de acción social, sin denominación, dedicado al desarrollo personal, psicoemocional, espiritual y socioeconómico de las personas. Nació en tiempos de pandemia, impulsado por el deseo de una madre soltera de apoyar a otras mujeres en situaciones vulnerables.'),
('value_mission','To provide physical, psychological, and spiritual nourishment.','Proporcionar alimento físico, psicológico y espiritual a quienes más lo necesitan.'),
('value_vision','To follow in the footsteps and example of Jesus to share His love and sacrifice.','Seguir los pasos y el ejemplo de Jesús, compartiendo su amor y sacrificio con todos.'),
('value_objective','To empower those in need by providing them with the spiritual, psychological, and socio-economic tools to move forward.','Empoderar a quienes se encuentran en necesidad, brindándoles herramientas espirituales, emocionales y socioeconómicas que les permitan salir adelante.'),
('value_faith','We believe in one God who is the Creator, King, Provider, and Father, who loves everything He has created. He sent His Son and the Holy Spirit to love, guide, and serve all people, regardless of creed, race, socio-economic status, nationality, or gender role.','Creemos en un solo Dios: creador, rey, proveedor y padre amoroso de toda su creación. Envió a su Hijo y al Espíritu Santo para amar, guiar y servir a todos, sin distinción de credo, color, posición socioeconómica, nacionalidad o rol de género.'),
('value_logo','Pink represents the Father''s unconditional love. Purple represents the spiritual kingdom. Blue represents the heavens.','Rosa: el amor incondicional del Padre. Morado: el reino espiritual. Azul: los cielos.'),
('help_contributions','We gratefully receive contributions we can sell at our regular garden sales, raising much-needed funds to purchase necessities for local families. Food, gently used clothes and household items can be dropped at BOL Headquarters (Calle 16, between 115 and 120, Ejido) or any drop-off point.','Recibimos con gratitud artículos que vendemos en nuestras ventas de garaje para recaudar fondos. Alimentos, ropa en buen estado y artículos del hogar pueden dejarse en la sede de BOL (Calle 16, entre 115 y 120, Ejido) o en cualquier punto de entrega.'),
('help_food','Cases of one item are preferred: boxes of milk, sugar, beans, rice, small bottles of vegetable oil, toilet paper, baby wipes, instant coffee, small cans of tuna, medium boxes of tomato paste.','Preferimos cajas de un solo producto: leche, azúcar, frijol, arroz, aceite vegetal pequeño, papel higiénico, toallitas húmedas, café soluble, latas pequeñas de atún, puré de tomate.'),
('help_gifts','Please do not wrap — bags with tissue paper are best. New toys under 300 pesos each, and new clothes and shoes for boys and girls aged 3–13 (most are 5–12).','Por favor no envolver — mejor bolsas con papel de china. Juguetes nuevos de menos de 300 pesos, ropa y zapatos nuevos para niños y niñas de 3 a 13 años (la mayoría de 5 a 12).'),
('help_sponsor','Choose a family profile and commit to a monthly donation for their particular needs. Follow their journey, get to know them and watch your support bless their lives.','Elige el perfil de una familia y comprométete con un donativo mensual para sus necesidades. Acompaña su historia, conócelos y mira cómo tu apoyo bendice sus vidas.'),
('volunteer_intro','We rely on volunteers every week and are grateful for any assistance you can offer. Complete the form below to stay up to date — we''ll add you to our volunteers'' WhatsApp group.','Dependemos de voluntarios cada semana y agradecemos cualquier ayuda. Completa el formulario para mantenerte informado — te agregaremos a nuestro grupo de WhatsApp de voluntarios.'),
('volunteer_tagline','Be the sunshine during dark days.','Sé la luz en los días oscuros.'),
('donate_intro','Cash donations are always gratefully received and go a long way — we can often arrange discounts on food and necessities when paying by cash. Please reference your donation as BOL. We also accept cash at any drop-off location.','Los donativos en efectivo siempre son bienvenidos y rinden mucho — a menudo conseguimos descuentos en alimentos al pagar en efectivo. Por favor usa la referencia BOL. También recibimos efectivo en cualquier punto de entrega.'),
('dropoff_intro','Huge thanks to these businesses who generously accept your donations at the following locations.','Muchas gracias a estos negocios que generosamente reciben tus donativos en las siguientes ubicaciones.'),
('contact_address','Av. 90 between Calles 16 & 18, Ejido, Playa del Carmen','Av. 90 entre Calles 16 y 18, Ejido, Playa del Carmen'),
('contact_email','axansolustra@gmail.com','axansolustra@gmail.com'),
('contact_whatsapp','','');

insert into public.dropoffs (name,address,phone,map_url,sort_order) values
('Roma Spaghetti','Av. CTM 50, Zazil-Há','','https://maps.app.goo.gl/8YQmdjDz48boMDFH6',0),
('Buzo''s Restaurant','Calle 26, between Av. 25 & 30, Centro','','https://maps.app.goo.gl/2reBbPo219KUkaC49',1),
('Bunker CoWorking','Av. 10 & Calle 38, Local 12 y 13, Zazil-Há','','https://maps.app.goo.gl/pRStxFrRjDbTkw6u8',2),
('India Jones','Av. 5 & Calle 30','','https://maps.app.goo.gl/4pjgX94EAL1M3ekf8',3),
('Bric Spa','Calle 38, Pueblito Escondido Building, between Calle Flamingos & Calle Albatros','+52 (984) 113-7861','https://maps.app.goo.gl/Z1WsuLiDcueu6bGb7',4),
('Ageless Clinic','Diagonal Avenue Local Aviation 2A MZA 29, LT 4, Playacar Phase II','','',5),
('Century 21','Av. CTM & Av. 35, Colosio','','',6),
('Breath of Life HQ','Av. 90 between Calles 16 & 18, Ejido','','',7);

insert into public.volunteer_needs (title_en,title_es,desc_en,desc_es,sort_order) values
('Despensa packing','Armado de despensas','Help package food and basic necessities for local families.','Ayuda a armar paquetes de alimentos y artículos básicos para familias.',0),
('Garden sales','Ventas de garaje','Sort, price and sell donated items to raise funds.','Clasifica, pon precio y vende artículos donados para recaudar fondos.',1),
('Holiday celebrations','Celebraciones navideñas','Support our Christmas and Día de Reyes celebrations for children.','Apoya nuestras celebraciones de Navidad y Día de Reyes para niños.',2),
('Host a toy drive','Organiza una colecta','Host a collection box at your business or meeting.','Coloca una caja de colecta en tu negocio o reunión.',3);

insert into public.donation_methods (title_en,title_es,details_en,details_es,link,sort_order) values
('Stripe (card)','Stripe (tarjeta)','Donate securely by credit or debit card.','Dona de forma segura con tarjeta de crédito o débito.','https://buy.stripe.com/00g7sy5O9aJRgdafYY',0),
('PayPal — USA & Canada tax purposes','PayPal — deducible en EE.UU. y Canadá','For USA & Canada tax-deductible donations, please give through this PayPal link.','Para donativos deducibles en EE.UU. y Canadá, usa este enlace de PayPal.','https://www.paypal.com/ncp/payment/5DS8TXGHLDVL2',1),
('OXXO / Banco Azteca','OXXO / Banco Azteca','Michele Avila Mendoza · Card: 4027 6661 1819 3043 · CLABE 127694013013508192','Michele Avila Mendoza · Tarjeta: 4027 6661 1819 3043 · CLABE 127694013013508192','',2),
('Wise / Mercado Pago transfer','Transferencia Wise / Mercado Pago','Mercado Pago W · CLABE 722969010176925651','Mercado Pago W · CLABE 722969010176925651','',3);