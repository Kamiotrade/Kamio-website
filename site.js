
const SITE = {
  email: "info@kamiotrading.com",
  whatsapp: "", // Fill in your WhatsApp number, e.g. "8613812345678"
  products: {
    en: [
      {title:"Smart Card Design & Manufacturing", tag:"Core Business", desc:"Card design, personalization and production solutions for commercial and industrial applications.", code:"01"},
      {title:"Steel Structure Buildings", tag:"Core Business", desc:"Steel structure building design, fabrication coordination and project delivery support.", code:"02"},
      {title:"Solar PV Power Systems", tag:"Core Business", desc:"Solar photovoltaic power generation solutions, equipment coordination and project support.", code:"03"},
      {title:"Industrial Equipment & Production Lines", tag:"Other Projects", desc:"Equipment sourcing and project coordination for industrial production systems.", code:"04"},
      {title:"Construction Machinery", tag:"Other Projects", desc:"Construction and engineering machinery for commercial and industrial projects.", code:"05"},
      {title:"Paint Production Equipment", tag:"Other Projects", desc:"Basket mills, high/low-speed dispersers and related production equipment.", code:"06"},
      {title:"Water Purification Components", tag:"Other Projects", desc:"Filter cartridges and related core components for water purification systems.", code:"07"}
    ],
    zh: [
      {title:"智能卡设计与生产", tag:"核心业务", desc:"提供智能卡设计、个性化及生产配套服务，适用于商业及工业应用场景。", code:"01"},
      {title:"钢结构厂房设计与生产", tag:"核心业务", desc:"钢结构厂房方案设计、构件生产协调及项目交付支持。", code:"02"},
      {title:"光伏发电", tag:"核心业务", desc:"光伏发电系统、设备协调及项目实施支持。", code:"03"},
      {title:"工业设备与生产线系统", tag:"已承接业务", desc:"工业生产设备及生产线系统的产品匹配与项目协调。", code:"04"},
      {title:"工程机械车", tag:"已承接业务", desc:"工程机械及相关车辆，服务于工程建设与工业项目。", code:"05"},
      {title:"涂料生产设备", tag:"已承接业务", desc:"蓝式研磨机、高低速分散机及相关涂料生产设备。", code:"06"},
      {title:"净水系统核心部件", tag:"已承接业务", desc:"净水系统滤芯及相关核心组件。", code:"07"}
    ],
    fr: [
      {title:"Conception et fabrication de cartes à puce", tag:"Activité principale", desc:"Solutions de conception, personnalisation et fabrication de cartes à puce pour applications commerciales et industrielles.", code:"01"},
      {title:"Bâtiments à structure métallique", tag:"Activité principale", desc:"Conception, fabrication des structures métalliques et accompagnement de la réalisation des projets.", code:"02"},
      {title:"Production d'énergie solaire photovoltaïque", tag:"Activité principale", desc:"Solutions photovoltaïques, coordination des équipements et accompagnement des projets.", code:"03"},
      {title:"Équipements industriels et lignes de production", tag:"Projets réalisés", desc:"Identification des équipements et coordination de projets pour les systèmes de production industrielle.", code:"04"},
      {title:"Engins de chantier", tag:"Projets réalisés", desc:"Engins et véhicules de chantier pour les projets industriels et de construction.", code:"05"},
      {title:"Équipements pour la fabrication de peintures", tag:"Projets réalisés", desc:"Broyeurs à panier, disperseurs à haute et basse vitesse et équipements associés.", code:"06"},
      {title:"Composants pour systèmes de traitement de l'eau", tag:"Projets réalisés", desc:"Cartouches filtrantes et composants essentiels pour les systèmes de purification de l'eau.", code:"07"}
    ]
  }
};

function currentLang(){
  const path = location.pathname;
  if(path.includes("/zh/")) return "zh";
  if(path.includes("/fr/")) return "fr";
  return "en";
}
function initMenu(){
  const btn=document.querySelector(".menu");
  const nav=document.querySelector(".nav-links");
  if(btn&&nav) btn.addEventListener("click",()=>nav.classList.toggle("open"));
}
function renderProducts(){
  const lang=currentLang();
  document.querySelectorAll("[data-products]").forEach(container=>{
    container.innerHTML = SITE.products[lang].map(p=>`
      <article class="card">
        <div class="card-visual">${p.tag} · ${p.code}</div>
        <div class="card-body">
          <span class="badge">${p.tag}</span>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </div>
      </article>
    `).join("");
  });
}
function initContact(){
  const email=SITE.email;
  document.querySelectorAll("[data-email]").forEach(el=>{
    el.textContent=email; el.href=`mailto:${email}`;
  });
  document.querySelectorAll("[data-whatsapp]").forEach(el=>{
    if(SITE.whatsapp){
      el.href=`https://wa.me/${SITE.whatsapp}`;
      el.style.display="inline-flex";
    }else{
      el.style.display="none";
    }
  });
}
document.addEventListener("DOMContentLoaded",()=>{initMenu();renderProducts();initContact();});
