import { FC } from 'react';
import { StatusInfoProps } from '@models/props';
import styles from './StatusInfo.module.scss';
import { StatusType } from '@models/consts';

const StatusInfo: FC<StatusInfoProps> = ({ status }) => {
  return (
    <span className={`${styles.info} ${styles[status?.type ?? StatusType.IN_PROGRESS]}`}>
      {status?.message}
    </span>
  );
};

export default StatusInfo;
