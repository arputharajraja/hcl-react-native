Problem 1:
    Parent Component L1 (data)
        child l2
            child l3
                child ..
                        child L10 (data)


Problem 2:
    Stack 
        Either
            Cart  (data/state)
            Checkout (data)


OOP

class Calculator {
    int sum = 0;
    // impure function. given same arguments, doesn't return same result
    int add(int value) {
        sum += value; //mutating
        return sum;
    }
}
--
class Cart {
    items: [];
    addItem(item) {
        this.items.push(item) //mutating
        return this.items;
    }
}
========

Source x Lines => 5 to 10 Test more lines

calc = new Calculator()
calc.add(10); // 10
calc.add(10); // 20

file.1..N + objects

calc.add(10);  
calc.add(2); 

calc.add(10);  
calc.add(2); 
calc.add(10);  
calc.add(2); 
calc.add(10);  
calc.add(2); 
calc.add(10);  
calc.add(2); 
calc.add(10);  
calc.add(2); 
calc.add(10);  
calc.add(2); 
calc.add(10);  
calc.add(2); 

calc.add(10);  //
calc.add(2); 

// pure function
function add(state, value) {
    return state + value;
}

function addItem(items, item) {
    return [...items, item]
}

function CartItem(props) {
    let {item} = props;
    <Text> {item.name} </Text>
}


add(10, 20) // 30
add(10, 20) // 30

addItem([], {id: 1}) // [{id: 1}]


class Store {
    state = undefined

    createStore(reducerFn) {
        this.reducer = reducerFn;
        this.state = reducer(this.state, {type: '...INIT'})
        this.state ==> {counter: 0}
    }

    dispatch(action) {
        this.state = reducer(this.state, action)
        this.state => {counter: 10}
    }

    getState() {
        return this.state;
    }
}

store = new createStore(counterReducer);
store.dispatch({type: 'INC', payload: {value: 10}})



INITIAL_STATE = []
countersReducer(state= INITIAL_STATE, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state.map(c => c + action.payload.value)
    }
}

--

createStore
dispatch
getState
unsub = subscribe()
combineReducer
applyMiddleware