import { createClient } from 'microcms-js-sdk'; //ES6

// Initialize Client SDK.
const env = process.env;
export const client = createClient({
  serviceDomain: env.SERVICE_DOMAIN || '', // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: env.API_KEY || '',
});
