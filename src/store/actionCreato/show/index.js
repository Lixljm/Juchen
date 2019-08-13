import axios from "axios"
import showType from "../../actionType/show"

const upShow = function(payload){
    return{
        type:showType.APP_SHOW,
        payload
    }
}
const upShowContent = function(payload){
    return{
        type:showType.APP_SHOWCONTENT,
        payload
    }
}


export default{
    getShow(){
        return async (dispatch)=>{
            const data = await axios.get("/jucheng/Search/getShowCategory?version=6.0.3&referer=2")
            dispatch(upShow(data.data.show_category_list))
        }
    },
    getShowContent(category=0){
        return async (dispatch)=>{
            const data = await axios.get("/jucheng//Search/getShowList?category="+category+"&city_id=0&page=1&keywords=&version=6.0.3&referer=2")
            dispatch(upShowContent(data.data.list))
        }
    }
}