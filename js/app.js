/**
 * Created by Administrator on 1988/1/13 0013.
 */

//angular.module('appModule',['ui.router','appCtrlModule'])
//
//    //点击主菜单，无法实现多页面切换
//    .config(function($stateProvider,$urlRouterProvider){
//        $urlRouterProvider.otherwise('/welcome');
//
//        $stateProvider.state('welcome',{
//           url:'/welcome',
//           templateUrl:'templates/welcome.html'
//       })
//       .state('/book',{
//           url:'/book',
//           templateUrl:'templates/book.html'
//       })
//       .state('/addBook',{
//           url:'/addBook',
//           templateUrl:'templates/addBook.html'
//       })
//       .state('/delBook',{
//           url:'/delBook',
//           templateUrl:'templates/delBook.html'
//       })
//       .state('/reader',{
//           url:'/reader',
//           templateUrl:'templates/reader.html'
//       })
//       .state('/addReader',{
//           url:'/addReader',
//           templateUrl:'templates/addReader.html'
//       })
//       .state('/delReader',{
//           url:'/delReader',
//           templateUrl:'templates/delReader.html'
//       })
//
//    });


angular.module('appModule', ['ngRoute', 'appCtrlModule'])
    .config(["$routeProvider", function ($routeProvider) {
        //配置路由文件
        $routeProvider
            .when('/welcome', {
                templateUrl: './templates/welcome.html'
            })
            .when('/book', {
                templateUrl: 'templates/book.html'
            })
            .when('/addBook', {
                templateUrl: 'templates/addBook.html'
            })
            .when('/delBook', {
                templateUrl: 'templates/delBook.html'
            })
            .when('/reader', {
                templateUrl: 'templates/reader.html'
            })
            .when('/addReader', {
                templateUrl: 'templates/addReader.html'
            })
            .when('/delReader', {
                templateUrl: 'templates/delReader.html'
            })
            .otherwise({
                redirectTo: '/welcome'
            });
    }]);