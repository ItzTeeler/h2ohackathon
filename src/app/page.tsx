import Image from "next/image";
import NavbarComponent from "./components/NavbarComponent";
import ProductsComponent from "./components/ProductsComponent";
import HeaderComponent from "./components/HeaderComponent";
import FaqComponent from "./components/FaqComponent";
import FAQsComponent from "./components/FAQsComponent";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <HeaderComponent />
      <ProductsComponent />
      <FAQsComponent/>
      <FaqComponent />
    </div>

  );
}
