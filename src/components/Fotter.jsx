import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import logo from "../imaga/logoasklego.png";
import { TbMailFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

const Fotter = () => {
  return (
    <div className="bg-gray-500 py-20">
      <div className="md:flex justify-evenly">
        <div>
          <h1 className="font-bold text-xl">Join Our List</h1>
          <p>
            Add your email below to receive updates from Arrived, including our
            guides to investing
            <br /> in rental homes, and notifications about new rental
            properties & markets.
          </p>
          <input
            type="text"
            id="first_name"
            class="border-b border-black h-11 outline-none bg-gray-500 text-gray-900 w-full"
            placeholder="Email"
            required
          />
          <div className="text-center mt-5">
            <button className="mx-auto">Subscribe</button>
          </div>
          <div className="flex mt-10">
            <FaFacebookF size={30} className="mx-2" />
            <FaInstagram size={30} className="mx-2" />
            <FaXTwitter size={30} className="mx-2" />
            <FaLinkedinIn size={30} className="mx-2" />
            <FaRedditAlien size={30} className="mx-2" />
            <FaWhatsapp size={30} className="mx-2" />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl">Invest</h1>
          <p>Sign Up</p>
          <p>Browse Properties</p>
          <p>Offering Circular</p>
        </div>
        <div>
          <h1 className="font-bold text-xl">Learn</h1>
          <p>Learning Center</p>
          <p>Help & FAQ</p>
          <p>How it Works</p>
          <p>Real Estate</p>
          <p>Investment Guide</p>
          <p>Glossary</p>
        </div>
        <div>
          <h1 className="font-bold text-xl">Company</h1>
          <p>About Us</p>
          <p>Careers</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Stakeholder</p>
          <p>Commitments</p>
          <p>Affiliate</p>
          <p>Sell Us Your Home</p>
          <p>Partner with Arrived</p>
        </div>
      </div>
      <div className="border-y md:flex border-black mt-28 w-[95%] m-auto">
        <div className="mx-10 m-3">
          <img src={logo} className="h-10 mx-10"></img>
        </div>
        <div className="flex mx-10 m-3">
          <TbMailFilled size={30} className="" />
          <p className="text-xl font-bold text-black">info@asklego.com</p>
        </div>
        <div className="flex mx-10 m-3">
          <FaLocationDot size={30} className="" />
          <p className="text-xl font-bold text-black">
            1700 Westlake Ave N, Suite 200, Seattle, WA 98109
          </p>
        </div>
      </div>
      <div className="w-11/12 m-auto">
        <h1 className="font-bold">Important Informations</h1>
        <p className="mt-6">
          <span className="font-bold">Exponential Capital LLC,</span>the
          operator of the asklego.com website (the “Site”), explicitly declares
          that it does not functio n as a broker-dealer or investment advisor.
          All activities related to securities are exclusively conducted through
          a third-party broker-dealer that is a member of FINRA/SIPC.
          Prospective investors are strongly encouraged to review the
          brokercheck for this third-party broker-dealer, and an up-to-date Form
          CRS is readily available from them. Individuals contemplating any
          investment offerings are strongly advised to seek guidance from their
          financial advisor, accountant, and/or attorney for a comprehensive
          evaluation. Neither AskLego, any of the AskLego Issuers, nor Dalmore
          provides recommendations or advice regarding investments. No
          communication, whether through the Site or any other medium, should be
          construed as a recommendation for any security offered on or off the
          investment platform. The Site may contain forward-looking statements.
          It is imperative that users do not rely solely on these statements but
          carefully assess the offering materials to evaluate any investment
          opportunity. This evaluation should include a comprehensive
          consideration of the risk factors provided in the offering circular.
          The AskLego Issuers are engaged in public offerings pursuant to
          Regulation A, as amended, through the Site. Offering circulars and
          periodic reports for each of the AskLego Issuers are accessible on the
          Filings Page. Past performance is not indicative of future results,
          and investments on the AskLego platform involve substantial risks
          outlined in the respective offering materials. These risks encompass,
          but are not limited to, illiquidity, lack of diversification, and the
          potential for a complete loss of capital. Key risks include limited
          operating history, limited diversification, risk of asset damage or
          theft, and lack of voting rights. The adverse economic effects of the
          COVID-19 pandemic remain unknown and could materially impact
          investments on the platform. Investors should be aware that an
          investment in an offering constitutes an investment in a specific
          series and not in any of the AskLego Issuers or the underlying
          asset(s). The risks provided in the respective offering materials
          should be thoroughly reviewed for a comprehensive discussion of risk.
          From time to time, the AskLego Issuers may seek to qualify additional
          series offerings of securities under Regulation A. For offerings not
          yet qualified, no solicitation of money or other consideration is
          being made. If sent in response, such solicitation will not be
          accepted. No offer to buy securities of a particular offering can be
          accepted until an offering statement filed with the Securities and
          Exchange Commission (the “SEC”) relating to that series has been
          qualified by the SEC. Any such offer may be withdrawn or revoked,
          without obligation or commitment of any kind, at any time before
          notice of acceptance is given after the date of qualification by the
          SEC. An indication of interest involves no obligation or commitment.
          Investment overviews provided herein are summaries of the purpose and
          principal business terms of the investment opportunities. These
          summaries are intended for informational purposes only and do not
          purport to be complete. Each overview is qualified in its entirety by
          reference to the more detailed discussions contained in the respective
          offering circular filed with the SEC. None of the AskLego Issuers
          offer refunds after an investment has been made. Prospective investors
          are advised to review the relevant offering materials and subscription
          documentation for more information. It should be noted that an active
          trading market for any series of any of the AskLego Issuers membership
          interests may not develop or be sustained. If an active public trading
          market for such series interests does not develop or is not sustained,
          it may be challenging or impossible for investors to resell their
          interests at any price. Even if an active market develops, the market
          price could decline below the amount paid for interests. There is no
          assurance that the AskLego platform will provide an active market for
          resales of such series interests. Without the AskLego platform, it may
          be difficult or impossible for investors to dispose of their
          interests. If the market develops for any series of interests offered
          on the AskLego Platform, the market price of such interests could
          fluctuate significantly for various reasons, including reasons
          unrelated to performance, the underlying assets, or any series.
          Factors such as reports by industry analysts, investor perceptions,
          announcements by competitors regarding their performance, as well as
          general economic and industry conditions, could contribute to market
          fluctuations. For additional risk factors and disclaimer information,
          prospective investors are strongly encouraged to revie w the
          communications disclaimer provided by Exponential Capital LLC.
        </p>
      </div>
    </div>
  );
};

export default Fotter;
