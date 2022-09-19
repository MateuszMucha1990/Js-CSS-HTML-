const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      
       
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      
       
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      
       
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
   
        
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];


  const img = document.querySelector("#person-img");
  const author = document.querySelector("#author");
  const job = document.querySelector("#job");
  const info = document.querySelector("#info");    

  const prevBtn=document.querySelector(".prev-but");
  const nextBtn=document.querySelector(".next-but");
  const randomBtn=document.querySelector(".random-but");

  let currnetItem = 0; 

  window.addEventListener('DOMContentLoaded', function(){
    showPerson(currnetItem);
  });

    //wyswietl osobe na podstawie item

function showPerson(person){
    const item = reviews[person];
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
};

// nastepna osoba

    nextBtn.addEventListener("click", function(){
         currnetItem++;
         if (currnetItem > reviews.length - 1 ){   //przy item 4 jest error, wiec odejmujemy -1, bo 4 to ostatni
         currnetItem = 0;
         }
         showPerson(currnetItem);
});
// poprzednia osoba
    prevBtn.addEventListener("click", function(){
      currnetItem--;
      if (currnetItem < 0 ) {  //przy item 4 jest error, wiec odejmujemy -1, bo 4 to ostatni
      currnetItem = reviews.length - 1;
      }
      showPerson(currnetItem);
    });
// losowa osoba
   /* randomBtn.addEventListener("click", function(){
      currnetItem = Math.floor(Math.random()*reviews.length);
      showPerson(currnetItem);
    });
    */


 /*   randomBtn.addEventListener("click", function(){
      const randomNumber= getRandomNumber();
      currnetItem = randomNumber;
      showPerson(currnetItem);
    });
 
function getRandomNumber(){
      return Math.floor(Math.random() * reviews.length);
    };  */

   randomBtn.addEventListener("click", function(){
      let currnetItem=randomNumber(); 
      showPerson(currnetItem);
    });
 
function randomNumber(){
      return Math.floor(Math.random() * reviews.length);
    }; 