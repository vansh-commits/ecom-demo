import React from 'react';
import { useAppContext } from '../context/AppContext';

const Sidebar = () => {
  const { setColor, setCategory, setPriceSort } = useAppContext();
  return (
    <aside className="w-64 p-4 bg-white shadow-md">
      <h3 className="font-bold mb-2">Sort By Color</h3>
      <button onClick={() => setColor('white')}>White</button>
      <button onClick={() => setColor('black')}>Black</button>
      <button onClick={() => setColor('blue')}>Blue</button>
      <h3 className="font-bold mt-4 mb-2">Sort By Category</h3>
      <button onClick={() => setCategory('sneakers')}>Sneakers</button>
      <button onClick={() => setCategory('running')}>Running</button>
      <button onClick={() => setCategory('casual')}>Casual</button>
      <h3 className="font-bold mt-4 mb-2">Sort By Price</h3>
      <button onClick={() => setPriceSort('asc')}>Low to High</button>
      <button onClick={() => setPriceSort('desc')}>High to Low</button>
    </aside>
  );
};
export default Sidebar;