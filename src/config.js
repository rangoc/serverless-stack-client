const dev = {
  STRIPE_KEY:"pk_test_IoN3WJzuVUnMGZWdOX7POOT900T0ZSlSUb",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1syoyu5f01ryj"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://g1xtupt772.execute-api.eu-central-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_VaBvmKe8h",
    APP_CLIENT_ID: "46fvhu07a95ar5pltl5e1jqpsg",
    IDENTITY_POOL_ID: "eu-central-1:176f2ee1-da59-4557-a806-919f0f212507"
  }
};

const prod = {
  STRIPE_KEY:"pk_test_IoN3WJzuVUnMGZWdOX7POOT900T0ZSlSUb",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-16xejvo6h2r5o"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://fxue1224qf.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_kOU76RDWn",
    APP_CLIENT_ID: "309a4mi2l80e3n2t1081f10vos",
    IDENTITY_POOL_ID: "eu-central-1:750dd1ba-5a24-4e80-b326-0717329ea953"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
