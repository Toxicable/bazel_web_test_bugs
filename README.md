This repo demonstrates 2 issues with karma_web_test

run `yarn install`
1. it is unable to retrieve npm deps
 - run `bazel test tests/npm-deps:testing_karma`
2. ibazel changes result in a broken stdio pipe
 - run `npx ibazel run tests/broken-pipe:testing_karma`