// CartItem.js
import React from 'react';
import {View, Button, Text, Alert} from 'react-native';

export default class CartItem extends React.Component {
    constructor() {
        super();
    }
 
    render() {
        const {item} = this.props ;
        console.log('CartItem render', item.id);

        return (
            <View>
               <View>
                <Text> {item.name}</Text>
                <Text> ${item.price}</Text>
                <Text> Qty: {item.qty}</Text>
               </View>
               <View>

               </View>
            </View>
        )
    }
}