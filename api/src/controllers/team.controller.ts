// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import { Team } from "../models/team.model";
import {post, get, param, requestBody} from '@loopback/rest';


export class TeamController {
  constructor() {}

  @post('/teams')
  async createTeam(@requestBody(), team: Team) {

  }

  @get('teams/{personId}')
  async findTeamsByPersonId(@param.path.number('id') personId: number) {

  }
}
