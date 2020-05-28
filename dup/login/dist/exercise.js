$(document).ready(function() {
  $('#ajax-form button[type="submit"]').click((event) => {
    event.preventDefault()
//====== ajax打包資料 ====================================================================================================
//====== ajax資料回顯 ====================================================================================================
$.get('./step5', {
  fname: $('#ajax-form input[name=fName]').val(),
  lname: $('#ajax-form input[name=lName]').val(),
  //sname: $('#ajax-form input[name=sName]').val(),

}, (data) => {
$('#ajax-output').html('<font color="#ff0000">'+ data+ '</font>');
})

//====== ajax同步等待loading ====================================================================
setTimeout(() => {    //update `div#ajax-output` first
  $('#ajax-output').html('loading')
}, 10)


  })
});
