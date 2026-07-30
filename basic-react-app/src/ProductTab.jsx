import Product from './Product.jsx'

function ProductTab() {
    let options=["Hi-Tech","Durable","Handy"];
    
    return(
        <div>
            <Product title = "Phone" price = "40,000" features = {options} />
            <Product title = "Tab" price = "50,000"/>
        </div>
    );
}
export default ProductTab;
