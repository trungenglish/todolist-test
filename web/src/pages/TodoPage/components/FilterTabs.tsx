import { FILTER_OPTIONS } from "@/constants/index";
import { Button } from "@/components/ui/button";
import type { TodoFilter } from "@/types/todo";
import { cn } from "@/utils/cn";

interface FilterTabsProps {
    currentFilter: TodoFilter;
    onFilterChange: (filter: TodoFilter) => void;
  }

const FilterTabs = ({currentFilter, onFilterChange}: FilterTabsProps) => {
    return (
        <div className="mb-6">
            <div className="flex gap-2 p-1 bg-[hsl(var(--secondary))]/50 rounded-xl backdrop-blur-sm">
                {FILTER_OPTIONS.map(({key, label, icon: Icon}) => (
                    <Button
                        key={key}
                        variant={"ghost"}
                        onClick={() => {onFilterChange(key)}}
                        className={cn(
                            "flex-1 h-10 rounded-lg transition-all duration-200 font-medium",
                            "hover:bg-[hsl(var(--card))]/80",
                            currentFilter === key 
                            ? "bg-[hsl(var(--card))] text-[hsl(var(--primary))] shadow-[var(--shadow-soft)] border border-[hsl(var(--primary))]/20"
                            : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                        )}
                    >
                        <Icon className="w-4 h-4 mr-2" />
                        {label}
                    </Button>
                ))}
            </div>
            
        </div>
    )
}

export default FilterTabs;