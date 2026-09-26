ALTER TABLE public.messages ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'new';
ALTER TABLE public.messages ADD CONSTRAINT messages_status_check CHECK (status IN ('new','seen','actioned'));
GRANT UPDATE ON public.messages TO authenticated;
CREATE POLICY "admin update" ON public.messages FOR UPDATE TO authenticated USING (has_role(auth.uid(),'admin')) WITH CHECK (has_role(auth.uid(),'admin'));
INSERT INTO public.content_blocks(key,value_en,value_es) VALUES ('notify_email','BreathOfLifePDC@gmail.com','BreathOfLifePDC@gmail.com') ON CONFLICT (key) DO NOTHING;