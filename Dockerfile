FROM ubuntu:14.04
MAINTAINER Christiaan Roeleveld <croeleveld@gmail.com>
RUN apt-get update && apt-get install -y npm nodejs-legacy git
RUN cd /opt && git clone https://github.com/vChrisR/demoApp.git
ENV DEBUG demoApp
CMD /opt/webApp/bin/www
EXPOSE 3000
