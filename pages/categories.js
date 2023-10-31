import Categories from "@/components/Categories";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CategoriesPage({ products }) {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    axios.get('/api/category').then(res =>{
      setCategories(res.data);
    });
  }, [])

  return (
    <>
      <Header/>
      <div className="bg-gray-200">
        <Categories categories = {categories} products = {products}/>
        
      </div>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}
