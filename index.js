import { NetInfo } from 'react-native'

export default function fetchOnConnection(url, args) {
  return NetInfo.isConnected.fetch().then(connected => {
    if(connected) {
      try {
        NetInfo.isConnected.removeEventListener('connectionChange', fetchOnConnection.bind(undefined, url, args))
        return fetch(url, args)
      } catch(e) {
        throw e
      }
    }
    else {
      NetInfo.isConnected.addEventListener('connectionChange', fetchOnConnection.bind(undefined, url, args))
    }
  })
}
