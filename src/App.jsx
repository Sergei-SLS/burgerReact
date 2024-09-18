import { Catalog } from "./components/Header/Catalog/Catalog";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Header/Navigation/Navigation";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Navigation />

        <Catalog />
      </main>
      <footer></footer>
    </>
  );
};
