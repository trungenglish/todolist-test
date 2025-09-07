import { cn } from "@/utils/cn";
import type { Todo } from "@/types/todo";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Calendar, Trash2 } from "lucide-react";
import { formatDate } from "@/utils/formatter";
import { useTodoItem } from "../hooks/useTodoItem";

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string, completed: boolean) => void;
    onDelete: (id: string) => void;
    isUpdating?: boolean;
}

const TodoItem = ({ todo, onToggle, onDelete, isUpdating = false }: TodoItemProps) => {
    const { isDeleting, handleDelete } = useTodoItem();

    const onDeleteClick = () => {
        handleDelete(() => onDelete(todo.id));
    };

    return (
        <div
            className={cn(
                "group bg-[hsl(var(--card))] rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300",
                "border border-[hsl(var(--border))]/50 hover:border-[hsl(var(--primary))]/20",
                todo.completed && "bg-[hsl(var(--success))]/5 border-[hsl(var(--success))]/20",
                isDeleting && "scale-95 opacity-50 transition-all duration-200"
          )}
        >
            <div className="flex items-start gap-4">
                {/* Checkbox */}
                <div className="mt-1">
                    <Checkbox
                        checked={todo.completed}
                        onCheckedChange={() => onToggle(todo.id, !todo.completed)}
                        disabled={isUpdating}
                        className={cn(
                            "w-5 h-5 transition-all duration-200",
                            todo.completed && "data-[state=checked]:bg-[hsl(var(--success))] data-[state=checked]:border-[hsl(var(--success))]",
                            isUpdating && "opacity-50 cursor-not-allowed"
                        )}
                    />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <h3
                        className={cn(
                        "text-base leading-relaxed transition-all duration-200",
                        todo.completed
                            ? "line-through text-[hsl(var(--muted-foreground))]"
                            : "text-[hsl(var(--foreground))]"
                        )}
                    >
                        {todo.title}
                    </h3>
                    
                    {todo.description && (
                        <p
                        className={cn(
                            "text-sm text-[hsl(var(--muted-foreground))] mb-2",
                            todo.completed && "line-through"
                        )}
                        >
                        {todo.description}
                        </p>
                    )}
          
                    <div className="flex items-center gap-2 mt-2 text-xs text-[hsl(var(--muted-foreground))]">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(todo.createdAt)}</span>
                        {todo.completed && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]">
                            Hoàn thành
                        </span>
                        )}
                    </div>
                </div>

                {/* Delete Button */}
                <Button
                variant="ghost"
                size="sm"
                onClick={onDeleteClick}
                className={cn(
                    "h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200",
                    "hover:bg-[hsl(var(--destructive))]/10 hover:text-[hsl(var(--destructive))]",
                    "focus:opacity-100"
                )}
                >
                    <Trash2 className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}

export default TodoItem;