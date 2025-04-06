const playBtn = document.getElementById('play-pause');
let playing = false;

playBtn.addEventListener('click', () => {
  playing = !playing;
  playBtn.textContent = playing ? '⏸' : '▶';
});
function scrollLeftPodcasts() {
    const container = document.getElementById("podcastScroll");
    container.scrollBy({ left: -200, behavior: "smooth" });
  }
  
  function scrollRightPodcasts() {
    const container = document.getElementById("podcastScroll");
    container.scrollBy({ left: 200, behavior: "smooth" });
  }
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      alert(`You clicked on ${card.innerText} category`);
    });
  });
    