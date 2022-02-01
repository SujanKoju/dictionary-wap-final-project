const API_URL = 'http://localhost:8000/dictionary';

$(document).ready(function () {
    $('#lookup-btn').click(lookUpButtonHandler);
});

function lookUpButtonHandler() {
    $('#meaning-section').html("");
    $('#loading-image').show();
    let searchedWord = $('#word').val();
    $.post(API_URL, {word: searchedWord})
        .done(displayMeanings)
        .fail(handleError)
        .always(hideLoaders);
}

function displayMeanings(data) {
    let final = "";
    data.forEach(function (item, index) {
        final = final + index + '(' + item.wordtype + ') :: ' + item.definition + "<br><br>";
    });
    $('#meaning-section').html(final);
}

function handleError(err) {
    console.log(err);
}
function hideLoaders() {
    $('#loading-image').hide();
}
