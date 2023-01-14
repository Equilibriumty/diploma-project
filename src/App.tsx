import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
