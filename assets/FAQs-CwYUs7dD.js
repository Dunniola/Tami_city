import{r as i,j as e}from"./index-CcZlLt4-.js";import{F as c}from"./index-BmwoJ5To.js";function m(){const[a,r]=i.useState(null),o=[{question:"What is TamiCity?",answer:"TamiCity connects farmers, suppliers, and buyers to create a sustainable, transparent, and efficient marketplace for agricultural products."},{question:"How do I place an order?",answer:"You can place an order through our online platform by selecting the product and following the checkout process."},{question:"What is your shipping policy?",answer:"We offer international shipping and work with trusted logistics partners to ensure timely delivery."},{question:"Do you offer bulk discounts?",answer:"Yes, we offer discounts for bulk orders. Please contact our sales team for more information."},{question:"What products do you sell?",answer:"We sell a variety of agricultural products such as cassava, cocoa, cashew nuts, and plantain flour."},{question:"How can I contact customer support?",answer:"You can reach our customer support team via email or through our contact form on the website."}],n=s=>{r(a===s?null:s)};return e.jsx("section",{className:"py-8 bg-gray-100 faq-section mt-10",children:e.jsxs("div",{className:"max-w-screen-lg px-4 mx-auto",children:[e.jsx("h2",{className:"mb-6 text-3xl font-semibold text-center",children:"Frequently Asked Questions"}),e.jsx("div",{className:"faq-list",children:o.map((s,t)=>e.jsxs("div",{className:"mb-4 faq-item",children:[e.jsxs("div",{className:"cursor-pointer flex justify-between items-center text-xl font-semibold",onClick:()=>n(t),children:[e.jsx("span",{children:s.question}),e.jsx("span",{className:`transition-transform transform ${a===t?"rotate-180":""}`,children:e.jsx(c,{})})]}),a===t&&e.jsx("div",{className:"mt-2 text-gray-700",children:s.answer})]},t))}),e.jsx("div",{className:"mt-6 text-center"})]})})}export{m as default};