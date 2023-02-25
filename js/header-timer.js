const buyTickets = new Date('2023-02-22T23:59:59').getTime();
const displayElement = document.querySelector('.timer');

function countdownTimer( buyTickets , displayElement) {

  const interval = setInterval(function() {

    const now = new Date().getTime();
    const distance = buyTickets - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    displayElement.innerText = countdownString;
    
    const boxColor = document.querySelector ('.header__nav-action-link');
    boxColor.classList.toggle ('active__timer');

    if (distance < 0) {
      clearInterval(interval);
    displayElement.style.display = "none";
    boxColor.innerText = "BUY TICKETS"; 
    }
  }, 1000);

}
countdownTimer( buyTickets, displayElement);


