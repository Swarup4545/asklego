import React, { useState, useEffect } from "react";
import "./product.css";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const ProductComponents = () => {

  const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;
  const maxVisibleButtons = 3;

  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    setStartIndex((currentPage - 1) * cardsPerPage);
  }, [currentPage]);

  const totalPages = Math.ceil(products.length / cardsPerPage);

  const renderList = products
    .slice(startIndex, startIndex + cardsPerPage)
    .map((product) => {
      const { id, title, image, price, category } = product;
      return (
        <div className="cardd overflow-hidden" key={id}>
          <div className=" h-60 w-full">
            <img src={image} className="img1 h-60 w-full hover:scale-110 transition duration-500 cursor-pointer" alt={title}></img>
          </div>
          <div className="bg-black flex h-24 rounded-b-lg">
            {/* <p className="title text-white">{title}</p> */}
            <button className="category text-black bg-white text-black rounded-lg m-2 h-7">{category}</button>
            <button className="money text-black bg-white m-2 rounded-lg h-7">${price}</button>
          </div>
        </div>
      );
    });

  const next = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };

  const prev = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const generatePageButtons = () => {
    const buttons = [];
    const maxButtonsToShow = Math.min(totalPages, maxVisibleButtons);

    if (currentPage <= Math.floor(maxButtonsToShow / 2) + 1) {
      // Show the first 'maxButtonsToShow' buttons
      for (let i = 1; i <= maxButtonsToShow; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`text-white bg-gray-800 py-2 m-2 px-4 rounded ${i === currentPage ? "active"  : ""}`}
          >
            {i}
          </button>
        );
      }
    } else if (currentPage >= totalPages - Math.floor(maxButtonsToShow / 2)) {
      // Show the last 'maxButtonsToShow' buttons
      for (let i = totalPages - maxButtonsToShow + 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`text-white bg-gray-800 py-2 m-2 px-4 rounded ${i === currentPage ? "active"  : ""}`}
          >
            {i}
          </button>
        );
      }
    } else {
      // Show a range of buttons around the current page
      const start = currentPage - Math.floor(maxButtonsToShow / 2);
      const end = start + maxButtonsToShow - 1;
      for (let i = start; i <= end; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`text-white bg-gray-800 py-2 px-4 rounded ${i === currentPage ? "active"  : ""}`}
          >
            {i}
          </button>
        );
      }
    }

    return buttons;
  };

  return (
    <>
      <div className="mainn mt-5 bg-white m-4">
        <div className="containerr">{renderList}</div>
        <div className="caro">
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="text-white bg-gray-800 py-2 px-4 rounded"
          >
            Prev
          </button>
          {generatePageButtons()}
          <button
            onClick={next}
            disabled={startIndex + cardsPerPage >= products.length}
            className="text-white bg-gray-800 py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductComponents;
