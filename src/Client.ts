import { OpenAI } from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { BadRequestError } from "./errors";


export class client{
    private client : any

    constructor(){}
    
    async initiateClient(key:string,modelName:string){
        console.log("inside the client",modelName)
        switch (modelName.toLowerCase()) {
            case 'openai':
                try{this.client =  {clientObject : new OpenAI({ apiKey: key}),clientname:modelName}}
                catch(error : any){ throw new BadRequestError("400",error)}
                break
            case 'googlegenerativeai':
                try{this.client = {clientObject:new GoogleGenerativeAI(key),clientname:modelName}}
                catch(error : any){ throw new BadRequestError("400", error)}
                break
            default:
                throw new BadRequestError("400","Unsupported AI model");
        }
        return this.client
    }
}   

