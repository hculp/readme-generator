// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeName = license.replace(/ /g,"%20");
  if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-${badgeName}-brightgreen)`
  }
  return ""
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)`
  }
  return ""
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
    `## License

    Copright @ ${license}. All rights reserved.       
    
    Distributed under the ${license} License.`
    )
  }
  return ""
}

// Generates markdown for README
function generateMarkdown(data) {
  return (
  `# ${data.title}
  ${renderLicenseBadge(data.license)}
  

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#test)
  * [Questions](#questions)
  * ${renderLicenseLink(data.license)}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  Send any questions or feedback to the following contacts:

  * GitHub: [${data.github}](https://github.com/${data.github})
  * Email: [${data.email}](mailto:${data.email})
  
  ${renderLicenseSection(data.license)}`
);
}

module.exports = generateMarkdown;
