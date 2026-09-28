/* ================= DATA ================= */
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
const CHANNELS=[
 {k:'retail',en:'Retail',ar:'التجزئة',ic:'<path d="M6 3h12l1 5H5z"/><path d="M5 8v12h14V8M9 12h6"/>',hEn:'Supermarkets & retail chains',hAr:'السوبر ماركت وسلاسل التجزئة',p:['fava-plain','hummus-tahini','tuna-solid','sweet-corn','fz-green-peas','fz-strawberry'],perks:[['Shelf-ready bilingual packs','عبوات ثنائية اللغة جاهزة للرفوف'],['Co-marketing support','دعم تسويقي مشترك'],['Consistent, dependable supply','إمداد ثابت يُعتمد عليه'],['Dedicated account manager','مدير حساب مخصص']]},
 {k:'dist',en:'Distribution',ar:'التوزيع',ic:'<path d="M2 17h13V6H2zM15 10h4l3 3v4h-7"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',hEn:'Distributors & wholesalers',hAr:'الموزعون وتجار الجملة',p:['chickpeas','kidney-beans','tuna-chunk','mixed-veg','fz-mixed-veg','fz-fries-classic'],perks:[['Territory-exclusive opportunities','فرص حصرية للمناطق'],['Real-time inventory tracking','تتبّع لحظي للمخزون'],['Dedicated logistics coordination','تنسيق لوجستي مخصص'],['Full-container pricing','أسعار الحاويات الكاملة']]},
 {k:'horeca',en:'Food service',ar:'المطاعم',ic:'<path d="M3 11h18M5 11a7 7 0 0 1 14 0M12 4V2M4 15h16l-1 5H5z"/>',hEn:'Restaurants, hotels & catering',hAr:'المطاعم والفنادق والتموين',p:['fz-fries-classic','fz-fries-thin','tuna-chunk','mushroom-pieces','chickpeas','fz-okra'],perks:[['Catering sizes — 2.5 kg, 1,850 g','أحجام للمطابخ — 2.5 كجم و1,850 جم'],['Responsive support team','فريق دعم سريع الاستجابة'],['Mixed canned + frozen orders','طلبات مشكّلة معلبات ومجمدات'],['Reliable scheduled delivery','توصيل مجدول موثوق']]},
 {k:'pl',en:'Private label',ar:'علامة خاصة',ic:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',hEn:'Private & white-label programmes',hAr:'برامج العلامة الخاصة والبيضاء',p:['fava-olive','fava-chili','hummus-tahini','tuna-shredded','fz-mango','fz-okra'],perks:[['Your brand, our certified lines','علامتك على خطوطنا المعتمدة'],['Custom packaging available','تعبئة مخصصة متاحة'],['Projects from 50 cartons','مشاريع تبدأ من 50 كرتونة'],['HACCP-certified production','إنتاج معتمد HACCP']]}
];
const COUNTRIES=['United Arab Emirates','Egypt','Saudi Arabia','Kuwait','Qatar','Bahrain','Oman','Jordan','Lebanon','Iraq','Libya','Tunisia','Algeria','Morocco','Sudan','Kenya','Nigeria','South Africa','Turkey','United Kingdom','Germany','France','Netherlands','Belgium','Italy','Spain','Greece','Cyprus','Poland','Sweden','India','Pakistan','Bangladesh','Malaysia','Singapore','Indonesia','China','Hong Kong','Japan','Australia','USA','Canada','Other'];
const MARQ=[['CANNED TUNA','Solid · Chunk · Shredded'],['LEGUMES','Fava · Hummus · Chickpeas'],['CANNED VEGETABLES','Corn · Peas · Mushrooms'],['FROZEN VEGETABLES','Okra · Beans · Peas'],['FROZEN FRUIT','Strawberry · Mango'],['FRIES','Classic · Thin cut']];
/*MAP*/

/* ================= LANG ================= */
let LANG=(()=>{try{return localStorage.getItem('aqua-lang')||'en'}catch(e){return 'en'}})();
const T=(en,ar)=>LANG==='ar'?ar:en;
function applyLang(l){
  LANG=l;try{localStorage.setItem('aqua-lang',l)}catch(e){}
  const h=document.documentElement;h.lang=l;h.dir=l==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-ar]').forEach(el=>{if(el.dataset.en===undefined)el.dataset.en=el.innerHTML;el.innerHTML=l==='ar'?el.dataset.ar:el.dataset.en});
  document.querySelectorAll('[data-ph-ar]').forEach(el=>{if(el.dataset.phEn===undefined)el.dataset.phEn=el.placeholder;el.placeholder=l==='ar'?el.dataset.phAr:el.dataset.phEn});
  document.getElementById('lEn').classList.toggle('on',l==='en');document.getElementById('lAr').classList.toggle('on',l==='ar');
  document.title=l==='ar'?'أكوا بريميوم فودز — حلول الجملة للمعلبات والمجمدات':'Aqua Premium Foods — B2B & Wholesale Canned and Frozen Foods';
  renderGrid();renderChannels();renderRegions();renderFaq();setStepText();renderChips();renderFooter();renderCountries();renderMarquee();placeLabels();
  if(openId)openModal(openId);
}
document.getElementById('lEn').onclick=()=>applyLang('en');
document.getElementById('lAr').onclick=()=>applyLang('ar');

