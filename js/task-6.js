function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const form = document.querySelector('#controls');
form.style.borderRadius = '8px';
form.style.padding = '32px';
form.style.width = '486px';
form.style.height = '104px';
form.style.background = '#f6f6fe';
form.style.marginBottom = '16px';
const input = document.querySelector('input');
input.style.border = '1px solid #808080';
input.style.borderRadius = '8px';
input.style.padding = '8px 62px';
input.style.width = '150px';
input.style.height = '40px';
input.style.fontFamily = 'font-family';
input.style.fontWeight = '400';
input.style.fontSize = '16px';
input.style.lineHeight = '150%';
input.style.letterSpacing = '0.04em';
input.style.color = '#2e2f42';
input.style.appearance = 'textfield';
const button = document.querySelectorAll('button');
button.forEach((elm) => {
  elm.style.borderRadius = '8px';
  elm.style.padding = '8px 16px';
  elm.style.width = '120px';
  elm.style.height = '40px';
  elm.style.background = '#4e75ff';
  elm.style.border = 'none';
  elm.style.fontWeight = '500';
  elm.style.fontSize = '16px';
  elm.style.lineHeight = '150%';
  elm.style.letterSpacing = '0.04em';
  elm.style.color = '#fff';
});
const boxes = document.querySelector('#boxes');
button[1].style.background = '#ff4e4e';
//button[0]:hover
button[0].addEventListener('click', createBoxes);
function createBoxes(amount) {
  destroyBoxes();
  amount = input.valueAsNumber;
  if (amount < 101 && amount > 0) {
    boxes.style.borderRadius = '8px';
    boxes.style.padding = '32px';
    boxes.style.maxWidth = '1084px';
    boxes.style.width = 64 + 44 * (amount-1) + (30 + 5 * (amount-1)) * amount + 'px';
    //boxes.style.height = '134px';
    boxes.style.background = '#f6f6fe';
    boxes.style.display = 'flex';
    boxes.style.flexWrap = 'wrap';
    boxes.style.gap = '44px';
    for (let i = 0; i <amount; i+=1) {
      let div = document.createElement('div');
      const qaz = 30 + i * 10 + 'px';
      div.style.width = qaz;
      div.style.height = qaz;
      div.style.background = getRandomHexColor();
      boxes.append(div);
      //console.log(qaz);
    }    
  }
  //console.log(amount);
};
button[1].addEventListener('click', destroyBoxes);
function destroyBoxes() {
  const div = document.querySelectorAll('#boxes>div');
  div.forEach((elm) => {
    elm.remove();
  });
  boxes.style.background = 'none';
};

