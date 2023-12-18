import Category from "@/components/Category";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CategoryPage({ initialProduct }) {
  const router = useRouter();
  const id = router.query.id; 
  const [filteredProduct, setFilteredProduct] = useState(initialProduct);

  useEffect(() => {
    if (id && initialProduct) {
      const filtered = initialProduct.filter(product => product.category === id);
      setFilteredProduct(filtered);
    }
  }, [id, initialProduct]);

  return (
    <div>
      <Header />
      <Category product={filteredProduct} />
    </div>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  
  // Fetch all products from the database
  const products = await Product.find();
  
  return {
    props: {
      initialProduct: JSON.parse(JSON.stringify(products)),
    },
  };
}


