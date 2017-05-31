# Shibaurasai App

[![Build Status](https://travis-ci.org/SIT-DigiCre/ShibaurasaiApp.svg?branch=develop)](https://travis-ci.org/SIT-DigiCre/ShibaurasaiApp)

Shibaurasai Navigation Application made with React on Cordova.

## How to Build

### Run as SPA(Single Page Application)

#### requiremtns

* node
  * developer environment : v7.10.0
* git
  * developer environment : 2.11.0

```sh
$ git clone git@github.com:SIT-DigiCre/ShibaurasaiApp.git
$ cd ShibaurasaiApp
$ npm install
$ npm start
```
And Access to http://localhost:8080/www/ on your browser. I tested only Chrome.

### Run as Android App

You have to set up [Android Development Environment](http://cordova.apache.org/docs/en/7.x/guide/platforms/android/index.html).

```sh
$ npm instal -g cordova
$ cd path/to/this/repository
$ cordova platform add android
$ cordova run android
```
