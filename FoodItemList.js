const FoodItemList = (props) => {
    return(
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Food</th>
                    <th>Cost</th>
                    <th>Action</th>
                </tr>
            </thead>
        <tbody>
            {
                props.foodItem.length > 0 ? (
                    props.foodItems.map((foodItem) => (
                        <tr key={ foodItem.id}>
                            <td>{ foodItem.id }</td>
                            <td>{ foodItem.food }</td>
                            <td>{ foodItem.cost }</td>
                            <td>
                                <button> className= "btn-primary ml-2" onClick={() => props.editfoodItem(foodItem) } Edit </button>
                                <button> className= "btn btn-danger ml-2" onClick={() => props.deletFoodItem(foodItem.id) } Delet </button>
                                <button> className= "btn btn-info ml-2" onClick={() => props.boughtfoodItem(foodItem) } </button>
                                    { foodItem.status ? 'bought' : 'pending '}
                            </td>
                        </tr>
                    )
                )
            ) : (
                <tr>
                    <td> colSpan= {3} No food for a lazy man</td>    
                </tr>
            )    
        }
    </tbody>
    </table>
    );
}    
