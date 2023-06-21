import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe'
import Projects from './pages/Projects/Projects';
import './global.css';



function App()
{
 return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/aboutme' element={<AboutMe />}/>
            <Route path='/projects' element={<Projects />}/>
        </Routes>
    </Router>

 );
}

export default App;