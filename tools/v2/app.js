const P=[
 {id:'fava-plain',en:'Plain Fava Beans',ar:'فول مدمس سادة',cat:'leg',pack:'400 g',dEn:'Slow-cooked Egyptian-style fava beans — the everyday staple for breakfast tables across the region.',dAr:'فول مدمس على الطريقة المصرية — الصنف الأساسي على موائد الإفطار في المنطقة.'},
 {id:'fava-olive',en:'Fava Beans with Olive Oil',ar:'فول بزيت الزيتون',cat:'leg',pack:'400 g',dEn:'Fava beans finished with olive oil — ready to heat and serve.',dAr:'فول مدمس بزيت الزيتون — جاهز للتسخين والتقديم.'},
 {id:'fava-chili',en:'Fava Beans with Chili',ar:'فول بالشطة',cat:'leg',pack:'400 g',dEn:'A spicy take on the classic — fava beans with a chili kick.',dAr:'لمسة حارة على الطبق الكلاسيكي — فول مدمس بالشطة.'},
 {id:'fava-chickpeas',en:'Fava Beans with Chickpeas',ar:'فول بالحمص',cat:'leg',pack:'400 g',dEn:'Fava beans and chickpeas together in one hearty can.',dAr:'فول وحمص معًا في علبة واحدة غنية.'},
 {id:'hummus-tahini',en:'Hummus with Tahini',ar:'حمص بالطحينة',cat:'leg',pack:'400 g',dEn:'Smooth chickpea hummus with tahini — a dip, spread or mezze in seconds.',dAr:'حمص ناعم بالطحينة — غموس أو مازة في ثوانٍ.'},
 {id:'chickpeas',en:'Chickpeas',ar:'حمص حب',cat:'leg',pack:'400 g',dEn:'Tender whole chickpeas, ready for salads, stews and hummus.',dAr:'حمص حب طري، جاهز للسلطات واليخنات والحمص.'},
 {id:'kidney-beans',en:'Red Kidney Beans',ar:'فاصوليا حمراء',cat:'leg',pack:'400 g',dEn:'Plump red kidney beans — a protein-rich base for chili, salads and rice dishes.',dAr:'فاصوليا حمراء ممتلئة — قاعدة غنية بالبروتين للأطباق والسلطات والأرز.'},
 {id:'black-eyed',en:'Black-Eyed Peas',ar:'لوبيا',cat:'leg',pack:'400 g',dEn:'Plain black-eyed peas, cooked and ready to use.',dAr:'لوبيا سادة مطهية وجاهزة للاستخدام.'},
 {id:'mushroom-whole',en:'Whole Mushrooms',ar:'مشروم كامل',cat:'veg',pack:'400 g',dEn:'Whole button mushrooms, canned for pizzas, sauces and sautés.',dAr:'مشروم كامل معلب للبيتزا والصوصات والأطباق السوتيه.'},
 {id:'mushroom-pieces',en:'Mushroom Pieces',ar:'مشروم قطع',cat:'veg',pack:'400 g',dEn:'Sliced mushroom pieces — a kitchen-ready ingredient for food service.',dAr:'مشروم مقطع — مكوّن جاهز للمطابخ وقطاع الضيافة.'},
 {id:'green-peas',en:'Green Peas',ar:'بسلة',cat:'veg',pack:'400 g',dEn:'Sweet green peas canned at peak ripeness.',dAr:'بسلة خضراء حلوة معلبة في ذروة النضج.'},
 {id:'sweet-corn',en:'Sweet Corn',ar:'ذرة حلوة',cat:'veg',pack:'400 g',dEn:'Golden sweet corn kernels for salads, sides and pizzas.',dAr:'حبات ذرة حلوة ذهبية للسلطات والأطباق الجانبية والبيتزا.'},
 {id:'mixed-veg',en:'Mixed Vegetables',ar:'خضار مشكل',cat:'veg',pack:'400 g',dEn:'Garden vegetables canned at peak ripeness. Ready-to-use for soups, stir-fries and rice dishes.',dAr:'خضروات مشكلة معلبة في ذروة النضج. جاهزة للشوربات والأطباق المقلية والأرز.'},
 {id:'tuna-solid',en:'Solid Gold Tuna',ar:'تونة سوليد جولد',cat:'sea',pack:'185 g',dEn:'Premium solid-pack tuna — perfect for quick meals, salads and professional kitchens.',dAr:'تونة قطعة واحدة فاخرة — مثالية للوجبات السريعة والسلطات والمطابخ الاحترافية.'},
 {id:'tuna-chunk',en:'Chunk Tuna',ar:'تونة قطع',cat:'sea',pack:'140 g · 1,850 g',dEn:'Chunk tuna in retail and 1,850 g catering sizes — high protein, versatile.',dAr:'تونة قطع بعبوات تجزئة وعبوة 1,850 جم للمطابخ — غنية بالبروتين ومتعددة الاستخدام.'},
 {id:'tuna-shredded',en:'Shredded Tuna',ar:'تونة مفتتة',cat:'sea',pack:'140 g',dEn:'Finely shredded tuna for sandwiches, fillings and spreads.',dAr:'تونة مفتتة للساندويتشات والحشوات.'},
 {id:'fz-fries-classic',en:'Classic Cut Fries',ar:'بطاطس فرايز كلاسيك',cat:'frz',pack:'2.5 kg',dEn:'Premium potatoes cut to perfection. Golden and crispy when cooked — a family favourite and restaurant staple.',dAr:'بطاطس فاخرة مقطعة بإتقان، ذهبية ومقرمشة — المفضلة للعائلات وأساسية للمطاعم.'},
 {id:'fz-fries-thin',en:'Thin Cut Fries',ar:'بطاطس فرايز رفيعة',cat:'frz',pack:'2.5 kg',dEn:'Pre-fried thin-cut fries for fast, crisp service in QSR and catering.',dAr:'بطاطس رفيعة مقلية مسبقًا لخدمة سريعة ومقرمشة في المطاعم والتموين.'},
 {id:'fz-green-beans',en:'Frozen Green Beans',ar:'فاصوليا خضراء مجمدة',cat:'frz',pack:'400 g',dEn:'Cut green beans, frozen to keep their colour and bite.',dAr:'فاصوليا خضراء مقطعة مجمدة لتحافظ على لونها وقوامها.'},
 {id:'fz-green-peas',en:'Frozen Green Peas',ar:'بسلة مجمدة',cat:'frz',pack:'400 g',dEn:'Natural green peas, quick-frozen for sweetness.',dAr:'بسلة طبيعية مجمدة سريعًا لتحتفظ بحلاوتها.'},
 {id:'fz-okra',en:'Frozen Okra Zero',ar:'بامية زيرو مجمدة',cat:'frz',pack:'400 g',dEn:'Small, tender "Zero" grade okra — the favourite for Middle Eastern cooking.',dAr:'بامية زيرو صغيرة وطرية — المفضلة في المطبخ الشرقي.'},
 {id:'fz-mixed-veg',en:'Frozen Mixed Vegetables',ar:'خضار مشكل مجمد',cat:'frz',pack:'400 g',dEn:'A colourful frozen blend for sides, soups and rice.',dAr:'خلطة خضار مجمدة ملونة للأطباق الجانبية والشوربات والأرز.'},
 {id:'fz-strawberry',en:'Frozen Strawberries',ar:'فراولة مجمدة',cat:'frz',fruit:1,pack:'400 g',dEn:'Whole strawberries frozen at peak ripeness — for smoothies, desserts and bakery.',dAr:'فراولة كاملة مجمدة في ذروة النضج — للعصائر والحلويات والمخبوزات.'},
 {id:'fz-mango',en:'Frozen Mango',ar:'مانجو مجمدة',cat:'frz',fruit:1,pack:'400 g',dEn:'Sweet mango chunks, frozen and ready for juices and desserts.',dAr:'قطع مانجو حلوة مجمدة وجاهزة للعصائر والحلويات.'}
];
P.forEach((p,i)=>p.no=String(i+1).padStart(2,'0'));
const COUNTRIES=['United Arab Emirates','Egypt','Saudi Arabia','Kuwait','Qatar','Bahrain','Oman','Jordan','Lebanon','Iraq','Libya','Tunisia','Algeria','Morocco','Sudan','Kenya','Nigeria','South Africa','Turkey','United Kingdom','Germany','France','Netherlands','Belgium','Italy','Spain','Greece','Cyprus','Poland','Sweden','India','Pakistan','Bangladesh','Malaysia','Singapore','Indonesia','China','Hong Kong','Japan','Australia','USA','Canada','Other'];
const CH=[
 {k:'retail',en:'Retail',ar:'التجزئة',sEn:'Supermarkets and retail chains — shelf-ready bilingual packs that move.',sAr:'السوبر ماركت وسلاسل التجزئة — عبوات ثنائية اللغة جاهزة للرف.',p:['fava-plain','hummus-tahini','tuna-solid','sweet-corn','fz-green-peas','fz-strawberry'],perks:[['Co-marketing support','دعم تسويقي مشترك'],['Consistent supply','إمداد ثابت'],['Dedicated account manager','مدير حساب مخصص']]},
 {k:'dist',en:'Distribution',ar:'التوزيع',sEn:'Distributors and wholesalers — high-rotation lines and territory options.',sAr:'الموزعون وتجار الجملة — أصناف سريعة الدوران وفرص حصرية.',p:['chickpeas','kidney-beans','tuna-chunk','mixed-veg','fz-mixed-veg','fz-fries-classic'],perks:[['Territory exclusivity','حصرية المناطق'],['Real-time inventory tracking','تتبّع لحظي للمخزون'],['Logistics coordination','تنسيق لوجستي']]},
 {k:'horeca',en:'Restaurants',ar:'المطاعم',sEn:'Restaurants, hotels and catering — kitchen sizes and fast-prep lines.',sAr:'المطاعم والفنادق والتموين — أحجام للمطابخ وأصناف سريعة التحضير.',p:['fz-fries-classic','fz-fries-thin','tuna-chunk','mushroom-pieces','chickpeas','fz-okra'],perks:[['2.5 kg & 1,850 g formats','عبوات 2.5 كجم و1,850 جم'],['Mixed canned + frozen','معلبات ومجمدات معًا'],['Responsive support','دعم سريع الاستجابة']]},
 {k:'pl',en:'Private label',ar:'علامة خاصة',sEn:'Private and white label — our certified lines under your brand.',sAr:'العلامة الخاصة والبيضاء — خطوطنا المعتمدة باسم علامتك.',p:['fava-olive','fava-chili','hummus-tahini','tuna-shredded','fz-mango','fz-okra'],perks:[['From 50 cartons','من 50 كرتونة'],['Custom packaging','تعبئة مخصصة'],['HACCP production','إنتاج معتمد HACCP']]}
];
const CATS=[['all','All products','كل المنتجات'],['leg','Canned legumes','بقوليات معلبة'],['veg','Canned vegetables','خضروات معلبة'],['sea','Tuna','تونة'],['frz','Frozen','مجمدات']];
const TILES=[['leg','Legumes','بقوليات'],['frz','Frozen','مجمدات'],['sea','Tuna','تونة'],['veg','Vegetables','خضروات']];
const TICK=[['Canned tuna','تونة معلبة'],['Fava beans','فول مدمس'],['Frozen okra','بامية مجمدة'],['Hummus','حمص'],['Classic fries','بطاطس فرايز'],['Sweet corn','ذرة حلوة'],['Strawberries','فراولة'],['Private label','علامة خاصة']];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const img=id=>'assets/img/products/'+id+'.webp';
const byId=id=>P.find(p=>p.id===id);
let LANG=(()=>{try{return localStorage.getItem('aqua-lang')||'en'}catch(e){return 'en'}})();
const T=(en,ar)=>LANG==='ar'?ar:en;
const catName=c=>{const x=CATS.find(k=>k[0]===c);return T(x[1],x[2])};
const PLUS='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5v14M5 12h14"/></svg>';

