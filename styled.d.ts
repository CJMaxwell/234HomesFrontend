import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<
      | 'primary'
      | 'secondary'
      | 'tertiary',
      string
    >;
    font: {
      body: string;
    };
  }
}