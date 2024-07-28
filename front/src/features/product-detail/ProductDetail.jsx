import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById, initializeState } from "./model/ProductDetailSlice";
import { useLayout } from "../../contexts/LayoutContextProvider";
import Alert from "../../components/alert";
import Loader from "../../components/loader";
import ReadMore from "../../components/readmore";
import { useToast } from "../../contexts/ToastContextProvider";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { addToast } = useToast();
  const [skuIndex, setSkuIndex] = useState(0);
  const { error, status, productDetail } = useSelector(
    (store) => store.productDetailState
  );
  const { setTitle, setShowAvatar, setBackUrl, setShowBottomNav } = useLayout();

  useEffect(() => {
    return () => {
      dispatch(initializeState());
    };
  }, []);

  useEffect(() => {
    if (id) {
      const numberId = id.split("-");
      dispatch(getProductById({ id: numberId[0] }));
    }
  }, [id]);

  useEffect(() => {
    if (status === "complete" || status === "failed") {
      setTitle("Detail");
      setBackUrl("/product");
      setShowAvatar(false);
      setShowBottomNav(false);
    }
  }, [status]);

  const handleSkuIndexClick = (e) => {
    setSkuIndex(e.target.value);
  };

  if (error) {
    return (
      <div className="p-2">
        <Alert type="error" message="Product not found" />
      </div>
    );
  }

  if (status === "loading" || !productDetail.id) {
    return <Loader />;
  }

  return (
    <div className="grid grid-rows-[310px_1fr_50px] p-4">
      <div
        style={{ backgroundImage: `url("${productDetail.image}")` }}
        className="w-full h-72 bg-no-repeat bg-center bg-contain"
      />
      <div className="flex flex-col gap-3 mb-5">
        <div className="flex justify-between align-middle">
          <div className="text-left">
            <h2 className="font-semibold text-2xl">{productDetail.brand}</h2>
            <span className="text-sm text-gray-500">
              Origin: {productDetail.origin} | Stock:{" "}
              {productDetail.stockPrice[skuIndex].stock || 0}
            </span>
          </div>
          <div>
            <p className="text-2xl text-custom-orange">
              ${" "}
              {productDetail.stockPrice[skuIndex].price.toLocaleString() ||
                " - "}
            </p>
          </div>
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-2xl">Description</h3>
          <ReadMore text={productDetail.information} maxLength={250} />
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-2xl">Size</h3>
          <div className="flex gap-2 mt-3">
            {productDetail?.skus?.map((sku, index) => (
              <button
                onClick={handleSkuIndexClick}
                key={sku.code}
                value={index}
                className="px-4 py-2 text-center text-sm border border-gray-500 text-gray-500 bg-transparent rounded-full hover:border-custom-orange hover:text-custom-orange transition duration-300"
              >
                {sku.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex align-middle justify-between gap-8">
        <button
          className="border text-custom-orange border-custom-orange bg-transparent rounded-xl p-3 active:opacity-75"
          onClick={() => addToast("success", "Check bag")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="6"
              r="4.25"
              stroke="#FF9F24"
              strokeWidth="1.5"
            />
            <path
              d="M4.30623 9.59689C4.50953 7.97049 5.89208 6.75 7.53113 6.75H16.4689C18.1079 6.75 19.4905 7.97049 19.6938 9.59689L20.6938 17.5969C20.9362 19.5367 19.4237 21.25 17.4689 21.25H6.53113C4.57626 21.25 3.06375 19.5367 3.30623 17.5969L4.30623 9.59689Z"
              fill="white"
              stroke="#FF9F24"
              strokeWidth="1.5"
            />
            <circle cx="9.75" cy="10.75" r="0.75" fill="#FF9F24" />
            <circle cx="13.75" cy="10.75" r="0.75" fill="#FF9F24" />
          </svg>
        </button>
        <button
          className="text-center px-3 py-2 bg-custom-orange text-white flex-1 rounded-lg active:opacity-85"
          onClick={() => addToast("success", "Product added to cart")}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