/* ---------- language ---------- */
function splitWords(el){
  // wrap each word (keeping <em> groups) in .w>span for the rise animation
  const tmp=document.createElement('div');tmp.innerHTML=el.innerHTML;let out='',i=0;
  tmp.childNodes.forEach(n=>{
    const isEm=n.nodeType===1,txt=n.textContent;
    txt.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w)){out+=' ';return}
      const inner=isEm?`<em>${w}</em>`:w;out+=`<span class="w"><span style="transition-delay:${(i++*0.06).toFixed(2)}s">${inner}</span></span>`});
  });
  el.innerHTML=out;
}
function applyLang(l){
  LANG=l;try{localStorage.setItem('aqua-lang',l)}catch(e){}
  const h=document.documentElement;h.lang=l;h.dir=l==='ar'?'rtl':'ltr';
  $$('[data-ar]').forEach(el=>{if(el.dataset.en===undefined)el.dataset.en=el.innerHTML;el.innerHTML=l==='ar'?el.dataset.ar:el.dataset.en});
  $$('[data-ph-ar]').forEach(el=>{if(el.dataset.phEn===undefined)el.dataset.phEn=el.placeholder;el.placeholder=l==='ar'?el.dataset.phAr:el.dataset.phEn});
  $$('[data-split]').forEach(splitWords);
  $('#lEn').classList.toggle('on',l==='en');$('#lAr').classList.toggle('on',l==='ar');
  document.title=l==='ar'?'أكوا بريميوم فودز — توريد جملة للمعلبات والمجمدات':'Aqua Premium Foods — Wholesale Canned & Frozen Supply';
  renderTicker();renderTiles();renderCats();renderGrid();renderShelf();renderChips();renderCountries();renderFooter();renderTray();
  if(drawerMode)openDrawer(drawerMode,drawerId);
}
$('#lEn').onclick=()=>applyLang('en');$('#lAr').onclick=()=>applyLang('ar');

