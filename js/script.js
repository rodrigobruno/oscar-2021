// JavaScript Document
var ourRequest = new XMLHttpRequest();

var ourButton = document.getElementById('get-details');
var ourDiv = document.getElementById('results');


ourRequest.open('GET', 'https://api.jsonbin.io/b/605ca60b16da904608a145c9');

ourRequest.onload = function () {

    if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHtml(ourData);
    }
    else {
        console.log('We connected to the server but it returned an error');
    }

};

ourRequest.onerror = function () {
    console.log('Connection Error');
};

ourRequest.send();

/*
function renderHtml(data) {
    var htmlString = '';
    var death_year, left_office;

    htmlString += '<h3 class="my-4">Melhor filme</h3>';
    htmlString += '<div class="list-group shadow-lg">';
    htmlString += '<ul class="list-group">';

    for (i = 0; i < data.length; i++) {
        if (data[i].death_year == null) {
            death_year = ' - ';
        }
        else {
            death_year = data[i].death_year;
        }

        if (data[i].left_office == null) {
            left_office = ' - ';
        }
        else {
            left_office = data[i].left_office;
        }
        htmlString += '<tr>';
        htmlString += '<td>' + data[i].number + '</td>';
        htmlString += '<td>' + data[i].president + '</td>';
        htmlString += '<td>' + data[i].birth_year + '</td>';
        htmlString += '<td>' + death_year + '</td>';
        htmlString += '<td>' + data[i].took_office + '</td>';
        htmlString += '<td>' + left_office + '</td>';
        htmlString += '<td>' + data[i].party + '</td>';
        htmlString += '</tr>';
    }

    htmlString += '</ul>';
    htmlString += '</div>';

    htmlString += '<li class="list-group-item d-flex align-items-center">';

    htmlString += '    <div class="pretty p-icon p-toggle p-plain">';
    htmlString += '        <input type="radio" name="melhorFilme" id="movieBelaVinganca">';
    htmlString += '        <div class="state p-on">';
    htmlString += '            <i class="icon bi-trophy-fill"></i>';
    htmlString += '            <label></label>';
    htmlString += '        </div>';
    htmlString += '        <div class="state p-off">';
    htmlString += '            <i class="icon bi-trophy"></i>';
    htmlString += '            <label></label>';
    htmlString += '        </div>';
    htmlString += '    </div>';
    htmlString += '    <div class="pretty p-icon p-round p-bigger">';
    htmlString += '        <input type="checkbox" class="form-check-input me-1" type="checkbox" id="flexCheckDefault1" />';
    htmlString += '        <div class="state">';
    htmlString += '            <i class="icon bi-check"></i>';
    htmlString += '            <label></label>';
    htmlString += '        </div>';
    htmlString += '    </div>';
    htmlString += '    <label class="form-check-label overflow me-2" for="flexCheckDefault1">';
    htmlString += '        <div class="fw-bold">Bela Vingança</div>';
    htmlString += '    </label>';
    htmlString += '    <div class="onde-ver ms-auto d-flex align-items-center">';
    htmlString += '        <i class="cib-netflix netflix"></i>';
    htmlString += '    </div>';

    htmlString += '</li>';

    ourDiv.insertAdjacentHTML('beforebegin', htmlString);
}
*/