/* ================= NAV ================= */
const nav=document.getElementById('nav');
const onScroll=()=>{nav.classList.toggle('solid',scrollY>40||mm.classList.contains('open'))};
const burger=document.getElementById('burger'),mm=document.getElementById('mmenu');
addEventListener('scroll',onScroll,{passive:true});onScroll();
burger.onclick=()=>{const o=mm.classList.toggle('open');burger.classList.toggle('x',o);burger.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':'';onScroll()};
mm.querySelectorAll('a').forEach(a=>a.onclick=()=>{mm.classList.remove('open');burger.classList.remove('x');document.body.style.overflow='';onScroll()});
const secs=[...document.querySelectorAll('section[id]')],links=[...document.querySelectorAll('.nav-links a')];
const navIO=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('act',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>navIO.observe(s));

/* ================= REVEAL + COUNTERS ================= */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
function countUp(el){const to=+el.dataset.to,d=1600,t0=performance.now();const f=t=>{const p=Math.min((t-t0)/d,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}
setTimeout(()=>document.querySelectorAll('.count').forEach(countUp),900);

/* ================= MARQUEE ================= */
function renderMarquee(){
  const set=MARQ.map(e=>`<span class="mq-item">${e[0]}<small>${e[1]}</small></span>`).join('');
  const lbl=`<span class="mq-item" style="color:var(--ink-50);font-weight:600;font-family:var(--f-body);font-size:.85rem">${T('Trusted by 500+ retailers','موثوقون لدى أكثر من 500 تاجر')}</span>`;
  document.getElementById('mq').innerHTML=(lbl+set).repeat(2);
}

/* ================= PRODUCTS ================= */
let filter='all',query='';const basket=new Set();
const img=id=>'assets/img/products/'+id+'.webp';
const catLabel=c=>({leg:T('Canned legumes','بقوليات معلبة'),veg:T('Canned vegetables','خضروات معلبة'),sea:T('Canned tuna','تونة معلبة'),frz:T('Frozen','مجمدات')})[c];
const visible=p=>(filter==='all'||p.cat===filter)&&(!query||(p.en+' '+p.ar).toLowerCase().includes(query));
function cardHTML(p){
  return `<article class="pc rv ${visible(p)?'':'hide'}" data-id="${p.id}" data-cat="${p.cat}">
    <div class="pc-stage" role="button" tabindex="0" aria-label="${T('Open spec sheet','افتح بطاقة المواصفات')}: ${T(p.en,p.ar)}">
      <div class="pc-top"><span class="pc-no">${p.no}</span><span class="pc-face-tag">${p.cat==='frz'?T('Frozen','مجمد'):T('Canned','معلب')}</span></div>
      <img src="${img(p.id)}" alt="${p.en}" loading="lazy">
    </div>
    <div class="pc-body">
      <div class="pc-name"><h3>${LANG==='ar'?p.ar:p.en}</h3><span>${LANG==='ar'?p.en:p.ar}</span></div>
      <div class="pc-meta"><span dir="ltr">${p.pack}</span><span>${catLabel(p.cat)}</span></div>
      <div class="pc-act">
        <button class="btn btn-line" data-spec style="flex:1;padding:8px 10px;font-size:.8rem;justify-content:center">${T('Spec sheet','المواصفات')}</button>
        <button class="add ${basket.has(p.id)?'on':''}" data-add="${p.id}" aria-pressed="${basket.has(p.id)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg>${T('Quote','عرض سعر')}</button>
      </div>
    </div>
  </article>`;
}
function ctaCards(){
  const hide=filter==='all'&&!query?'':'hide';
  return `<article class="pc pc-cta rv ${hide}"><div><span class="mono">${T('Private & white label','علامة خاصة وبيضاء')}</span><h3>${T('Your brand. Our certified lines.','علامتك. خطوطنا المعتمدة.')}</h3><p>${T('Any line in the range, packed under your brand with custom packaging.','أي منتج من التشكيلة، بعلامتك وتعبئة مخصصة.')}</p><ul><li>${T('Projects from 50 cartons','مشاريع من 50 كرتونة')}</li><li>${T('Canned & frozen lines','معلبات ومجمدات')}</li><li>HACCP</li></ul></div><a href="#rfq" class="btn btn-primary" data-pl="1">${T('Start a project','ابدأ مشروعك')}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></article>
  <article class="pc pc-cta alt rv ${hide}"><div><span class="mono">${T('Territory partners','شركاء المناطق')}</span><h3>${T('Own the brand in your market.','امتلك العلامة في سوقك.')}</h3><p>${T('Exclusive territory opportunities for qualifying distributors.','فرص حصرية للموزعين المؤهلين.')}</p><ul><li>${T('Co-marketing support','دعم تسويقي مشترك')}</li><li>${T('Dedicated account manager','مدير حساب مخصص')}</li><li>${T('Real-time inventory tracking','تتبّع لحظي للمخزون')}</li></ul></div><a href="#partnership" class="btn btn-line">${T('See the partnership','تعرّف على الشراكة')}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></article>`;
}
const pGrid=document.getElementById('pGrid');
function renderGrid(){
  pGrid.innerHTML=P.map(cardHTML).join('')+ctaCards()+`<div class="p-empty" id="pEmpty">${T('No products match your search.','لا توجد منتجات مطابقة لبحثك.')}</div>`;
  pGrid.querySelectorAll('.pc').forEach(c=>c.classList.add('in'));applyFilter();
}
function applyFilter(){
  let n=0;pGrid.querySelectorAll('.pc[data-id]').forEach(c=>{const v=visible(P.find(x=>x.id===c.dataset.id));c.classList.toggle('hide',!v);if(v)n++});
  pGrid.querySelectorAll('.pc-cta').forEach(c=>c.classList.toggle('hide',!(filter==='all'&&!query)));
  document.getElementById('pEmpty').classList.toggle('on',!n);
}
pGrid.addEventListener('click',e=>{
  if(e.target.closest('[data-pl]'))document.getElementById('fType').value='Private label';
  const card=e.target.closest('.pc[data-id]');if(!card)return;
  if(e.target.closest('[data-add]')){toggleBasket(card.dataset.id);return}
  if(e.target.closest('.pc-stage,[data-spec]'))openModal(card.dataset.id);
});
pGrid.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('pc-stage')){e.preventDefault();openModal(e.target.closest('.pc').dataset.id)}});
document.getElementById('tabs').addEventListener('click',e=>{const b=e.target.closest('.tab');if(!b)return;document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('on',t===b));filter=b.dataset.f;applyFilter()});
document.getElementById('pSearch').addEventListener('input',e=>{query=e.target.value.trim().toLowerCase();applyFilter()});

