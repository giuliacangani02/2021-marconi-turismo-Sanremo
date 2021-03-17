var receiveData = function(data) {
    console.log(data);
    $("#title").text(data.title);
    let Sanremo = data.Sanremo;
  
  let felxcontainer = $("<div>").addClass("flexcontainer");
  let title = $("<h2>").text(Sanremo.title);
  let Concattedrale di Sanremo (5 km) = $("<p>").text(Sanremo.title);
  let disp = $("<h3>").text(Sanremo.disp);
  let desc = $("<p>").text(Sanremo.desc);
  let img_url = $("<img>").attr('src', Sanremo.img_url);

  let title = $("<h3>").text(Sanremo.title);
  let Villa Nobel (12 km) = $("<p>").text(Sanremo.title);
  let disp = $("<h3>").text(Sanremo.disp);
  let img_url = $("<img>").attr('src', Sanremo.img_url);

  let title = $("<h3>").text(Sanremo.title);
  let Santuario della Madonna della Costa (23 km) = $("<p>").text(Sanremo.desc);
  let disp = $("<h3>").text(Sanremo.disp);
  let video_url = $("<iframe>").attr('src', Sanremo.video_url);

  let title = $("<h3>").text(Sanremo.title);
  let Video = $("<p>").text(Sanremo.Video);
  
  $(".flexcontainer").append(section);
  section.append(title);
  section.append(Concattedrale di Sanremo (5 km);
  section.append(disp);
  section.append(desc);
  section.append(img_url);
  section.append(title);
  section.append(Villa Nobel (12 km);
  section.append(disp);
  section.append(desc);
  section.append(img_url);
  section.append(title);
  section.append(Santuario della Madonna della Costa (23 km);
  section.append(disp);
  section.append(desc);
  section.append(img_url);
  section.append(title);
  section.append(Video);

}

let onFail = function(error){
  console.log("errore nella lettura del file json");
  console.log(errore);
}
let init = function() {
  //$.getJSON("poi_list.json").done(receiveData);
  $.getJSON("data.php")
  .done(receiveData)
  .fail(onFail);
}

$(document).ready(init);