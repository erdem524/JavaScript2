let qeotes = [
  {
    content: `Those who dare to fail miserably can achieve greatly.`,
    author: '- John F. Kennedy',
  },
  {
    content: `Strive not to be a success, but rather to be of value.`,
    author: '- Albert Einstein',
  },
  {
    content: `You miss 100 percent of the shots you never take.`,
    author: '- Wayne Gretzky',
  },
  {
    content: `Those who dare to fail miserably can achieve greatly.`,
    author: '- David Brinkley',
  },
  {
    content: `You must be the change you wish to see in the world.`,
    author: '- St. Augustine',
  },
  {
    content: `The best way out is always through.`,
    author: '- Robern Frost',
  },
];
const author = document.getElementById('author');
const cont = document.getElementById('quetoDisplay');
function newQuote() {
  randomNumber = Math.floor(Math.random() * qeotes.length);
  const mez = qeotes[randomNumber].content;
  author.innerText = qeotes[randomNumber].author;
  cont.innerText = mez;
}
