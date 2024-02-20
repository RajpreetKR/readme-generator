// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description] (#description)
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [License] (#license)
  * [Contributors] (#contributors)
  * [Tests] (#tests)
  * [Questions] (#questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## License:
  * This project is licensed under the ${data.license} license.

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
