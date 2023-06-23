import { Command } from '../command';

export class ButtonInvoker {
  private onClick!: Command;

  setOnClick(command: Command) {
    this.onClick = command;
  }

  createNewPage() {
    this.onClick.execute();
  }
}
