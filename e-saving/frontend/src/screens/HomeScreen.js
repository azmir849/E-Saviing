import React, { useEffect } from "react";

import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProductCategories, listProducts } from "../actions/productActions";
import HomeCarouselScreen from "./HomeCarouselScreen";
import { Link, Route, useParams } from "react-router-dom";
import BrandSearchBox from "../components/BrandSearchBox";
import { prices, ratings } from "../utils";
import Rating from "../components/Rating";

export default function HomeScreen() {
  const {
    name = "all",
    category = "all",
    min = 0,
    max = 0,
    rating = 0,
    order = "newest",
    pageNumber = 1,
  } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(
      listProducts({
        pageNumber,
        name: name !== "all" ? name : "",
        category: category !== "all" ? category : "",
        min,
        max,
        rating,
        order,
      })
    );
  }, [category, dispatch, max, min, name, order, rating, pageNumber]);
  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterRating = filter.rating || rating;
    const sortOrder = filter.order || order;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`;
  };

  return (
    <div className=''>
      {/* <h2>Product category and feature products</h2> */}
      <HomeCarouselScreen />

      <div className='row categoryClass'>
        <div className='col-2'>
          <h1 className='bold'>Find By Categories</h1>
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

          <div className='mt-5'>
            <h3 className=''>Find By Price Range</h3>
            <ul>
              {prices.map((p) => (
                <li key={p.name}>
                  <Link
                    to={getFilterUrl({ min: p.min, max: p.max })}
                    className={
                      `${p.min}-${p.max}` === `${min}-${max}` ? "active" : ""
                    }
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='mt-5'>
            <h3 className=''>Find By :</h3>
            <ul>
              <li>
                <Link
                  to='/search/category/all/name/all/min/0/max/0/rating/0/order/newest/pageNumber/1'
                  className=''
                >
                  New Arraivals
                </Link>
              </li>
              <li>
                <Link
                  to='/search/category/all/name/all/min/0/max/0/rating/0/order/lowest/pageNumber/1'
                  className=''
                >
                  Low To High Price
                </Link>
              </li>
              <li>
                <Link
                  to='/search/category/all/name/all/min/0/max/0/rating/0/order/highest/pageNumber/1'
                  className=''
                >
                  High To Low Price
                </Link>
              </li>
            </ul>
          </div>

          <div className='mt-5'>
            <h3> Find By Avg. Customer Review</h3>
            <ul>
              {ratings.map((r) => (
                <li key={r.name}>
                  <Link
                    to={getFilterUrl({ rating: r.rating })}
                    className={`${r.rating}` === `${rating}` ? "active" : ""}
                  >
                    <Rating caption={" & up"} rating={r.rating}></Rating>
                  </Link>
                </li>
              ))}
            </ul>
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
