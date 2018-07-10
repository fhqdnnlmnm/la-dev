<template>
    <div class="seachbar">
            <el-container>
              <el-header>
                {{message}}
              </el-header>
              <el-container>
                <el-aside>
                  {{message}}
                </el-aside>
                <el-container >
                  <el-main class="content">
                     <el-row class="checktitle">
                        <origin-port v-model="origin.value" col=4 placeholder="输入中/英文" label="始发港" v-bind:states ="origin.originports"></origin-port>
                        <dest-port  v-model="dest.value" col=4 placeholder="输入中/英文" label="目的港" v-bind:options="dest.options"></dest-port>
                        <el-col :span=4><el-tag>20GP</el-tag><el-input-number class="wnum" v-model="sgp" :step="1" controls-position="right"></el-input-number></el-col>
                        <el-col :span=4><el-tag>40GP</el-tag><el-input-number class="wnum" v-model="mgp" :step="1" controls-position="right"></el-input-number></el-col>
                        <el-col :span=4><el-tag>40HQ</el-tag><el-input-number class="wnum" v-model="hq" :step="1" controls-position="right"></el-input-number></el-col>
                        <el-col :span=4><el-button type="warning">运价查询</el-button></el-col>
                      </el-row>
                      <el-container>
                        <el-main>
                           <el-table
                              :data="result"
                              style="width: 100%"
                              border
                              size="small"
                              height="250">
                              <el-table-column
                                fixed
                                prop="service"
                                label="服务商"
                                width="150">
                              </el-table-column>
                              <el-table-column
                                prop="carrier"
                                label="船公司"
                                width="120">
                              </el-table-column>
                              <el-table-column
                                prop="etd"
                                label="报价有效期"
                                width="120">
                              </el-table-column>
                              <el-table-column
                                prop="routing"
                                label="航程"
                                width="120">
                              </el-table-column>
                              <el-table-column
                                prop="time"
                                label="费用"
                                width="300">
                              </el-table-column>
                              <el-table-column
                                prop="validf"
                                label="类型"
                                width="120">
                              </el-table-column>
                               <el-table-column
                                prop="validt"
                                label="时效"
                                width="120">
                              </el-table-column>
                            </el-table>
                        </el-main>
                      </el-container>
                  </el-main>
                  <el-footer>
                    {{message}}
                  </el-footer>
                </el-container>
              </el-container>
            </el-container>
    </div>
</template>
<script>
export default {
    name:'pricecheck',
    data () {
      return {
          sgp:'',
          mgp:'',
          hq:'',
          message:'test',
          result:[
            {id:'1',service:'test',carrier:'test',etd:'tset',routing:'direct',time:'10',validf:'5-15',validt:'5-30'},
            {id:'2',service:'test',carrier:'test',etd:'tset',routing:'direct',time:'10',validf:'5-15',validt:'5-30'}
          ],
          origin:{
            originports:["Alabama", "Alaska", "Arizona","Arkansas", "California", "Colorado","Connecticut", "Delaware", "Florida","Georgia", "Hawaii", "Idaho", "Illinois"],
            value:''
          },
          dest:{
            value:'',
            options: [{
              label: '热门城市',
              options: [{
                value: 'Shanghai',
                label: '上海'
              }, {
                value: 'Beijing',
                label: '北京'
              }]
            }, {
              label: '城市名',
              options: [{
                value: 'Chengdu',
                label: '成都'
              }, {
                value: 'Shenzhen',
                label: '深圳'
              }, {
                value: 'Guangzhou',
                label: '广州'
              }, {
                value: 'Dalian',
                label: '大连'
              }]
            }]
          }
      }
    },
    methods: {
    },
    created () {

    },
    mounted () {
    }
}
</script>

<style>
  .content{
    display: box;
  }
  .checktitle{
    display: box;
    -webkit-box-align: center;
    -webkit-box-pack:center;

  }
  .seachbar {

  }
  
  .el-tag{
    margin-right:2px;
  }

  .el-row{
    margin-bottom:20px;
  }
  .result{
    border:lightslategray 1px solid;
    height:200px;
    background:whitesmoke;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
 
</style>

