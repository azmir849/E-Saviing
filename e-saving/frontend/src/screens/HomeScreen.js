import React, { useEffect } from "react";

import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProductCategories, listProducts } from "../actions/productActions";
import HomeCarouselScreen from "./HomeCarouselScreen";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <div className=''>
      <h2>Product category and feature products</h2>
      <HomeCarouselScreen />

      <div className='row categoryClass'>
        <div className='col-2'>
          <h2>Categories</h2>
          {loadingCategories ? (
            <LoadingBox></LoadingBox>
          ) : errorCategories ? (
            <MessageBox variant='danger'>{errorCategories}</MessageBox>
          ) : (
            categories.map((c) => (
              <li key={c}>
                <Link to={`/search/category/${c}`}>{c}</Link>
              </li>
            ))
          )}
        </div>

        <div className='col-10'>
          <h2 className='text-center'>Feature Products</h2>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant='danger'>{error}</MessageBox>
          ) : (
            <div className='row center'>
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
