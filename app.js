// 配對題以具體特徵區分答案；生態示例不是中港大排的現地物種紀錄。
const pairs = [
 {
  "id": "sun",
  "blue": [
   "🌤️",
   "植物把水送回空氣",
   "根吸收的水，經過葉片回到空氣中，這個過程叫什麼？"
  ],
  "green": [
   "🌳",
   "植物的蒸騰",
   "植物吸水後，透過葉片把部分水以水蒸氣送回空氣。"
  ],
  "lesson": "蒸騰就是植物把水以水蒸氣的形式散到空氣中，主要透過葉片進行。水蒸氣看不見，是水循環的一部分。"
 },
 {
  "id": "rain",
  "blue": [
   "🌧️",
   "雨水往地下走",
   "雨落在草地上，往土壤裡滲進去，叫作什麼？"
  ],
  "green": [
   "🌱",
   "雨水入滲",
   "水從地面滲進土壤裡，而不是只沿地面流走。"
  ],
  "lesson": "入滲就是水滲進土壤。草地通常比不透水的鋪面更有利於雨水入滲。"
 },
 {
  "id": "bank",
  "blue": [
   "🏞️",
   "小動物躲在哪裡",
   "水岸的小動物想躲在低矮、密密的葉叢中，哪裡最合適？"
  ],
  "green": [
   "🪴",
   "岸邊草叢",
   "低矮的草和葉片，能提供小動物躲藏的空間。"
  ],
  "lesson": "棲地就是生物生活的地方。草叢能提供部分小動物藏身處，觀察時不要踩入或翻動。"
 },
 {
  "id": "clean",
  "blue": [
   "💧",
   "用鰓呼吸的鄰居",
   "哪種有鰭、用鰓從水中獲得氧氣的動物，需要適合的水質？"
  ],
  "green": [
   "🐟",
   "水中的魚",
   "魚有鰭，用鰓從水中獲得氧氣。"
  ],
  "lesson": "鰓是魚類從水中獲得氧氣的器官。水看起來清澈，不一定表示水質適合魚，也不表示可以喝。"
 },
 {
  "id": "cloud",
  "blue": [
   "🌙",
   "冷葉片上的小水珠",
   "夜裡葉片變冷，空氣中的水蒸氣凝結在葉片上，形成什麼？"
  ],
  "green": [
   "🍃",
   "葉上的露珠",
   "水蒸氣碰到較冷的葉片，可以凝結成小水滴。"
  ],
  "lesson": "凝結就是水蒸氣變成液態小水滴。露珠不是植物流汗，也不一定是下雨留下的水。"
 },
 {
  "id": "root",
  "blue": [
   "🟤",
   "誰在地下抓住泥土",
   "下雨時，植物的哪個地下部位能幫忙固定土壤？"
  ],
  "green": [
   "🌾",
   "植物的根",
   "根在土壤中生長，能幫忙抓住泥土。"
  ],
  "lesson": "根系能幫忙固定土壤，減少雨水沖刷；植物不能取代所有防洪與護岸設施。"
 },
 {
  "id": "shade",
  "blue": [
   "🌡️",
   "擋住頭上的陽光",
   "水岸休息時，哪一種樹木提供的空間能遮住頭上的陽光？"
  ],
  "green": [
   "🌲",
   "大樹的樹蔭",
   "樹冠像遮陽傘，下面形成陰涼的樹蔭。"
  ],
  "lesson": "樹冠是樹上枝葉聚集的部分。樹蔭能遮住部分陽光，戶外活動仍要防曬與補充水分。"
 },
 {
  "id": "pollinator",
  "blue": [
   "🌼",
   "帶花粉的飛行朋友",
   "哪種長大後有兩對帶鱗粉的翅膀，常到花朵吸花蜜的昆蟲，可能幫忙傳粉？"
  ],
  "green": [
   "🦋",
   "訪花的蝴蝶",
   "蝴蝶的翅膀有細小鱗粉，有些蝴蝶訪花時會幫忙傳粉。"
  ],
  "lesson": "傳粉就是花粉被帶到花朵能接受花粉的部位，有助部分植物繁殖。觀察蝴蝶不要抓牠或碰牠的翅膀。"
 },
 {
  "id": "pond",
  "blue": [
   "🫧",
   "先住水裡，長大會飛",
   "哪一種昆蟲的幼蟲叫「水蠆」，生活在水裡，長大後會在水邊飛行？"
  ],
  "green": [
   "💧",
   "蜻蜓的幼蟲",
   "水蠆（ㄕㄨㄟˇ ㄔㄞˋ）是蜻蜓等昆蟲的幼蟲，生活在水中。"
  ],
  "lesson": "蜻蜓的幼蟲叫水蠆，成蟲會飛行。保護水域與岸邊環境，都有助於保護牠們的生活空間。"
 },
 {
  "id": "wetland",
  "blue": [
   "🏝️",
   "讓濕地水流慢一點",
   "濕地中，哪一種成片長在淺水或潮濕地面的植物，能用莖葉減緩水流？"
  ],
  "green": [
   "🌿",
   "濕地的挺水植物",
   "像蘆葦這類植物，下部在水或濕土中，莖葉伸出水面。"
  ],
  "lesson": "挺水植物是下部生長在水或濕土中、莖葉伸出水面的植物。它們可以減緩水流，也提供棲地，但不能取代完整防洪設施。"
 },
 {
  "id": "connect",
  "blue": [
   "🗺️",
   "綠地之間的路線",
   "把分散的綠地連起來，讓動物在綠地之間移動，這樣的路線叫什麼？"
  ],
  "green": [
   "🐦",
   "生態走廊",
   "連接不同棲地的空間，像動物可以利用的移動路線。"
  ],
  "lesson": "生態走廊是連接棲地的空間，不一定是人走的步道。能幫助哪些動物，要看植物、距離與周圍環境。"
 },
 {
  "id": "native",
  "blue": [
   "🛠️",
   "復育時怎麼選植物",
   "專業人員要選原本就在當地自然生長、也適合現場環境的植物，該選哪一類？"
  ],
  "green": [
   "🌺",
   "適地的原生植物",
   "原生植物是原本就在當地自然分布的植物，還要選適合現場條件的種類。"
  ],
  "lesson": "生態復育就是幫助受損的生態恢復。選植物要考慮當地物種、土壤和水分，不是隨意種下就好。"
 }
];
const quizzes = [
 {
  "icon": "🧃",
  "title": "垃圾去哪裡？",
  "question": "散步時喝完飲料，空瓶應該怎麼做？",
  "answers": [
   "先放在水岸座椅上，等清潔人員來收",
   "帶走並依當地規定分類回收",
   "放進路邊排水口，讓地面看起來乾淨"
  ],
  "correct": 1,
  "explain": "把垃圾帶走並分類回收，能減少垃圾進入水道。",
  "hint": "垃圾應該離開水岸，送到合適的回收或垃圾收集處。"
 },
 {
  "icon": "🚰",
  "title": "節水小高手",
  "question": "洗手搓肥皂的時候，怎麼做比較省水？",
  "answers": [
   "先關水，沖洗時再打開",
   "讓水一直流",
   "把水開到最大"
  ],
  "correct": 0,
  "explain": "搓肥皂時先關水，需要沖洗時再打開，就能減少浪費。",
  "hint": "不需要用水的時候，可以先關水。"
 },
 {
  "icon": "🦆",
  "title": "水岸觀察家",
  "question": "在水邊看到野生小動物，最適合怎麼做？",
  "answers": [
   "拿餅乾餵牠",
   "抓回家照顧",
   "保持距離，安靜觀察"
  ],
  "correct": 2,
  "explain": "野生動物有自己的食物和生活方式；保持距離，不餵食、不抓取。",
  "hint": "想想怎樣才能不打擾小動物原本的生活。"
 },
 {
  "icon": "🛟",
  "title": "安全守護員",
  "question": "玩具掉進中港大排的水道裡，應該怎麼辦？",
  "answers": [
   "立刻跳下去撿",
   "留在安全處，請大人協助",
   "跨過欄杆試著拿"
  ],
  "correct": 1,
  "explain": "不要進入水道或翻越欄杆，留在安全處並請大人協助。安全最重要！",
  "hint": "安全最重要，留在欄杆內並尋求大人協助。"
 },
 {
  "icon": "🏞️",
  "title": "認識中港大排",
  "question": "如果要改善中港大排的水岸環境，除了景觀，還應該重視什麼？",
  "answers": [
   "水看起來透明，就不用再檢查水質",
   "水質、排水安全和生物的生活空間",
   "只增加步道，排水與生態以後再處理"
  ],
  "correct": 1,
  "hint": "漂亮的水岸，也要兼顧水與生命的需要。",
  "explain": "水岸整治要兼顧排水、水質與環境，讓城市更安全，也讓大家認識水環境。"
 },
 {
  "icon": "🚧",
  "title": "污水走對路",
  "question": "「污水截流」是把污水攔住後，送往哪裡？",
  "answers": [
   "污水處理系統，進一步處理",
   "附近水道，直接排放",
   "雨水排水口，直接排放"
  ],
  "correct": 0,
  "hint": "想想看，髒水應該送到哪裡處理？",
  "explain": "截流就是把原本可能流入水道的污水攔下，導向處理系統，減少污染。實際設施怎麼運作，要依當地設計。"
 },
 {
  "icon": "☀️",
  "title": "水滴上天空",
  "question": "太陽照著地面的水，部分水會發生什麼事？",
  "answers": [
   "全部變成看得見的白色霧氣",
   "水從地球上消失，不會再回來",
   "部分變成看不見的水蒸氣，進入空氣"
  ],
  "correct": 2,
  "hint": "水會換一種看不見的樣子，進入空氣。",
  "explain": "蒸發就是液態水變成水蒸氣。水蒸氣看不見；看得見的白霧主要是小水滴。水仍在環境中循環。"
 },
 {
  "icon": "☁️",
  "title": "雲的小祕密",
  "question": "空氣中的水蒸氣遇冷，可能變成什麼？",
  "answers": [
   "液態的小水滴",
   "一定立刻變成大雨落下",
   "仍然全是看不見的水蒸氣，不會變化"
  ],
  "correct": 0,
  "hint": "想想冷杯子外面常出現的小珠珠。",
  "explain": "凝結就是水蒸氣變成液態小水滴。雲由小水滴或冰晶組成，不是每一朵雲都會立刻下雨。"
 },
 {
  "icon": "🌱",
  "title": "復育有方法",
  "question": "想讓水岸生態慢慢恢復，哪一種做法比較好？",
  "answers": [
   "買魚放進水道，數量越多就越健康",
   "先了解環境，由專業人員改善水質與棲地",
   "只整理步道，不用了解水中環境"
  ],
  "correct": 1,
  "hint": "生物需要適合生活的家，不是數量越多越好。",
  "explain": "棲地就是生物生活的地方。生態復育要先了解環境，再幫助受損的生態恢復；隨意放生可能傷害原有生物。"
 },
 {
  "icon": "🌧️",
  "title": "都市防洪隊",
  "question": "大雨前發現路邊排水口堆滿垃圾，可以怎麼做？",
  "answers": [
   "把垃圾推進排水口，讓路面保持乾淨",
   "自己掀開水溝蓋，進去把垃圾拿出來",
   "留在安全處，請大人協助通報清理"
  ],
  "correct": 2,
  "hint": "保持排水暢通很重要，但不要冒險進入設施。",
  "explain": "垃圾可能堵住排水口。請大人協助通報，讓相關人員安全清理，有助於降低積水風險。"
 },
 {
  "icon": "🏘️",
  "title": "雨水暫住站",
  "question": "都市裡的滯洪池，在大雨時可以幫什麼忙？",
  "answers": [
   "暫時留住部分雨水，再依設施設計排出",
   "只要有一座，就能保證整個城市不淹水",
   "平時存滿水，不必留下接雨水的空間"
  ],
  "correct": 0,
  "hint": "「暫住」表示先留一陣子，再慢慢排走。",
  "explain": "滯洪就是暫時留住部分洪水。滯洪池能減輕短時間的排水壓力，還要配合其他防洪措施，不能保證所有大雨都不淹水。"
 },
 {
  "icon": "🧴",
  "title": "排水口不是垃圾桶",
  "question": "家裡用過的油或剩餘清潔劑，應該怎麼處理？",
  "answers": [
   "偷偷倒進路邊排水口",
   "請大人依當地規定處理",
   "帶到水岸倒進水裡"
  ],
  "correct": 1,
  "hint": "排水口可能連到水道，不能拿來倒廢棄物。",
  "explain": "油和清潔劑可能污染水環境。請大人確認當地回收或清運規定，不要倒進路邊排水口。"
 }
];
quizzes.forEach((q,i)=>{q.id=`quiz-${i}`;});

