const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();


    if (taskText !== "") {

        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'check-task';


        const span = document.createElement('span');
        span.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.className = 'remove-btn';

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(removeBtn);

        taskList.appendChild(li);


        taskInput.value = "";
    } else {
        alert("Por favor, digite uma tarefa!");
    }
});

taskList.addEventListener('click', function(event) {

    if (event.target.classList.contains('remove-btn')) {

        const liParaRemover = event.target.closest('li');
        liParaRemover.remove();
    }

    if (event.target.classList.contains('check-task')) {
        
        const spanTexto = event.target.nextElementSibling;
        
        if (event.target.checked) {
            spanTexto.classList.add('completed');
        } else {
            spanTexto.classList.remove('completed');
        }
    }
});