import { OpenAI } from "openai";
// import ChatCompletionCreateParamsNonStreaming from "openai";
import {ChatCompletionCreateParamsNonStreaming} from "openai/src/resources/chat"
import { BaseClass } from "../baseClass";
export interface AdditionalOptions {
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
  frequency_penalty?: number;
  presence_penalty?: number;
}
export class OpenAi extends BaseClass {
  client: OpenAI;
  model : string;
  constructor(apiKey: string,modelVersion?:string) {
    super(apiKey,modelVersion)
    this.client = new OpenAI({ apiKey: apiKey });
    this.model = modelVersion || 'gpt-3.5-turbo'

  }

  async executePrompt(prompt: string, additionalOptions?: AdditionalOptions): Promise<any> {
    const options:ChatCompletionCreateParamsNonStreaming = {
      model: this.model,
      messages: [
        {
          role: "user",
          content: prompt,
        }
      ],
      temperature: additionalOptions?.temperature || 1,
      max_tokens: additionalOptions?.max_tokens || 256,
      top_p: additionalOptions?.top_p || 1,
      frequency_penalty: additionalOptions?.frequency_penalty || 0,
      presence_penalty: additionalOptions?.presence_penalty || 0,
    };
    console.log(options)
    try {
      const response: any = await this.client.chat.completions.create(options);
      const chatGptResponse: any = response.choices[0].message.content;

      if (chatGptResponse !== undefined && chatGptResponse !== "NULL") {
        return chatGptResponse;
      }
    } catch (error) {
      console.log("Error in openAi", error);
    }
  }
}
