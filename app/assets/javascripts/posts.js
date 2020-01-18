$(function(){
  $('#new_post').on('click', function(e){
    // var new_post = $('#new_post');
    e.preventDefault();
    var url = $(this).attr("action");
    var formData = new FormData(this);

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  })
});