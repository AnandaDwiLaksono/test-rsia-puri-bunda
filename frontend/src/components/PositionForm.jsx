import { useState, useEffect } from 'react';
import axios from 'axios';

const PositionForm = ({ position, onSave }) => {
  const [name, setName] = useState(position ? position.name : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name };
    try {
      if (position) {
        await axios.put(`/api/positions/${position.id}`, payload);
      } else {
        await axios.post('/api/positions', payload);
      }
      onSave();
    } catch (error) {
      console.error('Error saving position', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Position Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Save</button>
    </form>
  );
};

export default PositionForm;
