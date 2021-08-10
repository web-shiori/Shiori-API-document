# io.swagger.server - Kotlin Server library for Web-Shiori API

Web-Shiori API document

Generated by Swagger Codegen 2.4.21 (2021-08-10T17:19:35.610Z).

## Requires

* Kotlin 1.2.10
* Gradle 4.3

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Running

The server builds as a fat jar with a main entrypoint. To start the service, run `java -jar ./build/libs/kotlin-server.jar`.

You may also run in docker:

```
docker build -t kotlin-server .
docker run -p 8080:8080 kotlin-server
```

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs (see ktor documentation for more info).
* ~Supports collection formats for query parameters: csv, tsv, ssv, pipes.~
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in Swagger definitions.

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://web-shiori-api-document.herokuapp.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthApi* | [**v1AuthPost**](docs/AuthApi.md#v1authpost) | **POST** /v1/auth | 会員登録用API


<a name="documentation-for-models"></a>
## Documentation for Models



<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.
