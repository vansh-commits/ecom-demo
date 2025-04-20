import React from 'react';
import { useAppContext } from '../context/AppContext';

const Recommended = () => {
  const { setCompany } = useAppContext();
  return (
    <div className="my-4">
      <h3 className="font-bold mb-2">Recommended</h3>
      <div className="flex gap-2">
        <button onClick={() => setCompany('Nike')} className="bg-blue-200 px-3 py-1 rounded">Nike</button>
        <button onClick={() => setCompany('Adidas')} className="bg-blue-200 px-3 py-1 rounded">Adidas</button>
      </div>
    </div>
  );
};
export default Recommended;