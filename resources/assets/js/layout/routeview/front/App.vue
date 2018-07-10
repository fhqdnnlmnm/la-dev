<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <nav>
                <ul class="list-inline">
                    <li>
                       <span>登录</span>
                    </li>
                    <li class="pull-right">
                        <span>注销</span>
                    </li>
                    <li class="pull-right">
                        <span>注册</span>
                        <!-- <router-link :to="{ name: 'register' }">注册</router-link> -->
                    </li>
                </ul>
            </nav>
        </div>
        <div class="panel-body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
 export default {
    name: '前台',
    data () {
      return {}
    },
    methods: {},
    created () {
        
    },
    mounted () {
    }
  }