const pairTalks = [
 '家裡或學校有哪些植物？想一想，它們吸收的水可能去哪裡？',
 '下雨後，草地和水泥地上的水有什麼不同？可以從安全的地方觀察。',
 '如果要觀察草叢裡的小動物，我們可以怎麼做才不打擾牠們？',
 '水看起來透明就一定乾淨嗎？你會用什麼方法了解水質，而不是直接摸或喝？',
 '想想冰水杯外面的水珠：是杯子漏水，還是空氣中的水蒸氣凝結？',
 '如果岸邊沒有植物，大雨可能對泥土造成什麼影響？',
 '散步時，你喜歡有樹蔭還是沒有樹蔭的路？為什麼？',
 '看到蝴蝶訪花時，我們要怎麼觀察，才不碰傷牠的翅膀？',
 '同一種動物小時候和長大後，可能需要不同的生活空間嗎？',
 '濕地既是動物的家，也能暫留部分雨水，我們應該怎麼保護它？',
 '如果兩片綠地中間是一條很大的馬路，對動物移動可能有什麼影響？',
 '想在家裡或學校種植物時，可以先請教誰，了解環境適不適合？'
];
const quizTalks = [
 '下次散步時，我們要帶什麼，才能把自己的垃圾帶回去？',
 '除了洗手，我們家還有哪些可以減少浪費水的時刻？',
 '如果小動物靠近我們，怎麼做才能保護牠，也保護自己？',
 '散步前，大人和小朋友可以先約定哪些水岸安全規則？',
 '你希望水岸除了好看，還具備哪些讓人和生物安心的條件？',
 '為什麼污水應該送去處理，而不是只換個地方排放？',
 '曬在外面的濕衣服乾了，水去了哪裡？',
 '冷杯子外面的小水珠，和雲中的小水滴有什麼相似之處？',
 '如果想幫助動物，為什麼不一定適合把買來的動物放到水道？',
 '發現排水口堵住時，我們可以請哪位大人協助通報？',
 '如果大雨超過設施能處理的量，我們還需要留意哪些防災訊息？',
 '家裡的廢油或剩餘清潔劑，可以一起查哪些地方的回收或清運資訊？'
];
pairs.forEach((p,i)=>{p.familyTalk=pairTalks[i];});
quizzes.forEach((q,i)=>{q.familyTalk=quizTalks[i];});
function showFamilyTalk(selector, text) {
 const panel=document.querySelector(selector);
 panel.hidden=!text;panel.open=false;
 panel.querySelector('p').textContent=text || '';
}

