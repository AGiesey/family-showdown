import {model, property} from '@loopback/repository';

@model()
export class Person {
    @property({
        id: true,
        type: 'number',
        generated: true
    })
    personId: number;
    
    @property({
        type: 'string',
        required: true
    })
    givenName: string;
    
    @property({
        type: 'string',
        required: true
    })
    surname: string;
    
    @property({
        required: true,
        type: 'string'
    })
    email: string;

    @property({
        required: true,
        type: 'boolean',
    })
    active: boolean;
}