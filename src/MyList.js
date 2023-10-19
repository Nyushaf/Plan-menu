const MyList = ({addMeal, mealPlans, removeDay, selectedDay, setSelectedDay}) => {
    
    return(
        <div className="container-my-list">
            <div>
                <h1>Weekly Meal Plan Ideas</h1>
                <button className="btn-add" onClick={addMeal}>Add</button>
            </div>
            <div className="day-container">
                {mealPlans.map(({title, id, mealForADay}) => {
                    return(
                    <div key={id} className={`${id === selectedDay ? "selected" : "default"}`} onClick={() => setSelectedDay(id)}>
                        <p className="title">{title}</p>
                        <p className="meal">{mealForADay.substring(0, 60)}</p>
                        <button className="btn-delete" onClick= {()=> removeDay(id)}>Delete</button>
                    </div>
                )})}
            </div>
        </div>
    )
}
export default MyList;