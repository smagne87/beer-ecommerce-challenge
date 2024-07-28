import { useNavigate } from "react-router-dom";
import { useToast } from "../../../../contexts/ToastContextProvider";
import "./styles.css";

const ProductCard = ({ product }) => {
  const { addToast } = useToast();
  const navigate = useNavigate();
  const goToProductDetail = () => {
    navigate(
      `/product/${product.id}-${product.brand
        .replaceAll(" ", "-")
        .toLowerCase()}`
    );
  };

  const handleAddCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToast("success", "Product added to cart");
  };

  return (
    <div
      className="product-card relative active:opacity-85"
      onClick={goToProductDetail}
    >
      <h3 className="font-semibold text-lg">{product.brand}</h3>
      <div
        className="bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${product.image})`, height: 122 }}
      />
      <div className="flex justify-between">
        <p className="font-semibold text-lg">
          ${" "}
          {product.stockPrice.length > 0
            ? product.stockPrice[0].price.toLocaleString()
            : " - "}
        </p>
        <button
          className="product-add-btn active:opacity-75"
          onClick={handleAddCart}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="11"
              y="5"
              width="2"
              height="14"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="5"
              y="13"
              width="2"
              height="14"
              rx="1"
              transform="rotate(-90 5 13)"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
