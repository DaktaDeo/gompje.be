FROM registry.gitlab.com/daktadeo/self/daktadeo-nuxt/nginx:rc5

#custom Nginx options (redirects)
COPY  docker/redirects /etc/nginx/conf.d/redirects
COPY  docker/nginx.conf /etc/nginx/conf.d/default.conf

# Add application
WORKDIR /var/www/html
COPY  dist/ /var/www/html

# COPY  .nuxt/ /var/www/html/.nuxt
# COPY  nuxt.config.js /var/www/html/nuxt.config.js
