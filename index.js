const inquirer = require("inquirer");
const fs = require("fs");
// const { title } = require("process");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of the project?",
      name: "title",
    },
    {
      type: "input",
      message: "Why was this program created?",
      name: "why",
    },
    {
      type: "input",
      message: "What is unique about this program?",
      name: "features",
    },
    {
      type: "input",
      message: "Who should be credited?",
      name: "credits",
    },
    {
      type: "list",
      message: "What license will you use?",
      name: "license",
      choices: [
        "Apache 2.0 License",
        "Boost Software License 1.0",
        "BSD 3-Clause License",
        "GNU GPL v3",
        "Eclipse Public License 1.0",
      ],
    },
    {
      type: "input",
      message: "GitHub Username:",
      name: "username",
    },
    {
      type: "input",
      message: "Email:",
      name: "email",
    },
  ])
  .then(function (data) {
    let link = "";
    let template = `# ${data.title}\n\n`;
    switch (data.license) {
      case "Apache 2.0 License":
        template +=
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
        link = "https://opensource.org/licenses/Apache-2.0";
        break;
      case "Boost Software License 1.0":
        template +=
          "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]";
        link = "https://www.boost.org/LICENSE_1_0.txt";
        break;
      case "BSD 3-Clause License":
        template +=
          "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
        link = "https://opensource.org/licenses/EPL-1.0)";
        break;
      case "GNU GPL v3":
        template +=
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
        link = "https://www.gnu.org/licenses/gpl-3.0";
        break;
      case "Eclipse Public License 1.0":
        template +=
          "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]";
        link = "https://opensource.org/licenses/EPL-1.0";
        break;
    }
    template += `\n### Table of Contents\n\n- [Title](#title)\n [Description](#description)\n [Features](#features)\n [Credits](#credits)\n [License](#license)\n [Contact]{#contact}\n`;
    template += `## Title\n\n${data.title}\n\n`;
    template += `## Description\n\n${data.why}\n\n`;
    template += `## Features\n\n${data.why}`;
    template += `## Credits\n\n${data.credits}`;
    template += `## Liscense\n\n[${data.license}]${link}\n\n`;
    template += `## Contact #### Github: [github.com/${data.username}]  Email:${data.email}`;

    writeToFile(`${data.title}`, template);
  });

function writeToFile(filename, data) {
  fs.writeFile(
    `./${filename.toLowerCase().split("").join("")}.md`,
    data,
    (err) => {
      if (err) {
        console(err);
      }

      console.log("file created");
    }
  );
}
