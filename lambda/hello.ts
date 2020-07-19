import { APIGatewayEvent } from "aws-lambda";
import * as lambda from "@aws-cdk/aws-lambda";

exports.handler = async function(event: AWSLambda.APIGatewayEvent){

    console.log("request:",JSON.stringify(event,null,2));

    return{
        statusCode: 200,
        headers: {"Content-Type": "text/plain"},
        body: `Hello, from Jags`
    }
}