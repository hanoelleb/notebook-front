(this["webpackJsonpnotebook-front"]=this["webpackJsonpnotebook-front"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(20),l=n.n(i),r=(n(55),n(8)),c=n(4),s=n.n(c),u=(n(56),function(){return o.a.createElement("div",{className:s.a.home},o.a.createElement("h2",null,"Duly"),o.a.createElement("h3",null,"Welcome!"),o.a.createElement("p",null,"Duly is a place to store all your notes!"),o.a.createElement("p",null,"Whether just simple reminders for yourself or material for group study sessions, Duly can store it all."),o.a.createElement("p",null,"Create an account to save your notes!"),o.a.createElement("p",null,"Make your own notebooks now!"))}),p=n(12),h=n(3),d=[{user:null,token:localStorage.getItem("token")}],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{user:t.user,token:t.token};case"LOGOUT":return{user:null,token:""};default:return e}},b=n(11),g=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),i=n[0],l=n[1],c=Object(a.useState)(""),u=Object(r.a)(c,2),d=u[0],m=u[1],g=Object(a.useState)(!1),f=Object(r.a)(g,2),v=f[0],E=f[1],k=Object(b.c)();return!0!==v?o.a.createElement("div",null,o.a.createElement("form",{className:s.a.authform,onSubmit:function(e){e.preventDefault();var t={username:i,password:d};fetch("https://hanoelleb-notebook-api.herokuapp.com/sign-in",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){var t,n;localStorage.setItem("token",e.token),k((t=e.user,n=e.token,{type:"LOGIN",user:t,token:n})),E(!0)}))}},o.a.createElement("h2",null,"Sign in"),o.a.createElement("input",{type:"text",placeholder:"Username",name:"username",value:i,onChange:function(e){l(e.target.value)}}),o.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:d,onChange:function(e){m(e.target.value)}}),o.a.createElement("input",{type:"submit",value:"Sign in"})),o.a.createElement("p",{className:s.a.formlink},"Not a registered user?",o.a.createElement(p.b,{to:"/sign-up"}," Sign up!"))):o.a.createElement(h.a,{to:"/notes"})},f=n(31),v=n(22),E=n(23),k=n(9),j=n(25),O=n(24),y=n(32),S=n(49),C=n.n(S),_=0,N=[{index:_,topic:"Hello, world!",content:"Create your own notes!",id:1}];_++;var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return e.concat(t.data);case"EDIT":return 0==t.data.index?(console.log("here"),e.slice(e.length).concat(t.data).concat(e.slice(1))):e.slice(e.length).concat(e.slice(0,t.data.index)).concat(t.data).concat(e.slice(t.data.index+1));case"REMOVE":return e.filter((function(e){return e.index!=t.index}));default:return e}},x=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).handleEditorChange=function(e,t){a.setState({content:e})},a.handleChange=a.handleChange.bind(Object(k.a)(a)),a.handleEditorChange=a.handleEditorChange.bind(Object(k.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(k.a)(a)),a.handleClick=a.handleClick.bind(Object(k.a)(a)),a.state={topic:"",content:"",toggle:!1},a}return Object(E.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n={topic:this.state.topic,content:this.state.content};if(this.props.user){var a=this.props.user._id;this.props.token;fetch("https://hanoelleb-notebook-api.herokuapp.com/"+a+"/notes/add",{method:"POST",headers:{Authorization:this.props.token,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log(e.note),t.props.addNote(e.note),t.setState({topic:"",content:"",toggle:!1})}))}else this.props.addNote(n),this.setState({topic:"",content:"",toggle:!1})}},{key:"handleClick",value:function(){var e=!this.state.toggle;this.setState({toggle:e})}},{key:"render",value:function(){return this.state.toggle?o.a.createElement("div",null,o.a.createElement("button",{className:s.a.notebutton,onClick:this.handleClick},"Cancel"),o.a.createElement("form",{className:s.a.noteform,onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",placeholder:"Topic",name:"topic",value:this.state.topic,onChange:this.handleChange}),o.a.createElement(y.a,{name:"content",initialValue:"<p>Your notes...</p>",value:this.state.content,init:{height:250,width:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"},onEditorChange:this.handleEditorChange}),o.a.createElement("input",{className:s.a.notebutton,type:"submit",value:"Add note"}))):o.a.createElement("div",null,o.a.createElement("button",{className:s.a.notebutton,onClick:this.handleClick},"+Note"))}}]),n}(o.a.Component),D=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).renderNote=a.renderNote.bind(Object(k.a)(a)),a}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(this.props.user){var t="https://hanoelleb-notebook-api.herokuapp.com/"+this.props.user._id+"/notes";console.log(t),fetch(t,{headers:{Authorization:this.props.token,Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.notes.forEach((function(t){return e.props.addNote(t)}))}))}}},{key:"renderNote",value:function(e){return o.a.createElement(R,{note:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:s.a.notelist},o.a.createElement("h2",null,"Your notes!"),this.props.notes.map((function(t){return e.renderNote(t)})))}}]),n}(o.a.Component),T=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).handleEditorChange=function(e,t){a.setState({content:e})},a.handleChange=a.handleChange.bind(Object(k.a)(a)),a.handleEditorChange=a.handleEditorChange.bind(Object(k.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(k.a)(a)),a.handleRemove=a.handleRemove.bind(Object(k.a)(a)),a.handleClick=a.handleClick.bind(Object(k.a)(a)),a.state={topic:"",content:"",toggle:!1},a}return Object(E.a)(n,[{key:"componentDidMount",value:function(){this.setState({topic:this.props.note.topic,content:this.props.note.content})}},{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleRemove",value:function(){var e={id:this.props.note.id};if(this.props.removeNote(this.props.note),this.props.user){var t=this.props.user._id;this.props.token;fetch("https://hanoelleb-notebook-api.herokuapp.com/"+t+"/notes/remove",{method:"POST",headers:{Authorization:this.props.token,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}this.setState({topic:this.props.note.topic,content:this.props.note.content})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n={id:this.props.note.id,index:this.props.note.index,topic:this.state.topic,content:this.state.content};if(this.props.user){var a=this.props.user._id;this.props.token;fetch("https://hanoelleb-notebook-api.herokuapp.com/"+a+"/notes/update",{method:"POST",headers:{Authorization:this.props.token,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e.note.index=t.props.note.index,t.props.editNote(e.note),t.setState({toggle:!1})}))}else this.props.editNote(n),this.setState({toggle:!1})}},{key:"handleClick",value:function(){var e=!this.state.toggle;this.setState({topic:this.props.note.topic,content:this.props.note.content,toggle:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:s.a.note},o.a.createElement("h3",null,this.props.note.topic),C()(this.props.note.content),o.a.createElement("div",{className:s.a.buttons},o.a.createElement("button",{onClick:this.handleClick},this.state.toggle?"Cancel":"Edit"),o.a.createElement("button",{onClick:this.handleRemove},"Delete")),this.state.toggle?o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",placeholder:"Topic",name:"topic",value:this.state.topic,onChange:this.handleChange}),o.a.createElement(y.a,{name:"content",initialValue:"<p>Your notes...</p>",value:this.state.content,init:{height:250,width:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"},onEditorChange:this.handleEditorChange}),o.a.createElement("input",{type:"submit",value:"Update"})):"")}}]),n}(o.a.Component),A=function(e){return{user:e.auth.user,token:e.auth.token,notes:e.notes}},J={addNote:function(e){return e._id?e._id:_+1,{type:"ADD",data:{index:_++,topic:e.topic,content:e.content,id:e._id}}},editNote:function(e){return{type:"EDIT",data:{index:e.index,topic:e.topic,content:e.content,id:e.id}}},removeNote:function(e){return{type:"REMOVE",index:e.index}}},I=Object(b.b)(A,J)(x),P=Object(b.b)(A,J)(D),R=Object(b.b)(A,J)(T),G=function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Notes"),o.a.createElement(I,null),o.a.createElement(P,null))},M=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)(""),c=Object(r.a)(l,2),u=c[0],d=c[1],m=Object(a.useState)(""),b=Object(r.a)(m,2),g=b[0],f=b[1],v=Object(a.useState)(!1),E=Object(r.a)(v,2),k=(E[0],E[1],Object(a.useState)(!1)),j=Object(r.a)(k,2),O=j[0],y=j[1];return O?o.a.createElement(h.a,{to:"/sign-in"}):o.a.createElement("div",null,o.a.createElement("form",{className:s.a.authform,onSubmit:function(e){e.preventDefault();var t={username:n,password:u};console.log("data: "+t),fetch("https://hanoelleb-notebook-api.herokuapp.com/sign-up",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){y(!0)}))}},o.a.createElement("h2",null,"Sign up"),o.a.createElement("input",{type:"text",placeholder:"Username",name:"username",value:n,onChange:function(e){i(e.target.value)}}),o.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:u,onChange:function(e){d(e.target.value)}}),o.a.createElement("input",{type:"password",placeholder:"Confirm Password",name:"confirmation",onChange:function(e){f(e.target.value)}}),""!==n&&""!==u&&u===g?o.a.createElement("input",{type:"submit",value:"Sign up"}):o.a.createElement("input",{type:"submit",value:"Sign up",disabled:!0})),o.a.createElement("p",{className:s.a.formlink},"Already have an account?",o.a.createElement(p.b,{to:"/sign-in"}," Sign in!")))},U=function(e){var t=Object(b.d)((function(e){return e.auth.user})),n=Object(b.c)();return o.a.createElement("div",{className:s.a.navbar},o.a.createElement("ul",null,o.a.createElement("li",{className:s.a.logo},"Duly"),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/notes"},"Notebooks")),t?o.a.createElement("li",{onClick:function(){return n({type:"LOGOUT"})}},"Sign out"):o.a.createElement("li",null,o.a.createElement(p.b,{to:"/sign-in"},"Sign in"))))};var z=function(){var e=Object(a.useState)(localStorage.getItem("token")),t=Object(r.a)(e,2),n=(t[0],t[1],Object(a.useState)(null)),i=Object(r.a)(n,2);return i[0],i[1],o.a.createElement("div",null,o.a.createElement(p.a,null,o.a.createElement(U,null),o.a.createElement(h.d,null,o.a.createElement(h.b,{exact:!0,path:"/"},o.a.createElement(u,null)),o.a.createElement(h.b,{path:"/notes"},o.a.createElement(G,null)),o.a.createElement(h.b,{path:"/sign-in"},o.a.createElement(g,null)),o.a.createElement(h.b,{path:"/sign-up"},o.a.createElement(M,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(16),V=Object(L.b)({notes:w,auth:m}),W=Object(L.c)(V);l.a.render(o.a.createElement(b.a,{store:W},o.a.createElement(z,null)),document.getElementById("root"))},4:function(e,t,n){e.exports={navbar:"notebook_navbar__2a7QK",logo:"notebook_logo__1i_ek",home:"notebook_home__2934l",note:"notebook_note__111vZ",buttons:"notebook_buttons__hqOkJ",notebutton:"notebook_notebutton__2aSJs",notelist:"notebook_notelist__1u8uu",noteform:"notebook_noteform__29yhs",authform:"notebook_authform__2ii_W",formlink:"notebook_formlink__a1gGa"}},50:function(e,t,n){e.exports=n(104)},55:function(e,t,n){},56:function(e,t,n){},86:function(e,t){}},[[50,1,2]]]);
//# sourceMappingURL=main.25b259e8.chunk.js.map