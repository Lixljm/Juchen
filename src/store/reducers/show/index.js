import initState from "../../state/show"
import showType from "../../../store/actionType/show"

export default function (state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === showType.APP_SHOW){
        state.showsList = payload;
        //console.log(state,6666)
    }
    return state
}