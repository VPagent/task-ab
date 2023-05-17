import { FC } from "react";
import styles from "./Item.module.scss";

type Props = {
  item: any;
};
const Item: FC<Props> = ({ item }) => {
  return (
    <div className={styles.component}>
      <p className={styles.itemName}>{item.name}</p>
      <button className={styles.button} type="button">
        +
      </button>
    </div>
  );
};

export default Item;
