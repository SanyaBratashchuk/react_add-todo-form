(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a.n(n),s=a(9),r=a(3),o=a(1),c=(a(14),a(7)),l=a.n(c),d=a(0),u=function(e){var t=e.todo,a=t.userId,n=t.id,i=t.title,s=t.completed;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:i}),Object(d.jsxs)("p",{className:"info",children:["User ID:",a,Object(d.jsx)("br",{}),n,Object(d.jsx)("br",{}),s?"Task is completed":"Task is not completed"]})]})},m=function(e){var t=e.todos;return Object(d.jsx)("ul",{className:"todoList",children:t.map((function(e){return Object(d.jsx)("li",{className:l()("todoList__item",{"todoList__item--g":e.completed,"todoList__item--r":!e.completed}),children:Object(d.jsx)(u,{todo:e})},e.id)}))})},h=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],p=a(8),g=function(e){var t,a=0,n=Object(p.a)(e);try{for(n.s();!(t=n.n()).done;){" "===t.value&&a++}}catch(i){n.e(i)}finally{n.f()}return e.length===a},j=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),c=Object(r.a)(i,2),l=c[0],u=c[1],p=Object(o.useState)(h),j=Object(r.a)(p,2),y=j[0],f=j[1],v=Object(o.useState)(""),x=Object(r.a)(v,2),O=x[0],S=x[1],w=Object(o.useState)(""),k=Object(r.a)(w,2),z=k[0],C=k[1],_=function(e){if(e.preventDefault(),g(a)||!l)return a&&!g(a)||S("enter a title please"),void(l||C("choose a user please"));S(""),C(""),function(){var e={id:y.length+1,userId:l,title:a,completed:!1},t=Object(s.a)(y);t.push(e),f(t)}(),n(""),u(0)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{todos:y}),Object(d.jsxs)("form",{className:"addForm",onSubmit:function(e){_(e)},children:[Object(d.jsxs)("label",{htmlFor:"title",className:"error",children:[(g(a)||!a)&&"".concat(O),Object(d.jsx)("input",{id:"title",type:"text",name:"title",placeholder:"title",className:"addForm__input",value:a,onChange:function(e){!function(e){(function(e,t){if(e.length<=t.length)return!0;var a="qwertyuiopasdfghjklzxcvbnm\u0439\u0446\u0443\u043a\u0435\u043d\u0433\u0448\u0449\u0437\u0445\u0457\u0444\u0456\u0432\u0430\u043f\u0440\u043e\u043b\u0434\u0436\u0454\u044f\u0447\u0441\u043c\u0438\u0442\u044c\u0431\u044e1234567890 ";return a.includes(e[e.length-1])||a.toUpperCase().includes(e[e.length-1])})(e.target.value,a)&&n(e.target.value)}(e)}})]}),Object(d.jsxs)("label",{htmlFor:"userId",className:"error",children:[!l&&"".concat(z),Object(d.jsxs)("select",{id:"userId",name:"userID",value:l,className:"addForm__input",onChange:function(e){return u(+e.target.value)},children:[Object(d.jsx)("option",{value:0,children:"choose a user"}),b.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name})}))]})]}),Object(d.jsx)("button",{type:"submit",className:"addForm__button",children:"Add"})]})]})};i.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0673d042.chunk.js.map