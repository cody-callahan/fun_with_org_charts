
function generateHtml(finishedTeamArray) {
    content = `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <title>Our Team</title>
                
            </head>
            <div class="jumbotron">
            <h1>My Team</h1>      
            </div>
            <body>
                ${generateEmployeeCard(finishedTeamArray)}                   
            </body>
            </html>`;
            return content
}



function generateEmployeeCard(finishedTeamArray) {
    let cards = '';
    finishedTeamArray.forEach(person => {
    
        if(person.getRole() == 'Manager') {
            cards += `
        <div class="card bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
        ${person.getRole()}
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${person.name}</li>
                <li class="list-group-item">ID: ${person.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${person.email}">${person.email}</a> </li>
            </ul>
    </div>`;
        } if(person.getRole() == 'Intern') {
            cards += `
            <div class="card bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">
            ${person.getRole()}
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${person.name}</li>
                    <li class="list-group-item">ID: ${person.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${person.email}">${person.email}</a> </li>
                    <li class="list-group-item">:School ${person.school}</li>
                </ul>
            </div>`;
        } if(person.getRole() == 'Engineer') {
            cards += `
            <div class="card bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">
            ${person.getRole()}
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${person.name}</li>
                    <li class="list-group-item">ID: ${person.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${person.email}">${person.email}</a> </li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${person.github}" target="_blank"> ${person.github}</a></li>
                </ul>
            </div>`;
        }
});
return cards
}

module.exports = generateHtml;