import initState from "../../state/home"
import homeType from "../../actionType/home"
 export  default function (state=initState,{type,payload}) {
     JSON.parse(JSON.stringify(state));
     if(type === homeType.APP_OPERATION){
         state.operation_list = payload
     }else if(type === homeType.APP_TOURSHOW){
         state.tourshowList = payload
     }else if(type === homeType.APP_MEMBERSHIP){
         state.membershipList = payload
     }else if(type === homeType.APP_HOTVENUE){
         state.hotvenueList = payload
     }else if(type === homeType.GET_HOTSHOW){
        state.hotshow = payload;
        state.hotlists = payload.hots_show_list
        console.log(payload)
    }else if(type === homeType.GET_LIST){
        state.listtype = payload;
    }else if(type === homeType.GET_LODINGLIST){
         console.log(state.loginglist)
        state.loginglist = [...state.loginglist,...payload];
    }else if(type === homeType.GET_PIC){
        state.picLIsr=payload;
    }
     return  state
 }
