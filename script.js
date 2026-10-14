const field = document.querySelector('textarea');
const backup = field.getAttribute('placeholder');
const btn = document..querySelector ('.btn');
const clear = document.getElementById('clear')
const submit = document.querySelector('#submit')
// const comments = document.queryselector('#comment-box')
const comments = document.getElementById('comment-box')
field.onfocus = function(){
    this.setAttribute('placeholder','')
    this.style.borderColor = '#333'
    btn.style.display = 'block'
}// when clicking on this placeholder changes into ' '.

field.onblur = function (){
    this.setAttribute('placeholder',backup)
}//click away ,placeholder returns

clear.onclick = function(){
    submit.style.display = 'none';
    const content = document.createTextNode(field.value)
    comment.appendChild(content)
}


