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
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prev: T) => {
      const keys: string[] = name.split('.');
      if (keys.length > 1) {
        return {
          ...prev,
          [keys[0]]: {
            ...(prev as any)[keys[0]],
            [keys[1]]: newValue,
          },
        };
      }
      console.log({ formData });
      return { ...prev, [name]: newValue };
    });
  };

  const resetForm = () => {
    setFormData(initialValues);
  };

  return { formData, handleSelectChange, handleInputChange, resetForm };
};

export default useFormData;
