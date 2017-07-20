const jose = require('node-jose')

const store = jose.JWK.createKeyStore()

const getKey1 = async () => store.generate('oct', 256, {
  kid: '1',
  alg: 'A256GCM',
  use: 'enc'
})

module.exports = async () => {
  const key1 = await getKey1()
  store.add(key1)
  return store
}
