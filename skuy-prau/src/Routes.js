import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/about' exact element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
} 