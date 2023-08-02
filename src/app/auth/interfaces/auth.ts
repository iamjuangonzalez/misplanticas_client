export interface IAuth {
    email: string,
    password: string
}

export interface IResponseAuth {
    message: string,
    data: IResponseToken,
}

export interface IResponseToken {
    jwtToken: string;
}