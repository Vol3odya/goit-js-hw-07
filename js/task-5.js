function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const par = document.querySelector('div>p');
par.style.fontFamily = 'font-family';
par.style.fontWeight = '400';
par.style.fontSize = '16px';
par.style.lineHeight = '150%';
par.style.letterSpacing = '0.04em';
par.style.color = '#2e2f42';
par.style.textAlign = 'center';
par.style.marginTop = '100px';
par.style.marginBottom = '16px';
const button = document.querySelector('button');
button.style.borderRadius = '8px';
button.style.padding = '8px 16px';
button.style.width = '148px';
button.style.height = '40px';
button.style.background = '#4e75ff';
button.style.fontWeight = '500';
button.style.fontSize = '16px';
button.style.lineHeight = '150%';
button.style.letterSpacing = '0.04em';
button.style.color = '#fff';
button.style.border = '#fff';
button.style.margin = '0 auto';
button.style.display = 'block';
const body = document.querySelector('body');
const span=document.querySelector('span');
button.addEventListener('click', handler);
function handler(event) {
  const qaz = getRandomHexColor();
  body.style.background = qaz;
  span.textContent = qaz;
};
