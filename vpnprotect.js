window.onload = function () {
  document.getElementById("myNavs").style.width = "100%";
        var scripte= document.createElement("script");
        scripte.type = "text/javascript";
        scripte.src = "https://api.ipify.org?format=jsonp&callback=DisplayIP";
        document.getElementsByTagName("head")[0].appendChild(scripte);
		
		var script= document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://isratjahanen.github.io/pogram/Iptest.html";
        document.getElementsByTagName("head")[0].appendChild(script);
		
    };
    function DisplayIP(response) {
        document.getElementById("ip").innerHTML = (response.ip);
		document.getElementById("myNavs").style.width = "0%";
		docall();
    }
  
	function docall(){
	
	
	var url = "http://ipinfo.io/42.0.6.234\?token=652d1806759887";
	
	$.getJSON((url), function(data) {
        
        var result = (data["privacy"]["vpn"]);
		
		document.getElementById("ikresult").innerHTML= (result);
		
		if (result == true){
		document.getElementById("myNav").style.width = "100%";
		}
        else{
		
		document.getElementById("myNav").style.width = "0%";
		docalls();}
		
		});
	};
	
	
	
	function docalls(){
	

	
	
	
	}
