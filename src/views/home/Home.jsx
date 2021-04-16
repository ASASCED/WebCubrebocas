import { Clients } from "./Clients";
import { Content } from "./Content";
import { ListProducts } from "./ListProducts";
import { Product } from "./Product";

export const Home = () => {
  return (
    <div className="home">
      <Content />
      <Product />
      <Clients />
      <ListProducts />
    </div>
  );
};
