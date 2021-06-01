let sel = x =>document.querySelector(x);
let news = document.forms['news'];
let list = document.forms['list'];

let tasks = [];

news.button.addEventListener('click', function(){
      let text = news.text.value;
      if(text==""){
            alert('Виведіть будь ласка завдання');
      }
      else{
            let input = 1;
            let label = document.createElement('div');
            for(let i=0; i<input; i++){
                  let checkBox = document.createElement('input');
                  checkBox.type = 'checkbox';
                  label.appendChild(checkBox)
                  label.innerHTML += text;
            }
            list.appendChild(label);

            label.addEventListener('click', function(){
                  if(list.elements.length>1){
                        label.style.display = 'none'
                  }
                  else{
                        alert('Останній пункт з списку видалити не можна');
                  }
            })
      }
})