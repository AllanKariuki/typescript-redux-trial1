import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/itemSlice";
import { Item } from "../redux/itemSlice";

const AddItem: React.FC = () => {
    const [name, setName ] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name) {
            const newItem: Item = { id: Date.now(), name };
            dispatch(addItem(newItem));
            setName('');
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col mx-auto w-1/2 px-5 py-5 space-y-5 border-2 shadow-2xl">
            <h3>Add an item</h3>
            <input className="border-2" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddItem;