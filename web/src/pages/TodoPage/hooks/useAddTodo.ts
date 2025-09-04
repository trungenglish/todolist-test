import { useState } from "react";

export const useAddTodo = (onAdd: (text: string, description: string) => void) => {
    const [isAdding, setIsAdding] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!title.trim()) return;
    
        setIsAdding(true);
        onAdd(title, description);
        setTitle('');
        setDescription('');
        
        setTimeout(() => {
          setIsAdding(false);
        }, 300);
      };

    return {
        isAdding,
        handleSubmit,
        title,
        description,
        setTitle,
        setDescription
    }
}