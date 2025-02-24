import { FC } from 'react';
import { StatusInfoProps } from '@models/props';
import styles from './StatusInfo.module.scss';

const StatusInfo: FC<StatusInfoProps> = ({ status }: StatusInfoProps) => {
  return <span className={`${styles.info} ${styles[status.type]}`}>{status.message}</span>;
};

export default StatusInfo;
