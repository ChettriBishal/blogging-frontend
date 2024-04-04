export interface LoginSuccessReponse {
    'access_token': string;
    'refresh_token': string;
}

export interface LoginErrorResponse {
    'message': string;
}