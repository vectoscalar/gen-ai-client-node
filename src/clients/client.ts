import { OpenAI } from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";


export class openAi {
    private client : OpenAI;
    
    constructor(apiKey : string){
        this.client = new OpenAI({ apiKey: apiKey })   
    }
  async invoke(
    prompt: string,
    options?: any,
  ): Promise<any> {
    const defaultOptions = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };
    const mergedOptions = { ...defaultOptions, ...options };
    try {
      const response: any = await this.client.chat.completions.create(mergedOptions);
      const chatGptResponse: any = response.choices[0].message.content;

      if (chatGptResponse !== undefined && chatGptResponse !== "NULL") {
        return chatGptResponse;
      }
    } catch (error) {
      console.log("Error in openAi", error);
    }
  }
}

export class googleGenerativeAI {
    private client : GoogleGenerativeAI;
    constructor(apiKey:string){
        this.client = new GoogleGenerativeAI(apiKey)
    }
  async invoke(prompt: string): Promise<any> {
    try{    const model =  await this.client.getGenerativeModel({
      model: "gemini-1.0-pro-latest",
    });
    const response = await model.generateContent(prompt);
    return await response.response.text();}
    catch(error){
      console.log("Error in genraticeAi", error)
    }

  }
}
