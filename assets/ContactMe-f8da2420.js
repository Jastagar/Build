import{j as e}from"./index-29a4c0e2.js";function t({label:n}){return e.jsxs("fieldset",{children:[e.jsxs("label",{htmlFor:"InputIdFor"+n,children:[n,":"]}),e.jsx("input",{id:"InputIdFor"+n})]})}function s(){function n(){console.log("handled")}return e.jsxs("div",{className:"ContactFormContainer",children:[e.jsxs("form",{className:"MainForm",onSubmit:n,children:[e.jsx(t,{label:"Name"}),e.jsx(t,{label:"Email"}),e.jsx(t,{label:"Subject"}),e.jsxs("fieldset",{children:[e.jsx("label",{htmlFor:"InputIdForMessage",children:"Message:"}),e.jsx("textarea",{id:"InputIdForMessage"})]})]}),e.jsx("div",{className:"SocialIcons"})]})}function a(){return e.jsx("div",{className:"ContactMeHeading",children:"Contact Me"})}function c(){return e.jsxs("section",{id:"contact",children:[e.jsx(a,{}),e.jsx(s,{})]})}export{c as default};