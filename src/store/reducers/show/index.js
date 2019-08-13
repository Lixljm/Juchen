import initState from "../../state/show"
import showType from "../../actionType/show"

export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === showType.APP_SHOW){
        state.showsList = payload;
        state.showsList.unshift({name:"全部",category_id:0})
    }else if(type === showType.APP_SHOWCONTENT){
        state.showsContenList = payload;
    }
    return state
}