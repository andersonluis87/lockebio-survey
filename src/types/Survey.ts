export type Child = {
  title: string;
  checked: boolean;
}

export type Options = {
  title: string;
  name: string;
  answer?: string,
  typeField: string;
  children?: Array<Child>
}