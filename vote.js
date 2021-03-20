var str = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href; 

if (str=="https://topexpertbd.blogspot.com/p/today-photo-gallery.html?m=1"){
document.getElementById("voteimge").src = ("https://i.ibb.co/TMNPddM/Exif-JPEG-420.jpg");
}
else{			
   var stt = str.replace("https://topexpertbd.blogspot.com/p/today-photo-gallery.html?", "");

	


var t1 = stt.replace("&m=1", "");



	  document.getElementById("img").src = (t1);
	  }
	  
