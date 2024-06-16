const input = document.querySelector('#name-input');
input.style.width = '360px';
input.style.height = '40px';
input.style.fontFamily = 'font-family';
input.style.fontWeight = '400';
input.style.fontSize = '16px';
input.style.lineHeight = '150%';
input.style.letterSpacing = '0.04em';
input.style.color = '#2e2f42';
input.style.paddingTop = '8px';
input.style.paddingBottom = '8px';
input.style.paddingLeft = '16px';
input.style.border = '1px solid #808080';
input.style.borderRadius = '4px';
input.style.marginTop = '24px';
input.style.marginLeft = '24px';
input.style.marginBotton = '16px';
const h1 = document.querySelector('h1');
h1.style.fontFamily = 'font-family';
h1.style.fontWeight = '600';
h1.style.fontSize = '24px';
h1.style.lineHeight = '133%';
h1.style.letterSpacing = '0.04em';
h1.style.color = '#2e2f42';
h1.style.marginLeft = '24px';
const nameuser = document.querySelector('#name-output');
input.addEventListener('input', handler);
function handler(event) {
    nameuser.textContent = event.currentTarget.value.trim();
    if (nameuser.textContent == '') {
        nameuser.textContent = 'Anonymous';
    }
    //console.dir(event.currentTarget.value);
};
nameuser.reset();