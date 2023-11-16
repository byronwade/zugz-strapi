module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-supabase-v4",
      providerOptions: {
        apiUrl: "https://khpzwkywoghvywdddzdq.supabase.co",
        apiKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtocHp3a3l3b2dodnl3ZGRkemRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMTI1ODcsImV4cCI6MjAxNTY4ODU4N30.0W3M1zHuuOLPSovajrPW_trZfGFAYCk-EnWbkKQtD88",
        bucket: "zugz",
        directory: "content",
      },
    },
  },
});
