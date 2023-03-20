/*const fs = require("fs")

exports.createPages = ({ actions }) => {
    const { createPage } = actions
    const godsData = JSON.parse(fs.readFileSync('./src/data/gods.json', 'utf8'));
    createPage({
        path: '/',
        component: require.resolve("./src/templates/godsTemplate.js"),
        context: {
            gods: godsData
        },
    })
}*/