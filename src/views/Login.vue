<template>
    <div>
    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
    <el-dialog :show-close="false" title="用户登录" :visible.sync="dialogFormVisible">
        <el-form>
            <el-form-item label="用户名称" :label-width="formLabelWidth">
                <el-input v-model="user.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户密码" :label-width="formLabelWidth">
                <el-input v-model="user.password" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="login">登录</el-button>
        </div>
    </el-dialog>
    </div>
</template>

<script>
    export default {
       data(){
           return{
               dialogFormVisible: true,
               formLabelWidth: '120px',
               user: {username:"",password:""},
           };
       },
       methods: {
          login(){
             //定义URL
              const url="https://5518ddc6-55f9-47a8-8cad-bb597ea4e026.mock.pstmn.io/login";
              //定义this,因无法进行在回调函数中的Date获取数据,但如果是箭头函数就可以了
             // var that=this;
             //发送请求
              this.axios(url,{
                  params:{
                     username: this.user.username,
                     password: this.user.password
                  }
              }).then((resp)=> {
                  console.log(resp);
                  alert("登陆成功!!")
                  //成功关闭对话框
                  this.dialogFormVisible = false;
                  //进行首页跳转
                  //前端页面跳转必须使用路由
                  this.$router.push('index');
              }).catch((error)=>{
                  //登录失败
                  this.$message.error("对不起!登录失败")
              });
          },
       }
    };
</script>

<style scoped>

</style>
