const URL_BASE = 'http://viacep.com.br/ws/';
const CALLBACK = 'cb';
const URL_END = `/json/?callback=${CALLBACK}`;

const clearFunction = (response) => {
  return response.substring(CALLBACK.length+1, response.length-2);
}

export const search = async (cep) => {
  return fetch(`${URL_BASE}${cep}${URL_END}`)
    .then(res => res.text())
    .then(text => clearFunction(text))
    .then(json => JSON.parse(json));
}


