$(document).ready(function () {
    $('#lookup-btn').click(function () {
        let searchedWord = $('#word').val();
        console.log(searchedWord);
        $.post('http://localhost:8000/dictionary', {word: searchedWord})
            .done(displayMeanings)
            .fail(handleError);
    })
});

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
