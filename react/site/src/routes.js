import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './home';

export default function Rota(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" component={Home}/>
            </Routes>
        </BrowserRouter>
    )
}