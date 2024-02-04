## Frontend Repository

SCMP Polling System Frontend Repository: [Frontend](https://github.com/sp0033212000/scmp-polling-system-frontend)

## Description

This is a backend for Polling System that based on the NestJS.

Additionally, I'm using NestJS as server framework, and Prisma + PostgresSQL for database.

## Before Start

You must place a dotenv file at the root of your project.
And this dotenv must contain the following environment variables.

```dotenv
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="REPLACE_ACCORDING_TO_YOUR_SITUATION"
```

## Installation

```bash
$ yarn --frozen-lockfile
```

## Generating Prisma Schema

```bash
$ yarn sync-prisma-type
```

## Running the app

```bash
# development mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## If you want to do the migration for the database

### Note: You have to re-generate the dotenv file before running the migration

```bash
# development mode
$ yarn prisma-push:dev

# production mode
$ yarn prisma-push:prod
```

## Use Nest CLI to generate the resource and service

```bash
$ nest g resource resource/<resource-name>
$ nest g service service/<service-name>
```

## Generate dotenv file

```bash
# development mode
$ yarn env:dev

# production mode
$ yarn env:prod
```
