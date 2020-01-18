$(function(){
  function buildPost(post){
    var html = `<div class="content">
                ${post.text}
               </div>`
    return html;
  }
  $('#new_post').on('submit', function(e){
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
    .done(function(post){
      var html = buildPost(post);
      $('.contents').append(html);
      $('#post_text').val('');
      $('#submitbtn').removeAttr("disabled");
    })
    .fail(function(post){
      alert('error~!');
    })
  })
});