const pairCards = document.querySelector('#pair-cards');
const quizCards = document.querySelector('#quiz-cards');
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
function drawRound(bank, previous, count=4) {
 const picked=shuffle(bank).slice(0,count);
 // If the random draw repeats the previous set, swap in one unused question.
 const oldIds=new Set(previous.map(item=>item.id));
 if (picked.every(item=>oldIds.has(item.id))) {
  picked[count-1]=shuffle(bank.filter(item=>!oldIds.has(item.id)))[0];
 }
 return picked;
}
function update() {
 document.querySelector('#score').textContent=(matched.size+solved.size-failedPairs.size-failedQuizzes.size)*10;
 document.querySelector('#progress').textContent=matched.size+solved.size;
 document.querySelector('#pair-progress').textContent=`已作答 ${matched.size} / 4 組`;
 document.querySelector('#quiz-progress').textContent=`已作答 ${solved.size} / 6 題`;
 document.querySelector('#finish').hidden=matched.size+solved.size!==10;
 document.querySelector('#finish p').textContent=`完成 10 個任務，答對 ${matched.size+solved.size-failedPairs.size-failedQuizzes.size} 題，共得 ${(matched.size+solved.size-failedPairs.size-failedQuizzes.size)*10} 分！看看小知識，再挑戰一次吧。`;
}
function render() {
 pairCards.replaceChildren();
 quizCards.replaceChildren();
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
  (type==='orange'?quizCards:pairCards).append(button);
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
  showFamilyTalk('#family-talk',item.familyTalk);
  message.textContent=`答對了！＋10 分。${item.lesson}`;
  render();
 } else {
  const chosen=roundPairs.find(pair=>pair.id===selected);
  matched.add(chosen.id);failedPairs.add(chosen.id);
  showFamilyTalk('#family-talk',chosen.familyTalk);
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
 showFamilyTalk('#quiz-family-talk',null);
 document.querySelector('#quizDone').textContent='完成挑戰';
 document.querySelector('#quizDone').hidden=true;
 const answers=document.querySelector('#answers');
 answers.replaceChildren();
 q.answers.forEach((answer,index)=>{
  const b=document.createElement('button');b.textContent=answer;
  b.onclick=()=>{
   if(solved.has(q.id)) return;
   showFamilyTalk('#quiz-family-talk',q.familyTalk);
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
 roundQuizzes=drawRound(quizzes,roundQuizzes,6);
 const entries=[...roundPairs.flatMap(item=>[{type:'blue',item},{type:'green',item}]),...roundQuizzes.map(item=>({type:'orange',item}))];
 deck=[...shuffle(entries.filter(entry=>entry.type!=='orange')),...shuffle(entries.filter(entry=>entry.type==='orange'))];
 showFamilyTalk('#family-talk',null);showFamilyTalk('#quiz-family-talk',null);
 selected=null;matched.clear();solved.clear();failedPairs.clear();failedQuizzes.clear();
 message.textContent='新題目準備好了！先選藍卡，再找綠卡配對；也可以先挑戰橘卡！';
 render();
}
document.querySelector('#restart').onclick=reset;
document.querySelector('#again').onclick=()=>{reset();document.querySelector('#restart').focus();};
reset();
