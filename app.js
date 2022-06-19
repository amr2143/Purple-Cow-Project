const vote = document.getElementById('vote');

vote.addEventListener("click",function(){
   var xhr = new XMLHttpRequest();
   xhr.open("GET", "https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e");
   xhr.responseType = "json";
   xhr.onload = function() {

    counter.textContent = this.response.value;
    counterMessage.textContent = "People are interested in Purple Cow Project gear!";
}
xhr.send();

})