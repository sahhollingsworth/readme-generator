// Generates a badge image for each license
function generateBadge (license){
    switch (license) {
        case "MIT":
            return "![MIT License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)";
        case "Apache 2.0":
            return "![Apache 2.0 License Badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
        case "Mozilla Public 2.0":
            return "![Mozilla Public 2.0 License Badge](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
        case "GNU GPLv2":
            return "![GNU GPLv2 License Badge](https://img.shields.io/badge/License-GPLv2-blue.svg)";
        case "GNU GPLv3":
            return "![GNU GPLv3 License Badge](https://img.shields.io/badge/License-GPLv3-yellow.svg)";
        case "None":
            return;
    }
}

// Retrieves the url associated with each license
function generateURL (license) {
    switch (license) {
        case "MIT":
            return "[MIT](https://mit-license.org/)";
        case "Apache 2.0":
            return "[Apache 2.0 License Badge](https://www.apache.org/licenses/LICENSE-2.0.html)";
        case "Mozilla Public 2.0":
            return "[Mozilla Public 2.0](https://www.mozilla.org/en-US/MPL/2.0/)";
        case "GNU GPLv2":
            return "[GNU GPLv2](https://opensource.org/licenses/gpl-2.0.php)";
        case "GNU GPLv3":
            return "[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)";
        case "None":
            return "No licensing.";
    }
}

// Generate the actual readme/md file using the data from user command line input
function generateFormat(data) {
    const markdown =
    `# ${data.title}
${generateBadge(data.license)}

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
${data["installation-instruct"]}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
Please feel free reach out to me with any questions on Github at [${data.github}](https://github.com/${data.github}) or via email at ${data.email}.

## License
Licensed under the ${generateURL(data.license)} license.`
return markdown;
}

module.exports = generateFormat;