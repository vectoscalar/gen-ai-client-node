import { GoogleGenerativeAI } from "@google/generative-ai";

export class GoogleGenerativeAi {
  private client: GoogleGenerativeAI;
  constructor(apiKey: string) {
    this.client = new GoogleGenerativeAI(apiKey);
  }
  async invoke(prompt: string): Promise<any> {
    try {
      const model = await this.client.getGenerativeModel({
        model: "gemini-1.0-pro-latest",
      });
      const response = await model.generateContent(prompt);
      return await response.response.text();
    } catch (error) {
      console.log("Error in genraticeAi", error);
    }
  }
}
