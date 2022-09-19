const tekst=document.querySelector(".text_txt");
const total=document.querySelector(".total");
const remaining=document.querySelector(".remaining");



tekst.addEventListener("keyup", ()=>{
   function update(){
         total.innerHTML='Total: ' + tekst.value.length;
    remaining.innerHTML='Left:' + (tekst.maxLength-tekst.value.length);
    
};
update()
});




