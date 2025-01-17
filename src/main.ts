import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);
//Add Existing AWS Resources - https://docs.amplify.aws/react/build-a-backend/add-aws-services/rest-api/existing-resources/
const existingConfig = Amplify.getConfig();
Amplify.configure({
  ...existingConfig,
  API: {
    ...existingConfig.API,
    REST: {
      ...existingConfig.API?.REST,
      AssistantConfigApi: {
        endpoint:
          'https://zrq2enhv16.execute-api.us-east-1.amazonaws.com/',
        region: 'us-east-1>'
      }
    }
  }
});

createApp(App).mount("#app");

