const pairs = [
 {id:'sun', blue:['☀️','陽光與蒸發','太陽讓水變成水蒸氣。'],green:['🌳','樹木的蒸散','植物也會把水分送回空氣中。'],lesson:'太陽照射使水蒸發，植物也會透過蒸散把水分送回空氣中。'},
 {id:'rain',blue:['🌧️','降雨與土地','雨水落到地面，接著去哪裡？'],green:['🌱','草地與土壤','讓部分雨水慢慢滲入地下。'],lesson:'草地和土壤能讓部分雨水滲入地下，減少地表快速流走的水。'},
 {id:'bank',blue:['🏞️','水岸棲地','水邊是許多生命的家。'],green:['🪴','水岸植物','提供小動物躲藏和休息的地方。'],lesson:'水岸植物能提供棲地。我們可以安靜觀察，不摘取、不踩踏。'},
 {id:'clean',blue:['💧','乾淨的水環境','減少污染，水中生命更健康。'],green:['🐟','魚兒的家','魚兒需要適合生存的水質。'],lesson:'魚類需要適合的水質。垃圾與污水可能傷害水中生物，不能隨意倒入排水口。'}
];
const quizzes=[
 {icon:'🧃',title:'垃圾去哪裡？',question:'散步時喝完飲料，空瓶應該怎麼做？',answers:['丟進水道，讓水沖走','帶走並依規定分類回收','藏在水岸的草叢裡'],correct:1,explain:'把垃圾帶走並分類回收，能減少垃圾進入水道。'},
 {icon:'🚰',title:'節水小高手',question:'洗手搓肥皂的時候，怎麼做比較省水？',answers:['先關水，沖洗時再打開','讓水一直流','把水開到最大'],correct:0,explain:'搓肥皂時先關水，需要沖洗時再打開，就能減少浪費。'},
 {icon:'🦆',title:'水岸觀察家',question:'在水邊看到小動物，最適合怎麼做？',answers:['拿餅乾餵牠','抓回家照顧','保持距離，安靜觀察'],correct:2,explain:'野生動物有自己的食物和生活方式；保持距離，不餵食、不抓取。'},
 {icon:'🛟',title:'安全守護員',question:'玩具掉進中港大排的水道裡，應該怎麼辦？',answers:['立刻跳下去撿','留在安全處，請大人協助','跨過欄杆試著拿'],correct:1,explain:'不要進入水道或翻越欄杆，留在安全處並請大人協助。安全最重要！'}
];

