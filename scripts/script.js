const title = document.querySelector('.quote__title');
const subtitle = document.querySelector('.quote__subtitle');
const image = document.querySelector('.image');
const toggler = document.querySelector('.header__checkbox');


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
    const audio = new Audio('https://raw.githubusercontent.com/quis0/inspiration/master/sounds/bark.mp3');
    audio.play();
    count = 0;
  }
})

function applyTheme(theme) {
  const header = document.querySelector('.header');
  const content = document.querySelector('.content');
  const root = document.querySelector('.root');

  const elems = { header: header, content: content, root: root };

  switch (theme) {
    case 'dark':
      for (let prop in elems) {
        elems[prop].classList.remove(`${prop}_theme_white`);
        elems[prop].classList.add(`${prop}_theme_dark`);
      }
      break;

    case 'white':
      for (let prop in elems) {
        elems[prop].classList.remove(`${prop}_theme_dark`);
        elems[prop].classList.add(`${prop}_theme_white`);
      }
      break;

    default:
      console.log('wrong theme')
      return;

  }
}

toggler.addEventListener('change', () => {
  if (event.target.checked) {
    applyTheme('dark');
  } else {
    applyTheme('white');
  }
})
