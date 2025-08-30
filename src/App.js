import React,{lazy,Suspense} from 'react';
import { BrowserRouter as Router ,Routes,Route,} from 'react-router-dom';
import './App.css';
import Main from './Main';
import PrivateRoute from './PrivateRoute';
const Login = lazy(() => import('./pages/Login'));
const Singup = lazy(() => import('./pages/Signup'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const Home = lazy(() => import('./components/Home'));
const Dashborad = lazy(() => import('./components/Dashboard/Dashboard'));
const EachProduct=lazy(()=> import('./components/Dashboard/EachProduct'))
const Cart=lazy(()=> import('./components/Cart-page/Cart'))
const WishList = lazy(()=> import('./components/Wish-List/WishList'))
const NotFound = lazy(() => import('./Notfound/NotFound'));


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Singup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forget-password' element={<ForgotPassword/>}/>

        
        <Route path='/' element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashborad/>}/>
        <Route path='/product/:id' element={<EachProduct/>}/>
        <Route path='/wish-list' element={<WishList/>}/>
        <Route path='/cart-page' element={<Cart/>}/>
        </Route>
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
