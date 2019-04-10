(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,a,t){e.exports=t(303)},213:function(e,a,t){},237:function(e,a,t){},249:function(e,a,t){},251:function(e,a,t){},260:function(e,a,t){},261:function(e,a,t){},300:function(e,a,t){},301:function(e,a,t){},302:function(e,a,t){},303:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(25),o=t.n(c),s=t(51),l=t(28),u=t(47),i=t(120),h=t(19),m=t(20),p=t(22),f=t(21),d=t(23),b=t(38),E=t(29),v=t.n(E),S=function(e){return{type:"SET BALANCE",balance:e}},g=function(e){return{type:"SET PORTFOLIO SHARES",shares:e}},y=function(){return function(e){v.a.get("/balance").then(function(a){console.log("fetch balance",a),e(S(a.data.balance))})}},O=function(e){return e.portfolio.balance},_=function(e){return e.portfolio.shares},j=function(e){return e.shares.searchValue},B=function(e){return e.shares.shares},C=t(30),A=t(130),k=t.n(A),V=t(74),T=t.n(V),w=t(121),N=t.n(w),P=t(122),M=t.n(P),L=t(16),R=t.n(L),x=function(e){return r.a.createElement("header",null,r.a.createElement(N.a,{position:"static"},r.a.createElement(M.a,null,r.a.createElement(R.a,{variant:"h6",color:"inherit"},"Stock Trading"),e.children)))},D=t(46),H=t.n(D),I=(t(213),Object(C.withStyles)({root:{marginLeft:"20px",padding:"0"}})(H.a)),$=function(e){return r.a.createElement(I,{classes:{root:"nav-item"},color:"inherit"},r.a.createElement(s.b,{className:"nav-item__link",to:e.link,exact:e.exact},e.children))},U=v.a.create({baseURL:"https://www.quandl.com/api/v3/"}),F="sJV2xyb_RBtSj_is4PQv",J=function(e,a){return{type:"SET SHARE VALUE",symbol:e,value:a}},q=function(e){return function(a){!function e(a,t){U.get("datasets/".concat(t.databaseCode,"/").concat(t.symbol,"/data.json?api_key=").concat(F),{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(n){try{var r=parseFloat(n.data.dataset_data.data[0][4]);console.log(r),a(J(t.symbol,r))}catch(c){console.error("Caught Error:",c),e(a,t)}},function(n){console.error("Caught Error:",n),e(a,t)})}(a,e)}};var W=t(35),K=t.n(W),Q=t(31),z=t.n(Q),G=t(125),X=t.n(G),Y=t(45),Z=t.n(Y),ee=t(60),ae=t.n(ee),te=t(61),ne=t.n(te),re=t(52),ce=t.n(re),oe=t(124),se=t.n(oe),le=(t(237),Object(C.withStyles)({root:{height:"60px",alignItems:"initial"}})(se.a)),ue=function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={cost:0,amountOfShares:0,preventTransaction:!0},t.handleAmountChange=function(e){var a=parseInt(e.target.value),n=a*t.props.value,r=!Number.isInteger(a)||a<0||a>t.props.amount||isNaN(n)||n>t.props.currentBalance;t.setState({amountOfShares:a,cost:n,preventTransaction:r})},t.purchaseShare=function(){t.setState({cost:0,amountOfShares:0});var e={name:t.props.name,databaseCode:t.props.databaseCode,symbol:t.props.symbol,amount:t.state.amountOfShares};v.a.post("/purchaseShare",e).then(function(e){t.props.onPurchase(e.data)})},t.sellShare=function(){t.setState({cost:0,amountOfShares:0});var e={name:t.props.name,databaseCode:t.props.databaseCode,symbol:t.props.symbol,amount:t.state.amountOfShares};v.a.post("/sellShare",e).then(function(e){t.props.onSell(e.data)})},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchShareValue(this.props)}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.symbol,n=e.value,c=e.amount,o=e.currentBalance,s=e.onPurchase;return r.a.createElement("div",{className:"share"},r.a.createElement(K.a,{className:"share-container"},r.a.createElement(le,{title:a,subheader:t}),r.a.createElement(z.a,null,r.a.createElement(R.a,{gutterBottom:!0,variant:"h6"},"value: ",n?r.a.createElement("span",{style:{color:X.a[500]}},"$",n):"...Loading"),r.a.createElement(ce.a,null,r.a.createElement(ae.a,null,"Amount"),r.a.createElement(Z.a,{id:"amount",type:"number",value:this.state.amountOfShares,onChange:this.handleAmountChange,endAdornment:s?null:r.a.createElement(ne.a,{position:"end"},"/",c)})),r.a.createElement(H.a,{classes:{root:"".concat(s?"share__buy-button":"share__sell-button")},onClick:s?this.purchaseShare:this.sellShare,variant:"contained",color:"secondary",disabled:this.state.preventTransaction},s?"Buy":"Sell"),r.a.createElement("div",{className:"share__balance-container"},r.a.createElement(R.a,{classes:{root:"share__balance-container__balance"},gutterBottom:!0,variant:"h6"},"Balance: $",o),r.a.createElement(R.a,{classes:{root:"share__balance-container__cost"},gutterBottom:!0,variant:"h6"},s?"Cost":"Profit",": $",this.state.cost)))))}}]),a}(n.Component),ie=(t(249),function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).handleSharePurchase=function(e){t.props.setBalance(e.balance),t.props.setShares(e.shares)},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchBalance()}},{key:"render",value:function(){var e=this,a=this.props.currentShares.map(function(a){return r.a.createElement(ue,Object.assign({key:a.symbol,fetchShareValue:e.props.fetchShareValue},a,{onSell:e.handleSharePurchase,currentBalance:e.props.currentBalance}))});return r.a.createElement("div",{className:"portfolio"},r.a.createElement(K.a,null,r.a.createElement(z.a,null,r.a.createElement(R.a,{gutterBottom:!0,variant:"h2",component:"h2"},"My Portfolio"),r.a.createElement(R.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Current Balance $",this.props.currentBalance)),r.a.createElement(z.a,{classes:{root:"portfolio__shares-container"}},r.a.createElement(R.a,{classes:{root:"portfolio__shares-container__title"},gutterBottom:!0,variant:"h5",component:"h2"},"Current Shares"),a)))}}]),a}(n.Component)),he=Object(l.b)(function(e){return{currentBalance:O(e),currentShares:_(e)}},function(e){return{fetchShareValue:function(a){return e(q(a))},fetchBalance:function(){return e(y())},fetchShares:function(){return e(function(e){v.a.get("/shares").then(function(a){e(g(a.data.shares))})})},setBalance:function(a){return e(S(a))},setShares:function(a){return e(g(a))}}})(ie),me=t(32),pe=t.n(me),fe=t(126),de=t.n(fe),be=t(75),Ee=t.n(be),ve=(t(251),function(e){return r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"search__search-icon"},r.a.createElement(de.a,null)),r.a.createElement(Ee.a,{value:e.value,onChange:e.onChange,placeholder:"Search\u2026",classes:{root:"search__input-root",input:"search__input"}}))}),Se=(t(260),function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(p.a)(this,Object(f.a)(a).call(this,e))).handleSearchValueChange=function(e){t.props.setSearchValue(e.target.value),t.fetchShares(e.target.value)},t.handleSharePurchase=function(e){t.props.setBalance(e.balance),t.props.setPortfolioShares(e.shares)},t.fetchShares=pe.a.debounce(t.props.fetchShares,1e3),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.props.shares.map(function(a){return r.a.createElement(ue,Object.assign({key:a.symbol,fetchShareValue:e.props.fetchShareValue},a,{onPurchase:e.handleSharePurchase,currentBalance:e.props.currentBalance}))});return r.a.createElement("div",{className:"manage-shares"},r.a.createElement(K.a,{className:"manage-shares__search-container"},r.a.createElement(z.a,null,r.a.createElement(R.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Look up shares"),r.a.createElement(ve,{value:this.props.searchValue,onChange:this.handleSearchValueChange})),r.a.createElement(z.a,{classes:{root:"manage-shares__results-container"}},r.a.createElement(R.a,{classes:{root:"manage-shares__results-container__title"},gutterBottom:!0,variant:"h5",component:"h2"},"Results"),a)))}}]),a}(n.Component)),ge=Object(l.b)(function(e){return{currentBalance:O(e),searchValue:j(e),shares:B(e)}},function(e){return{setSearchValue:function(a){return e(function(e){return{type:"SET SEARCH VALUE",value:e}}(a))},fetchShares:function(a){return e((t=a,function(e){U.get("datasets.json?query=".concat(t,"&per_page=10&page=1&database_code=WIKI")).then(function(a){console.log(a),e({type:"SET SHARES",shares:a.data.datasets})})}));var t},fetchShareValue:function(a){return e(q(a))},setBalance:function(a){return e(S(a))},setPortfolioShares:function(a){return e(g(a))}}})(Se),ye=t(128),Oe=t.n(ye),_e=t(77),je=t.n(_e),Be=t(127),Ce=t.n(Be),Ae=t(129),ke=t.n(Ae),Ve=(t(261),Object(C.withStyles)({root:{marginTop:"20px"}})(H.a)),Te=Object(C.withStyles)({root:{marginTop:"20px"}})(ce.a),we=function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={balanceMethod:"deposit",amount:void 0},t.handleBalanceMethodChange=function(e){t.setState({balanceMethod:e.target.value})},t.handleAmountChange=function(e){t.setState({amount:e.target.value})},t.preventSubmit=function(e){e.preventDefault()},t.handleSubmit=function(){v.a.post("/".concat(t.state.balanceMethod),{amount:t.state.amount}).then(function(e){t.props.onSubmit(e.data.balance)}),t.setState({amount:void 0})},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.preventSubmit},r.a.createElement(Ce.a,{classes:{root:"manage-balance__form"}},r.a.createElement(ce.a,null,r.a.createElement(Oe.a,{classes:{root:"manage-balance__form__method"},value:this.state.balanceMethod,onChange:this.handleBalanceMethodChange,inputProps:{name:"balanceMethod",id:"balance-method"}},r.a.createElement(je.a,{value:"deposit"},"Deposit"),r.a.createElement(je.a,{value:"withdraw"},"Withdraw")),r.a.createElement(ke.a,null,"Select the method to update your balance")),r.a.createElement(Te,null,r.a.createElement(ae.a,null,"Amount"),r.a.createElement(Z.a,{id:"amount",type:"number",value:this.amount,onChange:this.handleAmountChange,startAdornment:r.a.createElement(ne.a,{position:"start"},"$")})),r.a.createElement(Ve,{color:"primary",margin:"dense",onClick:this.handleSubmit,variant:"contained"},this.state.balanceMethod)))}}]),a}(n.Component),Ne=(t(300),function(e){function a(){return Object(h.a)(this,a),Object(p.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchBalance()}},{key:"render",value:function(){return r.a.createElement("div",{className:"manage-balance"},r.a.createElement(K.a,{className:"manage-balance__form-container"},r.a.createElement(z.a,null,r.a.createElement(R.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Current Balance $",this.props.currentBalance),r.a.createElement(we,{onSubmit:this.props.setBalance}))))}}]),a}(n.Component)),Pe=Object(l.b)(function(e){return{currentBalance:O(e)}},function(e){return{fetchBalance:function(){return e(y())},setBalance:function(a){return e(S(a))}}})(Ne),Me=(t(301),Object(C.createMuiTheme)({palette:{primary:{main:k.a[900]},secondary:{main:T.a[500]}},typography:{useNextVariants:!0}})),Le=function(e){function a(){return Object(h.a)(this,a),Object(p.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchBalance()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C.MuiThemeProvider,{theme:Me},r.a.createElement(x,null,r.a.createElement($,{link:"/",exact:!0},"Portfolio"),r.a.createElement($,{link:"/balance",exact:!0},"Balance"),r.a.createElement($,{link:"/shares",exact:!0},"Shares")),r.a.createElement("div",{className:"main"},r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/balance",component:Pe}),r.a.createElement(b.a,{path:"/shares",component:ge}),r.a.createElement(b.a,{path:"/",component:he})))))}}]),a}(n.Component),Re=Object(l.b)(function(e){return{currentBalance:O(e)}},function(e){return{fetchBalance:function(){return e(y())}}})(Le),xe={balance:0,shares:[]},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,a=arguments.length>1?arguments[1]:void 0;if("SET BALANCE"===a.type){var t=pe.a.cloneDeep(e);return console.log("SET_BALANCE",a.balance),t.balance=a.balance,t}if("SET PORTFOLIO SHARES"===a.type){var n=pe.a.cloneDeep(e);return n.shares=a.shares,n}return e},He={searchValue:"",shares:[]},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,a=arguments.length>1?arguments[1]:void 0;if("SET SEARCH VALUE"===a.type){var t=pe.a.cloneDeep(e);return t.searchValue=a.value,t}if("SET SHARES"===a.type){var n=pe.a.cloneDeep(e);return n.shares=(a.shares||[]).map(function(e){return{databaseCode:e.database_code,symbol:e.dataset_code,name:e.name.replace("Prices, Dividends, Splits and Trading Volume","")}}),n}if("SET SHARE VALUE"===a.type){var r=pe.a.cloneDeep(e),c=r.shares.find(function(e){return e.symbol===a.symbol});return c&&(c.value=a.value),r}return e},$e=(t(302),Object(u.c)({portfolio:De,shares:Ie})),Ue=Object(u.d)($e,Object(u.a)(i.a)),Fe=r.a.createElement(l.a,{store:Ue},r.a.createElement(s.a,null,r.a.createElement(Re,null)));o.a.render(Fe,document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.e08043ae.chunk.js.map