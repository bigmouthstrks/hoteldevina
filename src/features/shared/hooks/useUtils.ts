import { SECRET_KEY } from '@models/consts';
import { User } from '@models/user';
import CryptoJS from 'crypto-js';

export const useUtils = () => {
  const encript = (data: string) => {
    const encryptedData = CryptoJS.AES.encrypt(data, SECRET_KEY);
    return encodeURIComponent(encryptedData.toString());
  };

  const formatDate = (date?: string) => {
    const [day, month, year] = String(date).split('-');
    return new Date(`${year}-${month}-${day}`);
  };

  const formatUserForm = (user: User) => {
    return {
      ...user,
      email: String(user.email).trim().toLowerCase(),
      password: String(user.password).trim(),
    };
  };

  return {
    formatDate,
    formatUserForm,
    encript,
  };
};
