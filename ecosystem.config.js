// This solves multiapp by environment with PM2
const CURRENT_ENV =
  process.argv.indexOf('--env') === -1
    ? ''
    : '-' + process.argv[process.argv.indexOf('--env') + 1]

module.exports = {
  apps: [
    {
      name: 'PremiosPortafolio' + CURRENT_ENV,
      script: 'npm',
      args: 'start',
      max_memory_restart: '300M',
      instances: '4',
      exec_mode: 'cluster',
      watch: false,
      ignore_watch: ['node_modules/'],
      watch_options: {
        followSymlinks: false,
      },
      env_development: {
        PORT: 3040,
        BASE_DOMAIN: 'https://stg-*.com',
        ROBOTS: 'noindex, nofollow',
        ELASTIC_DATA: JSON.stringify({
          NODE: '-',
          INDEX: '-',
          DOMAIN: 'http://localhost:3040',
          ELASTIC_USERNAME: '-',
          ELASTIC_PASSWORD: '-',
        }),
        ELASTIC_API: '/api/elastic/portafolio',
      },
      env_production: {
        PORT: 3040,
        BASE_DOMAIN: 'https://*.com',
        ROBOTS: 'index, follow',
        ELASTIC_DATA: JSON.stringify({
          NODE: '-',
          INDEX: '-',
          DOMAIN: 'http://localhost:3040',
          ELASTIC_USERNAME: '-',
          ELASTIC_PASSWORD: '-',
        }),
        ELASTIC_API: '/api/elastic/portafolio',
      },
    },
  ],
}