/* basket <-> RFQ chips */
function toggleBasket(id,force){
  const on=force!==undefined?force:!basket.has(id);on?basket.add(id):basket.delete(id);
  document.querySelectorAll(`[data-add="${id}"]`).forEach(b=>{b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});
  document.querySelectorAll(`.chip[data-id="${id}"]`).forEach(c=>{c.classList.toggle('on',on);c.setAttribute('aria-checked',on)});
  const cnt=document.getElementById('basketCnt');cnt.textContent=basket.size;cnt.classList.toggle('on',basket.size>0);
  if(openId===id)setModalAdd();
}
function renderChips(){document.getElementById('chips').innerHTML=P.map(p=>`<span class="chip ${basket.has(p.id)?'on':''}" data-id="${p.id}" role="checkbox" tabindex="0" aria-checked="${basket.has(p.id)}">${T(p.en,p.ar)}</span>`).join('')}
document.getElementById('chips').addEventListener('click',e=>{const c=e.target.closest('.chip');if(c){toggleBasket(c.dataset.id);document.getElementById('chips').classList.remove('err')}});
document.getElementById('chips').addEventListener('keydown',e=>{const c=e.target.closest('.chip');if(c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();toggleBasket(c.dataset.id)}});

/* ================= MODAL ================= */
const modal=document.getElementById('modal');let openId=null;
const STAGE={leg:'#F4EBDD',veg:'#E9F2DF',sea:'#E1ECF8',frz:'#DDF2F5'};
function setModalAdd(){document.getElementById('mAdd').innerHTML=basket.has(openId)?T('✓ Added to quote','✓ أضيف لطلب السعر'):T('+ Add to quote','+ أضف لطلب السعر')}
function openModal(id){
  const p=P.find(x=>x.id===id);if(!p)return;openId=id;
  const im=document.getElementById('mImg');im.src=img(id);im.alt=p.en;
  document.getElementById('mMedia').style.setProperty('--stage',STAGE[p.cat]);
  document.getElementById('mNo').textContent=`SKU ${p.no} · ${catLabel(p.cat)}`;
  document.getElementById('mName').textContent=LANG==='ar'?p.ar:p.en;
  document.getElementById('mAr').textContent=LANG==='ar'?p.en:p.ar;
  document.getElementById('mDesc').textContent=T(p.dEn,p.dAr);
  const frz=p.cat==='frz';
  const rows=[
    [T('Range','التشكيلة'),catLabel(p.cat)],
    [T('Pack size','حجم العبوة'),p.pack.split(' · ').map(k=>`<span class="tag" dir="ltr">${k}</span>`).join('')],
    [T('Storage','التخزين'),frz?`<span dir="ltr">≤ −18°C</span> · ${T('frozen','مجمد')}`:T('Ambient · shelf-stable','درجة حرارة الغرفة · ثابت الصلاحية')],
    [T('Branding','العلامة'),`<span class="tag">Aqua Premium</span><span class="tag">${T('Private label','علامة خاصة')}</span><span class="tag">${T('White label','علامة بيضاء')}</span>`],
    [T('Minimum order','الحد الأدنى'),T('From 50 cartons (mixable)','من 50 كرتونة (قابلة للمزج)')],
    [T('Ingredients','المكونات'),T('100% natural · no artificial additives','طبيعية 100% · بلا إضافات صناعية')],
    [T('Certification','الشهادات'),'HACCP']
  ];
  document.getElementById('mSheet').innerHTML=rows.map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`).join('');
  setModalAdd();modal.classList.add('open');document.body.style.overflow='hidden';
}
function closeModal(){modal.classList.remove('open');document.body.style.overflow='';openId=null}
document.getElementById('mClose').onclick=closeModal;
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.getElementById('mAdd').onclick=()=>toggleBasket(openId);
document.getElementById('mGo').onclick=()=>{if(openId)toggleBasket(openId,true);closeModal()};
const lb=document.getElementById('lightbox');
document.querySelector('.m-view').onclick=()=>{document.getElementById('lbImg').src=document.getElementById('mImg').src;lb.classList.add('open')};
lb.onclick=()=>lb.classList.remove('open');
addEventListener('keydown',e=>{if(e.key==='Escape'){if(lb.classList.contains('open'))lb.classList.remove('open');else if(openId)closeModal()}});

/* ================= CHANNEL PLANNER ================= */
let selC='retail';
function renderChannels(){
  document.getElementById('chBar').innerHTML=CHANNELS.map(c=>`<button class="mbtn ${c.k===selC?'on':''}" data-c="${c.k}" role="tab" aria-selected="${c.k===selC}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${c.ic}</svg>${T(c.en,c.ar)}</button>`).join('');
  const c=CHANNELS.find(x=>x.k===selC);
  const rows=c.p.map((id,i)=>{const p=P.find(x=>x.id===id);return `<div class="crop" style="animation-delay:${(i*.05).toFixed(2)}s"><img src="${img(id)}" alt="" loading="lazy"><div><b>${T(p.en,p.ar)}</b><small>${catLabel(p.cat)}</small></div><span class="pk" dir="ltr">${p.pack}</span></div>`}).join('');
  document.getElementById('chBody').innerHTML=`<div class="pl-head"><b>${T(c.hEn,c.hAr)}</b><span>${c.p.length} ${T('starter SKUs','منتجات للبداية')}</span></div><div class="crops">${rows}</div><div class="perks">${c.perks.map(k=>`<span>${T(k[0],k[1])}</span>`).join('')}</div>`;
}
document.getElementById('chBar').addEventListener('click',e=>{const b=e.target.closest('.mbtn');if(b){selC=b.dataset.c;renderChannels()}});

