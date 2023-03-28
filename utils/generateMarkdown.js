// function to render the license badge based on the selected license
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-brightgreen.svg)`;
}

// function to render the license link based on the selected license
function renderLicenseLink(license) {
  const licenseUrls = {
    'apache': 'https://www.apache.org/licenses/LICENSE-2.0',
    'bsd': 'https://opensource.org/licenses/BSD-3-Clause',
    'mit': 'https://opensource.org/licenses/MIT',
    'gplv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'unlicense': 'http://unlicense.org/'
  };
  // return the license URL for the selected license (or an empty string if no license is selected)
  return licenseUrls[license.toLowerCase()] || '';
}

// function to render the license section of the README based on the selected license
function renderLicenseSection(license) {
  if (license === 'No License') {
    return '';
  }
  return `## License
This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`;
}

// function to generate the complete markdown file based on user input
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  // return the complete markdown file with all sections (including license section, if applicable)
  return `# ${data.title}
  ${licenseBadge}

  ## Description

  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${licenseSection}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, you can reach out to me on [GitHub](https://github.com/${data.username}) or contact me directly at ${data.email}.
  `;
}

// export the generateMarkdown function so it can be used in other files
module.exports = generateMarkdown;
