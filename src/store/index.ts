import { createStore, Store } from "vuex"

export interface NavList{
    title:string
    url?:string
    active:boolean
}

interface State{
    name:string
    navList:NavList[]
}

declare module '@vue/runtime-core' {
    // declare your own store states
    // interface State {
    //   count: number
    // }
    // provide typings for `this.$store`
    interface ComponentCustomProperties {
      $store: Store<any>
    }
}

export const store = createStore<State>({
    state: {
        name:"俞菁田",
        navList:[{
            title:"工作台",
            url:"/main/home",
            active:true
        }]
    },
    mutations: {
        getUserInfo(state, data){
            state.name = data
        },
        navListPush(state, data){
            state.navList.push(data)
        },
        navListAllDel(state){
            state.navList = [{
                title:"工作台",
                url:"/main/home",
                active:true
            }]
        },
        navListOtherDel(state){
            let value:NavList
            const newNavList:NavList[] = []
            for(value of state.navList){
                if(value.active){
                    newNavList.push(value)
                }
                else if(value.url === "/main/home"){
                    newNavList.push(value)
                }
            }
            state.navList = newNavList
        },
        AllActiveTofalse(state){
            let value:NavList
            for(value of state.navList){
                value.active = false
            }
        },
        navActive(state, data){
            let value:NavList
            for(value of state.navList){
                if(value.url === data){
                    value.active = true
                }else{
                    value.active = false
                }
            }
        },
        navListThisDel(state, data){
            let value:NavList
            const newNavList:NavList[] = []
            for(value of state.navList){
                if(value.url !== data){
                    newNavList.push(value)
                }
            }
            state.navList = newNavList
        }
    },
    actions: {
        getUserInfo(context, data){
            context.commit("getUserInfo", data)
        },
        navListPush(context, data){
            context.commit("navListPush", data)
        },
        navListAllDel(context){
            context.commit("navListAllDel")
        },
        navListOtherDel(context){
            context.commit("navListOtherDel")
        },
        AllActiveTofalse(context){
            context.commit("AllActiveTofalse")
        },
        navActive(context, data:string){
            context.commit("navActive", data)
        },
        navListThisDel(context, data){
            context.commit("navListThisDel", data)
        }
    },
    modules: {
    }
})

export function navifExist(path:string):boolean{
    let ifExist = false
    let value:NavList
    for(value of store.state.navList){
        if(value.url === path){
            ifExist = true
        }
    }
    return ifExist
}
