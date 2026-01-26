import { Link } from "react-router-dom";
import "./backHomeBtn.scss";
import { linksData } from "../../data/data";
import { products } from "../../data/products";
import { useProductFromUrl } from "../../entities/product/index";

interface BackHomeBtnProp {
  pageName?: string;
}

function BackHomeBtn({ pageName }: BackHomeBtnProp) {
  const { product } = useProductFromUrl({ products });

  return (
    <div className="backHomeBtn">
      <Link className="backHomeBtn__link" to={linksData.home.url}>
        На главную
      </Link>{" "}
      {product?.title_data.name && (
        <span className="backHomeBtn__product">
          {" / " + product?.title_data.name}
        </span>
      )}
      {pageName && pageName.length > 0 && (
        <span className="backHomeBtn__product">{" / " + pageName}</span>
      )}
    </div>
  );
}

export default BackHomeBtn;
