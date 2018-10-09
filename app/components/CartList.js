// CartList.js
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CartItem from './CartItem';

export default class CartList extends React.Component {
    constructor() {
        super();
    }
 
    render() {
        console.log('CartList render');
        const {items} = this.props;

        // inside JSX/XML, we cannot write statements for, while, if
        // but can write expressions
        return (
            <View>
               <ScrollView>
                {
                    items.map (item => (
                        <CartItem item={item} 
                                  key={item.id} />
                    ))
                }

               </ScrollView>
               
            </View>
        )
    }
}