# WebCash
[![Build Status](https://travis-ci.org/nulldev07/web-cash.svg?branch=master)](https://travis-ci.org/nulldev07/web-cash)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

For details on build/serve/deploy/test please visit [Angular CLI](https://github.com/angular/angular-cli).

## What is WebCash?

WebCash is web version of popular OSS [GnuCash](www.gnucash.org).

## What features are available?

Right now, the following features are available:

* The home page displaying all the accounts
* Account transactions

## What is the technical stack?

It is a MEAN stack product, except that instead of MongoDB, M stands for MySQL, since GnuCash does not support any of the NoSQL databases.

### Front End
* [Angular](https://angular.io/) (4, as of now)
* [AngularFire2](https://github.com/angular/angularfire2) for authentication
* [ngrx](https://github.com/ngrx) for state management
* [immutable](https://facebook.github.io/immutable-js/) for storing state
