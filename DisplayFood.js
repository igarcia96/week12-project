render() {
    const { cost, food, foodItem, editing } = this.State;
        return(
            <div className= "App">
                <div className= "row App-main">
                    <FoodItemList
                        foodItem= {foodItem}
                        deletefoodItem= {this.deletefoodItem}
                        boughtfoodItem= {this.boughtfoodItem}
                        editfoodItem= {this.editfoodItem}
                    />    
                </div>
                <div className= "row App-main">
                    {
                        editing ? (
                        <EditFoodItemform
                        food={this.state.food}
                        cost={this.state.cost}
                        handleInputChange={this.handleInputChange}
                        setEditing={this.setediting}
                        updatefoodItem={this.updatefoodItem}
                        />

                    ) : (
                    <AddfoodItemform
                        food={this.state.food}
                        cost={this.state.cost}
                        handleInputChange={this.handleInputChange}
                        addfoodItem={this.addfoodItem}
                        />
                    )
                }
                </div>
            </div>
        );

}