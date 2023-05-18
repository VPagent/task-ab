import { FC } from "react";
import styles from "./Item.module.scss";
import useItemsContext from "../context/ItemsContext";

type Props = {
  item: any;
  index: number;
};
const Item: FC<Props> = ({ item, index }) => {
  const { onCreateItem } = useItemsContext();

  const handleCreateItem = () => {
    //@ts-ignore
    onCreateItem(item.id, index, item.level);
  };
  return (
    <div className={styles.component}>
      <p className={styles.itemName}>{item.name}</p>
      <div>
        <button
          className={styles.button}
          onClick={handleCreateItem}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Item;
