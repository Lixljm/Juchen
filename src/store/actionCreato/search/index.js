import axios from 'axios'
import searchType from '../../actionType/search'
const upSearch = function(payload){
    return {
        type:searchType.APP_SEARCH,
        payload
    }
}

export default{
    getListSearch(){
        return async (dispatch)=>{
            const data = await axios.get("/jucheng/Search/getHotWord?");
            dispatch(upSearch(data.data))
        }
    }
}