export interface AIClient {
  client: any;
  // model: any
  executePrompt(
    prompt: string,
    options?: object,
    modelVersion?: string,
  ): Promise<any>;
}

export interface GenrativeAiModels {
  GenrativeAIModels:
    | (string & {})
    | "gemini-1.5-pro-latest"
    | "gemini-pro-vision"
    | "gemini-1.0-pro-latest ";
}

export interface OpenAIAdditionalOptions {
  temperature?: number | null;
  max_tokens?: number | null;
  top_p?: number | null;
  frequency_penalty?: number | null;
  presence_penalty?: number | null;
}
