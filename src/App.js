import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Single from './pages/Single';
import AddOffer from './pages/AddOffer';

import './App.css';

function App() {
  return (
    <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jobs/:id" element={<Single />} />
                <Route path="/admin/create" element={<AddOffer />} />
            </Routes>
    </div>
  );
}

export default App;