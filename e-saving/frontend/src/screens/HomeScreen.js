import React, { useEffect } from "react";

import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProductCategories, listProducts } from "../actions/productActions";
import HomeCarouselScreen from "./HomeCarouselScreen";
import { Link, Route, useParams } from "react-router-dom";
import BrandSearchBox from "../components/BrandSearchBox";

export default function HomeScreen() {
  const { pageNumber = 1 } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts({ pageNumber }));
  }, [dispatch, pageNumber]);

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
      {/* <h2>Product category and feature products</h2> */}
      <HomeCarouselScreen />

      <div className='row categoryClass'>
        <div className='col-2'>
          <h1 className='bold'>Categories</h1>
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
          <h1 className='bold mt-5'>Find Your Brand</h1>
          <div>
            <Route
              render={({ history }) => (
                <BrandSearchBox history={history}></BrandSearchBox>
              )}
            ></Route>
          </div>
        </div>

        <div className='col-10'>
          <h1 className='text-center bold'>Feature Products</h1>
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
      <div className='row pagination d-flex justify-content-center'>
        {[...Array(pages).keys()].map((x) => (
          <Link
            className={x + 1 === page ? "active" : ""}
            key={x + 1}
            to={`/pageNumber/${x + 1}`}
          >
            {x + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}
