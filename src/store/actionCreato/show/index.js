import axios from "axios"
import showType from "../../actionType/show"

const upShow = function (payload) {
    return {
      type:showType.APP_SHOW,
        payload
    }
}


export default {
    getShow(){
        return async (dispatch)=>{
            const data = await axios.get("/jucheng/Search/getShowCategory?version=6.0.3&referer=2")
            console.log(data)
            dispatch(upShow(data.data.show_category_list))
        }
    }
}