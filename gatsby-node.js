const path = require(`path`);
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise(async (resolve) => {
    const result = await graphql(`
      {
        allAirtable {
          edges {
            node {
              table
              recordId
              data {
                Model_Name
                Year
              }
            }
          }
        }
      }
    `);
    // For each path, create page and choose a template.
    // values in context Object are available in that page's query
    result.data.allAirtable.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.recordId}`,
        component: path.resolve(`./src/template/post.js`),
        context: {
          recordId: node.recordId
        }
      });
    });
    resolve();
  });
};
