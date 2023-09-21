const ShoppingList = ({myList}) => {
    return(
        <div>
            <h2>My Shopping List</h2>
            <div className="container-shoppingList">
                <ul>
                {myList.map((item, index) => (
                    <li key = {index}>{item}</li>
                ))}
                </ul>
            </div>
            
        </div>
    )
}
export default ShoppingList;