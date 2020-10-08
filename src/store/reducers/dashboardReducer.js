
const initialState = {
    summary:[],
    events:[],
    exhibitors:[],
    initialValues:{},
    eventCreationStatus:false
  };

export default function (state = initialState, action) {
    switch (action.type) {
      case 'LOAD_DASHBOARD':
        return {
          ...state,summary:[...action.payload],
        };
      case 'LOAD_EVENTS':{
        console.log(action)
        return {
          ...state,events:action.payload
        };
      }
      case 'CONFIGURE_EVENT' :{
       return  {...state,initialValues:action.payload.event,exhibitors:action.payload.exhibitors}
      }
      case 'LOAD_EXHIBITORS': {
        return {...state,exhibitors:action.payload.exhibitors}
      }
      case 'CREATE_EVENT_SUCCESS':{
        return {...state,eventCreationStatus:true}
      }
        
      default:
        return state;
    }
  }