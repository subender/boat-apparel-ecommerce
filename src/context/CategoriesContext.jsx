import { createContext , useEffect, useState} from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/Firebase.js";


export const CategoriesContext = createContext({
  categoriesMap:[],
});

export const CategoriesProvider = ({children})=>{

  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
   
    const getCategoryMap = async ()=>{
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    }

    getCategoryMap(); 
   
  }, [])
  
  
  const value = {categoriesMap};
  return(
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
}
