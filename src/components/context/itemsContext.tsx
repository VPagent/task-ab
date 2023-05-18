import { FC, ReactNode, createContext, useContext, useState } from "react";

const ItemsContext = createContext({
  items: [],
});

type Props = {
  children: ReactNode;
};

export const ItemsProvider: FC<Props> = ({ children }) => {
  const [items, setItems] = useState<[] | null>(null);

  return (
    <ItemsContext.Provider
      value={{
        //@ts-ignore
        items,
        setItems,
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
