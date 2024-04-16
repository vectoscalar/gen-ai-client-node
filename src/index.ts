import { OpenAi } from "./clients/openAi.client";
import { GoogleGenerativeAi } from "./clients/googleGenrativeAi.client";
export class AIWrapper {
  getClient(apiKey: string, modelName: string, options?: object) {
    switch (modelName) {
      case "OpenAI":
        const openAiObj = new OpenAi(apiKey);
        return openAiObj;
      case "GoogleGenerativeAI":
        const genrativeAiObj = new GoogleGenerativeAi(apiKey);
        return genrativeAiObj;
      default:
        throw new Error();
    }
  }
}

// const modelName = 'OpenAI';
// const modelName = 'GoogleGenerativeAI';
// const wrapper = new AIWrapper();
// const prompt = 'can we make banana shake with mango';
// const client = wrapper.getClient(apiKey,modelName)
// client.invoke(prompt).then((response)=>{
//       console.log(response)
//     }).catch((error)=>{console.log(error)})

// Replace with your prompt
// const additionalOptions = {
//   temperature: 0.7,
//   max_tokens: 128,
//   top_p: 0.9,
//   frequency_penalty: 0.3,
//   presence_penalty: 0.5,
// };
// wrapper.execute(prompt)
//     .then(response => {
//         console.log('Response:', response);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
