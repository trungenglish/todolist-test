import { useState } from 'react';

export const useTodoItem = () => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = (onDelete: () => void, delay: number = 200) => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete();
    }, delay);
  };

  return {
    isDeleting,
    handleDelete,
  };
};