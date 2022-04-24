const config = {
    ENVIRONMENT: process.env.ENVIRONMENT,
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
    },
    GOOGLE_MAPS: {
      API_BASE_URL: process.env.GOOGLE_MAPS_API_BASE_URL,
      API_KEY: process.env.GOOGLE_MAPS_API_KEY
    },
    PLATZI_CONF_STORE: {
      API: process.env.PLATZI_CONF_STORE_STRAPI_API_BASE_URL
    }
  };
  
  export default config;