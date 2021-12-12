import React from "react";
import "./CollectionCard.css";
import weth from '../assets/weth.png'

function CollectionCard({ id, name, traits, image }) {
  return (
    <div className="collection__card">
      <img src={image} alt="NFT Logo" />
      <div className="details">
        <div className="name">
          {name} <div className="id">•#{id}</div>
        </div>
        <div className="price__container">
          <img
            src={weth}
            className="wethImage"
            alt="weth"
          />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
