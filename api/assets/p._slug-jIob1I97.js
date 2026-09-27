import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/p.$slug.tsx
var $$splitComponentImporter = () => import("./p._slug-CH2Ez7tt.js");
var Route = createFileRoute("/p/$slug")({
	head: ({ params }) => ({
		meta: [
			{ title: `${params.slug.replace(/-/g, " ")} — Breath of Life PDC` },
			{
				name: "description",
				content: "Breath of Life PDC community page."
			},
			{
				property: "og:title",
				content: `${params.slug} — Breath of Life PDC`
			},
			{
				property: "og:description",
				content: "Breath of Life PDC community page."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: `https://breathoflifepdc.org/p/${params.slug}`
			}
		],
		links: [{
			rel: "canonical",
			href: `https://breathoflifepdc.org/p/${params.slug}`
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
