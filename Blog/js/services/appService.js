/**
 * Created by JIA on 2017/3/23.
 */
angular.module('appService',[])
    .factory('ListService',function ($http) {
        var lists=[];
        var service={};
        service.syn=function(){
            $http({
                method:'get',
                url:'data/package.json'
            }).success(function(data,header,config,status){
                lists=data.articleList;
            });
        };
        service.syn();
        service.get=function(id){
            service.syn();
            return lists[id];
        };
        service.getAll=function(){
            service.syn();
            return lists;
        };
        service.set=function (id,title,content) {
            lists[id]={
                title:title,
                content:content,
            }
        };
        return service;
    });