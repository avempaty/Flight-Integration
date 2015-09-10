<?php           
    // Now set some options (most are optional)
    $today = getdate();
    $url = "https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/SJC/dep/$today[year]/$today[mon]/$today[mday]/14?appId=baf80a89&appKey=5d343e19eb74a7809f6f3fc15a4a99de&utc=false&numHours=1&maxFlights=5";
    
    $curl = curl_init();
      curl_setopt($curl, CURLOPT_URL, $url);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); // Don't print the result
      curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);
      curl_setopt($curl, CURLOPT_TIMEOUT, 10);
      curl_setopt($curl, CURLOPT_FAILONERROR, true);
      curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0); // Don't verify SSL connection
      curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0); //         ""           ""
      curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type: application/json")); // Send as JSON
      
      
      $return = curl_exec($curl);

      echo ($return);
      // echo "<pre>"; print_r($return); echo "</pre>";exit; 
?>