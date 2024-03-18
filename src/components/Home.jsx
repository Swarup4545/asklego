import React from "react";
import { useState } from "react";
import img1 from "../imaga/1img.png";
import img2 from "../imaga/2img.webp";
import img3 from "../imaga/3img.webp";
import img4 from "../imaga/4img.webp";
import { RxDotFilled } from "react-icons/rx";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import watch from "../imaga/watch.png";
import { FaCirclePlay } from "react-icons/fa6";
import Slider from "./Slider";
import aft1 from "../imaga/1aft.webp";
import befo1 from "../imaga/1befo.webp";
import befo2 from "../imaga/2befo.jpg";
import aft2 from "../imaga/2aft.jpg";
import befo3 from "../imaga/3befo.webp";
import aft3 from "../imaga/3aft.webp";
import befo4 from "../imaga/4befo.webp";
import aft4 from "../imaga/4aft.jpeg";
import col1 from "../imaga/col1.png";
import col2 from "../imaga/col2.png";
import col3 from "../imaga/col3.png";
import col4 from "../imaga/col4.png";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CgCloseO } from "react-icons/cg";
import sudha1 from "../imaga/sudha-225.png";
import no1 from "../imaga/no1.webp";
import no2 from "../imaga/no2.webp";
import no3 from "../imaga/no3.webp";
import no4 from "../imaga/no4.webp";
import tree from "../imaga/tree.webp";
import pink from "../imaga/pink.webp";
import circle from "../imaga/circle.webp";
import graph from "../imaga/graph.webp";
import { IoIosArrowDown } from "react-icons/io";
import { FaKey } from "react-icons/fa6";
import { BsHouseDoor } from "react-icons/bs";
import { IoMusicalNotesOutline } from "react-icons/io5";
import Fotter from "./Fotter";

