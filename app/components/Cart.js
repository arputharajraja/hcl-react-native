// Cart.js
import React from 'react';
import {View, Button, Text, Alert} from 'react-native';

import CartList from './CartList';

export default class Cart extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [
                {id: 1, name: 'Product 1', price: 100, qty: 1}
            ],
            amount: 0, 
            totalItems: 0
        }
    }

    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        const item = {
            id: id, 
            name: 'Product ' + id,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }
        //TODO
        // React is a view lib, 
            // compare virtual dom
        // Model? Data, compare models
        // Good
        // Immutable

        const items = [...this.state.items, item]
         
        // set the next items, 
        // call render method
        this.setState({
            items: items
        })
    }

    empty = () => {
        //TODO
        const items = [];
        this.setState({
            items: items
        })
    }
    
    dummy = () => {
        //TODO
        this.setState({
            flag: true
        })
    }

    // child to parent
    // callback
    // parent shall pass a function to child as prop
    // child shall call parent function
    removeItem = (id) => {
        console.log('removeitem called', id);
        //return all the items except one with id ==
        const items = this
                     .state.items.filter(item => item.id != id);

        this.setState({items: items});
    }

    updateItem = (id, qty) => {
        console.log('updateItem called', id, qty);
        //TODO
    }

    render() {
        console.log('Cart render');
        return (
            <View>
                <View>
                    <Button title="Add"
                            onPress={this.addItem} />

                    <Button title="Empty"
                            onPress={this.empty} />

                    <Button title="Press"
                            onPress={this.dummy} />
                </View>
                {/* JSX comment */}
                <View>
                    <CartList items={this.state.items}  
                              removeItem={this.removeItem}
                              updateItem={this.updateItem}
                    />
                </View>
            </View>
        )
    }
}