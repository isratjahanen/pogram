
	document.getElementById("myNavs").style.width = "0%";
	
	
    $.getJSON("https://api.ipgeolocation.io/ipgeo?apiKey=63da69e357dc4c9db1b846c3d998343d", function(data) {
        
        
	document.getElementById("ip").innerHTML = (data.ip);
	
	document.getElementById("country").innerHTML = (data.country_name);
		
		var results = (data["time_zone"]["is_dst"]);
		
   document.getElementById("ik").innerHTML = (results);
   
   if (results == true){
	document.getElementById("myNav").style.width = "100%";
	}
	else{

	document.getElementById("myNav").style.width = "0%";
	}
		
		docalls();
		
		});
		
	function docalls(){
	
	document.getElementById("myNavs").style.width = "0%";
	
	
	}	
		
