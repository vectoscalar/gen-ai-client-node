import { OpenAIProvider } from "./clients/openAi.client";
import { GoogleGenAIProvider } from "./clients/googleGenrativeAi.client";
import { PROVIDER_LIST } from "./common/constants";
import { ChatCompletionCreateParamsBase } from "openai/resources/chat/completions";
/**
 * Factory class for creating AI clients.
 */
export class AIProviderFactory {
  /**
   * Creates an instance of the specified AI client.
   *
   * @param {string} apiKey The API key for accessing the AI service.
   * @param {string} provider The name of the AI service provider.
   * @returns {any} An instance of the specified AI client.
   * @throws {Error} If the client name is not found.
   */
  static getClient(apiKey: string, provider: string) {
    switch (provider.toLowerCase()) {
      case "openai":
        return new OpenAIProvider(apiKey);
      case "googlegenerativeai":
        return new GoogleGenAIProvider(apiKey);
      default:
        throw new Error(`Client name not found ${provider}`);
    }
  }
  static listProviders() {
    return PROVIDER_LIST;
  }
}
