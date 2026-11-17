const note_title=document.getElementById('title');
const content=document.getElementById('note');
const display=document.getElementById('display');
const save=document.getElementById('save');
const clear=document.getElementById('clear');
save.addEventListener('click',function(e){
    localStorage.setItem('note',note_title.value);
    localStorage.setItem('con',content.value);
    alert('This note was saved!');
})
display.addEventListener('click',function(e){
    note_title.value=localStorage.getItem('note')||"";
    content.value=localStorage.getItem('con')||"";
   
})
clear.addEventListener('click',function(e){
    localStorage.removeItem('note');
    localStorage.removeItem('con');
    note_title.value="";
    content.value="";
})