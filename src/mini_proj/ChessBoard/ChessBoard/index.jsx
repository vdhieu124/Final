/* eslint-disable no-unused-vars */
import Row from '../Row'
import './style.css'

// eslint-disable-next-line react/prop-types
function ChessBoard({size, color1, color2}) {
    
    var chessBoards = Array.from(Array(size).keys())
    return(
        <>
            {
                chessBoards.map((index,key) =>{
                    if(index%2 === 1){
                        return(
                            <>
                                <Row key={`row${key}`} rowType={'even'} size ={size} color1={color1} color2={color2}></Row>
                            </>
                        )
                    }
                    if(index%2 === 0){
                        return(
                            <>
                                <Row key={`row${key}`} rowType={'odd'} size ={size} color1={color1} color2={color2}></Row>
                            </>
                        )
                    }
                })
            }
        </>
    )
}
export default ChessBoard