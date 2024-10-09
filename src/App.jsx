import { Provider } from "react-redux";
import { Catalog } from "./components/Header/Catalog/Catalog";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Header/Navigation/Navigation";
import { store } from "./store";
import { ModalDelivery } from "./components/ModalDelivery/ModalDelivery";

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Navigation />

        <Catalog />
      </main>
      <footer></footer>
      <ModalDelivery />
    </Provider>
  );
};
