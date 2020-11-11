// require('dotenv').config()

// import contentful from 'contentful';
const contentful = require("contentful");

const defaultConfig = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
}

interface Config {
  CTF_POST_TYPE_ID?: string,
  CTF_SPACE_ID?: string,
  CTF_CDA_ACCESS_TOKEN?: string
}

// export default {}

export function createClient(config:Config = defaultConfig) {
  console.log('config:', config);
  return contentful.createClient({
    space: config.CTF_SPACE_ID || '',
    accessToken: config.CTF_CDA_ACCESS_TOKEN || '',
  })
}