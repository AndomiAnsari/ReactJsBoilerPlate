import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { GetDbUser } from "./redux/reducers/DbUser";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import { GetProducts } from "./redux/reducers/Product";
import { GetCarts } from "./redux/reducers/Cart";
// function App() {
//   const dispatch = useDispatch();
//   const {
//     dbUser: { DbUser },

//   } = useSelector(state => state);
//   useEffect(() => {
//     dispatch(
//       GetDbUser()
//     )
//   }, []);
//   console.log(DbUser,'DbUser')
//   return (
//     <div className="App">
//       <h1>sdisfkdsmfjn</h1>
//     </div>
//   );
// }

// export default App;
function App() {
  // const dispatch = useDispatch();
  // const {
  //   dbUser: { DbUser },
  // } = useSelector((state) => state);
  // useEffect(() => {
  //   dispatch(GetDbUser());
  // }, []);
  // console.log(DbUser, "DbUser");

  const dispatch = useDispatch();
  // const {
  //   product: { Products },
  // } = useSelector((state) => state);
  // useEffect(() => {
  //   dispatch(GetProducts());
  // }, []);
  // console.log(Products, "Products");

  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
