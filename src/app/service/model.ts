export enum ROOM_STATUS {
  WAITING = 'WAITING',
}

export interface IAnnouncement {
  id: number;
  totalNumber: number;
  currentNumber: number;
  hasPassword: true;
  password: string;
  status: ROOM_STATUS;
  gameId: number;
}
