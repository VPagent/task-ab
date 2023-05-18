import { FC } from "react";
import styles from "./App.module.scss";
import HomePage from "./pages/HomePage/HomePage";
import { ItemsProvider } from "./components/context/ItemsContext";

const App: FC = () => {
  return (
    <ItemsProvider>
      <div className={styles.app}>
        <HomePage />
      </div>
    </ItemsProvider>
  );
};

export default App;
