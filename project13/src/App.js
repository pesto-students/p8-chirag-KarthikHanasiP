import './App.css';
import Home from './Home';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
  );
}

export default App;
