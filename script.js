let receiveData = function(data) {
    console.log(data);
    $("#title").text(data.title);
}

let init = function() {
  $.getJSON("poi.json").done(receiveData);
  $.getJSON("data.php").done(receiveData).fail(onFail);

}

$(document).ready(init);

let onFail = function(error) {
  console.log("errore nella lettura del file json");
  console.log(error);
}

let init = function() {
  $.getJSON("data.php")
  .done(create_dyn_card)
  .fail(onFail);
}
$(document).ready(init);