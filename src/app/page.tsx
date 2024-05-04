import Image from "next/image";
import NavbarComponent from "./components/NavbarComponent";
import ProductsComponent from "./components/ProductsComponent";
import HeaderComponent from "./components/HeaderComponent";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <HeaderComponent />
      <ProductsComponent />
    </div>

  );
}
