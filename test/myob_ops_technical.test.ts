import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as MyobOpsTechnical from '../lib/myob_ops_technical-stack';

test('Lambda created has minimum memory requirements', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new MyobOpsTechnical.MyobOpsTechnicalStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(haveResource("AWS::SQS::Queue",{
      VisibilityTimeout: 300
    }));
});

test('Lambda created has minimum timeout requirements', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new MyobOpsTechnical.MyobOpsTechnicalStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::SNS::Topic"));
});
