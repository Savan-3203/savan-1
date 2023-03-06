import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeScreen from './Assets/components/HomeScreen';
import { IconName } from "react-icons/ai";
import Login from './Assets/components/Login';
import Register from './Assets/components/Register';
import StudentForm from './Assets/components/StudentForm';
import StudentTable from './Assets/components/StudentTable';
import ProductForm from './Assets/components/ProductForm';
import UserForm from './Assets/components/UserForm';
import UserTable from './Assets/components/UserTable';
import ProductTable from './Assets/components/ProductTable';
import Error from './Assets/components/Error';
import Reducer from './Assets/components/Reducer/Reducer';
import ReducerApi from './Assets/components/Reducer/ReducerApi';


function App() {
  return (
    <>
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <HomeScreen/> */}
      {/* <StudentForm/> */}
      {/* <StudentTable/> */}
      {/* <ProductForm/> */}
      {/* <UserForm/> */}


      <BrowserRouter>
        {
          localStorage.getItem('data') != null ?
            <HomeScreen />
            : <></>
        }
        <Routes>
          {
            !localStorage.getItem('data') ?
              <>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/' element={<Login />}></Route>
                <Route path='*' element={<Error />}></Route>

              </> :
              <>
                <Route path='/homepage' element={<HomeScreen />}></Route>
                <Route path='/homepage'>
                  <Route path='student'>
                    <Route path='Form' element={<StudentForm />}></Route>
                    <Route path='Form/:id' element={<StudentForm />}></Route>
                    <Route path='Table' element={<StudentTable />}></Route>
                  </Route>
                  <Route path='product'>
                    <Route path='Form' element={<ProductForm />}></Route>
                    <Route path='Form/:id' element={<ProductForm />}></Route>
                    <Route path='Table' element={<ProductTable />}></Route>
                  </Route>
                  <Route path='user'>
                    <Route path='Form' element={<UserForm />}></Route>
                    <Route path='Form/:id' element={<UserForm />}></Route>
                    <Route path='Table' element={<UserTable />}></Route>
                  </Route>
                </Route>
                <Route path='*' element={<Navigate to = '/homepage'/>}/>
              </>
          }
        </Routes>
      </BrowserRouter>
      {/* {/* <Reducer/> */}
      {/* // <ReducerApi></ReducerApi> */}
    </>
  );
}

export default App;
