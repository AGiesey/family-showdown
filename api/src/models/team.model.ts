import {model, property} from '@loopback/repository';


@model()
export class Team {
    @property({
        id: true,
        type: 'number',
    })
    teamId: number;

    @property({
        type: 'string',
        required: true
    })
    name: string;

    @property({
        type: 'number',
        required: true
    })
    year: number;

    @property({
        type: 'boolean',
        required: true
    })
    active: boolean;

    @property({
        type: 'number',
        required: true
    })
    personId: number;
}