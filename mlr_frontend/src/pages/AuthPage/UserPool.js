import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId:"us-east-1_fByNySA9Q",
    ClinetId:"384ks65t1e2irsh080p1vh0j7f"
}

export default new CognitoUserPool(poolData);