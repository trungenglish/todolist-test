import Header from "@/components/common/Header";
import AddTodo from "@/pages/TodoPage/components/AddTodo";
import TodoStats from "@/pages/TodoPage/components/TodoStats";
import FilterTabs from "@/pages/TodoPage/components/FilterTabs";
import { useTodo } from "./hooks/useTodo";
import TodoItem from "./components/TodoItem";

const TodoPage = () => {
  const {
    filter,
    setFilter,
    filteredTodos,
    toggleTodo,
    deleteTodo,
    addTodo,
    stats
  } = useTodo();

  return (
    <div className="min-h-screen bg-[var(--gradient-background)] text-[hsl(var(--foreground))]">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
       
        <Header />

        <TodoStats stats={stats} />

        <AddTodo onAdd={addTodo} />

        <FilterTabs currentFilter={filter} onFilterChange={setFilter} />

        {/* TodoList */}
        <div className="space-y-3">
        {filteredTodos.length === 0 ? (
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
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem 
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
