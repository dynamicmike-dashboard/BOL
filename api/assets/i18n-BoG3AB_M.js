import { createContext, useContext, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/lib/i18n.tsx
var LangContext = createContext({
	lang: "en",
	setLang: () => {},
	t: (en) => en
});
function LangProvider({ children }) {
	const [lang, setLangState] = useState("en");
	useEffect(() => {
		const saved = localStorage.getItem("bol-lang");
		if (saved === "en" || saved === "es") setLangState(saved);
	}, []);
	useEffect(() => {
		document.documentElement.lang = lang;
	}, [lang]);
	const setLang = (l) => {
		setLangState(l);
		localStorage.setItem("bol-lang", l);
	};
	const t = (en, es) => lang === "es" ? es || en : en || es;
	return /* @__PURE__ */ jsx(LangContext.Provider, {
		value: {
			lang,
			setLang,
			t
		},
		children
	});
}
var useLang = () => useContext(LangContext);
//#endregion
export { useLang as n, LangProvider as t };
