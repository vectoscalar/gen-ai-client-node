import { OpenAI } from "openai";

export class OpenAi {
  private client: OpenAI;

  constructor(apiKey: string) {
    this.client = new OpenAI({ apiKey: apiKey });
  }
  async invoke(prompt: string, options?: any): Promise<any> {
    const defaultOptions = {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };
    const message = {  messages: [
      {
        role: "user",
        content: prompt,
      },
    ],}
    const mergedOptions = { ...defaultOptions, ...options, ...message };
    try {
      const response: any = await this.client.chat.completions.create(
        mergedOptions
      );
      const chatGptResponse: any = response.choices[0].message.content;

      if (chatGptResponse !== undefined && chatGptResponse !== "NULL") {
        return chatGptResponse;
      }
    } catch (error) {
      console.log("Error in openAi", error);
    }
  }
}
