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
    comments.appendChild(content)
}
// Source - https://stackoverflow.com/a/71548147
// Posted by Abdelaziz Alsabagh
// Retrieved 2026-10-14, License - CC BY-SA 4.0

const field = document.querySelector('textarea');
const backUp = field.getAttribute('placeholder')
const btn = document.querySelector('.btn');
const clear = document.getElementById('clear')
const submit = document.querySelector('#submit')
// const comments = document.querySelector('#comment-box')
const comments = document.getElementById('comment-box');

// array to store the comments
const comments_arr = [];

// to generate html list based on comments array
const display_comments = () => {
  let list = '<ul>';
   comments_arr.forEach(comment => {
    list += `<li>${comment}</li>`;
  })
  list += '</ul>';
  comments.innerHTML = list;
}

clear.onclick = function(event){
  event.preventDefault();
  // reset the array  
   comments_arr.length = 0;
  // re-genrate the comment html list
  display_comments();
}

submit.onclick = function(event){
    event.preventDefault();
    const content = field.value;
    if(content.length > 0){ // if there is content
      // add the comment to the array
      comments_arr.push(content);
      // re-genrate the comment html list
      display_comments();
      // reset the textArea content 
      field.value = '';
    }
