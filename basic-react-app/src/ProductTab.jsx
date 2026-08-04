import Product from './Product.jsx'
function ProductTab() {    
    let newStyles = {
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItems : "center",
        gap: "20px",
    }
    return(
        <div style={newStyles}>
            <Product title = "Product 1" description= "Description 1" idx = {0}/>
            <Product title = "Product 2" description= "Description 2" idx = {1}/>
            <Product title = "Product 3" description= "Description 3" idx = {2}/>
            <Product title = "Product 4" description= "Description 4" idx = {3}/>
        </div>
    );
}
export default ProductTab;
