import './style.css'
// eslint-disable-next-line react/prop-types
function Cell({cellType, color1, color2}){
    const styleObj = {
        backgroundColor: cellType === 'white'?color1:color2
    }
    return (
        <div className={cellType} style={styleObj}></div>
    )
    
}
export default Cell