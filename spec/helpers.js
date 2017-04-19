var formatDate = function(date){
  var d = date.getDate();
  var day = (d < 10) ? '0' + d : d;
  var m = date.getMonth() + 1;
  var month = (m < 10) ? '0' + m : m;
  var y = date.getYear();
  var year = (y < 1000) ? y + 1900 : y;
  return day + "/" + month + "/" + year;
};
