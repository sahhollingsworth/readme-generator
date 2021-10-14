// Generate the actual readme/md file using the data from user command line input
function generateREADME (data) {
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
    ${data.github}
    ${data.email}

    ## License
    ${data.license}`
    return markdown;
}
