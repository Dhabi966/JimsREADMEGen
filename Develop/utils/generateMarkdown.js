// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}     
  
<a href="https://img.shields.io/badge/License-${data.license[0]}-brightgreen">
<img src="https://img.shields.io/badge/License-${data.license[0]}-brightgreen"></a>

  
 ## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributions)
- [Tests](#tests)
- [Questions](#questions)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License 
${data.license}

## Contributions
${data.contributions}

## Tests
${data.tests}

## Questions
- Github: [Github Profile](https://github.com/${data.username})
- Email: ${data.email}`;
}

// TODO: Create a function that returns a license badge
//based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `# license
  [![License: MIT](https://img.shields.io/badge/License-MIT-green)]`;
  }
  if (license === "Apache 2.0") {
  return `# license
  [![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue)]`;
}
  if (license === "Mozilla 2.0") {
  return `# license
     [![License: Mozilla 2.0](https://img.shields.io/badge/license-Mozilla%202.0-red)]`;
}
if (license === "None") {
  return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `# license
     [![License: MIT](https://opensource.org/licenses/MIT)]`;
  }
}
if (license === "Apache 2.0") {
  return `# license
     [![License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)]`;
}
if (license === "Mozilla 2.0") {
  return `# license
     [![License: Mozilla 2.0](https://opensource.org/licenses/MPL-2.0)]`;
}
if (license === "None") {
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  }

  function renderLicenseBadge(license) {
    if (license !== "None") {
      return license;
    }
  }
}}

module.exports = generateMarkdown;
