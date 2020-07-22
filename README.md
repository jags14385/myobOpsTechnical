# Hi

- It demonstrates a CDK app with an instance of a stack (`MyobOpsTechnicalStack`)
which contains an Amazon Lambda + API Gateway. 
- The CI pipeline uses github Actions + Secrets.

To test the lambdas locally , use aws sam local.
Steps:

- Generate the template using `cdk synth` . `cdk synth --no-staging > template.yaml`
- `sam local invoke HelloLambda3D9C82D6`
- `sam local invoke HelloLambda3D9C82D6 --event=sample_events/helloEvent.json`

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Todo:

* Add cdk tests
* Add tests for api
* Add pipeline for code changes
* Enable monitoring + health endpoint
* List pros and cons of the approach
* Figure out a way of local testing (without deploying everytime)