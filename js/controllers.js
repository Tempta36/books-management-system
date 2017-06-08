/**
 * Created by Administrator on 1988/1/13 0013.
 */
angular.module('appCtrlModule', ['appServiceModule'])
    .controller('appCtrl', function ($scope, appService) {
        $scope.menus = appService;
    })
    .controller('readerCtrl', function ($scope,$location,readerService, addReaderService) {
        $scope.reader = readerService;

        $scope.sexEnsure = 'man';
        var now = new Date();
        var time = [now.getFullYear(), now.getMonth() + 1, now.getDate()];
        $scope.time = time.join('.');
        //建立服务实现数据的双向绑定
        $scope.data = addReaderService.datalist();
        //添加读者信息
        $scope.list_submit = function () {
            addReaderService.addReader($scope.reader,$scope.data,$scope.sexEnsure,$scope.time);
            //提交完成之后  跳转到指定的页面
            $location.path('/reader');
        };

        //删除读者信息
        $scope.delReaderData=function(id){
            for(var i=0;i<$scope.reader.length;i++){
                if($scope.reader[i].id==id){
                    $scope.reader.splice(i,1);
                }
            }
        };
    })
    .controller('bookCtrl', function ($window,$scope,$filter,$location,bookService,addBookService,fenYeService) {
        //讲显示数据进行分页
        $scope.pageNum=10;
        $scope.totalNum=Math.ceil(bookService.length/$scope.pageNum);
        $scope.currentPage=0;
        $scope.book = fenYeService.fenYe(bookService,$scope.currentPage,$scope.pageNum);

        //页码的显示
        $scope.pageNumArray=[];
        for(var i=0;i<$scope.totalNum;i++){
            $scope.pageNumArray.push(i+1);
        }

        //跳转页面
        $scope.toPage=function(num){
            $scope.book = fenYeService.fenYe(bookService,num-1,$scope.pageNum);
            $scope.currentPage=num-1;
        };

        //设置表格高度
        $scope.height=parseInt(angular.element('.table1 td').css('height'))*($scope.pageNum+1)+11+'px';
        angular.element('.table1').css('height',$scope.height);
        setInterval(function(){
            console.log(angular.element('.table1').css('height'));
        },1000);

        //验证输入的可借数目格式是否正确
        $scope.addBookDataNum=function(num){
            if(isNaN(num)){
               alert(angular.element('.span_num'));
            }
        };
        //添加图书信息
        $scope.bookId=$scope.book.length+1;
        $scope.addBookData=addBookService.getData($scope.bookId);
        $scope.bookDataSubmit=function(){
            $scope.book.push($scope.addBookData);
            $location.path('/book');
        };

        //删除图书信息
        $scope.delBookData=function(id){
            for(var i=0;i<$scope.book.length;i++){
                if($scope.book[i].id==id){
                    $scope.book.splice(i,1);
                }
            }
        };
    });
