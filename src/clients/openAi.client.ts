import { OpenAI } from "openai";
import { ChatCompletionCreateParamsNonStreaming } from "openai/src/resources/chat";
import { BaseAIProvider, OpenAIAdditionalOptions } from "../common/types";
import {
  ChatCompletionContentPart,
  ChatCompletionCreateParamsBase,
} from "openai/resources/chat/completions";
import { DEFAULT_OPENAI_MODEL } from "../common/constants";

export class OpenAIProvider implements BaseAIProvider {
  client: OpenAI;
  /**
   * Creates an instance of OpenAi.
   * @param {string} apiKey The API key for accessing OpenAI.
   */
  constructor(apiKey: string) {
    this.client = new OpenAI({ apiKey: apiKey });
  }

  /**
   * Executes a prompt using OpenAI.
   * @param {string} prompt The prompt to execute.
   * @param {OpenAIAdditionalOptions} [additionalOptions] Additional options for executing the prompt.
   * @param {ChatCompletionCreateParamsNonStreaming["model"]} [modelVersion] Optional model version to use.
   * @returns {Promise<any>} A promise that resolves with the generated content.
   */
  async executePrompt(
    prompt: string | Array<ChatCompletionContentPart>,
    options?: OpenAIAdditionalOptions,
    modelVersion?: ChatCompletionCreateParamsNonStreaming["model"],
  ): Promise<any> {
    const mergedOptions: ChatCompletionCreateParamsBase = {
      model: modelVersion || DEFAULT_OPENAI_MODEL,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      ...options,
    };
    try {
      const response: any =
        await this.client.chat.completions.create(mergedOptions);
      const chatGptResponse: any = response.choices[0].message.content;

      if (chatGptResponse !== undefined && chatGptResponse !== "NULL") {
        return chatGptResponse;
      }
    } catch (error) {
      console.log("Error in openAi", error);
    }
  }
}
