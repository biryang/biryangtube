import axios from "axios"
const URL = `https://www.googleapis.com/youtube/v3/videos`
const config = {
  method: 'get',
  url: `${URL}?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_APIKEY}`,
  headers: {}
};
const mostPopular = async () => {
  return await axios(config)
    .then(async function (response) {
      console.log("response")
      return response.data.items;
    })
    .catch(async function (error) {
      console.log("error")
      return error;
    });
}

export { mostPopular }