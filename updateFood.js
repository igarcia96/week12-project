updateFoodItem(event) {
    event.preventDefault();
    const updateFood = this.State.food;
    const updatecost = this.state.cost;
    const updateFoodItem = object.assign({}, this.state.foodItem, { food: updatedFood, cost: updatedCost })
    const foodItem = this.state.foodItem.map((foodItem) => (foodItem.id === this.state.foodItem.id ? updatedFoodItem: foodItem));
    this.setstate({ food:'', cost:'', foodItem: foodItem})
}