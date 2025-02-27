import { useState } from 'react';

export const useFormData = <T>(initialValues: T) => {
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...(prev as any)[keys[0]],
            [keys[1]]: newValue,
          },
        };
      }
      return { ...prev, [name]: newValue };
    });
  };

  const formatRut = (value: string): string => {
    const cleaned = value.replace(/[^0-9kK]/g, '').toUpperCase();
    const rutNumber = cleaned.slice(0, -1);
    const dv = cleaned.slice(-1);

    if (rutNumber.length > 6) {
      return `${rutNumber.slice(0, -6)}.${rutNumber.slice(-6, -3)}.${rutNumber.slice(-3)}-${dv}`;
    } else if (rutNumber.length > 3) {
      return `${rutNumber.slice(0, -3)}.${rutNumber.slice(-3)}-${dv}`;
    }
    return `${rutNumber}-${dv}`;
  };

  const handleRutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const inputValue = value.replace(/[^0-9kK]/g, '');
    const newEvent = {
      ...e,
      target: {
        ...e.target,
        name,
        value: formatRut(inputValue),
      },
    };
    handleInputChange(newEvent);
  };

  const resetForm = () => {
    setFormData(initialValues);
  };

  return { formData, handleSelectChange, handleInputChange, resetForm, handleRutChange };
};
