import Header from "@/components/common/Header";
import AddTodo from "@/pages/TodoPage/components/AddTodo";
import TodoStats from "@/pages/TodoPage/components/TodoStats";
import FilterTabs from "@/pages/TodoPage/components/FilterTabs";
import { useState } from "react";
import type { TodoFilter } from "@/types/todo";

const TodoPage = () => {
  const [filter, setFilter] = useState<TodoFilter>("all");

  

  return (
    <div className="min-h-screen bg-[var(--gradient-background)] text-[hsl(var(--foreground))]">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
       
        <Header />

        <TodoStats />

        <AddTodo />

        <FilterTabs currentFilter={filter} onFilterChange={setFilter} />

        {/* TodoList */}
        <div className="space-y-3">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">
              {filter === "completed" ? "🎉" : filter === "active" ? "📝" : "🚀"}
            </div>
            <p className="text-[hsl(var(--muted-foreground))] text-lg">
              {filter === 'completed'
                ? "Chưa có công việc nào hoàn thành!"
                : filter === 'active'
                ? 'Không có công việc nào đang chờ'
                : 'Bắt đầu thêm công việc đầu tiên của bạn!'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
