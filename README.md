# @mongodb-helpers/health-check

---

[![Build Status][travis-img]][travis-url]
[![Coverage Status][coverage-img]][coverage-url]
[![NPM version][npm-badge]][npm-url]
![Code Size][code-size-badge]
[![License][license-badge]][license-url]

<!-- ***************** -->

[travis-img]: https://travis-ci.com/mongodb-helpers/health-check.svg?branch=master
[travis-url]: https://travis-ci.com/mongodb-helpers/health-check
[coverage-img]: https://coveralls.io/repos/github/mongodb-helpers/health-check/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/mongodb-helpers/health-check?branch=master
[npm-badge]: https://img.shields.io/npm/v/@mongodb-helpers/health-check.svg?style=flat
[npm-url]: https://www.npmjs.com/package/@mongodb-helpers/health-check
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg?style=flat
[license-url]: https://github.com/mongodb-helpers/health-check/blob/master/LICENSE
[code-size-badge]: https://img.shields.io/github/languages/code-size/mongodb-helpers/health-check
[pr-welcoming-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat

<!-- ***************** -->

### A simple helper function for checking if your mongoose/mongodb connection to MongoDB is good 🪁.

## `Installation`

```bash
# npm
$ npm install @mongodb-helpers/health-check mongodb
# yarn
$ yarn add @mongodb-helpers/health-check mongodb
```

When use mongoose should you also add `mongoose`

## `Usage`

This is a practical example of how to use.

```typescript
import { healthCheck } from "@mongodb-helpers/health-check";

const status = await healthCheck(MonogoDBorMongooseClient);
// 'Connected' | 'Disconnected'
// MonogoDBorMongooseClient:
// - mongodb: const client = await MongoClient.connect(MONGODB_URL)
// - mongoose: const client = await mongoose.connect(MONGODB_URL)
```

#### License

---

[MIT](LICENSE) &copy; [Imed Jaberi](https://github.com/3imed-jaberi)
