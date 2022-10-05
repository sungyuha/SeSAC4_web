import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sesac from './Sesac';
import React67 from './React67';

function Router67() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<React67 />}></Route>
                    <Route path="/student/:name" element={<Sesac />}></Route>
                    <Route path="/student/:name2" element={<student />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
  
  export default Router67;