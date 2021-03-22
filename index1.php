<?php
   $json = new stdClass();
	 $json->title = "Benvenuto a Sanremo";
   $json->monumento1 = "Concattedrale di Sanremo (5 km)";
   $json->disp = "Posti disponibili : 34";
	 $json->desc = "La concattedrale di San Siro (nome completo: Insigne Basilica Collegiata Concattedrale di San Siro) è l'edificio religioso più antico di Sanremo e uno dei principali esempi di architettura romanica nel ponente ligure. Situata nel centro storico, nell'omonima piazza, è stata eretta nel XII secolo.";
   $json->img_url1 = "Concattedrale.jpg";
   $json->monumento2 = "Villa Nobel (12 km)";
   $json->disp = "Posti disponibili : 98";
   $json->"Lo splendido edificio è in stile moresco , “il mio nido” per il suo più famoso proprietario, il celebre industriale, chimico e filantropo svedese Alfred Nobel, che in essa lavorò a numerosi brevetti e redasse il famoso testamento con cui destinava la sua fortuna all’istituzione del Premio che porta il suo nome."
   $json->img_url2 = "VillaNobel.jpg";
   $json->monumento3 = "Santuario della Madonna della Costa (23 km)";
   $json->disp = "Posti disponibili : 28";
   $json->"Il santuario della Madonna della Costa è un santuario mariano che si trova a Sanremo, nella Riviera dei Fiori. Le principali festività si celebrano il 15 agosto (festa dell'Assunta)."
  $json->img_url3 = "SantuarioMadonna.jpg",
   $json->video_url = "https://www.youtube.com/embed/_u7Dthtf2kY",

   $json->monumento4 = " Video dei POI di  Sanremo";
   
   $json->Video = "Clicca qui sopra per vedere una Panoramica di Sanremo. Premi play per guardarlo, buona visione!";

	 echo json_encode($json);
?>