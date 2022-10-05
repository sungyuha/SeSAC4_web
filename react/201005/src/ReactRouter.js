import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import Main from './Main';
import Product from './Product';
const ReactRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Link to="/">페이지</Link>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    {/* <Route path="/product" element={<Product />}></Route> */}
                    <Route path="/product/:id" element={<Product />}></Route> {/* 내가 어떤 것을 사용할지 경로를 정확히!! */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter;