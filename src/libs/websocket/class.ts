export enum MessageCode {
  LIVE_COUNT,
  LIVE_STATUS,
}

export class LiveMessage {
  public code: MessageCode = MessageCode.LIVE_COUNT;
  public data: any;
}
