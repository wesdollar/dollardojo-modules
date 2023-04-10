export interface ChatMessageObject {
  displayName: string;
  username: string;
  message: string;
  mod: boolean;
  subscriber: boolean;
  chatCommands: string[];
}
