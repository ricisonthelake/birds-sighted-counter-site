let welcomeEl=document.getElementById("welcome-el"),myName="ricisonthelake",greeting="Welcome back ";welcomeEl.innerText=greeting+myName,welcomeEl.innerText+="👋";let saveEl=document.getElementById("save-el"),countEl=document.getElementById("count-el"),count=0;function increment(){count+=1,countEl.textContent=count}function save(){let e=count+" - ";count=0,countEl.textContent=count,saveEl.textContent+=e,console.log(count)}