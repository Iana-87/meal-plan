
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngredients from './MyMealsAndingredients';

function App() {

  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);
  const [selectedDay, setSelectedDay] = useState(false);

  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])

  const addMeal = ()=> {
    const newMeal = {
      title: "Today is...",
      id: uuid(),
      mealForDay: "",
      ingredients: ""
     }
    setMealPlans([newMeal, ...mealPlans])
  }
  
  const deleteDay = (mealId) => {
    setMealPlans(mealPlans.filter(({id}) => id !== mealId))
  }

 const updateDay = (myUpdatedMeal) => {
  const updatedMeal = mealPlans.map((mealPlan) => {
    if (mealPlan.id === myUpdatedMeal.id) {
      return myUpdatedMeal;
    }
    return mealPlan;
  })
  setMealPlans(updatedMeal)
 }

 const getActiveMeal = () => {
  return mealPlans.find(({id}) => id === selectedDay)
 }

  return (
    <div className="App">
    <MyList   
    mealPlans={mealPlans} 
     addMeal={addMeal}
      deleteDay ={deleteDay}
      selectedDay={selectedDay}
      setSelectedDay = {setSelectedDay}/>
    <MyMealsAndIngredients
    selectedDay={getActiveMeal()}
    updateDay={updateDay}/>
     
    </div>
  );
}

export default App;
