deleteFoodItem(id) {
    const foodItem = this.StaticRange.foodItems.filter( item => item.id !== id );
    this.setState({foodItems: foodItems});
}