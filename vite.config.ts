import type { UserConfig } from 'vite'
import hmr from 'rollup-plugin-hot'

const config: UserConfig = {
    // root: 'public',
    optimizeDeps: { exclude: 'zone.js' },
    Plugins: [
        hmr({ public: 'public' })
    ]
}

export default config
