export enum MessageCode {
  LIVE_COUNT,
}

export class LiveMessage {
  public code: MessageCode = MessageCode.LIVE_COUNT;
  public data: any;
}
