import './Product.css'
function Product({title,price = 1,features}){
   let isDiscount = price > "30,000" ? "Discount of 5%" : "";
   let styles = {backgroundColor : price > "40,000" ? "white" : ""}
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h3>Price : {price}</h3>
            <p>{isDiscount}</p>
        </div>
    );
}
export default Product;