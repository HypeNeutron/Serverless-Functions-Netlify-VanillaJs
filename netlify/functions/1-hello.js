//* domain/.netlify/functions/1-hello
//* ES6 Exports
exports.handler = async (event, context) => ({
  statusCode: 200,
  body: 'Our First Netlify Function',
});
