<template>
  <div class="hello">
    <h2>views 222</h2>
    <div class="query-list">
      <el-form :model="queryData" label-width="100px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="活动组名称">
              <el-input v-model="queryData['groupName']" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-button class="reset-btn" @click="resetData">重置</el-button>
            <el-button class="query-btn" type="primary" @click="handleAdd">新增活动组</el-button>
            <el-button class="query-btn" type="primary" @click="handleSearch">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div>
      <h1>单选表格：</h1>
      <el-table
        :data="tableData"
        style="width: 80%"
        max-height="250"
        :row-class-name="tableRowClassName"
        ref="singleTable"
        highlight-current-row
        @current-change="handleCurrentChange">
        <el-table-column
          type="index"
          width="50"
          fixed>
        </el-table-column>
        <el-table-column
          fixed
          prop="name"
          label="姓名"
          width="150"
          align="center">
        </el-table-column>
        <el-table-column
          label="配送信息"
          align="center">
          <el-table-column
            prop="date"
            label="日期"
            width="300">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            width="300">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="500">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120">
          </el-table-column>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
        <el-button @click="setCurrent()">取消选择</el-button>
      </div>

      <h1>多选表格：</h1>
      <el-table
        :data="tableData"
        style="width: 80%"
        max-height="400"
        :row-class-name="tableRowClassName"
        ref="multipleTable"
        tooltip-effect="dark"
        @current-change="handleSelectionChange"
        :default-sort = "{prop: 'date', order: 'ascending'}">
        <el-table-column
          type="selection"
          width="55"
          fixed>
        </el-table-column>
        <el-table-column
          fixed="left"
          type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="日期">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="市区">
                <span>{{ props.row.city }}</span>
              </el-form-item>
              <el-form-item label="省份">
                <span>{{ props.row.province }}</span>
              </el-form-item>
              <el-form-item label="地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="邮编">
                <span>{{ props.row.zip }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          fixed
          prop="name"
          label="姓名"
          width="150"
          align="center"
          sortable>
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          label="配送信息"
          align="center">
          <el-table-column
            label="日期"
            width="300"
            prop="date"
            sortable>
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            width="300"
            sortable>
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            width="50"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="500">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column
          label="操作"
          width="250"
          fixed="right"
          align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleDetail(scope.$index, scope.row)">详情</el-button>
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-if="paginationData.total > 0" background
        @current-change="pageChange"
        :current-page="current"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="paginationData['total']">
      </el-pagination>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
      <div class="block">
        <span class="demonstration">页数较少时的效果</span>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>
      <div class="block">
        <span class="demonstration">大于 7 页时的效果</span>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1001">
        </el-pagination>
      </div>
      <div class="block">
        <span class="demonstration">页码按钮的数量，当总页数超过该值时会折叠，默认是7</span>
        <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
      <div class="block">
        <span class="demonstration">小型分页:只需要一个small属性，它接受一个Boolean，默认为false，设为true即可启用。</span>
        <el-pagination
          small
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
      <div>
        <el-switch v-model="needPaginator" @change="test">
        </el-switch>
        <el-pagination
          v-if="needPaginator"
          :total="5"
          layout="prev, pager, next">
        </el-pagination>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      queryData: {
        groupName:""
      },
      current: 1,
      pageSize: 10,
      groupList: [],
      paginationData: {   //分页
        total: 1000
      },
      tableData: [{
        date: '2016-05-03',
        name: '张三',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '李四',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王五',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '赵六',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎1',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎2',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎3',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-04-06',
        name: 'aa',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-03-06',
        name: 'bb',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-02-06',
        name: 'cc',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: 'dd',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      currentRow: null,
      multipleSelection: [],
      needPaginator: false
    }
  },
  created() {

  },
  methods: {
    test() {
      console.log(this.needPaginator)
    },
    //初始化列表
    init(){
      this.loadTable(this.queryData)
    },
    //加载列表
    loadTable(param) {
      let data = Object.assign({},param,{
        current: this.current,
        pageSize: this.pageSize
      })
      this.$axios({
        url: this.$util.getUrl('activity-web/rest/invoke?service=40050'),
        data
      }).then(res => {
        this.groupList = res.rows
        if (res.recordsTotal) {
          this.paginationData.total = res.recordsTotal
        }
      })
    },
    //翻页
    pageChange(index) {
      this.current = index
      this.loadTable(this.queryData)
    },
    //搜索
    handleSearch() {
      this.current = 1
      this.loadTable(this.queryData)
    },
    //重置列表
    resetData() {
      this.queryData.groupName = ""
      this.current = 1
      this.loadTable(this.queryData)
    },
    //新增活动组
    handleAdd() {
      console.log(this)
      this.$router.push("/helloInfo")
    },
    //编辑
    handleEdit(index, row) {
      console.log(">>>>index:" + index + ",row:" + row)
      this.$router.push({
        path: '/helloInfo',
        query: {
          name: row.name
        }
      })
    },
    //详情
    handleDetail(index, row) {
      console.log(">>>>index:" + index + ",row:" + row)
      this.$router.push({
        path: '/helloInfo',
        query: {
          name: row.name
        }
      })
    },
    //删除弹框
    handleDelete(index, row) {
      console.log(">>>>index:" + index + ",row:" + row)
      this.$confirm("您确定要将活动组名称删除？","提醒",{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.ajaxDel(row)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      })
    },
    //删除活动组名称操作
    ajaxDel(row) {
      this.$axios({
        url: this.$util.getUrl('activity-web/rest/invoke?service=40055'),
        data: {
          groupId: row.groupId
        }
      }).then(res => {
        this.$message({
          type: 'success',
          message: '删除成功'
        });
        this.current = 1
        this.loadTable(this.queryData)
      })
    },

    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },

    handleCurrentChange(val) {
      this.currentRow = val;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  .el-table .warning-row {
    background: oldlace;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }

  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
