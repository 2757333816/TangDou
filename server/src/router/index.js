import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/hone'},
    {path:'/home',name:'home',component:Home,meta: { showTabBar:true }},
    {path:'/movie',name:'movie',component:Movie,meta: { showTabBar:true }},
    {path:'/cinema',name:'cinema',component:Cinema,meta: { showTabBar:true }},
    {path:'/my',name:'my',component:My,meta: { showTabBar:true }},

    {path:'/my_info',name:'my_info',component:MyInfo},
    {path:'/my_order',name:'my_order',component:My_order},
    {path:'/my_movie',name:'my_movie',component:MyMovie},
    {path:'/modify_username',name:'modify_username',component:ModifyUserSign},

    {path:'/search_all',component:SearchAll},
    {path:'/search_movie',component:SearchMovie},

    {path:'/movie_detail',name:'movie_detail',component:MovieDetail},
    {path:'/cinema_detail',component:CinemaDetail},
    {path:'/select_cinema',component:SelectCinema},
  ]
})
