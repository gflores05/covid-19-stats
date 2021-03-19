import Cookies from 'universal-cookie';

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const getAccessToken = () => {
  const cookies = new Cookies();

  return cookies.get('accessToken');
};
