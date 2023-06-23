import { Command } from '../../../core/command';

export class NewPageCommand implements Command {
  execute(): void {
    window.prompt('Bien hecho!');
  }
}
