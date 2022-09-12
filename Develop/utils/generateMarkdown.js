// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `## License
    [![License: MIT](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)`;
}
if (license === 'Apache 2.0') {
  return `## License
  [![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue)](https://opensource.org/licenses/Apache-2.0)`;
}
if (license === '') {
  return `## License
  [![License: //](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)`;
}
if (license === '') {
  return `## License
  [![License: //](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)`;
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

module.exports = generateMarkdown;}
