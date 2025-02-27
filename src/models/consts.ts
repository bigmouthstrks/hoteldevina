export const API_URL = import.meta.env.VITE_API_URL;
export const ADMIN_URL = import.meta.env.VITE_ADMIN_URL;

export enum StatusType {
  IN_PROGRESS = '1',
  CONFIRMED = '2',
  FINISHED = '3',
  CANCELLED = '4',
  TO_BE_CONFIRMED = '5',
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

export const MessageTranslate = {
  [MessageType.ERROR]: 'Error',
  [MessageType.WARNING]: 'Advertencia',
  [MessageType.SUCCESS]: 'Éxito',
  [MessageType.INFO]: 'Información',
};
