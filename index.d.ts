
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  createdAt: Date
  email: string
  firstName: string | null
  lastName: string | null
  role: string
}

/**
 * Model CouponsUsedByUser
 * 
 */
export type CouponsUsedByUser = {
  id: number
  userId: number | null
  couponsName: string | null
}

/**
 * Model Coupon
 * 
 */
export type Coupon = {
  id: number
  name: string
  listingId: number | null
  deal: string
  expires: Date
}

/**
 * Model Listing
 * 
 */
export type Listing = {
  id: number
  name: string
  address: string
  category: string
  description: string
  email: string
  phone: string
  website: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.couponsUsedByUser`: Exposes CRUD operations for the **CouponsUsedByUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CouponsUsedByUsers
    * const couponsUsedByUsers = await prisma.couponsUsedByUser.findMany()
    * ```
    */
  get couponsUsedByUser(): Prisma.CouponsUsedByUserDelegate<GlobalReject>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<GlobalReject>;

  /**
   * `prisma.listing`: Exposes CRUD operations for the **Listing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listing.findMany()
    * ```
    */
  get listing(): Prisma.ListingDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.0
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    CouponsUsedByUser: 'CouponsUsedByUser',
    Coupon: 'Coupon',
    Listing: 'Listing'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    couponsUsedByUser: number
  }

  export type UserCountOutputTypeSelect = {
    couponsUsedByUser?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type CouponCountOutputType
   */


  export type CouponCountOutputType = {
    couponsUsedByUser: number
  }

  export type CouponCountOutputTypeSelect = {
    couponsUsedByUser?: boolean
  }

  export type CouponCountOutputTypeGetPayload<S extends boolean | null | undefined | CouponCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CouponCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CouponCountOutputTypeArgs)
    ? CouponCountOutputType 
    : S extends { select: any } & (CouponCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CouponCountOutputType ? CouponCountOutputType[P] : never
  } 
      : CouponCountOutputType




  // Custom InputTypes

  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CouponCountOutputType
     * 
    **/
    select?: CouponCountOutputTypeSelect | null
  }



  /**
   * Count Type ListingCountOutputType
   */


  export type ListingCountOutputType = {
    coupons: number
  }

  export type ListingCountOutputTypeSelect = {
    coupons?: boolean
  }

  export type ListingCountOutputTypeGetPayload<S extends boolean | null | undefined | ListingCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ListingCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ListingCountOutputTypeArgs)
    ? ListingCountOutputType 
    : S extends { select: any } & (ListingCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ListingCountOutputType ? ListingCountOutputType[P] : never
  } 
      : ListingCountOutputType




  // Custom InputTypes

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ListingCountOutputType
     * 
    **/
    select?: ListingCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    firstName: string | null
    lastName: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    firstName: string | null
    lastName: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    firstName: number
    lastName: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    firstName?: true
    lastName?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    firstName?: true
    lastName?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    firstName?: true
    lastName?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    email: string
    firstName: string | null
    lastName: string | null
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    couponsUsedByUser?: boolean | UserCouponsUsedByUserArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    couponsUsedByUser?: boolean | UserCouponsUsedByUserArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'couponsUsedByUser' ? Array < CouponsUsedByUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'couponsUsedByUser' ? Array < CouponsUsedByUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    couponsUsedByUser<T extends UserCouponsUsedByUserArgs= {}>(args?: Subset<T, UserCouponsUsedByUserArgs>): PrismaPromise<Array<CouponsUsedByUserGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User.couponsUsedByUser
   */
  export type UserCouponsUsedByUserArgs = {
    /**
     * Select specific fields to fetch from the CouponsUsedByUser
     * 
    **/
    select?: CouponsUsedByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponsUsedByUserInclude | null
    where?: CouponsUsedByUserWhereInput
    orderBy?: Enumerable<CouponsUsedByUserOrderByWithRelationInput>
    cursor?: CouponsUsedByUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CouponsUsedByUserScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model CouponsUsedByUser
   */


  export type AggregateCouponsUsedByUser = {
    _count: CouponsUsedByUserCountAggregateOutputType | null
    _avg: CouponsUsedByUserAvgAggregateOutputType | null
    _sum: CouponsUsedByUserSumAggregateOutputType | null
    _min: CouponsUsedByUserMinAggregateOutputType | null
    _max: CouponsUsedByUserMaxAggregateOutputType | null
  }

  export type CouponsUsedByUserAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CouponsUsedByUserSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CouponsUsedByUserMinAggregateOutputType = {
    id: number | null
    userId: number | null
    couponsName: string | null
  }

  export type CouponsUsedByUserMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    couponsName: string | null
  }

  export type CouponsUsedByUserCountAggregateOutputType = {
    id: number
    userId: number
    couponsName: number
    _all: number
  }


  export type CouponsUsedByUserAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CouponsUsedByUserSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CouponsUsedByUserMinAggregateInputType = {
    id?: true
    userId?: true
    couponsName?: true
  }

  export type CouponsUsedByUserMaxAggregateInputType = {
    id?: true
    userId?: true
    couponsName?: true
  }

  export type CouponsUsedByUserCountAggregateInputType = {
    id?: true
    userId?: true
    couponsName?: true
    _all?: true
  }

  export type CouponsUsedByUserAggregateArgs = {
    /**
     * Filter which CouponsUsedByUser to aggregate.
     * 
    **/
    where?: CouponsUsedByUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponsUsedByUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<CouponsUsedByUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CouponsUsedByUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponsUsedByUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponsUsedByUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CouponsUsedByUsers
    **/
    _count?: true | CouponsUsedByUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponsUsedByUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponsUsedByUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponsUsedByUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponsUsedByUserMaxAggregateInputType
  }

  export type GetCouponsUsedByUserAggregateType<T extends CouponsUsedByUserAggregateArgs> = {
        [P in keyof T & keyof AggregateCouponsUsedByUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCouponsUsedByUser[P]>
      : GetScalarType<T[P], AggregateCouponsUsedByUser[P]>
  }




  export type CouponsUsedByUserGroupByArgs = {
    where?: CouponsUsedByUserWhereInput
    orderBy?: Enumerable<CouponsUsedByUserOrderByWithAggregationInput>
    by: Array<CouponsUsedByUserScalarFieldEnum>
    having?: CouponsUsedByUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponsUsedByUserCountAggregateInputType | true
    _avg?: CouponsUsedByUserAvgAggregateInputType
    _sum?: CouponsUsedByUserSumAggregateInputType
    _min?: CouponsUsedByUserMinAggregateInputType
    _max?: CouponsUsedByUserMaxAggregateInputType
  }


  export type CouponsUsedByUserGroupByOutputType = {
    id: number
    userId: number | null
    couponsName: string | null
    _count: CouponsUsedByUserCountAggregateOutputType | null
    _avg: CouponsUsedByUserAvgAggregateOutputType | null
    _sum: CouponsUsedByUserSumAggregateOutputType | null
    _min: CouponsUsedByUserMinAggregateOutputType | null
    _max: CouponsUsedByUserMaxAggregateOutputType | null
  }

  type GetCouponsUsedByUserGroupByPayload<T extends CouponsUsedByUserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CouponsUsedByUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponsUsedByUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponsUsedByUserGroupByOutputType[P]>
            : GetScalarType<T[P], CouponsUsedByUserGroupByOutputType[P]>
        }
      >
    >


  export type CouponsUsedByUserSelect = {
    id?: boolean
    User?: boolean | UserArgs
    userId?: boolean
    Coupons?: boolean | CouponArgs
    couponsName?: boolean
  }


  export type CouponsUsedByUserInclude = {
    User?: boolean | UserArgs
    Coupons?: boolean | CouponArgs
  } 

  export type CouponsUsedByUserGetPayload<S extends boolean | null | undefined | CouponsUsedByUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CouponsUsedByUser :
    S extends undefined ? never :
    S extends { include: any } & (CouponsUsedByUserArgs | CouponsUsedByUserFindManyArgs)
    ? CouponsUsedByUser  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :
        P extends 'Coupons' ? CouponGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (CouponsUsedByUserArgs | CouponsUsedByUserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :
        P extends 'Coupons' ? CouponGetPayload<S['select'][P]> | null :  P extends keyof CouponsUsedByUser ? CouponsUsedByUser[P] : never
  } 
      : CouponsUsedByUser


  type CouponsUsedByUserCountArgs = Merge<
    Omit<CouponsUsedByUserFindManyArgs, 'select' | 'include'> & {
      select?: CouponsUsedByUserCountAggregateInputType | true
    }
  >

  export interface CouponsUsedByUserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CouponsUsedByUser that matches the filter.
     * @param {CouponsUsedByUserFindUniqueArgs} args - Arguments to find a CouponsUsedByUser
     * @example
     * // Get one CouponsUsedByUser
     * const couponsUsedByUser = await prisma.couponsUsedByUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CouponsUsedByUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CouponsUsedByUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CouponsUsedByUser'> extends True ? Prisma__CouponsUsedByUserClient<CouponsUsedByUserGetPayload<T>> : Prisma__CouponsUsedByUserClient<CouponsUsedByUserGetPayload<T> | null, null>

    /**
     * Find one CouponsUsedByUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CouponsUsedByUserFindUniqueOrThrowArgs} args - Arguments to find a CouponsUsedByUser
     * @example
     * // Get one CouponsUsedByUser
     * const couponsUsedByUser = await prisma.couponsUsedByUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CouponsUsedByUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CouponsUsedByUserFindUniqueOrThrowArgs>
    ): Prisma__CouponsUsedByUserClient<CouponsUsedByUserGetPayload<T>>

    /**
     * Find the first CouponsUsedByUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsUsedByUserFindFirstArgs} args - Arguments to find a CouponsUsedByUser
     * @example
     * // Get one CouponsUsedByUser
     * const couponsUsedByUser = await prisma.couponsUsedByUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CouponsUsedByUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CouponsUsedByUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CouponsUsedByUser'> extends True ? Prisma__CouponsUsedByUserClient<CouponsUsedByUserGetPayload<T>> : Prisma__CouponsUsedByUserClient<CouponsUsedByUserGetPayload<T> | null, null>

    /**
     * Find the first CouponsUsedByUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsUsedByUserFindFirstOrThrowArgs} args - Arguments to find a CouponsUsedByUser
     * @example
     * // Get one CouponsUsedByUser
     * const couponsUsedByUser = await prisma.couponsUsedByUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CouponsUsedByUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CouponsUsedByUserFindFirstOrThrowArgs>
    ): Prisma__CouponsUsedByUserClient<CouponsUsedByUserGetPayload<T>>

    /**
     * Find zero or more CouponsUsedByUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsUsedByUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CouponsUsedByUsers
     * const couponsUsedByUsers = await prisma.couponsUsedByUser.findMany()
     * 
     * // Get first 10 CouponsUsedByUsers
     * const couponsUsedByUsers = await prisma.couponsUsedByUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponsUsedByUserWithIdOnly = await prisma.couponsUsedByUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CouponsUsedByUserFindManyArgs>(
      args?: SelectSubset<T, CouponsUsedByUserFindManyArgs>
    ): PrismaPromise<Array<CouponsUsedByUserGetPayload<T>>>

    /**
     * Create a CouponsUsedByUser.
     * @param {CouponsUsedByUserCreateArgs} args - Arguments to create a CouponsUsedByUser.
     * @example
     * // Create one CouponsUsedByUser
     * const CouponsUsedByUser = await prisma.couponsUsedByUser.create({
     *   data: {
     *     // ... data to create a CouponsUsedByUser
     *   }
     * })
     * 
    **/
    create<T extends CouponsUsedByUserCreateArgs>(
      args: SelectSubset<T, CouponsUsedByUserCreateArgs>
    ): Prisma__CouponsUsedByUserClient<CouponsUsedByUserGetPayload<T>>

    /**
     * Delete a CouponsUsedByUser.
     * @param {CouponsUsedByUserDeleteArgs} args - Arguments to delete one CouponsUsedByUser.
     * @example
     * // Delete one CouponsUsedByUser
     * const CouponsUsedByUser = await prisma.couponsUsedByUser.delete({
     *   where: {
     *     // ... filter to delete one CouponsUsedByUser
     *   }
     * })
     * 
    **/
    delete<T extends CouponsUsedByUserDeleteArgs>(
      args: SelectSubset<T, CouponsUsedByUserDeleteArgs>
    ): Prisma__CouponsUsedByUserClient<CouponsUsedByUserGetPayload<T>>

    /**
     * Update one CouponsUsedByUser.
     * @param {CouponsUsedByUserUpdateArgs} args - Arguments to update one CouponsUsedByUser.
     * @example
     * // Update one CouponsUsedByUser
     * const couponsUsedByUser = await prisma.couponsUsedByUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CouponsUsedByUserUpdateArgs>(
      args: SelectSubset<T, CouponsUsedByUserUpdateArgs>
    ): Prisma__CouponsUsedByUserClient<CouponsUsedByUserGetPayload<T>>

    /**
     * Delete zero or more CouponsUsedByUsers.
     * @param {CouponsUsedByUserDeleteManyArgs} args - Arguments to filter CouponsUsedByUsers to delete.
     * @example
     * // Delete a few CouponsUsedByUsers
     * const { count } = await prisma.couponsUsedByUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CouponsUsedByUserDeleteManyArgs>(
      args?: SelectSubset<T, CouponsUsedByUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CouponsUsedByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsUsedByUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CouponsUsedByUsers
     * const couponsUsedByUser = await prisma.couponsUsedByUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CouponsUsedByUserUpdateManyArgs>(
      args: SelectSubset<T, CouponsUsedByUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CouponsUsedByUser.
     * @param {CouponsUsedByUserUpsertArgs} args - Arguments to update or create a CouponsUsedByUser.
     * @example
     * // Update or create a CouponsUsedByUser
     * const couponsUsedByUser = await prisma.couponsUsedByUser.upsert({
     *   create: {
     *     // ... data to create a CouponsUsedByUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CouponsUsedByUser we want to update
     *   }
     * })
    **/
    upsert<T extends CouponsUsedByUserUpsertArgs>(
      args: SelectSubset<T, CouponsUsedByUserUpsertArgs>
    ): Prisma__CouponsUsedByUserClient<CouponsUsedByUserGetPayload<T>>

    /**
     * Count the number of CouponsUsedByUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsUsedByUserCountArgs} args - Arguments to filter CouponsUsedByUsers to count.
     * @example
     * // Count the number of CouponsUsedByUsers
     * const count = await prisma.couponsUsedByUser.count({
     *   where: {
     *     // ... the filter for the CouponsUsedByUsers we want to count
     *   }
     * })
    **/
    count<T extends CouponsUsedByUserCountArgs>(
      args?: Subset<T, CouponsUsedByUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponsUsedByUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CouponsUsedByUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsUsedByUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CouponsUsedByUserAggregateArgs>(args: Subset<T, CouponsUsedByUserAggregateArgs>): PrismaPromise<GetCouponsUsedByUserAggregateType<T>>

    /**
     * Group by CouponsUsedByUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsUsedByUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CouponsUsedByUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponsUsedByUserGroupByArgs['orderBy'] }
        : { orderBy?: CouponsUsedByUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CouponsUsedByUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponsUsedByUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CouponsUsedByUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CouponsUsedByUserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    Coupons<T extends CouponArgs= {}>(args?: Subset<T, CouponArgs>): Prisma__CouponClient<CouponGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CouponsUsedByUser base type for findUnique actions
   */
  export type CouponsUsedByUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CouponsUsedByUser
     * 
    **/
    select?: CouponsUsedByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponsUsedByUserInclude | null
    /**
     * Filter, which CouponsUsedByUser to fetch.
     * 
    **/
    where: CouponsUsedByUserWhereUniqueInput
  }

  /**
   * CouponsUsedByUser findUnique
   */
  export interface CouponsUsedByUserFindUniqueArgs extends CouponsUsedByUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CouponsUsedByUser findUniqueOrThrow
   */
  export type CouponsUsedByUserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CouponsUsedByUser
     * 
    **/
    select?: CouponsUsedByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponsUsedByUserInclude | null
    /**
     * Filter, which CouponsUsedByUser to fetch.
     * 
    **/
    where: CouponsUsedByUserWhereUniqueInput
  }


  /**
   * CouponsUsedByUser base type for findFirst actions
   */
  export type CouponsUsedByUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CouponsUsedByUser
     * 
    **/
    select?: CouponsUsedByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponsUsedByUserInclude | null
    /**
     * Filter, which CouponsUsedByUser to fetch.
     * 
    **/
    where?: CouponsUsedByUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponsUsedByUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<CouponsUsedByUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CouponsUsedByUsers.
     * 
    **/
    cursor?: CouponsUsedByUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponsUsedByUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponsUsedByUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CouponsUsedByUsers.
     * 
    **/
    distinct?: Enumerable<CouponsUsedByUserScalarFieldEnum>
  }

  /**
   * CouponsUsedByUser findFirst
   */
  export interface CouponsUsedByUserFindFirstArgs extends CouponsUsedByUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CouponsUsedByUser findFirstOrThrow
   */
  export type CouponsUsedByUserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CouponsUsedByUser
     * 
    **/
    select?: CouponsUsedByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponsUsedByUserInclude | null
    /**
     * Filter, which CouponsUsedByUser to fetch.
     * 
    **/
    where?: CouponsUsedByUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponsUsedByUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<CouponsUsedByUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CouponsUsedByUsers.
     * 
    **/
    cursor?: CouponsUsedByUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponsUsedByUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponsUsedByUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CouponsUsedByUsers.
     * 
    **/
    distinct?: Enumerable<CouponsUsedByUserScalarFieldEnum>
  }


  /**
   * CouponsUsedByUser findMany
   */
  export type CouponsUsedByUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the CouponsUsedByUser
     * 
    **/
    select?: CouponsUsedByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponsUsedByUserInclude | null
    /**
     * Filter, which CouponsUsedByUsers to fetch.
     * 
    **/
    where?: CouponsUsedByUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponsUsedByUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<CouponsUsedByUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CouponsUsedByUsers.
     * 
    **/
    cursor?: CouponsUsedByUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponsUsedByUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponsUsedByUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CouponsUsedByUserScalarFieldEnum>
  }


  /**
   * CouponsUsedByUser create
   */
  export type CouponsUsedByUserCreateArgs = {
    /**
     * Select specific fields to fetch from the CouponsUsedByUser
     * 
    **/
    select?: CouponsUsedByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponsUsedByUserInclude | null
    /**
     * The data needed to create a CouponsUsedByUser.
     * 
    **/
    data: XOR<CouponsUsedByUserCreateInput, CouponsUsedByUserUncheckedCreateInput>
  }


  /**
   * CouponsUsedByUser update
   */
  export type CouponsUsedByUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the CouponsUsedByUser
     * 
    **/
    select?: CouponsUsedByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponsUsedByUserInclude | null
    /**
     * The data needed to update a CouponsUsedByUser.
     * 
    **/
    data: XOR<CouponsUsedByUserUpdateInput, CouponsUsedByUserUncheckedUpdateInput>
    /**
     * Choose, which CouponsUsedByUser to update.
     * 
    **/
    where: CouponsUsedByUserWhereUniqueInput
  }


  /**
   * CouponsUsedByUser updateMany
   */
  export type CouponsUsedByUserUpdateManyArgs = {
    /**
     * The data used to update CouponsUsedByUsers.
     * 
    **/
    data: XOR<CouponsUsedByUserUpdateManyMutationInput, CouponsUsedByUserUncheckedUpdateManyInput>
    /**
     * Filter which CouponsUsedByUsers to update
     * 
    **/
    where?: CouponsUsedByUserWhereInput
  }


  /**
   * CouponsUsedByUser upsert
   */
  export type CouponsUsedByUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the CouponsUsedByUser
     * 
    **/
    select?: CouponsUsedByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponsUsedByUserInclude | null
    /**
     * The filter to search for the CouponsUsedByUser to update in case it exists.
     * 
    **/
    where: CouponsUsedByUserWhereUniqueInput
    /**
     * In case the CouponsUsedByUser found by the `where` argument doesn't exist, create a new CouponsUsedByUser with this data.
     * 
    **/
    create: XOR<CouponsUsedByUserCreateInput, CouponsUsedByUserUncheckedCreateInput>
    /**
     * In case the CouponsUsedByUser was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CouponsUsedByUserUpdateInput, CouponsUsedByUserUncheckedUpdateInput>
  }


  /**
   * CouponsUsedByUser delete
   */
  export type CouponsUsedByUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the CouponsUsedByUser
     * 
    **/
    select?: CouponsUsedByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponsUsedByUserInclude | null
    /**
     * Filter which CouponsUsedByUser to delete.
     * 
    **/
    where: CouponsUsedByUserWhereUniqueInput
  }


  /**
   * CouponsUsedByUser deleteMany
   */
  export type CouponsUsedByUserDeleteManyArgs = {
    /**
     * Filter which CouponsUsedByUsers to delete
     * 
    **/
    where?: CouponsUsedByUserWhereInput
  }


  /**
   * CouponsUsedByUser without action
   */
  export type CouponsUsedByUserArgs = {
    /**
     * Select specific fields to fetch from the CouponsUsedByUser
     * 
    **/
    select?: CouponsUsedByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponsUsedByUserInclude | null
  }



  /**
   * Model Coupon
   */


  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponAvgAggregateOutputType = {
    id: number | null
    listingId: number | null
  }

  export type CouponSumAggregateOutputType = {
    id: number | null
    listingId: number | null
  }

  export type CouponMinAggregateOutputType = {
    id: number | null
    name: string | null
    listingId: number | null
    deal: string | null
    expires: Date | null
  }

  export type CouponMaxAggregateOutputType = {
    id: number | null
    name: string | null
    listingId: number | null
    deal: string | null
    expires: Date | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    name: number
    listingId: number
    deal: number
    expires: number
    _all: number
  }


  export type CouponAvgAggregateInputType = {
    id?: true
    listingId?: true
  }

  export type CouponSumAggregateInputType = {
    id?: true
    listingId?: true
  }

  export type CouponMinAggregateInputType = {
    id?: true
    name?: true
    listingId?: true
    deal?: true
    expires?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    name?: true
    listingId?: true
    deal?: true
    expires?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    name?: true
    listingId?: true
    deal?: true
    expires?: true
    _all?: true
  }

  export type CouponAggregateArgs = {
    /**
     * Filter which Coupon to aggregate.
     * 
    **/
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     * 
    **/
    orderBy?: Enumerable<CouponOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs = {
    where?: CouponWhereInput
    orderBy?: Enumerable<CouponOrderByWithAggregationInput>
    by: Array<CouponScalarFieldEnum>
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _avg?: CouponAvgAggregateInputType
    _sum?: CouponSumAggregateInputType
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }


  export type CouponGroupByOutputType = {
    id: number
    name: string
    listingId: number | null
    deal: string
    expires: Date
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect = {
    id?: boolean
    name?: boolean
    listing?: boolean | ListingArgs
    listingId?: boolean
    deal?: boolean
    expires?: boolean
    couponsUsedByUser?: boolean | CouponCouponsUsedByUserArgs
    _count?: boolean | CouponCountOutputTypeArgs
  }


  export type CouponInclude = {
    listing?: boolean | ListingArgs
    couponsUsedByUser?: boolean | CouponCouponsUsedByUserArgs
    _count?: boolean | CouponCountOutputTypeArgs
  } 

  export type CouponGetPayload<S extends boolean | null | undefined | CouponArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Coupon :
    S extends undefined ? never :
    S extends { include: any } & (CouponArgs | CouponFindManyArgs)
    ? Coupon  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'listing' ? ListingGetPayload<S['include'][P]> | null :
        P extends 'couponsUsedByUser' ? Array < CouponsUsedByUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? CouponCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CouponArgs | CouponFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'listing' ? ListingGetPayload<S['select'][P]> | null :
        P extends 'couponsUsedByUser' ? Array < CouponsUsedByUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? CouponCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Coupon ? Coupon[P] : never
  } 
      : Coupon


  type CouponCountArgs = Merge<
    Omit<CouponFindManyArgs, 'select' | 'include'> & {
      select?: CouponCountAggregateInputType | true
    }
  >

  export interface CouponDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CouponFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CouponFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Coupon'> extends True ? Prisma__CouponClient<CouponGetPayload<T>> : Prisma__CouponClient<CouponGetPayload<T> | null, null>

    /**
     * Find one Coupon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CouponFindUniqueOrThrowArgs>
    ): Prisma__CouponClient<CouponGetPayload<T>>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CouponFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CouponFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Coupon'> extends True ? Prisma__CouponClient<CouponGetPayload<T>> : Prisma__CouponClient<CouponGetPayload<T> | null, null>

    /**
     * Find the first Coupon that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CouponFindFirstOrThrowArgs>
    ): Prisma__CouponClient<CouponGetPayload<T>>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CouponFindManyArgs>(
      args?: SelectSubset<T, CouponFindManyArgs>
    ): PrismaPromise<Array<CouponGetPayload<T>>>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
    **/
    create<T extends CouponCreateArgs>(
      args: SelectSubset<T, CouponCreateArgs>
    ): Prisma__CouponClient<CouponGetPayload<T>>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
    **/
    delete<T extends CouponDeleteArgs>(
      args: SelectSubset<T, CouponDeleteArgs>
    ): Prisma__CouponClient<CouponGetPayload<T>>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CouponUpdateArgs>(
      args: SelectSubset<T, CouponUpdateArgs>
    ): Prisma__CouponClient<CouponGetPayload<T>>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CouponDeleteManyArgs>(
      args?: SelectSubset<T, CouponDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CouponUpdateManyArgs>(
      args: SelectSubset<T, CouponUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
    **/
    upsert<T extends CouponUpsertArgs>(
      args: SelectSubset<T, CouponUpsertArgs>
    ): Prisma__CouponClient<CouponGetPayload<T>>

    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CouponClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    listing<T extends ListingArgs= {}>(args?: Subset<T, ListingArgs>): Prisma__ListingClient<ListingGetPayload<T> | Null>;

    couponsUsedByUser<T extends CouponCouponsUsedByUserArgs= {}>(args?: Subset<T, CouponCouponsUsedByUserArgs>): PrismaPromise<Array<CouponsUsedByUserGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Coupon base type for findUnique actions
   */
  export type CouponFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * Filter, which Coupon to fetch.
     * 
    **/
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findUnique
   */
  export interface CouponFindUniqueArgs extends CouponFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * Filter, which Coupon to fetch.
     * 
    **/
    where: CouponWhereUniqueInput
  }


  /**
   * Coupon base type for findFirst actions
   */
  export type CouponFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * Filter, which Coupon to fetch.
     * 
    **/
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     * 
    **/
    orderBy?: Enumerable<CouponOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     * 
    **/
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     * 
    **/
    distinct?: Enumerable<CouponScalarFieldEnum>
  }

  /**
   * Coupon findFirst
   */
  export interface CouponFindFirstArgs extends CouponFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * Filter, which Coupon to fetch.
     * 
    **/
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     * 
    **/
    orderBy?: Enumerable<CouponOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     * 
    **/
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     * 
    **/
    distinct?: Enumerable<CouponScalarFieldEnum>
  }


  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * Filter, which Coupons to fetch.
     * 
    **/
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     * 
    **/
    orderBy?: Enumerable<CouponOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     * 
    **/
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CouponScalarFieldEnum>
  }


  /**
   * Coupon create
   */
  export type CouponCreateArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * The data needed to create a Coupon.
     * 
    **/
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }


  /**
   * Coupon update
   */
  export type CouponUpdateArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * The data needed to update a Coupon.
     * 
    **/
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     * 
    **/
    where: CouponWhereUniqueInput
  }


  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs = {
    /**
     * The data used to update Coupons.
     * 
    **/
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     * 
    **/
    where?: CouponWhereInput
  }


  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     * 
    **/
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     * 
    **/
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }


  /**
   * Coupon delete
   */
  export type CouponDeleteArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * Filter which Coupon to delete.
     * 
    **/
    where: CouponWhereUniqueInput
  }


  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs = {
    /**
     * Filter which Coupons to delete
     * 
    **/
    where?: CouponWhereInput
  }


  /**
   * Coupon.couponsUsedByUser
   */
  export type CouponCouponsUsedByUserArgs = {
    /**
     * Select specific fields to fetch from the CouponsUsedByUser
     * 
    **/
    select?: CouponsUsedByUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponsUsedByUserInclude | null
    where?: CouponsUsedByUserWhereInput
    orderBy?: Enumerable<CouponsUsedByUserOrderByWithRelationInput>
    cursor?: CouponsUsedByUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CouponsUsedByUserScalarFieldEnum>
  }


  /**
   * Coupon without action
   */
  export type CouponArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
  }



  /**
   * Model Listing
   */


  export type AggregateListing = {
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  export type ListingAvgAggregateOutputType = {
    id: number | null
  }

  export type ListingSumAggregateOutputType = {
    id: number | null
  }

  export type ListingMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    category: string | null
    description: string | null
    email: string | null
    phone: string | null
    website: string | null
  }

  export type ListingMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    category: string | null
    description: string | null
    email: string | null
    phone: string | null
    website: string | null
  }

  export type ListingCountAggregateOutputType = {
    id: number
    name: number
    address: number
    category: number
    description: number
    email: number
    phone: number
    website: number
    _all: number
  }


  export type ListingAvgAggregateInputType = {
    id?: true
  }

  export type ListingSumAggregateInputType = {
    id?: true
  }

  export type ListingMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    category?: true
    description?: true
    email?: true
    phone?: true
    website?: true
  }

  export type ListingMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    category?: true
    description?: true
    email?: true
    phone?: true
    website?: true
  }

  export type ListingCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    category?: true
    description?: true
    email?: true
    phone?: true
    website?: true
    _all?: true
  }

  export type ListingAggregateArgs = {
    /**
     * Filter which Listing to aggregate.
     * 
    **/
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     * 
    **/
    orderBy?: Enumerable<ListingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listings
    **/
    _count?: true | ListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingMaxAggregateInputType
  }

  export type GetListingAggregateType<T extends ListingAggregateArgs> = {
        [P in keyof T & keyof AggregateListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing[P]>
      : GetScalarType<T[P], AggregateListing[P]>
  }




  export type ListingGroupByArgs = {
    where?: ListingWhereInput
    orderBy?: Enumerable<ListingOrderByWithAggregationInput>
    by: Array<ListingScalarFieldEnum>
    having?: ListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingCountAggregateInputType | true
    _avg?: ListingAvgAggregateInputType
    _sum?: ListingSumAggregateInputType
    _min?: ListingMinAggregateInputType
    _max?: ListingMaxAggregateInputType
  }


  export type ListingGroupByOutputType = {
    id: number
    name: string
    address: string
    category: string
    description: string
    email: string
    phone: string
    website: string
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  type GetListingGroupByPayload<T extends ListingGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingGroupByOutputType[P]>
            : GetScalarType<T[P], ListingGroupByOutputType[P]>
        }
      >
    >


  export type ListingSelect = {
    id?: boolean
    name?: boolean
    address?: boolean
    category?: boolean
    description?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    coupons?: boolean | ListingCouponsArgs
    _count?: boolean | ListingCountOutputTypeArgs
  }


  export type ListingInclude = {
    coupons?: boolean | ListingCouponsArgs
    _count?: boolean | ListingCountOutputTypeArgs
  } 

  export type ListingGetPayload<S extends boolean | null | undefined | ListingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Listing :
    S extends undefined ? never :
    S extends { include: any } & (ListingArgs | ListingFindManyArgs)
    ? Listing  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coupons' ? Array < CouponGetPayload<S['include'][P]>>  :
        P extends '_count' ? ListingCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ListingArgs | ListingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coupons' ? Array < CouponGetPayload<S['select'][P]>>  :
        P extends '_count' ? ListingCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Listing ? Listing[P] : never
  } 
      : Listing


  type ListingCountArgs = Merge<
    Omit<ListingFindManyArgs, 'select' | 'include'> & {
      select?: ListingCountAggregateInputType | true
    }
  >

  export interface ListingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Listing that matches the filter.
     * @param {ListingFindUniqueArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ListingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ListingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Listing'> extends True ? Prisma__ListingClient<ListingGetPayload<T>> : Prisma__ListingClient<ListingGetPayload<T> | null, null>

    /**
     * Find one Listing that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ListingFindUniqueOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ListingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ListingFindUniqueOrThrowArgs>
    ): Prisma__ListingClient<ListingGetPayload<T>>

    /**
     * Find the first Listing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ListingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ListingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Listing'> extends True ? Prisma__ListingClient<ListingGetPayload<T>> : Prisma__ListingClient<ListingGetPayload<T> | null, null>

    /**
     * Find the first Listing that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ListingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ListingFindFirstOrThrowArgs>
    ): Prisma__ListingClient<ListingGetPayload<T>>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listing.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingWithIdOnly = await prisma.listing.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ListingFindManyArgs>(
      args?: SelectSubset<T, ListingFindManyArgs>
    ): PrismaPromise<Array<ListingGetPayload<T>>>

    /**
     * Create a Listing.
     * @param {ListingCreateArgs} args - Arguments to create a Listing.
     * @example
     * // Create one Listing
     * const Listing = await prisma.listing.create({
     *   data: {
     *     // ... data to create a Listing
     *   }
     * })
     * 
    **/
    create<T extends ListingCreateArgs>(
      args: SelectSubset<T, ListingCreateArgs>
    ): Prisma__ListingClient<ListingGetPayload<T>>

    /**
     * Delete a Listing.
     * @param {ListingDeleteArgs} args - Arguments to delete one Listing.
     * @example
     * // Delete one Listing
     * const Listing = await prisma.listing.delete({
     *   where: {
     *     // ... filter to delete one Listing
     *   }
     * })
     * 
    **/
    delete<T extends ListingDeleteArgs>(
      args: SelectSubset<T, ListingDeleteArgs>
    ): Prisma__ListingClient<ListingGetPayload<T>>

    /**
     * Update one Listing.
     * @param {ListingUpdateArgs} args - Arguments to update one Listing.
     * @example
     * // Update one Listing
     * const listing = await prisma.listing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ListingUpdateArgs>(
      args: SelectSubset<T, ListingUpdateArgs>
    ): Prisma__ListingClient<ListingGetPayload<T>>

    /**
     * Delete zero or more Listings.
     * @param {ListingDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ListingDeleteManyArgs>(
      args?: SelectSubset<T, ListingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ListingUpdateManyArgs>(
      args: SelectSubset<T, ListingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Listing.
     * @param {ListingUpsertArgs} args - Arguments to update or create a Listing.
     * @example
     * // Update or create a Listing
     * const listing = await prisma.listing.upsert({
     *   create: {
     *     // ... data to create a Listing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing we want to update
     *   }
     * })
    **/
    upsert<T extends ListingUpsertArgs>(
      args: SelectSubset<T, ListingUpsertArgs>
    ): Prisma__ListingClient<ListingGetPayload<T>>

    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listing.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends ListingCountArgs>(
      args?: Subset<T, ListingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListingAggregateArgs>(args: Subset<T, ListingAggregateArgs>): PrismaPromise<GetListingAggregateType<T>>

    /**
     * Group by Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingGroupByArgs['orderBy'] }
        : { orderBy?: ListingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Listing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ListingClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    coupons<T extends ListingCouponsArgs= {}>(args?: Subset<T, ListingCouponsArgs>): PrismaPromise<Array<CouponGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Listing base type for findUnique actions
   */
  export type ListingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Listing
     * 
    **/
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListingInclude | null
    /**
     * Filter, which Listing to fetch.
     * 
    **/
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findUnique
   */
  export interface ListingFindUniqueArgs extends ListingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Listing findUniqueOrThrow
   */
  export type ListingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Listing
     * 
    **/
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListingInclude | null
    /**
     * Filter, which Listing to fetch.
     * 
    **/
    where: ListingWhereUniqueInput
  }


  /**
   * Listing base type for findFirst actions
   */
  export type ListingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Listing
     * 
    **/
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListingInclude | null
    /**
     * Filter, which Listing to fetch.
     * 
    **/
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     * 
    **/
    orderBy?: Enumerable<ListingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     * 
    **/
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     * 
    **/
    distinct?: Enumerable<ListingScalarFieldEnum>
  }

  /**
   * Listing findFirst
   */
  export interface ListingFindFirstArgs extends ListingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Listing findFirstOrThrow
   */
  export type ListingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Listing
     * 
    **/
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListingInclude | null
    /**
     * Filter, which Listing to fetch.
     * 
    **/
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     * 
    **/
    orderBy?: Enumerable<ListingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     * 
    **/
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     * 
    **/
    distinct?: Enumerable<ListingScalarFieldEnum>
  }


  /**
   * Listing findMany
   */
  export type ListingFindManyArgs = {
    /**
     * Select specific fields to fetch from the Listing
     * 
    **/
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListingInclude | null
    /**
     * Filter, which Listings to fetch.
     * 
    **/
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     * 
    **/
    orderBy?: Enumerable<ListingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listings.
     * 
    **/
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ListingScalarFieldEnum>
  }


  /**
   * Listing create
   */
  export type ListingCreateArgs = {
    /**
     * Select specific fields to fetch from the Listing
     * 
    **/
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListingInclude | null
    /**
     * The data needed to create a Listing.
     * 
    **/
    data: XOR<ListingCreateInput, ListingUncheckedCreateInput>
  }


  /**
   * Listing update
   */
  export type ListingUpdateArgs = {
    /**
     * Select specific fields to fetch from the Listing
     * 
    **/
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListingInclude | null
    /**
     * The data needed to update a Listing.
     * 
    **/
    data: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
    /**
     * Choose, which Listing to update.
     * 
    **/
    where: ListingWhereUniqueInput
  }


  /**
   * Listing updateMany
   */
  export type ListingUpdateManyArgs = {
    /**
     * The data used to update Listings.
     * 
    **/
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     * 
    **/
    where?: ListingWhereInput
  }


  /**
   * Listing upsert
   */
  export type ListingUpsertArgs = {
    /**
     * Select specific fields to fetch from the Listing
     * 
    **/
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListingInclude | null
    /**
     * The filter to search for the Listing to update in case it exists.
     * 
    **/
    where: ListingWhereUniqueInput
    /**
     * In case the Listing found by the `where` argument doesn't exist, create a new Listing with this data.
     * 
    **/
    create: XOR<ListingCreateInput, ListingUncheckedCreateInput>
    /**
     * In case the Listing was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
  }


  /**
   * Listing delete
   */
  export type ListingDeleteArgs = {
    /**
     * Select specific fields to fetch from the Listing
     * 
    **/
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListingInclude | null
    /**
     * Filter which Listing to delete.
     * 
    **/
    where: ListingWhereUniqueInput
  }


  /**
   * Listing deleteMany
   */
  export type ListingDeleteManyArgs = {
    /**
     * Filter which Listings to delete
     * 
    **/
    where?: ListingWhereInput
  }


  /**
   * Listing.coupons
   */
  export type ListingCouponsArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    where?: CouponWhereInput
    orderBy?: Enumerable<CouponOrderByWithRelationInput>
    cursor?: CouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CouponScalarFieldEnum>
  }


  /**
   * Listing without action
   */
  export type ListingArgs = {
    /**
     * Select specific fields to fetch from the Listing
     * 
    **/
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ListingInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CouponScalarFieldEnum: {
    id: 'id',
    name: 'name',
    listingId: 'listingId',
    deal: 'deal',
    expires: 'expires'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const CouponsUsedByUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    couponsName: 'couponsName'
  };

  export type CouponsUsedByUserScalarFieldEnum = (typeof CouponsUsedByUserScalarFieldEnum)[keyof typeof CouponsUsedByUserScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    category: 'category',
    description: 'description',
    email: 'email',
    phone: 'phone',
    website: 'website'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    role?: StringFilter | string
    couponsUsedByUser?: CouponsUsedByUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    couponsUsedByUser?: CouponsUsedByUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    firstName?: StringNullableWithAggregatesFilter | string | null
    lastName?: StringNullableWithAggregatesFilter | string | null
    role?: StringWithAggregatesFilter | string
  }

  export type CouponsUsedByUserWhereInput = {
    AND?: Enumerable<CouponsUsedByUserWhereInput>
    OR?: Enumerable<CouponsUsedByUserWhereInput>
    NOT?: Enumerable<CouponsUsedByUserWhereInput>
    id?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    userId?: IntNullableFilter | number | null
    Coupons?: XOR<CouponRelationFilter, CouponWhereInput> | null
    couponsName?: StringNullableFilter | string | null
  }

  export type CouponsUsedByUserOrderByWithRelationInput = {
    id?: SortOrder
    User?: UserOrderByWithRelationInput
    userId?: SortOrder
    Coupons?: CouponOrderByWithRelationInput
    couponsName?: SortOrder
  }

  export type CouponsUsedByUserWhereUniqueInput = {
    id?: number
  }

  export type CouponsUsedByUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    couponsName?: SortOrder
    _count?: CouponsUsedByUserCountOrderByAggregateInput
    _avg?: CouponsUsedByUserAvgOrderByAggregateInput
    _max?: CouponsUsedByUserMaxOrderByAggregateInput
    _min?: CouponsUsedByUserMinOrderByAggregateInput
    _sum?: CouponsUsedByUserSumOrderByAggregateInput
  }

  export type CouponsUsedByUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CouponsUsedByUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<CouponsUsedByUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CouponsUsedByUserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntNullableWithAggregatesFilter | number | null
    couponsName?: StringNullableWithAggregatesFilter | string | null
  }

  export type CouponWhereInput = {
    AND?: Enumerable<CouponWhereInput>
    OR?: Enumerable<CouponWhereInput>
    NOT?: Enumerable<CouponWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    listing?: XOR<ListingRelationFilter, ListingWhereInput> | null
    listingId?: IntNullableFilter | number | null
    deal?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    couponsUsedByUser?: CouponsUsedByUserListRelationFilter
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    listing?: ListingOrderByWithRelationInput
    listingId?: SortOrder
    deal?: SortOrder
    expires?: SortOrder
    couponsUsedByUser?: CouponsUsedByUserOrderByRelationAggregateInput
  }

  export type CouponWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    listingId?: SortOrder
    deal?: SortOrder
    expires?: SortOrder
    _count?: CouponCountOrderByAggregateInput
    _avg?: CouponAvgOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
    _sum?: CouponSumOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CouponScalarWhereWithAggregatesInput>
    OR?: Enumerable<CouponScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CouponScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    listingId?: IntNullableWithAggregatesFilter | number | null
    deal?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ListingWhereInput = {
    AND?: Enumerable<ListingWhereInput>
    OR?: Enumerable<ListingWhereInput>
    NOT?: Enumerable<ListingWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    address?: StringFilter | string
    category?: StringFilter | string
    description?: StringFilter | string
    email?: StringFilter | string
    phone?: StringFilter | string
    website?: StringFilter | string
    coupons?: CouponListRelationFilter
  }

  export type ListingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    category?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    coupons?: CouponOrderByRelationAggregateInput
  }

  export type ListingWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type ListingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    category?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    _count?: ListingCountOrderByAggregateInput
    _avg?: ListingAvgOrderByAggregateInput
    _max?: ListingMaxOrderByAggregateInput
    _min?: ListingMinOrderByAggregateInput
    _sum?: ListingSumOrderByAggregateInput
  }

  export type ListingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ListingScalarWhereWithAggregatesInput>
    OR?: Enumerable<ListingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ListingScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    category?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    website?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    couponsUsedByUser?: CouponsUsedByUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
    couponsUsedByUser?: CouponsUsedByUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    couponsUsedByUser?: CouponsUsedByUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    couponsUsedByUser?: CouponsUsedByUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type CouponsUsedByUserCreateInput = {
    User?: UserCreateNestedOneWithoutCouponsUsedByUserInput
    Coupons?: CouponCreateNestedOneWithoutCouponsUsedByUserInput
  }

  export type CouponsUsedByUserUncheckedCreateInput = {
    id?: number
    userId?: number | null
    couponsName?: string | null
  }

  export type CouponsUsedByUserUpdateInput = {
    User?: UserUpdateOneWithoutCouponsUsedByUserNestedInput
    Coupons?: CouponUpdateOneWithoutCouponsUsedByUserNestedInput
  }

  export type CouponsUsedByUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    couponsName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CouponsUsedByUserUpdateManyMutationInput = {

  }

  export type CouponsUsedByUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    couponsName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CouponCreateInput = {
    name: string
    listing?: ListingCreateNestedOneWithoutCouponsInput
    deal: string
    expires: Date | string
    couponsUsedByUser?: CouponsUsedByUserCreateNestedManyWithoutCouponsInput
  }

  export type CouponUncheckedCreateInput = {
    id?: number
    name: string
    listingId?: number | null
    deal: string
    expires: Date | string
    couponsUsedByUser?: CouponsUsedByUserUncheckedCreateNestedManyWithoutCouponsInput
  }

  export type CouponUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    listing?: ListingUpdateOneWithoutCouponsNestedInput
    deal?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    couponsUsedByUser?: CouponsUsedByUserUpdateManyWithoutCouponsNestedInput
  }

  export type CouponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
    deal?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    couponsUsedByUser?: CouponsUsedByUserUncheckedUpdateManyWithoutCouponsNestedInput
  }

  export type CouponUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    deal?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
    deal?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateInput = {
    name: string
    address: string
    category: string
    description: string
    email: string
    phone: string
    website: string
    coupons?: CouponCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    category: string
    description: string
    email: string
    phone: string
    website: string
    coupons?: CouponUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    coupons?: CouponUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    coupons?: CouponUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
  }

  export type ListingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type CouponsUsedByUserListRelationFilter = {
    every?: CouponsUsedByUserWhereInput
    some?: CouponsUsedByUserWhereInput
    none?: CouponsUsedByUserWhereInput
  }

  export type CouponsUsedByUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type CouponRelationFilter = {
    is?: CouponWhereInput | null
    isNot?: CouponWhereInput | null
  }

  export type CouponsUsedByUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    couponsName?: SortOrder
  }

  export type CouponsUsedByUserAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CouponsUsedByUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    couponsName?: SortOrder
  }

  export type CouponsUsedByUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    couponsName?: SortOrder
  }

  export type CouponsUsedByUserSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type ListingRelationFilter = {
    is?: ListingWhereInput | null
    isNot?: ListingWhereInput | null
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    listingId?: SortOrder
    deal?: SortOrder
    expires?: SortOrder
  }

  export type CouponAvgOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    listingId?: SortOrder
    deal?: SortOrder
    expires?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    listingId?: SortOrder
    deal?: SortOrder
    expires?: SortOrder
  }

  export type CouponSumOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
  }

  export type CouponListRelationFilter = {
    every?: CouponWhereInput
    some?: CouponWhereInput
    none?: CouponWhereInput
  }

  export type CouponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    category?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
  }

  export type ListingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ListingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    category?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
  }

  export type ListingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    category?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
  }

  export type ListingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CouponsUsedByUserCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CouponsUsedByUserCreateWithoutUserInput>, Enumerable<CouponsUsedByUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CouponsUsedByUserCreateOrConnectWithoutUserInput>
    connect?: Enumerable<CouponsUsedByUserWhereUniqueInput>
  }

  export type CouponsUsedByUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CouponsUsedByUserCreateWithoutUserInput>, Enumerable<CouponsUsedByUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CouponsUsedByUserCreateOrConnectWithoutUserInput>
    connect?: Enumerable<CouponsUsedByUserWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CouponsUsedByUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CouponsUsedByUserCreateWithoutUserInput>, Enumerable<CouponsUsedByUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CouponsUsedByUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CouponsUsedByUserUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    disconnect?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    delete?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    connect?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    update?: Enumerable<CouponsUsedByUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CouponsUsedByUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CouponsUsedByUserScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CouponsUsedByUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CouponsUsedByUserCreateWithoutUserInput>, Enumerable<CouponsUsedByUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CouponsUsedByUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CouponsUsedByUserUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    disconnect?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    delete?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    connect?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    update?: Enumerable<CouponsUsedByUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CouponsUsedByUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CouponsUsedByUserScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutCouponsUsedByUserInput = {
    create?: XOR<UserCreateWithoutCouponsUsedByUserInput, UserUncheckedCreateWithoutCouponsUsedByUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponsUsedByUserInput
    connect?: UserWhereUniqueInput
  }

  export type CouponCreateNestedOneWithoutCouponsUsedByUserInput = {
    create?: XOR<CouponCreateWithoutCouponsUsedByUserInput, CouponUncheckedCreateWithoutCouponsUsedByUserInput>
    connectOrCreate?: CouponCreateOrConnectWithoutCouponsUsedByUserInput
    connect?: CouponWhereUniqueInput
  }

  export type UserUpdateOneWithoutCouponsUsedByUserNestedInput = {
    create?: XOR<UserCreateWithoutCouponsUsedByUserInput, UserUncheckedCreateWithoutCouponsUsedByUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponsUsedByUserInput
    upsert?: UserUpsertWithoutCouponsUsedByUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCouponsUsedByUserInput, UserUncheckedUpdateWithoutCouponsUsedByUserInput>
  }

  export type CouponUpdateOneWithoutCouponsUsedByUserNestedInput = {
    create?: XOR<CouponCreateWithoutCouponsUsedByUserInput, CouponUncheckedCreateWithoutCouponsUsedByUserInput>
    connectOrCreate?: CouponCreateOrConnectWithoutCouponsUsedByUserInput
    upsert?: CouponUpsertWithoutCouponsUsedByUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: CouponWhereUniqueInput
    update?: XOR<CouponUpdateWithoutCouponsUsedByUserInput, CouponUncheckedUpdateWithoutCouponsUsedByUserInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ListingCreateNestedOneWithoutCouponsInput = {
    create?: XOR<ListingCreateWithoutCouponsInput, ListingUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutCouponsInput
    connect?: ListingWhereUniqueInput
  }

  export type CouponsUsedByUserCreateNestedManyWithoutCouponsInput = {
    create?: XOR<Enumerable<CouponsUsedByUserCreateWithoutCouponsInput>, Enumerable<CouponsUsedByUserUncheckedCreateWithoutCouponsInput>>
    connectOrCreate?: Enumerable<CouponsUsedByUserCreateOrConnectWithoutCouponsInput>
    connect?: Enumerable<CouponsUsedByUserWhereUniqueInput>
  }

  export type CouponsUsedByUserUncheckedCreateNestedManyWithoutCouponsInput = {
    create?: XOR<Enumerable<CouponsUsedByUserCreateWithoutCouponsInput>, Enumerable<CouponsUsedByUserUncheckedCreateWithoutCouponsInput>>
    connectOrCreate?: Enumerable<CouponsUsedByUserCreateOrConnectWithoutCouponsInput>
    connect?: Enumerable<CouponsUsedByUserWhereUniqueInput>
  }

  export type ListingUpdateOneWithoutCouponsNestedInput = {
    create?: XOR<ListingCreateWithoutCouponsInput, ListingUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutCouponsInput
    upsert?: ListingUpsertWithoutCouponsInput
    disconnect?: boolean
    delete?: boolean
    connect?: ListingWhereUniqueInput
    update?: XOR<ListingUpdateWithoutCouponsInput, ListingUncheckedUpdateWithoutCouponsInput>
  }

  export type CouponsUsedByUserUpdateManyWithoutCouponsNestedInput = {
    create?: XOR<Enumerable<CouponsUsedByUserCreateWithoutCouponsInput>, Enumerable<CouponsUsedByUserUncheckedCreateWithoutCouponsInput>>
    connectOrCreate?: Enumerable<CouponsUsedByUserCreateOrConnectWithoutCouponsInput>
    upsert?: Enumerable<CouponsUsedByUserUpsertWithWhereUniqueWithoutCouponsInput>
    set?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    disconnect?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    delete?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    connect?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    update?: Enumerable<CouponsUsedByUserUpdateWithWhereUniqueWithoutCouponsInput>
    updateMany?: Enumerable<CouponsUsedByUserUpdateManyWithWhereWithoutCouponsInput>
    deleteMany?: Enumerable<CouponsUsedByUserScalarWhereInput>
  }

  export type CouponsUsedByUserUncheckedUpdateManyWithoutCouponsNestedInput = {
    create?: XOR<Enumerable<CouponsUsedByUserCreateWithoutCouponsInput>, Enumerable<CouponsUsedByUserUncheckedCreateWithoutCouponsInput>>
    connectOrCreate?: Enumerable<CouponsUsedByUserCreateOrConnectWithoutCouponsInput>
    upsert?: Enumerable<CouponsUsedByUserUpsertWithWhereUniqueWithoutCouponsInput>
    set?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    disconnect?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    delete?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    connect?: Enumerable<CouponsUsedByUserWhereUniqueInput>
    update?: Enumerable<CouponsUsedByUserUpdateWithWhereUniqueWithoutCouponsInput>
    updateMany?: Enumerable<CouponsUsedByUserUpdateManyWithWhereWithoutCouponsInput>
    deleteMany?: Enumerable<CouponsUsedByUserScalarWhereInput>
  }

  export type CouponCreateNestedManyWithoutListingInput = {
    create?: XOR<Enumerable<CouponCreateWithoutListingInput>, Enumerable<CouponUncheckedCreateWithoutListingInput>>
    connectOrCreate?: Enumerable<CouponCreateOrConnectWithoutListingInput>
    connect?: Enumerable<CouponWhereUniqueInput>
  }

  export type CouponUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<Enumerable<CouponCreateWithoutListingInput>, Enumerable<CouponUncheckedCreateWithoutListingInput>>
    connectOrCreate?: Enumerable<CouponCreateOrConnectWithoutListingInput>
    connect?: Enumerable<CouponWhereUniqueInput>
  }

  export type CouponUpdateManyWithoutListingNestedInput = {
    create?: XOR<Enumerable<CouponCreateWithoutListingInput>, Enumerable<CouponUncheckedCreateWithoutListingInput>>
    connectOrCreate?: Enumerable<CouponCreateOrConnectWithoutListingInput>
    upsert?: Enumerable<CouponUpsertWithWhereUniqueWithoutListingInput>
    set?: Enumerable<CouponWhereUniqueInput>
    disconnect?: Enumerable<CouponWhereUniqueInput>
    delete?: Enumerable<CouponWhereUniqueInput>
    connect?: Enumerable<CouponWhereUniqueInput>
    update?: Enumerable<CouponUpdateWithWhereUniqueWithoutListingInput>
    updateMany?: Enumerable<CouponUpdateManyWithWhereWithoutListingInput>
    deleteMany?: Enumerable<CouponScalarWhereInput>
  }

  export type CouponUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<Enumerable<CouponCreateWithoutListingInput>, Enumerable<CouponUncheckedCreateWithoutListingInput>>
    connectOrCreate?: Enumerable<CouponCreateOrConnectWithoutListingInput>
    upsert?: Enumerable<CouponUpsertWithWhereUniqueWithoutListingInput>
    set?: Enumerable<CouponWhereUniqueInput>
    disconnect?: Enumerable<CouponWhereUniqueInput>
    delete?: Enumerable<CouponWhereUniqueInput>
    connect?: Enumerable<CouponWhereUniqueInput>
    update?: Enumerable<CouponUpdateWithWhereUniqueWithoutListingInput>
    updateMany?: Enumerable<CouponUpdateManyWithWhereWithoutListingInput>
    deleteMany?: Enumerable<CouponScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type CouponsUsedByUserCreateWithoutUserInput = {
    Coupons?: CouponCreateNestedOneWithoutCouponsUsedByUserInput
  }

  export type CouponsUsedByUserUncheckedCreateWithoutUserInput = {
    id?: number
    couponsName?: string | null
  }

  export type CouponsUsedByUserCreateOrConnectWithoutUserInput = {
    where: CouponsUsedByUserWhereUniqueInput
    create: XOR<CouponsUsedByUserCreateWithoutUserInput, CouponsUsedByUserUncheckedCreateWithoutUserInput>
  }

  export type CouponsUsedByUserUpsertWithWhereUniqueWithoutUserInput = {
    where: CouponsUsedByUserWhereUniqueInput
    update: XOR<CouponsUsedByUserUpdateWithoutUserInput, CouponsUsedByUserUncheckedUpdateWithoutUserInput>
    create: XOR<CouponsUsedByUserCreateWithoutUserInput, CouponsUsedByUserUncheckedCreateWithoutUserInput>
  }

  export type CouponsUsedByUserUpdateWithWhereUniqueWithoutUserInput = {
    where: CouponsUsedByUserWhereUniqueInput
    data: XOR<CouponsUsedByUserUpdateWithoutUserInput, CouponsUsedByUserUncheckedUpdateWithoutUserInput>
  }

  export type CouponsUsedByUserUpdateManyWithWhereWithoutUserInput = {
    where: CouponsUsedByUserScalarWhereInput
    data: XOR<CouponsUsedByUserUpdateManyMutationInput, CouponsUsedByUserUncheckedUpdateManyWithoutCouponsUsedByUserInput>
  }

  export type CouponsUsedByUserScalarWhereInput = {
    AND?: Enumerable<CouponsUsedByUserScalarWhereInput>
    OR?: Enumerable<CouponsUsedByUserScalarWhereInput>
    NOT?: Enumerable<CouponsUsedByUserScalarWhereInput>
    id?: IntFilter | number
    userId?: IntNullableFilter | number | null
    couponsName?: StringNullableFilter | string | null
  }

  export type UserCreateWithoutCouponsUsedByUserInput = {
    createdAt?: Date | string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
  }

  export type UserUncheckedCreateWithoutCouponsUsedByUserInput = {
    id?: number
    createdAt?: Date | string
    email: string
    firstName?: string | null
    lastName?: string | null
    role?: string
  }

  export type UserCreateOrConnectWithoutCouponsUsedByUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCouponsUsedByUserInput, UserUncheckedCreateWithoutCouponsUsedByUserInput>
  }

  export type CouponCreateWithoutCouponsUsedByUserInput = {
    name: string
    listing?: ListingCreateNestedOneWithoutCouponsInput
    deal: string
    expires: Date | string
  }

  export type CouponUncheckedCreateWithoutCouponsUsedByUserInput = {
    id?: number
    name: string
    listingId?: number | null
    deal: string
    expires: Date | string
  }

  export type CouponCreateOrConnectWithoutCouponsUsedByUserInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutCouponsUsedByUserInput, CouponUncheckedCreateWithoutCouponsUsedByUserInput>
  }

  export type UserUpsertWithoutCouponsUsedByUserInput = {
    update: XOR<UserUpdateWithoutCouponsUsedByUserInput, UserUncheckedUpdateWithoutCouponsUsedByUserInput>
    create: XOR<UserCreateWithoutCouponsUsedByUserInput, UserUncheckedCreateWithoutCouponsUsedByUserInput>
  }

  export type UserUpdateWithoutCouponsUsedByUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutCouponsUsedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type CouponUpsertWithoutCouponsUsedByUserInput = {
    update: XOR<CouponUpdateWithoutCouponsUsedByUserInput, CouponUncheckedUpdateWithoutCouponsUsedByUserInput>
    create: XOR<CouponCreateWithoutCouponsUsedByUserInput, CouponUncheckedCreateWithoutCouponsUsedByUserInput>
  }

  export type CouponUpdateWithoutCouponsUsedByUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    listing?: ListingUpdateOneWithoutCouponsNestedInput
    deal?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateWithoutCouponsUsedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
    deal?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateWithoutCouponsInput = {
    name: string
    address: string
    category: string
    description: string
    email: string
    phone: string
    website: string
  }

  export type ListingUncheckedCreateWithoutCouponsInput = {
    id?: number
    name: string
    address: string
    category: string
    description: string
    email: string
    phone: string
    website: string
  }

  export type ListingCreateOrConnectWithoutCouponsInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutCouponsInput, ListingUncheckedCreateWithoutCouponsInput>
  }

  export type CouponsUsedByUserCreateWithoutCouponsInput = {
    User?: UserCreateNestedOneWithoutCouponsUsedByUserInput
  }

  export type CouponsUsedByUserUncheckedCreateWithoutCouponsInput = {
    id?: number
    userId?: number | null
  }

  export type CouponsUsedByUserCreateOrConnectWithoutCouponsInput = {
    where: CouponsUsedByUserWhereUniqueInput
    create: XOR<CouponsUsedByUserCreateWithoutCouponsInput, CouponsUsedByUserUncheckedCreateWithoutCouponsInput>
  }

  export type ListingUpsertWithoutCouponsInput = {
    update: XOR<ListingUpdateWithoutCouponsInput, ListingUncheckedUpdateWithoutCouponsInput>
    create: XOR<ListingCreateWithoutCouponsInput, ListingUncheckedCreateWithoutCouponsInput>
  }

  export type ListingUpdateWithoutCouponsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
  }

  export type ListingUncheckedUpdateWithoutCouponsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
  }

  export type CouponsUsedByUserUpsertWithWhereUniqueWithoutCouponsInput = {
    where: CouponsUsedByUserWhereUniqueInput
    update: XOR<CouponsUsedByUserUpdateWithoutCouponsInput, CouponsUsedByUserUncheckedUpdateWithoutCouponsInput>
    create: XOR<CouponsUsedByUserCreateWithoutCouponsInput, CouponsUsedByUserUncheckedCreateWithoutCouponsInput>
  }

  export type CouponsUsedByUserUpdateWithWhereUniqueWithoutCouponsInput = {
    where: CouponsUsedByUserWhereUniqueInput
    data: XOR<CouponsUsedByUserUpdateWithoutCouponsInput, CouponsUsedByUserUncheckedUpdateWithoutCouponsInput>
  }

  export type CouponsUsedByUserUpdateManyWithWhereWithoutCouponsInput = {
    where: CouponsUsedByUserScalarWhereInput
    data: XOR<CouponsUsedByUserUpdateManyMutationInput, CouponsUsedByUserUncheckedUpdateManyWithoutCouponsUsedByUserInput>
  }

  export type CouponCreateWithoutListingInput = {
    name: string
    deal: string
    expires: Date | string
    couponsUsedByUser?: CouponsUsedByUserCreateNestedManyWithoutCouponsInput
  }

  export type CouponUncheckedCreateWithoutListingInput = {
    id?: number
    name: string
    deal: string
    expires: Date | string
    couponsUsedByUser?: CouponsUsedByUserUncheckedCreateNestedManyWithoutCouponsInput
  }

  export type CouponCreateOrConnectWithoutListingInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutListingInput, CouponUncheckedCreateWithoutListingInput>
  }

  export type CouponUpsertWithWhereUniqueWithoutListingInput = {
    where: CouponWhereUniqueInput
    update: XOR<CouponUpdateWithoutListingInput, CouponUncheckedUpdateWithoutListingInput>
    create: XOR<CouponCreateWithoutListingInput, CouponUncheckedCreateWithoutListingInput>
  }

  export type CouponUpdateWithWhereUniqueWithoutListingInput = {
    where: CouponWhereUniqueInput
    data: XOR<CouponUpdateWithoutListingInput, CouponUncheckedUpdateWithoutListingInput>
  }

  export type CouponUpdateManyWithWhereWithoutListingInput = {
    where: CouponScalarWhereInput
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyWithoutCouponsInput>
  }

  export type CouponScalarWhereInput = {
    AND?: Enumerable<CouponScalarWhereInput>
    OR?: Enumerable<CouponScalarWhereInput>
    NOT?: Enumerable<CouponScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    listingId?: IntNullableFilter | number | null
    deal?: StringFilter | string
    expires?: DateTimeFilter | Date | string
  }

  export type CouponsUsedByUserUpdateWithoutUserInput = {
    Coupons?: CouponUpdateOneWithoutCouponsUsedByUserNestedInput
  }

  export type CouponsUsedByUserUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    couponsName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CouponsUsedByUserUncheckedUpdateManyWithoutCouponsUsedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    couponsName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CouponsUsedByUserUpdateWithoutCouponsInput = {
    User?: UserUpdateOneWithoutCouponsUsedByUserNestedInput
  }

  export type CouponsUsedByUserUncheckedUpdateWithoutCouponsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CouponUpdateWithoutListingInput = {
    name?: StringFieldUpdateOperationsInput | string
    deal?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    couponsUsedByUser?: CouponsUsedByUserUpdateManyWithoutCouponsNestedInput
  }

  export type CouponUncheckedUpdateWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deal?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    couponsUsedByUser?: CouponsUsedByUserUncheckedUpdateManyWithoutCouponsNestedInput
  }

  export type CouponUncheckedUpdateManyWithoutCouponsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deal?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}