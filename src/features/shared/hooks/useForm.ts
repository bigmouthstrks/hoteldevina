import { useState } from 'react';

const useFormData = <T>(initialValues: T) => {
  const [formData, setFormData] = useState<T>(initialValues);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialValues);
  };

  return { formData, handleSelectChange, handleInputChange, resetForm };
};

export default useFormData;
