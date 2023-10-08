import { useState } from "react";

export function NewTodoForm({addTodoForm}) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setNewItem("");
        if(newItem === "") return;

        addTodoForm(newItem);
    }

    return (
    <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
            <label htmlFor='item'>New Item</label>
            <input value={newItem} onChange={e => setNewItem(e.target.value)} type='text' id='item'/>
        </div>
        <button className='btn'>Submit</button>
    </form>);
}