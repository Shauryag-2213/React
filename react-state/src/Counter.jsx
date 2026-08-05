export default function Counter(){
    let count = 0;
    function addCount(){
        count += 1;
        console.log(count)
    }
        return(
            <div>
           <h1>Count = {count}</h1> 
           <button onClick = {addCount}>Click to Increase Count</button>
            </div>
        );
}