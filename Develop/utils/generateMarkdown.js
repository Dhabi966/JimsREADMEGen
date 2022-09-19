// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return selectLicense(license).badge;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    return selectLicense(license).link;
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license){ 
  
  let licenseText;
  
  if (license != 'No License'){
    licenseText=`
  
  This software/code is licensed under the ${selectLicense(license).name}. To use this software/code you must agree to follow and comply the License. A copy of the License can be found at:
  
  `
  }
  
  else{
    licenseText='Not licensed.';
  
  }
  return licenseText;
  }
  // adding links and badges to be shown at top of readme file
  function selectLicense(license) {
    let licenseInfo = {name: '', link:'', badge:''};
    
      switch(license){
        case 'Mozilla Public License 2.0':
          licenseInfo.name = 'Mozilla 2.0';
          licenseInfo.link = 'https://www.mozilla.org/en-US/MPL/2.0/';
          licenseInfo.badge = "https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-orange";
        break;
        
        case 'Apache License 2.0':
          licenseInfo.name = 'Apache License 2.0';
          licenseInfo.link = 'https://www.apache.org/licenses/LICENSE-2.0.txt';
          licenseInfo.badge = "https://img.shields.io/badge/License-Apache%20License%202.0-red";
        break;
        
        case 'MIT License':
          licenseInfo.name = 'MIT License';
          licenseInfo.link = 'https://www.mit.edu/~amini/LICENSE.md';
          licenseInfo.badge = "https://img.shields.io/badge/License-MIT%20License-blue";
        break;
    
        default:
          licenseInfo.name = ''
          licenseInfo.link = ''
          licenseInfo.badge = "https://img.shields.io/badge/License-Not%20licensed-lightgrey";
      }
      return licenseInfo;
    }
// TODO: Create a function to generate markdown for README
// Adding table of contents section and a place for the license badge next
//to the project title
    function generateMarkdown(data) {
      return `# ${data.title}![License Badge](${renderLicenseBadge(data.license)})


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
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributions
${data.contributions}

## Tests
${data.tests}

## Questions
***
You can find additional projects on my github page: https://github.com/${data.username}.
If you have any questions please contact me at my E-Mail address: ${data.email}.

`;}

module.exports = generateMarkdown;
