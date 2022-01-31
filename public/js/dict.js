$(document).ready(function () {
    $('#lookup-btn').click(function () {
        let searchedWord = $('#word').val();
        console.log(searchedWord);
        $.post('http://localhost:8080/dictionary', {word: searchedWord})
            .done(displayMeanings)
            .fail(handleError);

    })
});

function displayMeanings(data) {
    console.log(data);
    $('#meaning-section').append(data+"<br>");
}

function handleError(err) {
    console.log(err);
}