/* ---------- nav: hide on scroll down, show on up ---------- */
const nav=$('#nav');let lastY=0;
addEventListener('scroll',()=>{const y=scrollY;nav.classList.toggle('hide',y>lastY&&y>300&&!mm.classList.contains('open'));lastY=y},{passive:true});
const burger=$('#burger'),mm=$('#mmenu');
burger.onclick=()=>{const o=mm.classList.toggle('open');burger.classList.toggle('x',o);burger.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
mm.addEventListener('click',e=>{if(e.target.closest('a')){mm.classList.remove('open');burger.classList.remove('x');document.body.style.overflow=''}});
const navIO=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('.nav-links a').forEach(a=>a.classList.toggle('act',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
$$('section[id]').forEach(s=>navIO.observe(s));

/* ---------- reveal + counters ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add('in');t.querySelectorAll('.count').forEach(countUp);if(t.classList.contains('count'))countUp(t);io.unobserve(t)}),{threshold:.15});
function countUp(el){if(el.dataset.done)return;el.dataset.done=1;const to=+el.dataset.to,t0=performance.now();const f=t=>{const p=Math.min((t-t0)/1500,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}
function observe(){$$('.rv:not(.in),.split:not(.in),.globe:not(.in)').forEach(el=>io.observe(el))}

/* ---------- hero: ticker + rotating tiles ---------- */
function renderTicker(){$('#tk').innerHTML=TICK.concat(TICK).map(t=>`<span>${T(t[0],t[1])}</span>`).join('')}
let tileIdx=[0,0,0,0];
function renderTiles(){
  $('#tiles').innerHTML=TILES.map(([c,en,ar],i)=>{const list=P.filter(p=>p.cat===c);const cur=list[tileIdx[i]%list.length];
    return `<div class="tile" data-i="${i}"><div class="lab"><span>${T(en,ar)}</span><small>${list.length} ${T('SKUs','منتجات')}</small></div><div class="pics">${list.map(p=>`<img src="${img(p.id)}" alt="" class="${p===cur?'on':''}">`).join('')}</div><div class="nm">${T(cur.en,cur.ar)}</div></div>`}).join('');
}
function stepTile(i){
  const c=TILES[i][0],list=P.filter(p=>p.cat===c);tileIdx[i]=(tileIdx[i]+1)%list.length;
  const t=$(`.tile[data-i="${i}"]`);if(!t)return;
  t.querySelectorAll('.pics img').forEach((im,k)=>im.classList.toggle('on',k===tileIdx[i]));
  const p=list[tileIdx[i]];t.querySelector('.nm').textContent=T(p.en,p.ar);
}
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){let k=0;setInterval(()=>{stepTile(k%4);k++},1400)}
$('#tiles').addEventListener('click',e=>{const t=e.target.closest('.tile');if(!t)return;const i=+t.dataset.i,list=P.filter(p=>p.cat===TILES[i][0]);openDrawer('spec',list[tileIdx[i]%list.length].id)});

/* ---------- catalogue ---------- */
let cat='all',query='';const quote=new Set();
function renderCats(){
  $('#cats').innerHTML=CATS.map(([k,en,ar])=>`<button class="${k===cat?'on':''}" data-c="${k}">${T(en,ar)}<small>${k==='all'?P.length:P.filter(p=>p.cat===k).length}</small></button>`).join('');
}
$('#side').addEventListener('click',e=>{const b=e.target.closest('[data-c]');if(!b)return;cat=b.dataset.c;renderCats();filter()});
$$('.q-in').forEach(inp=>inp.addEventListener('input',()=>{query=inp.value.trim().toLowerCase();$$('.q-in').forEach(o=>{if(o!==inp)o.value=inp.value});filter()}));
function visible(p){return (cat==='all'||p.cat===cat)&&(!query||(p.en+' '+p.ar).toLowerCase().includes(query))}
function renderGrid(){
  $('#grid').innerHTML=P.map(p=>`<article class="card" data-id="${p.id}" data-cat="${p.cat}" tabindex="0"><span class="tag">${p.cat==='frz'?T('Frozen','مجمد'):T('Canned','معلب')}</span><div class="pic"><img src="${img(p.id)}" alt="${p.en}" loading="lazy"></div><div class="info"><div><h3>${T(p.en,p.ar)}</h3><div class="meta"><span dir="ltr">${p.pack}</span> · ${catName(p.cat)}</div></div><button class="plus ${quote.has(p.id)?'on':''}" data-add="${p.id}" aria-label="${T('Add to quote','أضف لعرض السعر')}">${PLUS}</button></div></article>`).join('')+`<div class="empty" id="empty">${T('No products match your search.','لا توجد منتجات مطابقة.')}</div>`;
  filter();
}
function filter(){let n=0,d=0;$$('#grid .card').forEach(c=>{const v=visible(byId(c.dataset.id));c.classList.toggle('hide',!v);if(v){c.style.animation='none';c.offsetWidth;c.style.animation='';c.style.animationDelay=(d++*.04)+'s';n++}});$('#empty').classList.toggle('on',!n)}
$('#grid').addEventListener('click',e=>{const a=e.target.closest('[data-add]');if(a){e.stopPropagation();toggleQuote(a.dataset.add);return}const c=e.target.closest('.card');if(c)openDrawer('spec',c.dataset.id)});
$('#grid').addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.classList.contains('card'))openDrawer('spec',e.target.dataset.id)});

