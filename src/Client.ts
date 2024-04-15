import { OpenAI } from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";


export class client{
    private client : any

    constructor(){}
    
    async initiateClient(key:string,modelName:string){
        console.log("inside the client",modelName)
        switch (modelName.toLowerCase()) {
            case 'openai':
                this.client =  {clientObject : new OpenAI({ apiKey: key}),clientname:modelName}
                break
            case 'googlegenerativeai':
                this.client = {clientObject:new GoogleGenerativeAI(key),clientname:modelName};
                break
            default:
                throw new Error(`Unsupported AI model: ${modelName}`);
        }
        return this.client
    }
}   

