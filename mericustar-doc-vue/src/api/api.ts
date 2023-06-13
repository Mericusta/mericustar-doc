import { clientForLocalHost6666, clientForLocalHost7777 } from './client'

export class testRequest {
    value: number | string | undefined;
}

class testResponse {
    value: number | string | undefined;
}

const testAPIUrl = '/test';

export const test_api_6666 = (request: testRequest) => clientForLocalHost6666.post<testResponse>(testAPIUrl, request);
export const test_api_7777 = (request: testRequest) => clientForLocalHost7777.post<testResponse>(testAPIUrl, request);