(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Peter Griffin",image:"https://www.thoughtco.com/thmb/H9V_z_oYhbKldDJJUL53tVN36cQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/peter_2008_v2F_hires1-56a00f083df78cafda9fdcb6.jpg",occupation:"Happy-Go-Lucky Toy Factory Worker",location:"Quahog, Rhode Island"},{id:2,name:"Lois Griffin",image:"https://www.thoughtco.com/thmb/qL9NuJ5lmmRzMyFngIz9SyYjSiw=/520x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fGuy2006_Lois_f-56a00b003df78cafda9fc743.jpg",occupation:"Accomplished piano player and singer",location:"Quahog, Rhode Island"},{id:3,name:"Stewie Griffin",image:"https://www.thoughtco.com/thmb/fc5QH6AXdNtQRwuaQevxSSiwp1k=/520x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fGuy2006_Stewie1_f-56a00b003df78cafda9fc746.jpg",occupation:"schemes many times to destroy Lois",location:"Quahog, Rhode Island"},{id:4,name:"Quagmire",image:"https://www.thoughtco.com/thmb/1k4LHSdZPiQNnbxMXT_xcXwRX24=/475x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fGuyQuagmireArt_v1fa-57a96bf33df78cf459bb222a.jpg",occupation:"airline pilot",location:"Quahog, Rhode Island"},{id:5,name:"Cleveland Brown",image:"https://www.thoughtco.com/thmb/9hDbpua-5jQG7pH_c-16yF5H0F4=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cleveland_v2Fb080309-56a00cf55f9b58eba4aead78.jpg",occupation:"TV show Host. The Cleveland Show",location:"Stoolbend, Virginia"},{id:6,name:"Joe Swanson",image:"https://www.thoughtco.com/thmb/yvYr2GGwOCeBdqj3wwFMJemQhLA=/2550x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cacx01_061_03b_0337_hires2-56a010075f9b58eba4aeb9c5.jpg",occupation:"police officer",location:"Quahog, Rhode Island"},{id:7,name:"Brian Griffin",image:"https://www.thoughtco.com/thmb/FUY-2FbrfxnQVqOVxVEN5yT5Hvo=/653x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/brian_2008_v2F-56a00c1e5f9b58eba4aea7e1.jpg",occupation:"police officer",location:"Quahog, Rhode Island"},{id:8,name:"Meg Griffin",image:"https://www.thoughtco.com/thmb/c1E6x-PbsmB-jBtA9RZED2qBIAU=/653x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/meg_2008_v2F-56a00c203df78cafda9fcd70.jpg",occupation:"police officer",location:"Quahog, Rhode Island"},{id:9,name:"Peter Griffin and Remote Control",image:"https://www.thoughtco.com/thmb/TxJRhQZf5zNAbMx8oPaOyTJQi0U=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/familyGuy_Peter_remote_72-56a00a585f9b58eba4ae9b36.jpg",occupation:"police officer",location:"Quahog, Rhode Island"},{id:10,name:"Chris Griffin Air Guitar",image:"https://www.thoughtco.com/thmb/i3d5fK8voLKZ7c2bglQZ5PUfrlY=/368x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/famguychris_noGuitar_05_72-56a00a5d3df78cafda9fc0b3.jpg",occupation:"police officer",location:"Quahog, Rhode Island"}]},,,,,,,,function(e,a,t){e.exports=t(19)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),o=t.n(c),i=t(3),r=t.n(i),n=t(4),s=t(5),l=t(7),m=t(6),h=t(8);t(15);var f=function(e){return o.a.createElement("div",{className:"wrapper"},e.children)};t(16);var u=function(e){return o.a.createElement("div",{className:"img-container",onClick:function(){return e.clickedCharacter(e.id)}},o.a.createElement("img",{className:"image-thumbnail",alt:e.name,src:e.image}))},p=t(1);t(17);var d=function(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid mb-0"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4"},"Family Guy Clicky Game"),o.a.createElement("p",{className:"lead"},"Character cards will randomly change position whenever clicked. Click each character only once. Remember the cards that have been already been clicked. If you click a character more than once then you lose")))},b=function(e){function a(){var e,t;Object(n.a)(this,a);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={friends:p,score:0,highScore:0,clickedArray:[],message:""},t.clickedCharacter=function(e){var a=t.shuffleArray(p);t.setState({friends:a}),t.state.clickedArray.includes(e)?t.setState({score:0,clickedArray:[],message:"Game Over try again!"}):t.setState({clickedArray:t.state.clickedArray.concat([e]),score:t.state.score+1,message:"Correct"}),t.state.score>t.state.highScore&&t.setState({highScore:t.state.score})},t.shuffleArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),c=[e[t],e[a]];e[a]=c[0],e[t]=c[1]}return e},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-dark bg-primary sticky-top"},o.a.createElement("a",{className:"navbar-brand",href:"https://ericjosprice.github.io/Clicky-Game/"},"Clicky-Game"),o.a.createElement("h3",null,this.state.message),o.a.createElement("h3",null,"Your Score: ",this.state.score),o.a.createElement("h3",null,"High Score: ",this.state.highScore)),o.a.createElement(d,null),o.a.createElement(f,null,p.map(function(a){return o.a.createElement(u,{id:a.id,key:a.id,name:a.name,image:a.image,occupation:a.occupation,location:a.location,clickedCharacter:e.clickedCharacter})})))}}]),a}(o.a.Component);t(18);r.a.render(o.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.7c83681b.chunk.js.map