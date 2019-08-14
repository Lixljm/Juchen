import axios from 'axios'
import searchType from '../../actionType/search'
const upSearch = function(payload){
    return {
        type:searchType.APP_SEARCH,
        payload
    }
}
const upSearchColl = function(payload){
    return {
        type:searchType.APP_SEARCHSCOLL,
        payload
    }
}

export default{
    getListSearch(){
        return async (dispatch)=>{
            const data = await axios.get("/jucheng/Search/getHotWord?");
            dispatch(upSearch(data.data))
        }
    },
    getSearchCollList(keyword){
        return async (dispatch)=>{
            const data = await axios.get("/jucheng/Search/getShowList?keywords="+keyword+"&page=1&sort_type=1&version=6.0.3&referer=2");
            dispatch(upSearchColl(data.data.list))
        }
    }
}