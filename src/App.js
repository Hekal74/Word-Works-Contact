import './App.css';
import { Routes,Route } from "react-router-dom"; 
import Arabic from './Component/Ar/Arabic/Arabic.jsx';
import English from './Component/En/English/English.jsx';

function App() {
  return <>
    <Routes> 
        <Route path='/' element={<English />}></Route>
        <Route path='en' element={<English />}></Route>
        <Route path='ar' element={<Arabic />}></Route>
        <Route path='*' element={<div className='vh-100 d-flex align-items-center justify-content-center'>
            <h1>4 0 4</h1>
        </div>}></Route>
    </Routes>    

</>
}
export default App


