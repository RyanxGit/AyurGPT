const body = document.querySelector("body"),
 sidebar = body.querySelector(".sidebar"),
 toggle = body.querySelector(".toggle"),
 searchbtn = body.querySelector(".search-box"),
 modeswitch = body.querySelector(".toggle-switch"),
 modetext = body.querySelector(".mode-text"),
 servicelink = document.getElementById("services-link"),
 ayurbotlink=document.getElementById("ayurbot-link"),

 servicecontent=document.getElementById("service-cont"),
 ayurcontent=document.getElementById("ayurbot-content");

 toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");

 });
 modeswitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
      modetext.innerHTML= "Light Mode"
    }else{
      modetext.innerHTML="Dark Mode";
    }
    
 });
function playVideo(b){
  const video = document.getElementById(b);
  video.play();
  
}
 function pauseVideo(b){
  const video = document.getElementById(b);
  video.pause()
 }
//  function showserviecs(){
//   servicecontent.style.display="block";
//   ayurcontent.style.display="none";
//  }
//  function showayurbot(){
//   servicecontent.style.display="none";
//   ayurcontent.style.display="block";
//  }
//  servicelink.addEventListener("click",showserviecs);
//  ayurbotlink.addEventListener("click",showayurbot);

//    showayurbot();
