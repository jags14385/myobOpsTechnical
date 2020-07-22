exports.handler = async function(event: AWSLambda.APIGatewayEvent){
    console.log("request:",JSON.stringify(event,null,2));

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            version: "1.0",
            description: "technical test"
        })
    }
}