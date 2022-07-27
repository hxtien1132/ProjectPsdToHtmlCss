const buytBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');
function showBuyTickets() {
  modal.classList.add('open');
}
function hideBuyTickets() {
  modal.classList.remove('open');
}
for (const buyBtn of buytBtns) {
  buyBtn.addEventListener('click', showBuyTickets);
 

 }
// buytBtns.addEventListener('click',showBuyTickets);
modal.addEventListener('click', hideBuyTickets);
modalClose.addEventListener('click', hideBuyTickets);
modalContainer.addEventListener('click', function (event) {
  event.stopPropagation()
});