import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Translator from './Translator';
import RandomStringGenerator from './RandomStringGenerator';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Translator />} />
          <Route path="/string-generator" element={<RandomStringGenerator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
