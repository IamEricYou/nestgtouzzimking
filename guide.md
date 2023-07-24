## Assume you already installed yarn..or else
## LET'S GOOOOOOOOOO FOR ALL THE DATABASE SETUP


```shell
>>> npm install @nestjs/typeorm typeorm pg 
added 42 packages, and audited 699 packages in 15s

102 packages are looking for funding
  run `npm fund` for details

23 moderate severity vulnerabilities

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

# WTH with all those vulnerabilities? ignore thoseeeeeeee
>>> npm install ts-node -g
added 19 packages in 699ms

# why we install this? 
# answer is here https://goodmemory.tistory.com/126
# I still don't know why
```
<hr/>

## create ormconfig.json

```json
// WOW SHOULD I ADD ALL THOSE ENTITIES FROM THE CONFIG? OMG OMG OMG
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "test",
  "password": "pass",
  "database": "tesdb",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": false // or false or true or false 
}
```

and I want some magic doing here, but.....

```shell
[Nest] 46054  - 07/06/2023, 7:46:09 PM   ERROR [TypeOrmModule] Unable to connect to the database. Retrying (1)...
MissingDriverError: Wrong driver: "undefined" given. Supported drivers are: "aurora-mysql", "aurora-postgres", "better-sqlite3", "capacitor", "cockroachdb", "cordova", "expo", "mariadb", "mongodb", "mssql", "mysql", "nativescript", "oracle", "postgres", "react-native", "sap", "sqlite", "sqljs", "spanner".
```

Duh....
Try again...

and I give up
Just adding connection info right into the code

```js
// app.module.ts
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'test',
    password: 'pass',
    database: 'testdb',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
  })],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
```

and......
```shell
>>> ➜  nesttest git:(main) ✗ yarn start               :dev
yarn run v1.22.19
warning ../../package.json: No license field
$ nest start :dev
[Nest] 47105  - 07/06/2023, 8:05:59 PM     LOG [NestFactory] Starting Nest application...
[Nest] 47105  - 07/06/2023, 8:05:59 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +23ms
[Nest] 47105  - 07/06/2023, 8:05:59 PM     LOG [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 47105  - 07/06/2023, 8:05:59 PM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +12ms
[Nest] 47105  - 07/06/2023, 8:05:59 PM     LOG [RoutesResolver] AppController {/}: +7ms
[Nest] 47105  - 07/06/2023, 8:05:59 PM     LOG [RouterExplorer] Mapped {/, GET} route +1ms
[Nest] 47105  - 07/06/2023, 8:05:59 PM     LOG [RoutesResolver] UserController {/user}: +0ms
[Nest] 47105  - 07/06/2023, 8:05:59 PM     LOG [RouterExplorer] Mapped {/user, GET} route +0ms
[Nest] 47105  - 07/06/2023, 8:05:59 PM     LOG [NestApplication] Nest application successfully started +1ms

# HELL YEAH
```

and I did something (creating service and entity layer to be callsed from controller).....

```shell
>>> yarn start                    :dev

...
[Nest] 48270  - 07/06/2023, 8:28:26 PM   ERROR [ExceptionHandler] Nest can't resolve dependencies of the UserService (?). Please make sure that the argument UserRepository at index [0] is available in the UserModule context.

Potential solutions:
- Is UserModule a valid NestJS module?
- If UserRepository is a provider, is it part of the current UserModule?
- If UserRepository is exported from a separate @Module, is that module imported within UserModule?
  @Module({
    imports: [ /* the Module containing UserRepository */ ]
  })
...

# WHAT A KIND ERROR, I'll look it up later
```

```js
// user.module.ts
@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService]
})

// add those import in User Module.
// I SHOULD LOOK UP HOW THOSE IMPORTS WORKING IN JavaScript enviornment.
```


## and...... let's install SWAGGER CHECK YOUR SWAGGER

> npm install --save @nestjs/swagger
Ta-Da

>localhost:3000 

### Let's add some login function and authorization tooooooo API

We need a library to call AAAAAAPPPPIIIII

```shell
>>> yarn add @nestjs/axios
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning " > ts-loader@9.4.4" has unmet peer dependency "webpack@^5.0.0".
warning " > @nestjs/axios@3.0.0" has unmet peer dependency "axios@^1.3.1".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ @nestjs/axios@3.0.0
info All dependencies
└─ @nestjs/axios@3.0.0
✨  Done in 11.62s.

>>> yarn add passport-kakao
>>> yarn add --dev @types/passport-kakao
```

imports issue 아 증말 디펜던시 귀찮게 굽니다.........
> [여기로][https://stackoverflow.com/questions/51124374/nest-js-cannot-resolve-dependencies-in-auth-service]

