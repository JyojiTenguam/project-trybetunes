import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

function Header() {
  const [userData, setUserData] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUser().then((user) => {
      setUserData(user.name);
      setLoading(false);
    });
  }, []);

  return (
    <header>
      <Link to="/search" data-testid="link-to-search">Search</Link>
      <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
      <Link to="/profile" data-testid="link-to-profile">Profile</Link>
      <h3 data-testid="header-user-name">
        Usuário:
        {' '}
        {loading ? <Loading /> : userData}
      </h3>
    </header>
  );
}

export default Header;
