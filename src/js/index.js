import './library/jquery.js';

$.ajax({
    type: "get",
    url: "../../interface/getData.php",
    dataType: "json",
    success: function(res) {
        let temp = '';
        res.forEach((elm, i) => {
            let picture = JSON.parse(elm.picture);
            temp += `
            <li>
            <a href="./product.html?id=${elm.id}">
                <div class="picture">
                    <img src="${picture[0].src}" alt="">
                </div>
                <h3>${elm.title}</h3>
                <p class="desc">${elm.descript}</p>
                <p class="price">
                    <strong>${elm.price}</strong>元
                </p>
            </a>
        </li>`;
        });
        $('.list').append(temp);
    }
});