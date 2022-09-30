
let scripts = {
	babel:"https://unpkg.com/@babel/standalone/babel.min.js",
	react:"https://unpkg.com/react@17/umd/react.development.js",
	reactDom:"https://unpkg.com/react-dom@17/umd/react-dom.development.js",
}

Object.values(scripts).map((itm)=>{
	document.write(unescape(`%3Cscript src='${itm}'%3E%3C/script%3E`));
});

