import { Input } from "@/components/ui/input";
import { useAddTodo } from "../hooks/useAddTodo";
import { Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddTodoProps {
    onAdd: (text: string) => void;
  }

const AddTodo = ({ onAdd }: AddTodoProps) => {
    const { 
        inputValue, 
        isAdding, 
        handleSubmit, 
        setInputValue 
    } = useAddTodo(onAdd);

    return (
        <div className="mb-8">
            <form onSubmit={handleSubmit} className="relative">
                <div className="flex gap-3">
                    <div className="flex-1 relative">
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        type="text"
                        placeholder="Thêm công việc mới..."
                        className="pl-4 pr-12 h-14 text-base rounded-xl border-2 bg-[hsl(var(--card))] shadow-md transition-all duration-200"
                        />
                    {inputValue && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <Sparkles className="w-5 h-5 text-[hsl(var(--primary))] animate-pulse" />
                    </div>
                    )}
                    </div>
                    <Button
                        type="submit"
                        disabled={!inputValue.trim() || isAdding}
                        className="h-14 px-6 rounded-xl bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 transition-all duration-300 text-[hsl(var(--primary-foreground))] font-medium"
                    >
                        {isAdding ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                        <>
                            <Plus className="w-5 h-5 mr-2" />
                            Thêm
                        </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo;