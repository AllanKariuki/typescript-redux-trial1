import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Item {
    id: number,
    name: string,
}

interface ItemState {
    items: Item[]
}

const initialState: ItemState = {
    items: []
};

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<Item>) {
            state.items.push(action.payload)
        },
        updateItem(state, action: PayloadAction<Item>) {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
              if (index !== -1) {
                state.items[index] = action.payload;
              }
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
});

export type { Item };
export const { addItem, updateItem, removeItem } = itemSlice.actions;
export default itemSlice.reducer;
