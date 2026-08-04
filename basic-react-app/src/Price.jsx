export default function Price({oldPrice, newPrice}){
     let nStyles = {
            textDecorationLine : "line-through",
        }
    let oStyles = {
        fontWeight : "Bold",
    }
    return (
        <div>
            <span style={nStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={oStyles}>{newPrice}</span>
        </div>
    );
}