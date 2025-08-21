import { CheckCircle, Clock, Target } from "lucide-react";


interface TodoStatsProps {
  
}

const TodoStats = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {/* Total */}
            <div className="bg-[var(--gradient-card)] rounded-xl p-4 shadow-[var(--shadow-soft)] border border-[hsl(var(--border))]/50">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10">
                        <Target className="w-5 h-5 text-[hsl(var(--primary))]"/>
                    </div>
                    <div>
                        <p className="text-sm text-[hsl(var(--muted-foreground))]">Tổng cộng</p>
                        <p className="text-2xl font-bold text-[hsl(var(--foreground))]">10</p>
                    </div>
                </div>
            </div>
            {/*Active*/}
            <div className="bg-[var(--gradient-card)] rounded-xl p-4 shadow-[var(--shadow-soft)] border border-[hsl(var(--border))]/50">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-500/10">
                        <Clock className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                        <p className="text-sm text-[hsl(var(--muted-foreground))]">Đang làm</p>
                        <p className="text-2xl font-bold text-[hsl(var(--foreground))]">10</p>
                    </div>
                </div>
            </div>
            {/*Completed*/}
            <div className="bg-[var(--gradient-card)] rounded-xl p-4 shadow-[var(--shadow-soft)] border border-[hsl(var(--border))]/50">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[hsl(var(--success))]/10">
                        <CheckCircle className="w-5 h-5 text-[hsl(var(--success))]" />
                    </div>
                    <div>
                        <p className="text-sm text-[hsl(var(--muted-foreground))]">Hoàn thành</p>
                        <div className="flex items-center gap-2">
                            <p className="text-2xl font-bold text-[hsl(var(--foreground))]">10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoStats;