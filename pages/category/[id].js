import Categories from "@/components/Categories";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CategoryPage({ initialProduct, categories }) {
  const router = useRouter();
  const id = router.query.id;
  const [filteredProduct, setFilteredProduct] = useState(initialProduct);
  const [filterCate, setFilterCate] = useState(categories);

  useEffect(() => {
    if (id && categories) {
      const checkedId = categories.filter((cate) => cate.parent === id);
      setFilterCate(checkedId);
      // console.log("Matched root categories:", JSON.stringify(checkedId));
    }
  }, [id, categories]);
  
  useEffect(() => {
    if (id && initialProduct && filterCate) {
      const filteredProducts = initialProduct.filter((product) =>
        filterCate.some((cate) => product.category === cate._id)
      );
      setFilteredProduct(filteredProducts);
    }
  }, [id, initialProduct, filterCate]);
  
  // console.log("Filter:"+JSON.stringify(filteredProduct));

  return (
    <div>
      <Header />
      <Categories product={filteredProduct} />
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const categories = await Category.find();
  const products = await Product.find();
  return {
    props: {
      initialProduct: JSON.parse(JSON.stringify(products)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}


