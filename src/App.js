import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RateSmell from './RateSmell';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/RateSmell'} element={<RateSmell/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
