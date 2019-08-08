import theatreList from "../../state/theatre"
import theaterTypeList from "../../actionType/theatre"
export default function(state = theatreList,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    if (type===theaterTypeList.GET_THEATRE){
        state.theatreList=payload
    }
    if(type===theaterTypeList.GET_SHOW_LIST){
       // console.log(payload,10000)
        state.showsList=payload;
        //console.log(10000,state.showsList)

    }
    if(type===theaterTypeList.GET_SHOW_CATEGPRY_LIST){
        state.showCategoryList=payload
    }
    //console.log(state)
    return state

}