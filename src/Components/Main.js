import React, { useState, useEffect } from "react";
import "./Main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreLogo from "../assets/owner/more.png";

const Main = ({ punkListData, selectedPunk }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);
  return (
    <div className="main">
      <div className="main__container">
        <div className="punk__highlight">
          <div className="punk__container">
            <img
              className="selected__punk"
              src={activePunk.image_original_url}
              alt="High lighted Punk"
            />
          </div>
        </div>
        <div className="punk__box">
          <div className="punk__details" style={{ color: "white" }}>
            <div className="title">
              {activePunk.name}
              <span className="item__number">•#{activePunk.token_id}</span>
            </div>
          </div>
          <div className="owner">
            <div className="owner__image__container">
              <img src={activePunk.owner.profile_img_url} alt="Owner" />
            </div>
            <div className="owner__details">
              <div className="owner__handle__name">
                {activePunk.owner.address}
                <a
                  href={activePunk.permalink}
                  target="blank"
                  className="buy__btn"
                >
                  Buy NFT
                </a>
              </div>
              <div className="owner__handle">@princeparaste</div>
            </div>

            <div className="owner__link">
              <img src={instagramLogo} alt="instagram" />
            </div>
            <div className="owner__link">
              <img src={twitterLogo} alt="twitter" />
            </div>
            <div className="owner__link">
              <img src={moreLogo} alt="more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
