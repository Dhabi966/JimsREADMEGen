//function to generate markdown for the readme file
function generateMarkdown(data) {
  return `# ${data.title}

 ## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributions)
- [Tests](#tests)
- [Contact Information](#contact-information)

## Descriptionw
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

## Contact-Information
- Github: [Github Profile](https://github.com/${data.username})
- Email: ${data.email} `;

}
    
module.exports = generateMarkdown;
