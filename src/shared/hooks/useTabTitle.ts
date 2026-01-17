import { useEffect } from "react";
import { profileData } from "../../data/data";

const useTabTitle = (product: { title_data: { name: string } } | undefined) => {
  useEffect(() => {
    if (product?.title_data?.name) {
      document.title = `${product.title_data.name} - ${profileData.name}`;
    } else {
      document.title = `${profileData.name}`;
    }
  }, [product]);
};

export default useTabTitle;
