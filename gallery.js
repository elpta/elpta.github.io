var currImg = 0;
console.log("executing gallery.js");

$('#buttonLeft').on({
    'click': function(){
        console.log("previous button clicked");
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
        console.log("next button clicked");
        if (currImg < numImgs) {
            currImg++;
        } else {
            $('#buttonRight').prop('disabled', true);
        }
        $('#doc').attr('src','mixtec' + currImg + '.jpg');
    }
});