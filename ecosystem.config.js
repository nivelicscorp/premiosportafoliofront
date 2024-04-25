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
        PORT: 3050,
        BASE_DOMAIN: 'https://beta-*.com',
        ROBOTS: 'noindex, nofollow',
        ELASTIC_DATA: JSON.stringify({
          NODE: 'https://mtsstgelastic-cloud.es.privatelink.eastus2.azure.elastic-cloud.com:9243',
          INDEX: 'elasticsearch_index_premios_portafolio_2024_beta_multisite',
          DOMAIN: 'http://localhost:3050',
          ELASTIC_USERNAME: 'MultiSite_Stg',
          ELASTIC_PASSWORD: 'Mult1S1t3_Cl0ud_01',
        }),
        ELASTIC_API: '/api/elastic/portafolio',
        IMAGES: JSON.stringify({
          FOLDER_OF_IMAGES:
            'https://beta-premios.portafolio.co/static/assets/backend',
        }),
      },
      env_production: {
        PORT: 3050,
        BASE_DOMAIN: 'https://*.com',
        ROBOTS: 'index, follow',
        ELASTIC_DATA: JSON.stringify({
          NODE: 'https://transprdelastic-cloud.es.privatelink.eastus2.azure.elastic-cloud.com:9243',
          INDEX: 'elasticsearch_index_premios_portafolio_2024_multisite',
          DOMAIN: 'http://localhost:3050',
          ELASTIC_USERNAME: 'MultiSite_Prod',
          ELASTIC_PASSWORD: 'Mult1S1t3_Pr0d24',
        }),
        ELASTIC_API: '/api/elastic/portafolio',
        IMAGES: JSON.stringify({
          FOLDER_OF_IMAGES:
            'https://premios.portafolio.co/static/assets/backend',
        }),
      },
    },
  ],
}
