import{r as C,j as e,u as g}from"./index-29a4c0e2.js";const x="/assets/agritech-96bbb33f.png",f="/assets/fairsplit-3e21871f.png";const P=11.4,A=[{id:"123456765111",name:"AgriTech",image:x,link:"https://devfolio.co/projects/agritech-0713",subtitle:"Crowd Funding for Farmers",techStack:["ReactJs","NodeJs","ExpressJs","MongoDB","BlockChain","Google Cloud"],description:`
      Crowd funding platform for farmers.
      Transactions that are made secure using Blockchain.
      Ecommerce facilities to save time.
      Introduction of our own Crypto Token 'KissanCoins' (KCO)
      ERC20 tokens with payment gateway integration.
    `},{id:"123456765222",name:"FairSplit",image:f,link:"https://fairsplit.azurewebsites.net",subtitle:"Pay Dept, Pay Fair",techStack:["ReactJs","NodeJs","ExpressJs","MongoDB","Azure"],description:`
      Built FairSplit, a web application that modernized the maintaining of records of expenses.
      Can save 80% of your time and reduce 85% of your calculation.
      Beginner friendly Interface.
      Easy to use and setup.
      Responsive design with Azure servers reliability.
    `},{id:"123456765333",name:"FileSharer",image:"",link:"",subtitle:"Share with ease",techStack:["EJS","NodeJs","ExpressJs","Multer"],description:`
      Enhanced the ease of sharing a file privately.
      Available data capacity of 500 MB.
      Custom password protected link.
      No external database used.
    `}];function v({ele:r,id:a,active:s,fun:t,name:n,image:o,link:l,subtitle:d,techStack:m,description:j}){const u=(s==null?void 0:s.id)===a,h=g();function p(c){if(c){t(c);let i=h.fixed.clientHeight*P;i+=i*.07,h.el.scrollTop=i;return}t(null)}return e.jsx(e.Fragment,{children:u?e.jsxs("div",{className:"ProjectDisplayCard2 ActiveProject",children:[e.jsx("div",{className:"closeActiveProjectButton",children:e.jsx("div",{onClick:()=>{p(null)},children:"Close"})}),e.jsxs("div",{className:"ProjectCardHeadingA",children:[n," "]}),e.jsxs("div",{className:"ProjectCardSubheadingA",children:[d," "]}),l&&e.jsx("span",{className:"ProjectCardLinkA",children:e.jsx("a",{href:l,target:"_blank",children:"Go to link"})}),e.jsx("div",{className:"ProjectCardDescriptionA",children:j}),e.jsx("div",{className:"ProjectCardTechStackA",children:m.map((c,i)=>e.jsx("div",{children:c},"EACHCADDESCRIPTION"+a+i))}),e.jsx("div",{className:"ProjectCardImagesA",children:e.jsx("img",{src:o,alt:"IMAGE NOT AVAILBLE"})})]}):e.jsxs("div",{onClick:()=>{p(r)},className:"ProjectDisplayCard1 PCdisplay",children:[e.jsx("div",{className:"ProjectCardHeading",children:n}),e.jsx("div",{className:"ProjectCardSubheading",children:d}),e.jsx("div",{className:"ProjectCardImages",children:e.jsx("img",{src:o,alt:"IMAGE NOT AVAILBLE"})})]})})}function E(){const[r,a]=C.useState(null);return e.jsx("div",{className:"ProjectsMainWrapper",children:e.jsxs("div",{className:"ProjectCardsDisplayArea",children:[A.map((s,t)=>e.jsx(v,{ele:s,active:r,fun:a,...s},"EACHPROJECTCARDELEMENT+"+t)),r&&e.jsx("div",{onClick:()=>a(null),className:"FadedBG"})]})})}export{E as default};
