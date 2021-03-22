var receiveData = function(data) {
    console.log(data);
    let Sanremo = data.Sanremo;
  
  for (poi of poi) {
  let title = $("<h2>").text(Sanremo.title);
  let monumento1 = $("<p>").text(Sanremo.monumento1);
  let disp1 = $("<h3>").text(Sanremo.disp1);
  let desc1 = $("<p>").text(Sanremo.desc1);
  let img_url1 = $("<img>").attr('src', Sanremo.img_url1);
  let monumento2 = $("<p>").text(Sanremo.monumento2);
  let disp2 = $("<h3>").text(Sanremo.disp2);
  let desc2 = $("<p>").text(Sanremo.desc2);
  let img_url2 = $("<img>").attr('src', Sanremo.img_url2);
  let monumento3 = $("<p>").text(Sanremo.desc3);
  let disp3 = $("<h3>").text(Sanremo.disp3);
  let desc3 = $("<p>").text(Sanremo.desc3);
  let img_url3 = $("<img>").attr('src', Sanremo.img_url3);
  let monumento4 = $("<iframe>").attr('src', Sanremo.monumento4);
  let video = $("<p>").text(Sanremo.video);
  let video1 = $("<video1>").attr('src', Sanremo.video1);

  menu_card
  .append(title)
  .append(monumento1)
  .append(disp1)
  .append(desc1)
  .append(img_url1)
  .append(monumento2)
  .append(disp2)
  .append(desc2)
  .append(img_url2)
  .append(monumento3)
  .append(disp3)
  .append(desc3)
  .append(img_url3)
  .append(monumento4)
  .append(video);

   $(".flexcontainer").append(section);
  }
}

let onFail = function(error){
  console.log("errore nella lettura del file json");
  console.log(errore);
}
let init = function() {
  $.getJSON("data.php")
  .done(receiveData)
  .fail(onFail);
}

$(document).ready(init);