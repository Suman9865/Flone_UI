import Footer from "@/components/Layout/footer";
import ProductCard from "@/components/product/product-card";
import ProductFullCarousal from "@/components/product/product-full-carousal";

export default function Product() {
    return (
      <div>
        <ProductFullCarousal/>
        <ProductCard/>
      </div>
    );
  }
  