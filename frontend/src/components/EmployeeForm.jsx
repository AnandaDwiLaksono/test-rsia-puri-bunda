import { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeForm = ({ employee, onSave }) => {
  const [name, setName] = useState(employee ? employee.name : '');
  const [username, setUsername] = useState(employee ? employee.username : '');
  const [password, setPassword] = useState('');
  const [unit, setUnit] = useState(employee ? employee.unitId : '');
  const [positions, setPositions] = useState(employee ? employee.positions : []);
  const [units, setUnits] = useState([]);
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get('/api/units').then(res => setUnits(res.data));
    axios.get('/api/positions').then(res => setAllPositions(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      username,
      password,
      unitId: unit,
      positions,
    };
    try {
      if (employee) {
        await axios.put(`/api/employees/${employee.id}`, payload);
      } else {
        await axios.post('/api/employees', payload);
      }
      onSave();
    } catch (error) {
      console.error('Error saving employee', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">Select Unit</option>
        {units.map(unit => (
          <option key={unit.id} value={unit.id}>{unit.name}</option>
        ))}
      </select>
      <select
        multiple
        value={positions}
        onChange={(e) => setPositions([...e.target.selectedOptions].map(o => o.value))}
        className="p-2 border border-gray-300 rounded"
      >
        {allPositions.map(position => (
          <option key={position.id} value={position.id}>{position.name}</option>
        ))}
      </select>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Save</button>
    </form>
  );
};

export default EmployeeForm;
