// CartItem.js
import React from 'react';
import {View, Button, Text, Alert} from 'react-native';

// PureComponent 
// is has shouldComponentUpdate already implemented
// shallow compare: check two references
// compares nextProps with this.props
// compare nextState with this.state
// return true if any difference, then it call render
// return false if no difference, then no render call

export default class CartItem extends React.PureComponent {
    constructor() {
        super();
        console.log('CartItem cons')
    }

    componentWillMount() {
        console.log('CartItem will mount called');
    }

    componentDidMount() {
        console.log('CartItem did mount');
    }
 
    componentWillUnmount() {
        console.log('CartItem will unmount');
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
    <Button onPress={ () => this.props.removeItem(item.id)   }
            title="Remove" />
    
</View>
</View>
        )
    }
}