// Generate the actual readme/md file using the data from user command line input
function generateFormat(data) {
    const markdown =
    // title of project
    `# ${data.title}
    placeholder text for badge

    ## Description
    ${data.description}

    ## Table of Contents
    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [Contributing](#Contributing)
    * [Test](#Tests)
    * [Questions](#Questions)
    * [License](#License)


    ## Installation
    ${data.installation-instruct}

    ## Usage
    ${data.usage}

    ## Contributing
    ${data.contributing-instruct}

    ## Tests
    ${data.test-instruct}

    ## Questions
    Please feel free reach out to me with any questions on Github at[${data.github}](https://github.com/${data.github}) or via email at 
    ${data.email}.

    ## License
    ${data.license}`
    return markdown;
}

module.exports = generateFormat;