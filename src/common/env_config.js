const envUrls = {
  local: {
    apiServerUrl: "http://112.124.36.170:8009",
    nodeApiServerUrl: "http://112.124.36.170:8009",
    uri: "http://112.124.36.170:8009"
  },
  dev: {
    apiServerUrl: "http://172.18.20.180:8009",
    nodeApiServerUrl: "http://172.18.20.180:8009",
    uri: "http://172.18.20.180:8009"
  },
  qa: {
    apiServerUrl: "http://112.124.36.170:8009",
    assetsUrl: "http://112.124.36.170:8009",
    nodeApiServerUrl: "http://112.124.36.170:8009",
    uri: "http://112.124.36.170:8009"
  },
  staging: {
    apiServerUrl: "http://112.124.36.170:8009",
    assetsUrl: "http://112.124.36.170:8009",
    nodeApiServerUrl: "http://112.124.36.170:8009",
    uri: "http://112.124.36.170:8009"
  },
  prod: {
    apiServerUrl: "http://112.124.36.170:8009",
    assetsUrl: "http://112.124.36.170:8009",
    nodeApiServerUrl: "http://112.124.36.170:8009",
    uri: "http://112.124.36.170:8009"
  }
}

const getApiHost = () => {
  return envUrls[BUILD_ENV].apiServerUrl
}

const getNodeApiHost = () => {
  return envUrls[BUILD_ENV].nodeApiServerUrl
}
//  relativePath   eg: "/ltvfe/cl/"
const getAssetsUrl = (env = BUILD_ENV, relativePath) => {
  const assetsUrl = envUrls[env].assetsUrl || ""
  const suffix = env === "local" ? "/webfunny/" : relativePath
  return assetsUrl + suffix
}

const getUri = () => {
  return envUrls[BUILD_ENV].uri
}

module.exports = {
  getApiHost,
  getNodeApiHost,
  getAssetsUrl,
  getUri
}
