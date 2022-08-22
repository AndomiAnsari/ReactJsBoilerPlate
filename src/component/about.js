import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetProducts } from "../redux/reducers/Product";
// import { c } from "../redux/reducers/Cart";

function Home() {
  const dispatch = useDispatch();
  //   const [product, setProduct] = useState([]);
  //   console.log("🚀 ~ file: home.js ~ line 8 ~ Home ~ product", product);
  const [itemProduct, setItemProduct] = useState([]);
  console.log("🚀 ~ file: home.js ~ line 8 ~ Home ~ itemProduct", itemProduct);
  //   const [product, setProduct] = useState([]);
  //   console.log("🚀 ~ file: home.js ~ line 8 ~ Home ~ product", product);

  const {
    product: { Products },
  } = useSelector((state) => state);
  useEffect(() => {
    dispatch(GetProducts());
  }, []);
  console.log(Products, "Carts");
  console.log(Products?.products, "Carts");

  useEffect(() => {
    if (Products?.products) {
      setItemProduct(Products?.products);
    } else {
      setItemProduct([]);
    }
  }, [Products]);

  return (
    <>
      {itemProduct.map((v, i) => {
        return (
          <div style={{ backgroundColor: "red" }}>
            <h3>{v.id}</h3>
            <h3>{itemProduct.length}</h3>

            <h3>{v.description}</h3>
            <h3>{v.brand}</h3>
            <h3>{v.category}</h3>
            {/* <h3>{v.thumbnail}</h3> */}
            {/* <h3>{v.images}</h3> */}
            <h3>{v.total}</h3>
            <a href={v.id}>
              <h3>{v.title}</h3>
            </a>
            <img
              style={{ width: "100px", height: "100px" }}
              src={v.images[0]}
            />
            {/* <Images>{}</Images> source={v.images} /> */}

            <h3>{v.discountedTotal}</h3>
          </div>
        );
      })}
      {/* {Products.map((v, i) => {
        return (
          <div style={{ backgroundColor: "red" }}>
            <h3>{v.id}</h3>
            <h3>{v.description}</h3>
            {v.products.map((item) => {
              return (
                <div style={{ backgroundColor: "green" }}>
                  <h3>{item.title}</h3>
                  <h3>{item.price}</h3>
                </div>
              );
            })}
          </div>
        );
      })} */}
      {
        // product.map(({id,discountedTotal,product})=>{
        //     return (
        //         <div style={{backgroundColor:'red'}}>
        //             <h3>{id}</h3>
        //             <h3>{discountedTotal}</h3>
        //             {
        //                 product.products.map((item)=>{
        //                     return (
        //                         <h3>{item.title}</h3>
        //                     )
        //                 })
        //             }
        //         </div>
        //     )
        // })
      }
      {/* {product.length}
        {product.map((v, i) => {
            <div>
              {v}
              <span>{v?.total}</span>
              <span>{i}</span>
              <br />
            </div>;
          })}
      </div>
      {product[0]?.total} */}
      <h1>hello word</h1>
    </>
  );
}

export default Home;
