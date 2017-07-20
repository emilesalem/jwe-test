const jose = require(`node-jose`)
const keystore = require('./keystore')

let store
let key
module.exports = async () => {
  store = await keystore()
  key = await store.get('1')
  return {
    tokenFromPayload,
    payloadFromToken
  }
}

const tokenFromPayload = async input =>
  jose.JWE
    .createEncrypt(key)
    .update(input)
    .final()

const payloadFromToken = async token => jose.JWE.createDecrypt(store)
  .decrypt(token)
