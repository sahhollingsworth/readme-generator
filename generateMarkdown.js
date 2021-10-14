// Function to generte badge image for each license
function generateBadge (license){
    switch (license) {
        case "MIT":
            return "![MIT License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case "ISC":
            return "![ISC License Badge](https://img.shields.io/badge/license-ISC-red)";
        case "Apache 2.0":
            return "![Apache 2.0 License Badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "Mozilla Public 2.0":
            return "![Mozilla Public 2.0 License Badge](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
        case "GNU GPLv2":
            return "![GNU GPLv2 License Badge](https://img.shields.io/badge/License-GPLv2-blue.svg)";
        case "GNU GPLv3":
            return "![GNU GPLv3 License Badge](https://img.shields.io/badge/License-GPLv3-yellow.svg)]";
        case "None":
            return "";
    }
}

// License url retrieval


// Generate the actual readme/md file using the data from user command line input
function generateFormat(data) {
    const markdown =
    `# ${data.title}
    ${renderLicenseBadge(data.license)}

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