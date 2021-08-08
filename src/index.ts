import { MongoClient } from "mongodb"
import type { Mongoose } from "mongoose"

export async function healthCheck(client: Mongoose|MongoClient) {
  try {
    /**
     * Connection ready state from mongoose code docs
     *
     * - 0 = disconnected
     * - 1 = connected
     * - 2 = connecting
     * - 3 = disconnecting
     */
    const readyState = client instanceof MongoClient 
    ? (await (client as MongoClient).db().admin().ping()).ok
    : (client as Mongoose).connection.readyState

    return readyState === 1 ? 'Connected' : 'Disconnected'
  } catch (error) {
    return 'Disconnected'
  }
}
