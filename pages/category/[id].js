import Categories from "@/components/Categories";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CategoryLeft from "@/components/CategoryLeft";
import { useSession } from "next-auth/react";

export default function CategoryPage({ allProduct, fetchedCategory }) {
  const router = useRouter();
  const id = router.query.id;
  const [filteredProduct, setFilteredProduct] = useState(allProduct);
  const [filterCate, setFilterCate] = useState([]);
  const [currentParent, setCurrentParent] = useState({});
  const [leftBarCate, setLeftBarCate] = useState([]);
  const [clientCategories, setClientCategories] = useState(fetchedCategory);

  const { data: session } = useSession();

  useEffect(() => {
    setClientCategories(fetchedCategory);
  }, [fetchedCategory]);

  const [minPrice, setMinPrice] = useState([]);
  const [maxPrice, setMaxPrice] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const minParam = queryParams.get("min");
    const maxParam = queryParams.get("max");

    setMinPrice(Number(minParam) || 0);
    setMaxPrice(Number(maxParam) || 10000);
  }, [router.query]);

  // useEffect(() => {
  //   console.log("Min : " + minPrice);
  //   console.log("Max : " + maxPrice);
  // }, [minPrice, maxPrice]);

  useEffect(() => {
    if (id && fetchedCategory) {
      const currentCategory = fetchedCategory.find((cate) => cate._id === id);

      if (currentCategory) {
        const checkedId = fetchedCategory.filter(
          (cate) => cate.parent === currentCategory.parent
        );

        const checkedProd = fetchedCategory.filter((cate) => cate.parent === id);

        setLeftBarCate(() =>
          checkedProd.length > 0 ? checkedProd : checkedId
        );

        setFilterCate(checkedProd);

        setCurrentParent(currentCategory);
      }
    }
  }, [id, fetchedCategory]);

  useEffect(() => {
    if (allProduct && filterCate.length > 0) {
      //  filter under root product
      const filteredProducts = allProduct.filter((product) =>
        filterCate.some((cate) => product.category === cate._id)
      );

      // Apply additional filtering based on price range
      const priceFilteredProducts = filteredProducts.filter((product) => {
        return (
          (minPrice === 0 || product.price >= minPrice) &&
          (maxPrice === 10000 || product.price <= maxPrice)
        );
      });

      // setFilteredProduct(filteredProducts);
      setFilteredProduct(priceFilteredProducts);
    } else if (allProduct && filterCate.length === 0) {
      // filter under second root product
      const filteredProducts = allProduct.filter(
        (product) => product.category === currentParent._id
      );

      // Apply additional filtering based on price range
      const priceFilteredProducts = filteredProducts.filter((product) => {
        return (
          (minPrice === 0 || product.price >= minPrice) &&
          (maxPrice === 10000 || product.price <= maxPrice)
        );
      });

      setFilteredProduct(priceFilteredProducts);
    }
  
  }, [allProduct, filterCate, currentParent, minPrice, maxPrice]);


  if (!session) {
    return (
      <div>
        <Header allProducts={allProduct} fetchedCategory={fetchedCategory} />
        <CategoryLeft filterCate={leftBarCate} cate={currentParent}/>
        <Categories product={filteredProduct} cate={currentParent} />
      </div>
    );
  }

  return (
    <div>
      <Header allProducts={allProduct} fetchedCategory={fetchedCategory} />
      <CategoryLeft filterCate={leftBarCate} cate={currentParent} />
      <Categories product={filteredProduct} cate={currentParent} />
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const categories = await Category.find();
  const allProducts = await Product.find();
  return {
    props: {
      allProduct: JSON.parse(JSON.stringify(allProducts)),
      fetchedCategory: JSON.parse(JSON.stringify(categories)),
    },
  };
}
