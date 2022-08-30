import { Controller, Get } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(public playersService: PlayersService) {}
  @Get()
  getPlayers() {
    // return ['Player one', 'Player two'];
    return this.playersService.getPlayers();
  }
}
