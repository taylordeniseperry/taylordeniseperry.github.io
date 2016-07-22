$(document).ready(function($) {

  // Upload btn
  $(".uploadlogo").change(function() {
    readURL(this);
  });

  function readURL(input) {
    var url = input.value;
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0] && (ext == "png" || ext == "jpeg" || ext == "jpg" || ext == "gif" || ext == "svg")) {
      var path = $('.uploadlogo').val();
      var filename = path.replace(/^.*\\/, "");
      $('.fileUpload span').html(filename);
      // console.log(filename);
    } else {
      $(".uploadlogo").val("");
      $('.fileUpload span').html('Only Images Are Allowed!');
    }
  }

//   $('.btn').on('click', function() {
//     var $this = $(this);
//   $this.button('loading');
//     setTimeout(function() {
//        $this.button('reset');
//    }, 8000);
// });

});