import Axios from 'axios';

var HttpService = Axios.create({
  baseURL: ""
});
var CreateHttpService = function CreateHttpService(baseURL, headers) {
  return Axios.create({
    baseURL: baseURL,
    headers: headers
  });
};

export { CreateHttpService, HttpService };
//# sourceMappingURL=index.js.map
