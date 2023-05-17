import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import styles from "./HomePage.module.scss";
import { FC, useState } from "react";

const HomePage: FC = () => {
  const [items, setItems] = useState(null);
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
