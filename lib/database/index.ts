import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// if you don't already have a cached connection, set to empty object
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  // Serverless function - manage database connection efficiently
  // Prevent new connection to database, each invocation in serverless results in new connection to db.  Exhaust DB resources
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: 'evently',
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
