FROM php:7.4-apache

# Copy composer from the latest image
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Install nodejs/npm
RUN apt-get update && apt-get install -y nodejs npm

COPY . /var/www/html/

# Install dependencies
RUN composer install
RUN npm install

# Run the server
# ENTRYPOINT [ "npm", "run", "dev" ]
ENTRYPOINT ["/docker-entrypoint.sh"]
