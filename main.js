new Vue ({
    el:'#app',
    data:{
        //ProductList:["1","2","3"],
        ProductList:[
            { name: "2x2魔術方塊", src: "img/2X2.jpg"},
            { name: "3x3魔術方塊", src: "img/3X3.jpg"},
            { name: "4x4魔術方塊", src: "img/4X4.jpg"},
            { name: "玉米", src: "img/玉米.jpg"},
            { name: "芒果", src: "img/芒果.jpg"},
            { name: "花椰菜", src: "img/花椰菜.jpg"},
            { name: "香蕉", src: "img/香蕉.jpg"},
            { name: "草莓", src: "img/草莓.jpg"},
            { name: "番茄", src: "img/番茄.jpg"},
            { name: "蘋果", src: "img/蘋果.jpg"},
        ],
        ProductID:"",
        showItem: 1,
        CollectList:[],
    },
    methods:
    {
        JoinList()
        {
            var newProduct = {name: this.ProductID, src: imgSrc};
            this.ProductList.push(newProduct);
            this.ProductID = "";
        },
        removeProduct(index)
        {
            this.ProductList.splice(index, 1);
        },
        ClearAll()
        {
            this.ProductList = [];
        },
        ClearCollectList()
        {
            this.CollectList = [];
        },
        GoTo1()
        {
            this.showItem = 1;
        },
        GoTo2()
        {
            this.showItem = 2;
        },
        addCollect(index)
        {
            var newCollect = {CollectName: this.ProductList[index].name, CollectSrc: this.ProductList[index].src};
            this.CollectList.push(newCollect);
        },
        removeCollect(index)
        {
            this.CollectList.splice(index, 1);
        },
    }
});

var mypic = document.querySelector('#mypic'); 
var imgSrc;
var files;
var file;
var URL;

mypic.addEventListener('change', (e) => //監聽圖片檔案
{
    files = e.target.files;
    file = files[0];
    URL =window.URL || window.webkitURL;

    imgSrc = URL.createObjectURL(file);
});