/* ---------- quote list + tray ---------- */
function toggleQuote(id,force){
  const on=force!==undefined?force:!quote.has(id);on?quote.add(id):quote.delete(id);
  $$(`[data-add="${id}"]`).forEach(b=>b.classList.toggle('on',on));
  $$(`.chip[data-id="${id}"]`).forEach(c=>c.classList.toggle('on',on));
  renderTray();if(drawerMode)openDrawer(drawerMode,drawerId);
}
function renderTray(){
  const ids=[...quote];$('#tray').classList.toggle('on',ids.length>0);
  $('#trayTh').innerHTML=ids.slice(-3).map(id=>`<img src="${img(id)}" alt="">`).join('');
  $('#trayTxt').textContent=T(ids.length+(ids.length===1?' product in your quote':' products in your quote'),ids.length+' منتج في قائمة عرض السعر');
}
$('#trayBtn').onclick=()=>openDrawer('list');

/* ---------- drawer (spec sheet / quote list) ---------- */
let drawerMode=null,drawerId=null;
const X='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M18 6 6 18M6 6l12 12"/></svg>';
const ARROW='<svg class="ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const TINT={leg:'var(--amber-soft)',veg:'var(--green-soft)',sea:'var(--blue-soft)',frz:'var(--aqua-soft)'};
function openDrawer(mode,id){
  drawerMode=mode;drawerId=id;const d=$('#drawer');
  if(mode==='spec'){
    const p=byId(id),frz=p.cat==='frz',on=quote.has(id);
    $('#dTitle').textContent=`SKU ${p.no} · ${catName(p.cat)}`;
    const rows=[[T('Pack size','حجم العبوة'),`<span dir="ltr">${p.pack}</span>`],[T('Storage','التخزين'),frz?T('Frozen, ≤ −18°C','مجمد، ≤ −18°م'):T('Ambient, shelf-stable','درجة حرارة الغرفة')],[T('Branding','العلامة'),T('Aqua Premium · private · white label','أكوا بريميوم · خاصة · بيضاء')],[T('Minimum order','الحد الأدنى'),T('From 50 cartons (mixable)','من 50 كرتونة (قابلة للمزج)')],[T('Ingredients','المكونات'),T('100% natural, no artificial additives','طبيعية 100%، بلا إضافات')],[T('Certification','الشهادة'),'HACCP']];
    $('#dBody').innerHTML=`<div class="d-pic" style="--cc:${TINT[p.cat]}"><img src="${img(id)}" alt="${p.en}"></div><h3>${T(p.en,p.ar)}</h3><p class="alt">${T(p.ar,p.en)}</p><p class="desc">${T(p.dEn,p.dAr)}</p><dl class="spec">${rows.map(r=>`<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join('')}</dl>`;
    $('#dFoot').innerHTML=`<button class="b ${on?'b-soft':'b-ink'}" id="dAdd">${on?T('✓ In your quote','✓ في قائمتك'):T('+ Add to quote','+ أضف لعرض السعر')}</button>${quote.size?`<button class="b b-amber" id="dList">${T('Quote list','القائمة')} (${quote.size})</button>`:''}`;
    $('#dAdd').onclick=()=>toggleQuote(id);
  }else{
    $('#dTitle').textContent=T('Your quote list','قائمة عرض السعر');
    const ids=[...quote];
    $('#dBody').innerHTML=ids.length?`<div class="ql">${ids.map(i=>{const p=byId(i);return `<div class="ql-i"><img src="${img(i)}" alt=""><div><b>${T(p.en,p.ar)}</b><small><span dir="ltr">${p.pack}</span> · ${catName(p.cat)}</small></div><button data-rm="${i}" aria-label="Remove">${X}</button></div>`}).join('')}</div>`:`<p class="ql-empty">${T('Your list is empty — add products with +.','القائمة فارغة — أضف منتجات بعلامة +.')}</p>`;
    $('#dFoot').innerHTML=`<button class="b b-soft" id="dMore">${T('Add more','أضف المزيد')}</button><a href="#request" class="b b-ink" id="dGo">${T('Request pricing','اطلب الأسعار')}${ARROW}</a>`;
    $('#dMore').onclick=()=>{closeDrawer();$('#catalogue').scrollIntoView({behavior:'smooth'})};
    $('#dGo').onclick=closeDrawer;
  }
  const L=$('#dList');if(L)L.onclick=()=>openDrawer('list');
  d.classList.add('on');$('#scrim').classList.add('on');document.body.style.overflow='hidden';
}
function closeDrawer(){drawerMode=null;$('#drawer').classList.remove('on');$('#scrim').classList.remove('on');document.body.style.overflow=''}
$('#dClose').onclick=closeDrawer;$('#scrim').onclick=closeDrawer;
$('#dBody').addEventListener('click',e=>{const r=e.target.closest('[data-rm]');if(r){toggleQuote(r.dataset.rm,false);return}if(e.target.closest('.d-pic')){$('#lbImg').src=$('.d-pic img').src;$('#lb').classList.add('on')}});
$('#lb').onclick=()=>$('#lb').classList.remove('on');
addEventListener('keydown',e=>{if(e.key!=='Escape')return;if($('#lb').classList.contains('on'))$('#lb').classList.remove('on');else if(drawerMode)closeDrawer()});

/* ---------- ordering rail ---------- */
const rail=$('#rail');
const railStep=d=>{const w=rail.querySelector('.step').offsetWidth+14;rail.scrollBy({left:(document.dir==='rtl'?-d:d)*w,behavior:'smooth'})};
$('#rNext').onclick=()=>railStep(1);$('#rPrev').onclick=()=>railStep(-1);

/* ---------- channel shelf ---------- */
let ch='retail';
function renderShelf(){
  $('#pills').innerHTML=CH.map(c=>`<button class="${c.k===ch?'on':''}" data-k="${c.k}" role="tab" aria-selected="${c.k===ch}">${T(c.en,c.ar)}</button>`).join('');
  const c=CH.find(x=>x.k===ch);
  $('#chSub').textContent=T(c.sEn,c.sAr);
  $('#shelf').innerHTML=c.p.map((id,i)=>{const p=byId(id);return `<button class="sp" data-id="${id}" style="animation-delay:${(i*.07).toFixed(2)}s"><img src="${img(id)}" alt="${p.en}"><span>${T(p.en,p.ar)}</span></button>`}).join('');
  $('#perks').innerHTML=c.perks.map((k,i)=>`<span style="animation-delay:${(.3+i*.08).toFixed(2)}s">${T(k[0],k[1])}</span>`).join('');
}
$('#pills').addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(b){ch=b.dataset.k;renderShelf()}});
$('#shelf').addEventListener('click',e=>{const b=e.target.closest('.sp');if(b)openDrawer('spec',b.dataset.id)});

/* ---------- partnership accordion ---------- */
$('#acc').addEventListener('click',e=>{const h=e.target.closest('.ac-h');if(!h)return;const ac=h.parentElement,open=!ac.classList.contains('on');
  $$('#acc .ac').forEach(a=>{a.classList.remove('on');a.querySelector('.ac-h').setAttribute('aria-expanded','false')});
  if(open){ac.classList.add('on');h.setAttribute('aria-expanded','true')}});

/* ---------- live clocks ---------- */
function tick(){
  const f=tz=>new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:tz}).format(new Date());
  const lbl=tz=>{const h=+new Intl.DateTimeFormat('en-GB',{hour:'numeric',hour12:false,timeZone:tz}).format(new Date());return h>=9&&h<18?T('office open','المكتب مفتوح'):T('after hours','خارج الدوام')};
  $('#clkDxb').innerHTML=`${f('Asia/Dubai')}<small>${lbl('Asia/Dubai')}</small>`;
  $('#clkCai').innerHTML=`${f('Africa/Cairo')}<small>${lbl('Africa/Cairo')}</small>`;
}
tick();setInterval(tick,20000);

/* ---------- form ---------- */
function renderChips(){$('#chips').innerHTML=P.map(p=>`<span class="chip ${quote.has(p.id)?'on':''}" data-id="${p.id}" role="checkbox" tabindex="0" aria-checked="${quote.has(p.id)}">${T(p.en,p.ar)}</span>`).join('')}
$('#chips').addEventListener('click',e=>{const c=e.target.closest('.chip');if(c){toggleQuote(c.dataset.id);$('#chips').classList.remove('err')}});
$('#chips').addEventListener('keydown',e=>{const c=e.target.closest('.chip');if(c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();toggleQuote(c.dataset.id)}});
function renderCountries(){const s=$('#fCountry'),v=s.value;s.innerHTML=`<option value="">${T('Select…','اختر…')}</option>`+COUNTRIES.map(c=>`<option>${c}</option>`).join('');s.value=v}
$('#form').addEventListener('submit',e=>{
  e.preventDefault();const t=$('#toast');let ok=true;
  ['fName','fCompany','fEmail','fCountry','fType'].forEach(id=>{const el=$('#'+id),bad=!el.value.trim()||(el.type==='email'&&!/^\S+@\S+\.\S+$/.test(el.value));el.parentElement.classList.toggle('err',bad);if(bad)ok=false});
  if(!ok){t.className='toast show bad';t.textContent=T('Please fill in the required fields.','يرجى إكمال الحقول المطلوبة.');return}
  if(!quote.size){$('#chips').classList.add('err');t.className='toast show bad';t.textContent=T('Please choose at least one product.','يرجى اختيار منتج واحد على الأقل.');return}
  const v=id=>$('#'+id).value||'—';
  const body=`WHOLESALE PRICING REQUEST — Aqua Premium Foods\n\nName: ${v('fName')}\nCompany: ${v('fCompany')}\nEmail: ${v('fEmail')}\nPhone: ${v('fPhone')}\nCountry: ${v('fCountry')}\nBusiness type: ${v('fType')}\nEstimated volume: ${v('fQty')}\nBranding: ${v('fBrand')}\n\nProducts:\n${[...quote].map(id=>'- '+byId(id).en+' ('+byId(id).pack+')').join('\n')}\n\nNotes:\n${v('fMsg')}`;
  location.href=`mailto:info@pureibs.com?subject=${encodeURIComponent('Wholesale request — '+$('#fCompany').value+' ('+$('#fCountry').value+')')}&body=${encodeURIComponent(body)}`;
  t.className='toast show ok';t.textContent=T('Your email app is opening with the request ready. Thank you!','يتم فتح تطبيق البريد والطلب جاهز. شكرًا لك!');
});
$$('.f :is(input,select)').forEach(el=>el.addEventListener('input',()=>el.parentElement.classList.remove('err')));

/* ---------- footer + init ---------- */
function renderFooter(){$('#fProds').innerHTML=['tuna-solid','fava-plain','hummus-tahini','fz-fries-classic','fz-okra','fz-strawberry'].map(id=>`<li><a href="#catalogue" data-open="${id}">${T(byId(id).en,byId(id).ar)}</a></li>`).join('')}
$('#fProds').addEventListener('click',e=>{const a=e.target.closest('[data-open]');if(a){e.preventDefault();openDrawer('spec',a.dataset.open)}});
$('#yr').textContent=new Date().getFullYear();
applyLang(LANG);observe();
