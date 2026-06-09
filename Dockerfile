FROM ruby:3.2-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

RUN gem install bundler jekyll

COPY . .

RUN bundle install || true
