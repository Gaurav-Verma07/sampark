import { Route, Routes } from 'react-router';
import './App.css';
import Admin from './Pages/Admin';
import Error from './Pages/Error';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home';
import AuthenticationForm from './Pages/Login';
import Provider from './Pages/Provider';
import RegisterPage from './Pages/Register';
import Seeker from './Pages/Seeker';
import AllBlogs from './components/Blogs/AllBlogs';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blogs/:id" element={<Blogs />} />
        <Route path="/login" element={<AuthenticationForm />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/provider/*" element={<Provider />} />
        <Route path="/seeker/*" element={<Seeker />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
