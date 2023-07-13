/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Cell from '../Cell'
import './style.css'

 function Row({rowType, size, color1, color2}){
    
    var rows = Array.from(Array(size).keys())
    return(
        <div className='row'>
    {
        rows.map((index,key) =>{
            if(rowType == 'even'){
                if(index%2 === 1){
                    return(
                        <Cell key={key} color1={color1} color2={color2} cellType={"black"}/>
                    );}
                if(index%2 === 0){
                    return(
                        <Cell key={key} color2={color2} color1={color1} cellType={"white"}/>
                    );}
            }
            else{
                if(index%2 === 1){
                    return(
                        <Cell key={key} color2={color2} color1={color1 } cellType={"white"}/>
                    );}
                if(index%2 === 0){
                    return(
                        <Cell key={key} color1={color1} color2={color2 } cellType={"black"}/>
                    );}
            }
                })
            
    }
    </div>

    )
}
export default Row