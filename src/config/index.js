const config = {
    NODE_ENV: process.env.NODE_ENV,
    FIREBASE: {
      API_KEY: process.env.FIREBASE_API_KEY,
      AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      APP_ID: process.env.FIREBASE_APP_ID
    },
    PAYPAL: {
      SANDBOX_ACCOUNT: process.env.PAYPAL_SANDBOX_ACCOUNT,
      CLIENT_API: process.env.PAYPAL_CLIENT_ID,
      SECRET: process.env.PAYPAL_SECRET
    }
  };
  
  export default config;