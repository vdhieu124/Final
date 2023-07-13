import Button from './Button/index'
import Result from './Result'
import './Calculator.css'
import { useState } from 'react'
import { Typography } from 'antd'
const {Title} = Typography

let operands = [];
let operator = null;
// eslint-disable-next-line react/prop-types
function Calculator({title}) {
    const [display, setDisplay] = useState("");
    const [result, setResult] = useState("");
    const [background1, setBackground1] = useState("");
    const [background2, setBackground2] = useState("");
    const [background3, setBackground3] = useState("");
    const [background4, setBackground4] = useState("");

    function clickButton(value){
        setDisplay(`${display}${value}`);
    }    

    function clickOperator(value){
        if (operands.length === 0 && display != "") {
            operator = value;
            switch(value){
                case '+':
                    setBackground4("#965e06"); break;
                case '-':
                    setBackground3("#965e06"); break;
                case '×':
                    setBackground2("#965e06"); break;
                case '÷':
                    setBackground1("#965e06"); break;
            }

            operands.push(+display);
            setDisplay("");
        } else if(operands.length === 1 && operator != null){
            if(display != ""){
                setBackground1("");
                setBackground2("");
                setBackground3("");
                setBackground4("");
                operands.push(+display);
                let result = evaluate(operands, operator);
                operands.length = 0;
                operands.push(+result);
                operator = value;
                setDisplay("");
                setResult(result);
                switch(value){
                    case '+':
                        setBackground4("#965e06"); break;
                    case '-':
                        setBackground3("#965e06"); break;
                    case '×':
                        setBackground2("#965e06"); break;
                    case '÷':
                        setBackground1("#965e06"); break;
                }
            }else {
                setBackground1("");
                setBackground2("");
                setBackground3("");
                setBackground4("");
                operator = value;
                switch(value){
                    case '+':
                        setBackground4("#965e06"); break;
                    case '-':
                        setBackground3("#965e06"); break;
                    case '×':
                        setBackground2("#965e06"); break;
                    case '÷':
                        setBackground1("#965e06"); break;
                }
            }
        }
        
    }
    function evaluate(operands, operator){
        if (operands.length == 2 && operator != null) {
            // eslint-disable-next-line no-undef
            // throw new Error("");
            switch(operator) {
                case '+':
                    return operands[0] + operands[1];
                case '-':
                    return operands[0] - operands[1];
                case '×':
                    return operands[0] * operands[1];
                case '÷':
                    if(operands[1] != 0){
                        return operands[0] / operands[1];
                    } else{
                        return operands[1];
                    }
            }
        }
    }
    const buttons = [
        {value: 7, onClick: () => {clickButton(7)}},
        {value: 8, onClick: () => {clickButton(8)}},
        {value: 9, onClick: () => {clickButton(9)}},
        {value: '÷', onClick: () => {clickOperator('÷')}, color: `${background1}`},
        {value: 4, onClick: () => {clickButton(4)}},
        {value: 5, onClick: () => {clickButton(5)}},
        {value: 6, onClick: () => {clickButton(6)}},
        {value: '×', onClick: () => {clickOperator('×')}, color: `${background2}`},
        {value: 1, onClick: () => {clickButton(1)}},
        {value: 2, onClick: () => {clickButton(2)}},
        {value: 3, onClick: () => {clickButton(3)}},
        {value: '-', onClick: () => {clickOperator('-')}, color: `${background3}`},
        {value: 0, onClick: () => {clickButton(0)}},
        {value: 'C', onClick: () => {
            setDisplay("");
            setResult("");
            operands.length = 0;
            operator=null;
            setBackground1("");
            setBackground2("");
            setBackground3("");
            setBackground4("");
        }},
        {value: '=', onClick: equalClick},
        {value: '+', onClick: () => {clickOperator('+')}, color: `${background4}`},
        {value: '← Backspace', onClick: () => {setDisplay(`${display}`.slice(0,-1))}}
    ]

    function equalClick() {
        if(operands.length === 1 && operator != null){
            operands.push(+display);
            let result = evaluate(operands, operator);
            operands.length = 0;
            operands.push(+result);
            setDisplay("");
            setResult(result);
            setBackground1("");
            setBackground2("");
            setBackground3("");
            setBackground4("");
        }
    }
    return(
        <>   
            <Title style={{margin:15}}>{title}</Title>
            <div className='Calculator'>
                <Result display={display} result={result}/>
                <div>
                    {buttons.map((b, idx) =>
                        <Button key={idx} value={b.value} onClick={b.onClick} color={b.color}/> 
                    )}
                </div>
            </div>
        </>
    )
}
export default Calculator