import { AIClientFactory } from "./index";

const client = AIClientFactory.getClient("apikey", "openAi");
const response = client.executePrompt("");
