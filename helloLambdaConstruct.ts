import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'

export interface HelloProps {
    downstream: lambda.IFunction;
}

export class HelloLambdaConstruct extends cdk.Construct {

    public readonly handler: lambda.Function;

    constructor(scope: cdk.Construct, id: string, props: HelloProps){
        super(scope,id);

    this.handler =  new lambda.Function(this, "HelloLambdaHandler",{
        code: lambda.Code.asset("lambda"),
        handler: "hello.handler",
        runtime:lambda.Runtime.NODEJS_12_X,
        memorySize: 256,
        timeout: cdk.Duration.seconds(10),
      });
    }
}