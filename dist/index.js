import{jsx as t,jsxs as e,Fragment as i}from"react/jsx-runtime";import{useRef as o,useEffect as n,useState as r,useCallback as s,memo as c}from"react";import{Box as d,IconButton as a,Button as l,TableRow as m,TableCell as v,TableContainer as u,Table as p,TableHead as h,TableSortLabel as f,TableBody as g,LinearProgress as x}from"@mui/material";import{dequal as b}from"dequal";import{useCustomCompareEffect as w}from"use-custom-compare";import{Virtuoso as j}from"react-virtuoso";import O from"zustand";import S from"zustand/context";import y from"immer";import C from"@mui/icons-material/Add";import R from"@mui/icons-material/Remove";import z from"@mui/icons-material/ImportExport";import{CSVLink as D}from"react-csv";import k from"@mui/icons-material/RestartAlt";import{createNewSortInstance as B}from"fast-sort";const{Provider:I,useStore:T,useStoreApi:A}=S(),F=()=>{return O((t=t=>({state:{rows:[],orgRows:[],fontSize:1,sortDirection:!1,sortBy:""},actions:{setFontSize:e=>t((t=>{t.state.fontSize=e(t.state.fontSize)})),setSortDirection:()=>t((t=>{t.state.sortDirection=!t.state.sortDirection})),setSortBy:e=>t((t=>{t.state.sortBy=e})),setRows:e=>t((t=>{t.state.rows=e})),setOrgRows:e=>t((t=>{t.state.orgRows=e}))}}),(e,i,o)=>t(((t,i)=>{const o="function"==typeof t?y(t):t;return e(o,i)}),i,o)));var t};function M({children:e}){return t(I,Object.assign({createStore:F},{children:e}),void 0)}const E=T,q=A;function L(){const{setFontSize:i}=E((t=>t.actions));return e(d,Object.assign({sx:{display:"flex",justifyContent:"space-around",alignItems:"center"}},{children:[t(a,Object.assign({onClick:()=>{i((t=>t+.1))}},{children:t(C,{},void 0)}),void 0),t(a,Object.assign({onClick:()=>{i((t=>t-.1))}},{children:t(R,{},void 0)}),void 0)]}),void 0)}function N(){const{getState:e,subscribe:i}=q(),r=o(e().state.rows);return n((()=>i((t=>r.current=t.state.rows))),[]),t(d,{children:t(D,Object.assign({data:r.current,filename:"data-table-export",style:{textDecoration:"none"}},{children:t(l,Object.assign({variant:"text",endIcon:t(z,{},void 0),color:"primary"},{children:"Export"}),void 0)}),void 0)},void 0)}function P(){const{setSortBy:e,setRows:i,setFontSize:o}=E((t=>t.actions)),{getState:n}=q();return t(a,Object.assign({onClick:()=>{e(""),o((()=>1));const t=n().state.orgRows;!t||t.length<1||i(t)}},{children:t(k,{},void 0)}),void 0)}const W={cursor:"pointer",color:"#1b4394"};function $(o){const{lines:c=3,obj:d,lessText:a="Less",moreText:l="More"}=o,[m,v]=r(""),[u,p]=r(!0),[h,f]=r(null),g=s((t=>{if(!t)return;t.getClientRects().length<=c||f(Math.ceil(t.innerText.length/c))}),[c]);return n((()=>{G(d)&&v(d)}),[d]),m?e("span",Object.assign({ref:g},{children:[u&&h?m.substring(0,h):m,t("span",Object.assign({onClick:()=>p((t=>!t)),style:W},{children:h&&t(i,{children:u?"... "+l:"... "+a},void 0)}),void 0)]}),void 0):d}const G=t=>"[object String]"===Object.prototype.toString.call(t),H=c((e=>{const{columns:o,row:n,index:r,truncate:s}=e,c=E((t=>t.state.fontSize)),d=(e,o)=>{const s=(null==n?void 0:n[e])?String(n[e]):"";return o?t(i,{children:o({index:r,value:s,row:n})},void 0):s};return t("div",Object.assign({style:{width:"100%",height:"100%"}},{children:t(m,Object.assign({sx:{display:"flex"},component:"div",hover:!0},{children:o.map((({field:e,flex:o,width:n,renderCell:r},a)=>t(v,Object.assign({component:"div",sx:{flex:n||o?o:1,width:n,wordBreak:"break-word"}},{children:t("div",Object.assign({style:{fontSize:`${c}em`}},{children:s?t($,Object.assign({obj:d(e,r)},s),void 0):t(i,{children:d(e,r)},void 0)}),void 0)}),a)))}),void 0)}),void 0)})),J=B({comparer:new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}).compare}),K={width:"100%",height:"100%"},Q=c((i=>{const{columns:n,rows:r,component:s,loading:c,sx:a,overscanCount:l=0,truncateText:x}=i,{rows:O,sortBy:S,sortDirection:y}=E((t=>t.state)),{setOrgRows:C,setRows:R,setSortBy:z,setSortDirection:D}=E((t=>t.actions)),k=o(null);w((()=>{R(r),C(r)}),[r],b);return e(d,Object.assign({component:null!=s?s:"div",sx:{...K,display:"flex",flexDirection:"column"}},{children:[t(U,{},void 0),t(u,Object.assign({sx:K,component:null!=s?s:"div"},{children:e(p,Object.assign({sx:{minWidth:"100%",display:"flex",flexDirection:"column",...K,...a},component:"div"},{children:[t(h,Object.assign({component:"div"},{children:t(m,Object.assign({sx:{display:"flex"},component:"div"},{children:n.map((({field:e,flex:i,width:o,headerName:n})=>t(v,Object.assign({sx:{flex:o||i?i:1,width:o,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},component:"div"},{children:t(f,Object.assign({active:S===e,direction:y?"asc":"desc",onClick:()=>{((t,e)=>{var i;z(e),R(t?J(r).asc((t=>t[e])):J(r).desc((t=>t[e]))),null===(i=k.current)||void 0===i||i.scrollToIndex({index:0})})(!y,e),D()}},{children:String(n)}),void 0)}),e)))}),void 0)}),void 0),e(g,Object.assign({sx:{...K,position:"relative"},component:"div"},{children:[c&&t(V,{},void 0),t(j,{height:"100%",width:"100%",ref:k,data:r.length!==O.length?r:O,overscan:l,itemContent:(e,i)=>t(H,{columns:n,row:i,index:e,truncate:x},void 0)},void 0)]}),void 0)]}),void 0)}),void 0)]}),void 0)}),b);function U(){return e(d,Object.assign({sx:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",p:"5px"}},{children:[t(N,{},void 0),t(L,{},void 0),t(P,{},void 0)]}),void 0)}function V(){return t(x,{sx:{position:"absolute",top:"0px",width:"100%"}},void 0)}function X({...e}){return t(M,{children:t(Q,Object.assign({},e),void 0)},void 0)}export{X as MuiDataTable};
