import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const getAccessToken = () => {
  return cookies.get('accessToken');
};
