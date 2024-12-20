import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Tovar from './components/Tovar';
import Index from './components/Index';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/tovar-form' element={<Tovar/>}/>
          <Route path='/about-form' element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
