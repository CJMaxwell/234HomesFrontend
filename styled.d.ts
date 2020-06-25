import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<
      | 'orange1'
      | 'yellow1'
      | 'green1'
      | 'gray2'
      | 'white'
      | 'black'
      | 'gray1'
      | 'gray3'
      | 'gray10'
      | 'gray4'
      | 'gray5'
      | 'gray9'
      | 'gray8'
      | 'orange2'
      | 'gray6'
      | 'gray7'
      | 'gray11'
      | 'orange3'
      | 'gray12'
      | 'gray13'
      | 'gray14'
      | 'gray15',
      string
    >;
  }
}
