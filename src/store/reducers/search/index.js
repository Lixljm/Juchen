import initState from '../../state/search/index'
import searchType from '../../actionType/search/index'

export default function (state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === searchType.APP_SEARCH ){
        state.searchList = payload
    }else if(type === searchType.APP_SEARCHSCOLL){
        state.searchScollList = payload
    }
    return state
}