const Home = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [startIndex1, setStartIndex1] = useState(0);
  const [endIndex, setEndIndex] = useState(1);
  const [endIndex1, setEndIndex1] = useState(1);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  function Show1() {
    setShow1(!show1);
  }
  function Show2() {
    setShow2(!show2);
  }
  function Show3() {
    setShow3(!show3);
  }

  const List = [
    {
      img: img1,
      Title: "The Modern way of investing in Real Estate",
      para: "Access unique real estate investment opporutnities and start building a positive real estate portfolio today!",
      btn: "Get Started",
    },
    {
      img: img2,
      Title: "For Real Estate Developers & General Contractors",
      para: "AskLego offers a new way for developers and General Contractors to partner up on real estate deals, raise funds, and manage projects.",
      btn: "Get Funded",
    },
    {
      img: img3,
      Title: "For Real Estate Agents & Brokers",
      para: "AskLego is a Tech Platform that enables crowd investment. View our deal criteria and submit a deal for our consideration.",
      btn: "Submit a Deal",
    },
    {
      img: img4,
      Title: "Leverage investment Opportunities",
      para: "Access unique well evaluated real estate investment opporutnities. Diversify your investment, derisk your asset investment and stay liquid always.",
      btn: "Invest",
    },
  ];
  const list2 = [
    {
      img: no1,
      title: "Step 1 : Browse the property",
      para: "Browse Arrived properties, each pre-vetted for their investment potential",
    },
    {
      img: no2,
      title: "Step 2: Select Property",
      para: "Determine how much money you want to invest and select your shares",
    },
    {
      img: no3,
      title: "Step 3: Buy Shares",
      para: "Review the terms, sign electornically, and fund your investment.",
    },
    {
      img: no4,
      title: "Step 4: Earn Rental income & Appreciation",
      para: "All while Asklego manages the properties.",
    },
  ];
  function prev() {
    const isFirst = startIndex === 0;
    const iSecond = endIndex === 1;
    const nextindex = isFirst ? List.length - 1 : startIndex - 1;
    const nextindex2 = iSecond ? List.length : endIndex - 1;
    setEndIndex(nextindex2);
    setStartIndex(nextindex);
  }
  function next() {
    const isFirst = startIndex === List.length - 1;
    const iSecond = endIndex === List.length;
    const nextindex = isFirst ? 0 : startIndex + 1;
    const nextindex2 = iSecond ? 1 : endIndex + 1;
    setEndIndex(nextindex2);
    setStartIndex(nextindex);
  }
  function prev1() {
    const isFirst = startIndex1 === 0;
    const iSecond = endIndex1 === 1;
    const nextindex = isFirst ? list2.length - 1 : startIndex1 - 1;
    const nextindex2 = iSecond ? list2.length : endIndex1 - 1;
    setEndIndex1(nextindex2);
    setStartIndex1(nextindex);
  }
  function next1() {
    const isFirst = startIndex1 === list2.length - 1;
    const iSecond = endIndex1 === list2.length;
    const nextindex = isFirst ? 0 : startIndex1 + 1;
    const nextindex2 = iSecond ? 1 : endIndex1 + 1;
    setEndIndex1(nextindex2);
    setStartIndex1(nextindex);
  }

  function dott(idex) {
    if (idex === 0) {
      setStartIndex(0);
      setEndIndex(1);
    } else if (idex === 1) {
      setStartIndex(1);
      setEndIndex(2);
    } else if (idex === 2) {
      setStartIndex(2);
      setEndIndex(3);
    } else if (idex === 3) {
      setStartIndex(3);
      setEndIndex(4);
    }
  }
  function dott1(idex) {
    if (idex === 0) {
      setStartIndex1(0);
      setEndIndex1(1);
    } else if (idex === 1) {
      setStartIndex1(1);
      setEndIndex1(2);
    } else if (idex === 2) {
      setStartIndex1(2);
      setEndIndex1(3);
    } else if (idex === 3) {
      setStartIndex1(3);
      setEndIndex1(4);
    }
  }

  let ren = List.slice(startIndex, endIndex).map((val) => {
    return (
      <>
        <div className="group">
          <div className="md:flex">
            <div className="w-[50%] h-[50%] justify-center item-center text-center">
              <img
                className={
                  List[0].img === val.img
                    ? "w-[87%] my-5 m-auto rounded"
                    : "w-[80%] my-5 m-auto rounded"
                }
                src={val.img}
              ></img>
            </div>
            <div className="w-[40%] my-5">
              <h1 className="font-semibold text-6xl">{val.Title}</h1>
              <p className="font-semibold text-[28px] mt-3">{val.para}</p>
              <button className="bg-blue-500 h-11 w-28 rounded mt-3">
                <span className="">{val.btn}</span>
              </button>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center">
              {List.map((dot, index) => {
                return (
                  <>
                    <RxDotFilled
                      className="cursor-pointer"
                      onClick={() => dott(index)}
                      color={startIndex === index ? "blue" : "green"}
                    />
                  </>
                );
              })}
            </div>
          </div>
          <div className="absolute bottom-96 hidden w-full group-hover:block">
            <div className="flex w-full">
              <FaChevronLeft
                className="cursor-pointer "
                color="green"
                size={30}
                onClick={prev}
              />
              <div className="flex-grow"></div>
              <FaChevronRight
                className="cursor-pointer "
                color="green"
                size={30}
                onClick={next}
              />
            </div>
          </div>
        </div>
      </>
    );
  });
  let ren2 = list2.slice(startIndex1, endIndex1).map((val) => {
    return (
      <>
        <div className="group">
          <div className="md:flex">
            <div className="hidden md:block w-[50%] h-[50%] justify-end item-left text-left">
              <img
                className={"w-[50%] my-5 mr-3 ml-auto rounded"}
                src={val.img}
              ></img>
            </div>
            <div className="w-[20%] my-5">
              <h1 className=" text-4xl">{val.title}</h1>
              <p className="font-semibold text-[28px] mt-3">{val.para}</p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center">
              {list2.map((dot, index) => {
                return (
                  <>
                    <RxDotFilled
                      className="cursor-pointer"
                      onClick={() => dott1(index)}
                      color={startIndex1 === index ? "blue" : "green"}
                    />
                  </>
                );
              })}
            </div>
          </div>
          <div className="relative bottom-52">
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
              <FaChevronLeft
                className="cursor-pointer ml-[7%]"
                color="green"
                size={30}
                onClick={prev1}
              />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-white cursor-pointer">
              <FaChevronRight
                className="cursor-pointer ml-[83%]"
                color="green"
                size={30}
                onClick={next1}
              />
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="bg-white pb-20">
        <div>{ren}</div>
        <div className="m-auto text-center shadow-2xl h-[300px] w-[80%] mb-20">
          <h1 className="m-5 font-semibold text-4xl">
            AskLego Investment’s Performance
          </h1>
          <p>
            Since being founded in 2022, AskLego has acquired over 25 deals. As
            of January 1, 2024, 44 of those offerings
          </p>
          <div className="flex justify-center items-center">
            <div className="flex">
              <p>have been completed.</p>
              <a href="#" className="text-blue-500">
                Invest now
              </a>
              <FaChevronRight className="mt-1" color="blue" />
            </div>
          </div>
          <div className=" flex m-auto w-[85%] bg-black justify-center rounded justify-evenly text-white">
            <div className="justify-center m-3">
              <h1 className="font-bold text-6xl">28.7%</h1>
              <p className="text-xl">Avg. Annual Return</p>
            </div>
            <div className="justify-center m-3">
              <h1 className="font-bold text-6xl">+9.5K</h1>
              <p className="text-xl">Registered Investors</p>
            </div>
            <div className="justify-center m-3">
              <h1 className="font-bold text-6xl">$11.2M</h1>
              <p className="text-xl">Property Value invested</p>
            </div>
          </div>
        </div>
        <div className=" my-10">
          <div className="bg-gray-300 md:flex  w-[96%] m-auto">
            <div className="w-[90%] m-3">
              <div className="flex">
                <FaCirclePlay size={20} color="blue" />
                <h1 className="text-black font-bold mx-10 text-xl">
                  What's AskLego ?
                </h1>
              </div>
              <h1 className="font-bold text-6xl">
                Easily invest in Short term or Long term opportunities
              </h1>
              <p className="font-semibold text-xl mt-8">
                Maximize your wealth — unlock the benefits of real estate
                investing with rental income and appreciation.
              </p>
            </div>
            <div className="block sm:flex">
              <div>
                <div className="bg-white w-[90%] h-28 rounded mt-8 md:ml-8 flex">
                  <div className="w-28">
                    <img src={watch} className="h-10"></img>
                  </div>
                  <div>
                    <h1 className="font-bold text-xl mb-2">Easy Investment</h1>
                    <p>
                      Your content goes here. Edit or remove this text inline or
                      in the module Content settings.
                    </p>
                  </div>
                </div>
                <div className="bg-white w-[90%] h-28 rounded mt-8 md:ml-8 flex">
                  <div className="w-28">
                    <img src={watch} className="h-10"></img>
                  </div>
                  <div>
                    <h1 className="font-bold text-xl mb-2">
                      Owner at Top Location
                    </h1>
                    <p>
                      Your content goes here. Edit or remove this text inline or
                      in the module Content settings.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-center justify-center">
                <div className="bg-white w-[90%] h-28 rounded mt-8 md:ml-4 flex">
                  <div className="w-28">
                    <img src={watch} className="h-10"></img>
                  </div>
                  <div>
                    <h1 className="font-bold text-xl mb-2">DeRisk-Diversify</h1>
                    <p>
                      Your content goes here. Edit or remove this text inline or
                      in the module Content settings.
                    </p>
                  </div>
                </div>
                <div className="bg-white w-[90%] h-28  mt-8  md:ml-4 rounded flex">
                  <div className="w-28">
                    <img src={watch} className="h-10"></img>
                  </div>
                  <div>
                    <h1 className="font-bold text-xl mb-2">Easy Investment</h1>
                    <p>
                      Your content goes here. Edit or remove this text inline or
                      in the module Content settings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center justify-center m-auto w-[80%]">
          <h1 className="text-6xl font-semibold">
            Short & Long-Term Investment Options
          </h1>
          <p className="text-gray-500">
            AskLego excels in swift, secure asset returns. Specializing in
            compact projects, we focus on quick, low-risk initiatives, rapidly
            enhancing economic value. Benefit from low minimum investments to
            diversify efficiently.
          </p>
        </div>
        <div>
          <div>
            <div className="md:flex my-20">
              <div className="flex flex-wrap justify-end item-center w-full">
                <div className="w-[40%] h-[470px] mx-2 bg-gray-400 rounded">
                  <div className="rounded-t-lg bg-black text-center">
                    <h1 className="text-xl font-semibold text-white">
                      House Flip
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-3 w-full">
                    <Slider befo1={befo1} aft1={aft1} />
                  </div>
                  <div className="ml-2">
                    <h1 className="font-bold text-3xl text-blue-300">
                      House Flip
                    </h1>
                    <p className="text-black text-xl">Renovation + ADU</p>
                    <ul className="list-disc list-inside">
                      <li>Single-family</li>
                      <li>6-12 months</li>
                      <li>Built-to-sell</li>
                    </ul>
                  </div>
                  <div className="text-center mt-3">
                    <button className="hover:bg-sky-700 rounded border border-white h-11 ">
                      <span className="mx-4 text-white">Invest in FLIP</span>
                    </button>
                  </div>
                </div>
                <div className="w-[40%] h-[470px] mx-2 rounded bg-black">
                  <div className="rounded-t-lg bg-black text-center">
                    <h1 className="text-xl font-semibold text-white">
                      New Development
                    </h1>
                  </div>
                  <div className="flex items-center justify-center my-3 text-white">
                    <div>
                      <p>Opportunistic</p>
                      <ul className="list-disc list-inside">
                        <li>Single & Multi-family</li>
                        <li>18-24 months</li>
                        <li>Build-to-sell</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <Slider befo1={befo2} aft1={aft2} />
                  </div>
                  <div className="text-center mt-3">
                    <button className="hover:bg-sky-700 rounded border border-white h-11 ">
                      <span className="mx-4 text-white">Invest in NEW</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap  w-full">
                <div className="w-[40%] h-[470px] rounded justify-center mx-2 bg-black">
                  <div className="rounded-t-lg bg-black text-center rounded-t-lg">
                    <h1 className="text-xl font-semibold text-white">
                      New Development
                    </h1>
                  </div>
                  <div className="flex items-center justify-center bg-black my-3 text-white">
                    <div className=" text-white">
                      <p className="">Renovation + Rental</p>
                      <ul className="list-disc list-inside">
                        <li>Multi-family</li>
                        <li>3-5 years</li>
                        <li>Fix-and-rent (tax benefits)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <Slider befo1={befo3} aft1={aft3} />
                  </div>
                  <div className="text-center mt-3">
                    <button className="hover:bg-sky-700 rounded border border-white h-11 ">
                      <span className="mx-4 text-white">Invest in Value</span>
                    </button>
                  </div>
                </div>
                <div className="w-[40%] h-[470px] bg-black mx-2 rounded">
                  <div className="rounded-t-lg bg-black text-center">
                    <h1 className="text-xl font-semibold text-white">
                      New Development
                    </h1>
                  </div>
                  <div className="flex items-center justify-center bg-black my-3 text-white">
                    <div>
                      <p>Development + Rental</p>
                      <ul className="list-disc list-inside">
                        <li>Residential & Commercial</li>
                        <li>3-4 years</li>
                        <li>Build-to-rent (tax benefits)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <Slider befo1={befo4} aft1={aft4} />
                  </div>
                  <div className="text-center mt-3">
                    <button className="hover:bg-sky-700 rounded border border-white h-11 ">
                      <span className="mx-4 text-white">Invest in BRT</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[90%] shadow-2xl bg-white mx-auto my-20">
            <h1 className="text-center font-bold text-3xl my-2">
              Why invest in real estate?
            </h1>
            <div className="md:flex mt-20 pb-10 justify-center item-center">
              <div className="lg:flex">
                <div>
                  <div className="h-40"></div>
                  <div className="border-b-4 border-black">
                    <h1 className=" my-5">Attractive Dividends</h1>
                  </div>
                  <div className="border-b-4 border-black">
                    <h1 className=" my-5">Low Volatility</h1>
                  </div>
                  <div className="border-b-4 border-black">
                    <h1 className="h-[18px] my-5">Access to Leverage</h1>
                  </div>
                  <div className="border-b-4 border-black">
                    <h1 className="h-[20px] my-5">Hard Asset</h1>
                  </div>
                  <div className="border-b-4 border-black">
                    <h1 className="h-[20px] my-5">Inflation Hedge</h1>
                  </div>
                  <div className="border-b-4 border-black">
                    <h1 className="my-5">Average Annual Return*</h1>
                  </div>
                </div>
                <div className="bg-blue-200 m-auto rounded w-56">
                  <div className="h-40 text-center">
                    <img src={col1} className="h-[60%] m-auto"></img>
                    <div className="text-center border-b-4">
                      <p className="my-4">Invest</p>
                    </div>
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle size={19} className="my-5 m-auto" />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle size={19} className="my-5 m-auto" />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle
                      size={19}
                      className="h-[19px] m-auto my-5"
                    />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle
                      size={19}
                      className="h-[20px] m-auto my-5"
                    />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle
                      size={19}
                      className="h-[20px] m-auto my-5"
                    />
                  </div>
                  <div className="border-b-4 border-black text-center">
                    <div className="">
                      <h1 className="my-5 font-bold">9.8%</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex">
                <div className="m-auto w-56">
                  <div className="h-40 text-center">
                    <img src={col2} className="h-[60%] m-auto"></img>
                    <div className="text-center border-b-4">
                      <p className="my-4">Stocks</p>
                    </div>
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle size={19} className="my-5 m-auto" />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle size={19} className="my-5 m-auto" />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle
                      size={19}
                      className="h-[19px] m-auto my-5"
                    />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle
                      size={19}
                      className="h-[20px] m-auto my-5"
                    />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle
                      size={19}
                      className="h-[20px] m-auto my-5"
                    />
                  </div>
                  <div className="border-b-4 border-black text-center">
                    <div className="">
                      <h1 className="my-5 font-bold">9.8%</h1>
                    </div>
                  </div>
                </div>
                <div className="m-auto w-56">
                  <div className="h-40 text-center">
                    <img src={col3} className="h-[60%] m-auto"></img>
                    <div className="text-center border-b-4">
                      <p className="my-4">Bonds</p>
                    </div>
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle size={19} className="my-5 m-auto" />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle size={19} className="my-5 m-auto" />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle
                      size={19}
                      className="h-[19px] m-auto my-5"
                    />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle
                      size={19}
                      className="h-[20px] m-auto my-5"
                    />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle
                      size={19}
                      className="h-[20px] m-auto my-5"
                    />
                  </div>
                  <div className="border-b-4 border-black text-center">
                    <div className="">
                      <h1 className="my-5 font-bold">9.8%</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="m-auto  w-56">
                  <div className="h-40 text-center">
                    <img src={col4} className="h-[60%] m-auto"></img>
                    <div className="text-center border-b-4">
                      <p className="my-4">Gold</p>
                    </div>
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle size={19} className="my-5 m-auto" />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle size={19} className="my-5 m-auto" />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle
                      size={19}
                      className="h-[19px] m-auto my-5"
                    />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle
                      size={19}
                      className="h-[20px] m-auto my-5"
                    />
                  </div>
                  <div className="border-b-4 border-black">
                    <FaRegCheckCircle
                      size={19}
                      className="h-[20px] m-auto my-5"
                    />
                  </div>
                  <div className="border-b-4 border-black text-center">
                    <div className="">
                      <h1 className="my-5 font-bold">9.8%</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center justify-center">
            <h1 className="font-bold text-2xl">
              We estimate that less than 0.5% of properties we review will pass
              our diligence process.
            </h1>
            <div className="m-auto md:flex justify-center item-center">
              <div className="w-[20%] h-[90px] border-black text-center border rounded bg-white">
                <p className="text-2xl font-bold">100,000</p>
                <p className="text-2xl">Total properties analyzed</p>
              </div>
              <div className="w-[20%] h-[90px] border-black text-center border rounded bg-blue-200">
                <p className="text-2xl font-bold">10%</p>
                <p className="text-2xl">Passed data screening</p>
              </div>
              <div className="w-[20%] h-[90px] border-black text-center border rounded bg-blue-200">
                <p className="text-2xl font-bold">0.5%</p>
                <p className="text-2xl">Met team standards</p>
              </div>
              <div className="w-[20%] h-[90px] border-black text-center border rounded bg-blue-400">
                <div className="flex justily-center item-center">
                  <div className="mx-auto flex">
                    <FaChevronLeft className="mt-1" />
                    <p className="text-2xl font-bold">0.2%</p>
                  </div>
                </div>
                <p className="text-2xl">Properties purchased</p>
              </div>
            </div>
            <div className="m-auto w-[50%] md:flex pt-10">
              <div className="w-72">
                <img
                  src={sudha1}
                  className="h-[130px] w-[130px] rounded-full"
                ></img>
              </div>
              <div className="text-left">
                <p>
                  “We adhere to a meticulously crafted process aimed at
                  delivering what we anticipate to be high-performing
                  investments for our valued investors.”
                </p>
                <p className="mt-10">
                  <span className="font-bold text-xl">Sudha Shah</span>
                  <br />
                  VP of Investments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-20">
          <div className="shadow-2xl bg-white rounded m-auto w-[90%]">
            <div className="pt-10 px-10">
              <span className="bg-blue-200 rounded px-5 py-1 mt-24">
                Real estate investing, but easy
              </span>
              <div className="md:flex">
                <p className="text-2xl">
                  Effortlessly invest in a rental home or vacation rental
                  <br></br> and start earning passive income.
                </p>
                <div className="bg-black text-white h-11 mx-3">
                  <p className="p-2 ">How Does AskLogo Work</p>
                </div>
              </div>
            </div>
            <div>{ren2}</div>
            <div className="pt-10 px-10">
              <span className="bg-blue-200 rounded px-5 py-1 mt-24">
                Real estate takes the crown
              </span>
              <div className="md:flex">
                <p className="text-2xl">
                  Diverisfy and reduce risk with hassle-free real estate
                  investment for
                  <br /> consistent returns without headaches and still you have
                  liquid asset.
                </p>
                <div className="bg-black text-white h-11 md:mx-3">
                  <p className="p-2 ">Top Benefits</p>
                </div>
              </div>
            </div>
            <div className="md:ml-8 mt-4">
              <div className="md:flex md:justify-evenly">
                <div className="flex w-5/12 mx-1">
                  <div className="w-4/12">
                    <img src={tree} className="h-11"></img>
                  </div>
                  <div>
                    <h1 className="font-bold text-2xl">
                      Consistent Passive Income
                    </h1>
                    <p>
                      Earn rental income and receive deposits quarterly,
                      generating additional income streams to supplement your
                      financial goals and buil long-term weatlh.
                    </p>
                  </div>
                </div>
                <div className="flex w-5/12 mx-1">
                  <div className="w-4/12">
                    <img src={pink} className="h-11"></img>
                  </div>
                  <div>
                    <h1 className="font-bold text-2xl">
                      Flexible investment amounts
                    </h1>
                    <p>
                      Invest anywhere from $100 to approximately $1M per
                      property, making real estate investing more accesible to a
                      wider range of investors – consumerization of real estate
                      investment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:flex md:justify-evenly">
                <div className="flex w-5/12 mx-1">
                  <div className="w-4/12">
                    <img src={circle} className="h-11"></img>
                  </div>
                  <div>
                    <h1 className="font-bold text-2xl">
                      Property Appreciation
                    </h1>
                    <p>
                      Watch your investment grown as the home appreciates,
                      providing the potential for capital gains and the
                      opportunity to leveragel your investment.{" "}
                    </p>
                  </div>
                </div>
                <div className="flex w-5/12">
                  <div className="w-4/12">
                    <img src={graph} className="h-11 w-20"></img>
                  </div>
                  <div>
                    <h1 className="font-bold text-2xl">
                      Diversify with Real Estate
                    </h1>
                    <p>
                      Access historically consistent retruns with low
                      correlation to the stock market, providing potential
                      stability and diversification to your portfolio. The
                      investment is done on asset and not on a company owning an
                      asset.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="bg-gray-200 m-auto w-[70%]">
            <div className="flex">
              <h1 className="font-bold text-2xl">Who can invest in AskLego?</h1>
              <IoIosArrowDown className="ml-auto" onClick={Show1} />
            </div>
            <div className={show1 ? "block" : "hidden"}>
              <p>
                Virtually anyone can invest through our platform. We have a wide
                range of real estate in growing and potentially high growing
                cities. Anyone above the age of 18 and with legal rights to
                invest in the respective country with following all fundamental
                legal complaince for global or local investments.
              </p>
              <p className="mt-2">
                All investors will receive annually a US 1099 (in the USA) or
                similar document needed for the respective country tax
                compliance.{" "}
              </p>
              <p className="mt-2">
                Individuals may also invest through certain entities or
                self-directed retirement accounts
              </p>
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="bg-gray-200 m-auto w-[70%]">
            <div className="flex">
              <h1 className="font-bold text-2xl">
                What type of Properties are available on AskLego?
              </h1>
              <IoIosArrowDown className="ml-auto" onClick={Show2} />
            </div>
            <div className={show2 ? "block" : "hidden"}>
              <p className="mt-2">Commercial Rental</p>
              <p className="mt-2">Commercial Rental</p>
              <p className="mt-2">
                Corporate offices, Parks, Event Center, Hotels, Co working,
                warehouses & other commerical properties that are leased for
                72-120 months.
              </p>
              <p className="mt-2">Single Family Residences</p>
              <p className="mt-2">
                Rental homes that are leased for 12-24 months and are
                unfurnished
              </p>
              <p className="mt-2">Vacation Rentals</p>
              <p className="mt-2">
                Furnished short term rentals available to travelers on platforms
                like Airbnb and VRBO or OYO.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="bg-gray-200 m-auto w-[70%]">
            <div className="flex">
              <h1 className="font-bold text-2xl">What returns can i expect?</h1>
              <IoIosArrowDown className="ml-auto" onClick={Show3} />
            </div>
            <div className={show3 ? "block" : "hidden"}>
              <p>
                Investing in AskLego rental properties can deliver returns to
                investors in two different ways:
              </p>
              <p className="mt-2">
                1) Dividends from the rental income on each property; currently
                paid out to investors quarterly
              </p>
              <p className="mt-2">
                2) Appreciation from the change in property value that will be
                realized at the end of the investment hold period
              </p>
              <table className="table-auto border border-black rounded">
                <thead>
                  <tr className="border border-black">
                    <th className="px-3">
                      Estimated Historical Annual Return Range for Diversified
                      Portfolios
                    </th>
                    <th className="px-3">Single Family Residential</th>
                    <th className="px-3">Vacation Rental</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-black">
                    <td>Without Leverage</td>
                    <td>With Leverage</td>
                    <td>Target Investment Period</td>
                  </tr>
                  <tr className="border border-black">
                    <td>6% to 10%</td>
                    <td>7% to 12%</td>
                    <td>5-7 Years</td>
                  </tr>
                  <tr className="border border-black">
                    <td>5.5% to 12%</td>
                    <td>6% to 15%</td>
                    <td> 5-15 Years</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Return ranges are inclusive of all estimated costs, including
                property Operating, Finance, Legal, and Management Expenses, the
                Arrived Sourcing Fee, the Asset Management Fee, other upfront
                expenses, and costs associated with selling the property.
                Returns are calculated using the IRR (Internal Rate of Return)
                formula.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-blue-500 w-[80%] md:flex m-auto">
            <div className="text-center my-3">
              <FaKey className="m-auto" size={50}/>
              <h1 className="text-white font-bold my-1">Are you an Entrepreneur?</h1>
              <p className="text-white my-1">Are you planning to start your own vacational rental, real estate broker firm or Estate management company?</p>
              <button className="border border-blue-200 rounded my-1"><span className="m-3">Partner with us</span></button>
            </div>
            <div className="h-auto w-1 bg-white md:block hidden mx-2"></div>
            <div className="text-center my-3">
              <BsHouseDoor className="m-auto" size={50}/>
              <h1 className="text-white font-bold my-1">Are you a Developer or Builder Contractor?</h1>
              <p className="text-white my-1">Are you looking for fund to build a new property, renovate or build rental property?</p>
              <button className="border border-blue-200 rounded my-1"><span className="m-3">Get funded now</span></button>
            </div>
            <div className="h-auto w-1 bg-white md:block hidden mx-2"></div>
            <div className="text-center my-3">
              <IoMusicalNotesOutline className="m-auto" size={50}/>
              <h1 className="text-white font-bold my-1">Are you an Investor?</h1>
              <p className="text-white my-1">Are you planning to invest in asset that is as liquid as cash? safe as gold or safe as federal rate?</p>
              <button className="border border-blue-200 rounded my-1"><span className="m-3">Invest & Relax</span></button>
              
            </div>
          </div>
        </div>
      </div>
      <Fotter/>
    </>
  );
};

export default Home;
