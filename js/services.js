/**
 * Created by Administrator on 1988/1/13 0013.
 */
angular.module('appServiceModule', [])
    .factory('appService', function () {

        var manage = [{
            text: "图书信息管理",
            enable: true,
            subMenus: [{
                text: "图书信息总览",
                enable: true,
                action: "/book"
            }, {
                text: "添加图书信息",
                enable: true,
                action: "/addBook"
            },
                {
                    text: "删除图书信息",
                    enable: true,
                    action: "/delBook"
                }]
        },
            {
                text: "读者信息管理",
                enable: true,
                subMenus: [{
                    text: "读者信息总览",
                    enable: true,
                    action: "/reader"
                }, {
                    text: "添加读者信息",
                    enable: true,
                    action: "/addReader"
                }, {
                    text: "删除读者信息",
                    enable: true,
                    action: "/delReader"
                }]
            },
            {
                text: "系统管理",
                enable: true,
                subMenus: [{
                    text: "修改密码",
                    enable: true,
                    action: ""
                }, {
                    text: "退出系统",
                    enable: true,
                    action: ""
                }]
            }
        ];
        return manage;

    })
    .factory('readerService', function () {

        var reader = [{
            id: '1',
            name: 'Jack',
            sex: 'man',
            tel: 1324958534,
            email: '123878937@qq.com',
            time: '2016.3.24'
        },
            {
                id: '2',
                name: 'Lily',
                sex: 'woman',
                tel: 2389981237,
                email: '123878937@126.com',
                time: '2016.4.6'
            },
            {
                id: '3',
                name: 'Kimi',
                sex: 'man',
                tel: 1324934354,
                email: '123878937@163.com',
                time: '2016.9.5'
            },
            {
                id: '4',
                name: 'Suesie',
                sex: 'woman',
                tel: 22938483278,
                email: '347247638@qq.com',
                time: '2016.8.2'
            },
            {
                id: '5',
                name: 'Davy',
                sex: 'man',
                tel: 3872738297,
                email: '347647543@126.com',
                time: '2017.2.16'
            },
            {
                id: '6',
                name: 'Julia',
                sex: 'woman',
                tel: 12323837433,
                email: '736272372@163.com',
                time: '2017.1.26'
            }];
        return reader;
    })
    .factory('bookService', function () {

        var book = [{
            id: '1',
            name: '水浒传',
            author: 'Jain',
            version: '2013.3.14 第二次印刷',
            num: 3
        },
            {
                id: '2',
                name: '红楼梦',
                author: 'July',
                version: '2013.3.14 第二次印刷',
                num: 4
            },
            {
                id: '3',
                name: '海鸥',
                author: 'Jack',
                version: '2013.3.14 第二次印刷',
                num: 1
            },
            {
                id: '4',
                name: '悲惨世界',
                author: 'Lily',
                version: '2013.3.14 第二次印刷',
                num: 0
            },
            {
                id: '5',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '6',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '7',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '8',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '9',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '10',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '11',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '12',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '13',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '14',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '15',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '16',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '17',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '18',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '19',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '20',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '21',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '22',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '23',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '24',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '25',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '26',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '27',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '28',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '29',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '30',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '31',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '32',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '33',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '34',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '35',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '36',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '37',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            },
            {
                id: '38',
                name: '水浒传',
                author: 'Suesie',
                version: '2013.3.14 第二次印刷',
                num: 3
            }];
        return book;
    })
    .service("addReaderService",function (){
        this.datalist=function (){
            //定义简单的数据字段
           var jsondata={
               name:"",
               tel:"",
               email:""
           };
            return jsondata;
        };
        //注册信息追加服务
        this.addReader=function (a,b,c,d){
            var addReaderInfo = {
                'id': a.length + 1,
                'name': b.name,
                'sex': c,
                'tel': b.tel,
                'email': b.email,
                'time': d
            };
            a.push(addReaderInfo);
           }
    })
    .service('addBookService',function(){
        this.getData=function(id){
            var addBookData={
                'id':id,
                'name':'',
                'author':'',
                'version':'',
                'num':''
            };
            return addBookData;
        };
    })
    .service('fenYeService',function(){
        this.fenYe=function(data,currentNum,pageNum){
            var pageData=data.slice(currentNum*pageNum,(currentNum+1)*pageNum);
            return pageData;
        };
    });
