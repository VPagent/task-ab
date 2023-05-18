import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import useItemsContext from "../../components/context/ItemsContext";

import styles from "./HomePage.module.scss";
import { FC, useState } from "react";

const HomePage: FC = () => {
  const { items, setItems } = useItemsContext();
  return (
    <section className={styles.section}>
      <Container>
        <Header />
        <Main items={items} />
      </Container>
    </section>
  );
};

export default HomePage;
