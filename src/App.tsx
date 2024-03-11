import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import NotFound from './pages/NotFound';
import Search from './components/Search';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
