const generateTeam = (team) => {
  const generateManager = (manager) => {
    return ` <div class="card">
    <div class="card-body">
      <h5 class="card-title">Manager: ${manager.getName()}</h5>
      <p class="card-text">ID: ${manager.getId()}</p>
      <p class="card-text">Email: ${manager.getEmail()}</p>
      <p class="card-text">Email: ${manager.getOffice()}</p>
    </div>
  </div>`;
  };
  const generateEngineer = (engineer) => {};
  const generateIntern = (intern) => {};
  const html = [];
  html.push(generateManager(team[0]));
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );
  return html.join("");
};

module.exports = (team) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- CSS only -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
      <title>Team Profile Generator</title>
      <link />
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid text-center">
        <h1 class="display-4">Team Profile Generator</h1>
      </div>
      <section class="container text-center">
      ${generateTeam(team)}
            </section>
            <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
    </body>
  </html>
  `;
};

// ${manager.getEmail()}
