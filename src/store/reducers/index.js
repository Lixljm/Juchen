import {
   combineReducers
} from "redux"
import home from "./home"
import theatre from "./theatre"
import ticket from "./ticket"
import user from "./user"
import search from "./search"
import vip from "./vip"
export default combineReducers(({
    home,
    theatre,
    ticket,
    user,
    search,
    vip,
}))