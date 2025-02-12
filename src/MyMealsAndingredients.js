const MyMealsAndIngredients = ({selectedDay, updateDay}) => {

    const editMyMeal = (myInput, value) => {
        updateDay({
            ...selectedDay,
            [myInput]: value
        })
    }
   

    if (!selectedDay) return <p> Plan you week ahead of time!</p>

    
    return <div className="whole-plan"> 
    <div className="meal-editing"> 
    <input
    type="text"
    className="myInput"
    placeholder="Today is...."
    id ="title"
    value={selectedDay.title}
    onChange={(e) => editMyMeal("title", e.target.value)}
    />

    <textarea
    placeholder="Write your plan here"
    id="mealForDay"
    value={selectedDay.mealForDay}
    onChange = {(e) => editMyMeal("mealForDay", e.target.value)}
    />

   <textarea
    placeholder="List of ingredients"
    id="mealForDay"
    value={selectedDay.ingredients}
    onChange = {(e) => editMyMeal("ingrediens", e.target.value)}
    />
    </div>
</div>
}


export default MyMealsAndIngredients;