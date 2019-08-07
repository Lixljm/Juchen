import axios from "axios"
import PicList from "../../actionType/home"
  const Getlis = function (payload) {
      return{
          type:PicList.GET_PIC,
          payload
      }
  }
  const Gethotlist = function (payload){
    return{
        type:PicList.GET_HOTSHOW,
        payload
    }
  }
  const GetList = function (payload) {
      return{
          type:PicList.GET_LIST,
          payload
      }
  }
  const GetLoding = function(payload){
    return{
        type:PicList.GET_LODINGLIST,
        payload
    }
  }
export default {
      getPiclist(){
          return async (dispatch)=>{
              const data = await axios.get("/juchengapi/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.1&referer=2");
              dispatch(Getlis(data.data))
          }
      },
    getHotshow(){
          return async (dispatch)=>{
              const data = await axios.get("/juchengapi/home/index/getHotsRecommendList?city_id=0&version=6.0.3&referer=2")

              dispatch(Gethotlist(data.data))
          }
    },
    getList(){
          return async (dispatch)=>{
              const data = await axios.get("/juchengapi/home/index/getFloorShow?city_id=0&version=6.0.3&referer=2")
              dispatch(GetList(data.data))
              // console.log("2qwddqd",data.data)
          }
    },
    getLoging(){
          return async (dispatch)=>{
              const data = await axios.get("/juchengapi/home/index/getRecommendShow?cityAdd=&page=1&version=6.0.3&referer=2")
               console.log('dddddd',data)
              dispatch(GetLoding(data.data))
          }
    }
}