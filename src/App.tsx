import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import NotFound from './pages/NotFound';
import Search from './components/Search';
import Album from './components/Album';
import Layout from './components/Layout';
import Favorites from './components/Favorites';
import ProfileEdit from './components/ProfileEdit';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route element={ <Layout /> }>
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
          <Route path="/favorites" element={ <Favorites /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/profile/edit" element={ <ProfileEdit /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
