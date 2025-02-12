


const MyList = ({ mealPlans, addMeal, deleteDay, setSelectedDay,selectedDay }) => {
    return (
      <div>
        <div>
          <h1> Weekly Meal Plan Ideas</h1>
          <button className="button-add" onClick={addMeal}> Add </button>
        </div>
        <div>
          {mealPlans.map(({id, title, mealForDay}, index) => (
            <div key={index}  className={`meal ${id === selectedDay ? "selected" : "default"}`}
            onClick={() => setSelectedDay(id)}>
              <p className="title">{title}</p>
              <p className="titleone">{mealForDay.substring(0,60)}</p>
              <button className="button-delete" onClick={() => deleteDay(id)}> Delete </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MyList;
  