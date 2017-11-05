FROM node:8.9-stretch

RUN apt-get update &&  \
    apt-get install -y git wget curl unzip ruby build-essential && \
    apt-get install -y ruby-dev && \
    gem install sass scss_lint && \
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    dpkg --unpack google-chrome-stable_current_amd64.deb && \
    apt-get install -f -y && \
    apt-get clean && \
    rm google-chrome-stable_current_amd64.deb

RUN mkdir /code
WORKDIR /code