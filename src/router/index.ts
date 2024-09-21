
import Index from '../pages/Index.vue'
import Team from "../pages/team/TeamPage.vue";
import User from "../pages/User.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/userEdit/UserEditPage.vue";
import UserEditRadioPage from "../pages/userEdit/UserEditRadioPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import LoginLayOut from "../layouts/LoginLayOut.vue";
import BasicLayout from "../layouts/BasicLayout.vue";
import RegisterLayOut from "../layouts/RegisterLayOut.vue";
import TeamUpdatePage from "../pages/team/TeamUpdatePage.vue";
import TeamAddPage from "../pages/team/TeamAddPage.vue";
import * as VueRouter from 'vue-router'
import TagEditPage from "../pages/TagEditPage.vue";
import UserSignPage from "../pages/UserSignPage.vue";
import UserDetailPage from "../pages/UserDetailPage.vue";
import TeamDetailPage from "../pages/team/TeamDetailPage.vue";
import CreateTeamListPage from "../pages/team/CreateTeamListPage.vue";
import JoinTeamListPage from "../pages/team/JoinTeamListPage.vue";


export const routes = [
    {path: '/', component: LoginLayOut},
    {path: '/login', component: LoginLayOut},
    {path: '/register', component: RegisterLayOut},
    {path: '/main', component: BasicLayout, children: [
            {path: '/index', title: '用户列表', component: Index},
            {path: '/team', title: '找队伍', component: Team},
            {path: '/user', title:'我的',component: User},
            {path: '/search', title:'搜索相似用户',component: SearchPage,},
            {path: '/user/list', title:'用户搜索',component: SearchResultPage},
            {path: '/user/edit', title: '编辑信息',component: UserEditPage},
            {path: '/user/tagEdit', title: '编辑信息',component: TagEditPage},
            {path: '/user/radioEdit', title: '修改信息',component: UserEditRadioPage},
            {path: '/team/update/:id', title: '修改队伍信息',component: TeamUpdatePage},
            {path: '/team/create', title:'创建队伍',component: TeamAddPage},
            {path: '/team/detail', title:'队伍信息',component: TeamDetailPage},
            {path: '/user/sign', title: '个人信息', component: UserSignPage},
            {path: '/user/detail', title: '用户信息', component: UserDetailPage},
            {path: '/user/myTeam', title: '我创建的队伍', component: CreateTeamListPage},
            {path: '/user/joinTeam', title: '我加入的队伍', component: JoinTeamListPage},
        ]
    }
]


// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
export default router
