// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Replaces space with proper url encoding so that license name displays correctly
  let badgeName = license.replace(/ /g,"%20");
  if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-${badgeName}-brightgreen)`
  }
  return ""
}

// Returns the license link for the table of contents
// If there is no license, return an empty string
// License URL is encoded to properly link to site with license name
function renderLicenseLink(license) {
  let licenseURL = license.toLowerCase();
  if (license !== "None") {
    if (licenseURL === "mit") {
      licenseURL = "mit";
      return `[Link to ${license} license](https://choosealicense.com/licenses/${licenseURL})`;
    }
    if (licenseURL === "isc") {
      licenseURL = "isc";
      return `[Link to ${license} license](https://choosealicense.com/licenses/${licenseURL})`;
    }
    if (licenseURL === "gnu gplv3") {
      licenseURL = "gpl%2D%33%2E%30";
      return `[Link to ${license} license](https://choosealicense.com/licenses/${licenseURL})`;
    }
    if (licenseURL === "apache license 2.0") {
      licenseURL = "apache%2D%32%2E%30";
      return `[Link to ${license} license](https://choosealicense.com/licenses/${licenseURL})`;
    }
  } else {
    return "";
  }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
    `## License

    Copyright (C) ${license}. All rights reserved.       
    
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
  * [License](#license)

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
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}`
);
}

module.exports = generateMarkdown;
