// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {if (license !== 'None') {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return '';
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
${data.description}
---
## table of contents

* [installation](installation)

* [usage](usage)

* [contributing](contributing)

* [test](test)

* [license](license)

## installation

\`\`\`
${
  data.installation
}
\`\`\`

## usage

${data.usage}

## contributing

${data.contributing}

## test

\`\`\`
${
  data.test
}
\`\`\`

## license

${renderLicenseBadge(data.license)}

---

Checkout more of my work [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
