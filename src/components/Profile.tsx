import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importação do Link
import { getUser } from '../services/userAPI';
import { UserType } from '../types';
import Loading from './Loading';

function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    async function fetchUser() {
      setIsLoading(true);
      const userData = await getUser();
      setUser(userData);
      setIsLoading(false);
    }

    fetchUser();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.description}</p>
        <img data-testid="profile-image" src={ user.image } alt="Profile" />
        <Link to="/profile/edit">Editar perfil</Link>
      </div>
    );
  }

  return null;
}

export default Profile;
