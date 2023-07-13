import { useState } from 'react'

import './UnitConverter.css'
import {Typography, Button, Input, Space} from 'antd';
const {Title, Text} = Typography;

// eslint-disable-next-line react/prop-types
function UnitConverter({title}) {
  const [vnd, setVnd] = useState(0);
  const [usd, setUsd] = useState(0);
  const [mode, setMode] = useState(true);


  function changeMode(){
    setVnd(0);
    setUsd(0);
    setMode(!mode)
  }
  function toVnd(e){
    setVnd(e.target.value * 24000);
    setUsd(e.target.value);
  }
  function toUsd(e){
    setUsd(e.target.value / 24000);
    setVnd(e.target.value);
  }
  return (
    <>
      <Title style={{margin:15}}>{title}</Title>
      <div className='unit-convert'>
        <Title level={3}>{mode?'Convert VND to USD':'Convert USD to VND'}</Title>
        <Space direction='vertical'>
          <Space size='large'>
            <Text strong style={{display: 'block',width:40}}>
              {mode? "VND: " : "USD: "}
            </Text>
            <Input style={{width: '200px'}} type="number" value={mode? vnd:usd} onChange={mode? toUsd:toVnd} suffix={mode? 'vnđ' : '$'}/>
          </Space>
          <Space size='large'>
            <Text strong style={{display: 'block',width:40}}>
              {mode? "USD: " : "VND: "}
            </Text>
            <Input style={{width: '200px'}} type="number" value={mode? usd:vnd} readOnly suffix={mode? '$' : 'vnđ'}/>
          </Space>
          <Space><Button onClick={changeMode}>{mode? 'Change USD → VND':'Change VND → USD'}</Button></Space>
        </Space>

      </div>
      
    </>
  )
}

export default UnitConverter
