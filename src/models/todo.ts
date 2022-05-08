export interface ITodoDto {
  readonly id: string;
  readonly text: string;
  readonly checked: boolean;
  readonly createAt: number;
}

export interface ITodo extends ITodoDto {
  copyWith(option: Partial<ITodoDto>): ITodo;
  toJson(): ITodoDto;
}

export default class Todo implements ITodo {
  private constructor(
    readonly id: string,
    readonly text: string,
    readonly checked: boolean,
    readonly createAt: number,
  ) {}

  copyWith(option: Partial<ITodoDto>): ITodo {
    return new Todo(
      option.id ?? this.id,
      option.text ?? this.text,
      option.checked ?? this.checked,
      option.createAt ?? this.createAt,
    );
  }

  toJson(): ITodoDto {
    return {
      id: this.id,
      text: this.text,
      checked: this.checked,
      createAt: this.createAt,
    }
  }

  static fromJson(json: ITodoDto): ITodo {
    return new Todo(
      json.id,
      json.text,
      json.checked,
      json.createAt,
    );
  }

  static fromText(text: string): ITodo {
    const now = Date.now();
    return new Todo(
      `${now}-${text}`,
      text,
      false,
      now,
    );
  }
}
