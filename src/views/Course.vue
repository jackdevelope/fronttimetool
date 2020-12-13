<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-input prefix-icon="el-icon-search" placeholder="课程名称" v-model="filter.course_name" clearable/>
            </el-col>
            <el-col :span="1">
                <el-button type="primary" @click="search">点击查询</el-button>
            </el-col>
        </el-row>
    <el-table
            v-loading="loading"
            element-loading-text="leader，我正在疯狂加载.."
            :data="courseList"
            border
            style="width: 100%">
        <el-table-column
                prop="id"
                label="ID">
        </el-table-column>
        <el-table-column
                prop="course_name"
                label="课程名称">
        </el-table-column>
        <el-table-column
                prop="price"
                label="价格">
        </el-table-column>
        <el-table-column
                prop="sort_num"
                label="排序">
        </el-table-column>
        <el-table-column
                prop="status"
                label="状态">
        </el-table-column>
    </el-table>
    </div>
</template>
<script>
    export default {
       data() {
           return{
               courseList: [{
                 id: '',
                 course_name: '无',
                 price: '0',
                 sort_num:'0',
                 status:'一直懵逼中...'
                }],
               loading: true,
               filter:{course_name:""}
           };
       },
       //钩子函数created,在DOM页面生成之前生效
        created(){
          //在页面生成之前,调用loadCourse
            this.loadCourse();
        },
        methods:{
            //获取课程信息
           loadCourse(){
             //发送请求获取数据
             const url="http://localhost:8080/webframe_war/course";
             this.axios.get(url,{
               //携带参数
               params:{
                 methodName:"findCourseList"
               }
             }).then((res)=>{
                 console.log(res)
               //将获取的数据给data
               this.courseList=res.data;
               //取消加载动画
               this.loading=false;
             }).catch((error=>{
               //错误
               this.$message.error("对不起!请求错误！");
             }));
           },
           //根据课程名和状态查询
            search(){
              //开启加载提示
              this.loading = true;
              //发送请求
              //发送请求获取数据
              const url="http://localhost:8080/webframe_war/course";
              this.axios.get(url,{
              //携带参数
                params:{
                   methodName:"findByCourseNameAndStatus",
                   course_name:this.filter.course_name
                }
               }).then((res)=>{
                  //将获取的数据给data
                  console.log(res.data);
                  var param = [];
                  param=res.data;
                  this.courseList.splice(0,this.courseList.length);
                  this.courseList.push(param);
                  //取消加载
                  this.loading=false;
                }).catch((error=>{
                  //错误
                  this.$message.error("对不起!请求错误！");
                }));
            },
            //添加课程方法
            addCourse(){},

        }
    };
</script>

<style scoped>

</style>
