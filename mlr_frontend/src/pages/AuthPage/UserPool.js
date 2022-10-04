import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_vDHPbGrot",
    ClientId: "2dnfqpsig49bq965c2fe281ma"
}

export default new CognitoUserPool(poolData);