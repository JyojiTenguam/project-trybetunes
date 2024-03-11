import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import NotFound from './pages/NotFound';
import Search from './components/Search';
import Album from './components/Album';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
