export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "eu-central-1",
      BUCKET: "notes-serverlessstack-uploads"
    },
    apiGateway: {
      REGION: "eu-central-1",
      URL: "https://dkb2j4ynyb.execute-api.eu-central-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "eu-central-1",
      USER_POOL_ID: "eu-central-1_ct2StzqdC",
      APP_CLIENT_ID: "339qf867q4aufr412kl203v2om",
      IDENTITY_POOL_ID: "eu-central-1:c2d09bd9-fb52-4a25-9783-a3e9752b2560"
    }
  };