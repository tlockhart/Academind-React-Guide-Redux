// Step 1: Import Redux Toolkit (RTK)
const redux = require("@reduxjs/toolkit");
// const redux = require("redux");

// Step 2: Create Reducer:  You can think of a reducer as an event listener which handles events based on the received action (event) type.
// Note give state a default value that will be executed the first time the app runs
// Note: The action is the object which was dipatched
const counterReducer = ( state = { counter: 0, name: "John Doe" }, action) => {
  console.log("Action:", action);
  console.log("Action State:", state)
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        counter: state.counter + 1,
      };
      case "UPDATE_NAME":
      return {
        counter: state.counter,
        name: action.payload.name,
      };
    default:
      // return default state
      return state;
  }
};

// Step 3: Create the Store with Reducer
const store = redux.configureStore({
    reducer: {
        counterReducer: counterReducer,
    }
});

console.log("Initial State: ", store.getState());

// ELIMINATED: Step 4: Create another Global reducer to manage the state of our app by calling the counterReducer
// function newReduxDemo(state = {}, action) {
//   return {
//     counterReducer: counterReducer(state.counterReducer, action),
//   }
// }

// ELIMINATED: Step 5: Create a subscription to listen for when a reducer is despatched
// const counterSubscriber = () => {
//   // give us the latest snapshot of the store after the store is updated
//   const latestState = store.getState();
//   console.log("Counter Subscriber:", latestState);
// };

// ELIMINATED: Step6: Activate the subscription in the store, so the store will report all changes.
// store.subscribe(counterSubscriber);

// Step 4:  Create Action is a Function that returns an object:
const counterAction = (value) => {
  return {
    payload: {
      counter: value,
    },
    type: "INCREMENT_COUNTER",
  };
};

const nameAction = (value) => {
    console.log("NameAction Value:", value);
    return {
      payload: {
        name: value,
      },
      type: "UPDATE_NAME",
    };
  };

// Step 5: Dispatch an action than will change the store's data
store.dispatch(counterAction(-3));
store.dispatch(nameAction("Tony Lockhart"));

// Step 6: Execute file
// node redux-demo.js

console.log("POST State: ", store.getState());
