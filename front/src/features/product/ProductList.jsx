import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./model/ProductSlice";
import Loader from "../../components/loader";
import ProductCard from "./components/ProductCard/ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const { status, productList, error } = useSelector(
    (store) => store.productState
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error") {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col p-4">
      <p className="text-gray-500 text-sm text-left">Hi Mr. Michael!</p>
      <h3 className="font-semibold text-2xl text-left">Welcome Back!</h3>
      <h4 className="mt-3 font-semibold text-xl text-left">Our Products</h4>
      <div className="flex gap-2 flex-wrap mt-5 justify-center">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
