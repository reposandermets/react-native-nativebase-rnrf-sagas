import Config from '../../config';

// sample from fb - https://facebook.github.io/react-native/docs/network.html
export const getMoviesFromFbApi = () => {
  return fetch(
    'https://facebook.github.io/react-native/movies.json'
  )
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.movies;
    })
    .catch(error => {
      console.error(error);
      return Promise.reject(error.message);
    });
}

//not yet sure if HTTP working in iPhone
/* If needed add ./ios/RNStarter/Info.plist
  <key>NSAppTransportSecurity</key>
  <dict>
      <key>NSAllowsArbitraryLoads</key>
      <true/>
  </dict>
 */
export const getAuth = () => {
  return fetch(
    `${Config.baseApiRoot}/auth`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
  )
    .then(response => response.json())
    .catch(error => Promise.reject(error));
}

export const postAuth = (credentials = {}) => {
  return fetch(
    `${Config.baseApiRoot}/auth`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    }
  )
    .then(response => response.json())
    .catch(error => Promise.reject(error));
}
