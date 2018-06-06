var datab={
    title:"限量爆款",
    url: "https://jinshuju.net/f/aiby3R",
    btn: "预约抢购",
    recommends:[
    {"title":"洛可小城","fg":"青少年家具","title2":"上下床","material":"桃花芯","num":"5","price":"5980","img":"bk1.jpg"},
    {"title":"美莱屋","fg":"青少年家具","title2":"滑梯床","material":"松木","num":"5","price":"3880","img":"bk2.jpg"},
    {"title":"童一首歌","fg":"青少年家具","title2":"城堡双层床 ","material":"橡胶木","num":"3","price":"6100","img":"bk3.jpg"},
    {"title":"贵人缘","fg":"青少年家具","title2":"挂梯双层床","material":"芬兰松","num":"3","price":"5380","img":"bk4.jpg"},
    {"title":"秀兰邓波儿","fg":"青少年家具","title2":"双层床","material":"鹅掌楸","num":"2","price":"13068","img":"bk5.jpg"},
    {"title":"兰香阁","fg":"青少年家具","title2":"英利沃斯双层床","material":"松木","num":"3","price":"6800","img":"bk6.jpg"},
        
    ]
}

var index2 = new Vue({
    el: ".index2",
    data:{
        topTitle:"贵宾尊享",
        topTitleEn: "vip privileges",
        url: "https://jinshuju.net/f/wl4eTo",
        moreBtn: "更多详情>>",
        lists: [
            {"title":"儿童文化周","p1":"开拓式外教驻场","p2":"亲子文化大餐","p3":"手绘主题长卷"},
            {"title":"亲子世界杯","p1":"专业级教练现场教学","p2":"亲子足球玩转世界杯","p3":"大手牵小手奇趣寻宝"},
            {"title":"预约送好礼","p1":"10000份儿童大礼包","p2":"100000份现金红包","p3":"十大益智玩具任性玩"},
            {"title":"满额抽大奖","p1":"10000份儿童平板电脑","p2":"量身定制健康学习桌椅","p3":"千份亲子五星度假旅游"}
        ],
        listsYS: [
            {ID:"01",title:"省时",titleEn:"time saved",desc:"虎门高铁、转乘东莞地铁(展览中心站)，双轨直达。"},
            {ID:"02",title:"省心",titleEn:"save worry",desc:"500+品牌工厂店，家具、软装、家饰、家电一站搞定。"},
            {ID:"03",title:"省事",titleEn:"provincial affairs",desc:"全屋定制量身设计，买正品家具享更好服务"},
            {ID:"04",title:"省钱",titleEn:"save money",desc:"全品类、多风格，一样的预算，多样的选择。"}
            
        ],

    }
});

var index5 = new Vue({
    el: ".index5",
    data: {
        topTitle: "精品热卖",
        topTitleEn: "hot sale proouct",
        url: "https://jinshuju.net/f/aiby3R",
        btn: "预约抢购",
        lists: [
            {"title":"棕+弹簧F05床垫","pp":"妙卡思","price":"1399","img":"p1.jpg"},
            {"title":"水曲柳挂梯双层床","pp":"杰克丹妮","price":"6880","img":"p2.jpg"},
            {"title":"桃花芯双人床","pp":"洛可小城","price":"2380","img":"p3.jpg"},
            {"title":"芬兰松单床","pp":"贵人缘","price":"2880","img":"p4.jpg"},
            {"title":"松木双层床","pp":"美莱屋","price":"3880","img":"p5.jpg"},
            {"title":"桃花蕊木1.2M双层床+中书架","pp":"爱丁宝贝","price":"7999","img":"p6.jpg"},
            {"title":"白橡木儿童双层床(1200*2000mm)","pp":"启 智","price":"4980","img":"p7.jpg"},
            {"title":"白橡木儿童双层床（不含书架/抽箱）","pp":"启 智","price":"6980","img":"p8.jpg"},
            {"title":"胡桃木单人床（1500*2000）","pp":"秀兰邓波儿","price":"7200","img":"p9.jpg"},
            {"title":"松木02号粉色单床","pp":"LHABC","price":"3999","img":"p10.jpg"},
            {"title":"睡眠中心实木/布艺凯文子母床","pp":"舒 达","price":"6399","img":"p11.jpg"},
            {"title":"睡眠中心环保面板进口书桌椅","pp":"舒 达","price":"7199","img":"p12.jpg"},
            {"title":"原创设计板木青少年书台","pp":"兆 生","price":"1380","img":"p13.jpg"},
            {"title":"原创设计板木青少年书台","pp":"兆 生","price":"2580","img":"p14.jpg"},
            {"title":"核桃木儿童床","pp":"童话森林","price":"3130","img":"p15.jpg"},
            {"title":"红橡木儿童床","pp":"美克马丁","price":"5370","img":"p16.jpg"},
            {"title":"金丝白木子母上下床","pp":"乾 坤","price":"5999","img":"p17.jpg"},
            {"title":"红橡木A-11双层挂梯儿童床","pp":"爱可森","price":"5670","img":"p18.jpg"},
            {"title":"黑胡桃木餐柜酒柜","pp":"爱可森","price":"3788","img":"p19.jpg"},
            {"title":"鹅掌楸实木+纤维板儿童上下床","pp":"尚缇伊","price":"4980","img":"p20.jpg"},
            {"title":"核桃木、baby椅","pp":"圣蒂斯堡·新古典","price":"1364","img":"p21.jpg"},
            {"title":"核桃木青少年床","pp":"圣蒂斯堡·新古典","price":"9020","img":"p22.jpg"},
            {"title":"榉木儿童椅","pp":"欧迪美庭","price":"880","img":"p23.jpg"},
            {"title":"黑檀小木马","pp":"地天泰·国风 ","price":"2250","img":"p24.jpg"},
            {"title":"大果紫檀富贵婴儿床","pp":"明堂红木","price":"11380","img":"p25.jpg"},
            {"title":"100%乳胶儿童乳胶枕","pp":"美克星顿","price":"478","img":"p26.jpg"},
            {"title":"鹅掌楸+头层牛皮儿童椅","pp":"华美居","price":"1188","img":"p27.jpg"},
            {"title":"橡木儿童椅","pp":"法慕家居","price":"1098","img":"p28.jpg"},
            {"title":"FM-703橡木、公主儿童床","pp":"法慕家居","price":"4618","img":"p29.jpg"},
            {"title":"布艺儿童沙发","pp":"香港宝华","price":"980","img":"p30.jpg"},
            {"title":"桦木儿童椅DS048","pp":"香槟公馆","price":"880","img":"p31.jpg"},
            {"title":"黄杨木婴儿床","pp":"诺森家具","price":"7500","img":"p32.jpg"},

        ]
    }
});

