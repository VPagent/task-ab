import { FC } from "react";
import styles from "./Header.module.scss";
import cn from "clsx";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.textBox}>
        <p className={styles.textBoxText}>Services</p>
        <span className={styles.textBoxSpan}>0</span>
      </div>
      <div className={styles.controls}>
        <button className={styles.button} type="button">
          ListView
        </button>
        <button className={styles.button} type="button">
          chevron
        </button>
        <div className={styles.zoomBox}>
          <button className={cn(styles.button, styles.zoomBtn)} type="button">
            -
          </button>
          <button className={styles.selectBtn} type="button">
            100%
          </button>
          <button className={cn(styles.button, styles.zoomBtn)} type="button">
            +
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
