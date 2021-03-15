<?php
     $json = new stdClass();
     $json-> Sanremo = array(
        new stdClass(),
        new stdClass(),
        new stdClass(),
        new stdClass(),
        new stdClass()
      );
	 $json->Sanremo[0]->title = "Concattedrale di Sanremo (5 km)";
   $json->Sanremo[0]->disp = "Posti disponibili : 34";
   $json->Sanremo[0]->desc = "La concattedrale di San Siro (nome completo: Insigne Basilica Collegiata Concattedrale di San Siro) è l'edificio religioso più antico di Sanremo e uno dei principali esempi di architettura romanica nel ponente ligure. Situata nel centro storico, nell'omonima piazza, è stata eretta nel XII secolo.";
   $json->Sanremo[0]->img_url = "Concattedrale.jpg";
   

   $json->Sanremo[1]->title = "Villa Nobel (12 km)";
   $json->Sanremo[1]->disp = "Posti disponibili : 98";
   $json->Sanremo[1]->desc = "Lo splendido edificio è in stile moresco , “il mio nido” per il suo più famoso proprietario, il celebre industriale, chimico e filantropo svedese Alfred Nobel, che in essa lavorò a numerosi brevetti e redasse il famoso testamento con cui destinava la sua fortuna all’istituzione del Premio che porta il suo nome.";
   $json->Sanremo[1]->img_url = "VillaNobel.jpg";

   $json->Sanremo[2]->title= "Santuario della Madonna della Costa (23 km)";
   $json->Sanremo[2]->disp = "Posti disponibili : 98";
   Posti disponibili : 28
   $json->Sanremo[2]->desc = "Il santuario della Madonna della Costa è un santuario mariano che si trova a Sanremo, nella Riviera dei Fiori. Le principali festività si celebrano il 15 agosto (festa dell'Assunta).";
   $json->Sanremo[2]->img_url = "Concattedrale.jpg";

   $json->Sanremo[3]->video_url="https://www.youtube.com/embed/_u7Dthtf2kY";
   $json->Sanremo[3]->title = "Video dei POI di  Sanremo"; 
   $json->Sanremo[3]->Video = "Clicca qui sopra per vedere una Panoramica di Sanremo. Premi play per guardarlo, buona visione!";

	 echo json_encode($json);
?>