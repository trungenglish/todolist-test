import { Input } from "@/components/ui/input";
import { useAddTodo } from "../hooks/useAddTodo";
import { Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface AddTodoProps {
    onAdd: (text: string, description: string) => void;
  }

const AddTodo = ({ onAdd }: AddTodoProps) => {
    const { 
        isAdding, 
        handleSubmit, 
        title,
        description,
        setTitle,
        setDescription
    } = useAddTodo(onAdd);

    return (
        <div className="mb-8">
            <form onSubmit={handleSubmit} className="glass-card p-6 rounded-xl">
                <div className="space-y-4">
                    <div>
                    <Label htmlFor="title" className="text-sm font-medium mb-2 block">
                        Tiêu đề công việc
                    </Label>
                    <div className="relative">
                        <Input
                            id="title"
                            type="text"
                            placeholder="Nhập tiêu đề công việc..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="pl-4 pr-12 h-12 text-base rounded-xl border-2 border-border/50 focus:border-primary/50 bg-background/50 shadow-soft transition-all duration-200"
                        />
                        {title && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                            </div>
                        )}
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="description" className="text-sm font-medium mb-2 block">
                        Mô tả (tùy chọn)
                        </Label>
                        <Textarea
                        id="description"
                        placeholder="Nhập mô tả chi tiết..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="min-h-[80px] rounded-xl border-2 border-border/50 focus:border-primary/50 bg-background/50 shadow-soft transition-all duration-200 resize-none"
                        rows={3}
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={!title.trim() || isAdding}
                        className="w-full h-12 rounded-xl  hover:shadow-glow transition-all duration-300 text-white font-medium"
                    >
                        {isAdding ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                        <>
                            <Plus className="w-5 h-5 mr-2" />
                            Thêm công việc
                        </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo;