"use strict";(self["webpackChunkudg"]=self["webpackChunkudg"]||[]).push([[802],{5802:(e,t,l)=>{l.r(t),l.d(t,{default:()=>M});var i=l(3673),a=l(2323);const n={class:"col-1 q-table__title"},s={class:"text-h6"},o={class:"row q-col-gutter-md"},d={class:"col-10"};function r(e,t,l,r,c,h){const p=(0,i.up)("q-td"),u=(0,i.up)("q-btn"),m=(0,i.up)("q-icon"),f=(0,i.up)("q-select"),g=(0,i.up)("q-input"),b=(0,i.up)("q-space"),w=(0,i.up)("q-table"),k=(0,i.up)("q-card-section"),y=(0,i.up)("q-card-actions"),x=(0,i.up)("q-card"),v=(0,i.up)("q-dialog"),C=(0,i.up)("apexchart"),O=(0,i.up)("q-page"),q=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(O,{class:"q-pa-sm"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{dense:"",class:"my-sticky-virtscroll-table my-sticky-column-table-firstchild my-sticky-column-table-lastchild",title:h.dateiName,columns:c.kopf,rows:c.zeilen,"row-key":"Hauptartikelnr",loading:c.loadingData,"visible-columns":c.visibleColumns,filter:c.filter,"virtual-scroll":"",pagination:c.pagination,"onUpdate:pagination":t[2]||(t[2]=e=>c.pagination=e)},{"body-cell-index":(0,i.w5)((e=>[(0,i.Wm)(p,{props:e,style:{"background-color":"rgb(197 201 208 / 94%)"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(e.row.index),1)])),_:2},1032,["props"])])),"body-cell-actions":(0,i.w5)((e=>[(0,i.Wm)(p,{props:e,style:{"background-color":"rgb(197 201 208 / 94%)"}},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{dense:"",icon:"mode_edit",color:"grey-9",round:"",flat:"",onClick:t=>h.onEdit(e.row),size:""},null,8,["onClick"]),(0,i.Wm)(u,{dense:"",icon:"delete",color:"red-5",round:"",flat:"",onClick:t=>h.onDelete(e.row),size:""},null,8,["onClick"])])),_:2},1032,["props"])])),top:(0,i.w5)((l=>[(0,i._)("div",n,(0,a.zw)(h.dateiName),1),(0,i.Wm)(f,{modelValue:c.visibleColumns,"onUpdate:modelValue":t[0]||(t[0]=e=>c.visibleColumns=e),multiple:"",standout:"",dense:"","options-dense":"","display-value":e.$q.lang.table.columns,"emit-value":"","map-options":"",options:c.kopf,"option-value":"name",style:{"min-width":"150px"},class:"q-mr-md"},{append:(0,i.w5)((()=>[(0,i.Wm)(m,{name:c.visibleColumns.length==c.kopf.length?"visibility":"visibility_off"},null,8,["name"])])),_:1},8,["modelValue","display-value","options"]),(0,i.Wm)(g,{outlined:"",dense:"",placeholder:"Suche",debounce:"300",color:"primary",modelValue:c.filter,"onUpdate:modelValue":t[1]||(t[1]=e=>c.filter=e)},{prepend:(0,i.w5)((()=>[(0,i.Wm)(m,{name:"search"})])),_:1},8,["modelValue"]),(0,i.Wm)(b),(0,i.Wm)(u,{dense:"","no-caps":"",color:"primary",disable:c.loadingData,label:`${h.dateiName} hinzufügen`,icon:"add",onClick:h.showModal,class:"q-mr-md q-px-sm"},null,8,["disable","label","onClick"]),(0,i.Wm)(u,{dense:"","no-caps":"",onClick:h.exportTable,color:"accent",icon:"archive",label:"CSV Export",class:"q-px-sm"},null,8,["onClick"]),(0,i.Wm)(u,{flat:"",round:"",dense:"",icon:l.inFullscreen?"fullscreen_exit":"fullscreen",onClick:l.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])])),_:1},8,["title","columns","rows","loading","visible-columns","filter","pagination"]),(0,i.Wm)(v,{modelValue:c.modalOpen,"onUpdate:modelValue":t[3]||(t[3]=e=>c.modalOpen=e),onHide:h.modalHide},{default:(0,i.w5)((()=>[(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i.Wm)(k,{class:"row items-center q-py-sm myBgReverse"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(u,{icon:"close",flat:"",round:"",dense:"",style:{opacity:"0","user-select":"none","pointer-events":"none"}},null,512),[[q]]),(0,i.Wm)(b),(0,i._)("div",s,(0,a.zw)(h.dateiName)+" "+(0,a.zw)(h.modalModaltext),1),(0,i.Wm)(b),(0,i.wy)((0,i.Wm)(u,{icon:"close",flat:"",round:"",dense:""},null,512),[[q]])])),_:1}),(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i._)("div",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Object.keys(c.modalFields),(e=>((0,i.wg)(),(0,i.j4)(g,{dense:"",class:"col-6",key:e,label:e,outlined:"",modelValue:c.modalFields[e],"onUpdate:modelValue":t=>c.modalFields[e]=t,disable:"index"==e},null,8,["label","modelValue","onUpdate:modelValue","disable"])))),128))])])),_:1}),(0,i.Wm)(y,{align:"right",class:"myBg"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(u,{icon:"save",label:"Speichern",color:"green",onClick:h.handleSave},null,8,["onClick"]),[[q]])])),_:1})])),_:1})])),_:1},8,["modelValue","onHide"]),(0,i.Wm)(x,{class:"row flex justify-between q-pa-md q-mt-md"},{default:(0,i.w5)((()=>[(0,i._)("div",d,[c.chartDataReady?((0,i.wg)(),(0,i.j4)(C,{key:0,ref:"realtimeChart",options:c.chartOptions,series:c.series,style:{"min-width":"100%",height:"50%","max-height":"50%"},type:"bar"},null,8,["options","series"])):(0,i.kq)("",!0)])])),_:1})])),_:1})}l(71),l(2100),l(5363);var c=l(2585),h=l.n(c),p=l(6015),u=l.n(p),m=l(2841),f=l(1082);const g={name:"PageCSVVerarbeitung",components:{apexchart:h()},data(){return{chartDataReady:!1,series:[],chartOptions:{chart:{type:"bar",height:350,stacked:!0,stackType:"normal"},plotOptions:{bar:{horizontal:!0}},stroke:{width:1,colors:["#fff"]},title:{text:""},xaxis:{categories:[],labels:{formatter:function(e){return e+" Stk."}}},yaxis:{title:{text:void 0}},tooltip:{y:{formatter:function(e){return e+" Stk."}}},fill:{opacity:1},legend:{position:"top",horizontalAlign:"left",offsetX:40}},kopf:[],zeilen:[],dateiPfad:"./Artikel.csv",loadingData:!0,pagination:{rowsPerPage:10},indexOfCurrentylEditing:null,filter:"",visibleColumns:["index","Hauptartikelnr","Artikelname","Hersteller","Geschlecht","Produktart","Ärmel","Bein","Kragen","Taschenart","Grammatur","Material","Bildname","actions"],initialRawHeaderData:[],modalFields:{},modalOpen:!1,modalMode:"add",chartField1:"Geschlecht",chartField2:"Produktart",selectOptions:[],selectedOption1:"",selectedOption2:""}},computed:{dateiName(){return this.dateiPfad.split("/")[1].split(".")[0]},modalModaltext(){return"add"==this.modalMode?"hinzufügen":"bearbeiten"},geschlecht(){return["index","Hauptartikelnr","Artikelname","Hersteller","Beschreibung","Materialangaben","Geschlecht","Produktart","Ärmel","Bein","Kragen","Herstellung","Taschenart","Grammatur","Material","Ursprungsland","Bildname","actions"]},chartHeading(){return this.chartField2+" nach "+this.chartField1}},mounted(){this.loadCSV()},methods:{myMethod(){console.log("object")},loadCSV(){this.loadingData=!0,u().parse(this.dateiPfad,{header:!1,download:!0,complete:e=>{this.loadingData=!1;let t={name:"index",label:"#",field:"index",align:"right",sortable:!0},l={name:"actions",label:"Aktionenen",align:"right",label:"Aktionen"};this.kopf=this.createHeader(e.data),this.kopf.unshift(t),this.kopf.push(l),this.initialRawHeaderData=e.data[0],this.zeilen=this.createRows(this.initialRawHeaderData,e.data),this.initialFieldsSchema(),this.chartDataReady=!0,this.updateChart()}})},initialFieldsSchema(){let e=this.initialRawHeaderData;const t={};for(const l of e)t[l]="";Object.assign(this.modalFields,t)},createHeader(e){let t=e[0];return Object.keys(t).map((e=>({name:t[e],label:t[e],field:t[e],align:"left",sortable:!0})))},createRows(e,t){return t.splice(1).map(((t,l)=>{this.zeilen.push(Object.assign.apply({},e.map(((e,i)=>({[e]:t[i],index:l+1})))))})),this.zeilen},handleSave(){let e=1;if(this.zeilen.length&&(e=Math.max(...this.zeilen.map((e=>e.index)))+1),void 0==this.modalFields["index"]){this.modalFields["index"]=e;const t=JSON.parse(JSON.stringify(this.modalFields));this.zeilen.push(t)}else{const e=JSON.parse(JSON.stringify(this.modalFields));Object.assign(this.zeilen[this.indexOfCurrentylEditing],e)}},showModal(){void 0!=this.modalFields["index"]&&delete this.modalFields["index"],this.initialFieldsSchema(),this.indexOfCurrentylEditing=null,this.modalMode="add",this.modalOpen=!0},modalHide(){this.updateChart()},onEdit(e){this.modalMode="edit",this.modalOpen=!0,this.indexOfCurrentylEditing=this.zeilen.findIndex((t=>t.index==e.index));const t=JSON.parse(JSON.stringify(e));Object.assign(this.modalFields,t)},onDelete(e){this.$q.dialog({title:"Bitte bestätigen",message:`<span class="text-italic">${this.dateiName}</span> <span class="text-bold">Nr.:${e.index}</span> wirklich <span class="text-red">löschen?</span>`,cancel:!0,persistent:!0,html:!0}).onOk((()=>{let t=this.zeilen.findIndex((t=>t.index==e.index));this.zeilen.splice(t,1),this.updateChart()}))},wrapCsvValue(e,t){let l=void 0!==t?t(e):e;return l=void 0===l||null===l?"":String(l),l=l.split('"').join('""'),`"${l}"`},exportTable(){let e=JSON.parse(JSON.stringify(this.kopf)).slice(1,this.kopf.length-1),t=[e.map((e=>this.wrapCsvValue(e.label)))].concat(this.zeilen.map((t=>e.map((e=>this.wrapCsvValue("function"===typeof e.field?e.field(t):t[void 0===e.field?e.name:e.field],e.format))).join(",")))).join("\r\n");t=t.replace(/",/g,'";');let l=Date.now(),i=f.ZP.formatDate(l,"DD_MM_YYYY_HH_mm_ss"),a=`${this.dateiName}_${i}`;const n=(0,m.Z)(a,t,"text/csv");!0!==n&&$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})},updateChart(){console.clear();let e=this.zeilen.reduce(((e,t)=>(-1===e.indexOf(t[this.chartField1])&&e.push(t[this.chartField1]),e)),[]);this.selectOptions=e;let t=e.map((e=>(""==e&&(e="'leer'"),e)));this.chartOptions.xaxis.categories=t,this.chartOptions.title.text=this.chartHeading;let l=this.zeilen.reduce(((e,t)=>(-1===e.indexOf(t[this.chartField2])&&e.push(t[this.chartField2]),e)),[]),i=l.map((e=>{let t={};return t["name"]=e,t["data"]=[],t})),a=i.reduce(((e,t)=>(e.push(t),e)),[]);this.series=a;let n=[];function s(e,t){function l(e,t){if(1==t)return e;let i=Math.ceil(e.length/t);return e.slice(0,i).concat([null]).concat(l(e.slice(i),t-1))}let i=l(e,t),a=[],n=[];for(let s=0;s<i.length;s++)null!==i[s]?n.push(i[s]):(a.push(n),n=[]);return a.push(n),a}l.forEach((t=>{let l=null;e.forEach((e=>(l=this.zeilen.reduce(((l,i)=>(i.Produktart==t&&i.Geschlecht==e&&l++,l)),0),n.push(l),l)))}));let o=s(n,l.length);a.forEach(((e,t)=>{e["data"]=o[t]}))}}};var b=l(4260),w=l(4379),k=l(8107),y=l(3884),x=l(8240),v=l(3017),C=l(4554),O=l(4842),q=l(2025),_=l(6778),z=l(151),F=l(5589),S=l(9367),W=l(677),H=l(7518),V=l.n(H);const D=(0,b.Z)(g,[["render",r]]),M=D;V()(g,"components",{QPage:w.Z,QTable:k.Z,QTd:y.Z,QBtn:x.Z,QSelect:v.Z,QIcon:C.Z,QInput:O.Z,QSpace:q.Z,QDialog:_.Z,QCard:z.Z,QCardSection:F.Z,QCardActions:S.Z}),V()(g,"directives",{ClosePopup:W.Z})}}]);