import Item from "../Item/Item";
import styles from "./Main.module.scss";
import { FC } from "react";

type Props = {
  items: any;
};

const Main: FC<Props> = ({ items }) => {
  console.log("Items in main", items);
  return (
    <div className={styles.zoomContainer}>
      <div>
        {!!items?.length &&
          items.map((item: any, index: number) => (
            <Item key={item.name} item={item} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Main;
