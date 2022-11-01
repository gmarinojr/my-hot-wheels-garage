// import React from 'react';
// import { graphql } from 'gatsby';

// export default ({ data }) => {
//   return (
//     <div>
//       <h1>{data.airtable.Model_Name}</h1>
//       <img src={data.airtable.Year} />
//     </div>
//   );
// };

// export const query = graphql`
//   query GetRecord($recordId: String!) {
//     airtable(recordId: { eq: $recordId }) {
//       id
//       table
//       recordId
//       data {
//         Model_Name
//         Year
//       }
//     }
//   }
// `;
