import './App.css';
import Contact from './components/contact';
import Home from './components/index';
import About from './components/about';
import Cars from './components/cars';
import Nature from './components/nature';
import Historical from './components/historical';
import Tech from './components/tech';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <>
        <BrowserRouter>
    <Routes>
          <Route path="/"
          element={<Home/>}>
          </Route>
          <Route path="/about"
          element={<About/>}>
          </Route>
          <Route path="/contact"
          element={<Contact/>}>
          </Route>
          <Route path="/cars"
          element={<Cars/>}>
          </Route>
          <Route path="/nature"
          element={<Nature/>}>
          </Route>
          <Route path="/historical"
          element={<Historical/>}>
          </Route>
          <Route path="/tech"
          element={<Tech/>}>
          </Route>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
