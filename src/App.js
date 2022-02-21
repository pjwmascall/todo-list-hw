import './App.css';
import {useState} from 'react';

function App() {

  const [items, setItems] = useState([
    {name: "Buy shopping", priority: "high"},
    {name: "Clean bathroom", priority: "low"},
    {name: "Car's MOT", priority: "high"}
  ]);

  const [newItem, setNewItem] = useState("");

  const [itemPriority, setItemPriority] = useState("");

  const itemNodes = items.map((item, idx) => {
    return (
      <li key={idx} className={item.priority}>
        <span>{item.name}</span>
      </li>
    );
  });

  const handleItemInput = (event) => {
    setNewItem(event.target.value);
  }

  const handlePrioritySelect = (event) => {
    setItemPriority(event.target.value);
  }

  const saveNewItem = (event) => {
    event.preventDefault();
    const newToDoItem = {name: newItem, priority: itemPriority};
    setItems([...items, newToDoItem]);
    setNewItem("");
    setItemPriority("");
  }

  return (

    <div className="App">

      <h1>ToDo's</h1>

      <form onSubmit={saveNewItem}>
        <label htmlFor="new-item"></label>
        <input type="text" id="new-item" value={newItem} onChange={handleItemInput} required />
        <label htmlFor="high">High</label>
        <input type="radio" id="high" name="priority" value="high" checked={itemPriority === "high"} onChange={handlePrioritySelect} required />
        <label htmlFor="low">Low</label>
        <input type="radio" id="low" name="priority" value="low" checked={itemPriority === "low"} onChange={handlePrioritySelect} required />
        <input type="submit" value="Save Item" />
      </form>
      
      <ul>
        {itemNodes}
      </ul>

    </div>

  );

}

export default App;
