import React from 'react';
import { useDispatch } from 'react-redux';
import { updateItem, removeItem, Item as ItemType } from "../redux/itemSlice.ts";

interface Props {
    item: ItemType
}

const Item: React.FC<Props> = ({ item }) => {
    const dispatch = useDispatch();
    const handleUpdate = () => {
        const newName = prompt('Enter new name', item.name);
        if (newName) {
            dispatch(updateItem({ ...item, name: newName }));
        }
    }

    const handleDelete = () => {
        dispatch(removeItem(item.id));
    }

    return (
        <div className="mt-5">
            <span>{item.name}</span>
            <button onClick={handleUpdate}>update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Item;