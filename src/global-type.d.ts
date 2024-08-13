/// <reference types="react-scripts" />
namespace React {
  interface Attributes {
    styleName?: string;
  }
}

declare type A = any;
declare type Guid = string;
declare type DateTime = string;
declare type ClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
declare type valueof<T> = T[keyof T];
declare interface Window {
  context?: IContext;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: A;
}
