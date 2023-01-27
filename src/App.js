import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AntDesign from "./1.Crypto-Converter-Components/AntDesign";

const App = () => {
  const apiUrl = `https://api.coingecko.com/api/v3/exchange_rates`;

  const firstValue = "Bitcoin";
  const secondValue = "Ether";
  const [cryptoList, setCryptoList] = useState([]);
  const [defaultFirstValue, setDefaultFirstValue] = useState(firstValue);
  const [defaultSecondValue, setDefaultSecondValue] = useState(secondValue);
  const [inputValue, setInputValue] = useState(0);
  const [defaultConversion, setdefaultConversion] = useState(
    "1 Bitcoin = 2 Ether"
  );
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    //console.log(inputValue, defaultFirstValue, defaultSecondValue);
    if (cryptoList.length > 0) {
      const firstObj = cryptoList.find((item) => {
        return item.value === defaultFirstValue;
      });
      const secondObj = cryptoList.find((item) => {
        return item.value === defaultSecondValue;
      });
      console.log(firstObj, secondObj);
      const updatedValue = ((secondObj.rates)*inputValue/(firstObj.rates)).toFixed(4);
      console.log(updatedValue);

      setdefaultConversion(`${inputValue} ${defaultFirstValue} = ${updatedValue} ${defaultSecondValue}`)
    }
  }, [inputValue, defaultFirstValue, defaultSecondValue]);

  async function fetchData() {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    const actData = jsonData.rates;
    // actData is an Array of objects so we use Objects.entries() method

    const tempArray = [];
    Object.entries(actData).forEach((item) => {
      const tempObj = {
        value: item[1].name,
        label: item[1].name,
        rates: item[1].value,
      };
      tempArray.push(tempObj);
    });

    setCryptoList(tempArray);
  }

  function handleInput(e) {
    setInputValue(e);
  }

  function handleS1(e) {
    setDefaultFirstValue(e);
  }

  function handleS2(e) {
    setDefaultSecondValue(e);
  }

  return (
    <div>
      <AntDesign
        names={cryptoList}
        defaultFirstValue={defaultFirstValue}
        defaultSecondValue={defaultSecondValue}
        handleInput={handleInput}
        handleS1={handleS1}
        handleS2={handleS2}
        defaultConversion={defaultConversion}
      />
    </div>
  );
};

export default App;
