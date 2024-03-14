import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, updateUser } from '../services/userAPI';
import { UserType } from '../types';
import Loading from './Loading';

function ProfileEdit() {
  const [userData, setUserData] = useState<UserType>({
    name: '',
    email: '',
    image: '',
    description: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getUser();
        setUserData(user);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      updateUser(userData);
      navigate('/profile');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  useEffect(() => {
    const formFields = Object.values(userData);
    const isFormFilled = formFields.every((field) => field.trim() !== '');
    setIsFormValid(isFormFilled);
  }, [userData]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 data-testid="profile-edit-heading">Editar perfil</h2>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={ userData.name }
            onChange={ handleChange }
            required
            data-testid="edit-input-name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={ userData.email }
            onChange={ handleChange }
            required
            data-testid="edit-input-email"
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={ userData.image }
            onChange={ handleChange }
            required
            data-testid="edit-input-image"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={ userData.description }
            onChange={ handleChange }
            required
            data-testid="edit-input-description"
          />
        </div>
        <button type="submit" disabled={ !isFormValid } data-testid="edit-button-save">
          Save
        </button>
      </form>
    </div>
  );
}

export default ProfileEdit;
