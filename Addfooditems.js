import React from 'react'

const AddfoodItemForm = props => {
    return (
        <form onSubmit={ props.addfoodItem } className="col-sm-4">
            <div>
                <div>
                    <label className="text-while">Food name</label>
                    <input type="text" name= "food" value={props.food} onchange={ props.handleInputChange}/>
                </div>
                <div>
                    <lable className= "text-while">Food.cost</lable>
                    <input type="number" name= "cost" value={props.cost} onchange={ props.handleInputChange}/>
                </div>
                <button> Add food item </button>
            </div>
        </form>
    )
}