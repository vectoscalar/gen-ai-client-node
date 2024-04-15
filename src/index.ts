import { client } from "./Client";

export class AIWrapper extends client {
    private apiKey: string;
    private aiClient : any;
  

    constructor(apiKey: string,ModelName:string) {
      super()
      this.aiClient = this.initiateClient(apiKey,ModelName)
      this.apiKey = apiKey;
    }

    async execute(prompt: string,options?:object): Promise<string> {
      const response = await this.aiClient
        switch (response.clientname) {
            case 'OpenAI':
              try{return this.invokeChatGPT(prompt,options)}
              catch(error : any){throw new Error(error)}
                
            case 'GoogleGenerativeAI':
                try{return this.invokeGoogleGenerativeAI(prompt)}
                catch(error : any){throw new Error(error)}
            default:
                throw new Error();
        }
    }

    private async invokeChatGPT(prompt: string,options:any): Promise<any> {
        const resp = await this.aiClient
        const openAi = resp.clientObject
        const defaultOptions = {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
          temperature: 1,
          max_tokens:256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        }
        const mergedOptions = { ...defaultOptions, ...options };
        console.log("line 48",mergedOptions)
        try {
            const response = await openAi.chat.completions.create(
              mergedOptions
            );
            const chatGptResponse: any = response.choices[0].message.content;
    
            if (chatGptResponse !== undefined && chatGptResponse !== 'NULL') {
              return chatGptResponse ;
            }
          } catch (error) {
            console.log('Error in LLM', error);
          }
        }


    private async invokeGoogleGenerativeAI(prompt: string): Promise<any> {
        const resp = await this.aiClient
        const googleGenerativeAI = resp.clientObject;
        const model = googleGenerativeAI.getGenerativeModel({ model:"gemini-1.0-pro-latest" })
        const response = await model.generateContent(prompt);
        return response.response.text()
    }
}


// const modelName = 'OpenAI';
// const modelName = 'GoogleGenerativeAI';
// const wrapper = new AIWrapper(apiKey,modelName);
// const prompt = 'can we make banana shake with mango'; // Replace with your prompt
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
