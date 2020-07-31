
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "A website focus in AI",
    "body": "If you are interested in our team, and you want to get information about us at the first time. You can scan the picture below by WeChat. [It’s our WeChat Public Account named chaos-gravity. ] Have Fun! "
    }, {
    "id": 2,
    "url": "http://localhost:4000/authors",
    "title": "A website focus in AI",
    "body": "If you are interested in our team, and you want to get information about us at the first time. You can scan the picture below by WeChat. [It’s our WeChat Public Account named chaos-gravity. ] Have Fun! "
    }, {
    "id": 3,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/contact",
    "title": "Contact",
    "body": "  Please send your message to Chaos万有引力. We will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                                                               Softmax              :       ​	Softmax，这个概念参考[1]解释的非常仔细，这里只做简述，先上公式：:                                                                               Beer                 09 Jul 2020                                                                                                                           Hello, World!              :       现在是2020年2月22日，总觉得该做点什么。:                                                                               Beer                 22 Feb 2020                                "
    }, {
    "id": 6,
    "url": "http://localhost:4000/wechat",
    "title": "A website focus in AI",
    "body": "If you are interested in our team, and you want to get information about us at the first time. You can scan the picture below by WeChat. [It’s our WeChat Public Account named chaos-gravity. ] Have Fun! "
    }, {
    "id": 7,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 8,
    "url": "http://localhost:4000/Softmax/",
    "title": "Softmax",
    "body": "2020/07/09 - ​	Softmax，这个概念参考[1]解释的非常仔细，这里只做简述，先上公式： 这公式是啥子意思呢？先看一个应用： ​	假如我们现在有一个分类任务，如果模型足够理想，输入一张猫图，输出[1, 0]，输入一张狗图，输出[0, 1]。通常这种任务，前面会是一个深度卷积神经网络，最后会有一个全连接层，经过这个全连接层会得到图的特征向量(embedding)，我自己喜欢管embedding叫特征向量。上图中最后得到的特征向量是[1. 2, 0. 3]，再经过softmax： 得到了[0. 71, 0. 29]，我们可以这样理解最后这个结果，这张图是猫的概率是0. 71，是狗的概率是0. 29，它们两加起来是1，不管softmax的输入向量为何，输出向量里的值相加一定是1，得到的结果可以理解为图在各个类上的概率分布，向量的长度即类别（class）的数量。再以一个长度为3的一维向量为例： 假设你现在要训练一个模型，它需要有能力分辨猫，狗，鸟，你模型训练好以后，输入了一张鸟图，得到了一个这样的特征向量，现在要做softmax，计算步骤如下：  ​	所以按模型判断，该图是鸟图的概率是0. 0003，明显这个模型不准诶。 ​	softmax还可用于增强学习（reinforcement learning），先上公式： ​	在机器视觉领域，softmax的输出，是图像在各个类别上的概率分布，在增强学习领域，softmax的输出可以是各个策略的在某个步骤或时间会被采取的可能性。公式中a是我们可以选的行动，t表示的是步骤或者时间，τ是系统温度，这个值越高，模型越冲动，越会去探索新的可能。qt(a)是从现在已知的情况来看，选择行动a会获得成功的概率，Pt(a)则是模型在t这个步骤或时间上会采取a行动的概率。 ​	想象一下，我们正在训练一种强化学习模型。我们必须配置一个系统温度τ，它是系统随机行动的可能性。该系统目前有两个选项：打Ace或打King。根据过往经验，打Ace成功的概率是80％，打King成功的概率是20％。我们将温度τ配置为2。 ​	那么在这一轮中，模型打Ace的概率是： ​	这意味着尽管该模型目前有80％的把握确定打Ace是正确的策略，但只有57％的可能性使用该策略。这是因为在强化学习中，我们为探索（测试新策略）和开发（使用已知策略）均分配了价值。如果我们提高温度，则该模型将变得“更具冲动性”：更有可能探索新策略，而不是使用最有可能获胜的策略。 声明：图文，案例均来自参考，本篇仅是翻译和摘要。 参考： [1] Thomas Wood，Softmax Function Definition, DeepAI ​ "
    }, {
    "id": 9,
    "url": "http://localhost:4000/HelloWorld/",
    "title": "Hello, World!",
    "body": "2020/02/22 - 现在是2020年2月22日，总觉得该做点什么。 不如敲行python代码吧！ print( Hello, World! )来日方长，请多关照！ "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});