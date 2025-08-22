import { List, Clock, CheckCircle } from 'lucide-react';
import type { TodoFilter } from '@/types/todo';

export const FILTER_OPTIONS = [
  {
    key: 'all' as TodoFilter,
    label: 'Tất cả',
    icon: List,
  },
  {
    key: 'active' as TodoFilter,
    label: 'Đang làm',
    icon: Clock,
  },
  {
    key: 'completed' as TodoFilter,
    label: 'Hoàn thành',
    icon: CheckCircle,
  },
] as const;
