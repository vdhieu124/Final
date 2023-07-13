import './style.css'
// eslint-disable-next-line react/prop-types
function Button({value, onClick, color }){
    return(
        <button className='cal' style={{backgroundColor: `${color}` }} onClick={onClick}>{value}</button>
    )
}
export default Button