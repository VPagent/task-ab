import Item from "../Item/Item";
import styles from "./Main.module.scss";
import { FC } from "react";

type Props = {
  items: any;
};

const Main: FC<Props> = ({ items }) => {
  return (
    <div className={styles.zoomContainer}>
      <div>
        {!!items.length &&
          items.map((item: any) => <Item key={item.name} item={item} />)}
      </div>
    </div>
  );
};

export default Main;
