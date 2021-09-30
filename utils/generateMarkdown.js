// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (`${license}`) {
    case "Apache 2.0 License":
      badge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "Boost Software License 1.0":
      badge =
        "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]";
      link = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "BSD 3-Clause License":
      badge =
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
      link = "https://opensource.org/licenses/EPL-1.0)";
      break;
    case "GNU GPL v3":
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "Eclipse Public License 1.0":
      badge =
        "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]";
      link = "https://opensource.org/licenses/EPL-1.0";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
