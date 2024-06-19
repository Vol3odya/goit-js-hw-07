const form = document.querySelector('.login-form');
form.style.borderRadius = '8px';
form.style.padding = '24px';
form.style.width = '408px';
//form.style.height = '256px';
const label = document.querySelectorAll('.login-form>label');
label.forEach((elm) => {
    elm.style.fontFamily = 'font-family';
    elm.style.fontWeight = '400';
    elm.style.fontSize = '16px';
    elm.style.lineHeight = '150%';
    elm.style.letterSpacing = '0.04em';
    elm.style.color = '#2e2f42';
});
const input = document.querySelectorAll('.login-form>label>input');
input.forEach((elm) => {
    elm.style.border = '1px solid #808080';
    elm.style.borderRadius = '4px';
    elm.style.width = '360px';
    elm.style.height = '40px';
    elm.style.marginTop = '8px';
    elm.style.marginBottom = '8px';
});
const button = document.querySelector('button');
button.style.borderRadius = '8px';
button.style.padding = '8px 16px';
button.style.width = '86px';
button.style.height = '40px';
button.style.background = '#4e75ff';
button.style.marginTop = '8px';
button.style.fontWeight = '500';
button.style.fontSize = '16px';
button.style.lineHeight = '150%';
button.style.letterSpacing = '0.04em';
button.style.color = '#fff';
button.textContent = 'Log in';
button.style.border = '#fff';
form.addEventListener('submit', handler);
function handler(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (email.value.trim() == '' || password.value.trim() == '') {
        window.alert('All form fields must be filled in')
        return;
    }
    const formData = new FormData(event.currentTarget);
    const data = {};
    formData.forEach((value, key) => data[key] = value.trim());
    console.log(data);
    form.reset();
};