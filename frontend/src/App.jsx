import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import UnitForm from './components/UnitForm';
import PositionForm from './components/PositionForm';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employees/new" element={<EmployeeForm />} />
        <Route path="/units/new" element={<UnitForm />} />
        <Route path="/positions/new" element={<PositionForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
