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

  useEffect(() => {
    if (id && categories) {
      const checkedId = categories.filter((cate) => cate.parent === id);
      setFilterCate(checkedId);
      checkedId ? setRoot(true) : setRoot(false);
      console.log("rootC:"+root);
      const checkName = categories.filter((cate) => cate._id === id);
      setCurrentParent(checkName);
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
    else if(id && initialProduct && !filterCate && currentParent){
      const filteredProducts = initialProduct.filter((product) =>
        currentParent.some((cate) => product.category === cate._id)
      );
      setFilteredProduct(filteredProducts);
    }
  }, [id, initialProduct, filterCate]);

  return (
    <div>
      <Header />
      <CategoryLeft category={categories} currentId={id} root={root}/>
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


