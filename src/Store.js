import {createStore, combineReducers} from 'redux';
import {reducer,aniReducer} from './reducers';


//import Perf from 'react-addons-perf';
 const win = window;
 //win.Perf = Perf
const reducer_combine = combineReducers({
    events: reducer,
    ani: aniReducer,
});

 const middlewares = [];
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')());
// }

// const storeEnhancers = compose(
//   applyMiddleware(...middlewares),
//   (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
// );

// function* testGenerator(){
//     yield 1;
//     yield 2;
//     return 3;
//     yield 4;//不执行
// }
// var pointer=testGenerator();
// console.log(pointer.next(),pointer.next(),pointer.next(),pointer.next(),pointer.next());

export default createStore(reducer_combine);

