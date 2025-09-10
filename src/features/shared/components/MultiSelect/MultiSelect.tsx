import React, { useState } from 'react';
import { Form, Button, ListGroup, InputGroup } from 'react-bootstrap';
import styles from './MultiSelect.module.scss';

interface MultiSelectProps {
  capacity: number;
  items: string[];
  onChange: (items: string[]) => void;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({ capacity, items, onChange }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [hidden, setHidden] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    if (capacity - 1 <= items.length) return;
    if (inputValue.trim() && !items.includes(inputValue.trim())) {
      onChange([...items, inputValue.trim()]);
      setInputValue('');
      setHidden(false);
    }
  };

  const removeItem = (itemToRemove: string) => {
    onChange(items.filter((item) => item !== itemToRemove));
  };

  return (
    <div className={styles.multiSelect} onMouseLeave={() => setHidden(true)}>
      <InputGroup className="mb-3" onClick={() => setHidden(false)}>
        <Form.Control
          type="text"
          name="passengerNames"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ingrese nombres de pasajeros"
          onKeyDown={(e) => e.key === 'Enter' && addItem()}
        />
        <Button variant="primary" onClick={addItem}>
          Añadir
        </Button>
      </InputGroup>
      {!hidden && (
        <ListGroup className={styles.listGroup}>
          {items.map((item, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              {item}
              <Button variant="danger" size="sm" onClick={() => removeItem(item)}>
                Eliminar
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};
