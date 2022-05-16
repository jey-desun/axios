import {Axios} from "axios";

module.exports.handler = async (event: any, context: any, callback: any) => {
  const axios = new Axios({
    baseURL: 'https://api.open-meteo.com/v1/'
  });

  const result = await axios.get('forecast', {
    params: {
      latitude: 52.52,
      longitude: 13.41,
      hourly: 'temperature_2m'
    }
  });

  console.log("result = ", result);
  callback(null, 'DONE');
}
