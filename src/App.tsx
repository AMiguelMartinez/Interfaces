import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registro from './Registro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={} />
        <Route path="/Registro" element={<Registro></Registro>} />
      </Routes>
    </Router>
  );
}

export default App;