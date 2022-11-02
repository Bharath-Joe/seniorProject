import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import CreateAccount from './Pages/CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
