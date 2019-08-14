import initState from "../../state/vip"
import VipType from "../../actionType/vip"
export default function(state=initState,{type,payload}){
   JSON.parse(JSON.stringify(state));
   if(type === VipType.GET_VIP){
       state.viplist = payload
   }else if(type === VipType.GET_VIPLIST){
       state.vipType =payload
   }
   return state
}