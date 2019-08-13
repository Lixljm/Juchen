import theaterTypeList from "../../actionType/theatre";
import axios from "axios";
 const uptheaterList= function(payload){
    return{
    type:theaterTypeList.GET_THEATRE,
        payload
    }
}
const upShowList=function (payload) {
    return{
        type:theaterTypeList.GET_SHOW_LIST,
        payload
    }
}
const upshowCategoryList=function (payload) {
    return{
        type:theaterTypeList.GET_SHOW_CATEGPRY_LIST,
        payload,
    }
}
export default {
     getTheaterList(){
      return async (dispatch)=>{
          const {data} = await axios.get("/jucheng/RestTheatre/getTheatreList");
         dispatch(uptheaterList(data))
     }
      },
      getShowList(tid,category=0,page=1){
         return async (dispatch)=>{
             const {datas}=await axios.get("https://m.juooo.com/Theatre/showListData?tid="+tid+"&category="+category+"&page="+page);
             dispatch(upShowList(datas))

         }
      },
    getShowCategoryList(){
         return async (dispatch)=>{
             const {data}=await axios.get("https://m.juooo.com/Search/getShowCategory?version=6.0.3&referer=2")
             dispatch(upshowCategoryList(data.show_category_list))
         }
    }
}