let receiveData = function(data) {
    console.log(data);
    $("#title").text(data.title);
}

let init = function() {
  $.getJSON("poi.json").done(receiveData);
  $.getJSON("data.php").done(receiveData).fail(onFail);

}

$(document).ready(init);

