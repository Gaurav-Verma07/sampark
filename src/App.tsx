import { Route, Routes } from 'react-router';
import './App.css';
import Admin from './Pages/Admin';
import AuthenticationForm from './Pages/Login';
import RegisterPage from './Pages/Register';
import Home from './Pages/Home';
import Provider from './Pages/Provider';
import Seeker from './Pages/Seeker';
import Blogs from './components/Blogs/Blogs';

import AllBlogs from './components/Blogs/AllBlogs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blogs/:id" element={<Blogs />} />
        <Route path="/login" element={<AuthenticationForm />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/provider/*" element={<Provider />} />
        <Route path="/seeker/*" element={<Seeker />} />
      </Routes>
    </div>
  );
}

export default App;
