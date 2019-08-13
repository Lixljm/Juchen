import  axios from "axios"
import  VipType from "../../actionType/vip"
import classify from "../../state/vip/classify"
const GET_VIPLISTdd = function(payload){
    return{
        type: VipType.GET_VIPLIST,
        payload
    }
}
const GET_VIPLIST =function(payload){
   return{
        type:VipType.GET_VIP,
        payload,
   }
}
export  default {
     getvipList(){
          return async (dispatch)=>{
              const data = await axios.get("/juchengapi/Show/Index/getShowCategoryList?version=6.0.3&referer=2")
              data.data.unshift(classify)
              dispatch(GET_VIPLIST(data.data))
              console.log(data)
         }
     },
    getvipType(id){
         return async (dispatch)=>{
             const data = await axios.get("/juchengapi/vip/index/getDiscountList?page=1&city_id=0&cate_id="+id+"&discount_id=0&version=6.0.3&referer=2")
             dispatch(GET_VIPLISTdd(data.data.list))
             console.log(data.data.list)
         }
    }
}