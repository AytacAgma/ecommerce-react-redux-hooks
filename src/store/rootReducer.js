//tüm stateleri (reducerları) buraya topladım. Tek biryerden çağırmak için.

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer
})

export default rootReducer