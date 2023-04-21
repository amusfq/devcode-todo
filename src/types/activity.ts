export interface ActivityType {
  id: number;
  title: string;
  created_at: string;
}

export interface ActivityDetailType extends ActivityType {
  todo_items: TodoType[];
}

export interface TodoType {
  activity_group_id: number;
  id: number;
  is_active: number;
  priority: string;
  title: string;
}
