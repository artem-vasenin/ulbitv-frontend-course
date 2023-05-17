const axios = require('axios');
const arrToStr = require('../arrToStr/arrToStr');

const getData = async () => {
  try {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users');

    return arrToStr(resp.data.map(user => user.id));
  } catch (e) {

  }
};

module.exports = getData;
