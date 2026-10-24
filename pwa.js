(() => {
 const status = document.querySelector('#offline-status');
 const retry = document.querySelector('#offline-retry');
 const update = document.querySelector('#offline-update');
 let registration, updating = false, attempt = 0;
 const watched = new WeakSet();
 const say = text => { status.textContent = text; };
 function watchUpdate() {
  const watchedRegistration = registration;
  if (registration?.waiting) update.hidden = false;
  if (watched.has(registration)) return;
  watched.add(registration);
  registration.addEventListener('updatefound', () => {
   const worker = registration.installing;
   worker?.addEventListener('statechange', () => {
    if (worker.state === 'installed' && watchedRegistration.waiting) update.hidden = false;
    if (worker.state === 'redundant') {
     if (registration === watchedRegistration && !watchedRegistration.active) registration = null;
     say('離線資料下載未完成。請保持連線，再按「重新檢查」。');
     retry.hidden = false;
    }
   });
  });
 }
 async function check() {
  const current = ++attempt;
  retry.hidden = true;
  say('正在確認離線資料，請稍候…');
  try {
   registration ||= await navigator.serviceWorker.register('./sw.js', {updateViaCache: 'none'});
   watchUpdate();
   const ready = await Promise.race([
    navigator.serviceWorker.ready,
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 15000))
   ]);
   const cached = await new Promise((resolve, reject) => {
    const channel = new MessageChannel();
    const timer = setTimeout(() => reject(new Error('timeout')), 5000);
    channel.port1.onmessage = event => {clearTimeout(timer);channel.port1.close();resolve(event.data.ready);};
    ready.active.postMessage({type: 'CACHE_STATUS'}, [channel.port2]);
   });
   if (current !== attempt) return;
   if (!cached) throw new Error('incomplete');
   say('✓ 離線資料已備妥。加入主畫面後，請先開飛航模式試玩，確認成功再出門。');
   if (registration?.waiting) update.hidden = false;
  } catch {
   if (current !== attempt) return;
   say('離線資料尚未備妥。請連上網路，按「重新檢查」；目前仍可在線上玩。');
   retry.hidden = false;
   // Retry an unsuccessful initial install rather than retaining a failed worker.
   if (registration && !registration.active) registration = null;
  }
 }
 retry.onclick = check;
 update.onclick = () => {
  if (!registration?.waiting) return;
  if (!window.confirm('更新會重新開啟遊戲，本局分數將歸零。現在更新嗎？')) return;
  updating = true;
  registration.waiting.postMessage({type: 'SKIP_WAITING'});
 };
 if (location.protocol === 'file:') {
  say('目前是電腦檔案版，可以直接玩；iPad 離線安裝需先用 Safari 開啟 HTTPS 遊戲網址。');
 } else if (!window.isSecureContext) {
  say('目前可連線遊玩，但這個 HTTP 區網網址不能準備 iPad 離線資料。安裝需使用 HTTPS 遊戲網址。');
 } else if (!('serviceWorker' in navigator)) {
  say('此瀏覽器不支援離線安裝。請改用更新版 iPadOS 的 Safari。');
 } else {
  navigator.serviceWorker.addEventListener('controllerchange', () => {if (updating) location.reload();});
  check();
 }
})();
