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
const cards=document.querySelector('#cards'), message=document.querySelector('#message'), dialog=document.querySelector('#quiz');
let selected=null, matched=new Set(), solved=new Set(), activeQuiz=null;
function update(){document.querySelector('#score').textContent=(matched.size+solved.size)*10;document.querySelector('#progress').textContent=matched.size+solved.size;document.querySelector('#finish').hidden=matched.size+solved.size!==8;}
function render(){cards.replaceChildren();['blue','green','orange'].forEach(type=>{const list=type==='orange'?quizzes:pairs;list.forEach((item,i)=>{const done=type==='orange'?solved.has(i):matched.has(item.id);const data=type==='orange'?[item.icon,item.title,'點我回答，練習守護環境！']:item[type];const button=document.createElement('button');button.className=`card ${type}${done?' completed':''}${type==='blue'&&selected===item.id?' selected':''}`;button.disabled=done;button.setAttribute('aria-pressed',String(type==='blue'&&selected===item.id));button.innerHTML=`<span class="type">${{blue:'水環境卡',green:'生態卡',orange:'守護挑戰卡'}[type]}</span><span class="icon" aria-hidden="true">${data[0]}</span><span class="title">${data[1]}</span><span class="desc">${data[2]}</span>${done?'<span class="check">✓ 完成</span>':''}`;button.onclick=()=>choose(type,item,i);cards.append(button);});});update();}
function choose(type,item,i){if(type==='orange'){openQuiz(i);return;}if(type==='blue'){selected=item.id;message.textContent=`已選「${item.blue[1]}」，請找出有關聯的綠色生態卡！`;render();return;}if(!selected){message.textContent='請先選一張藍色水環境卡，再選綠色生態卡。';return;}if(selected===item.id){matched.add(item.id);selected=null;message.textContent=`答對了！＋10 分。${item.lesson}`;render();}else{message.textContent='再想一想！看看卡牌上的提示，試試另一張綠卡；也可以換一張藍卡。';}}
function openQuiz(i){activeQuiz=i;const q=quizzes[i];document.querySelector('#question').textContent=q.question;document.querySelector('#feedback').textContent='';document.querySelector('#quizDone').hidden=true;const answers=document.querySelector('#answers');answers.replaceChildren();q.answers.forEach((answer,index)=>{const b=document.createElement('button');b.textContent=answer;b.onclick=()=>{if(index===q.correct){solved.add(i);b.classList.add('correct');for(const option of answers.children)option.disabled=true;document.querySelector('#feedback').textContent=`答對了！＋10 分。${q.explain}`;document.querySelector('#quizDone').hidden=false;update();}else{b.classList.add('wrong');b.disabled=true;document.querySelector('#feedback').textContent='再想一想，選擇能保護自己和環境的做法！';}};answers.append(b);});dialog.showModal();}
dialog.addEventListener('close',()=>{activeQuiz=null;render();});document.querySelector('#quizDone').onclick=()=>dialog.close();
function reset(){if(dialog.open)dialog.close();selected=null;matched.clear();solved.clear();message.textContent='先選一張藍色水環境卡，再找一張綠色生態卡；也可以先挑戰橘卡！';render();}
document.querySelector('#restart').onclick=reset;document.querySelector('#again').onclick=()=>{reset();document.querySelector('#restart').focus();};render();
