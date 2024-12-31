import{n as d,r as c,j as e,L as b}from"./index-CcZlLt4-.js";import{b as o,c as f,d as j,e as y,f as v,g as w,h as N,i as k,j as C,F as A}from"./index-BmwoJ5To.js";import{I as T,b as I}from"./index-03iF0xOg.js";const u="/Tami_city/assets/imageBg5-2_Sw_hpZ.jpg",F="/Tami_city/assets/image10%20new-D8KFFymh.jpg";function z(){const t=d(),[s,r]=c.useState("sustainability"),[n,l]=c.useState(0),i=[u,F],a=x=>{r(x)},m=e.jsxs("div",{className:"px-5 content-slide sm:px-10",children:[e.jsx("h2",{className:"mb-4 text-3xl font-bold leading-tight sm:text-[2rem] text-secondary",children:"Our Commitment to Sustainability"}),e.jsx("p",{className:"mb-4 text-sm tracking-tight sm:text-base",children:"At Tami City, sustainability is at the heart of everything we do. As a company that exports high-quality agricultural products to international markets, we recognize our responsibility to not only provide exceptional products but to do so in a way that positively impacts the environment, society, and the global food system."}),e.jsx("p",{className:"text-sm tracking-tight sm:text-base",children:"We are committed to implementing sustainable practices across every aspect of our business from the way we source and grow our products to how we manage our supply chains and engage with local communities. Our goal is to create long-term value not just for our customers, but for the planet and future generations."})]}),g=e.jsxs("div",{className:"px-5 content-slide sm:px-10",children:[e.jsx("h2",{className:"mb-4 text-2xl font-bold leading-tight sm:text-[2rem] text-secondary",children:"Our Products"}),e.jsx("p",{className:"mb-4 text-sm tracking-tight sm:text-base",children:"At Tami City, we offer a diverse range of high-quality, sustainably sourced agricultural products designed to meet the growing demands of global markets. Our products include Cassava Flour, Cocoa, Cashew Nuts, and Plantain Flour each crafted with care and expertise to provide exceptional quality and nutritional benefits."}),e.jsx("p",{className:"text-sm tracking-tight sm:text-base",children:"We are committed to sustainable sourcing and ensuring that our products meet the highest standards of excellence. By supporting local farmers and implementing ethical practices, we strive to make a positive impact on both the environment and the communities we work with."})]});return c.useEffect(()=>{const x=setInterval(()=>{r(p=>p==="sustainability"?"products":"sustainability")},5e3);return()=>clearInterval(x)},[]),c.useEffect(()=>{s==="sustainability"?l(0):s==="products"&&l(1)},[s]),e.jsx("div",{children:e.jsxs("section",{className:"flex flex-col gap-5 mt-12 md:flex-row lg:gap-8",children:[e.jsxs("div",{className:"relative flex-1",children:[e.jsx("div",{className:`relative w-full h-[50vh] lg:h-[60vh] overflow-hidden transition-transform duration-1000 ease-in-out ${s==="sustainability"?"transform-x-[-100%]":"transform-x-0"}`,children:e.jsx("img",{src:i[n],alt:"Background",className:"absolute object-cover w-full h-full transition-opacity duration-1000 opacity-100"})}),e.jsxs("div",{className:"flex justify-center gap-6 mt-6 mb-10 lg:gap-10",children:[e.jsx("button",{onClick:()=>a("sustainability"),className:`h-8 w-8 text-white rounded-full ${s==="sustainability"?"bg-green-800":"bg-gray-300"}`,children:"1"}),e.jsx("button",{onClick:()=>a("products"),className:`h-8 w-8 text-white rounded-full ${s==="products"?"bg-green-800":"bg-gray-300"}`,children:"2"})]})]}),e.jsxs("div",{className:`flex-1 transition-transform duration-1000 ease-in-out ${s==="sustainability"?"transform-x-[-100%]":"transform-x-0"}`,children:[s==="sustainability"?m:g,s==="sustainability"&&e.jsxs("div",{className:"flex items-center w-full gap-3 px-10 mt-5 text-sm font-semibold rounded-md cursor-pointer lg:gap-5 text-secondary",onClick:()=>t("/about/sustainability"),children:[e.jsx(o,{size:35}),e.jsx("span",{className:"hover:underline",children:"Read More on Sustainability"})]}),s==="products"&&e.jsxs("div",{className:"flex items-center w-full gap-3 px-10 mt-10 text-sm font-semibold rounded-md cursor-pointer lg:gap-5 text-secondary",onClick:()=>t("/products"),children:[e.jsx(o,{size:30}),e.jsx("span",{className:"hover:underline ",children:"Read More on Products"})]})]})]})})}function S(){const t=d(),s=n=>{t(n)},r=({icon:n,title:l,description:i,onClick:a,iconColor:m})=>e.jsxs("div",{className:"flex items-start gap-6 py-4 mb-8 transition-all shadow-lg cursor-pointer hover:scale-105 focus-area-card",onClick:a,children:[e.jsx("div",{className:`mb-4 text-4xl bg-white px-5 py-5 rounded-full ${m}`,children:n}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-primary",children:l}),e.jsx("p",{className:"mt-2",children:i}),e.jsx("span",{className:"block mt-3 text-primary border rounded-md w-[8rem] px-6 py-1 border-primary cursor-pointer",onClick:a,children:"Read More"})]})]});return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"flex-col gap-6 px-6 mb-8 text-white transition-all shadow-lg py-[3rem] bg-green-950 bg-items-start ",children:[e.jsxs("div",{className:"mb-6 text-center",children:[e.jsx("h2",{className:"text-[2.5rem] font-semibold max-md:text-[2rem]",children:"Our Areas of Focus"}),e.jsxs("p",{className:"mt-4 text-[1rem]  max-md:text-[0.9rem] md:px-[10rem] max-md:px-4",children:["At TamiCity, we are committed to revolutionizing global agriculture through innovation, sustainability, and empowerment. Explore our key focus areas that drive our mission across continents."," ",e.jsx("span",{className:"cursor-pointer text-primary",onClick:()=>t("/focus-areas"),children:"Read More"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 sm:px-12 text-[0.9rem] leading-6 ",children:[e.jsx(r,{icon:e.jsx(f,{}),title:"Promoting Sustainable Development",description:"At TamiCity, we are committed to fostering sustainable agricultural practices that ensure long-term growth and resilience for communities worldwide.",onClick:()=>s("/sustainable-development"),iconColor:"text-primary"}),e.jsx(r,{icon:e.jsx(j,{}),title:"Enhancing Livelihoods",description:"We aim to improve the quality of life for smallholder farmers worldwide by providing access to resources, education, and market access.",onClick:()=>s("/empowering-livelihoods"),iconColor:"text-primary"}),e.jsx(r,{icon:e.jsx(y,{}),title:"Improving Nutritional Outcomes",description:"At TamiCity, we focus on increasing the availability of nutritious, locally-adapted foods to ensure better health and nutrition globally.",onClick:()=>s("/nutritional-outcomes"),iconColor:"text-primary"}),e.jsx(r,{icon:e.jsx(v,{}),title:"Innovating for Crop Resilience",description:"We are developing resilient crops that can withstand pests, diseases, and climate change to ensure global food security.",onClick:()=>s("/crop-resilience"),iconColor:"text-primary"})]})]})})}const W=[{title:"Innovating for a Sustainable Future",text:"At TamiCity, we aim to revolutionize agriculture to ensure food security, environmental sustainability, and community empowerment."},{title:"Supporting Local Farmers",text:"Our goal is to empower farmers by providing them with the resources and expertise to succeed in the global marketplace."},{title:"Building Resilient Food Systems",text:"Through innovative practices and collaborations, we strive to strengthen food systems worldwide, making them more resilient to challenges."},{title:"Transforming Agricultural Practices",text:"Our advanced agricultural techniques are shaping the future of farming, promoting environmental responsibility and higher yields."},{title:"Promoting Global Nutrition",text:"By supporting sustainable farming practices, we enhance food production, aiming to improve global nutrition and health."}],P="/Tami_city/assets/20241227_093917-D0JUJ4-Q.jpg",q="/Tami_city/assets/imageBg6-DNjN6Rz9.jpg",O="/Tami_city/assets/imageBg4-D6CRaXA4.jpg",D="/Tami_city/assets/imageBg2-DsD-Us8b.jpg",R=()=>{const t=d(),[s,r]=c.useState(0),n=[P,q,O,u,D];c.useEffect(()=>{const i=setInterval(()=>{r(a=>(a+1)%n.length)},3500);return()=>clearInterval(i)},[]);const l=W[s]||{};return e.jsxs("div",{children:[e.jsxs("div",{className:"relative h-[25rem] md:h-[30rem] lg:h-[40rem] overflow-hidden z-0",children:[e.jsx("div",{className:"absolute w-full h-full transition-all duration-700 bg-center bg-no-repeat bg-cover",style:{backgroundImage:`url(${n[s]})`,height:"100%",width:"100%"}}),e.jsx("div",{className:"absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 max-md:mt-8",children:e.jsxs("div",{className:"text-center text-white px-5 md:px-10 lg:px-[12rem]",children:[e.jsx("h1",{className:"text-3xl sm:text-[2.3rem] tracking-wide lg:text-[3rem] py-5 font-bold leading-9",children:l.title||"Default Title"}),e.jsx("p",{className:"text-sm sm:text-[0.9rem] lg:text-[1rem] mb-4 leading-8 sm:leading-5 sm:mb-5 tracking-wide md:py-5 max-md:mt-5",children:l.text||"Default description text goes here."}),e.jsxs("div",{className:"flex items-center justify-center w-full max-w-[18rem] mx-auto text-center text-secondary font-semibold rounded-md bg-primary cursor-pointer max-md:my-5",onClick:()=>t("/about"),children:[e.jsx("span",{className:"px-5 py-2 text-sm sm:text-base",children:"Learn More"}),e.jsx(o,{size:20})]})]})})]}),e.jsx("div",{children:e.jsxs("div",{className:"my-[3rem] text-center bg-gray-50 py-3",children:[e.jsxs("h1",{className:"text-[1.8rem] md:text-[2rem] leading-[2.5rem] my-10 px-[5rem]",children:[" Africa’s Leading Agro-Exporter, ",e.jsx("strong",{children:"Connecting Global Markets"}),"  "]}),e.jsxs("p",{className:"px-[2rem] md:px-[10rem] leading-[2.3rem] text-[1.1rem]",children:["TamiCity is an agro-exportation company dedicated  to transforming the agricultural landscape  ",e.jsx("br",{}),"by exporting high-quality cassava and yam-based products. We",e.jsxs("strong",{children:[" support local farmers, ",e.jsx("br",{})," enhance food security, and promote sustainable farming practices."]})," While our focus begins in Africa, ",e.jsx("br",{}),"our impact extends globally, ",e.jsx("strong",{children:"connecting agricultural potential with international markets."})]}),e.jsxs("div",{className:"flex items-center justify-center w-full max-w-[18rem] mx-auto text-center text-secondary font-semibold rounded-md bg-primary cursor-pointer max-md:my-5 my-10",onClick:()=>t("/about"),children:[e.jsx("span",{className:"px-5 py-2 text-sm sm:text-base",children:"Learn More"}),e.jsx(o,{size:20})]})]})})]})},B="/Tami_city/assets/image9-AMKmvSDR.jpg",M="/Tami_city/assets/image7-DOaSE4pz.jpeg",h="/Tami_city/assets/imageBg-C0voOjy4.jpg";function E(){const t=d(),s=[{title:"What We Do",description:"At TamiCity, we connect farmers, suppliers, and buyers to create a transparent and efficient marketplace. Our focus is on innovation and sustainability. We build long-term partnerships to shape the future of agriculture.",link:"/about",image:M},{title:"Export Process",description:"Our export process ensures a smooth experience, handling everything from logistics to customs clearance. We prioritize reliability and transparency. Your order reaches its destination efficiently and on time.",link:"/export/how-it-works",image:B},{title:"Our Products",description:"We offer premium, sustainably sourced agricultural products like cassava, cocoa, cashew nuts, and plantain flour. Each product meets international quality standards. Our goal is to provide consistent, top-tier products for global markets.",link:"/products",image:h}];return e.jsx(e.Fragment,{children:e.jsx("section",{className:"grid my-10 bg-gray-100 place-content-center ",children:e.jsxs("div",{className:"",children:[e.jsx("h2",{className:"px-10 mt-10 mb-3 text-3xl font-semibold max-md:px-10 text-secondary",children:"Who We Are"}),e.jsx("h3",{className:"px-10 mb-8 font-bold text-gray-600 text-[3rem] max-md:text-[2rem] max-md:px-10 ",children:"Our World - What’s Happening"}),e.jsxs("div",{className:"flex gap-4 max-md:grid ",children:[e.jsxs("div",{className:"relative flex-1 lg:w-1/2",style:{backgroundImage:`url(${s[0].image})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"absolute inset-0 bg-black rounded-lg opacity-40 "}),e.jsxs("div",{className:"relative  text-white rounded-lg  sm:mt-[13rem] sm:mb-[1rem]",children:[e.jsx("p",{className:" text-[1rem] leading-6 max-md:mt-20 px-[2rem] ",children:s[0].description}),e.jsxs("div",{className:"flex items-center gap-4 lg:gap-5 w-full text-white font-semibold rounded-md  text-[1rem] cursor-pointer px-[2rem] ",onClick:()=>t("/about/sustainability"),children:[e.jsx(o,{size:40}),e.jsx("span",{className:"hover:underline max-md:py-[2rem]",children:"Read More here"})]})]})]}),e.jsx("div",{className:"flex-1 w-full",children:e.jsxs("div",{className:"grid w-full h-full gap-4 max-md:w-full lg:w-full",children:[e.jsxs("div",{className:"relative w-full h-full",style:{backgroundImage:`url(${s[1].image})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"absolute inset-0 bg-black rounded-lg opacity-40"}),e.jsxs("div",{className:"relative max-md:p-6 text-white rounded-lg  max-md:pt-[5rem] max-md:pb-[3rem] px-[1rem] md:top-[4rem] w-full ",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold ",children:s[1].title}),e.jsx("p",{className:" md:text-[0.6rem]",children:s[1].description}),e.jsxs("div",{className:"flex gap-5 items-center max-md:gap-2 lg:gap-5  text-white font-semibold rounded-md max-md:mt-3 md:text-[0.6rem] cursor-pointer",onClick:()=>t("/about/sustainability"),children:[e.jsx(o,{size:40}),e.jsx("span",{className:"hover:underline",children:"Read More about our Export Process"})]})]})]}),e.jsxs("div",{className:"relative w-full h-full",style:{backgroundImage:`url(${s[2].image})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"absolute inset-0 w-full bg-black rounded-lg opacity-40"}),e.jsxs("div",{className:"relative max-md:p-6 text-white rounded-lg max-md:mt-[10rem] px-[2rem] md:top-[3rem] w-full ",children:[e.jsx("h2",{className:"mb-2 text-4xl font-semibold md:text-3xl",children:s[2].title}),e.jsxs("div",{className:"flex items-center gap-4  w-full text-white font-semibold rounded-md max-md:mt-10 text-[1.1rem] cursor-pointer relative",onClick:()=>t("/about/sustainability"),children:[e.jsx(o,{size:40}),e.jsx("span",{className:"hover:underline",children:"Read on our Product"})]})]})]})]})})]})]})})})}const _=()=>{const t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("footer",{className:"w-full py-8 text-white ",children:[e.jsx("div",{className:"container text-[0.95rem] ",children:e.jsxs("div",{className:"grid md:grid-cols-4 w-screen  bg-green-950 px-[2rem] py-[5rem] ",children:[e.jsxs("div",{className:"mr-8 md:border-r border-r-gray-500",children:[e.jsx("div",{children:e.jsx("img",{src:T,alt:"",className:"w-[10rem]"})}),e.jsxs("div",{class:"contact-info mt-6 py-5 leading-[3rem] ",children:[e.jsx("h2",{className:"font-bold text-[1.2rem]",children:"Tamicity Headquarters"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Address:"})," Lagos State, Nigeria."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tel:"})," +234 8107843355, "]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Mobile:"})," 09092451507"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Email:"})," ",e.jsx("a",{href:"mailto:iita@cgiar.org",children:"info@TamiCity.com"})]})]}),e.jsx("hr",{className:"mt-5 border-t-2 border-gray-300 opacity-15 md:hidden"})]}),e.jsxs("div",{className:"flex-1 md:border-r md:border-r-gray-500 mr-9 ",children:[e.jsxs("div",{className:"leading-8 ",children:[e.jsx("h3",{className:"mb-2 text-xl font-semibold max-md:mt-10",children:"Products"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#cassava",className:"hover:underline",children:"Cassava"})}),e.jsx("li",{children:e.jsx("a",{href:"#cocoa",className:"hover:underline",children:"Cocoa"})}),e.jsx("li",{children:e.jsx("a",{href:"#cashew",className:"hover:underline",children:"Cashew Nuts"})}),e.jsx("li",{children:e.jsx("a",{href:"#plantain",className:"hover:underline",children:"Plantain Flour"})}),e.jsx("li",{children:e.jsx("a",{href:"#others",className:" hover:underline",children:"Other Agricultural Products"})})]})]}),e.jsx("hr",{className:"mt-5 border-t-2 border-gray-300 opacity-15 md:hidden"}),e.jsxs("div",{className:"my-20 leading-8 max-md:mt-10 ",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Resources"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#news",className:"hover:underline",children:"News"})}),e.jsx("li",{children:e.jsx("a",{href:"#blog",className:"hover:underline",children:"Blog"})})]})]})]}),e.jsx("hr",{className:"mt-5 border-t-2 border-gray-300 opacity-15 md:hidden"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"leading-8 outline-none ",children:[e.jsx("h3",{className:"mb-2 text-xl font-semibold max-md:mt-10",children:"About Us"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#company",className:"hover:underline",children:"Company"})}),e.jsx("li",{children:e.jsx("a",{href:"#meet-team",className:"hover:underline",children:"Meet the Team"})}),e.jsx("li",{children:e.jsx("a",{href:"#careers",className:"hover:underline",children:"Careers"})}),e.jsx("li",{children:e.jsx("a",{href:"#contact-us",className:"hover:underline",children:"Contact Us"})}),e.jsx("li",{children:e.jsx("a",{href:"#partnerships",className:"hover:underline ",children:"Partnerships"})})]})]}),e.jsx("hr",{className:"mt-6 border-t-2 border-gray-300 opacity-15 md:hidden"})]}),e.jsxs("div",{className:"relative leading-8 border-gray-500 max-md:grid max-md:mt-10 md:pl-5 md:border-l ",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"Newsletter"}),e.jsx("p",{className:"mb-6",children:"Get TamiCity updates and industry news straight to your inbox."}),e.jsxs("div",{className:"grid gap-6 text-start",children:[e.jsx("input",{type:"email",placeholder:"name@company.com",className:"p-2 font-semibold border-2 border-gray-300 rounded-md text-secondary"}),e.jsx("button",{className:"px-5 py-1  rounded-md bg-primary text-secondary font-semibold w-[8rem]",children:"Subscribe"})]})]}),e.jsxs("div",{className:"mt-8 ",children:[e.jsxs("div",{className:"absolute flex gap-10 md:right-0 md:bottom-0 max-md:gap-6",children:[e.jsx("a",{href:"https://www.linkedin.com",className:"text-white hover:text-gray-300",children:e.jsx(w,{size:24})}),e.jsx("a",{href:"https://www.instagram.com",className:"text-white hover:text-gray-300",children:e.jsx(N,{size:24})}),e.jsx("a",{href:"https://twitter.com",className:"text-white hover:text-gray-300",children:e.jsx(k,{size:24})}),e.jsx("a",{href:"https://www.facebook.com",className:"text-white hover:text-gray-300",children:e.jsx(C,{size:24})})]}),e.jsx("div",{className:"fixed flex bg-white rounded-full shadow-lg cursor-pointer bottom-8 right-3 text-secondary",onClick:t,children:e.jsx(I,{size:35})})]})]})]})}),e.jsxs("div",{className:"flex max-md:flex-col-reverse justify-between py-3 md:items-center font-semibold bg-white text-secondary px-[2rem]",children:[e.jsx("p",{className:"py-4 text-gray-500",children:"© 2024 TamiCity. All rights reserved."}),e.jsxs("div",{className:"flex gap-5 md:px-5 ",children:[e.jsx("p",{children:"Privacy"}),e.jsx("span",{children:"Disclaimer"}),e.jsx("p",{children:"Terms of Service"})]})]})]})};function $(){const[t,s]=c.useState(null),r=[{question:"What is TamiCity?",answer:"TamiCity connects farmers, suppliers, and buyers to create a sustainable, transparent, and efficient marketplace for agricultural products."},{question:"How do I place an order?",answer:"You can place an order through our online platform by selecting the product and following the checkout process."},{question:"What is your shipping policy?",answer:"We offer international shipping and work with trusted logistics partners to ensure timely delivery."},{question:"Do you offer bulk discounts?",answer:"Yes, we offer discounts for bulk orders. Please contact our sales team for more information."},{question:"What products do you sell?",answer:"We sell a variety of agricultural products such as cassava, cocoa, cashew nuts, and plantain flour."},{question:"How can I contact customer support?",answer:"You can reach our customer support team via email or through our contact form on the website."}],n=d(),l=i=>{s(t===i?null:i)};return e.jsx("section",{className:"py-8 bg-gray-100 faq-section",children:e.jsxs("div",{className:"px-4 mx-auto sm:px-6 md:px-8",children:[e.jsx("h2",{className:"mb-6 text-3xl font-semibold text-center",children:"Frequently Asked Questions"}),e.jsx("div",{className:"w-full faq-list",children:r.slice(0,3).map((i,a)=>e.jsxs("div",{className:"mb-4  faq-item",children:[e.jsxs("div",{className:"flex items-center justify-between py-3 text-lg font-semibold transition-all border-b border-gray-300 rounded-md cursor-pointer sm:text-xl hover:bg-gray-50",onClick:()=>l(a),children:[e.jsx("span",{children:i.question}),e.jsx("span",{className:`transition-transform transform ${t===a?"rotate-180":""}`,children:e.jsx(A,{size:20})})]}),t===a&&e.jsx("div",{className:"px-2 pb-3 mt-2 text-gray-700",children:i.answer})]},a))}),e.jsx("div",{className:"mt-6 text-center",children:e.jsxs("div",{className:"flex items-center w-full gap-4 mt-10 text-sm font-semibold rounded-md cursor-pointer lg:gap-10 text-secondary",onClick:()=>n("/resources/FAQs"),children:[e.jsx(o,{size:35}),e.jsx("span",{className:"hover:underline",children:"Click to View All"})]})})]})})}function L(){return e.jsxs("section",{className:"relative pt-10 text-white",children:[e.jsx("div",{className:"absolute inset-0 bg-center bg-cover ",style:{backgroundImage:` url(${h})`}}),e.jsxs("div",{className:"relative container top-[3rem] px-6 py-10  rounded-xl",children:[e.jsx("h2",{className:"mb-4 text-3xl font-bold sm:text-3xl lg:text-5xl",children:"Meet Our Team"}),e.jsxs("p",{className:"max-w-3xl mb-6 text-[1.2rem] sm:text-[1rem] ",children:["Discover how Tamicity is driving innovation in agro-exportation.",e.jsx("div",{className:"flex mt-10",children:e.jsx(b,{to:"/contact",className:`px-6 py-3 text-xs text-secondary  font-bold transition duration-300 rounded-[3rem] \r
             bg-gradient-to-r from-primary via-yellow-400 to-yellow-500 \r
             hover:from-yellow-500 hover:to-primary \r
             shadow-lg hover:shadow-2xl`,children:"Contact Us"})})]})]})]})}const Y=()=>e.jsxs("div",{className:"grid min-h-screen text-[1rem] overflow-x-hidden font-sans",children:[e.jsx(R,{}),e.jsx(S,{}),e.jsx(z,{}),e.jsx(E,{}),e.jsx(L,{}),e.jsx($,{}),e.jsx(_,{})]});export{Y as default};
