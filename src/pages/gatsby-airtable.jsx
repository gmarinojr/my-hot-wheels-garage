import React from 'react';
import { graphql } from 'gatsby';

const GatsbyAirtable = ({ data }) => {
  console.log(data);
  const allAirtableData = data.allAirtable.nodes;
  return (
    <div>
      {allAirtableData.map((node) => (
        <div>
          <img src={node.data.Model_Name} />
          <h1>{node.data.Year}</h1>
          <a href={`/${node.recordId}`}>Click Here</a>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query {
    allAirtable {
      edges {
        node {
          recordId
          data {
            Model_Name
            Collection
            Year
            Series_Line
          }
        }
      }
    }
  }
`;

export default GatsbyAirtable;
