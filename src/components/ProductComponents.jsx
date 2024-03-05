import React, { useState, useEffect } from "react";
import "./product.css";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { ImLocation2 } from "react-icons/im";
import { GoDotFill } from "react-icons/go";
import { TbInfoTriangle } from "react-icons/tb";
import { BsTrophy } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";

const ProductComponents = () => {
  let percentage;
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
      const {
        id,
        brand,
        thumbnail,
        title,
        description,
        stock,
        discountPercentage,
        image,
        rating,
        price,
        category,
      } = product;

      return (
        <div
          className="mx-auto w-80 m-5 rounded-lg border-solid border-2 border-gray justify-center items-center justify-center overflow-hidden"
          key={id}
        >
          <div className="bg-red-500 h-40 w-full">
            <img
              src={thumbnail}
              className="h-40 w-full pt-1 hover:scale-110 transition duration-500 cursor-pointer"
              alt={title}
            ></img>
          </div>
          <div className="mt-2 w-full justify-center h-full rounded-b-lg">
            {/* <p className="title text-white">{title}</p> */}
            <div className="flex w-full">
              <p className="m-1 mr-auto mt-2 text-2xl">
                {title.substring(0, 5)}
              </p>
              <p className="m-1 mt-2 font-bold text-2xl">
                {brand.substring(0, 5)}
              </p>
              <div className="ml-auto flex">
                <p className="m-1 mt-3 pl-auto">
                  {title.substring(0, 5)},{brand.substring(0, 5)}
                </p>
                <ImLocation2 size="40" className="ml-auto" />
              </div>
            </div>
            <div className="w-full w-full">
              <p className="m-1 mr-auto flex">
                {category}
                <GoDotFill className="mt-auto"/>
                {category}
              </p>
            </div>
            <div className="bg-gray-500 w-64 my-4 h-px m-auto"></div>
            <div className="flex w-full justify-center items-center my-10 text-center justify-evenly bg-green">
              <div className="">
                <TbInfoTriangle size="45" color="#1d4ed8" className="m-auto" />
                <p className="text-xs">Medium Risk</p>
              </div>
              <div className="">
                <BsTrophy size="45" color="#1d4ed8" className="m-auto" />
                <p className="text-xs">AYY 15%</p>
              </div>
              <div className="">
                <GiSandsOfTime size="45" color="#1d4ed8" className="m-auto" />
                <p className="text-xs">Long tern Investment</p>
              </div>
            </div>
            <div className="bg-[#312e81] my-10 mx-2 my-4 rounded justify-center items-center">
              <div className="flex justify-center items-center my-1 justify-evenly">
                <div className="mt-1">
                  <div>
                    <p className="text-white">{price}</p>
                  </div>
                  <div>
                    <p className="text-black relative bottom-1 text-xs">
                      Investor
                    </p>
                  </div>
                </div>
                <div className="mt-1">
                  <p className="text-2xl text-white font-thin mx-3">
                    See Helix Dusk
                  </p>
                </div>
                <div className="mt-1">
                  <p className="text-white">{Math.round(discountPercentage) * 5}%</p>
                  <p className="text-white text-xs relative bottom-1">Funded</p>
                </div>
              </div>
              <div class="pb-3">
                <div className="overflow-hidden h-2 mx-2 text-xs flex bg-white">
                  <div
                    style={{ width: `${Math.round(discountPercentage) * 5}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#14532d]"
                  ></div>
                </div>
              </div>
            </div>
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
            className={`text-white bg-gray-800 py-2 m-3 px-4 rounded ${
              i === currentPage ? "active" : ""
            }`}
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
            className={`text-white bg-gray-800 py-2 m-3 px-4 rounded ${
              i === currentPage ? "active" : ""
            }`}
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
            className={`text-white bg-gray-800 py-2 m-3 px-4 rounded ${
              i === currentPage ? "active" : ""
            }`}
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
