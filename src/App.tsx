import { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { Suspense, lazy } from 'react';
import { Oval } from 'react-loader-spinner';
import GoToTop from './components/GoToTopButton/GoToTop';

const Admin=lazy(()=>(import('./Pages/Admin')))
const AuthenticationForm=lazy(()=>(import('./Pages/Login')))
const RegisterPage=lazy(()=>(import('./Pages/Register')))
const Home=lazy(()=>(import('./Pages/Home')))
const Provider=lazy(()=>(import('./Pages/Provider')))
const Seeker=lazy(()=>(import('./Pages/Seeker')))
const Blogs=lazy(()=>(import('./components/Blogs/Blogs')))
const AllBlogs=lazy(()=>(import('./components/Blogs/AllBlogs')))
const Error=lazy(()=>(import('./Pages/Error')))
const Gallery=lazy(()=>(import('./Pages/Gallery/Gallery')))

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('loader-wrapper');
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  return (
    <div className="App">
      <Suspense fallback={<div className='loader'>
          <Oval
            height='50'
            width='50'
            color='#36d7b7'
            secondaryColor='grey'
            ariaLabel='loading'
          />
      </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blogs/:id" element={<Blogs />} />
          <Route path="/login" element={<AuthenticationForm />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/provider/*" element={<Provider />} />
          <Route path="/seeker/*" element={<Seeker />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
