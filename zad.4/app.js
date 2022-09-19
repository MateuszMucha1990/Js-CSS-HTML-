let count=0;
const przyciski=document.querySelectorAll(".przycisk");
const value=document.querySelector("#value");
console.log(przyciski);





przyciski.forEach(function(e){
    e.addEventListener("click", function(e){
        const styles=e.currentTarget.classList;
        (styles.contains("odejmij"))? count--: count++;
        if (styles.contains("rest")){count = 0;}
        (count>0)? value.style.color="blue" : value.style.color="red";
        if(count===0) {value.style.color="black"};
        value.textContent=count;
    })
})






/* przyciski.forEach(function(przycisk){
    przycisk.addEventListener("click", function(e){
        const styles=e.currentTarget.classList;
        if (styles.contains("odejmij")){
            count--;
        }
        else if(styles.contains("Dodaj")){
            count++;
        }
        else{
            count = 0;
        }
        (count>0)? value.style.color="blue" : value.style.color="red";
        if(count===0) {value.style.color="black"};
        value.textContent=count;
    })
})*/






/* przyciski.forEach(function(przycisk){
    przycisk.addEventListener("click", function(e){
        const styles=e.currentTarget.classList;
        if (styles.contains("odejmij")){
            count--;
        }
        else if(styles.contains("Dodaj")){
            count++;
        }
        else{
            count = 0;
        }
        if(count>0){
            value.style.color="blue"
        }
        else if(count<0){
            value.style.color="red"
        }
        else{value.style.color="black"}
        
        value.textContent=count;
    })
}) */
