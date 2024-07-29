import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/dashboard').then(res => {
      setStats(res.data.stats);
      setTopUsers(res.data.topUsers);
    });
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border border-gray-300 rounded">
          <h2 className="font-bold">Total Employees</h2>
          <p>{stats.totalEmployees}</p>
        </div>
        <div className="p-4 border border-gray-300 rounded">
          <h2 className="font-bold">Total Logins</h2>
          <p>{stats.totalLogins}</p>
        </div>
        <div className="p-4 border border-gray-300 rounded">
          <h2 className="font-bold">Total Units</h2>
          <p>{stats.totalUnits}</p>
        </div>
        <div className="p-4 border border-gray-300 rounded">
          <h2 className="font-bold">Total Positions</h2>
          <p>{stats.totalPositions}</p>
        </div>
      </div>
      <h2 className="text-lg font-bold">Top 10 Frequent Users</h2>
      <ul className="space-y-2">
        {topUsers.map(user => (
          <li key={user.id} className="p-4 border border-gray-300 rounded">
            {user.username} - {user.loginCount} logins
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
