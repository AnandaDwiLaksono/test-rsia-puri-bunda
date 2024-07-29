import { useState, useEffect } from 'react';
import axios from 'axios';

const UnitForm = ({ unit, onSave }) => {
  const [name, setName] = useState(unit ? unit.name : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name };
    try {
      if (unit) {
        await axios.put(`/api/units/${unit.id}`, payload);
      } else {
        await axios.post('/api/units', payload);
      }
      onSave();
    } catch (error) {
      console.error('Error saving unit', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Unit Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Save</button>
    </form>
  );
};

export default UnitForm;
