const title = document.querySelector('.quote__title');
const subtitle = document.querySelector('.quote__subtitle');
const image = document.querySelector('.image')

const quoteAPI = new QuoteAPI();
const imageAPI = new ImageAPI();

let count = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

quoteAPI.getQuote().then(res => {
  const randomQuote = res[getRandomInt(res.length)];
  title.textContent = randomQuote.text;
  if (randomQuote.author != null) subtitle.textContent = '— ' + randomQuote.author;
}).catch(err => console.error(err));

imageAPI.getPhotoLink().then(res => {
  image.src = res.message;
}).catch(err => console.error(err));

image.addEventListener('click', () => {
  count++;
  if (count == 10) {
    const audio = new Audio('../sounds/bark.wav');
    audio.play();
    count = 0;
  }
})


