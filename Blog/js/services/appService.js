/**
 * Created by JIA on 2017/3/23.
 */
angular.module('appService',[])
    .factory('ListService',function ($http) {
        var lists=[{title:'关于我的博客',content:'欢迎来到我的个人博客，这个博客将会持续改进，目前是0.2版本！',description:'点击该处开启我的文章列表'}];
        var service={};
            $http({
                method:'get',
                url:'data/package.json'
            }).success(function(data,header,config,status){
                lists=data.articleList;
            });
        service.get=function(id){
            return lists[id];
        };
        service.getAll=function(){
            return lists;
        };
        service.fresh=function (id,title,content) {
            service.syn();
        };
        return service;
    });