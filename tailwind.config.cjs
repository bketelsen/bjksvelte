module.exports = {
  mode: 'jit',
  purge: {
    content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
    options: {
      safelist: [
        /data-theme$/,
      ]
    }
  },
  theme: {
    extend: {
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              maxWidth: 'none',
              code: {
                borderRadius: theme('borderRadius.md'),
                paddingTop: theme('spacing.1'),
                paddingBottom: theme('spacing.1'),
                paddingLeft: theme('spacing.1'),
                paddingRight: theme('spacing.1'),
                fontFamily: 'inherit !important',
                fontWeight: '500 !important',
                color: theme('colors.gray.900'),
                backgroundColor: theme('colors.gray.300')
              },
              'code::before': {
                content: '""'
              },
              'code::after': {
                content: '""'
              },
              hr: {
                borderColor: theme('colors.gray.300')
              },
              ul: {
                marginTop: '0 !important',
                marginBottom: '0 !important'
              },
              li: {
                marginTop: '0 !important',
                marginBottom: '0 !important'
              },
              img: {
                marginLeft: 'auto',
                marginRight: 'auto'
              },
              'h1,h2,h3,h4,h5,h6': {
                a: {
                  color: 'inherit',
                  fontWeight: 'inherit',
                  textDecoration: 'none'
                }
              },
              h1: {
                fontSize: theme('fontSize.2xl')
              },
              h2: {
                fontSize: theme('fontSize.xl')
              },
              h3: {
                fontSize: theme('fontSize.md')
              },
              h4: {
                fontSize: theme('fontSize.base')
              },
              h5: {
                fontSize: theme('fontSize.base')
              },
              h6: {
                fontSize: theme('fontSize.base')
              }
            }
          },
          sm: {
            css: {
              h1: {
                fontSize: theme('fontSize.xl')
              },
              h2: {
                fontSize: theme('fontSize.lg')
              },
              h3: {
                fontSize: theme('fontSize.base')
              },
              h4: {
                fontSize: theme('fontSize.base')
              },
              h5: {
                fontSize: theme('fontSize.base')
              },
              h6: {
                fontSize: theme('fontSize.base')
              }
            }
          },
          lg: {
            css: {
              code: {
                paddingLeft: theme('spacing.2'),
                paddingRight: theme('spacing.2')
              },
              h1: {
                fontSize: theme('fontSize.3xl')
              },
              h2: {
                fontSize: theme('fontSize.2xl')
              },
              h3: {
                fontSize: theme('fontSize.xl')
              },
              h4: {
                fontSize: theme('fontSize.lg')
              }
            }
          },


        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),],
  daisyui: {
    styled: true,
    themes: [
      {
        'mytheme': {
          "fontFamily": "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
          'primary': '#9bbec7',
          'primary-focus': '#6fa2ae',
          'primary-content': '#ffffff',
          'secondary': '#a8b7ab',
          'secondary-focus': '#7a907e',
          'secondary-content': '#ffffff',
          'accent': '#f6e27f',
          'accent-focus': '#f2d440',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
          "--rounded-box": "0",
          "--rounded-btn": "0",
          "--rounded-badge": "0",
          "--tab-radius": "0"
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
