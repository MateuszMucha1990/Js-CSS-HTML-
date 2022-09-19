   // const color=document.querySelector('.color');
   const container =document.querySelector('.container')
    
    for (let j=0; j<30; j++){
        const createContainer = document.createElement('div');
        createContainer.classList.add('color')
        container.appendChild(createContainer);
        //createContainer.innerHTML=randomColor();
    }

    const createContainer=document.querySelectorAll('.color')

    function nowa(){
    createContainer.forEach((createContainer) =>{
       const newColor=randomColor();
        createContainer.style.backgroundColor="#"+newColor;
        createContainer.innerHTML='#'+newColor
    });}
    nowa()
    
    
    function randomColor(){
        let result=''
        const prep="0123456789abcdef";
        const prepLenght=prep.length;

        for(let i=0; i<6;i++){
        result+=prep.charAt(Math.floor(Math.random()*prepLenght) )
    }
    return result
}
randomColor()
console.log(randomColor())

