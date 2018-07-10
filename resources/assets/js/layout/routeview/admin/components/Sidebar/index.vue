<template>
    <el-scrollbar wrapClass="scrollbar-wrapper">
        <el-menu
        mode="vertical"
        :show-timeout="200"
        :default-active="$route.path"
        :collapse="isCollapse"
        backgroud-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409Eff">
        </el-menu>
        <SidebarItem :routes="permission_routers"></SidebarItem>
    </el-scrollbar>
</template>

<script>
import {mapGetters} from 'vuex'
import SidebarItem from './SidebarItem'
export default {
    components:{ SidebarItem },
    ...mapGetters([
        'sidebar'
    ]),
    isCollapse(){
        return !this.sidebar.opened
    }
}
</script>
