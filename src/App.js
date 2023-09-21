import { useEffect, useState } from 'react';
import './App.css';

import { MyMealsAndIngredients } from './MyMealsAndIngredients';
import MyList from './MyList';
import uuid from 'react-uuid';
import ShoppingList from './ShoppingList';

function App() {
  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);
  const [selectedDay, setSelectedDay] = useState(false);
  const [myList, setMyList] = useState([]);

  const myShoppingList = () => {
    setMyList([selectedDay.ingredients, ...myList])
  }

  const addMeal = () => {
    const newDay = {
      title: "Today is...",
      id: uuid(),
      mealForADay: "",
      ingredients: ""
    }
    setMealPlans([newDay, ...mealPlans]);
  }

  const deleteDay = (id) => {
    setMealPlans(mealPlans.filter(day => day.id !== id))
  }

  const updateDay = (myUpdateMeal) => {
    const updateMeals = mealPlans.map((mealPlan) => {
      if (mealPlan.id === myUpdateMeal.id) {
        return myUpdateMeal;
      }
      return mealPlan;
    })
    setMealPlans(updateMeals)
  }

  const getActiveMeal = () => {
    return mealPlans.find(({id})=> id === selectedDay)
  }

  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])

  return (
    <div className="App">
      <MyList
      addMeal = {addMeal}
      mealPlans = {mealPlans}
      removeDay = {deleteDay}
      selectedDay = {selectedDay}
      setSelectedDay = {setSelectedDay}/>
      <MyMealsAndIngredients
      selectedDay = {getActiveMeal()}
      updateDay = {updateDay}
      myShoppingList = {myShoppingList}/>
      <ShoppingList 
      myList = {myList}/>
    </div>
  );
}

export default App;
