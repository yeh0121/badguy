const cards = document.querySelectorAll(".card__inner");
function flipCard() {
  if(this.classList.contains('flip')){
    this.addEventListener("mouseout",this.classList.toggle("flip"));
  }
  else{
    this.classList.toggle("flip");
  }
}
cards.forEach((card) => card.addEventListener("click", flipCard));
