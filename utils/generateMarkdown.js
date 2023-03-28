function generateMarkdown(data) {

  function renderLicenseBadge(license) {
    let licenseBadge = '';
    if (license) {
      licenseBadge = `![License](https://img.shields.io/badge/license-${license}-brightgreen.svg)`;
    }
    return licenseBadge;
  }

  function renderLicenseLink(license) {
    const licenseUrls = {
      'apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
      'mit': 'https://opensource.org/licenses/MIT',
      'gpl-3.0': 'https://www.gnu.org/licenses/gpl-3.0'
    };

    return licenseUrls[license.toLowerCase()] || '';
  }

  function renderLicenseSection(license) {
    let licenseText = '';
    if (license) {
      licenseText = `## License
  
  This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`;
    }
    return licenseText;
  }
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

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

module.exports = generateMarkdown;
