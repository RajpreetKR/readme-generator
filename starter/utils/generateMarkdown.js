// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributors](#Contributors)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  This project is licensed under the ${data.license} license.

  ## Contributors:
  ${data.contributors}

  ## Tests:
  ${data.tests}

  ## Questions:
  * Please contact me on any of the following if you have any questions:
  * Email - ${data.email}
  * Github - https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
