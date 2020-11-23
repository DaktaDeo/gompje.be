FROM registry.gitlab.com/daktadeo/self/daktadeo-nuxt/nginx:rc2

# Add application
WORKDIR /var/www/html

COPY  dist/ /var/www/html
