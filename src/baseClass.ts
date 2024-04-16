export abstract class BaseClass {
    protected client: any
    protected model!: string
    constructor(apiKey: string, modelType:any) {
    }
    abstract executePrompt(prompt: string): Promise<any>;
}