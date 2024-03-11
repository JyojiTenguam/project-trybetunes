import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import NotFound from './pages/NotFound';
import Search from './components/Search';
import Album from './components/Album';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route element={ <Layout /> }>
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
