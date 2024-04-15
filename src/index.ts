import { openAi,googleGenerativeAI } from "./clients/client";
export class AIWrapper {

    execute(apiKey:string ,modelName : string,options?:object){
        switch (modelName) {
            case 'OpenAI':
              const openAiObj = new openAi(apiKey)
              return openAiObj
            case 'GoogleGenerativeAI':
              const genrativeAiObj = new googleGenerativeAI(apiKey)
              return genrativeAiObj
            default:
                throw new Error();
        }
    }
}


// const modelName = 'OpenAI';
// // const modelName = 'GoogleGenerativeAI';
// const wrapper = new AIWrapper();
// const prompt = 'can we make banana shake with mango';
// const response = wrapper.execute(apiKey,modelName)
// const data  = response.invoke(prompt).then((response)=>{
//       console.log(response)
//     }).catch((error)=>{console.log(error)})

// wrapper.execute(prompt,apiKey,modelName).then((response)=>{
//   console.log(response)
// }).catch((error)=>{console.log(error)})
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
