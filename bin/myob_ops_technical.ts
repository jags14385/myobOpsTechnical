#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { MyobOpsTechnicalStack } from '../lib/myob_ops_technical-stack';

const app = new cdk.App();
new MyobOpsTechnicalStack(app, 'MyobOpsTechnicalStack');
