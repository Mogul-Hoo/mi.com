import './library/jquery.js';

$.ajax({
    type: "get",
    url: "../../interface/getData.php",
    dataType: "json",
    success: function(response) {
        console.log(response);
    }
});