const ShoppingList = ({myList}) => {
    if(!Array.isArray(myList)) {
        return console.log(myList);
    }
    return(
        <div className="container-shopping-list-position">
            <div className="btn-position">
                <h2 className="list-position">My Shopping List</h2>
            </div>
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