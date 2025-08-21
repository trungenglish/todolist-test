import { FILTER_OPTIONS } from "@/constants/index";

const FilterTabs = () => {
    return (
        <div className="mb-6">
            <div className="flex gap-2 p-1 bg-[hsl(var(--secondary))]/50 rounded-xl backdrop-blur-sm">
                {FILTER_OPTIONS.map(({key, label, icon: Icon}) => (
                    
                ))}
            </div>
            
        </div>
    )
}

export default FilterTabs;