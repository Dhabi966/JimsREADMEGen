//function to generate markdown for the readme file
function generateMarkdown(data) {
  // TODO: Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(license) {
    if (license === "MIT") {
      return `# License
    [![License: MIT](https://img.shields.io/badge/License-MIT-green)]`;
    }
    if (license === "Apache 2.0") {
      return `# License
  [![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue)]`;
    }
    if (license === "Mozilla 2.0") {
      return `# License
  [![License: //](https://img.shields.io/badge/license-Mozilla%202.0-red)]`;
    }
    if (license === "None") {
      return "";

      // TODO: Create a function that returns the license link
      // If there is no license, return an empty string
      function renderLicenseLink(license) {
        if (license === "MIT") {
          return `# License
    [![License: MIT](https://opensource.org/licenses/MIT)]`;
        }
        if (license === "Apache 2.0") {
          return `# License
    [![License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)]`;
        }
        if (license === "Mozilla 2.0") {
          return `# License
    [![License: Mozilla 2.0](https://opensource.org/licenses/MPL-2.0)]`;
        }
        if (license === "None") {
          return "";
        }
      }

      // TODO: Create a function that returns the license section of README
      // If there is no license, return an empty string
      function renderLicenseSection(license) {
        if (license === "None") {
          return "";
        }
      }

      // TODO: Create a function to generate markdown for README
      function generateMarkdown(data) {
        return `# ${data.title}

 ${renderLicenseBadge(data.license)}
 
 ## Description
 ${data.description}

 ## Table of Contents

-[Title](#title)

-[Description](#description)

-[Installation](#installation)

-[Usage](#usage)

-[License](#license)

-[Contributing](#contributing)

-[Test](#tests)

-[Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License 
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Contact-Information
[Github Profile](https://github.com/${data.username})
${data.Email}

`;
      }
    }
  }
}
module.exports = generateMarkdown;
