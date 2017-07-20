const authz = require('../src/auth')
const expect = require('chai').expect

describe('auth', () => {
  let auth
  beforeEach(async () => {
    auth = await authz()
  })
  it('should encrypt and decrypt payload', async () => {
    const payload = {
      test: 'test'
    }
    const token = await auth.tokenFromPayload(Buffer.from(JSON.stringify(payload)))
    const decrypted = await auth.payloadFromToken(token)
    expect(JSON.parse(decrypted.payload.toString())).to.eql(payload)
  })
})
