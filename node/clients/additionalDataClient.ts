import { MasterData } from '@vtex/api'

export default class AdditionalDataClient extends MasterData {
  private static DATA_ENTITY = 'cl'

  public async get(userId: string) {
    const resp: any = await this.getDocument({
      dataEntity: AdditionalDataClient.DATA_ENTITY,
      id: userId,
      fields: ['_all'],
    }).then(document => document)

    return resp
  }
}
