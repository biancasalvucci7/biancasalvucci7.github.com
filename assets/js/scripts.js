$(document).ready(function(){
  var letters = $('#whoami').text();
  var nHTML = '';
  for(var letter of letters) {
    nHTML+="<span class='x'>"+letter+"</span>";
  }
  $('#whoami').html(nHTML);
});
