import { Link } from "react-router-dom";
import "./productCard.scss";
import ProductCardBtn from "./ProductCardBtn/ProductCardBtn";

interface ProductCardProps {
  product?: any;
}

function ProductCard({ product }: ProductCardProps) {
  let imageRotationClass = "";
  let imagePortraitLg = "";

  if (product.image && product.image.rotation)
    imageRotationClass = product.image.rotation;

  if (product.title_data.name === "Цитикомед") imagePortraitLg = "scale";

  if (product.title_data.name === "Андросан")
    imagePortraitLg = "scale-androsan";

  return (
    <div className="product-card">
      <Link className="product-card__link" to={`/products/${product?.id}`}>
        <div className="product-card__img-container">
          <img
            className={`product-card__img 
                  product-card__img--${imageRotationClass}  product-card__img--${imagePortraitLg}`}
            src={product?.image.src}
            alt={product?.name}
          />
        </div>
        <h2 className="product-card__title">{product?.title_data.name}</h2>
        <p className="product-card__desc">{product?.dosage_form}</p>
        <ProductCardBtn text={"Подробнее"} />
      </Link>
    </div>
  );
}

export default ProductCard;
