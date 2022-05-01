export interface ITodo {
  id: string,
  text: string,
  checked: boolean,
  createAt: Date,
  toggle(): void,
}

export default class Todo implements ITodo {
  readonly id: string;
  readonly text: string;
  public checked: boolean;
  readonly createAt: Date;

  constructor(text: string) {
    this.id = `${Date() + text}`;
    this.text = text;
    this.checked = false;
    this.createAt = new Date();
  }

  toggle(): void {
    this.checked = !this.checked;
  }
}
