import {
  GenerationConfig,
  GoogleGenerativeAI,
  Part,
} from "@google/generative-ai";
import { BaseAIProvider, GenrativeAiModels } from "../common/types";
import { DEFAULT_GENRATIVEAI_MODEL } from "../common/constants";

export class GoogleGenAIProvider implements BaseAIProvider {
  client: GoogleGenerativeAI;
  /**
   * Creates an instance of GoogleGenerativeAi.
   * @param {string} apiKey The API key for accessing Google Generative AI.
   */
  constructor(apiKey: string) {
    this.client = new GoogleGenerativeAI(apiKey);
  }

  /**
   * Executes a prompt using Google Generative AI.
   * @param {string | Array<string | Part>} prompt The prompt to execute, which can be a string or an array of strings or parts.
   * @param {GenerationConfig} [generationConfig] Optional configuration for generating content.
   * @param {GenrativeAiModels["model"]} [modelVersion] Optional model version to use.
   * @returns {Promise<any>} A promise that resolves with the generated content.
   */
  async executePrompt(
    prompt: string | Array<string | Part>,
    options?: GenerationConfig,
    modelVersion?: GenrativeAiModels["model"],
  ): Promise<any> {
    try {
      const model = this.client.getGenerativeModel({
        model: DEFAULT_GENRATIVEAI_MODEL,
        ...(options && { generationConfig: options }),
      });
      const response = await model.generateContent(prompt);
      return response.response.text();
    } catch (error) {
      console.log("Error in genraticeAi", error);
    }
  }
}
