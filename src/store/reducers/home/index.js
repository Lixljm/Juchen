import initState from "../../state/home"
import PicList from "../../actionType/home"
 export  default function (state = initState,{type,payload}) {
     state =  JSON.parse(JSON.stringify(state))
     if(type === PicList.GET_PIC){
         state.picLIsr=payload;

     }else if(type === PicList.GET_HOTSHOW){
         state.hotshow = payload;
         state.hotlists = payload.hots_show_list
         console.log(payload)
     }else if(type === PicList.GET_LIST){
         state.listtype = payload;
     }else if(type === PicList.GET_LODINGLIST){
         state.loginglist = payload;
     }
     return state
 }
