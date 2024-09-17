import { Container } from "./components/Header/Container/Container";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <nav>
          <Container name="Sergey" className="navigation_container" />
        </nav>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
};
