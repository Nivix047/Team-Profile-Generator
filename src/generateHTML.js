const generateTeam = (team) => {
  const generateManager = (manager) => {
    return `<article class="col-md-4 pb-3">
    <div class="card">
      <div
        class="card-header"
        style="background-color: blue; color: white"
      >
        <h2>${manager.getName()}</h2>
        <h3><i class="fa-solid fa-mug-hot"></i> Manager<h3> 
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
      </ul>
    </div>
  </article>`;
  };
  const generateEngineer = (engineer) => {
    return `<article class="col-md-4 pb-3">
  <div class="card">
    <div
      class="card-header"
      style="background-color: blue; color: white"
    >
      <h2>${engineer.getName()}</h2>
      <h3><i class="fa-solid fa-glasses"></i> Engineer<h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
      </ul>
  </div>
</article>`;
  };
  const generateIntern = (intern) => {
    return `<article class="col-md-4 pb-3">
  <div class="card">
    <div
      class="card-header"
      style="background-color: blue; color: white"
    >
      <h2>${intern.getName()}</h2>
      <h3><i class="fa-solid fa-user-graduate"></i> Intern<h3> 
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
  </div>
</article>`;
  };

  const html = [];

  html.push(generateManager(team[0]));
  console.log("----team----");
  console.log(team);
  console.log("----generateManager(team[0]))----");
  console.log(generateManager(team[0]));
  console.log(typeof generateManager(team[0]));

  html.push(
    team
      // This is where generate(Engineer() is getting called
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
  console.log("----html----");
  console.log(html);
  console.log(html.join(""));
  return html.join("");
};
// node way of doing anonymous function
// module.exports is the anonymous way to generate (generateHTML.js)
// module.exports fires off first
module.exports = (team) => {
  console.log(team);
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- CSS only -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <title>Team Profile Generator</title>
      <link />
    </head>
    <body>
      <header
        class="container-fluid text-center p-5"
        style="background-color: rgb(196, 39, 39); color: white"
      >
        <h1>Team Profile Generator</h1>
      </header>
      <main class="container text-center p-5">
        <section class="row">
        ${generateTeam(team)}
        </section>
      </main>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  
  `;
};

// map: applies a function to every element in the data structure is supply to it // usually an array // it does create a new array but is a array that results the function from it