// 生態卡是學習示例，不代表中港大排的現地物種紀錄。
pairs.push(
 {id:'cloud',blue:['☁️','水氣凝結','水蒸氣遇冷，形成小水滴。'],green:['🍃','葉上的露珠','水蒸氣也能在冷葉片上變成小水滴。'],lesson:'雲中的小水滴和葉上的露珠，都能幫我們認識凝結：水蒸氣遇冷變成液態水。'},
 {id:'root',blue:['🟤','雨水沖刷岸邊','下雨時，水可能帶走岸邊土壤。'],green:['🌾','抓住泥土的根','植物的根能幫忙穩住土壤。'],lesson:'植物根系能幫忙固定土壤，減少沖刷；水岸也需要合適的防護設計。'},
 {id:'shade',blue:['🌡️','炎熱的水岸','夏天走在水邊，也要注意防曬。'],green:['🌲','樹蔭休息站','樹冠遮住部分陽光，提供陰涼處。'],lesson:'水岸樹木能提供遮蔭，也讓動物有休息空間。觀察時別攀折樹枝。'},
 {id:'pollinator',blue:['🌼','水岸花帶','岸邊開花的植物有什麼好朋友？'],green:['🦋','訪花的蝴蝶','蝴蝶吸食花蜜時，可能幫忙傳粉。'],lesson:'有些昆蟲拜訪花朵時會幫忙傳粉。保留合適的開花植物，有助於提供食物。'},
 {id:'pond',blue:['🫧','有植物的淺水區','淺水和水生植物能提供多樣空間。'],green:['🪷','蜻蜓幼蟲的家','蜻蜓幼蟲住在水中，需要合適棲地。'],lesson:'蜻蜓的幼蟲生活在水中，成蟲會飛行。保護水域與岸邊環境都很重要。'},
 {id:'wetland',blue:['🏝️','濕地與雨水','濕地能暫時留住部分雨水。'],green:['🌿','濕地植物','和土壤一起，幫忙減緩水流。'],lesson:'濕地的植物和土壤能減緩水流，也提供棲地，但不能取代完整的防洪設施。'},
 {id:'connect',blue:['🗺️','連起來的綠色水岸','一段段綠地連起來，會有什麼幫助？'],green:['🐦','鳥兒的移動路線','連續綠地能提供移動與停留空間。'],lesson:'連起來的綠地像生態走廊，能幫助部分動物移動、覓食和休息。'},
 {id:'native',blue:['🛠️','水岸生態復育','改善水岸時，植物也要選得合適。'],green:['🌺','適地的原生植物','選擇適合當地條件的原生植物。'],lesson:'生態復育要考慮水質、棲地與當地生物；種植前由專業人員選擇適地植物。'}
);
quizzes.push(
 {icon:'🏞️',title:'認識中港大排',question:'中港大排整治時，除了改善水岸景觀，還應該重視什麼？',answers:['只要把欄杆塗漂亮就好','水質、排水安全和生物的生活空間','把所有水道填平'],correct:1,hint:'漂亮的水岸，也要兼顧水與生命的需要。',explain:'水岸整治要兼顧排水、水質與環境，讓城市更安全，也讓大家認識水環境。'},
 {icon:'🚧',title:'污水走對路',question:'「污水截流」是在幫污水做什麼？',answers:['攔住並導向污水處理系統','直接變成可以喝的水','倒到另一條水道就好'],correct:0,hint:'想想看，髒水應該送到哪裡處理？',explain:'污水截流是把污水攔住、導向處理系統，減少直接進入水道；不是讓水立刻變成飲用水。'},
 {icon:'☀️',title:'水滴上天空',question:'太陽照著地面的水，部分水會發生什麼事？',answers:['變成石頭','永遠消失不見','蒸發成水蒸氣，進入空氣中'],correct:2,hint:'水會換一種看不見的樣子，進入空氣。',explain:'液態水蒸發成水蒸氣，是水循環的一部分。水沒有憑空消失。'},
 {icon:'☁️',title:'雲的小祕密',question:'空氣中的水蒸氣遇冷，可能變成什麼？',answers:['小水滴','塑膠袋','沙子'],correct:0,hint:'想想冷杯子外面常出現的小珠珠。',explain:'水蒸氣遇冷可以凝結成小水滴；雲由許多小水滴或冰晶組成。'},
 {icon:'🌱',title:'復育有方法',question:'想讓水岸生態慢慢恢復，哪一種做法比較好？',answers:['隨便放生買來的魚','由專業人員改善水質與棲地','把岸邊植物全部拔掉'],correct:1,hint:'生物需要適合生活的家，不是數量越多越好。',explain:'生態復育要先了解當地環境，改善水質與棲地。隨意放生可能傷害原有生態。'},
 {icon:'🌧️',title:'都市防洪隊',question:'大雨前發現路邊排水口堆滿垃圾，可以怎麼做？',answers:['再丟一些垃圾進去','自己鑽進排水口清理','請大人協助通報清理'],correct:2,hint:'保持排水暢通很重要，但不要冒險進入設施。',explain:'垃圾可能堵住排水口。請大人協助通報，讓相關人員安全清理，有助於降低積水風險。'},
 {icon:'🏘️',title:'雨水暫住站',question:'都市裡的滯洪池，在大雨時可以幫什麼忙？',answers:['暫時存放部分雨水，減輕排水壓力','保證任何大雨都不會淹水','讓所有雨水立刻消失'],correct:0,hint:'「暫住」表示先留一陣子，再慢慢排走。',explain:'滯洪池能暫存部分雨水，減輕短時間的排水壓力，但仍要配合其他防洪措施。'},
 {icon:'🧴',title:'排水口不是垃圾桶',question:'家裡用過的油或剩餘清潔劑，應該怎麼處理？',answers:['偷偷倒進路邊排水口','請大人依當地規定處理','帶到水岸倒進水裡'],correct:1,hint:'排水口可能連到水道，不能拿來倒廢棄物。',explain:'油和清潔劑可能污染水環境。請大人確認當地回收或清運規定，不要倒進路邊排水口。'}
);
const defaultHints = [
 '垃圾應該離開水岸，送到合適的回收或垃圾收集處。',
 '不需要用水的時候，可以先關水。',
 '想想怎樣才能不打擾小動物原本的生活。',
 '安全最重要，留在欄杆內並尋求大人協助。'
];
quizzes.forEach((q,i)=>{q.id=`quiz-${i}`;q.hint ??= defaultHints[i];});

