import {
   combineReducers
} from "redux"
import home from "./home"
import theatre from "./theatre"
import ticket from "./ticket"
import user from "./user"
export default combineReducers(({
    home,
    theatre,
    ticket,
    user
}))