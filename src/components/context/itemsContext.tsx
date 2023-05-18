import { FC, ReactNode, createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";

const ItemsContext = createContext({
  items: [],
  setItems: () => {},
  onCreateItem: () => {},
});

type Props = {
  children: ReactNode;
};

export const ItemsProvider: FC<Props> = ({ children }) => {
  const [items, setItems] = useState<any>([
    { id: "root", name: "Categories", level: 1 },
  ]);

  const onCreateItem = (
    parentId: any,
    parentIndex: any,
    parentLevel: number
  ) => {
    const newItem = {
      parentId,
      id: nanoid(2),
      name: `Category ${items.length}`,
      level: parentLevel + 1,
    };

    setItems([...items, newItem]);
  };

  return (
    <ItemsContext.Provider
      value={{
        items,
        //@ts-ignore
        setItems,
        //@ts-ignore
        onCreateItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

const useItemsContext = () => {
  return useContext(ItemsContext);
};

export default useItemsContext;
