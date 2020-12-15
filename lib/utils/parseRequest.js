module.exports = rawRequest => {
  let res = {};
  const parseMeth = rawRequest.toString().split('\n')[0].split(' ')[0];
  const parsePath = rawRequest.toString().split('\n')[0].split(' ')[1];
  const parseBody = rawRequest.toString().split('\n');

  

  if(parseBody.includes('')) {
    res = {
      method: parseMeth,
      path: parsePath,
      body: parseBody.pop()
    };
  } else {
    res = {
      method: parseMeth,
      path: parseBody
    };
  }

  return res;
};