/* ================= COUNTRIES / FOOTER ================= */
function renderCountries(){const s=document.getElementById('fCountry'),v=s.value;s.innerHTML=`<option value="">${T('Select country…','اختر الدولة…')}</option>`+COUNTRIES.map(c=>`<option>${c}</option>`).join('');s.value=v}
function renderFooter(){document.getElementById('fProds').innerHTML=['tuna-solid','fava-plain','hummus-tahini','chickpeas','fz-fries-classic','fz-okra','fz-strawberry'].map(id=>{const p=P.find(x=>x.id===id);return `<li><a href="#products" data-open="${id}">${T(p.en,p.ar)}</a></li>`}).join('')+`<li><a href="#products">${T('View all 24 →','عرض الـ 24 منتجًا ←')}</a></li>`}
document.getElementById('fProds').addEventListener('click',e=>{const a=e.target.closest('[data-open]');if(a){e.preventDefault();openModal(a.dataset.open)}});
document.getElementById('yr').textContent=new Date().getFullYear();

/* ================= PROCESS PROGRESS + PARALLAX ================= */
const proc=document.getElementById('process'),pf=document.getElementById('processFill'),steps=[...proc.querySelectorAll('.pstep')];
const prodBg=document.getElementById('prodBg'),facImg=document.getElementById('facImg'),flWrap=document.getElementById('flWrap');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
let ticking=false;
function frame(){
  ticking=false;const vh=innerHeight;
  const r=proc.getBoundingClientRect();
  const p=Math.max(0,Math.min(1,(vh*.78-r.top)/(r.height+vh*.35)));
  pf.style.setProperty('--p',p.toFixed(3));
  steps.forEach((s,i)=>s.classList.toggle('on',p>=i/(steps.length-1)-.02));
  if(!reduce){
    const pr=prodBg.parentElement.getBoundingClientRect();
    if(pr.bottom>0&&pr.top<vh)prodBg.style.transform=`translateY(${((pr.top+pr.height/2-vh/2)*-.12).toFixed(1)}px)`;
    const fr=facImg.getBoundingClientRect();
    if(fr.bottom>0&&fr.top<vh)facImg.style.transform=`translateY(${((fr.top+fr.height/2-vh/2)*-.08).toFixed(1)}px)`;
    if(scrollY<vh)flWrap.style.translate=`0 ${(scrollY*.18).toFixed(1)}px`;
  }
}
addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(frame)}},{passive:true});frame();
if(!reduce&&matchMedia('(pointer:fine)').matches){
  document.querySelector('.hero').addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;flWrap.style.transform=`translate(${(x*-24).toFixed(1)}px,${(y*-16).toFixed(1)}px)`});
}

