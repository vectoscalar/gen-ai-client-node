import { GoogleGenerativeAI } from "@google/generative-ai";
import { BaseClass } from "../baseClass";

export class GoogleGenerativeAi extends BaseClass {
  client:GoogleGenerativeAI;
  model : string;
  constructor(apiKey: string,modelVersion?:string) {
    super(apiKey,modelVersion)
    this.client = new GoogleGenerativeAI(apiKey);
    this.model = modelVersion || "gemini-1.0-pro-latest";
  }
  async executePrompt(prompt: string): Promise<any> {
    try {
      const model = await this.client.getGenerativeModel({
        model: this.model,
      });
      const response = await model.generateContent(prompt);
      return await response.response.text();
    } catch (error) {
      console.log("Error in genraticeAi", error);
    }
  }
}
