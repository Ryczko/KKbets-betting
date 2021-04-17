import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import couponReducer from 'store/reducers/coupon';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = {
    coupon: couponReducer
};

const store = createStore(combineReducers(rootReducer), composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
