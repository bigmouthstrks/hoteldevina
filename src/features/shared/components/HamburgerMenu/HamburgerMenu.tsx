import { FC } from 'react';
import styles from './HamburgerMenu.module.scss';

export const HamburgerMenu: FC<{
  className?: string;
  onClick: () => void;
  collapse: boolean;
}> = ({
  className,
  onClick,
  collapse,
}: {
  className?: string;
  onClick: () => void;
  collapse: boolean;
}) => {
  return (
    <div
      className={`${styles.siteMenuToggle} ${collapse ? styles.open : ''} ${styles[className ?? '']}`}
      onClick={() => onClick()}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
