curl \
  'https://api.sanity.io/v2021-10-04/hooks/projects/${projectId}' \
  --request POST \
  -H 'Authorization: Bearer <token>' \
  -H 'Content-Type: application/json' \
{
  // body: JSON.stringify({
  //   type: 'document',
  //   name: 'Sanity Studio',
    // url: `https://${vercelProjectName}.vercel.app/api/sanity-deploy`,
  //   httpMethod: 'POST',
  //   apiVersion: 'v2021-03-25',
  //   includeDrafts: false,
  //   dataset: '*',
  //   rule: {
  //     on: ['create', 'update', 'delete'],
  //   },
    // headers: {
    //   Authorization: `Bearer ${process.env.VERCEL_PERSONAL_AUTH_TOKEN}`,
    // },
  // }),

}
EOF




// curl -X POST "https://api.sanity.io/v2021-10-04/hooks/projects/${projectId}" \
//   -H "Authorization: Bearer <token>" \
//   -H "Content-Type: application/json" \

//   -d '{
//     "type":"document",
//   "name": "Sanity Studio"
//   // vercel-project-name
//   "url": `https://${vercelProjectName}.vercel.app/api/sanity-deploy`,
//   "httpMethod":"POST",
//   "apiVersion":"v2021-03-25",
//   "includeDrafts":false,
//   "dataset":"*",
//     "rule": {
//       "on": ['create', 'update', 'delete'],
//     },
//   "description":"description",
//   "headers":{},
//   "headers": {
//     "Authorization": `Bearer ${process.env.VERCEL_PERSONAL_AUTH_TOKEN}`,
//   },
// }'