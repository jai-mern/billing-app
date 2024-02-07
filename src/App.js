import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Billing from './components/Billing';
import Dashboard from './components/Dashboard';
import PaymentForm from './components/PaymentForm';


function App() {
  return (
    <div className="App">
      {/* Add your components here */}
      <SignupForm />
      <LoginForm />
      <Billing />
      <Dashboard />
      <PaymentForm />
    </div>
  );
}

export default App;
