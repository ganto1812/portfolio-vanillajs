let todos_str;
let todoList = {
	todos: [],

	fetchTodoList: function() {
		let todos_str = localStorage.getItem('todo');
		let todos_completed = localStorage.getItem('completed');
		if (todos_str != null) {
			this.todos = JSON.parse(todos_str);
		}
		return this.todos;
	},

	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},

	changeTodo: function(position, todoText) {
		this.todos[position - 1].todoText = todoText;
	},

	deleteTodo: function(position) {
		this.todos.splice(position, 1);
	},

	toggleAll: function() {
		let totalTodos = this.todos.length;
		let completedTodos = 0;

		this.todos.forEach(function(todo) {
			if (todo.completed === true) {
				completedTodos++;
			}
		});

		this.todos.forEach(function(todo) {
			if (completedTodos === totalTodos) {
				todo.completed = false;
			} else {
				todo.completed = true;
			}
		});
	}
};

//handlers

let handlers = {
	addTodo: function() {
		event.preventDefault();
		let addText = document.getElementById('addText');
		if (addText.value !== '') {
			todoList.addTodo(addText.value);
			addText.value = '';
			view.displaySaveTodos();
		}
	},
	changeTodo: function() {
		event.preventDefault();
		let changePosition = document.getElementById('changePosition');
		let changeText = document.getElementById('changeText');
		todoList.changeTodo(changePosition.valueAsNumber, changeText.value);
		changePosition.value = '';
		changeText.value = '';
		view.displaySaveTodos();
	},
	deleteTodo: function(position) {
		todoList.deleteTodo(position);
		view.displaySaveTodos();
	},

	toggleAll: function() {
		todoList.toggleAll();
		view.displaySaveTodos();
	}
};

let view = {
	displaySaveTodos: function() {
		let todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';

		todoList.todos.forEach(function(todo, position) {
			let todoLi = document.createElement('li');
			todoLi.className = 'list';
			todoLi.id = position;
			todoLi.textContent = todo.todoText;
			todoLi.appendChild(this.createDelete());
			todosUl.appendChild(todoLi);
			if (todo.completed === true) {
				todoLi.classList.add('checked');
			}
		}, this);
		localStorage.setItem('todo', JSON.stringify(todoList.todos));
		return false;
	},

	createDelete: function() {
		let deleteBtn = document.createElement('span');
		deleteBtn.innerHTML = 'x';
		deleteBtn.className = 'deleteBtn';
		return deleteBtn;
	},

	setUpEventListener: function() {
		let todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function(event) {
			let elementClicked = event.target;
			if (elementClicked.className === 'deleteBtn') {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			} else if (elementClicked.tagName === 'LI') {
				elementClicked.classList.toggle('checked');
				if (elementClicked.classList.contains('checked')) {
					todoList.todos[elementClicked.id].completed = true;
				} else {
					todoList.todos[elementClicked.id].completed = false;
				}
				view.displaySaveTodos();
			}
		});
	}
};

view.setUpEventListener();
todoList.fetchTodoList();
view.displaySaveTodos();
