const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesbtn = document.querySelector('.yes-btn');
const nobtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const nobtnRect = nobtn.getBoundingClientRect();


yesbtn.addEventListener('click',() => {
    question.innerHTML = 'I love you too';
});

nobtn.addEventListener('click',() => {
    question.innerHTML = 'Di pwede akin ka lang';
}); 