import Categories from "@/components/Categories";
import Header from "@/components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CategoriesPage() {
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
        <Categories categories={categories}/>
        
      </div>
    </>
  );
}