import Header from "@/components/common/Header";
import AddTodo from "@/pages/TodoPage/components/AddTodo";
import TodoStats from "@/pages/TodoPage/components/TodoStats";

const TodoPage = () => {
  return (
    <div className="min-h-screen bg-[var(--gradient-background)] text-[hsl(var(--foreground))]">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
       
        <Header />

        <TodoStats />

        <AddTodo />

      </div>
    </div>
  );
};

export default TodoPage;
