/**
 * Created by JIA on 2017/3/23.
 */
var dir=angular.module('appDir',['appService']);

//文章列表的封装指令
dir.directive('articleList',function(){
    return{
        restrict:'AE',
        replace: true,
        template:'<div class="article-list">\
                             <h3 ng-bind="list.title"></h3>\
                             <p ng-bind="list.description"></p>\
                     </div>',
        link:function (scope, element) {
            element.bind("click",function(){
                scope.fresh(scope.list.id-1);
                console.log(scope.get(scope.list.id-1));
            });
        }
    };
});

//文章界面的封装指令
dir.directive('mainContent',function(){
    return{
        restrict:'AE',
        replace: true,
        templateUrl:'tpls/article.html',
    };
});

//文章界面的封装指令
dir.directive('myInfo',function(){
    return{
        restrict:'AE',
        replace: true,
        templateUrl:'tpls/info.html',
    };
});