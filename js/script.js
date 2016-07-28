$(document).ready(function(){
    $('.button1').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
    $(document).on('click','.item',function(){
        $(this).remove();
    });
});

$(document).ready(function(){
    $(".button1").click(function(){
        $("ol").append(" <ol></ol>.");
    });

    $(".button2").click(function(){
        $("ol").remove("<ol></ol>");
    });
});