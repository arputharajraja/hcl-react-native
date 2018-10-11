// App.js
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Counter from './app/components/Counter';
import Address from './app/components/Address';
import Cart from './app/components/Cart';
 

/*
  App is a parent component
  Counter, Address are child components
*/
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true
    }
  }

  toggle = () => {
    this.setState({
      showCounter: !this.state.showCounter
    })
  }
 
  render() {
    return (
      
     <View style={styles.container}>
        <Text>Open up App.js  React Native!</Text>

        <Cart />
        {
          this.state.showCounter && <Counter startValue={100} />
        }

        <Button onPress={this.toggle}
                title={this.state.showCounter?"Hide": "Show"}
        >
          
        </Button>

        <Address title="Office Address"
                 address= { {street: 'Forum', 
                             city: 'BLR',
                             state: 'KA', 
                             pincode: 560001} }  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
