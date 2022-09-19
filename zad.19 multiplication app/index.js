
const btn = document.querySelector('.btn');
const reset = document.querySelector('.reset')
const question = document.querySelector('.question');
const input = document.querySelector('.input');
const wynik = document.querySelector('.wynik');

const a = Math.floor(Math.random() * 10);
const b = Math.floor(Math.random() * 10);

let points = JSON.parse(localStorage.getItem('points'))
if (!points) {
    points = 0;
}

wynik.innerHTML += `wynik ${points}`
const answer = a * b;
question.innerHTML += `What is  ${a}  multiply by  ${b} ?`

btn.addEventListener("click", function () {

    if (parseInt(input.value) === answer) {
        points++;
        updateLocalStorage();
    }
    else {
        points--;
        updateLocalStorage();
    }
    location.reload()
});

reset.addEventListener("click", () => {
    wynik.innerHTML = `wynik ${points = 0}`
    updateLocalStorage();

});

function updateLocalStorage() {
    localStorage.setItem("points", JSON.stringify(points));
}





