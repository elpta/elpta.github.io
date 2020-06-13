var currImg = 0;

$('#buttonLeft').on({
    'click': function(){
        if (currImg > 0) {
            currImg--;
        } else {
            $('#buttonLeft').prop('disabled', true);
        }
        $('#doc').attr('src','mixtec' + currImg + '.jpg');
    }
});

$('#buttonRight').on({
    'click': function(){
        if (currImg < numImgs) {
            currImg++;
        } else {
            $('#buttonRight').prop('disabled', true);
        }
        $('#doc').attr('src','mixtec' + currImg + '.jpg');
    }
});