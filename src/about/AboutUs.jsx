import React from "react";
import { Link } from "react-router-dom";
import img1 from "../imaga/aboutbag.png";
import img2 from "../imaga/backabout.jpg";
import ack from "../imaga/ACK.png";
import innerl from "../imaga/innerlight.png";
import urban from "../imaga/urban.png";
import tapan from "../imaga/tapan.jpg";
import screenshot3 from "../imaga/Screenshot3.png";
import screenshot4 from "../imaga/Screenshot4.png";
import screenshot5 from "../imaga/Screenshot5.png";
import screenshot6 from "../imaga/Screenshot6.png";
import sudha from "../imaga/sudha-225.png";
import ibm from "../imaga/ibm.png";
import iguazio from "../imaga/iguazio.png";
import Microsoft from "../imaga/Microsoft.png";
import Morgan from "../imaga/Morgan.png";
import tcc from "../imaga/tcc.png";
import Accenture from "../imaga/Accenture.png";
import Amazon from "../imaga/Amazon.png";
import McKinsey from "../imaga/McKinsey.png";
import quantum from "../imaga/quantum.png";
import bg1 from "../imaga/bg1.jpg";
import bg2 from "../imaga/bg2.png";
import bg3 from "../imaga/bg3.png";
import arse from "../imaga/arselargo.png";
import family from "../imaga/family.png";
import coinup from "../imaga/cionup.png";
import noske from "../imaga/noskeurg.png";
import growth from "../imaga/growth.png";
import sugarhouse from "../imaga/sugarhouse.png";
import wood from "../imaga/woodlockj.png";
import news from "../imaga/news-cnn.png";
import techcrunch from "../imaga/tech-crunch.png";
import business from "../imaga/business-insider.png";
import geekwire from "../imaga/geek_wire.png";
import cnnheding from "../imaga/cnn-headline.png";
const AboutUs = () => {
  return (
    <>
      <div className="bg-white pb-10">
        <div className="bg-[#f8fafc] md:flex justify-center item-center">
          <div className="w-[85%] md:w-4/12 mx-10 my-10">
            <div className="flex">
              <div className="bg-blue-300 h-3 w-11 mt-2"></div>
              <div className="w-11 md:w-20 h-[1px] bg-blue-400 mt-[12px]"></div>
              <p className="text-blue-400 font-semibold ">
                EASIER, TINIER REAL ESTATE INVESTMENT.
              </p>
            </div>
            <h1 className="font-bold font-serif font-bold text-3xl md:text-6xl my-5">
              Democratization of Top Global real estate.
            </h1>
            <p className="text-black-300">
              Our groundbreaking approach offers an unprecedented opportunity to
              thrive in real estate investment, providing minimal investment
              requirements, global appreciation, and sustained rental growth.
              Join us in reshaping the narrative of wealth creation through
              innovative and secure real estate investment strategies.
            </p>
            <button className="bg-blue-500 rounded-full h-14 mt-10">
              <Link className="mx-3 my-3" to="/invest">
                START INVESTING
              </Link>
            </button>
            <div className="sm:flex justify-evenly mt-10">
              <img src={ack} alt="" className="h-10" />
              <img src={innerl} alt="" className="h-10" />
              <img src={urban} alt="" className="h-10" />
            </div>
          </div>
          <div className="bg-black w-[320px] md:w-[500px] h-[640px]">
            <img src={img2} className="relative h-full"></img>
            <img src={img1} className="h-[640px] bottom-[640px] relative"></img>
          </div>
        </div>
        <div className="my-10">
          <div className="bg-gray-200 md:flex m-auto md:justify-evenly w-[80%]">
            <div className="md:w-[40%] p-4">
              <h1 className="md:text-6xl font-bold text-3xl">
                There must be a better way to earn from real estate.
              </h1>
              <div className="flex mt-4">
                <div className="w-64">
                  <img src={tapan} alt="" className="h-10" />
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Tapan, CEO</span> “Asklego
                    democratizes wealth in real estate. Simplifying processes
                    and lowering entry costs, we ensure higher sales, reduced
                    capital needs, swift turnarounds, increased rentals, and a
                    diversified investor base for success.”
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-[60%] p-4">
              <div className="">
                <p className="mt-5">
                  Real estate stands out as a{" "}
                  <span className="font-bold">
                    top-performing long-term investment
                  </span>{" "}
                  throughout modern history, delivering returns comparable to
                  stocks but with significantly reduced volatility. However, a
                  major obstacle prevents many potential investors from entering
                  this market. The high initial investment required for down
                  payments and the complex operational demands of property
                  management hinder most individuals from participating.
                  Additionally, concentrating a substantial amount of capital in
                  a single real estate venture contradicts the fundamental
                  principle of diversifying investments to mitigate potential
                  risks.
                </p>
                <p className="mt-6">
                  To address these challenges, we are developing a novel
                  approach to real estate investment, facilitating an easier
                  entry into the market for aspiring investors. Through Arrived,
                  anyone can acquire shares in income-generating rental
                  properties with an initial investment as low as $100, 500AED,
                  or 10,000 INR (the lowest possible denomination in the
                  respective country). Arrived assumes responsibility for all
                  real estate operations, allowing investors to relax and enjoy
                  the benefits of net rental income and a share in the
                  property’s appreciation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-11">
          <div className="m-auto w-[80%]">
            <div className="md:w-[60%]">
              <p className="text-5xl font-bold">
                Our team possesses extensive expertise in real estate,
                technology, operations, and finance.
              </p>
              <p className="text-3xl text-blue-300 mt-4">Where we come from</p>
            </div>
            <div className="flex flex-wrap">
              <img src={iguazio} className="h-6 mx-5 my-2" alt="" />
              <img src={ibm} alt="" className="h-14 mx-5 my-2" />
              <img src={Morgan} alt="" className="h-6 mx-5 my-2" />
              <img src={tcc} alt="" className="h-6 mx-5 my-3" />
              <img src={Accenture} alt="" className="h-8 mx-5 my-3" />
              <img src={Microsoft} alt="" className="h-6 mx-5 my-3" />
            </div>
            <div className="flex flex-wrap mt-10">
              <img src={Amazon} alt="" className="h-7 mx-5 my-2" />
              <img src={McKinsey} alt="" className="h-7 mx-5 my-2" />
              <img src={quantum} alt="" className="h-7 mx-5 my-2" />
            </div>
            <div className="flex flex-wrap justify-evenly">
              <div className="w-28">
                <img src={tapan} alt="" className="w-full h-28" />
                <p className="text-black font-bold">Tapan Shah</p>
                <p>Co-founder & CSO</p>
              </div>
              <div className="w-28 ">
                <img src={sudha} alt="" className="w-full h-28" />
                <p className="text-black font-bold">Sudha Taneja</p>
                <p>Vice President Investment</p>
              </div>
              <div className="w-28 ">
                <img src={screenshot3} alt="" className="w-full h-28" />
                <p className="text-black font-bold">Merlyn Yacukwitcz</p>
                <p>CFO & New Investments</p>
              </div>
              <div className="w-28 ">
                <img src={screenshot4} alt="" className="w-full h-28" />
                <p className="text-black font-bold">Bruce White</p>
                <p>Co Founder & COO</p>
              </div>
              <div className="w-28">
                <img src={screenshot5} alt="" className="w-full h-28" />
                <p className="text-black font-bold">Adam Grant</p>
                <p>Chief Legal Officer</p>
              </div>
              <div className="w-28 ">
                <img src={screenshot6} alt="" className="w-full h-28" />
                <p className="text-black font-bold">Hailey O' Brain</p>
                <p>Chief Project Officer & HR</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`bg-[url(${bg1})] bg-cover flex justify-center item-center`}
          >
            <div className="w-9/12 md:ml-32">
              <div className="md:w-7/12">
                <p className="text-6xl font-bold">
                  Asklego is backed by globally acclaimed investors, earning
                  trust worldwide.
                </p>
              </div>
              <div className="md:flex mt-5">
                <div className="bg-white sm:w-11/12 md:w-5/12 sm:m-auto md:m-0 sm:my-5 md:my-0 rounded shadow">
                  <div className="w-full p-4">
                    <div className="h-[2px] w-[98%] bg-red-400"></div>
                    <p className="text-blue-300 ">MISSION</p>
                    <p className="font-bold text-4xl mt-14">Our Mission</p>
                    <p className="mt-2">
                      Democratize real estate investment, fostering inclusivity
                      and financial empowerment globally.
                    </p>
                  </div>
                </div>
                <div className="bg-white sm:w-11/12 md:w-5/12 sm:my-10 md:my-0 sm:m-auto md:m-0 rounded shadow md:ml-20">
                  <div className="w-full p-4">
                    <div className="h-[2px] w-[98%] bg-red-400"></div>
                    <p className="text-blue-300 ">VISSION</p>
                    <p className="font-bold text-4xl mt-14">Our Vission</p>
                    <p className="mt-2">
                      Revolutionize real estate investment, creating global
                      empowerment through shared success.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap justify-evenly">
                  <img src={arse} alt="" className="h-44" />
                  <img src={family} alt="" className="h-28 mt-4" />
                  <img src={coinup} alt="" className="h-44" />
                  <img src={noske} alt="" className="h-28 mt-4" />
                </div>
                <div className="flex flex-wrap justify-evenly">
                  <img src={growth} alt="" className="h-44" />
                  <img src={sugarhouse} alt="" className="h-28 mt-4" />
                  <img src={growth} alt="" className="h-44" />
                  <img src={wood} alt="" className="h-28 mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-10 item-center">
            <div className="w-9/12">
              <p className="font-bold text-black text-5xl">
                AskLego in the news!
              </p>
              <div className="md:flex">
                <div className="h-[770px] bg-gradient-to-b from-blue-500 text-center mt-4 via-blue-600 to-green-500 md:w-[1300px]">
                  <div className="h-[12%] w-full my-10">
                    <img src={cnnheding} alt="" className="h-full m-auto" />
                  </div>
                  <div className="h-[70%] my-10">
                    <img src={news} alt="" className="h-full m-auto" />
                  </div>
                </div>
                <div className="mt-5 md:ml-4">
                  <div className="h-8">
                    <img src={techcrunch} alt="" className="h-full"/>
                  </div>
                  <div className="w-11/12 bg-gray-200 shadow rounded">
                    <p className="font-bold my-2">17th Nov 2023</p>
                    <p className="text-gray-400 my-2 pb-2">“Breaking Barriers: New Platform Empowers Individuals to Invest in Hot Properties Worldwide Through Blockchain.”</p>
                  </div>
                  <div className="h-8 mt-10">
                    <img src={business} alt="" className="h-full"/>
                  </div>
                  <div className="w-11/12 bg-gray-200 shadow rounded">
                    <p className="font-bold my-2">1th Jan 2024</p>
                    <p className="text-gray-400 my-2 pb-2">“Unlock Global Opportunities: Invest $100 in Prime Properties in the Hottest Zones Worldwide, Reap Annual Dividends in Rentals and Witness Unrivaled Appreciation!”</p>
                  </div>
                  <div className="h-8 mt-10">
                    <img src={geekwire} alt="" className="h-full"/>
                  </div>
                  <div className="w-11/12 bg-gray-200 shadow rounded">
                    <p className="font-bold my-2">28th Jan 2024</p>
                    <p className="text-gray-400 my-2 pb-2">“Empowering Small Investors: Discover How Our Platform Democratizes High-End Property Benefits in the Hottest Vacation Spots, Commercial Areas, and Residential Neighborhoods!”</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
