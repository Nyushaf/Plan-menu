const ShoppingList = ({myList}) => {
    if(!Array.isArray(myList)) {
        return console.log(myList);
    }
    return(
        <div>
            <h2>My Shopping List</h2>
            <div className="container-shoppingList">
                <ol>
                {myList.map((item, index) => (
                    <li key = {index}><span className="item">{item}</span></li>
                ))}
                </ol>
                <p>You have <span className="item">{myList.length}</span> items in Shopping list</p>
            </div>
            
        </div>
    )
}
export default ShoppingList;