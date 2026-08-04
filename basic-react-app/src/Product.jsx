import './Product.css'
import Price from './Price';
function Product({title, description, idx}){
    let oldPrices = ["11,500", "12,760", "8,987", "654"];
    let newPrices = ["8,000", "10,000", "4,000", "250"];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <h5>{description}</h5>
            <Price oldPrice = {oldPrices[idx]} newPrice = {newPrices[idx]}/>
        </div>
    );
}
export default Product;