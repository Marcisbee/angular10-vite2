import hmr from 'rollup-plugin-hot'
import path from "path";


export default {
// input: 'src/main.ts',
// output: {
//   file: 'public/main.js',
// }
plugins: [
    hmr({ 
        public: 'public'
     })
]
};