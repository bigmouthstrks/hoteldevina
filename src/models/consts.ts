export const API_URL = import.meta.env.VITE_API_URL;
export const ADMIN_URL = import.meta.env.VITE_ADMIN_URL;

export enum StatusType {
  CANCELLED = 'cancelled',
  CONFIRMED = 'confirmed',
  FINISHED = 'finished',
  IN_PROGRESS = 'inProgress',
  TO_BE_CONFIRMED = 'toBeConfirmed',
}
/*1	"En curso"
2	"Confirmada"
3	"Finalizada"
4	"Cancelada"
5	"Por confirmar"*/

export enum BREAKPOINTS {
  xs = '0',
  sm = '576',
  md = '768',
  lg = '992',
  xl = '1200',
  xxl = '1400',
}

export enum MessageType {
  ERROR = 'danger',
  WARNING = 'secondary',
  SUCCESS = 'success',
  INFO = 'info',
}
