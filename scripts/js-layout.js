let body = document.querySelector('body');

let header = document.createElement('header');
header.style.backgroundColor = 'green';
header.style.width = '1000px';
header.style.height = '200px';
body.append(header)

let main = document.createElement('header');
main.style.backgroundColor = 'blue';
main.style.width = '1000px';
main.style.height = '400px';
body.append(main);

let j = document.createElement('img');
j.src = "http://dance.cavifax.com/images/j.gif";
main.append(j);

let s = document.createElement('img');
s.src = "http://dance.cavifax.com/images/s.gif";
main.append(s);

let text = document.createElement('h1');
text.style.fontSize = '100px';
text.style.color = 'white';
text.innerText = "Вот что я наделал";
main.append(text)
