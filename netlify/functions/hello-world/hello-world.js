// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
/** @type {import("@netlify/functions").Handler} */
const handler = async (event) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ event }, null, 4),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
