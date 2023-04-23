import React from 'React';

class App extends React.component

    constructor(){
        super();
        this.state = {
            id: null,
            userId: 1,
            food: '',
            cost: '',
            status: false,
            foodItem: {},
            foodItems: [],
            editing: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addfoodItem = this.addfoodItem.bind(this);
}

handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setstate({
        [name]:value
    })
}


addfoodItem(event){
    event.preventDefault()
    if (this.state.food) return;
    const foodItem = {
        id: this.state.foodItem.length + 1,
        food: this.state.food,
        cost: this.state.cost,
        userId: this.state.userId,
        statu: this.state.status
    };

    this.setState({
        food: '',
        cost: '',
        foodItem: foodItem,
        fooditem: [...this.state.foodItems, foodItem]
    })
  
    
}