/* ================= WORLD MAP ================= */
const HUBS=[[70.5,38.8],[84.8,42.8],[81,55.5],[66.4,14],[72,15.3],[62,18.5],[115.6,23.4],[108,31],[122,36],[89,30.5],[86.5,27.5],[98,33]];
const OR={cai:[81.8,26.8],dxb:[92.7,29.8]};
const REGIONS=[
 {k:'me',en:'Middle East & GCC',ar:'الشرق الأوسط والخليج',h:[9,10,11],o:'dxb',dEn:'Served from our Dubai hub — retail chains, distributors and food service across the GCC and Levant.',dAr:'نخدمها من مركز دبي — سلاسل التجزئة والموزعون وقطاع الضيافة في الخليج والشام.'},
 {k:'af',en:'Africa',ar:'أفريقيا',h:[0,1,2],o:'cai',dEn:'Supplied from Cairo into North, East and Sub-Saharan African markets.',dAr:'نورّد من القاهرة إلى أسواق شمال وشرق وجنوب أفريقيا.'},
 {k:'eu',en:'Europe',ar:'أوروبا',h:[3,4,5],o:'cai',dEn:'Retailers across Europe stocking our canned and frozen lines.',dAr:'تجار تجزئة في أوروبا يعرضون معلباتنا ومجمداتنا.'},
 {k:'as',en:'Asia',ar:'آسيا',h:[6,7,8],o:'dxb',dEn:'Restaurants and distributors in Asia supplied via Dubai.',dAr:'مطاعم وموزعون في آسيا نخدمهم عبر دبي.'}
];
let selR=null;
function renderRegions(){
  document.getElementById('rgList').innerHTML=`<button class="rg ${selR===null?'on':''}" data-r="">${T('All regions','كل المناطق')}<small>50+</small></button>`+REGIONS.map(r=>`<button class="rg ${selR===r.k?'on':''}" data-r="${r.k}">${T(r.en,r.ar)}</button>`).join('');
  const r=REGIONS.find(x=>x.k===selR);
  document.getElementById('rgCountries').textContent=r?T(r.dEn,r.dAr):T('Two hubs — Cairo and Dubai — serving customers in 50+ countries. Select a region.','مركزان في القاهرة ودبي يخدمان عملاء في أكثر من 50 دولة. اختر منطقة.');
  const box=document.getElementById('mapBox');box.classList.toggle('filter',!!r);
  box.querySelectorAll('[data-h]').forEach(el=>el.classList.toggle('hl',!!r&&r.h.includes(+el.dataset.h)));
}
document.getElementById('rgList').addEventListener('click',e=>{const b=e.target.closest('.rg');if(b){selR=b.dataset.r||null;renderRegions()}});
const svg=document.getElementById('map'),mapBox=document.getElementById('mapBox');
(function(){
  let land='';
  MAP.rows.forEach((row,y)=>{for(let x=0;x<row.length;x++)if(row[x]!=='0')land+=`M${x+.5} ${y+.5}h0`});
  const arcs=REGIONS.flatMap(r=>r.h.map(i=>{const O=OR[r.o],[x,y]=HUBS[i];const mx=(O[0]+x)/2,my=(O[1]+y)/2-Math.hypot(x-O[0],y-O[1])*.3;return `<path class="arc" data-h="${i}" pathLength="1" d="M${O[0]} ${O[1]}Q${mx.toFixed(1)} ${my.toFixed(1)} ${x} ${y}" style="animation-delay:${(.3+i*.12).toFixed(2)}s"/><circle class="hub" data-h="${i}" cx="${x}" cy="${y}" r=".55" style="transition-delay:${(1.2+i*.12).toFixed(2)}s"/>`})).join('');
  const org=Object.values(OR).map(([x,y],j)=>`<circle class="origin-ring" cx="${x}" cy="${y}" r="1" style="animation-delay:${j*.6}s"/><circle class="origin-ring" cx="${x}" cy="${y}" r="1" style="animation-delay:${1.3+j*.6}s"/><circle cx="${x}" cy="${y}" r=".8" fill="${j?'#22B8CF':'#F5A524'}" stroke="#fff" stroke-width=".25"/>`).join('');
  svg.innerHTML=`<defs><linearGradient id="arcg" x1="0" x2="1"><stop offset="0" stop-color="#F5A524"/><stop offset="1" stop-color="#8EDCE8"/></linearGradient></defs><path class="dots-land" d="${land}" stroke-width=".52" stroke-linecap="round"/>${arcs}${org}`;
  new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){mapBox.classList.add('in');placeLabels();o.disconnect()}}),{threshold:.3}).observe(svg);
  addEventListener('resize',placeLabels);
})();
function placeLabels(){
  const sr=svg.getBoundingClientRect(),br=mapBox.getBoundingClientRect();
  [['mapLabel','cai'],['mapLabel2','dxb']].forEach(([id,k])=>{const l=document.getElementById(id);l.style.left=(sr.left-br.left+OR[k][0]/160*sr.width)+'px';l.style.top=(sr.top-br.top+OR[k][1]/76*sr.height)+'px'});
}

