import { Input } from "@/components/ui/input";

const AddTodo = () => {
    return (
        <div className="mb-8">
            <form className="relative">
                <div className="flex gap-3">
                    <div className="flex-1 relative">
                    <Input
                        type="text"
                        placeholder="Thêm công việc mới..."
                        className="pl-4 pr-12 h-14 text-base rounded-xl border-2 border-border/50 focus:border-primary/50 bg-card shadow-soft transition-all duration-200"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddTodo;