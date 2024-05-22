import React from 'react';
import Item from "./Item.tsx";
import {useSelector} from "react-redux";
import { RootState } from "../redux/store.ts";

const ItemList: React.FC = () => {
    const items = useSelector((state: RootState) => state.items.items);
    return (
        <div className="mx-auto flex flex-col mt-5 space-y-3">
            {items.length > 0 ? (
                items.map(item => <Item key={item.id} item={item} />)
                )
                : (
                    <p>No items found</p>
                    )
            }
        </div>
    )
}

export default ItemList;