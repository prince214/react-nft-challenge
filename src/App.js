import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import axios from "axios";
import PunkList from "./Components/PunkList";
import Main from "./Components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(1);
  useEffect(() => {
    const getMyNFTs = async () => {
      const openSeaData = await axios.get(
        `https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=${process.env.REACT_APP_NFT_ACCOUNT_ADDRESS}&order_direction=asc`,
        { crossdomain: true }
      );
      setPunkListData(openSeaData.data.assets);
    };
    return getMyNFTs();
  }, []);
  return (
    <div className="app">
      <Header />
      {(punkListData.length > 0) &&
      (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
