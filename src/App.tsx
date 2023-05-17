import { FC } from "react";
import styles from "./App.module.scss";
import HomePage from "./pages/HomePage/HomePage";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <HomePage />
    </div>
  );
};

export default App;
