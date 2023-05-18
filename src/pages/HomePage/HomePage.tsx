import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { ItemsProvider } from "../../components/context/itemsContext";

import styles from "./HomePage.module.scss";
import { FC, useState } from "react";

const HomePage: FC = () => {
  const [items, setItems] = useState(null);
  return (
    <ItemsProvider>
      <section className={styles.section}>
        <Container>
          <Header />
          <Main items={items} />
        </Container>
      </section>
    </ItemsProvider>
  );
};

export default HomePage;
