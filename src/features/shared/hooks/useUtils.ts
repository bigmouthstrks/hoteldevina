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

  const formatDateToString = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`
  };

  const clamp = (num: number, min: number, max: number) =>
    Math.max(min, Math.min(max, num));

  const formatUserForm = (user: User) => {
    return {
      ...user,
      email: String(user.email).trim().toLowerCase(),
      password: String(user.password).trim(),
    };
  };

  return {
    clamp,
    formatDate,
    formatDateToString,
    formatUserForm,
    encript,
  };
};
