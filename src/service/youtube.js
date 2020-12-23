import axios from "axios"
const URL = `https://www.googleapis.com/youtube/v3`;
const queryKey = `&key=${process.env.REACT_APP_APIKEY}`
const queryMostPopular = `/videos?part=snippet&chart=mostPopular&maxResults=25`;
const querySearch = `/search?part=snippet&maxResults=25&type=video&q=`

let config = {
  method: 'get',
  headers: {}
};

const mostPopular = async () => {
  config.url = `${URL}${queryMostPopular}${queryKey}`

  return await axios(config)
    .then(async function (response) {
      console.log("response Popular", response.data.items)
      return response.data.items;
    })
    .catch(async function (error) {
      console.log("error")
      return error;
    });
}
const search = async (keword) => {
  config.url = `${URL}${querySearch}${keword}${queryKey}`
  return await axios(config)
    .then(async function (response) {
      console.log("response Search", response.data.items)
      return response.data.items;
    })
    .catch(async function (error) {
      console.log("error")
      return error;
    });
}
export { mostPopular, search }