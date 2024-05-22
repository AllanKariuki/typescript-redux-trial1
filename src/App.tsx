import React from 'react';
import AddItem from "./components/AddItem.tsx";
import ItemList from "./components/ItemList.tsx";

const App: React.FC = () => {
  return (
    <>
      <p className="text-5xl">Hello</p>
      <AddItem/>
      <ItemList/>
    </>
  );
}

export default App;
