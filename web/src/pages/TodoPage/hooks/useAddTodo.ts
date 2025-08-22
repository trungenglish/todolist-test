import { useState } from "react";

export const useAddTodo = (onAdd: (text: string) => void) => {
    const [inputValue, setInputValue] = useState('');
    const [isAdding, setIsAdding] = useState(false);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = inputValue.trim();
        
        if (!text) return;
    
        setIsAdding(true);
        onAdd(text);
        setInputValue('');
        
        setTimeout(() => {
          setIsAdding(false);
        }, 300);
    };

    return {
        inputValue,
        isAdding,
        handleSubmit,
        setInputValue
    }
}