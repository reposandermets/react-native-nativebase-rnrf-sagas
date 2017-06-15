
// sample from fb - https://facebook.github.io/react-native/docs/network.html
export const getMoviesFromApiAsync = () => {

  return fetch('https://facebook.github.io/react-native/movies.json')
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.movies;
    })
    .catch(error => {
      console.error(error);
      return Promise.reject(error.message);
    });

}

export const getAuth = () => {

  return fetch('http://192.168.43.71:3000/auth')
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.movies;
    })
    .catch(error => {
      console.error(error);
      return Promise.reject(error.message);
    });

}
