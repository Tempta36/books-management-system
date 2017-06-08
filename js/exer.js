/**
 * Created by Administrator on 2017/3/12.
 */
angular.module('exerModule',['ui.router','appCtrlModule'])
    .config(
    function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('index/reader');
        $stateProvider.state('index',{
            url:'/exer',
            templateUrl:'exer.html'})
            .state('index.book',{
                url:'/book',
                templateUrl:'templates/book.html'
            })
            .state('index.reader',{
                url:'/reader',
                templateUrl:'templates/reader.html'
            })

    }
)