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
  const [leftBarCate, setLeftBarCate] = useState([]);

  useEffect(() => {
    // Check if both 'id' and 'categories' are present
    if (id && categories) {
      
      // Find the category with the matching '_id'
      const currentCategory = categories.find((cate) => cate._id === id);
      
      // Check if the current category exists
      if (currentCategory) {
        
        // Find categories with the same parent as the current category
        const checkedId = categories.filter((cate) => cate.parent === currentCategory.parent);
  
        // Find categories with the current category as the parent      
        const checkedProd = categories.filter((cate) => cate.parent === id);
        
        // Update 'LeftBarCate' state with the appropriate categories
        setLeftBarCate(() => (checkedProd.length > 0 ? checkedProd : checkedId));
        
        // Update 'FilterCate' state with categories having the current category as parent
        setFilterCate(checkedProd);
        
        // Set the current parent category
        setCurrentParent(currentCategory);
      }
    }
  }, [id, categories]);

  useEffect(() => {
    if (initialProduct && filterCate.length > 0) {      //  filter under root product
      const filteredProducts = initialProduct.filter((product) =>
        filterCate.some((cate) => product.category === cate._id));
      setFilteredProduct(filteredProducts);

    } else if (initialProduct && filterCate.length === 0) {  // filter under second root product
      const filteredProducts = initialProduct.filter((product) =>
        product.category === currentParent._id);
      setFilteredProduct(filteredProducts);
    }
  }, [initialProduct, filterCate, currentParent]);  
  console.log("CIBAI", leftBarCate.length > 0 ? leftBarCate : "Empty Array");

  return (
    <div>
      <Header />
      <CategoryLeft filterCate={leftBarCate}/>
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