FROM phusion/passenger-nodejs:0.9.14
MAINTAINER Christiaan Roeleveld <croeleveld@gmail.com>
# Set correct environment variables.
ENV HOME /root

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

#ADD demoApp.conf /etc/nginx/sites-enabled/demoApp.conf
ADD default /etc/nginx/sites-enabled/default
RUN rm -f /etc/service/nginx/down && cd /home/app && git clone https://github.com/vChrisR/demoApp.git
RUN chown app /home/app/demoApp

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
EXPOSE 80
