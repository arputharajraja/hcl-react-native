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
    }

    empty = () => {
        //TODO
    }
    
    dummy = () => {
        //TODO
        this.setState({
            flag: true
        })
    }

    removeItem = (id) => {
        //TODO
    }

    updateItem = (id, qty) => {
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
                    <CartList items={this.state.items}  />
                </View>
            </View>
        )
    }
}