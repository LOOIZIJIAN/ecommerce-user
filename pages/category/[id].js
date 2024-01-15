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
  console.log("Root:" + root);

  useEffect(() => {
    if (id && categories) {
      const checkedId = categories.filter((cate) => cate.parent === id);
      setFilterCate(checkedId);
  
      const checkName = categories.filter((cate) => cate._id === id);
      setCurrentParent(checkName);
    }
  }, [id, categories]);

  useEffect(() => {
    if(filterCate != null && filterCate.length > 0){
      setRoot(true)
    }else{
      setRoot(false);
    }
    console.log("FILTER:" + filterCate);
  }, [filterCate]);

  useEffect(() => {
    console.log("RootC:" + root);
  }, [root]);

  useEffect(() => {
    if (id && initialProduct && filterCate) {
      const filteredProducts = initialProduct.filter((product) =>
        filterCate.some((cate) => product.category === cate._id)
      );
      setFilteredProduct(filteredProducts);
    } else if(id && initialProduct && filterCate.length < 0 && currentParent){
      const filteredProducts = initialProduct.filter((product) =>
        currentParent.some((cp) => product.category === cp._id)
      );
      setFilteredProduct(filteredProducts);
    }
  }, [id, initialProduct, filterCate]);

  // console.log("mi:" + filteredProduct);
  // console.log("root1:" + root);

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


