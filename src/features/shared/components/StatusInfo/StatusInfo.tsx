import { FC } from 'react';
import { StatusInfoProps } from '@models/props';
import { StatusType } from '@models/consts';
import styles from './StatusInfo.module.scss';

export const StatusInfo: FC<StatusInfoProps> = ({ status }) => {
  return (
    <span className={`${styles.info} ${styles[status?.type ?? StatusType.IN_PROGRESS]}`}>
      {status?.message}
    </span>
  );
};
