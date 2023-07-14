import { useState } from 'react'
import './style.css'
import ChessBoard from '../ChessBoard';
import { Typography , Input as AntInput, Space, ColorPicker, Button} from 'antd';
import { SettingOutlined } from '@ant-design/icons';
const {Title} = Typography
// eslint-disable-next-line react/prop-types
function Input({title}){
    // eslint-disable-next-line no-unused-vars
    const [value, setValue] = useState(0);
    const [color1, setColor1] = useState('black');
    const [color2, setColor2] = useState('white');
    const [showSetting, setShowSetting] = useState(false);
    const styleSpace = {
        display: 'flex', 
        justifyContent: 'center'
    }
    function getSize(e){
        // eslint-disable-next-line no-const-assign
        setValue(Number(e.target.value));
    }
    
    function getColor1(newColor){
        // eslint-disable-next-line no-const-assign
        setColor1(newColor.toHexString());
    }
    function getColor2(newColor){
        // eslint-disable-next-line no-const-assign
        setColor2(newColor.toHexString());
    }
    
    function changeColor(){ 
        let t = color1;
        setColor1(color2);
        setColor2(t);     
    }
    function handleShow(){
        setShowSetting(!showSetting);
    }
    function handleInput(e){
        if(e.key === '.'||e.key === ','){
          e.preventDefault();
        }
    }
    return (
        <>
            <Title style={{margin:15}}>{title}</Title>
            <Space size='middle' direction='vertical' style={styleSpace}>
                <Space style={styleSpace}>
                    <Button onClick={handleShow}><SettingOutlined />Customize size & color</Button>
                </Space>
                {showSetting? 
                    <Space size='large' style={styleSpace}>
                        <AntInput onKeyDown={handleInput} type="number" min={1} max={25} value={value} onChange={getSize}/> 
                        <ColorPicker value={color2} onChange={getColor2}/>
                        <ColorPicker value={color1} onChange={getColor1}/>
                    </Space>
                : 
                ""}
                
                <div className='chessboard' onClick={changeColor}>
                    <ChessBoard key='chess' size={value} color1={color1} color2={color2}/>
                </div>
            </Space>
        </>
    )
}
export default Input