var str = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href; 
document.getElementById("votelink").value = (str); 
if (str=="https://topexpertbd.blogspot.com/p/today-photo-gallery.html?m=1"){
document.getElementById("voteimge").src = ("https://i.ibb.co/TMNPddM/Exif-JPEG-420.jpg");
}
else{			
   var stt = str.replace("https://topexpertbd.blogspot.com/p/today-photo-gallery.html?", "");

	


var t1 = stt.replace("&m=1", "");



	  document.getElementById("voteimge").src = (t1);
	  }

function btn(){	
links = "https://topexpertbd.blogspot.com/2019/05/blog-post_34.html";  
window.open(links);

}
