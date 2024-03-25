let SEARCH_LINK = "https://www.google.com/search?q=";
$('document').ready(function(){
   $('#search-button').click(function(){
       let link= SEARCH_LINK + $('#search-engine').val();
         window.open(link, '_blank');
   })
})