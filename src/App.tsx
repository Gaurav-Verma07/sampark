import { Route, Routes } from 'react-router';
import './App.css';
import { Suspense, lazy } from 'react';
import { Oval } from 'react-loader-spinner';

const Admin=lazy(()=>(import('./Pages/Admin')))
const AuthenticationForm=lazy(()=>(import('./Pages/Login')))
const RegisterPage=lazy(()=>(import('./Pages/Register')))
const Home=lazy(()=>(import('./Pages/Home')))
const Provider=lazy(()=>(import('./Pages/Provider')))
const Seeker=lazy(()=>(import('./Pages/Seeker')))
const Blogs=lazy(()=>(import('./components/Blogs/Blogs')))
const AllBlogs=lazy(()=>(import('./components/Blogs/AllBlogs')))
const Error=lazy(()=>(import('./Pages/Error')))

function App() {
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
