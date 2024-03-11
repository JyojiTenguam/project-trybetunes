import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
