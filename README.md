# CI/CD Demo: GitHub Actions in Practice

[![CI](https://github.com/kapunahelewong/cd-cd-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/kapunahelewong/cd-cd-demo/actions/workflows/ci.yml) [![CD](https://github.com/kapunahelewong/cd-cd-demo/actions/workflows/cd.yml/badge.svg)](https://github.com/kapunahelewong/cd-cd-demo/actions/workflows/cd.yml)

This repo is the companion project for a three part blog series on [CI/CD with GitHub Actions](https://kapunahelewong.github.io/posts/ci-cd-basics/). It is a small, dependency light TypeScript project whose only real purpose is to give the workflows something real to lint, test, build, and deploy.

## What is in here

- `src/` and `test/`: a tiny greeting function and its tests, used by CI.
- `docs/openapi.yaml`: a sample OpenAPI spec, used to demonstrate a documentation build pipeline.
- `scripts/`: small Node scripts standing in for a real docs generator and static site builder.
- `.github/workflows/ci.yml`: Continuous Integration. Lints, validates the OpenAPI spec, and runs tests across a matrix of operating systems and Node versions.
- `.github/workflows/cd.yml`: Continuous Deployment. Runs only after CI succeeds on `main`, builds the docs site, and deploys it to GitHub Pages.
- `.github/workflows/reusable-node-tests.yml`: a reusable workflow, callable from other workflows.
- `.github/actions/setup-project/action.yml`: a composite action bundling common setup steps.

## How the pieces map to the blog series

**Part 1 (the basics)**: `ci.yml`'s `test` job, stripped of the matrix and artifact steps, is close to the very first workflow in that post.

**Part 2 (common use cases)**: linting as its own job, `needs` connecting build to test, the docs generation and build steps, and the `cd.yml` deployment job with an `environment` block all come straight from that post.

**Part 3 (matrices, artifacts, and advanced patterns)**: the `test` job's `strategy.matrix` with `fail-fast: false`, the conditional test result artifact upload on failure, the build output artifact handed from `ci.yml`'s build job toward deployment, the `concurrency` blocks on both workflows, and the reusable workflow and composite action are all direct examples from that post.

## Running it yourself

```bash
npm install
npm run lint
npm test
npm run build
npm run docs:generate
npm run docs:build
```

Push to a fork with GitHub Pages enabled (Settings > Pages > Source: GitHub Actions) and both workflows will run as described above.
