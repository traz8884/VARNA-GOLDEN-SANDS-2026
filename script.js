const varna = ['1000209262','1000209263','1000209264','1000209265','1000209266','1000209267','1000209269','1000209270','1000209271','1000209272','1000209273','1000209274','1000209275','1000209276','1000209277','1000209278','1000209279','1000209280','1000209281','1000209282','1000209283','1000209284','1000209285','1000209286','1000209287','1000209288'].map(n=>`images/${n}.jpg`);
const golden = ['1000209387','1000209392','1000209391','1000209390','1000209389','1000209388','1000209386','1000209385','1000209384','1000209383','1000209382','1000209381','1000209380','1000209379','1000209378','1000209377','1000209376','1000209375','1000209374','1000209373','1000209372','1000209371','1000209370','1000209369','1000209368','1000209367','1000209366','1000209365','1000209364','1000209363','1000209324','1000209323','1000209322','1000209321','1000209320','1000209319','1000209318','1000209317','1000209316','1000209315','1000209314','1000209313','1000209312','1000209311','1000209310','1000209309','1000209308','1000209307','1000209306','1000209305','1000209304','1000209303','1000209302','1000209301','1000209300','1000209299','1000209298','1000209297','1000209296','1000209295','1000209294','1000209293','1000209292','1000209291','1000209290'].map(n=>`images/${n}.jpg`).concat(['images/grifid-noa-01.jpeg','images/grifid-noa-02.jpeg','images/grifid-noa-03.jpeg','images/grifid-noa-04.jpeg'], ['1000209836','1000209837','1000209838','1000209839','1000209840','1000209841','1000209842','1000209843','1000209844','1000209845','1000209846','1000209847','1000209848','1000209849','1000209850','1000209851','1000209852','1000209853','1000209854'].map(n=>`images/${n}.jpg`), ['1000210248','1000210247','1000210246','1000210245','1000210244','1000210243','1000210238','1000210233','1000210232','1000210231','1000210230','1000210229','1000210228','1000210227','1000210226','1000209950'].map(n=>`images/${n}.jpg`));
let all = [...varna, ...golden];

function createGallery(id, arr){
  const root = document.getElementById(id); root.innerHTML='';
  arr.forEach((src,i)=>{
    const f=document.createElement('figure'); f.className='photo';
    const img=document.createElement('img'); img.src=src; img.loading='lazy'; img.alt=`Amintire din vacanță ${i+1}`;
    f.append(img); f.addEventListener('click',()=>openLightbox(src)); root.append(f);
  });
}
createGallery('varna-gallery', varna); createGallery('golden-gallery', golden);

const dlg=document.getElementById('lightbox'), big=document.getElementById('lightbox-img'), idxLabel=document.getElementById('lightboxIndex'); let current='';
function openLightbox(src){ current=src; big.src=src; idxLabel.textContent=`${all.indexOf(src)+1} / ${all.length}`; dlg.showModal(); }
function move(d){ const i=all.indexOf(current); openLightbox(all[(i+d+all.length)%all.length]); }
document.querySelector('.lightbox-close').onclick=()=>dlg.close();
document.querySelector('.lightbox-prev').onclick=()=>move(-1);
document.querySelector('.lightbox-next').onclick=()=>move(1);
document.getElementById('randomInside').onclick=()=>openLightbox(all[Math.floor(Math.random()*all.length)]);
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
window.addEventListener('keydown',e=>{if(!dlg.open)return; if(e.key==='ArrowRight')move(1); if(e.key==='ArrowLeft')move(-1); if(e.key==='Escape')dlg.close();});

function randomMemory(){ openLightbox(all[Math.floor(Math.random()*all.length)]); }
document.getElementById('memoryBtn').onclick=randomMemory;
document.getElementById('surpriseBtn').onclick=randomMemory;
document.getElementById('shuffleBtn').onclick=()=>{ golden.sort(()=>Math.random()-.5); createGallery('golden-gallery',golden); };
document.getElementById('replayBtn').onclick=()=>scrollTo({top:0,behavior:'smooth'});

const menuToggle=document.getElementById('menuToggle'), navLinks=document.getElementById('navLinks');
menuToggle.onclick=()=>{ const open=navLinks.classList.toggle('open'); menuToggle.setAttribute('aria-expanded',open); };
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
