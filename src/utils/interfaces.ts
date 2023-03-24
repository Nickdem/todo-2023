export interface IStringObj {
  [key: string]: string;
}

export interface ITodoObj {
  title: string;
  description: string;
  tag: string;
  id: string;
}

// export interface ITodoObjWrapper {
//   title: string;
//   items: Array<ITodoObj>;
// }

export interface IMockTodoObj {
  [key: string]: Array<ITodoObj>;
}

export interface ITodosObj {
  [key: string]: Array<ITodoObj>;
  // todo: Array<ITodoObj>;
  // inprogress: Array<ITodoObj>;
  // done: Array<ITodoObj>;
  // todosLength: number;
}

export interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

export interface ITagListProps {
  itemsList: Array<string>;
  clickHandler: Function;
  cls: string;
  selected?: string;
}

export interface ISelectValueProps {
  clickHandler: Function;
  cls: string;
  color: string;
  container?: boolean;
}

export interface ITagProps {
  color: string;
}

// export type columnNames = "todo" | "inprogress" | "done";
// export type IColumnNames = Record<columnNames, string>;
export interface IColumnProps {
  name: string;
}

export interface ITodoProps {
  item: ITodoObj;
}

export interface IButtonProps {
  text: string;
  clickHandler: Function;
  cls: string;
  testid: string;
}

export interface IModalProps {
  children: JSX.Element | JSX.Element[];
}

export interface IFormProps {
  children: JSX.Element | JSX.Element[];
  text: string;
  title: string;
  clickHandler: Function;
}

export interface IFormFieldProps {
  name: string;
  label: string;
  value: string;
  changeHandler: Function;
  type: string;
}

export interface ISelectProps {
  value: string;
  changeSelect: Function;
  onlyColors: boolean
}
