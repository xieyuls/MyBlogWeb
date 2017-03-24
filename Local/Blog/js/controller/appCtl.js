/**
 * Created by JIA on 2017/3/23.
 */
var app=angular.module('appCtl',['appService']);

//文章列表视图控制器
app.controller('ListCtl',function ($scope,ListService) {
        $scope.listFilter='';
        $scope.Lists=ListService.getAll();
        $scope.$on('update',function (event,data) {
            $scope.Lists=ListService.getAll();
        });
        $scope.get=function(id){
            return ListService.get(id);
        };
        $scope.set=function(id){
            $scope.$emit('update', id);
        };
});

//文章内容视图控制器
app.controller('articleCtl',function ($scope,ListService) {
    //首先声明一个空对象作为保存内容的容器
            $scope.article=ListService.get(0);
    //设置get方法，从服务中获取最新的文章内容
            $scope.get=function(id){
                $scope.article=ListService.get(id);
            };
    //监听从文章列表点击事件触发的update事件，用来更新article内容，需要手动运行$apply()触发脏检查刷新界面显示。
            $scope.$on('update',function(event,data){
                $scope.get(data);
                $scope.$apply();
            });
});

