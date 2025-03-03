export const useDate = () => {
  const formatDate = (date?: string) => {
    const [day, month, year] = String(date).split('-');
    return new Date(`${year}-${month}-${day}`);
  };

  return {
    formatDate,
  };
};
