
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export interface PrismaPromise<A> extends Promise<A> {[prisma]: true}
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
  password: string
  role: string
}

/**
 * Model PinnedUserListing
 * 
 */
export type PinnedUserListing = {
  id: number
  userId: number
  listingId: number
}

/**
 * Model CouponsForUser
 * 
 */
export type CouponsForUser = {
  id: number
  userId: number | null
  couponsName: string | null
  used: boolean
}

/**
 * Model Coupon
 * 
 */
export type Coupon = {
  id: number
  name: string
  listingId: number | null
  description: string
  expired: boolean
  email: string
}

/**
 * Model Listing
 * 
 */
export type Listing = {
  id: number
  name: string
  address: string
  city: string
  zipcode: string
  displayTitle: string
  subTitle: string | null
  category: string | null
  attributes: string | null
  description: string
  email: string
  phone: string
  website: string
  image1: string
  image2: string | null
  image3: string | null
  image4: string | null
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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

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
   * `prisma.pinnedUserListing`: Exposes CRUD operations for the **PinnedUserListing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PinnedUserListings
    * const pinnedUserListings = await prisma.pinnedUserListing.findMany()
    * ```
    */
  get pinnedUserListing(): Prisma.PinnedUserListingDelegate<GlobalReject>;

  /**
   * `prisma.couponsForUser`: Exposes CRUD operations for the **CouponsForUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CouponsForUsers
    * const couponsForUsers = await prisma.couponsForUser.findMany()
    * ```
    */
  get couponsForUser(): Prisma.CouponsForUserDelegate<GlobalReject>;

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
   * Prisma Client JS version: 4.9.0
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
    PinnedUserListing: 'PinnedUserListing',
    CouponsForUser: 'CouponsForUser',
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
    couponsForUser: number
    PinnedUserListing: number
  }

  export type UserCountOutputTypeSelect = {
    couponsForUser?: boolean
    PinnedUserListing?: boolean
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
     */
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
     */
    select?: CouponCountOutputTypeSelect | null
  }



  /**
   * Count Type ListingCountOutputType
   */


  export type ListingCountOutputType = {
    coupons: number
    PinnedUserListing: number
  }

  export type ListingCountOutputTypeSelect = {
    coupons?: boolean
    PinnedUserListing?: boolean
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
     */
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
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    firstName: number
    lastName: number
    password: number
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
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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
    by: UserScalarFieldEnum[]
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
    password: string
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
    password?: boolean
    role?: boolean
    couponsForUser?: boolean | User$couponsForUserArgs
    PinnedUserListing?: boolean | User$PinnedUserListingArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    couponsForUser?: boolean | User$couponsForUserArgs
    PinnedUserListing?: boolean | User$PinnedUserListingArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'couponsForUser' ? Array < CouponsForUserGetPayload<S['include'][P]>>  :
        P extends 'PinnedUserListing' ? Array < PinnedUserListingGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'couponsForUser' ? Array < CouponsForUserGetPayload<S['select'][P]>>  :
        P extends 'PinnedUserListing' ? Array < PinnedUserListingGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

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

    couponsForUser<T extends User$couponsForUserArgs= {}>(args?: Subset<T, User$couponsForUserArgs>): PrismaPromise<Array<CouponsForUserGetPayload<T>>| Null>;

    PinnedUserListing<T extends User$PinnedUserListingArgs= {}>(args?: Subset<T, User$PinnedUserListingArgs>): PrismaPromise<Array<PinnedUserListingGetPayload<T>>| Null>;

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
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
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
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.couponsForUser
   */
  export type User$couponsForUserArgs = {
    /**
     * Select specific fields to fetch from the CouponsForUser
     */
    select?: CouponsForUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponsForUserInclude | null
    where?: CouponsForUserWhereInput
    orderBy?: Enumerable<CouponsForUserOrderByWithRelationInput>
    cursor?: CouponsForUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CouponsForUserScalarFieldEnum>
  }


  /**
   * User.PinnedUserListing
   */
  export type User$PinnedUserListingArgs = {
    /**
     * Select specific fields to fetch from the PinnedUserListing
     */
    select?: PinnedUserListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PinnedUserListingInclude | null
    where?: PinnedUserListingWhereInput
    orderBy?: Enumerable<PinnedUserListingOrderByWithRelationInput>
    cursor?: PinnedUserListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PinnedUserListingScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model PinnedUserListing
   */


  export type AggregatePinnedUserListing = {
    _count: PinnedUserListingCountAggregateOutputType | null
    _avg: PinnedUserListingAvgAggregateOutputType | null
    _sum: PinnedUserListingSumAggregateOutputType | null
    _min: PinnedUserListingMinAggregateOutputType | null
    _max: PinnedUserListingMaxAggregateOutputType | null
  }

  export type PinnedUserListingAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    listingId: number | null
  }

  export type PinnedUserListingSumAggregateOutputType = {
    id: number | null
    userId: number | null
    listingId: number | null
  }

  export type PinnedUserListingMinAggregateOutputType = {
    id: number | null
    userId: number | null
    listingId: number | null
  }

  export type PinnedUserListingMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    listingId: number | null
  }

  export type PinnedUserListingCountAggregateOutputType = {
    id: number
    userId: number
    listingId: number
    _all: number
  }


  export type PinnedUserListingAvgAggregateInputType = {
    id?: true
    userId?: true
    listingId?: true
  }

  export type PinnedUserListingSumAggregateInputType = {
    id?: true
    userId?: true
    listingId?: true
  }

  export type PinnedUserListingMinAggregateInputType = {
    id?: true
    userId?: true
    listingId?: true
  }

  export type PinnedUserListingMaxAggregateInputType = {
    id?: true
    userId?: true
    listingId?: true
  }

  export type PinnedUserListingCountAggregateInputType = {
    id?: true
    userId?: true
    listingId?: true
    _all?: true
  }

  export type PinnedUserListingAggregateArgs = {
    /**
     * Filter which PinnedUserListing to aggregate.
     */
    where?: PinnedUserListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PinnedUserListings to fetch.
     */
    orderBy?: Enumerable<PinnedUserListingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PinnedUserListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PinnedUserListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PinnedUserListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PinnedUserListings
    **/
    _count?: true | PinnedUserListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PinnedUserListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PinnedUserListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PinnedUserListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PinnedUserListingMaxAggregateInputType
  }

  export type GetPinnedUserListingAggregateType<T extends PinnedUserListingAggregateArgs> = {
        [P in keyof T & keyof AggregatePinnedUserListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePinnedUserListing[P]>
      : GetScalarType<T[P], AggregatePinnedUserListing[P]>
  }




  export type PinnedUserListingGroupByArgs = {
    where?: PinnedUserListingWhereInput
    orderBy?: Enumerable<PinnedUserListingOrderByWithAggregationInput>
    by: PinnedUserListingScalarFieldEnum[]
    having?: PinnedUserListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PinnedUserListingCountAggregateInputType | true
    _avg?: PinnedUserListingAvgAggregateInputType
    _sum?: PinnedUserListingSumAggregateInputType
    _min?: PinnedUserListingMinAggregateInputType
    _max?: PinnedUserListingMaxAggregateInputType
  }


  export type PinnedUserListingGroupByOutputType = {
    id: number
    userId: number
    listingId: number
    _count: PinnedUserListingCountAggregateOutputType | null
    _avg: PinnedUserListingAvgAggregateOutputType | null
    _sum: PinnedUserListingSumAggregateOutputType | null
    _min: PinnedUserListingMinAggregateOutputType | null
    _max: PinnedUserListingMaxAggregateOutputType | null
  }

  type GetPinnedUserListingGroupByPayload<T extends PinnedUserListingGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PinnedUserListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PinnedUserListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PinnedUserListingGroupByOutputType[P]>
            : GetScalarType<T[P], PinnedUserListingGroupByOutputType[P]>
        }
      >
    >


  export type PinnedUserListingSelect = {
    id?: boolean
    user?: boolean | UserArgs
    listing?: boolean | ListingArgs
    userId?: boolean
    listingId?: boolean
  }


  export type PinnedUserListingInclude = {
    user?: boolean | UserArgs
    listing?: boolean | ListingArgs
  }

  export type PinnedUserListingGetPayload<S extends boolean | null | undefined | PinnedUserListingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PinnedUserListing :
    S extends undefined ? never :
    S extends { include: any } & (PinnedUserListingArgs | PinnedUserListingFindManyArgs)
    ? PinnedUserListing  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'listing' ? ListingGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PinnedUserListingArgs | PinnedUserListingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'listing' ? ListingGetPayload<S['select'][P]> :  P extends keyof PinnedUserListing ? PinnedUserListing[P] : never
  } 
      : PinnedUserListing


  type PinnedUserListingCountArgs = 
    Omit<PinnedUserListingFindManyArgs, 'select' | 'include'> & {
      select?: PinnedUserListingCountAggregateInputType | true
    }

  export interface PinnedUserListingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PinnedUserListing that matches the filter.
     * @param {PinnedUserListingFindUniqueArgs} args - Arguments to find a PinnedUserListing
     * @example
     * // Get one PinnedUserListing
     * const pinnedUserListing = await prisma.pinnedUserListing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PinnedUserListingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PinnedUserListingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PinnedUserListing'> extends True ? Prisma__PinnedUserListingClient<PinnedUserListingGetPayload<T>> : Prisma__PinnedUserListingClient<PinnedUserListingGetPayload<T> | null, null>

    /**
     * Find one PinnedUserListing that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PinnedUserListingFindUniqueOrThrowArgs} args - Arguments to find a PinnedUserListing
     * @example
     * // Get one PinnedUserListing
     * const pinnedUserListing = await prisma.pinnedUserListing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PinnedUserListingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PinnedUserListingFindUniqueOrThrowArgs>
    ): Prisma__PinnedUserListingClient<PinnedUserListingGetPayload<T>>

    /**
     * Find the first PinnedUserListing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedUserListingFindFirstArgs} args - Arguments to find a PinnedUserListing
     * @example
     * // Get one PinnedUserListing
     * const pinnedUserListing = await prisma.pinnedUserListing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PinnedUserListingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PinnedUserListingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PinnedUserListing'> extends True ? Prisma__PinnedUserListingClient<PinnedUserListingGetPayload<T>> : Prisma__PinnedUserListingClient<PinnedUserListingGetPayload<T> | null, null>

    /**
     * Find the first PinnedUserListing that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedUserListingFindFirstOrThrowArgs} args - Arguments to find a PinnedUserListing
     * @example
     * // Get one PinnedUserListing
     * const pinnedUserListing = await prisma.pinnedUserListing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PinnedUserListingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PinnedUserListingFindFirstOrThrowArgs>
    ): Prisma__PinnedUserListingClient<PinnedUserListingGetPayload<T>>

    /**
     * Find zero or more PinnedUserListings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedUserListingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PinnedUserListings
     * const pinnedUserListings = await prisma.pinnedUserListing.findMany()
     * 
     * // Get first 10 PinnedUserListings
     * const pinnedUserListings = await prisma.pinnedUserListing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pinnedUserListingWithIdOnly = await prisma.pinnedUserListing.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PinnedUserListingFindManyArgs>(
      args?: SelectSubset<T, PinnedUserListingFindManyArgs>
    ): PrismaPromise<Array<PinnedUserListingGetPayload<T>>>

    /**
     * Create a PinnedUserListing.
     * @param {PinnedUserListingCreateArgs} args - Arguments to create a PinnedUserListing.
     * @example
     * // Create one PinnedUserListing
     * const PinnedUserListing = await prisma.pinnedUserListing.create({
     *   data: {
     *     // ... data to create a PinnedUserListing
     *   }
     * })
     * 
    **/
    create<T extends PinnedUserListingCreateArgs>(
      args: SelectSubset<T, PinnedUserListingCreateArgs>
    ): Prisma__PinnedUserListingClient<PinnedUserListingGetPayload<T>>

    /**
     * Delete a PinnedUserListing.
     * @param {PinnedUserListingDeleteArgs} args - Arguments to delete one PinnedUserListing.
     * @example
     * // Delete one PinnedUserListing
     * const PinnedUserListing = await prisma.pinnedUserListing.delete({
     *   where: {
     *     // ... filter to delete one PinnedUserListing
     *   }
     * })
     * 
    **/
    delete<T extends PinnedUserListingDeleteArgs>(
      args: SelectSubset<T, PinnedUserListingDeleteArgs>
    ): Prisma__PinnedUserListingClient<PinnedUserListingGetPayload<T>>

    /**
     * Update one PinnedUserListing.
     * @param {PinnedUserListingUpdateArgs} args - Arguments to update one PinnedUserListing.
     * @example
     * // Update one PinnedUserListing
     * const pinnedUserListing = await prisma.pinnedUserListing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PinnedUserListingUpdateArgs>(
      args: SelectSubset<T, PinnedUserListingUpdateArgs>
    ): Prisma__PinnedUserListingClient<PinnedUserListingGetPayload<T>>

    /**
     * Delete zero or more PinnedUserListings.
     * @param {PinnedUserListingDeleteManyArgs} args - Arguments to filter PinnedUserListings to delete.
     * @example
     * // Delete a few PinnedUserListings
     * const { count } = await prisma.pinnedUserListing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PinnedUserListingDeleteManyArgs>(
      args?: SelectSubset<T, PinnedUserListingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PinnedUserListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedUserListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PinnedUserListings
     * const pinnedUserListing = await prisma.pinnedUserListing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PinnedUserListingUpdateManyArgs>(
      args: SelectSubset<T, PinnedUserListingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PinnedUserListing.
     * @param {PinnedUserListingUpsertArgs} args - Arguments to update or create a PinnedUserListing.
     * @example
     * // Update or create a PinnedUserListing
     * const pinnedUserListing = await prisma.pinnedUserListing.upsert({
     *   create: {
     *     // ... data to create a PinnedUserListing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PinnedUserListing we want to update
     *   }
     * })
    **/
    upsert<T extends PinnedUserListingUpsertArgs>(
      args: SelectSubset<T, PinnedUserListingUpsertArgs>
    ): Prisma__PinnedUserListingClient<PinnedUserListingGetPayload<T>>

    /**
     * Count the number of PinnedUserListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedUserListingCountArgs} args - Arguments to filter PinnedUserListings to count.
     * @example
     * // Count the number of PinnedUserListings
     * const count = await prisma.pinnedUserListing.count({
     *   where: {
     *     // ... the filter for the PinnedUserListings we want to count
     *   }
     * })
    **/
    count<T extends PinnedUserListingCountArgs>(
      args?: Subset<T, PinnedUserListingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PinnedUserListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PinnedUserListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedUserListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PinnedUserListingAggregateArgs>(args: Subset<T, PinnedUserListingAggregateArgs>): PrismaPromise<GetPinnedUserListingAggregateType<T>>

    /**
     * Group by PinnedUserListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedUserListingGroupByArgs} args - Group by arguments.
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
      T extends PinnedUserListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PinnedUserListingGroupByArgs['orderBy'] }
        : { orderBy?: PinnedUserListingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PinnedUserListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPinnedUserListingGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PinnedUserListing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PinnedUserListingClient<T, Null = never> implements PrismaPromise<T> {
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

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    listing<T extends ListingArgs= {}>(args?: Subset<T, ListingArgs>): Prisma__ListingClient<ListingGetPayload<T> | Null>;

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
   * PinnedUserListing base type for findUnique actions
   */
  export type PinnedUserListingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PinnedUserListing
     */
    select?: PinnedUserListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PinnedUserListingInclude | null
    /**
     * Filter, which PinnedUserListing to fetch.
     */
    where: PinnedUserListingWhereUniqueInput
  }

  /**
   * PinnedUserListing findUnique
   */
  export interface PinnedUserListingFindUniqueArgs extends PinnedUserListingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PinnedUserListing findUniqueOrThrow
   */
  export type PinnedUserListingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PinnedUserListing
     */
    select?: PinnedUserListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PinnedUserListingInclude | null
    /**
     * Filter, which PinnedUserListing to fetch.
     */
    where: PinnedUserListingWhereUniqueInput
  }


  /**
   * PinnedUserListing base type for findFirst actions
   */
  export type PinnedUserListingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PinnedUserListing
     */
    select?: PinnedUserListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PinnedUserListingInclude | null
    /**
     * Filter, which PinnedUserListing to fetch.
     */
    where?: PinnedUserListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PinnedUserListings to fetch.
     */
    orderBy?: Enumerable<PinnedUserListingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PinnedUserListings.
     */
    cursor?: PinnedUserListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PinnedUserListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PinnedUserListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PinnedUserListings.
     */
    distinct?: Enumerable<PinnedUserListingScalarFieldEnum>
  }

  /**
   * PinnedUserListing findFirst
   */
  export interface PinnedUserListingFindFirstArgs extends PinnedUserListingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PinnedUserListing findFirstOrThrow
   */
  export type PinnedUserListingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PinnedUserListing
     */
    select?: PinnedUserListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PinnedUserListingInclude | null
    /**
     * Filter, which PinnedUserListing to fetch.
     */
    where?: PinnedUserListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PinnedUserListings to fetch.
     */
    orderBy?: Enumerable<PinnedUserListingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PinnedUserListings.
     */
    cursor?: PinnedUserListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PinnedUserListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PinnedUserListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PinnedUserListings.
     */
    distinct?: Enumerable<PinnedUserListingScalarFieldEnum>
  }


  /**
   * PinnedUserListing findMany
   */
  export type PinnedUserListingFindManyArgs = {
    /**
     * Select specific fields to fetch from the PinnedUserListing
     */
    select?: PinnedUserListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PinnedUserListingInclude | null
    /**
     * Filter, which PinnedUserListings to fetch.
     */
    where?: PinnedUserListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PinnedUserListings to fetch.
     */
    orderBy?: Enumerable<PinnedUserListingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PinnedUserListings.
     */
    cursor?: PinnedUserListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PinnedUserListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PinnedUserListings.
     */
    skip?: number
    distinct?: Enumerable<PinnedUserListingScalarFieldEnum>
  }


  /**
   * PinnedUserListing create
   */
  export type PinnedUserListingCreateArgs = {
    /**
     * Select specific fields to fetch from the PinnedUserListing
     */
    select?: PinnedUserListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PinnedUserListingInclude | null
    /**
     * The data needed to create a PinnedUserListing.
     */
    data: XOR<PinnedUserListingCreateInput, PinnedUserListingUncheckedCreateInput>
  }


  /**
   * PinnedUserListing update
   */
  export type PinnedUserListingUpdateArgs = {
    /**
     * Select specific fields to fetch from the PinnedUserListing
     */
    select?: PinnedUserListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PinnedUserListingInclude | null
    /**
     * The data needed to update a PinnedUserListing.
     */
    data: XOR<PinnedUserListingUpdateInput, PinnedUserListingUncheckedUpdateInput>
    /**
     * Choose, which PinnedUserListing to update.
     */
    where: PinnedUserListingWhereUniqueInput
  }


  /**
   * PinnedUserListing updateMany
   */
  export type PinnedUserListingUpdateManyArgs = {
    /**
     * The data used to update PinnedUserListings.
     */
    data: XOR<PinnedUserListingUpdateManyMutationInput, PinnedUserListingUncheckedUpdateManyInput>
    /**
     * Filter which PinnedUserListings to update
     */
    where?: PinnedUserListingWhereInput
  }


  /**
   * PinnedUserListing upsert
   */
  export type PinnedUserListingUpsertArgs = {
    /**
     * Select specific fields to fetch from the PinnedUserListing
     */
    select?: PinnedUserListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PinnedUserListingInclude | null
    /**
     * The filter to search for the PinnedUserListing to update in case it exists.
     */
    where: PinnedUserListingWhereUniqueInput
    /**
     * In case the PinnedUserListing found by the `where` argument doesn't exist, create a new PinnedUserListing with this data.
     */
    create: XOR<PinnedUserListingCreateInput, PinnedUserListingUncheckedCreateInput>
    /**
     * In case the PinnedUserListing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PinnedUserListingUpdateInput, PinnedUserListingUncheckedUpdateInput>
  }


  /**
   * PinnedUserListing delete
   */
  export type PinnedUserListingDeleteArgs = {
    /**
     * Select specific fields to fetch from the PinnedUserListing
     */
    select?: PinnedUserListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PinnedUserListingInclude | null
    /**
     * Filter which PinnedUserListing to delete.
     */
    where: PinnedUserListingWhereUniqueInput
  }


  /**
   * PinnedUserListing deleteMany
   */
  export type PinnedUserListingDeleteManyArgs = {
    /**
     * Filter which PinnedUserListings to delete
     */
    where?: PinnedUserListingWhereInput
  }


  /**
   * PinnedUserListing without action
   */
  export type PinnedUserListingArgs = {
    /**
     * Select specific fields to fetch from the PinnedUserListing
     */
    select?: PinnedUserListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PinnedUserListingInclude | null
  }



  /**
   * Model CouponsForUser
   */


  export type AggregateCouponsForUser = {
    _count: CouponsForUserCountAggregateOutputType | null
    _avg: CouponsForUserAvgAggregateOutputType | null
    _sum: CouponsForUserSumAggregateOutputType | null
    _min: CouponsForUserMinAggregateOutputType | null
    _max: CouponsForUserMaxAggregateOutputType | null
  }

  export type CouponsForUserAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CouponsForUserSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CouponsForUserMinAggregateOutputType = {
    id: number | null
    userId: number | null
    couponsName: string | null
    used: boolean | null
  }

  export type CouponsForUserMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    couponsName: string | null
    used: boolean | null
  }

  export type CouponsForUserCountAggregateOutputType = {
    id: number
    userId: number
    couponsName: number
    used: number
    _all: number
  }


  export type CouponsForUserAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CouponsForUserSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CouponsForUserMinAggregateInputType = {
    id?: true
    userId?: true
    couponsName?: true
    used?: true
  }

  export type CouponsForUserMaxAggregateInputType = {
    id?: true
    userId?: true
    couponsName?: true
    used?: true
  }

  export type CouponsForUserCountAggregateInputType = {
    id?: true
    userId?: true
    couponsName?: true
    used?: true
    _all?: true
  }

  export type CouponsForUserAggregateArgs = {
    /**
     * Filter which CouponsForUser to aggregate.
     */
    where?: CouponsForUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponsForUsers to fetch.
     */
    orderBy?: Enumerable<CouponsForUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponsForUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponsForUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponsForUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CouponsForUsers
    **/
    _count?: true | CouponsForUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponsForUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponsForUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponsForUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponsForUserMaxAggregateInputType
  }

  export type GetCouponsForUserAggregateType<T extends CouponsForUserAggregateArgs> = {
        [P in keyof T & keyof AggregateCouponsForUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCouponsForUser[P]>
      : GetScalarType<T[P], AggregateCouponsForUser[P]>
  }




  export type CouponsForUserGroupByArgs = {
    where?: CouponsForUserWhereInput
    orderBy?: Enumerable<CouponsForUserOrderByWithAggregationInput>
    by: CouponsForUserScalarFieldEnum[]
    having?: CouponsForUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponsForUserCountAggregateInputType | true
    _avg?: CouponsForUserAvgAggregateInputType
    _sum?: CouponsForUserSumAggregateInputType
    _min?: CouponsForUserMinAggregateInputType
    _max?: CouponsForUserMaxAggregateInputType
  }


  export type CouponsForUserGroupByOutputType = {
    id: number
    userId: number | null
    couponsName: string | null
    used: boolean
    _count: CouponsForUserCountAggregateOutputType | null
    _avg: CouponsForUserAvgAggregateOutputType | null
    _sum: CouponsForUserSumAggregateOutputType | null
    _min: CouponsForUserMinAggregateOutputType | null
    _max: CouponsForUserMaxAggregateOutputType | null
  }

  type GetCouponsForUserGroupByPayload<T extends CouponsForUserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CouponsForUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponsForUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponsForUserGroupByOutputType[P]>
            : GetScalarType<T[P], CouponsForUserGroupByOutputType[P]>
        }
      >
    >


  export type CouponsForUserSelect = {
    id?: boolean
    User?: boolean | UserArgs
    userId?: boolean
    Coupons?: boolean | CouponArgs
    couponsName?: boolean
    used?: boolean
  }


  export type CouponsForUserInclude = {
    User?: boolean | UserArgs
    Coupons?: boolean | CouponArgs
  }

  export type CouponsForUserGetPayload<S extends boolean | null | undefined | CouponsForUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CouponsForUser :
    S extends undefined ? never :
    S extends { include: any } & (CouponsForUserArgs | CouponsForUserFindManyArgs)
    ? CouponsForUser  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :
        P extends 'Coupons' ? CouponGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (CouponsForUserArgs | CouponsForUserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :
        P extends 'Coupons' ? CouponGetPayload<S['select'][P]> | null :  P extends keyof CouponsForUser ? CouponsForUser[P] : never
  } 
      : CouponsForUser


  type CouponsForUserCountArgs = 
    Omit<CouponsForUserFindManyArgs, 'select' | 'include'> & {
      select?: CouponsForUserCountAggregateInputType | true
    }

  export interface CouponsForUserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CouponsForUser that matches the filter.
     * @param {CouponsForUserFindUniqueArgs} args - Arguments to find a CouponsForUser
     * @example
     * // Get one CouponsForUser
     * const couponsForUser = await prisma.couponsForUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CouponsForUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CouponsForUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CouponsForUser'> extends True ? Prisma__CouponsForUserClient<CouponsForUserGetPayload<T>> : Prisma__CouponsForUserClient<CouponsForUserGetPayload<T> | null, null>

    /**
     * Find one CouponsForUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CouponsForUserFindUniqueOrThrowArgs} args - Arguments to find a CouponsForUser
     * @example
     * // Get one CouponsForUser
     * const couponsForUser = await prisma.couponsForUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CouponsForUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CouponsForUserFindUniqueOrThrowArgs>
    ): Prisma__CouponsForUserClient<CouponsForUserGetPayload<T>>

    /**
     * Find the first CouponsForUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsForUserFindFirstArgs} args - Arguments to find a CouponsForUser
     * @example
     * // Get one CouponsForUser
     * const couponsForUser = await prisma.couponsForUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CouponsForUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CouponsForUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CouponsForUser'> extends True ? Prisma__CouponsForUserClient<CouponsForUserGetPayload<T>> : Prisma__CouponsForUserClient<CouponsForUserGetPayload<T> | null, null>

    /**
     * Find the first CouponsForUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsForUserFindFirstOrThrowArgs} args - Arguments to find a CouponsForUser
     * @example
     * // Get one CouponsForUser
     * const couponsForUser = await prisma.couponsForUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CouponsForUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CouponsForUserFindFirstOrThrowArgs>
    ): Prisma__CouponsForUserClient<CouponsForUserGetPayload<T>>

    /**
     * Find zero or more CouponsForUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsForUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CouponsForUsers
     * const couponsForUsers = await prisma.couponsForUser.findMany()
     * 
     * // Get first 10 CouponsForUsers
     * const couponsForUsers = await prisma.couponsForUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponsForUserWithIdOnly = await prisma.couponsForUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CouponsForUserFindManyArgs>(
      args?: SelectSubset<T, CouponsForUserFindManyArgs>
    ): PrismaPromise<Array<CouponsForUserGetPayload<T>>>

    /**
     * Create a CouponsForUser.
     * @param {CouponsForUserCreateArgs} args - Arguments to create a CouponsForUser.
     * @example
     * // Create one CouponsForUser
     * const CouponsForUser = await prisma.couponsForUser.create({
     *   data: {
     *     // ... data to create a CouponsForUser
     *   }
     * })
     * 
    **/
    create<T extends CouponsForUserCreateArgs>(
      args: SelectSubset<T, CouponsForUserCreateArgs>
    ): Prisma__CouponsForUserClient<CouponsForUserGetPayload<T>>

    /**
     * Delete a CouponsForUser.
     * @param {CouponsForUserDeleteArgs} args - Arguments to delete one CouponsForUser.
     * @example
     * // Delete one CouponsForUser
     * const CouponsForUser = await prisma.couponsForUser.delete({
     *   where: {
     *     // ... filter to delete one CouponsForUser
     *   }
     * })
     * 
    **/
    delete<T extends CouponsForUserDeleteArgs>(
      args: SelectSubset<T, CouponsForUserDeleteArgs>
    ): Prisma__CouponsForUserClient<CouponsForUserGetPayload<T>>

    /**
     * Update one CouponsForUser.
     * @param {CouponsForUserUpdateArgs} args - Arguments to update one CouponsForUser.
     * @example
     * // Update one CouponsForUser
     * const couponsForUser = await prisma.couponsForUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CouponsForUserUpdateArgs>(
      args: SelectSubset<T, CouponsForUserUpdateArgs>
    ): Prisma__CouponsForUserClient<CouponsForUserGetPayload<T>>

    /**
     * Delete zero or more CouponsForUsers.
     * @param {CouponsForUserDeleteManyArgs} args - Arguments to filter CouponsForUsers to delete.
     * @example
     * // Delete a few CouponsForUsers
     * const { count } = await prisma.couponsForUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CouponsForUserDeleteManyArgs>(
      args?: SelectSubset<T, CouponsForUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CouponsForUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsForUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CouponsForUsers
     * const couponsForUser = await prisma.couponsForUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CouponsForUserUpdateManyArgs>(
      args: SelectSubset<T, CouponsForUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CouponsForUser.
     * @param {CouponsForUserUpsertArgs} args - Arguments to update or create a CouponsForUser.
     * @example
     * // Update or create a CouponsForUser
     * const couponsForUser = await prisma.couponsForUser.upsert({
     *   create: {
     *     // ... data to create a CouponsForUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CouponsForUser we want to update
     *   }
     * })
    **/
    upsert<T extends CouponsForUserUpsertArgs>(
      args: SelectSubset<T, CouponsForUserUpsertArgs>
    ): Prisma__CouponsForUserClient<CouponsForUserGetPayload<T>>

    /**
     * Count the number of CouponsForUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsForUserCountArgs} args - Arguments to filter CouponsForUsers to count.
     * @example
     * // Count the number of CouponsForUsers
     * const count = await prisma.couponsForUser.count({
     *   where: {
     *     // ... the filter for the CouponsForUsers we want to count
     *   }
     * })
    **/
    count<T extends CouponsForUserCountArgs>(
      args?: Subset<T, CouponsForUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponsForUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CouponsForUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsForUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CouponsForUserAggregateArgs>(args: Subset<T, CouponsForUserAggregateArgs>): PrismaPromise<GetCouponsForUserAggregateType<T>>

    /**
     * Group by CouponsForUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsForUserGroupByArgs} args - Group by arguments.
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
      T extends CouponsForUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponsForUserGroupByArgs['orderBy'] }
        : { orderBy?: CouponsForUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CouponsForUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponsForUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CouponsForUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CouponsForUserClient<T, Null = never> implements PrismaPromise<T> {
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
   * CouponsForUser base type for findUnique actions
   */
  export type CouponsForUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CouponsForUser
     */
    select?: CouponsForUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponsForUserInclude | null
    /**
     * Filter, which CouponsForUser to fetch.
     */
    where: CouponsForUserWhereUniqueInput
  }

  /**
   * CouponsForUser findUnique
   */
  export interface CouponsForUserFindUniqueArgs extends CouponsForUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CouponsForUser findUniqueOrThrow
   */
  export type CouponsForUserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CouponsForUser
     */
    select?: CouponsForUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponsForUserInclude | null
    /**
     * Filter, which CouponsForUser to fetch.
     */
    where: CouponsForUserWhereUniqueInput
  }


  /**
   * CouponsForUser base type for findFirst actions
   */
  export type CouponsForUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CouponsForUser
     */
    select?: CouponsForUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponsForUserInclude | null
    /**
     * Filter, which CouponsForUser to fetch.
     */
    where?: CouponsForUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponsForUsers to fetch.
     */
    orderBy?: Enumerable<CouponsForUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CouponsForUsers.
     */
    cursor?: CouponsForUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponsForUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponsForUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CouponsForUsers.
     */
    distinct?: Enumerable<CouponsForUserScalarFieldEnum>
  }

  /**
   * CouponsForUser findFirst
   */
  export interface CouponsForUserFindFirstArgs extends CouponsForUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CouponsForUser findFirstOrThrow
   */
  export type CouponsForUserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CouponsForUser
     */
    select?: CouponsForUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponsForUserInclude | null
    /**
     * Filter, which CouponsForUser to fetch.
     */
    where?: CouponsForUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponsForUsers to fetch.
     */
    orderBy?: Enumerable<CouponsForUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CouponsForUsers.
     */
    cursor?: CouponsForUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponsForUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponsForUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CouponsForUsers.
     */
    distinct?: Enumerable<CouponsForUserScalarFieldEnum>
  }


  /**
   * CouponsForUser findMany
   */
  export type CouponsForUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the CouponsForUser
     */
    select?: CouponsForUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponsForUserInclude | null
    /**
     * Filter, which CouponsForUsers to fetch.
     */
    where?: CouponsForUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponsForUsers to fetch.
     */
    orderBy?: Enumerable<CouponsForUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CouponsForUsers.
     */
    cursor?: CouponsForUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponsForUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponsForUsers.
     */
    skip?: number
    distinct?: Enumerable<CouponsForUserScalarFieldEnum>
  }


  /**
   * CouponsForUser create
   */
  export type CouponsForUserCreateArgs = {
    /**
     * Select specific fields to fetch from the CouponsForUser
     */
    select?: CouponsForUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponsForUserInclude | null
    /**
     * The data needed to create a CouponsForUser.
     */
    data: XOR<CouponsForUserCreateInput, CouponsForUserUncheckedCreateInput>
  }


  /**
   * CouponsForUser update
   */
  export type CouponsForUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the CouponsForUser
     */
    select?: CouponsForUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponsForUserInclude | null
    /**
     * The data needed to update a CouponsForUser.
     */
    data: XOR<CouponsForUserUpdateInput, CouponsForUserUncheckedUpdateInput>
    /**
     * Choose, which CouponsForUser to update.
     */
    where: CouponsForUserWhereUniqueInput
  }


  /**
   * CouponsForUser updateMany
   */
  export type CouponsForUserUpdateManyArgs = {
    /**
     * The data used to update CouponsForUsers.
     */
    data: XOR<CouponsForUserUpdateManyMutationInput, CouponsForUserUncheckedUpdateManyInput>
    /**
     * Filter which CouponsForUsers to update
     */
    where?: CouponsForUserWhereInput
  }


  /**
   * CouponsForUser upsert
   */
  export type CouponsForUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the CouponsForUser
     */
    select?: CouponsForUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponsForUserInclude | null
    /**
     * The filter to search for the CouponsForUser to update in case it exists.
     */
    where: CouponsForUserWhereUniqueInput
    /**
     * In case the CouponsForUser found by the `where` argument doesn't exist, create a new CouponsForUser with this data.
     */
    create: XOR<CouponsForUserCreateInput, CouponsForUserUncheckedCreateInput>
    /**
     * In case the CouponsForUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponsForUserUpdateInput, CouponsForUserUncheckedUpdateInput>
  }


  /**
   * CouponsForUser delete
   */
  export type CouponsForUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the CouponsForUser
     */
    select?: CouponsForUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponsForUserInclude | null
    /**
     * Filter which CouponsForUser to delete.
     */
    where: CouponsForUserWhereUniqueInput
  }


  /**
   * CouponsForUser deleteMany
   */
  export type CouponsForUserDeleteManyArgs = {
    /**
     * Filter which CouponsForUsers to delete
     */
    where?: CouponsForUserWhereInput
  }


  /**
   * CouponsForUser without action
   */
  export type CouponsForUserArgs = {
    /**
     * Select specific fields to fetch from the CouponsForUser
     */
    select?: CouponsForUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponsForUserInclude | null
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
    description: string | null
    expired: boolean | null
    email: string | null
  }

  export type CouponMaxAggregateOutputType = {
    id: number | null
    name: string | null
    listingId: number | null
    description: string | null
    expired: boolean | null
    email: string | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    name: number
    listingId: number
    description: number
    expired: number
    email: number
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
    description?: true
    expired?: true
    email?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    name?: true
    listingId?: true
    description?: true
    expired?: true
    email?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    name?: true
    listingId?: true
    description?: true
    expired?: true
    email?: true
    _all?: true
  }

  export type CouponAggregateArgs = {
    /**
     * Filter which Coupon to aggregate.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: Enumerable<CouponOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
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
    by: CouponScalarFieldEnum[]
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
    description: string
    expired: boolean
    email: string
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
    description?: boolean
    expired?: boolean
    email?: boolean
    couponsUsedByUser?: boolean | Coupon$couponsUsedByUserArgs
    _count?: boolean | CouponCountOutputTypeArgs
  }


  export type CouponInclude = {
    listing?: boolean | ListingArgs
    couponsUsedByUser?: boolean | Coupon$couponsUsedByUserArgs
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
        P extends 'couponsUsedByUser' ? Array < CouponsForUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? CouponCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CouponArgs | CouponFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'listing' ? ListingGetPayload<S['select'][P]> | null :
        P extends 'couponsUsedByUser' ? Array < CouponsForUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? CouponCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Coupon ? Coupon[P] : never
  } 
      : Coupon


  type CouponCountArgs = 
    Omit<CouponFindManyArgs, 'select' | 'include'> & {
      select?: CouponCountAggregateInputType | true
    }

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

    couponsUsedByUser<T extends Coupon$couponsUsedByUserArgs= {}>(args?: Subset<T, Coupon$couponsUsedByUserArgs>): PrismaPromise<Array<CouponsForUserGetPayload<T>>| Null>;

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
     */
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude | null
    /**
     * Filter, which Coupon to fetch.
     */
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
     */
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }


  /**
   * Coupon base type for findFirst actions
   */
  export type CouponFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: Enumerable<CouponOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
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
     */
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: Enumerable<CouponOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: Enumerable<CouponScalarFieldEnum>
  }


  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: Enumerable<CouponOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    distinct?: Enumerable<CouponScalarFieldEnum>
  }


  /**
   * Coupon create
   */
  export type CouponCreateArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude | null
    /**
     * The data needed to create a Coupon.
     */
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }


  /**
   * Coupon update
   */
  export type CouponUpdateArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude | null
    /**
     * The data needed to update a Coupon.
     */
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     */
    where: CouponWhereUniqueInput
  }


  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
  }


  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     */
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     */
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }


  /**
   * Coupon delete
   */
  export type CouponDeleteArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude | null
    /**
     * Filter which Coupon to delete.
     */
    where: CouponWhereUniqueInput
  }


  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponWhereInput
  }


  /**
   * Coupon.couponsUsedByUser
   */
  export type Coupon$couponsUsedByUserArgs = {
    /**
     * Select specific fields to fetch from the CouponsForUser
     */
    select?: CouponsForUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponsForUserInclude | null
    where?: CouponsForUserWhereInput
    orderBy?: Enumerable<CouponsForUserOrderByWithRelationInput>
    cursor?: CouponsForUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CouponsForUserScalarFieldEnum>
  }


  /**
   * Coupon without action
   */
  export type CouponArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
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
    city: string | null
    zipcode: string | null
    displayTitle: string | null
    subTitle: string | null
    category: string | null
    attributes: string | null
    description: string | null
    email: string | null
    phone: string | null
    website: string | null
    image1: string | null
    image2: string | null
    image3: string | null
    image4: string | null
  }

  export type ListingMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    city: string | null
    zipcode: string | null
    displayTitle: string | null
    subTitle: string | null
    category: string | null
    attributes: string | null
    description: string | null
    email: string | null
    phone: string | null
    website: string | null
    image1: string | null
    image2: string | null
    image3: string | null
    image4: string | null
  }

  export type ListingCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    zipcode: number
    displayTitle: number
    subTitle: number
    category: number
    attributes: number
    description: number
    email: number
    phone: number
    website: number
    image1: number
    image2: number
    image3: number
    image4: number
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
    city?: true
    zipcode?: true
    displayTitle?: true
    subTitle?: true
    category?: true
    attributes?: true
    description?: true
    email?: true
    phone?: true
    website?: true
    image1?: true
    image2?: true
    image3?: true
    image4?: true
  }

  export type ListingMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    zipcode?: true
    displayTitle?: true
    subTitle?: true
    category?: true
    attributes?: true
    description?: true
    email?: true
    phone?: true
    website?: true
    image1?: true
    image2?: true
    image3?: true
    image4?: true
  }

  export type ListingCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    zipcode?: true
    displayTitle?: true
    subTitle?: true
    category?: true
    attributes?: true
    description?: true
    email?: true
    phone?: true
    website?: true
    image1?: true
    image2?: true
    image3?: true
    image4?: true
    _all?: true
  }

  export type ListingAggregateArgs = {
    /**
     * Filter which Listing to aggregate.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: Enumerable<ListingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
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
    by: ListingScalarFieldEnum[]
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
    city: string
    zipcode: string
    displayTitle: string
    subTitle: string | null
    category: string | null
    attributes: string | null
    description: string
    email: string
    phone: string
    website: string
    image1: string
    image2: string | null
    image3: string | null
    image4: string | null
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
    city?: boolean
    zipcode?: boolean
    displayTitle?: boolean
    subTitle?: boolean
    category?: boolean
    attributes?: boolean
    description?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    image1?: boolean
    image2?: boolean
    image3?: boolean
    image4?: boolean
    coupons?: boolean | Listing$couponsArgs
    PinnedUserListing?: boolean | Listing$PinnedUserListingArgs
    _count?: boolean | ListingCountOutputTypeArgs
  }


  export type ListingInclude = {
    coupons?: boolean | Listing$couponsArgs
    PinnedUserListing?: boolean | Listing$PinnedUserListingArgs
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
        P extends 'PinnedUserListing' ? Array < PinnedUserListingGetPayload<S['include'][P]>>  :
        P extends '_count' ? ListingCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ListingArgs | ListingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coupons' ? Array < CouponGetPayload<S['select'][P]>>  :
        P extends 'PinnedUserListing' ? Array < PinnedUserListingGetPayload<S['select'][P]>>  :
        P extends '_count' ? ListingCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Listing ? Listing[P] : never
  } 
      : Listing


  type ListingCountArgs = 
    Omit<ListingFindManyArgs, 'select' | 'include'> & {
      select?: ListingCountAggregateInputType | true
    }

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

    coupons<T extends Listing$couponsArgs= {}>(args?: Subset<T, Listing$couponsArgs>): PrismaPromise<Array<CouponGetPayload<T>>| Null>;

    PinnedUserListing<T extends Listing$PinnedUserListingArgs= {}>(args?: Subset<T, Listing$PinnedUserListingArgs>): PrismaPromise<Array<PinnedUserListingGetPayload<T>>| Null>;

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
     */
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListingInclude | null
    /**
     * Filter, which Listing to fetch.
     */
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
     */
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListingInclude | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }


  /**
   * Listing base type for findFirst actions
   */
  export type ListingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListingInclude | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: Enumerable<ListingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
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
     */
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListingInclude | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: Enumerable<ListingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: Enumerable<ListingScalarFieldEnum>
  }


  /**
   * Listing findMany
   */
  export type ListingFindManyArgs = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListingInclude | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: Enumerable<ListingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    distinct?: Enumerable<ListingScalarFieldEnum>
  }


  /**
   * Listing create
   */
  export type ListingCreateArgs = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListingInclude | null
    /**
     * The data needed to create a Listing.
     */
    data: XOR<ListingCreateInput, ListingUncheckedCreateInput>
  }


  /**
   * Listing update
   */
  export type ListingUpdateArgs = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListingInclude | null
    /**
     * The data needed to update a Listing.
     */
    data: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
    /**
     * Choose, which Listing to update.
     */
    where: ListingWhereUniqueInput
  }


  /**
   * Listing updateMany
   */
  export type ListingUpdateManyArgs = {
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
  }


  /**
   * Listing upsert
   */
  export type ListingUpsertArgs = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListingInclude | null
    /**
     * The filter to search for the Listing to update in case it exists.
     */
    where: ListingWhereUniqueInput
    /**
     * In case the Listing found by the `where` argument doesn't exist, create a new Listing with this data.
     */
    create: XOR<ListingCreateInput, ListingUncheckedCreateInput>
    /**
     * In case the Listing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
  }


  /**
   * Listing delete
   */
  export type ListingDeleteArgs = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ListingInclude | null
    /**
     * Filter which Listing to delete.
     */
    where: ListingWhereUniqueInput
  }


  /**
   * Listing deleteMany
   */
  export type ListingDeleteManyArgs = {
    /**
     * Filter which Listings to delete
     */
    where?: ListingWhereInput
  }


  /**
   * Listing.coupons
   */
  export type Listing$couponsArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude | null
    where?: CouponWhereInput
    orderBy?: Enumerable<CouponOrderByWithRelationInput>
    cursor?: CouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CouponScalarFieldEnum>
  }


  /**
   * Listing.PinnedUserListing
   */
  export type Listing$PinnedUserListingArgs = {
    /**
     * Select specific fields to fetch from the PinnedUserListing
     */
    select?: PinnedUserListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PinnedUserListingInclude | null
    where?: PinnedUserListingWhereInput
    orderBy?: Enumerable<PinnedUserListingOrderByWithRelationInput>
    cursor?: PinnedUserListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PinnedUserListingScalarFieldEnum>
  }


  /**
   * Listing without action
   */
  export type ListingArgs = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
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
    description: 'description',
    expired: 'expired',
    email: 'email'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const CouponsForUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    couponsName: 'couponsName',
    used: 'used'
  };

  export type CouponsForUserScalarFieldEnum = (typeof CouponsForUserScalarFieldEnum)[keyof typeof CouponsForUserScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    zipcode: 'zipcode',
    displayTitle: 'displayTitle',
    subTitle: 'subTitle',
    category: 'category',
    attributes: 'attributes',
    description: 'description',
    email: 'email',
    phone: 'phone',
    website: 'website',
    image1: 'image1',
    image2: 'image2',
    image3: 'image3',
    image4: 'image4'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const PinnedUserListingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    listingId: 'listingId'
  };

  export type PinnedUserListingScalarFieldEnum = (typeof PinnedUserListingScalarFieldEnum)[keyof typeof PinnedUserListingScalarFieldEnum]


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
    password: 'password',
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
    password?: StringFilter | string
    role?: StringFilter | string
    couponsForUser?: CouponsForUserListRelationFilter
    PinnedUserListing?: PinnedUserListingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    couponsForUser?: CouponsForUserOrderByRelationAggregateInput
    PinnedUserListing?: PinnedUserListingOrderByRelationAggregateInput
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
    password?: SortOrder
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
    password?: StringWithAggregatesFilter | string
    role?: StringWithAggregatesFilter | string
  }

  export type PinnedUserListingWhereInput = {
    AND?: Enumerable<PinnedUserListingWhereInput>
    OR?: Enumerable<PinnedUserListingWhereInput>
    NOT?: Enumerable<PinnedUserListingWhereInput>
    id?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    listing?: XOR<ListingRelationFilter, ListingWhereInput>
    userId?: IntFilter | number
    listingId?: IntFilter | number
  }

  export type PinnedUserListingOrderByWithRelationInput = {
    id?: SortOrder
    user?: UserOrderByWithRelationInput
    listing?: ListingOrderByWithRelationInput
    userId?: SortOrder
    listingId?: SortOrder
  }

  export type PinnedUserListingWhereUniqueInput = {
    id?: number
  }

  export type PinnedUserListingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
    _count?: PinnedUserListingCountOrderByAggregateInput
    _avg?: PinnedUserListingAvgOrderByAggregateInput
    _max?: PinnedUserListingMaxOrderByAggregateInput
    _min?: PinnedUserListingMinOrderByAggregateInput
    _sum?: PinnedUserListingSumOrderByAggregateInput
  }

  export type PinnedUserListingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PinnedUserListingScalarWhereWithAggregatesInput>
    OR?: Enumerable<PinnedUserListingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PinnedUserListingScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    listingId?: IntWithAggregatesFilter | number
  }

  export type CouponsForUserWhereInput = {
    AND?: Enumerable<CouponsForUserWhereInput>
    OR?: Enumerable<CouponsForUserWhereInput>
    NOT?: Enumerable<CouponsForUserWhereInput>
    id?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    userId?: IntNullableFilter | number | null
    Coupons?: XOR<CouponRelationFilter, CouponWhereInput> | null
    couponsName?: StringNullableFilter | string | null
    used?: BoolFilter | boolean
  }

  export type CouponsForUserOrderByWithRelationInput = {
    id?: SortOrder
    User?: UserOrderByWithRelationInput
    userId?: SortOrder
    Coupons?: CouponOrderByWithRelationInput
    couponsName?: SortOrder
    used?: SortOrder
  }

  export type CouponsForUserWhereUniqueInput = {
    id?: number
  }

  export type CouponsForUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    couponsName?: SortOrder
    used?: SortOrder
    _count?: CouponsForUserCountOrderByAggregateInput
    _avg?: CouponsForUserAvgOrderByAggregateInput
    _max?: CouponsForUserMaxOrderByAggregateInput
    _min?: CouponsForUserMinOrderByAggregateInput
    _sum?: CouponsForUserSumOrderByAggregateInput
  }

  export type CouponsForUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CouponsForUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<CouponsForUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CouponsForUserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntNullableWithAggregatesFilter | number | null
    couponsName?: StringNullableWithAggregatesFilter | string | null
    used?: BoolWithAggregatesFilter | boolean
  }

  export type CouponWhereInput = {
    AND?: Enumerable<CouponWhereInput>
    OR?: Enumerable<CouponWhereInput>
    NOT?: Enumerable<CouponWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    listing?: XOR<ListingRelationFilter, ListingWhereInput> | null
    listingId?: IntNullableFilter | number | null
    description?: StringFilter | string
    expired?: BoolFilter | boolean
    email?: StringFilter | string
    couponsUsedByUser?: CouponsForUserListRelationFilter
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    listing?: ListingOrderByWithRelationInput
    listingId?: SortOrder
    description?: SortOrder
    expired?: SortOrder
    email?: SortOrder
    couponsUsedByUser?: CouponsForUserOrderByRelationAggregateInput
  }

  export type CouponWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    listingId?: SortOrder
    description?: SortOrder
    expired?: SortOrder
    email?: SortOrder
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
    description?: StringWithAggregatesFilter | string
    expired?: BoolWithAggregatesFilter | boolean
    email?: StringWithAggregatesFilter | string
  }

  export type ListingWhereInput = {
    AND?: Enumerable<ListingWhereInput>
    OR?: Enumerable<ListingWhereInput>
    NOT?: Enumerable<ListingWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    address?: StringFilter | string
    city?: StringFilter | string
    zipcode?: StringFilter | string
    displayTitle?: StringFilter | string
    subTitle?: StringNullableFilter | string | null
    category?: StringNullableFilter | string | null
    attributes?: StringNullableFilter | string | null
    description?: StringFilter | string
    email?: StringFilter | string
    phone?: StringFilter | string
    website?: StringFilter | string
    image1?: StringFilter | string
    image2?: StringNullableFilter | string | null
    image3?: StringNullableFilter | string | null
    image4?: StringNullableFilter | string | null
    coupons?: CouponListRelationFilter
    PinnedUserListing?: PinnedUserListingListRelationFilter
  }

  export type ListingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    displayTitle?: SortOrder
    subTitle?: SortOrder
    category?: SortOrder
    attributes?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    image1?: SortOrder
    image2?: SortOrder
    image3?: SortOrder
    image4?: SortOrder
    coupons?: CouponOrderByRelationAggregateInput
    PinnedUserListing?: PinnedUserListingOrderByRelationAggregateInput
  }

  export type ListingWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type ListingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    displayTitle?: SortOrder
    subTitle?: SortOrder
    category?: SortOrder
    attributes?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    image1?: SortOrder
    image2?: SortOrder
    image3?: SortOrder
    image4?: SortOrder
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
    city?: StringWithAggregatesFilter | string
    zipcode?: StringWithAggregatesFilter | string
    displayTitle?: StringWithAggregatesFilter | string
    subTitle?: StringNullableWithAggregatesFilter | string | null
    category?: StringNullableWithAggregatesFilter | string | null
    attributes?: StringNullableWithAggregatesFilter | string | null
    description?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    website?: StringWithAggregatesFilter | string
    image1?: StringWithAggregatesFilter | string
    image2?: StringNullableWithAggregatesFilter | string | null
    image3?: StringNullableWithAggregatesFilter | string | null
    image4?: StringNullableWithAggregatesFilter | string | null
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    role?: string
    couponsForUser?: CouponsForUserCreateNestedManyWithoutUserInput
    PinnedUserListing?: PinnedUserListingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    role?: string
    couponsForUser?: CouponsForUserUncheckedCreateNestedManyWithoutUserInput
    PinnedUserListing?: PinnedUserListingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    couponsForUser?: CouponsForUserUpdateManyWithoutUserNestedInput
    PinnedUserListing?: PinnedUserListingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    couponsForUser?: CouponsForUserUncheckedUpdateManyWithoutUserNestedInput
    PinnedUserListing?: PinnedUserListingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PinnedUserListingCreateInput = {
    user: UserCreateNestedOneWithoutPinnedUserListingInput
    listing: ListingCreateNestedOneWithoutPinnedUserListingInput
  }

  export type PinnedUserListingUncheckedCreateInput = {
    id?: number
    userId: number
    listingId: number
  }

  export type PinnedUserListingUpdateInput = {
    user?: UserUpdateOneRequiredWithoutPinnedUserListingNestedInput
    listing?: ListingUpdateOneRequiredWithoutPinnedUserListingNestedInput
  }

  export type PinnedUserListingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
  }

  export type PinnedUserListingUpdateManyMutationInput = {

  }

  export type PinnedUserListingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
  }

  export type CouponsForUserCreateInput = {
    User?: UserCreateNestedOneWithoutCouponsForUserInput
    Coupons?: CouponCreateNestedOneWithoutCouponsUsedByUserInput
    used?: boolean
  }

  export type CouponsForUserUncheckedCreateInput = {
    id?: number
    userId?: number | null
    couponsName?: string | null
    used?: boolean
  }

  export type CouponsForUserUpdateInput = {
    User?: UserUpdateOneWithoutCouponsForUserNestedInput
    Coupons?: CouponUpdateOneWithoutCouponsUsedByUserNestedInput
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponsForUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    couponsName?: NullableStringFieldUpdateOperationsInput | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponsForUserUpdateManyMutationInput = {
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponsForUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    couponsName?: NullableStringFieldUpdateOperationsInput | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponCreateInput = {
    name: string
    listing?: ListingCreateNestedOneWithoutCouponsInput
    description: string
    expired?: boolean
    email: string
    couponsUsedByUser?: CouponsForUserCreateNestedManyWithoutCouponsInput
  }

  export type CouponUncheckedCreateInput = {
    id?: number
    name: string
    listingId?: number | null
    description: string
    expired?: boolean
    email: string
    couponsUsedByUser?: CouponsForUserUncheckedCreateNestedManyWithoutCouponsInput
  }

  export type CouponUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    listing?: ListingUpdateOneWithoutCouponsNestedInput
    description?: StringFieldUpdateOperationsInput | string
    expired?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    couponsUsedByUser?: CouponsForUserUpdateManyWithoutCouponsNestedInput
  }

  export type CouponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    expired?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    couponsUsedByUser?: CouponsForUserUncheckedUpdateManyWithoutCouponsNestedInput
  }

  export type CouponUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expired?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CouponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    expired?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ListingCreateInput = {
    name: string
    address: string
    city: string
    zipcode: string
    displayTitle: string
    subTitle?: string | null
    category?: string | null
    attributes?: string | null
    description: string
    email: string
    phone: string
    website: string
    image1: string
    image2?: string | null
    image3?: string | null
    image4?: string | null
    coupons?: CouponCreateNestedManyWithoutListingInput
    PinnedUserListing?: PinnedUserListingCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    city: string
    zipcode: string
    displayTitle: string
    subTitle?: string | null
    category?: string | null
    attributes?: string | null
    description: string
    email: string
    phone: string
    website: string
    image1: string
    image2?: string | null
    image3?: string | null
    image4?: string | null
    coupons?: CouponUncheckedCreateNestedManyWithoutListingInput
    PinnedUserListing?: PinnedUserListingUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    displayTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    image1?: StringFieldUpdateOperationsInput | string
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    coupons?: CouponUpdateManyWithoutListingNestedInput
    PinnedUserListing?: PinnedUserListingUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    displayTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    image1?: StringFieldUpdateOperationsInput | string
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    coupons?: CouponUncheckedUpdateManyWithoutListingNestedInput
    PinnedUserListing?: PinnedUserListingUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    displayTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    image1?: StringFieldUpdateOperationsInput | string
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    displayTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    image1?: StringFieldUpdateOperationsInput | string
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type CouponsForUserListRelationFilter = {
    every?: CouponsForUserWhereInput
    some?: CouponsForUserWhereInput
    none?: CouponsForUserWhereInput
  }

  export type PinnedUserListingListRelationFilter = {
    every?: PinnedUserListingWhereInput
    some?: PinnedUserListingWhereInput
    none?: PinnedUserListingWhereInput
  }

  export type CouponsForUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PinnedUserListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
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
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
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
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ListingRelationFilter = {
    is?: ListingWhereInput | null
    isNot?: ListingWhereInput | null
  }

  export type PinnedUserListingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
  }

  export type PinnedUserListingAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
  }

  export type PinnedUserListingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
  }

  export type PinnedUserListingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
  }

  export type PinnedUserListingSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    listingId?: SortOrder
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

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type CouponsForUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    couponsName?: SortOrder
    used?: SortOrder
  }

  export type CouponsForUserAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CouponsForUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    couponsName?: SortOrder
    used?: SortOrder
  }

  export type CouponsForUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    couponsName?: SortOrder
    used?: SortOrder
  }

  export type CouponsForUserSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    listingId?: SortOrder
    description?: SortOrder
    expired?: SortOrder
    email?: SortOrder
  }

  export type CouponAvgOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    listingId?: SortOrder
    description?: SortOrder
    expired?: SortOrder
    email?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    listingId?: SortOrder
    description?: SortOrder
    expired?: SortOrder
    email?: SortOrder
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
    city?: SortOrder
    zipcode?: SortOrder
    displayTitle?: SortOrder
    subTitle?: SortOrder
    category?: SortOrder
    attributes?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    image1?: SortOrder
    image2?: SortOrder
    image3?: SortOrder
    image4?: SortOrder
  }

  export type ListingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ListingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    displayTitle?: SortOrder
    subTitle?: SortOrder
    category?: SortOrder
    attributes?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    image1?: SortOrder
    image2?: SortOrder
    image3?: SortOrder
    image4?: SortOrder
  }

  export type ListingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    displayTitle?: SortOrder
    subTitle?: SortOrder
    category?: SortOrder
    attributes?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    image1?: SortOrder
    image2?: SortOrder
    image3?: SortOrder
    image4?: SortOrder
  }

  export type ListingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CouponsForUserCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CouponsForUserCreateWithoutUserInput>, Enumerable<CouponsForUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CouponsForUserCreateOrConnectWithoutUserInput>
    connect?: Enumerable<CouponsForUserWhereUniqueInput>
  }

  export type PinnedUserListingCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PinnedUserListingCreateWithoutUserInput>, Enumerable<PinnedUserListingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PinnedUserListingCreateOrConnectWithoutUserInput>
    connect?: Enumerable<PinnedUserListingWhereUniqueInput>
  }

  export type CouponsForUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CouponsForUserCreateWithoutUserInput>, Enumerable<CouponsForUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CouponsForUserCreateOrConnectWithoutUserInput>
    connect?: Enumerable<CouponsForUserWhereUniqueInput>
  }

  export type PinnedUserListingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PinnedUserListingCreateWithoutUserInput>, Enumerable<PinnedUserListingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PinnedUserListingCreateOrConnectWithoutUserInput>
    connect?: Enumerable<PinnedUserListingWhereUniqueInput>
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

  export type CouponsForUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CouponsForUserCreateWithoutUserInput>, Enumerable<CouponsForUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CouponsForUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CouponsForUserUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<CouponsForUserWhereUniqueInput>
    disconnect?: Enumerable<CouponsForUserWhereUniqueInput>
    delete?: Enumerable<CouponsForUserWhereUniqueInput>
    connect?: Enumerable<CouponsForUserWhereUniqueInput>
    update?: Enumerable<CouponsForUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CouponsForUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CouponsForUserScalarWhereInput>
  }

  export type PinnedUserListingUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PinnedUserListingCreateWithoutUserInput>, Enumerable<PinnedUserListingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PinnedUserListingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PinnedUserListingUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<PinnedUserListingWhereUniqueInput>
    disconnect?: Enumerable<PinnedUserListingWhereUniqueInput>
    delete?: Enumerable<PinnedUserListingWhereUniqueInput>
    connect?: Enumerable<PinnedUserListingWhereUniqueInput>
    update?: Enumerable<PinnedUserListingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PinnedUserListingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PinnedUserListingScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CouponsForUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CouponsForUserCreateWithoutUserInput>, Enumerable<CouponsForUserUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CouponsForUserCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CouponsForUserUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<CouponsForUserWhereUniqueInput>
    disconnect?: Enumerable<CouponsForUserWhereUniqueInput>
    delete?: Enumerable<CouponsForUserWhereUniqueInput>
    connect?: Enumerable<CouponsForUserWhereUniqueInput>
    update?: Enumerable<CouponsForUserUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CouponsForUserUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CouponsForUserScalarWhereInput>
  }

  export type PinnedUserListingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PinnedUserListingCreateWithoutUserInput>, Enumerable<PinnedUserListingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PinnedUserListingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PinnedUserListingUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<PinnedUserListingWhereUniqueInput>
    disconnect?: Enumerable<PinnedUserListingWhereUniqueInput>
    delete?: Enumerable<PinnedUserListingWhereUniqueInput>
    connect?: Enumerable<PinnedUserListingWhereUniqueInput>
    update?: Enumerable<PinnedUserListingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PinnedUserListingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PinnedUserListingScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutPinnedUserListingInput = {
    create?: XOR<UserCreateWithoutPinnedUserListingInput, UserUncheckedCreateWithoutPinnedUserListingInput>
    connectOrCreate?: UserCreateOrConnectWithoutPinnedUserListingInput
    connect?: UserWhereUniqueInput
  }

  export type ListingCreateNestedOneWithoutPinnedUserListingInput = {
    create?: XOR<ListingCreateWithoutPinnedUserListingInput, ListingUncheckedCreateWithoutPinnedUserListingInput>
    connectOrCreate?: ListingCreateOrConnectWithoutPinnedUserListingInput
    connect?: ListingWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPinnedUserListingNestedInput = {
    create?: XOR<UserCreateWithoutPinnedUserListingInput, UserUncheckedCreateWithoutPinnedUserListingInput>
    connectOrCreate?: UserCreateOrConnectWithoutPinnedUserListingInput
    upsert?: UserUpsertWithoutPinnedUserListingInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPinnedUserListingInput, UserUncheckedUpdateWithoutPinnedUserListingInput>
  }

  export type ListingUpdateOneRequiredWithoutPinnedUserListingNestedInput = {
    create?: XOR<ListingCreateWithoutPinnedUserListingInput, ListingUncheckedCreateWithoutPinnedUserListingInput>
    connectOrCreate?: ListingCreateOrConnectWithoutPinnedUserListingInput
    upsert?: ListingUpsertWithoutPinnedUserListingInput
    connect?: ListingWhereUniqueInput
    update?: XOR<ListingUpdateWithoutPinnedUserListingInput, ListingUncheckedUpdateWithoutPinnedUserListingInput>
  }

  export type UserCreateNestedOneWithoutCouponsForUserInput = {
    create?: XOR<UserCreateWithoutCouponsForUserInput, UserUncheckedCreateWithoutCouponsForUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponsForUserInput
    connect?: UserWhereUniqueInput
  }

  export type CouponCreateNestedOneWithoutCouponsUsedByUserInput = {
    create?: XOR<CouponCreateWithoutCouponsUsedByUserInput, CouponUncheckedCreateWithoutCouponsUsedByUserInput>
    connectOrCreate?: CouponCreateOrConnectWithoutCouponsUsedByUserInput
    connect?: CouponWhereUniqueInput
  }

  export type UserUpdateOneWithoutCouponsForUserNestedInput = {
    create?: XOR<UserCreateWithoutCouponsForUserInput, UserUncheckedCreateWithoutCouponsForUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponsForUserInput
    upsert?: UserUpsertWithoutCouponsForUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCouponsForUserInput, UserUncheckedUpdateWithoutCouponsForUserInput>
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type CouponsForUserCreateNestedManyWithoutCouponsInput = {
    create?: XOR<Enumerable<CouponsForUserCreateWithoutCouponsInput>, Enumerable<CouponsForUserUncheckedCreateWithoutCouponsInput>>
    connectOrCreate?: Enumerable<CouponsForUserCreateOrConnectWithoutCouponsInput>
    connect?: Enumerable<CouponsForUserWhereUniqueInput>
  }

  export type CouponsForUserUncheckedCreateNestedManyWithoutCouponsInput = {
    create?: XOR<Enumerable<CouponsForUserCreateWithoutCouponsInput>, Enumerable<CouponsForUserUncheckedCreateWithoutCouponsInput>>
    connectOrCreate?: Enumerable<CouponsForUserCreateOrConnectWithoutCouponsInput>
    connect?: Enumerable<CouponsForUserWhereUniqueInput>
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

  export type CouponsForUserUpdateManyWithoutCouponsNestedInput = {
    create?: XOR<Enumerable<CouponsForUserCreateWithoutCouponsInput>, Enumerable<CouponsForUserUncheckedCreateWithoutCouponsInput>>
    connectOrCreate?: Enumerable<CouponsForUserCreateOrConnectWithoutCouponsInput>
    upsert?: Enumerable<CouponsForUserUpsertWithWhereUniqueWithoutCouponsInput>
    set?: Enumerable<CouponsForUserWhereUniqueInput>
    disconnect?: Enumerable<CouponsForUserWhereUniqueInput>
    delete?: Enumerable<CouponsForUserWhereUniqueInput>
    connect?: Enumerable<CouponsForUserWhereUniqueInput>
    update?: Enumerable<CouponsForUserUpdateWithWhereUniqueWithoutCouponsInput>
    updateMany?: Enumerable<CouponsForUserUpdateManyWithWhereWithoutCouponsInput>
    deleteMany?: Enumerable<CouponsForUserScalarWhereInput>
  }

  export type CouponsForUserUncheckedUpdateManyWithoutCouponsNestedInput = {
    create?: XOR<Enumerable<CouponsForUserCreateWithoutCouponsInput>, Enumerable<CouponsForUserUncheckedCreateWithoutCouponsInput>>
    connectOrCreate?: Enumerable<CouponsForUserCreateOrConnectWithoutCouponsInput>
    upsert?: Enumerable<CouponsForUserUpsertWithWhereUniqueWithoutCouponsInput>
    set?: Enumerable<CouponsForUserWhereUniqueInput>
    disconnect?: Enumerable<CouponsForUserWhereUniqueInput>
    delete?: Enumerable<CouponsForUserWhereUniqueInput>
    connect?: Enumerable<CouponsForUserWhereUniqueInput>
    update?: Enumerable<CouponsForUserUpdateWithWhereUniqueWithoutCouponsInput>
    updateMany?: Enumerable<CouponsForUserUpdateManyWithWhereWithoutCouponsInput>
    deleteMany?: Enumerable<CouponsForUserScalarWhereInput>
  }

  export type CouponCreateNestedManyWithoutListingInput = {
    create?: XOR<Enumerable<CouponCreateWithoutListingInput>, Enumerable<CouponUncheckedCreateWithoutListingInput>>
    connectOrCreate?: Enumerable<CouponCreateOrConnectWithoutListingInput>
    connect?: Enumerable<CouponWhereUniqueInput>
  }

  export type PinnedUserListingCreateNestedManyWithoutListingInput = {
    create?: XOR<Enumerable<PinnedUserListingCreateWithoutListingInput>, Enumerable<PinnedUserListingUncheckedCreateWithoutListingInput>>
    connectOrCreate?: Enumerable<PinnedUserListingCreateOrConnectWithoutListingInput>
    connect?: Enumerable<PinnedUserListingWhereUniqueInput>
  }

  export type CouponUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<Enumerable<CouponCreateWithoutListingInput>, Enumerable<CouponUncheckedCreateWithoutListingInput>>
    connectOrCreate?: Enumerable<CouponCreateOrConnectWithoutListingInput>
    connect?: Enumerable<CouponWhereUniqueInput>
  }

  export type PinnedUserListingUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<Enumerable<PinnedUserListingCreateWithoutListingInput>, Enumerable<PinnedUserListingUncheckedCreateWithoutListingInput>>
    connectOrCreate?: Enumerable<PinnedUserListingCreateOrConnectWithoutListingInput>
    connect?: Enumerable<PinnedUserListingWhereUniqueInput>
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

  export type PinnedUserListingUpdateManyWithoutListingNestedInput = {
    create?: XOR<Enumerable<PinnedUserListingCreateWithoutListingInput>, Enumerable<PinnedUserListingUncheckedCreateWithoutListingInput>>
    connectOrCreate?: Enumerable<PinnedUserListingCreateOrConnectWithoutListingInput>
    upsert?: Enumerable<PinnedUserListingUpsertWithWhereUniqueWithoutListingInput>
    set?: Enumerable<PinnedUserListingWhereUniqueInput>
    disconnect?: Enumerable<PinnedUserListingWhereUniqueInput>
    delete?: Enumerable<PinnedUserListingWhereUniqueInput>
    connect?: Enumerable<PinnedUserListingWhereUniqueInput>
    update?: Enumerable<PinnedUserListingUpdateWithWhereUniqueWithoutListingInput>
    updateMany?: Enumerable<PinnedUserListingUpdateManyWithWhereWithoutListingInput>
    deleteMany?: Enumerable<PinnedUserListingScalarWhereInput>
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

  export type PinnedUserListingUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<Enumerable<PinnedUserListingCreateWithoutListingInput>, Enumerable<PinnedUserListingUncheckedCreateWithoutListingInput>>
    connectOrCreate?: Enumerable<PinnedUserListingCreateOrConnectWithoutListingInput>
    upsert?: Enumerable<PinnedUserListingUpsertWithWhereUniqueWithoutListingInput>
    set?: Enumerable<PinnedUserListingWhereUniqueInput>
    disconnect?: Enumerable<PinnedUserListingWhereUniqueInput>
    delete?: Enumerable<PinnedUserListingWhereUniqueInput>
    connect?: Enumerable<PinnedUserListingWhereUniqueInput>
    update?: Enumerable<PinnedUserListingUpdateWithWhereUniqueWithoutListingInput>
    updateMany?: Enumerable<PinnedUserListingUpdateManyWithWhereWithoutListingInput>
    deleteMany?: Enumerable<PinnedUserListingScalarWhereInput>
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
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

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type CouponsForUserCreateWithoutUserInput = {
    Coupons?: CouponCreateNestedOneWithoutCouponsUsedByUserInput
    used?: boolean
  }

  export type CouponsForUserUncheckedCreateWithoutUserInput = {
    id?: number
    couponsName?: string | null
    used?: boolean
  }

  export type CouponsForUserCreateOrConnectWithoutUserInput = {
    where: CouponsForUserWhereUniqueInput
    create: XOR<CouponsForUserCreateWithoutUserInput, CouponsForUserUncheckedCreateWithoutUserInput>
  }

  export type PinnedUserListingCreateWithoutUserInput = {
    listing: ListingCreateNestedOneWithoutPinnedUserListingInput
  }

  export type PinnedUserListingUncheckedCreateWithoutUserInput = {
    id?: number
    listingId: number
  }

  export type PinnedUserListingCreateOrConnectWithoutUserInput = {
    where: PinnedUserListingWhereUniqueInput
    create: XOR<PinnedUserListingCreateWithoutUserInput, PinnedUserListingUncheckedCreateWithoutUserInput>
  }

  export type CouponsForUserUpsertWithWhereUniqueWithoutUserInput = {
    where: CouponsForUserWhereUniqueInput
    update: XOR<CouponsForUserUpdateWithoutUserInput, CouponsForUserUncheckedUpdateWithoutUserInput>
    create: XOR<CouponsForUserCreateWithoutUserInput, CouponsForUserUncheckedCreateWithoutUserInput>
  }

  export type CouponsForUserUpdateWithWhereUniqueWithoutUserInput = {
    where: CouponsForUserWhereUniqueInput
    data: XOR<CouponsForUserUpdateWithoutUserInput, CouponsForUserUncheckedUpdateWithoutUserInput>
  }

  export type CouponsForUserUpdateManyWithWhereWithoutUserInput = {
    where: CouponsForUserScalarWhereInput
    data: XOR<CouponsForUserUpdateManyMutationInput, CouponsForUserUncheckedUpdateManyWithoutCouponsForUserInput>
  }

  export type CouponsForUserScalarWhereInput = {
    AND?: Enumerable<CouponsForUserScalarWhereInput>
    OR?: Enumerable<CouponsForUserScalarWhereInput>
    NOT?: Enumerable<CouponsForUserScalarWhereInput>
    id?: IntFilter | number
    userId?: IntNullableFilter | number | null
    couponsName?: StringNullableFilter | string | null
    used?: BoolFilter | boolean
  }

  export type PinnedUserListingUpsertWithWhereUniqueWithoutUserInput = {
    where: PinnedUserListingWhereUniqueInput
    update: XOR<PinnedUserListingUpdateWithoutUserInput, PinnedUserListingUncheckedUpdateWithoutUserInput>
    create: XOR<PinnedUserListingCreateWithoutUserInput, PinnedUserListingUncheckedCreateWithoutUserInput>
  }

  export type PinnedUserListingUpdateWithWhereUniqueWithoutUserInput = {
    where: PinnedUserListingWhereUniqueInput
    data: XOR<PinnedUserListingUpdateWithoutUserInput, PinnedUserListingUncheckedUpdateWithoutUserInput>
  }

  export type PinnedUserListingUpdateManyWithWhereWithoutUserInput = {
    where: PinnedUserListingScalarWhereInput
    data: XOR<PinnedUserListingUpdateManyMutationInput, PinnedUserListingUncheckedUpdateManyWithoutPinnedUserListingInput>
  }

  export type PinnedUserListingScalarWhereInput = {
    AND?: Enumerable<PinnedUserListingScalarWhereInput>
    OR?: Enumerable<PinnedUserListingScalarWhereInput>
    NOT?: Enumerable<PinnedUserListingScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    listingId?: IntFilter | number
  }

  export type UserCreateWithoutPinnedUserListingInput = {
    createdAt?: Date | string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    role?: string
    couponsForUser?: CouponsForUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPinnedUserListingInput = {
    id?: number
    createdAt?: Date | string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    role?: string
    couponsForUser?: CouponsForUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPinnedUserListingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPinnedUserListingInput, UserUncheckedCreateWithoutPinnedUserListingInput>
  }

  export type ListingCreateWithoutPinnedUserListingInput = {
    name: string
    address: string
    city: string
    zipcode: string
    displayTitle: string
    subTitle?: string | null
    category?: string | null
    attributes?: string | null
    description: string
    email: string
    phone: string
    website: string
    image1: string
    image2?: string | null
    image3?: string | null
    image4?: string | null
    coupons?: CouponCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutPinnedUserListingInput = {
    id?: number
    name: string
    address: string
    city: string
    zipcode: string
    displayTitle: string
    subTitle?: string | null
    category?: string | null
    attributes?: string | null
    description: string
    email: string
    phone: string
    website: string
    image1: string
    image2?: string | null
    image3?: string | null
    image4?: string | null
    coupons?: CouponUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutPinnedUserListingInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutPinnedUserListingInput, ListingUncheckedCreateWithoutPinnedUserListingInput>
  }

  export type UserUpsertWithoutPinnedUserListingInput = {
    update: XOR<UserUpdateWithoutPinnedUserListingInput, UserUncheckedUpdateWithoutPinnedUserListingInput>
    create: XOR<UserCreateWithoutPinnedUserListingInput, UserUncheckedCreateWithoutPinnedUserListingInput>
  }

  export type UserUpdateWithoutPinnedUserListingInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    couponsForUser?: CouponsForUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPinnedUserListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    couponsForUser?: CouponsForUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ListingUpsertWithoutPinnedUserListingInput = {
    update: XOR<ListingUpdateWithoutPinnedUserListingInput, ListingUncheckedUpdateWithoutPinnedUserListingInput>
    create: XOR<ListingCreateWithoutPinnedUserListingInput, ListingUncheckedCreateWithoutPinnedUserListingInput>
  }

  export type ListingUpdateWithoutPinnedUserListingInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    displayTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    image1?: StringFieldUpdateOperationsInput | string
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    coupons?: CouponUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutPinnedUserListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    displayTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    image1?: StringFieldUpdateOperationsInput | string
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    coupons?: CouponUncheckedUpdateManyWithoutListingNestedInput
  }

  export type UserCreateWithoutCouponsForUserInput = {
    createdAt?: Date | string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    role?: string
    PinnedUserListing?: PinnedUserListingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCouponsForUserInput = {
    id?: number
    createdAt?: Date | string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    role?: string
    PinnedUserListing?: PinnedUserListingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCouponsForUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCouponsForUserInput, UserUncheckedCreateWithoutCouponsForUserInput>
  }

  export type CouponCreateWithoutCouponsUsedByUserInput = {
    name: string
    listing?: ListingCreateNestedOneWithoutCouponsInput
    description: string
    expired?: boolean
    email: string
  }

  export type CouponUncheckedCreateWithoutCouponsUsedByUserInput = {
    id?: number
    name: string
    listingId?: number | null
    description: string
    expired?: boolean
    email: string
  }

  export type CouponCreateOrConnectWithoutCouponsUsedByUserInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutCouponsUsedByUserInput, CouponUncheckedCreateWithoutCouponsUsedByUserInput>
  }

  export type UserUpsertWithoutCouponsForUserInput = {
    update: XOR<UserUpdateWithoutCouponsForUserInput, UserUncheckedUpdateWithoutCouponsForUserInput>
    create: XOR<UserCreateWithoutCouponsForUserInput, UserUncheckedCreateWithoutCouponsForUserInput>
  }

  export type UserUpdateWithoutCouponsForUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    PinnedUserListing?: PinnedUserListingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCouponsForUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    PinnedUserListing?: PinnedUserListingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CouponUpsertWithoutCouponsUsedByUserInput = {
    update: XOR<CouponUpdateWithoutCouponsUsedByUserInput, CouponUncheckedUpdateWithoutCouponsUsedByUserInput>
    create: XOR<CouponCreateWithoutCouponsUsedByUserInput, CouponUncheckedCreateWithoutCouponsUsedByUserInput>
  }

  export type CouponUpdateWithoutCouponsUsedByUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    listing?: ListingUpdateOneWithoutCouponsNestedInput
    description?: StringFieldUpdateOperationsInput | string
    expired?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CouponUncheckedUpdateWithoutCouponsUsedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listingId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    expired?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ListingCreateWithoutCouponsInput = {
    name: string
    address: string
    city: string
    zipcode: string
    displayTitle: string
    subTitle?: string | null
    category?: string | null
    attributes?: string | null
    description: string
    email: string
    phone: string
    website: string
    image1: string
    image2?: string | null
    image3?: string | null
    image4?: string | null
    PinnedUserListing?: PinnedUserListingCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutCouponsInput = {
    id?: number
    name: string
    address: string
    city: string
    zipcode: string
    displayTitle: string
    subTitle?: string | null
    category?: string | null
    attributes?: string | null
    description: string
    email: string
    phone: string
    website: string
    image1: string
    image2?: string | null
    image3?: string | null
    image4?: string | null
    PinnedUserListing?: PinnedUserListingUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutCouponsInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutCouponsInput, ListingUncheckedCreateWithoutCouponsInput>
  }

  export type CouponsForUserCreateWithoutCouponsInput = {
    User?: UserCreateNestedOneWithoutCouponsForUserInput
    used?: boolean
  }

  export type CouponsForUserUncheckedCreateWithoutCouponsInput = {
    id?: number
    userId?: number | null
    used?: boolean
  }

  export type CouponsForUserCreateOrConnectWithoutCouponsInput = {
    where: CouponsForUserWhereUniqueInput
    create: XOR<CouponsForUserCreateWithoutCouponsInput, CouponsForUserUncheckedCreateWithoutCouponsInput>
  }

  export type ListingUpsertWithoutCouponsInput = {
    update: XOR<ListingUpdateWithoutCouponsInput, ListingUncheckedUpdateWithoutCouponsInput>
    create: XOR<ListingCreateWithoutCouponsInput, ListingUncheckedCreateWithoutCouponsInput>
  }

  export type ListingUpdateWithoutCouponsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    displayTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    image1?: StringFieldUpdateOperationsInput | string
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    PinnedUserListing?: PinnedUserListingUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutCouponsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    displayTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    image1?: StringFieldUpdateOperationsInput | string
    image2?: NullableStringFieldUpdateOperationsInput | string | null
    image3?: NullableStringFieldUpdateOperationsInput | string | null
    image4?: NullableStringFieldUpdateOperationsInput | string | null
    PinnedUserListing?: PinnedUserListingUncheckedUpdateManyWithoutListingNestedInput
  }

  export type CouponsForUserUpsertWithWhereUniqueWithoutCouponsInput = {
    where: CouponsForUserWhereUniqueInput
    update: XOR<CouponsForUserUpdateWithoutCouponsInput, CouponsForUserUncheckedUpdateWithoutCouponsInput>
    create: XOR<CouponsForUserCreateWithoutCouponsInput, CouponsForUserUncheckedCreateWithoutCouponsInput>
  }

  export type CouponsForUserUpdateWithWhereUniqueWithoutCouponsInput = {
    where: CouponsForUserWhereUniqueInput
    data: XOR<CouponsForUserUpdateWithoutCouponsInput, CouponsForUserUncheckedUpdateWithoutCouponsInput>
  }

  export type CouponsForUserUpdateManyWithWhereWithoutCouponsInput = {
    where: CouponsForUserScalarWhereInput
    data: XOR<CouponsForUserUpdateManyMutationInput, CouponsForUserUncheckedUpdateManyWithoutCouponsUsedByUserInput>
  }

  export type CouponCreateWithoutListingInput = {
    name: string
    description: string
    expired?: boolean
    email: string
    couponsUsedByUser?: CouponsForUserCreateNestedManyWithoutCouponsInput
  }

  export type CouponUncheckedCreateWithoutListingInput = {
    id?: number
    name: string
    description: string
    expired?: boolean
    email: string
    couponsUsedByUser?: CouponsForUserUncheckedCreateNestedManyWithoutCouponsInput
  }

  export type CouponCreateOrConnectWithoutListingInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutListingInput, CouponUncheckedCreateWithoutListingInput>
  }

  export type PinnedUserListingCreateWithoutListingInput = {
    user: UserCreateNestedOneWithoutPinnedUserListingInput
  }

  export type PinnedUserListingUncheckedCreateWithoutListingInput = {
    id?: number
    userId: number
  }

  export type PinnedUserListingCreateOrConnectWithoutListingInput = {
    where: PinnedUserListingWhereUniqueInput
    create: XOR<PinnedUserListingCreateWithoutListingInput, PinnedUserListingUncheckedCreateWithoutListingInput>
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
    description?: StringFilter | string
    expired?: BoolFilter | boolean
    email?: StringFilter | string
  }

  export type PinnedUserListingUpsertWithWhereUniqueWithoutListingInput = {
    where: PinnedUserListingWhereUniqueInput
    update: XOR<PinnedUserListingUpdateWithoutListingInput, PinnedUserListingUncheckedUpdateWithoutListingInput>
    create: XOR<PinnedUserListingCreateWithoutListingInput, PinnedUserListingUncheckedCreateWithoutListingInput>
  }

  export type PinnedUserListingUpdateWithWhereUniqueWithoutListingInput = {
    where: PinnedUserListingWhereUniqueInput
    data: XOR<PinnedUserListingUpdateWithoutListingInput, PinnedUserListingUncheckedUpdateWithoutListingInput>
  }

  export type PinnedUserListingUpdateManyWithWhereWithoutListingInput = {
    where: PinnedUserListingScalarWhereInput
    data: XOR<PinnedUserListingUpdateManyMutationInput, PinnedUserListingUncheckedUpdateManyWithoutPinnedUserListingInput>
  }

  export type CouponsForUserUpdateWithoutUserInput = {
    Coupons?: CouponUpdateOneWithoutCouponsUsedByUserNestedInput
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponsForUserUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    couponsName?: NullableStringFieldUpdateOperationsInput | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponsForUserUncheckedUpdateManyWithoutCouponsForUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    couponsName?: NullableStringFieldUpdateOperationsInput | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PinnedUserListingUpdateWithoutUserInput = {
    listing?: ListingUpdateOneRequiredWithoutPinnedUserListingNestedInput
  }

  export type PinnedUserListingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
  }

  export type PinnedUserListingUncheckedUpdateManyWithoutPinnedUserListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    listingId?: IntFieldUpdateOperationsInput | number
  }

  export type CouponsForUserUpdateWithoutCouponsInput = {
    User?: UserUpdateOneWithoutCouponsForUserNestedInput
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponsForUserUncheckedUpdateWithoutCouponsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponsForUserUncheckedUpdateManyWithoutCouponsUsedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CouponUpdateWithoutListingInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expired?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    couponsUsedByUser?: CouponsForUserUpdateManyWithoutCouponsNestedInput
  }

  export type CouponUncheckedUpdateWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expired?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    couponsUsedByUser?: CouponsForUserUncheckedUpdateManyWithoutCouponsNestedInput
  }

  export type CouponUncheckedUpdateManyWithoutCouponsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expired?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PinnedUserListingUpdateWithoutListingInput = {
    user?: UserUpdateOneRequiredWithoutPinnedUserListingNestedInput
  }

  export type PinnedUserListingUncheckedUpdateWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
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