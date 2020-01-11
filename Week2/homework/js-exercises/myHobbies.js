
document.body.style.color = '#1A6EB6';
const h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.innerText ='My Hobbies';

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];
const ul = document.createElement('ul');
myHobbies.forEach(hobby => {
  const li = document.createElement('li');
li.innerText = hobby;
ul.appendChild(li);
});
document.body.appendChild(ul);
