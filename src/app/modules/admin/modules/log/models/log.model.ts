export type LogAction = 'create' | 'update' | 'delete';

export interface Log {
  id: number;
  user: string;
  action: LogAction;
  entity: string;
  entityId: number;
  createdAt: Date;
}