const cards = document.querySelector('#cards');
const message = document.querySelector('#message');
const dialog = document.querySelector('#quiz');
let selected = null;
const failedPairs = new Set(), failedQuizzes = new Set();
const matched = new Set(), solved = new Set();
let roundPairs = [], roundQuizzes = [], deck = [];

function shuffle(items) {
 const result = [...items];
 for (let i=result.length-1;i>0;i--) {
  const j=Math.floor(Math.random()*(i+1));
  [result[i],result[j]]=[result[j],result[i]];
 }
 return result;
}
function drawRound(bank, previous) {
 const picked=shuffle(bank).slice(0,4);
 // If the random draw repeats the previous set, swap in one unused question.
 const oldIds=new Set(previous.map(item=>item.id));
 if (picked.every(item=>oldIds.has(item.id))) {
  picked[3]=shuffle(bank.filter(item=>!oldIds.has(item.id)))[0];
 }
 return picked;
}
function update() {
 document.querySelector('#score').textContent=(matched.size+solved.size-failedPairs.size-failedQuizzes.size)*10;
 document.querySelector('#progress').textContent=matched.size+solved.size;
 document.querySelector('#finish').hidden=matched.size+solved.size!==8;
 document.querySelector('#finish p').textContent=`完成 8 個任務，答對 ${matched.size+solved.size-failedPairs.size-failedQuizzes.size} 題，共得 ${(matched.size+solved.size-failedPairs.size-failedQuizzes.size)*10} 分！看看小知識，再挑戰一次吧。`;
}
function render() {
 cards.replaceChildren();
 for (const {type,item} of deck) {
  const done=type==='orange'?solved.has(item.id):matched.has(item.id);
  const data=type==='orange'?[item.icon,item.title,'點我回答，練習守護環境！']:item[type];
  const button=document.createElement('button');
  const wrong=type==='orange'?failedQuizzes.has(item.id):failedPairs.has(item.id);
  button.className=`card ${type}${done?' completed':''}${type==='blue'&&selected===item.id?' selected':''}${wrong?' incorrect':''}`;
  button.dataset.id=item.id;
  button.disabled=done;
  if(type==='blue') button.setAttribute('aria-pressed',String(selected===item.id));
  button.innerHTML=`<span class="type">${{blue:'水環境卡',green:'生態卡',orange:'守護挑戰卡'}[type]}</span><span class="icon" aria-hidden="true">${data[0]}</span><span class="title">${data[1]}</span><span class="desc">${wrong&&type!=='orange'?`正確配對：${item.blue[1]} ＋ ${item.green[1]}`:data[2]}</span>${done?`<span class="check">${wrong?'已作答・0 分':'✓ 答對'}</span>`:''}`;
  button.onclick=()=>choose(type,item);
  cards.append(button);
 }
 update();
}
function choose(type,item) {
 if(type==='orange') {openQuiz(item);return;}
 if(type==='blue') {
  selected=item.id;
  message.textContent=`已選「${item.blue[1]}」，請找出有關聯的綠色生態卡！`;
  render();
  document.querySelector(`.blue[data-id="${item.id}"]`).focus({preventScroll:true});
  return;
 }
 if(!selected) {message.textContent='請先選一張藍色水環境卡，再選綠色生態卡。';return;}
 if(selected===item.id) {
  matched.add(item.id);selected=null;
  message.textContent=`答對了！＋10 分。${item.lesson}`;
  render();
 } else {
  const chosen=roundPairs.find(pair=>pair.id===selected);
  matched.add(chosen.id);failedPairs.add(chosen.id);
  const next=roundPairs.find(pair=>!matched.has(pair.id));
  selected=next?.id ?? null;
  message.textContent=`這題 0 分。正確配對：「${chosen.blue[1]}」＋「${chosen.green[1]}」。${chosen.lesson} ${next?`接著請為「${next.blue[1]}」選綠卡！`:'配對題已完成，請繼續橘卡問答。'}`;
  render();
  if(next) document.querySelector(`.blue[data-id="${next.id}"]`).focus({preventScroll:true});
 }
}
function openQuiz(q) {
 if(solved.has(q.id)) return;
 document.querySelector('#question').textContent=q.question;
 document.querySelector('#feedback').textContent='';
 document.querySelector('#quizDone').textContent='完成挑戰';
 document.querySelector('#quizDone').hidden=true;
 const answers=document.querySelector('#answers');
 answers.replaceChildren();
 q.answers.forEach((answer,index)=>{
  const b=document.createElement('button');b.textContent=answer;
  b.onclick=()=>{
   if(solved.has(q.id)) return;
   if(index===q.correct) {
    solved.add(q.id);b.classList.add('correct');
    for(const option of answers.children) option.disabled=true;
    document.querySelector('#feedback').textContent=`答對了！＋10 分。${q.explain}`;
    document.querySelector('#quizDone').textContent='下一題';
    document.querySelector('#quizDone').hidden=false;
    update();
   } else {
    solved.add(q.id);failedQuizzes.add(q.id);
    b.classList.add('wrong');
    [...answers.children].forEach((option,i)=>{option.disabled=true;if(i===q.correct)option.classList.add('correct');});
    document.querySelector('#feedback').textContent=`這題 0 分。正確答案：${q.answers[q.correct]}。${q.explain}`;
    document.querySelector('#quizDone').textContent='下一題';
    document.querySelector('#quizDone').hidden=false;
    update();
    document.querySelector('#quizDone').focus();
   }
  };
  answers.append(b);
 });
 dialog.showModal();
}
dialog.addEventListener('close',render);
document.querySelector('#quizDone').onclick=()=>{
 const next=roundQuizzes.find(q=>!solved.has(q.id));
 if(next) openQuiz(next);else dialog.close();
};
function reset() {
 if(dialog.open) dialog.close();
 roundPairs=drawRound(pairs,roundPairs);
 roundQuizzes=drawRound(quizzes,roundQuizzes);
 const entries=[...roundPairs.flatMap(item=>[{type:'blue',item},{type:'green',item}]),...roundQuizzes.map(item=>({type:'orange',item}))];
 deck=shuffle(entries);
 selected=null;matched.clear();solved.clear();failedPairs.clear();failedQuizzes.clear();
 message.textContent='新題目準備好了！先選藍卡，再找綠卡配對；也可以先挑戰橘卡！';
 render();
}
document.querySelector('#restart').onclick=reset;
document.querySelector('#again').onclick=()=>{reset();document.querySelector('#restart').focus();};
reset();
