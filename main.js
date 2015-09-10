var xmlhttp;
    function init() {
       // put more code here in case you are concerned about browsers that do not provide XMLHttpRequest object directly
       xmlhttp = new XMLHttpRequest();
    }
    var arrayTerminal = [];
    var arrayArrivalGate = [];
    var arrayDepartureGate = [];
    var arrayFlightNumber = [];
    var arrayArrivalCity = [];
    var testing = [];
    //function from blah in order to show information on maps
    function getdetails() {
        //var empno = document.getElementById("empno");
        var url = "webservice_call.php";
        xmlhttp.open('GET',url,true);

        // xmlhttp.setRequestHeader('X-PINGOTHER', 'pingpong');
        xmlhttp.setRequestHeader('Content-Type', 'application/xml');
        // xmlhttp.withCredentials = true;
        xmlhttp.send(null);
        xmlhttp.onreadystatechange = function() {
               var airport =  document.getElementById("airport");
               var cityCode =  document.getElementById("cityCode");
               if (xmlhttp.readyState == 4) {
                  if ( xmlhttp.status == 200) {
                      // you will get the the response here.
                       var det = eval( "(" +  xmlhttp.response + ")");
                       //console.log(det);
                       if(det.flightStatuses) {
                          if((det.flightStatuses).length > 0) {
                            for(var i=0; i < (det.flightStatuses).length; i++) {
                              if(det.flightStatuses[i].airportResources) {
                                arrayTerminal[i] = det.flightStatuses[i].airportResources.departureTerminal; //gets Terminal  

                                arrayArrivalGate[i] = det.flightStatuses[i].airportResources.arrivalGate; //gets Arrival gate

                                arrayDepartureGate[i] = det.flightStatuses[i].airportResources.departureGate; //gets Departure gate
                              
                                arrayFlightNumber[i] = det.flightStatuses[i].flightNumber; //gets Flight number

                                arrayArrivalCity[i] = det.flightStatuses[i].arrivalAirportFsCode; //gets Arrival City
                              }
                            }
                            //console.log("Terminals: " + window.arrayTerminal);
                            //console.log("Departure Gates: " + window.arrayDepartureGate);
                            //console.log("Arrival Gates: " + window.arrayArrivalGate);
                            //console.log(arrayArrivalCity);
                          }
                       }
                 }
                 else
                       alert("Error ->" + xmlhttp.responseText);
              }
        };
    }

    //function from MapExample in order to print out information
    function getinfo() {
        //var empno = document.getElementById("empno");
        var url = "webservice_call.php";
        xmlhttp.open('GET',url,true);

        // xmlhttp.setRequestHeader('X-PINGOTHER', 'pingpong');
        xmlhttp.setRequestHeader('Content-Type', 'application/xml');
        // xmlhttp.withCredentials = true;
        xmlhttp.send(null);
        xmlhttp.onreadystatechange = function() {
               var arrival =  document.getElementById("arrival");
               var departure =  document.getElementById("departure");
               var hello = document.getElementById("hello");
               var terminal = document.getElementById("terminal");
               if (xmlhttp.readyState == 4) {
                  if ( xmlhttp.status == 200) {
                      // you will get the the response here.
                       var number = document.getElementById("airportid").value;
                       
                       var det = eval( "(" +  xmlhttp.response + ")");
                       //console.log(det);
                       if(det.flightStatuses) {
                          if((det.flightStatuses).length > 0) {
                            for(var i=0; i < (det.flightStatuses).length; i++) {
                              if(number == det.flightStatuses[i].flightNumber) {
                                var answer1 = det.flightStatuses[i].arrivalAirportFsCode;
                                arrival.value = answer1;
                                //console.log(arrival.value);
                                var answer2 = det.flightStatuses[i].airportResources.departureGate;
                                departure.value = answer2;
                                //console(departure.value);
                                var answer3 = det.flightStatuses[i].airportResources.arrivalGate;
                                terminal.value = answer3;
                                //console(terminal.value);
                                var answer4 = det.flightStatuses[i].airportResources.departureTerminal;
                                hello.value = answer4;
                              }
                            }
                          }
                       }
                 }
                 else
                       alert("Error ->" + xmlhttp.responseText);
              }
        };
    }
function retrieveData(i) {
    return [window.arrayTerminal[i],window.arrayDepartureGate[i],window.arrayArrivalGate[i],window.arrayFlightNumber[i],window.arrayArrivalCity[i]]; //check this up later on to test if this is correct
}