import { OpenAi, AdditionalOptions } from "./clients/openAi.client";
import { GoogleGenerativeAi } from "./clients/googleGenrativeAi.client";
export class AIClient {
  public client :any
  constructor(apiKey: string, provider: string,modelVersion?:string) {
    switch (provider) {
      case "OpenAI":  
        this.client=new OpenAi(apiKey)
        break
      case "GoogleGenerativeAI":
        this.client = new GoogleGenerativeAi(apiKey,modelVersion)
        break
      default:
        throw new Error();
    }
  }
  async execute(prompt:string,options?: AdditionalOptions){
    return this.client.executePrompt(prompt,options)
  } 
  
}

const provider = 'OpenAI';
// const modelName = 'GoogleGenerativeAI';
// const wrapper = new AIClient(apiKey,provider);
// const prompt = 'can we make banana shake with mango';
// // const client = wrapper.getClient(apiKey,
// wrapper.execute(prompt).then((response)=>{
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