/* ================= RFQ STEPS ================= */
let curStep=1;
const STEP1=['fName','fCompany','fEmail','fCountry','fType'];
function checkStep1(){let ok=true;STEP1.forEach(id=>{const el=document.getElementById(id),bad=!el.value.trim()||(el.type==='email'&&!/^\S+@\S+\.\S+$/.test(el.value));el.parentElement.classList.toggle('err',bad);if(bad)ok=false});return ok}
function setStepText(){document.getElementById('stepLbl').textContent=T('Step '+curStep+' of 2','الخطوة '+curStep+' من 2')}
function goStep(n){
  curStep=n;const form=document.getElementById('rfqForm');
  form.querySelectorAll('.fstep').forEach(s=>s.classList.toggle('on',+s.dataset.step===n));
  document.querySelectorAll('#stepper li').forEach(li=>{const s=+li.dataset.s;li.classList.toggle('on',s===n);li.classList.toggle('done',s<n)});
  document.getElementById('toast').className='toast';setStepText();
  const top=form.getBoundingClientRect().top;if(top<80)scrollBy({top:top-110,behavior:'smooth'});
}
function step1Fail(){const t=document.getElementById('toast');t.className='toast show bad';t.textContent=T('Please complete your company and contact details first.','يرجى إكمال بيانات الشركة والتواصل أولًا.')}
document.getElementById('toStep2').onclick=()=>{checkStep1()?goStep(2):step1Fail()};
document.getElementById('toStep1').onclick=()=>goStep(1);
document.getElementById('stepper').addEventListener('click',e=>{const li=e.target.closest('li');if(!li)return;+li.dataset.s===1?goStep(1):checkStep1()?goStep(2):step1Fail()});
document.getElementById('rfqForm').addEventListener('submit',e=>{
  e.preventDefault();
  const q=id=>document.getElementById(id),toast=q('toast');
  if(!checkStep1()){goStep(1);step1Fail();return}
  if(!basket.size){q('chips').classList.add('err');toast.className='toast show bad';toast.textContent=T('Please choose at least one product.','يرجى اختيار منتج واحد على الأقل.');return}
  const prods=P.filter(p=>basket.has(p.id)).map(p=>p.en+' ('+p.pack+')').join(', ');
  const val=id=>q(id).value||'—';
  const body=`WHOLESALE PRICING REQUEST — Aqua Premium Foods\n\nName: ${val('fName')}\nCompany: ${val('fCompany')}\nEmail: ${val('fEmail')}\nPhone: ${val('fPhone')}\nCountry: ${val('fCountry')}\nBusiness type: ${val('fType')}\n\nProducts: ${prods}\nEstimated volume: ${val('fQty')}\nBranding: ${val('fBrand')}\nSupply from: ${val('fHub')}\nDestination: ${val('fPort')}\n\nDetails:\n${val('fMsg')}`;
  location.href=`mailto:info@pureibs.com?subject=${encodeURIComponent('Wholesale request — '+q('fCompany').value+' ('+q('fCountry').value+')')}&body=${encodeURIComponent(body)}`;
  toast.className='toast show ok';toast.textContent=T('Your email app is opening with the request ready to send. Thank you!','يتم فتح تطبيق البريد والطلب جاهز للإرسال. شكرًا لك!');
});
document.querySelectorAll('.fld :is(input,select)').forEach(el=>el.addEventListener('input',()=>el.parentElement.classList.remove('err')));

/* ================= FAQ ================= */
let faqI=0;
function renderFaq(){
  const items=[...document.querySelectorAll('.fq')];
  items.forEach((f,i)=>{f.classList.toggle('on',i===faqI);f.querySelector('.fq-q').setAttribute('aria-expanded',i===faqI)});
  const f=items[faqI];
  document.getElementById('fpInner').innerHTML=`<div class="fp-swap"><span class="fp-count">${String(faqI+1).padStart(2,'0')} / ${String(items.length).padStart(2,'0')}</span><h3 class="fp-q">${f.querySelector('.fq-q span[data-ar]').innerHTML}</h3><p class="fp-a">${f.querySelector('.fq-a').innerHTML}</p></div>`;
}
document.getElementById('fqList').addEventListener('click',e=>{const q=e.target.closest('.fq');if(q){faqI=+q.dataset.i;renderFaq()}});

/* ================= INIT ================= */
applyLang(LANG);
