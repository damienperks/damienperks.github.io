$(function() {
    getUsers();
})

function getUsers() {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/users",
    }).done(function(users) {
        renderContent(users);
    });
}

function createUser() {
    user1 = {
        name: $('#name1').val(),
        phone: $('#phone1').val(),
        gender: $('input[name=gender1]:checked').val(),
        facebook: $('#facebook').val(),
    }

    $.ajax({
        method: "POST",
        data: user1,
        url: "http://localhost:3000/users",
    }).done(function(users) {
        getUsers();
    });
}

function deleteUser(id) {
    $.ajax({
        method: "DELETE",
        url: "http://localhost:3000/users/" + id
    }).done(function(users) {
        getUsers();
    });
}

function updateUser(id, user) {
    $.ajax({
        method: "PUT",
        url: "http://localhost:3000/users/" + id,
        data: user
    }).done(function() {
        getUsers();
    });
}

function renderContent(users) {
    var htmlContent = '';

    for (let i = 0; i < users.length; i++) {
        htmlContent += '<tr>';

        htmlContent += '<td>' + users[i].name + '</td>';
        htmlContent += '<td>' + users[i].gender + '</td>';
        htmlContent += '<td>' + users[i].facebook + '</td>';
        htmlContent += '<td>' + users[i].phone + '</td>';
        htmlContent += '<td>' + users[i].image + '</td>';

        htmlContent += '</tr>';
    }

    $('#myTable tbody').html(htmlContent);
}