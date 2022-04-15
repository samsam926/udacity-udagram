# Pipeline process

## Identifying orbs

- node: circleci/node@5.0.1
- aws-cli: circleci/aws-cli@2.1.0
- aws-elastic-beanstalk: circleci/aws-elastic-beanstalk@2.0.1

## Steps

### installing

- node/install
- checkout
- aws-cli/setup
- aws-elastic-beanstalk/setup

### Build

- Front-End Install
- Back-End Install
- Front-End Build
- Back-End Build
- Front-End Test
- Back-End Test
- Deploy Backend
- Deploy Frontend

## Circle Ci Badge

[![samsam926](https://circleci.com/gh/samsam926/udacity-udagram.svg?style=svg)](https://app.circleci.com/pipelines/github/samsam926/udacity-udagram)
