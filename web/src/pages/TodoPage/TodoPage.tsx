import { CheckSquare, Sparkles } from "lucide-react";
import TodoStats from "@/pages/TodoPage/components/TodoStats";

const TodoPage = () => {
  return (
    <div className="min-h-screen bg-[var(--gradient-background)] text-[hsl(var(--foreground))]">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--primary-glow)))] shadow-[var(--shadow-glow)]">
              <CheckSquare className="w-8 h-8 text-[hsl(var(--primary-foreground))]" />
            </div>

            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--primary-glow)))]">
              Todo App
            </h1>

            <Sparkles className="w-6 h-6 text-[hsl(var(--primary))] animate-pulse" />
          </div>

          <p className="text-[hsl(var(--muted-foreground))] text-lg">
            Quản lý công việc một cách thông minh và hiệu quả
          </p>
        </div>

        <TodoStats />

      </div>
    </div>
  );
};

export default TodoPage;
