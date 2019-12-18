$('document').ready(function () {
    $('#comment_form').on('submit', function (event) {
        event.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            url : "php/add_comment.php",
            method: "POST",
            data: form_data,
            dataType: "JSON",
            success: function(data){
                    if(data.error != ''){
                        $('#comment_form')[0].reset();
                        $('#comment_message').html(data.error)
                    }else{
                        $('#comment_message').html('hi from here')
                    }
            }
            
        })
    });
    // load  comments
    loadComments()
    setInterval(() => {
    loadComments()
    }, 2000);
    function loadComments(){
        $.ajax({

            url : "php/fetch_comment.php",
            method : "POST",
            success :  function(data){
            $('#display_comment').html(data);
        }
    })
}})
