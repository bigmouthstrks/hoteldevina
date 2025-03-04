import { User } from '@models/user';

export const useUtils = () => {
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
  };
};
