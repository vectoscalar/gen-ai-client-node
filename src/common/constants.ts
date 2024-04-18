export const DEFAULT_OPENAI_MODEL = "gpt-3.5-turbo";
export const DEFAULT_GENRATIVEAI_MODEL = "gemini-pro";
export const PROVIDER_LIST = [
  {
    provider: "OpenAi",
    models: [
      "gpt-4-0125-preview",
      "gpt-4-turbo-preview",
      "gpt-4-1106-preview",
      "gpt-4-vision-preview",
      "gpt-4",
      "gpt-4-0314",
      "gpt-4-0613",
      "gpt-4-32k",
      "gpt-4-32k-0314",
      "gpt-4-32k-0613",
      "gpt-3.5-turbo",
      "gpt-3.5-turbo-16k",
      "gpt-3.5-turbo-0301",
      "gpt-3.5-turbo-0613",
      "gpt-3.5-turbo-1106",
      "gpt-3.5-turbo-0125",
      "gpt-3.5-turbo-16k-0613",
    ],
  },
  {
    provider: "GoogleGenrativeAI",
    models: [
      "gemini-1.5-pro-latest",
      "gemini-pro-vision",
      "gemini-1.0-pro-latest ",
    ],
  },
];
