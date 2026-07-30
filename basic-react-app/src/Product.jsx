import './Product.css'
function Product({title,price = 1,features}){
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h3>Price : {price}</h3>
            <p>{features}</p>
        </div>
    );
}
export default Product;