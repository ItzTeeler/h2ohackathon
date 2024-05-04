import Image from "next/image";
import NavbarComponent from "./components/NavbarComponent";
import ProductsComponent from "./components/ProductsComponent";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <ProductsComponent/>
    </div>

  );
}
