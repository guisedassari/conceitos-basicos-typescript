import { Request, Response } from 'express';

import CreateUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {

    const user = CreateUser({
        email: 'guisedassar@gmail.com',
        password: '123456',
        techs: [
            'NodeJs',
            'ReactJs',
            'React Native',
            { title: 'JavaScript', experience: 100 }
        ]
    });
    return response.json({ mensagem: "Teste", teste: "teste"});
};  