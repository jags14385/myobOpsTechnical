import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
import * as apiGateway from '@aws-cdk/aws-apigateway'
import { HelloLambdaConstruct } from '../helloLambdaConstruct';

export class MyobOpsTechnicalStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloLambdaProps = new lambda.Function(this,"HelloLambda",{
      code: lambda.Code.asset("lambda"),
      handler: "hello.handler",
      runtime:lambda.Runtime.NODEJS_12_X,
      memorySize: 256,
      timeout: cdk.Duration.seconds(10),
    });

    const helloApi = new HelloLambdaConstruct(this,"HelloApi",{
      downstream: helloLambdaProps
    });

    new apiGateway.LambdaRestApi(this,"HelloEndpoint",{
      handler: helloApi.handler
    });

    const metaDataLambda = new lambda.Function(this,"MetadataLambda",{
      code: lambda.Code.asset("lambda"),
      handler: "metadata.handler",
      runtime: lambda.Runtime.NODEJS_12_X,
    })

    new apiGateway.LambdaRestApi(this,"MetaDataEndpoint",{
      handler: metaDataLambda
    })
  }

}
