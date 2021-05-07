const items = require('../../assets/data');
// const items = [{ name: 'susan' }, { name: 'john Doe' }];

exports.handler = async (event, context) => ({
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  statusCode: 200,
  body: JSON.stringify(items),
});
