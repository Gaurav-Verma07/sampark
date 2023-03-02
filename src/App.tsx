import { Route, Routes } from 'react-router';
import './App.css';
import Admin from './Pages/Admin';
import AuthenticationForm from './Pages/Auth';

import Home from './Pages/Home';
import Provider from './Pages/Provider';
import Seeker from './Pages/Seeker';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthenticationForm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/provider/*" element={<Provider />} />
        <Route path="/seeker" element={<Seeker />} />
      </Routes>
    </div>
  );
}

export default App;
