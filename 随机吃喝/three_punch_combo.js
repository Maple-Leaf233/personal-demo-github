console.log('$("#start"): ', $("#start"));
$i = 0;
$("#start").click(function () {
  $i++;
  if ($i >= 6) {
    $("#start").hide();
    $("#stop").show();
  }
});
$("#stop").click(function () {
  alert("这么作？今天别吃了！");
  $(this).hide();
  // $("#banner").show();
});
// $("#close_banner").click(function () {
//   $("#banner").hide();
// });