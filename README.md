# My First project hosted in CodeCommit

[![Coverage Status](https://coveralls.io/repos/github/xndong1020/travisci-circleci-codebuild/badge.svg?branch=master)](https://coveralls.io/github/xndong1020/travisci-circleci-codebuild?branch=master)

## How to clone a project from CodeCommit

#### Step 01

If it is Windows, copy your ssh public key from `C:\Users\<username>\.ssh\id_rsa.pub`

#### Step 02

Go to AWS IAM dashboard, select user, go to `Security Credentials`, then `upload SSH public key`
Take note of the `SSH Key ID`

#### Step 03

In `C:\Users\<username>\.ssh\` folder, create a `config` file

```
Host git-codecommit.*.amazonaws.com
User <The SSH key Id you retrieved from Step 02>
IdentityFile ~/.ssh/id_rsa (Your SSH private key location)
```

#### Step 04

Clone project from AWS CodeCommit as you would of from Github or Bitbucket

## Setup circleci for this project

#### step 01: create a .circleci/config.yml

#### step 02: setup 'job' in circleci website

## Setup coveralls for test coverage

#### step 01: setup 'repo' in coveralls website

#### step 02: take note of the repo token

#### step 03: store your repo token in travisci/circleci

env name `COVERALLS_REPO_TOKEN`

#### step 04: pipe nyc report to coveralls

```
nyc report --reporter=text-lcov | coveralls
```

Also add this step to your ci build
for circleci:

```
...
 - run: # run coverage report to coveralls
          name: code-coverage
          command: npm run coverage
...
```

if you need to run coverage locally, don't forget to export your COVERALLS_REPO_TOKEN

```
export COVERALLS_REPO_TOKEN=<your repo token>
```

then

```
npm run coverage
```
