var receiveData = function(data) {
    console.log(data);
    let Sanremo = data.Sanremo;
  
  for (poi of poi) {
  let title = $("<h2>").text(Sanremo.title);
  let Concattedrale_Sanremo(5km) = $("<p>").text(Sanremo.title);
  let disp = $("<h3>").text(Sanremo.disp);
  let desc = $("<p>").text(Sanremo.desc);
  let img_url = $("<img>").attr('src', Sanremo.img_url);
  let Villa_Nobel(12km) = $("<p>").text(Sanremo.title);
  let img_url = $("<img>").attr('src', Sanremo.img_url);
  let Santuario_della_Madonna_della_Costa(23km) = $("<p>").text(Sanremo.desc);
  let video_url = $("<iframe>").attr('src', Sanremo.video_url);
  let Video = $("<p>").text(Sanremo.Video);
  
  menu_card
  .append(title);
  .append(Concattedrale_di_Sanremo(5km);
  .append(disp);
  .append(desc);
  .append(img_url);
  .append(Villa_Nobel(12km);
  .append(Santuario_della_Madonna_della_Costa (23 km);
  .append(Video);

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