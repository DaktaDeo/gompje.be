FROM registry.gitlab.com/daktadeo/self/daktadeo-nuxt/nginx:rc3

# Add application
WORKDIR /var/www/html

COPY  dist/ /var/www/html/dist

# COPY  .nuxt/ /var/www/html/.nuxt
# COPY  nuxt.config.js /var/www/html/nuxt.config.js 