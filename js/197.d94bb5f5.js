"use strict";(self["webpackChunkudg"]=self["webpackChunkudg"]||[]).push([[197],{3197:(e,t,l)=>{l.r(t),l.d(t,{default:()=>P});var i=l(3673),s=l(2323),a=l(8880);const r=e=>((0,i.dD)("data-v-3d244f43"),e=e(),(0,i.Cn)(),e),n=r((()=>(0,i._)("div",{class:"text-h4 text-center text-pacifico text-primary"},"Pixel-Art",-1))),o={class:"row flex col constrain"},c={class:"col-4 column"},h={class:"text-caption"},d=(0,i.Uk)(" Gridgröße"),u={class:"col-8 column items-end"},g={class:"text-caption"},p=(0,i.Uk)(" Auswahl"),f={class:"row flex col justify-center full-width q-gutter-xs"},m={class:"text-caption full-width text-center"},C={class:"q-px-lg",style:{background:"rgb(255 255 255 / 70%)"}},y=(0,i.Uk)(" Palette"),w={class:"row flex col canvascontainer shadow-3"},v=r((()=>(0,i._)("img",{src:"canvasbg.png",id:"bg"},null,-1)));function A(e,t,l,r,A,x){const S=(0,i.up)("q-card-section"),b=(0,i.up)("q-icon"),_=(0,i.up)("q-select"),D=(0,i.up)("q-btn-toggle"),k=(0,i.up)("q-btn"),z=(0,i.up)("q-fab-action"),Q=(0,i.up)("q-fab"),W=(0,i.up)("q-page-sticky"),F=(0,i.up)("q-card"),R=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(R,{class:"q-pa-sm"},{default:(0,i.w5)((()=>[(0,i.Wm)(F,{class:(0,s.C_)(e.$q.screen.gt.md?"fullHeightBig":"fullHeightSmall")},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(S,null,{default:(0,i.w5)((()=>[n])),_:1},512),[[a.F8,e.$q.screen.gt.xs]]),(0,i.Wm)(S,null,{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i._)("div",c,[(0,i._)("span",h,[(0,i.Wm)(b,{name:"las la-border-all"}),d]),(0,i.Wm)(_,{outlined:"",modelValue:A.selectedGrid,"onUpdate:modelValue":t[0]||(t[0]=e=>A.selectedGrid=e),options:A.gridOptions,dense:""},null,8,["modelValue","options"])]),(0,i._)("div",u,[(0,i._)("span",g,[(0,i.Wm)(b,{name:"las la-brush"}),p]),(0,i.Wm)(D,{modelValue:A.selectedPaintTool,"onUpdate:modelValue":t[1]||(t[1]=e=>A.selectedPaintTool=e),push:"",glossy:"",color:"grey-5","toggle-color":A.selectedColor,options:[{value:"brush",slot:"one"},{value:"fill",slot:"two"}]},{one:(0,i.w5)((()=>[(0,i.Wm)(b,{right:"",name:"las la-paint-brush"})])),two:(0,i.w5)((()=>[(0,i.Wm)(b,{right:"",name:"las la-fill-drip"})])),_:1},8,["modelValue","toggle-color"])])])])),_:1}),(0,i.Wm)(S,{style:{"z-index":"1"}},{default:(0,i.w5)((()=>[(0,i._)("div",f,[(0,i._)("span",m,[(0,i._)("span",C,[(0,i.Wm)(b,{name:"las la-palette"}),y])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(A.colorOptions,(e=>((0,i.wg)(),(0,i.j4)(k,{round:"",key:e,size:"md",color:e,onClick:t=>x.setColor(e),class:"shadow-10"},null,8,["color","onClick"])))),128))])])),_:1}),(0,i.Wm)(S,{style:{position:"relative"}},{default:(0,i.w5)((()=>[(0,i._)("div",w,[v,(0,i._)("canvas",{class:"mycanvas",ref:"canvas",onTouchstart:t[2]||(t[2]=e=>A.isDrawing=!0),onTouchend:t[3]||(t[3]=e=>A.isDrawing=!1),onMousedown:t[4]||(t[4]=e=>A.isDrawing=!0),onMouseup:t[5]||(t[5]=e=>A.isDrawing=!1)},null,544),(0,i._)("div",{class:"flex rasterDiv",style:(0,s.j5)(`width:${A.canvasWidth}px; height:${A.canvasHeight}px; position:absolute; top:16; left:16;`)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(x.returnRowAndCellsQuantity,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"rasterRow",key:e},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(x.returnRowAndCellsQuantity,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e,style:(0,s.j5)(`width:${x.returnCellSize}px; height:${x.returnCellSize}px;`),class:"rasterColumn rasterborder"},null,4)))),128))])))),128))],4)])])),_:1}),(0,i.Wm)(W,{position:"bottom-right",offset:[18,18],style:{"z-index":"3"}},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{color:"indigo-8",icon:"save",direction:"left","vertical-actions-align":"center"},{default:(0,i.w5)((()=>[(0,i.Wm)(z,{"label-position":"right",color:"primary",onClick:t[6]||(t[6]=e=>x.shareOrSaveAsImage("jpg")),icon:"image",label:".jpg"}),(0,i.Wm)(z,{"label-position":"right",color:"primary",onClick:t[7]||(t[7]=e=>x.shareOrSaveAsImage("png")),icon:"image",label:".png"}),(0,i.Wm)(z,{"label-position":"right",color:"primary",onClick:t[8]||(t[8]=e=>x.shareOrSaveAsImage("gif")),icon:"image",label:".gif"})])),_:1})])),_:1})])),_:1},8,["class"])])),_:1})}l(5363);var x=l(1082);const S={name:"PagePixelart",data(){return{canvas:null,ctx:null,canvasWidth:300,canvasHeight:300,isDrawing:!1,fillArray:[],selectedPaintTool:"brush",selectedColor:"black",colorOptions:["black","grey","brown","red","orange","yellow","green","cyan","blue","purple","white"],selectedGrid:"8x8",gridOptions:["8x8","12x12","16x16","32x32"]}},computed:{returnRowAndCellsQuantity(){return parseInt(this.selectedGrid.split("x")[0])},returnCellSize(){return this.canvasWidth/this.returnRowAndCellsQuantity}},mounted(){this.createCanvasReference(),this.drawInitialCanvasByGivenGridSelection(),this.createInitialEmptyFillArray(),this.handleTouching(),this.handleMouseMoving(),this.handleMouseClick()},watch:{selectedGrid(){this.clearCanvas(),this.createInitialEmptyFillArray(),this.drawInitialCanvasByGivenGridSelection()}},methods:{createCanvasReference(){this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight},setColor(e){this.selectedColor=e},createInitialEmptyFillArray(){this.fillArray.length&&(this.fillArray=[]);for(let e=0;e<this.returnRowAndCellsQuantity;e++){let e=[];for(let t=0;t<this.returnRowAndCellsQuantity;t++)e.push("white");this.fillArray.push(e)}},clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx=this.canvas.getContext("2d")},drawInitialCanvasByGivenGridSelection(){for(let e=0;e<this.returnRowAndCellsQuantity;e++)for(let t=0;t<this.returnRowAndCellsQuantity;t++){let l=t*this.returnCellSize,i=e*this.returnCellSize;this.ctx.fillStyle="rgba(255,255,255,1)",this.ctx.fillRect(l,i,this.returnCellSize,this.returnCellSize)}},handleDraw(e,t,l){if(this.isDrawing){const l=Math.floor(t/this.returnCellSize),i=Math.floor(e/this.returnCellSize),s=i*this.returnCellSize,a=l*this.returnCellSize;let r=a/this.returnCellSize,n=s/this.returnCellSize;"brush"==this.selectedPaintTool?(this.fillArray[r][n]=this.selectedColor,this.fillSingleCell(s,a,this.selectedColor)):this.fillArray[r][n]!=this.selectedColor&&(this.performFloodFill(l,i,this.fillArray[r][n],this.selectedColor),setTimeout((()=>{this.drawEntireCanvasByArray()}),30))}},handleDrawByClick(e){if(this.isDrawing){const t=Math.floor(e.layerY/this.returnCellSize),l=Math.floor(e.layerX/this.returnCellSize),i=l*this.returnCellSize,s=t*this.returnCellSize;let a=s/this.returnCellSize,r=i/this.returnCellSize;"brush"==this.selectedPaintTool?(this.fillArray[a][r]=this.selectedColor,this.fillSingleCell(i,s,this.selectedColor)):this.fillArray[a][r]!=this.selectedColor&&(this.performFloodFill(t,l,this.fillArray[a][r],this.selectedColor),setTimeout((()=>{this.drawEntireCanvasByArray()}),30))}},fillSingleCell(e,t,l){this.ctx.fillStyle=l,this.ctx.fillRect(e,t,this.returnCellSize,this.returnCellSize)},drawEntireCanvasByArray(){let e=this.canvas.width/this.returnRowAndCellsQuantity;for(let t=0;t<this.returnRowAndCellsQuantity;t++)for(let l=0;l<this.returnRowAndCellsQuantity;l++)this.fillSingleCell(t*e,l*e,this.fillArray[l][t])},performFloodFill(e,t,l,i){e<0||e>=this.fillArray.length||t<0||t>=this.fillArray[e].length||this.fillArray[e][t]===l&&(this.fillArray[e][t]=i,this.performFloodFill(e+1,t,l,i),this.performFloodFill(e-1,t,l,i),this.performFloodFill(e,t+1,l,i),this.performFloodFill(e,t-1,l,i))},shareOrSaveAsImage(e){let t=Date.now(),l=x.ZP.formatDate(t,"DD_MM_YYYY_HH_mm_ss"),i=`UDG_MyPixelArt_${l}`;const s=document.createElement("a");s.setAttribute("download",`${i}.${e}`),s.setAttribute("href",this.canvas.toDataURL(`image/${e}`).replace(`image/${e}`,"image/octet-stream")),s.click()},handleTouching(){this.canvas.addEventListener("touchmove",(e=>{let t=e.type,l=this.canvas.getBoundingClientRect().top,i=this.canvas.getBoundingClientRect().left,s=e.changedTouches[0].clientX-i,a=e.changedTouches[0].clientY-l;this.handleDraw(s,a,t)}),{passive:!0})},handleMouseMoving(){this.canvas.addEventListener("mousemove",(e=>{let t=e.type,l=e.layerX,i=e.layerY;this.handleDraw(l,i,t)}))},handleMouseClick(){this.canvas.addEventListener("click",(e=>{this.isDrawing=!0;let t=e.type,l=e.layerX,i=e.layerY;this.handleDraw(l,i,t),this.isDrawing=!1}))}}};var b=l(4260),_=l(4379),D=l(151),k=l(5589),z=l(4554),Q=l(3017),W=l(8761),F=l(8240),R=l(1007),q=l(9200),M=l(9975),T=l(7518),G=l.n(T);const I=(0,b.Z)(S,[["render",A],["__scopeId","data-v-3d244f43"]]),P=I;G()(S,"components",{QPage:_.Z,QCard:D.Z,QCardSection:k.Z,QIcon:z.Z,QSelect:Q.Z,QBtnToggle:W.Z,QBtn:F.Z,QPageSticky:R.Z,QFab:q.Z,QFabAction:M.Z})}}]);