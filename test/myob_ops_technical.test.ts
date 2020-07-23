import * as cdk from '@aws-cdk/core';
import * as MyobOpsTechnical from '../lib/myob_ops_technical-stack';
import * as lambda from '@aws-cdk/aws-lambda';
import { HelloLambdaConstruct } from '../helloLambdaConstruct';

test('Lambda should throw error when memory requirements are violated', () => {
    const app = new cdk.App();
    const stack = new MyobOpsTechnical.MyobOpsTechnicalStack(app, 'MyTestStack');
    const helloLambdaProps = new lambda.Function(stack,"TestHelloLambda",{
      code: lambda.Code.asset("lambda"),
      handler: "hello.handler",
      runtime:lambda.Runtime.NODEJS_12_X
    });

    expect(() => {
      return new HelloLambdaConstruct(stack, "TestHelloApi", 
      { downstream: helloLambdaProps , memoryCapacity:100 , timeOutInSeconds:10});
    }).toThrowError(/MemoryCapacity must be greater than or equal to 128/);
});


test('Lambda should throw error when timeOut requirements are violated', () => {
  const app = new cdk.App();
  const stack = new MyobOpsTechnical.MyobOpsTechnicalStack(app, 'MyTestStack');
  const helloLambdaProps = new lambda.Function(stack,"TestHelloLambda",{
    code: lambda.Code.asset("lambda"),
    handler: "hello.handler",
    runtime:lambda.Runtime.NODEJS_12_X
  });

  expect(() => {
    return new HelloLambdaConstruct(stack, "TestHelloApi", 
    { downstream: helloLambdaProps , memoryCapacity:128 , timeOutInSeconds:2});
  }).toThrowError(/TimeOutInSeconds must be greater than or equal to 3/);
});