import {
   combineReducers
} from "redux"
import home from "./home"
import theatre from "./theatre"
import ticket from "./ticket"
import user from "./user"
import search from "./search"
import vip from "./vip"
import show from "./show"
export default combineReducers(({
    home,
    theatre,
    ticket,
    user,
    search,
    vip,
    show,

}))