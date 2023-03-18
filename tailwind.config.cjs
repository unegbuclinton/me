// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         white: '#fff',
//         'flash-white': '#E9ECEF',
//         onyx: '#343A40',
//         'light-purple': 'rgba(175, 0, 255, 0.31)',
        
//       },

//     },

//     fontFamily: {
//       poppins: ['Poppins', 'sans-serif'],
//       roboto: ['Roboto', 'sans-serif'] 
//     },
//   },

//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          colors: {
              white: '#fff',
              'flash-white': '#E9ECEF',
              onyx: '#343A40',
              grey: '#7F7D7D'
              
            },
            backgroundImage: {
              'hero-pattern':
                'linear-gradient(90deg, rgba(52,58,64,1) 0%, rgba(130,140,150,1) 45%, rgba(233,236,239,1) 100%);',
            },
          },
          fontFamily: {
                  poppins: ['Poppins', 'sans-serif'],
                  roboto: ['Roboto', 'sans-serif'] 
                },
  },
  plugins: [],
}
