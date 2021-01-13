import './library/jquery.js';

let id = location.search.split('=')[1];

$.ajax({
    type: "get",
    url: "../../interface/getItem.php",
    data: {
        id: id
    },
    dataType: "json",
    success: function(res) {
        let picture = JSON.parse(res.picture);

        let temp = `
    <div class="top-title">
        <div class="wrapper clear">
            <h2 class="title">${res.title}</h2>
            <a href="#">用户评价</a>
        </div>
    </div>
    <div class="product-box wrapper">
        <div class="left-box">
            <img src="${picture[1].src}" alt="">
        </div>
        <div class="right-box">
            <div class="main-info">
                <h2 class="title">${res.title}</h2>
                <p class="desc">${res.descriptlong}</p>
                <p class="con">小米自营</p>
                <div class="price">
                    <span>${res.price}</span>元
                </div>
            </div>
            <div class="line"></div>
            <div class="adress">
                <span class="iconfont">&#xe613;</span>
                <span>北京</span><span>北京市</span><span>海淀区</span><span>清河街道</span>
                <a href="#">修改</a>
                <p>有现货</p>
            </div>
            <div class="buy-opition">
                <div class="buy-color">
                    <p>选择颜色</p>
                    <a href="#">黑色</a>
                </div>
                <div class="buy-size">
                    <p>选择尺寸</p>
                    <a href="#">65英寸</a>
                </div>
            </div>
            <div class="selected-box">
                <div class="selected">
                    <span class="title">${res.title}</span>
                    <i>2999<em>元</em></i>
                </div>
                <div class="total-price">
                    总计：
                    <span>${res.price}</span>元
                </div>
            </div>
            <div class="btns">
                <div class="add-btn">
                    <a href="#">加入购物车</a>
                </div>
                <div class="add-favorite">
                    <a href="#">喜欢</a>
                </div>
            </div>
            <div class="after-info">
                <span>
                    <i class="iconfont">&#xe637;</i><em>小米自营</em>
                </span>
                <span>
                    <i class="iconfont">&#xe637;</i><em>小米发货</em>
                </span>
                <span>
                    <i class="iconfont">&#xe637;</i><em>7天无理由退款</em>
                </span>
                <span>
                    <i class="iconfont">&#xe637;</i><em>运费说明</em>
                </span>
                <span>
                    <i class="iconfont">&#xe637;</i><em>企业信息</em>
                </span>
                <span>
                    <i class="iconfont">&#xe637;</i><em>30天价格保护</em>
                </span>
            </div>
        </div>
    </div>`;

        $('main').append(temp);
    }
});