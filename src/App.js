import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header';
import SignIn from './Components/SignIn/SignIn';
import Courses from './Components/Courses/Courses';
import SignUp from './Components/SignUp/SignUp';
import { Route, Routes } from 'react-router-dom';
import AddCourse from './Components/Courses/AddCourse';
import ProductApi from './productAPI/ProductApi';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Courses></Courses>}></Route>
        <Route path='/AllProduct' element={<Courses></Courses>}></Route>

       
        <Route path='/AllProduct' element={<Courses></Courses>}></Route>
       
        <Route path='/ApiProduct' element={<ProductApi></ProductApi>}></Route>

       

        <Route path='/AddProduct' element={
          <AddCourse></AddCourse>
        }></Route>

        

        <Route path='/login' element={<SignIn></SignIn>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
