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
                <el-container>
                  <el-main>
                     <el-row>
                      <el-col :span="24"><el-tag>始发港</el-tag>
                        <el-select v-model="value9" 
                          placeholder="输入中/英文"
                          multiple
                          filterable
                          remote
                          reserve-keyword
                          :remote-method="remoteMethod"
                          :loading="loading">
                         <el-option
                          v-for="item in options4"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                    </el-select>
                  </el-col>
                      </el-row>
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
          message:"test",
          options4:[],
          value9: [],
          list: [],
          loading: false,
          states: ["Alabama", "Alaska", "Arizona",
          "Arkansas", "California", "Colorado",
          "Connecticut", "Delaware", "Florida",
          "Georgia", "Hawaii", "Idaho", "Illinois",
          "Indiana", "Iowa", "Kansas", "Kentucky",
          "Louisiana", "Maine", "Maryland",
          "Massachusetts", "Michigan", "Minnesota",
          "Mississippi", "Missouri", "Montana",
          "Nebraska", "Nevada", "New Hampshire",
          "New Jersey", "New Mexico", "New York",
          "North Carolina", "North Dakota", "Ohio",
          "Oklahoma", "Oregon", "Pennsylvania",
          "Rhode Island", "South Carolina",
          "South Dakota", "Tennessee", "Texas",
          "Utah", "Vermont", "Virginia",
          "Washington", "West Virginia", "Wisconsin",
          "Wyoming"]
      }
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      }
    },
    created () {

    },
    mounted () {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    }
}
</script>

<style>
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

