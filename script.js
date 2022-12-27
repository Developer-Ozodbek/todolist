const submitBtn = document.querySelector('.inputField button'),
input = document.querySelector('.inputField input'),
clearAll = document.querySelector('footer button'),
footerText = document.querySelector('footer span'),
nothing = document.querySelector('.ToDoList img'),
ToDoList = document.querySelector('.ToDoList');

submitBtn.addEventListener('click', ()=> {
    if (input.value == '') {
        alert('please input to your note')
    } else {
        const li = document.createElement('li'),
              span = document.createElement('span'),
              i = document.createElement('i');

        li.innerHTML = input.value

        ToDoList.appendChild(li)
        li.appendChild(span)
        span.appendChild(i)

        i.className = 'fas fa-trash'

        span.addEventListener('click', ()=> {
            li.remove()
        });

        clearAll.addEventListener('click', ()=> {
                li.remove();
        });

        input.value = ''

        li !== '' ? nothing.style.display = 'none' : nothing.style.display = 'block'
    }
});