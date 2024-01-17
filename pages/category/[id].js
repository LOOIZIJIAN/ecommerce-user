import Categories from "@/components/Categories";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CategoryLeft from "@/components/CategoryLeft";

export default function CategoryPage({ initialProduct, categories }) {
  const router = useRouter();
  const id = router.query.id;
  const [filteredProduct, setFilteredProduct] = useState(initialProduct);
  const [filterCate, setFilterCate] = useState(categories);
  const [currentParent, setCurrentParent] = useState({});
  const [root, setRoot] = useState(false);
  console.log("RootC:" + root);

  useEffect(() => {
    if (id && categories) {
      const checkedId = categories.filter((cate) => cate.parent === id);
      setFilterCate(checkedId);

      const checkName = categories.find((cate) => cate._id === id); // changed from .filter to .find
      setCurrentParent(checkName);

      console.log("Test 1 : " + filterCate);
    }
    console.log("Test 2 : " + filterCate);

  }, [id, categories]);

  console.log("Test 3: " + filterCate);

  useEffect(() => {
    setRoot(filterCate && filterCate.length > 0);
  }, [filterCate]);

  useEffect(() => {
    console.log("RootC:" + root);
  }, [root]);

  useEffect(() => {
    if (id && initialProduct && filterCate && filterCate.length > 0) {
      const filteredProducts = initialProduct.filter((product) =>
        filterCate.some((cate) => product.category === cate._id)
      );
      setFilteredProduct(filteredProducts);

    } else if (id && initialProduct && filterCate && filterCate.length === 0) { // changed
      const filteredProducts = initialProduct.filter((product) =>
        product.category === currentParent._id  // changed
      );
      setFilteredProduct(filteredProducts);
    }
    console.log("Test 4: " + filterCate);

  }, [id, initialProduct, filterCate, currentParent]);  // added currentParent

  return (
    <div>
      <Header />
      <CategoryLeft category={categories} currentId={id} root={root} filterCate={filterCate}/>
      <Categories product={filteredProduct} cate={currentParent} />
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