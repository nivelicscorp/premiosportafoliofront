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
        BASE_DOMAIN: 'https://stg-premiospo.eltiempo.com.co', // to change after back to real domain
        ENCRYPTATION_KEY:
          '{"alg":"A256GCM","ext":true,"k":"x_w5nag_IGblaKj1XPPfH1m_2ifuKHFOmLIKynGVoV8","key_ops":["encrypt","decrypt"],"kty":"oct"}',
        ENCRYPTATION_IV: 'd0b071ba02dd2f268cb69f97',
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
          MAIN_BANNER: {
            CROP_BANNER_DESKTOP: {
              WIDTH: 1920,
              HEIGHT: 988,
            },
            CROP_BANNER_MOBILE: {
              WIDTH: 360,
              HEIGHT: 718,
            },
          },
          CATEGORIES: {
            CROP_CATEGORY: {
              WIDTH: 815,
              HEIGHT: 458,
            },
          },
          JURIES: {
            CROP_JURIES: {
              WIDTH: 332,
              HEIGHT: 332,
            },
          },
          BEST_MOMENTS: {
            CROP_BEST_MOMENTS: {
              WIDTH: 154,
              HEIGHT: 198,
            },
          },
          WINNERS: {
            CROP_WINNERS: {
              WIDTH: 332,
              HEIGHT: 332,
            },
          },
          GALLERY: {
            CROP_MAIN_DESKTOP: {
              WIDTH: 815,
              HEIGHT: 458,
            },
            CROP_MAIN_MOBILE: {
              WIDTH: 293,
              HEIGHT: 192,
            },
            CROP_THUMBNAIL: {
              WIDTH: 293,
              HEIGHT: 192,
            },
          },
          CONTACT: {
            CROP_CONTACT: {
              WIDTH: 240,
              HEIGHT: 248,
            },
          },
          MORE_PORTAFOLIO: {
            CROP_MORE_PORTAFOLIO: {
              WIDTH: 115,
              HEIGHT: 86,
            },
          },
        }),
      },
      env_production: {
        PORT: 3050,
        BASE_DOMAIN: 'https://premios.portafolio.co',
        ENCRYPTATION_KEY:
          '{"alg":"A256GCM","ext":true,"k":"x_w5nag_IGblaKj1XPPfH1m_2ifuKHFOmLIKynGVoV8","key_ops":["encrypt","decrypt"],"kty":"oct"}',
        ENCRYPTATION_IV: 'd0b071ba02dd2f268cb69f97',
        ROBOTS: 'index, follow',
        ELASTIC_DATA: JSON.stringify({
          NODE: 'https://transprdelastic-cloud.es.privatelink.eastus2.azure.elastic-cloud.com:9243',
          INDEX: 'elasticsearch_index_premios_portafolio_2024_beta_multisite',
          DOMAIN: 'http://localhost:3050',
          ELASTIC_USERNAME: 'MultiSite_Prod',
          ELASTIC_PASSWORD: '*Mult1S1t3_Pr0d24*',
        }),
        ELASTIC_API: '/api/elastic/portafolio',
        IMAGES: JSON.stringify({
          FOLDER_OF_IMAGES:
            'https://premios.portafolio.co/static/assets/backend',
          MAIN_BANNER: {
            CROP_BANNER_DESKTOP: {
              WIDTH: 1920,
              HEIGHT: 988,
            },
            CROP_BANNER_MOBILE: {
              WIDTH: 360,
              HEIGHT: 718,
            },
          },
          CATEGORIES: {
            CROP_CATEGORY: {
              WIDTH: 815,
              HEIGHT: 458,
            },
          },
          JURIES: {
            CROP_JURIES: {
              WIDTH: 332,
              HEIGHT: 332,
            },
          },
          BEST_MOMENTS: {
            CROP_BEST_MOMENTS: {
              WIDTH: 154,
              HEIGHT: 198,
            },
          },
          WINNERS: {
            CROP_WINNERS: {
              WIDTH: 332,
              HEIGHT: 332,
            },
          },
          GALLERY: {
            CROP_MAIN_DESKTOP: {
              WIDTH: 815,
              HEIGHT: 458,
            },
            CROP_MAIN_MOBILE: {
              WIDTH: 293,
              HEIGHT: 192,
            },
            CROP_THUMBNAIL: {
              WIDTH: 293,
              HEIGHT: 192,
            },
          },
          CONTACT: {
            CROP_CONTACT: {
              WIDTH: 240,
              HEIGHT: 248,
            },
          },
          MORE_PORTAFOLIO: {
            CROP_MORE_PORTAFOLIO: {
              WIDTH: 115,
              HEIGHT: 86,
            },
          },
        }),
      },
    },
  ],
}
