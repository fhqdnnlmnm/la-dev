import Cookies from 'js-cookie'

const app={
    state:{
        sidebar:{
            opened:!+Cookies.get('sidebarStatus'), //sidebarStatus 1为关闭状态，0为开启状态；opened：1为开启状态，0为关闭状态
            withoutAnimation:false
        },
        device:'desktop',
        language:Cookies.get('language')|| 'en'
    },
    mutations:{
        TOGGLE_SIDEBAR: state=>{
            if(state.sidebar.opened){
                Cookies.set('sidebarStatus',1)
            }else{
                Cookies.set('sidebarStatus',0)
            }
            state.sidebar.opened=!state.sidebar.opened
            state.sidebar.withoutAnimation=false
        },
        CLOSE_SIDEBAR:(state,withoutAnimation)=>{
            Cookies.set('sidebarStatus',1)
            state.sidebar.opened=false,
            state.sidebar.withoutAnimation=withoutAnimation
        },
        TOGGLE_DEVICE:(state,device)=>{
            state.device=device
        },
        SET_LANGUAGE:(state,language)=>{
            state.language=language
            Cookies.set('language',language)
        }
    },
    actions:{
        toggleSideBar({commit}){
            commit('TOGGLE_SIDEBAR')
        },
        closeSideBar({commit},{withoutAnimation}){
            commit('CLOSE_SIDEBAR',withoutAnimation)
        },
    }
}
export default app
