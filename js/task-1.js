const li = document.querySelectorAll('li');
li.forEach((elm) => {
    elm.style.listStyle = 'none';
    elm.style.margin = '0px';
});
const ul = document.querySelectorAll('ul');
ul.forEach((elm) => {
    elm.style.padding = '0px';
});
const h2 = document.querySelectorAll('h2');
h2.forEach((elm) => {
    elm.style.marginLeft = '0px';
    elm.style.marginTop = '0px';
    elm.style.marginBottom = '16px';
    elm.style.fontFamily = 'font-family';
    elm.style.fontWeight = '600';
    elm.style.fontSize = '24px';
    elm.style.lineHeight = '133%';
    elm.style.letterSpacing = '0.04em';
    elm.style.color = '#2e2f42';
});
const ulli = document.querySelectorAll('.item > ul > li');
ulli.forEach((elm) => {
    elm.style.marginBottom = '8px';
    elm.style.paddingTop = '8px';
    elm.style.paddingBottom = '8px';
    elm.style.paddingLeft = '16px';
    elm.style.width = '360px';
    elm.style.height = '40px';
    elm.style.border = '1px solid #808080';
    elm.style.borderRadius = '4px';
    elm.style.fontFamily = 'font-family';
    elm.style.fontWeight = '400';
    elm.style.fontSize = '16px';
    elm.style.lineHeight = '150%';
    elm.style.letterSpacing = '0.04em';
    elm.style.color = '#2e2f42';
});
const link = document.querySelectorAll('.item');
console.log('Numder of categories:',link.length);
link.forEach((elm) => {
    elm.style.width = '392px';
    elm.style.padding = '16px';
    elm.style.background = '#F6F6FE';
    elm.style.borderRadius = '8px';
    elm.style.marginBottom = '24px';
    let arr = elm.outerText.split('\n');
    console.log('Category:',arr[0]);
    console.log('Elements:', arr.length - 1);
    
});