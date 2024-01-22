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

  const [minPrice, setMinPrice] = useState([]);
  const [maxPrice, setMaxPrice] = useState([]);

  useEffect(() => {
    // Parse query parameters for min and max prices
    const queryParams = new URLSearchParams(window.location.search);
    const minParam = queryParams.get('min');
    const maxParam = queryParams.get('max');
  
    // Update state if query parameters are present
    setMinPrice(Number(minParam) || 0);
    setMaxPrice(Number(maxParam) || 10000);
  }, [router.query]);
  
  useEffect(() => {
    console.log("Min : " + minPrice);
    console.log("Max : " + maxPrice);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    
    if (id && categories) {
          
      const currentCategory = categories.find((cate) => cate._id === id);
      
      if (currentCategory) {
            
        const checkedId = categories.filter((cate) => cate.parent === currentCategory.parent);
         
        const checkedProd = categories.filter((cate) => cate.parent === id);
               
        setLeftBarCate(() => (checkedProd.length > 0 ? checkedProd : checkedId));
               
        setFilterCate(checkedProd);
        
        setCurrentParent(currentCategory);
      }
    }
  }, [id, categories]);

  useEffect(() => {
    if (initialProduct && filterCate.length > 0) {      //  filter under root product
      const filteredProducts = initialProduct.filter((product) =>
        filterCate.some((cate) => product.category === cate._id));

      // Apply additional filtering based on price range
      const priceFilteredProducts = filteredProducts.filter((product) => {
        return (
          (minPrice === 0 || product.price >= minPrice) &&
          (maxPrice === 10000 || product.price <= maxPrice)
        );
      });

      // setFilteredProduct(filteredProducts);
      setFilteredProduct(priceFilteredProducts);

    } else if (initialProduct && filterCate.length === 0) {  // filter under second root product
      const filteredProducts = initialProduct.filter((product) =>
        product.category === currentParent._id);
      
        // Apply additional filtering based on price range
      const priceFilteredProducts = filteredProducts.filter((product) => {
        return (
          (minPrice === 0 || product.price >= minPrice) &&
          (maxPrice === 10000 || product.price <= maxPrice)
        );
      });

      // setFilteredProduct(filteredProducts);
      setFilteredProduct(priceFilteredProducts);

    }
  // }, [initialProduct, filterCate, currentParent]);
  }, [initialProduct, filterCate, currentParent, minPrice, maxPrice]);

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