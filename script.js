(() => {
  'use strict';
  const cfg = window.ANNIVERSARY;
  if (!cfg) return;
  const $ = (selector) => document.querySelector(selector);
  const setText = (selector, value) => { const node = $(selector); if (node) node.textContent = String(value ?? ''); };
  const locallySavedLetter = (() => { try { return localStorage.getItem('anniversary-letter'); } catch { return null; } })();
  let activeLetter = locallySavedLetter === null ? cfg.letter : locallySavedLetter;
  setText('#hero-line', cfg.heroLine);
  setText('#intro-text', cfg.intro);
  setText('#modal-title', cfg.letterTitle);
  setText('#letter-body', activeLetter);
  setText('#signature', cfg.yourName);
  setText('#from-name', cfg.yourName);
  setText('#her-name-footer', cfg.herName);
  document.title = `For ${cfg.herName}, Always ♡`;
  const start = new Date(`${cfg.anniversaryDate}T00:00:00`);
  if (!Number.isNaN(start.getTime())) {
    setText('#start-year', start.getFullYear());
    const now = new Date();
    const elapsed = Math.max(0, Math.floor((Date.UTC(now.getFullYear(),now.getMonth(),now.getDate()) - Date.UTC(start.getFullYear(),start.getMonth(),start.getDate())) / 86400000));
    let years = now.getFullYear() - start.getFullYear();
    if (now.getMonth() < start.getMonth() || (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())) years--;
    setText('#years-count', Math.max(0, years));
    setText('#days-count', elapsed.toLocaleString());
  }
  const timeline = $('#timeline');
  (cfg.memories || []).forEach((memory) => {
    const card = document.createElement('article');
    card.className = 'timeline-card';
    const emoji = document.createElement('span'); emoji.className='timeline-emoji'; emoji.textContent=memory.emoji || '♡';
    const date = document.createElement('span'); date.className='timeline-date'; date.textContent=memory.date || '';
    const title = document.createElement('h3'); title.textContent=memory.title || '';
    const detail = document.createElement('p'); detail.textContent=memory.detail || '';
    card.append(emoji,date,title,detail);timeline.append(card);
  });
  const photoGrid = $('#photo-grid');
  const captions = ['you + me','favorite days','little adventures','always us'];
  (cfg.photos || []).forEach((path,i) => {
    const frame=document.createElement('div');frame.className='photo-frame';
    const inside=document.createElement('div');inside.className='photo-inside';
    if(path && typeof path === 'string'){
      const img=document.createElement('img');img.src=path;img.loading='lazy';img.alt=`Our memory ${i+1}`;
      img.onerror=()=>{img.remove();inside.textContent='Add your photo ♡';};inside.append(img);
    } else {
      const flower=document.createElement('span');flower.style.fontSize='38px';flower.textContent=['✿','♡','❀','✧'][i%4];
      const label=document.createElement('span');label.textContent='your memory here';inside.append(flower,label);
    }
    const caption=document.createElement('div');caption.className='frame-caption';caption.textContent=captions[i%4];
    frame.append(inside,caption);photoGrid.append(frame);
  });
  let reasonIndex=0;
  function showReason(){const reasons=cfg.reasons || [];if(!reasons.length)return;setText('#reason-text',reasons[reasonIndex]);setText('#reason-index',`${String(reasonIndex+1).padStart(2,'0')} / ${String(reasons.length).padStart(2,'0')}`);}
  showReason();$('#reason-btn').addEventListener('click',()=>{reasonIndex=(reasonIndex+1)%(cfg.reasons||[]).length;showReason();});
  const song=$('#song-link');if(cfg.songUrl && /^https:\/\//i.test(cfg.songUrl)){song.href=cfg.songUrl;song.classList.remove('hidden');}
  let lastTrigger=null;
  function showModal(id){lastTrigger=document.activeElement;const modal=document.getElementById(id);modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';modal.querySelector('.modal-close').focus();}
  function closeModals(){document.querySelectorAll('.modal').forEach(m=>{m.classList.remove('is-open');m.setAttribute('aria-hidden','true');});document.body.style.overflow='';if(lastTrigger?.focus)lastTrigger.focus();}
  $('#open-letter').addEventListener('click',()=>{setText('#letter-body',activeLetter);showModal('letter-modal');releasePetals(22);});
  $('#edit-letter-btn').addEventListener('click',()=>{$('#edit-text').value=activeLetter;showModal('edit-modal');});
  $('#save-letter-btn').addEventListener('click',()=>{activeLetter=$('#edit-text').value;try{localStorage.setItem('anniversary-letter',activeLetter);}catch{}setText('#letter-body',activeLetter);closeModals();showModal('letter-modal');});
  $('#reset-letter-btn').addEventListener('click',()=>{activeLetter=cfg.letter;$('#edit-text').value=activeLetter;try{localStorage.removeItem('anniversary-letter');}catch{}setText('#letter-body',activeLetter);});
  document.querySelectorAll('[data-close]').forEach(btn=>btn.addEventListener('click',closeModals));
  document.addEventListener('keydown',(event)=>{if(event.key==='Escape')closeModals();});
  function releasePetals(count){if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const layer=$('#petal-layer');for(let i=0;i<count;i++){const petal=document.createElement('span');petal.className='petal';petal.textContent=i%4===0?'♡':'❀';petal.style.left=`${Math.random()*100}%`;petal.style.fontSize=`${12+Math.random()*16}px`;petal.style.setProperty('--drift',`${Math.random()*240-120}px`);petal.style.animationDuration=`${4+Math.random()*4}s`;petal.style.animationDelay=`${Math.random()*1.5}s`;layer.append(petal);petal.addEventListener('animationend',()=>petal.remove());}}
  window.addEventListener('load',()=>releasePetals(15));
})();
