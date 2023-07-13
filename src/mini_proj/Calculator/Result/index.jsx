import './style.css'

// eslint-disable-next-line react/prop-types
function Result({result, display}){
    return(
        <div className='output'>
            <div className='result'>{result}</div>
            <div className='operand'>{display}</div>
        </div>
    )
}
export default Result

