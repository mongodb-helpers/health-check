import { assert } from 'chai'
import mongoose from 'mongoose'
import { MongoClient } from 'mongodb'

import { healthCheck } from '../src'

const MONGODB_URL = 'mongodb+srv://admin:admin@cluster0.ndtam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

describe('health-check module', () => {
  it('should export health-check as function with 1 param', () => {
    assert.strictEqual(typeof healthCheck, 'function')
    assert.strictEqual(healthCheck.length, 1)
  })

  describe ('with mongodb driver', () => {
    it('should health-check return `Connected` when connect correctly', async () => {
      const client = await MongoClient.connect(MONGODB_URL)
      const status = await healthCheck(client)
      assert(status === 'Connected')
      client.close()
    })
  
    it('should health-check return `Disconnected` when don\'t connect correctly', async () => {
      const client = await MongoClient.connect(MONGODB_URL)
      client.close()
      const status = await healthCheck(client)
      assert(status === 'Disconnected')
    })
  })

  describe ('with mongoose', () => {
    it('should health-check return `Connected` when connect correctly', async () => {
      const client = await mongoose.connect(MONGODB_URL)
      const status = await healthCheck(client)
      assert(status === 'Connected')
      client.connection.close()
    })
  
    it('should health-check return `Disconnected` when don\'t connect correctly', async () => {
      const client = await mongoose.connect(MONGODB_URL)
      client.connection.close()
      const status = await healthCheck(client)
      assert(status === 'Disconnected')
    })
  })
})