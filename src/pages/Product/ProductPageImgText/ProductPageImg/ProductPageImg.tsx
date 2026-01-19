import "./productPageImg.scss";

interface ProductPageImgProps {
  img: { src: string; rotation?: string };
  name?: string;
}

function ProductPageImg({ img, name }: ProductPageImgProps) {
  let imageRotation = "";
  let imageLandscapeUp = "";

  if (img.rotation) {
    imageRotation = img.rotation;

    if (img.rotation === "landscape") {
      if (name === "Цитикомед") {
        imageLandscapeUp = "up";
      } else if (name === "Андросан") {
        imageLandscapeUp = "up-androsan";
      }
    }
  }

  return (
    <div className="productPageImg">
      <img
        className={`productPageImg__img ${imageRotation && `productPageImg__img--${imageRotation}`} ${imageLandscapeUp && `productPageImg__img--${imageLandscapeUp}`}`}
        src={img.src}
        alt={name}
      />
    </div>
  );
}

export default ProductPageImg;
