// ToDoListByDate.jsx
import React, { useState, useEffect } from 'react';
import '/Users/jungjunkyeong/Desktop/React_Study/gpttest/src/style.css';

const ToDoListByDate = ({ selectedDate }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [initialDate, setInitialDate] = useState('');

  useEffect(() => {
    // Set the initial date when the component mounts
    setInitialDate(selectedDate.toDateString());
  }, [selectedDate]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { task: newTodo, completed: false, date: initialDate }]);
      setNewTodo('');
    }
  };

  const handleToggleComplete = index => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list-by-date">
      <h2>To-Do List for {initialDate}</h2>
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={handleAddTodo}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <span className={todo.completed ? 'completed' : ''}>{todo.task} - {todo.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoListByDate;
