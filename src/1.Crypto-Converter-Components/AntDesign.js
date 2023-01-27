import React from "react";
import { Card } from "antd";
import { Input } from "antd";
import { Select } from 'antd';
import { BsCoin } from 'react-icons/bs'

function AntDesign({names, defaultFirstValue, defaultSecondValue, handleInput, handleS1,handleS2,defaultConversion}) {

   return (
    <div className="container">
      <Card className="card" title={<><div className="coin"><BsCoin/></div><h1>Crypto Converter</h1></>}>
        <Input onChange={(e) => handleInput(e.target.value)} type="number" placeholder="Enter a Number" className="input-field" />
        <div className="price-tag">
          <Select className="selector" onChange={(value) => handleS1(value)} defaultValue={defaultFirstValue} style={{ width: 120}} options={names}/>
          <Select className="selector" onChange={(value) => handleS2(value)} defaultValue={defaultSecondValue} style={{ width: 120}} options={names} />
        </div>
        <div className="display">
          <p>{defaultConversion}</p>
        </div>
      </Card>
    </div>
  );
}

export default AntDesign;
