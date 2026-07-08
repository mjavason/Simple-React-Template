import type { PlayerType } from '@/common/types/player.type'

export type GetUltimateTeamResponseType = {
  goalKeepers: PlayerType[]
  defenders: PlayerType[]
  midfielders: PlayerType[]
  forwards: PlayerType[]
}
