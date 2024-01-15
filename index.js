const cards = document.querySelectorAll(".card");
var isFlipped = false;
var card1;
var card2;


cards.forEach((card) => card.addEventListener("click", flip));


function flip() {

  this.classList.add("flip");
  if (!isFlipped) {

    
    card1 = this;
    
  }

  else {

    card2 = this;
    check();

  }
}



function check() {

  if (card1.dataset.image === card2.dataset.image) {
    success();
  }

  else {
    fail();
  }
}


function success() {
  console.log("matched");
  card1.removeEventListener("click", flip);
  card2.removeEventListener("click", flip);
  reset();

}

function fail() {
  setTimeout(() => {
    card1.classList.remove("flip");
    card2.classList.remove("flip");
    reset();
  }, 300);

}

function reset() {
  isFlipped = false;
  card1 = null;
  card2 = null;
}


(function shuffle() {

  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });

})();



