import axios from 'axios'
import homeType from '../../actionType/home'
const Getlis = function (payload) {
    return{
        type:homeType.GET_PIC,
        payload
    }
}
const Gethotlist = function (payload){
  return{
      type:homeType.GET_HOTSHOW,
      payload
  }
}
const GetList = function (payload) {
    return{
        type:homeType.GET_LIST,
        payload
    }
}
const GetLoding = function(payload){
  return{
      type:homeType.GET_LODINGLIST,
      payload
  }
}
const upOperation = (payload)=>{
    return {
        type:homeType.APP_OPERATION,
        payload
    }
}
const upTourshow = (payload)=>{
    return {
        type:homeType.APP_TOURSHOW,
        payload
    }
}
const  upMembership = (payload) =>{
    return {
        type:homeType.APP_MEMBERSHIP,
        payload
    }
}
const upHotvenue = (payload)=>{
    return {
        type:homeType.APP_HOTVENUE,
        payload
    }
}


export default{
    getOperationList(){
        return async (dispatch)=>{
            const data = await axios.get("/juchengapi/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.3&referer=2");
            dispatch(upOperation(data.data.operation_list))
        }
    },
    getTourshowList(){
        return async (dispatch)=>{
            const data = await axios.get("/juchengapi/home/index/getTourRecommendList?city_id=0&version=6.0.3&referer=2")
            dispatch(upTourshow(data.data.tour_show_list))
        }
    },
    getMembership(){
        return async (dispatch)=>{
            const data = await axios.get("/juchengapi/vip/index/getVipHomeSchedular?version=6.0.3&referer=2")
            dispatch(upMembership(data.data))
        }
    },
    getHotvenue(){
        return async (dispatch)=>{
            const data = await axios.get("/juchengapi//home/index/getHotTheatre?version=6.0.3&referer=2")
            dispatch(upHotvenue(data.data.theatre_list))
        }
    },
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
  getLoging(index=1){
        return async (dispatch)=>{
            const data = await axios.get("/juchengapi/home/index/getRecommendShow?cityAdd=&page="+index+"&version=6.0.3&referer=2")
             console.log('dddddd',data)
            dispatch(GetLoding(data.data.recommend_show_list))
        }
  }

}
