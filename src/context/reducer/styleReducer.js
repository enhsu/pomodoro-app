export const styleInitState = {
  currentFont: 'font-default',
  currentColor: 'color-default',
  fonts: {
    'font-default': {
      id: 'font-default',
      label: 'Aa',
      value: '"Kumbh Sans",sans-serif',
      labelStyle: {
        'fontFamily': '"Kumbh Sans",sans-serif'
      }
    },
    'reboto-slab': {
      id: 'reboto-slab',
      label: 'Aa',
      value: '"Roboto Slab",serif',
      labelStyle: {
        'fontFamily': '"Roboto Slab",serif'
      }
    },
    'space-mono': {
      id: 'space-mono',
      label: 'Aa',
      value: '"Space Mono",monospace',
      labelStyle: {
        'fontFamily': '"Space Mono",monospace'
      }
    }
  },
  colors: {
    'color-default': {
      id: 'color-default',
      value: '#f87070',
      labelStyle: {
        backgroundColor: '#f87070'
      }
    },
    'color-blue': {
      id: 'color-blue',
      value: '#70f3f8',
      labelStyle: {
        backgroundColor: '#70f3f8'
      }
    },
    'color-purple': {
      id: 'color-purple',
      value: '#d881f8',
      labelStyle: {
        backgroundColor: '#d881f8'
      }
    }
  },
  global: {
    "color": "#d7e0ff",
    "color-dark": "#1e213f",
    "background-timer": "#161932",
    "border-devide": "#e3e1e1",
    "input-background": "#eff1fa"
  }
};

export default function styleReducer(state, action) {
  switch(action.type) {
    case "SET_FONT":
      return {
        ...state,
        currentFont: action.value
      };
    case "SET_COLOR":
      return {
        ...state,
        currentColor: action.value
      };
    default:
      return state;
  }
}