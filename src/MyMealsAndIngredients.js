const MyMealsAndIngredients = ({selectedDay, updateDay, myShoppingList}) => {

    const editMyMeal = (myInput, value) => {
        updateDay({
            ...selectedDay,
            [myInput]: value
        })
    }

    if (!selectedDay) return <h3>Create Your Weekly Menu Today</h3>
    return(
        <div className="container-plan">
            <div className="meal-editing">
                <input 
                type="text"
                className="myInput"
                placeholder="Today is..."
                id="title"
                value={selectedDay.title}
                onChange={(e) => editMyMeal("title", e.target.value)}
                />

                <textarea 
                placeholder="Write your meal plan here..."
                id="mealForADay"
                value={selectedDay.mealForADay}
                onChange={(e) => editMyMeal("mealForADay", e.target.value)}
                />

                <textarea 
                placeholder="List of ingredients..."
                id="ingredients"
                value={selectedDay.ingredients}
                onChange={(e) => myShoppingList("ingredients", e.target.value)}
                />
            </div>
        </div>
    )
}
export {MyMealsAndIngredients};