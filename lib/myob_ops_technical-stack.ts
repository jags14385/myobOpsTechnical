import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'

export class MyobOpsTechnicalStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloLambda = new lambda.Function(this,"HelloLambda",{
      code: lambda.Code.asset("lambda"),
      handler: "hello.handler",
      runtime:lambda.Runtime.NODEJS_12_X,
    });
  }
  
}
