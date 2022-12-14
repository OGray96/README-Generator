// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license !== 'No License'){
    return  `![badge](https://img.shields.io/badge/license-${license}-blue)`
} else
{
    return " "
}

  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license !== 'No License'){
        return  `[${license}](https://choosealicense.com/licenses/${license})`;
    } else
    {
        return ""
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license !== 'No License'){
        return `
## [License](#table-of-contents)\n
${renderLicenseBadge(license)} \n 
This application is running under the license: ${renderLicenseLink(license)}.\n
For more information on this license please follow the link.`
        
    } else
    {
        return ""
    }

}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, install, usage, contributing, test, license, github, email}) =>
`# ${title}

${renderLicenseBadge(license)}

## Table of Contents
1. [Description](#description)
2. [Instruction](#Instructions)
3. [Usage Information](#usage-information)
4. [Contributing Guidelines](#Contributing-Guidelines)
5. [Test Info](#test-info)
6. [Questions](#questions)

## [Description](#table-of-contents)

    ${description}

## [Instructions](#table-of-contents)

    ${install}

## [Usage information](#table-of-contents)

    ${usage}

## [Contributing Guidelines](#table-of-contents)

    ${contributing}

## [Test info](#table-of-contents)

    ${test}


${renderLicenseSection(license)}

## [Questions](#table-of-contents)

If you have any questions please don't hestitate to email me at [${email}](#${email}).

If you would like to see more of my work please find me at [GitHub](#www.github.com/${github})

`

module.exports = generateMarkdown;
