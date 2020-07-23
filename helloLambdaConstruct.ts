import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'

export interface HelloProps {
    downstream: lambda.IFunction;
    memoryCapacity: number;
    timeOutInSeconds: number;
}

export class HelloLambdaConstruct extends cdk.Construct {

    public readonly handler: lambda.Function;

    constructor(scope: cdk.Construct, id: string, props: HelloProps){

        if(props.memoryCapacity !== undefined && props.memoryCapacity < 128){
            throw new Error('MemoryCapacity must be greater than or equal to 128');
        }

        if(props.timeOutInSeconds !== undefined && props.timeOutInSeconds < 3){
            throw new Error('TimeOutInSeconds must be greater than or equal to 3');
        }

        super(scope,id);

        this.handler =  new lambda.Function(this, "HelloLambdaHandler",{
            code: lambda.Code.asset("lambda"),
            handler: "hello.handler",
            runtime:lambda.Runtime.NODEJS_12_X,
            memorySize: props.memoryCapacity,
            timeout: cdk.Duration.seconds(props.timeOutInSeconds),
        });
    }
}