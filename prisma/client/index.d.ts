
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = {
  id: number
  name: string
  username: string
  firebaseUid: string
  subscription: string | null
  mobileNumber: string | null
  userLink: string | null
  job: string | null
  education: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model EventType
 * 
 */
export type EventType = {
  id: number
  name: string
  userId: number
  description: string
  price: number
  timeDuration: number
  availabilityScheduleId: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model DaySlot
 * 
 */
export type DaySlot = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model DaySlotOnDateSlot
 * 
 */
export type DaySlotOnDateSlot = {
  id: number
  daySlotId: number
  dateSlotId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model EventTypeOnDaySlot
 * 
 */
export type EventTypeOnDaySlot = {
  id: number
  eventTypeId: number
  daySlotId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Location
 * 
 */
export type Location = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model EventTypeOnLocation
 * 
 */
export type EventTypeOnLocation = {
  id: number
  eventTypeId: number
  locationId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model AvailabilitySchedule
 * 
 */
export type AvailabilitySchedule = {
  id: number
  name: string
  timezone: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model DateSlot
 * 
 */
export type DateSlot = {
  id: number
  availabilityScheduleId: number | null
  status: string
  date: Date
  custormerId: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TimeSelect
 * 
 */
export type TimeSelect = {
  id: number
  startTime: number
  endTime: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Customer
 * 
 */
export type Customer = {
  id: number
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Billing
 * 
 */
export type Billing = {
  id: number
  subscriptionMonth: number
  subscriptionPrice: number
  userId: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model GroupMeeting
 * 
 */
export type GroupMeeting = {
  id: number
  locationId: number
  customerId: number
  totalPrice: number
  timezone: string
  eventTypeId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model UserOnGroupMeeting
 * 
 */
export type UserOnGroupMeeting = {
  id: number
  userId: number
  groupMeetingId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model DateSlotOnTimeSelect
 * 
 */
export type DateSlotOnTimeSelect = {
  id: number
  dateSlotId: number
  timeSelectId: number
  createdAt: Date
  updatedAt: Date
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

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
   * `prisma.eventType`: Exposes CRUD operations for the **EventType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTypes
    * const eventTypes = await prisma.eventType.findMany()
    * ```
    */
  get eventType(): Prisma.EventTypeDelegate<GlobalReject>;

  /**
   * `prisma.daySlot`: Exposes CRUD operations for the **DaySlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DaySlots
    * const daySlots = await prisma.daySlot.findMany()
    * ```
    */
  get daySlot(): Prisma.DaySlotDelegate<GlobalReject>;

  /**
   * `prisma.daySlotOnDateSlot`: Exposes CRUD operations for the **DaySlotOnDateSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DaySlotOnDateSlots
    * const daySlotOnDateSlots = await prisma.daySlotOnDateSlot.findMany()
    * ```
    */
  get daySlotOnDateSlot(): Prisma.DaySlotOnDateSlotDelegate<GlobalReject>;

  /**
   * `prisma.eventTypeOnDaySlot`: Exposes CRUD operations for the **EventTypeOnDaySlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTypeOnDaySlots
    * const eventTypeOnDaySlots = await prisma.eventTypeOnDaySlot.findMany()
    * ```
    */
  get eventTypeOnDaySlot(): Prisma.EventTypeOnDaySlotDelegate<GlobalReject>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<GlobalReject>;

  /**
   * `prisma.eventTypeOnLocation`: Exposes CRUD operations for the **EventTypeOnLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTypeOnLocations
    * const eventTypeOnLocations = await prisma.eventTypeOnLocation.findMany()
    * ```
    */
  get eventTypeOnLocation(): Prisma.EventTypeOnLocationDelegate<GlobalReject>;

  /**
   * `prisma.availabilitySchedule`: Exposes CRUD operations for the **AvailabilitySchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilitySchedules
    * const availabilitySchedules = await prisma.availabilitySchedule.findMany()
    * ```
    */
  get availabilitySchedule(): Prisma.AvailabilityScheduleDelegate<GlobalReject>;

  /**
   * `prisma.dateSlot`: Exposes CRUD operations for the **DateSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DateSlots
    * const dateSlots = await prisma.dateSlot.findMany()
    * ```
    */
  get dateSlot(): Prisma.DateSlotDelegate<GlobalReject>;

  /**
   * `prisma.timeSelect`: Exposes CRUD operations for the **TimeSelect** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeSelects
    * const timeSelects = await prisma.timeSelect.findMany()
    * ```
    */
  get timeSelect(): Prisma.TimeSelectDelegate<GlobalReject>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<GlobalReject>;

  /**
   * `prisma.billing`: Exposes CRUD operations for the **Billing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Billings
    * const billings = await prisma.billing.findMany()
    * ```
    */
  get billing(): Prisma.BillingDelegate<GlobalReject>;

  /**
   * `prisma.groupMeeting`: Exposes CRUD operations for the **GroupMeeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMeetings
    * const groupMeetings = await prisma.groupMeeting.findMany()
    * ```
    */
  get groupMeeting(): Prisma.GroupMeetingDelegate<GlobalReject>;

  /**
   * `prisma.userOnGroupMeeting`: Exposes CRUD operations for the **UserOnGroupMeeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOnGroupMeetings
    * const userOnGroupMeetings = await prisma.userOnGroupMeeting.findMany()
    * ```
    */
  get userOnGroupMeeting(): Prisma.UserOnGroupMeetingDelegate<GlobalReject>;

  /**
   * `prisma.dateSlotOnTimeSelect`: Exposes CRUD operations for the **DateSlotOnTimeSelect** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DateSlotOnTimeSelects
    * const dateSlotOnTimeSelects = await prisma.dateSlotOnTimeSelect.findMany()
    * ```
    */
  get dateSlotOnTimeSelect(): Prisma.DateSlotOnTimeSelectDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
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


  export const ModelName: {
    User: 'User',
    EventType: 'EventType',
    DaySlot: 'DaySlot',
    DaySlotOnDateSlot: 'DaySlotOnDateSlot',
    EventTypeOnDaySlot: 'EventTypeOnDaySlot',
    Location: 'Location',
    EventTypeOnLocation: 'EventTypeOnLocation',
    AvailabilitySchedule: 'AvailabilitySchedule',
    DateSlot: 'DateSlot',
    TimeSelect: 'TimeSelect',
    Customer: 'Customer',
    Billing: 'Billing',
    GroupMeeting: 'GroupMeeting',
    UserOnGroupMeeting: 'UserOnGroupMeeting',
    DateSlotOnTimeSelect: 'DateSlotOnTimeSelect'
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
    eventTypes: number
    billings: number
    userOnGroupMeetings: number
  }

  export type UserCountOutputTypeSelect = {
    eventTypes?: boolean
    billings?: boolean
    userOnGroupMeetings?: boolean
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
   * Count Type EventTypeCountOutputType
   */


  export type EventTypeCountOutputType = {
    eventTypeOnLocations: number
    daySlots: number
    groupMeetings: number
  }

  export type EventTypeCountOutputTypeSelect = {
    eventTypeOnLocations?: boolean
    daySlots?: boolean
    groupMeetings?: boolean
  }

  export type EventTypeCountOutputTypeGetPayload<S extends boolean | null | undefined | EventTypeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EventTypeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (EventTypeCountOutputTypeArgs)
    ? EventTypeCountOutputType 
    : S extends { select: any } & (EventTypeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof EventTypeCountOutputType ? EventTypeCountOutputType[P] : never
  } 
      : EventTypeCountOutputType




  // Custom InputTypes

  /**
   * EventTypeCountOutputType without action
   */
  export type EventTypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EventTypeCountOutputType
     */
    select?: EventTypeCountOutputTypeSelect | null
  }



  /**
   * Count Type DaySlotCountOutputType
   */


  export type DaySlotCountOutputType = {
    eventTypeSlots: number
    dateSlots: number
  }

  export type DaySlotCountOutputTypeSelect = {
    eventTypeSlots?: boolean
    dateSlots?: boolean
  }

  export type DaySlotCountOutputTypeGetPayload<S extends boolean | null | undefined | DaySlotCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DaySlotCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DaySlotCountOutputTypeArgs)
    ? DaySlotCountOutputType 
    : S extends { select: any } & (DaySlotCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DaySlotCountOutputType ? DaySlotCountOutputType[P] : never
  } 
      : DaySlotCountOutputType




  // Custom InputTypes

  /**
   * DaySlotCountOutputType without action
   */
  export type DaySlotCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DaySlotCountOutputType
     */
    select?: DaySlotCountOutputTypeSelect | null
  }



  /**
   * Count Type LocationCountOutputType
   */


  export type LocationCountOutputType = {
    eventTypeOnLocations: number
    groupMeetings: number
  }

  export type LocationCountOutputTypeSelect = {
    eventTypeOnLocations?: boolean
    groupMeetings?: boolean
  }

  export type LocationCountOutputTypeGetPayload<S extends boolean | null | undefined | LocationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LocationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LocationCountOutputTypeArgs)
    ? LocationCountOutputType 
    : S extends { select: any } & (LocationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LocationCountOutputType ? LocationCountOutputType[P] : never
  } 
      : LocationCountOutputType




  // Custom InputTypes

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect | null
  }



  /**
   * Count Type AvailabilityScheduleCountOutputType
   */


  export type AvailabilityScheduleCountOutputType = {
    eventTypes: number
    dateSlots: number
  }

  export type AvailabilityScheduleCountOutputTypeSelect = {
    eventTypes?: boolean
    dateSlots?: boolean
  }

  export type AvailabilityScheduleCountOutputTypeGetPayload<S extends boolean | null | undefined | AvailabilityScheduleCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AvailabilityScheduleCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AvailabilityScheduleCountOutputTypeArgs)
    ? AvailabilityScheduleCountOutputType 
    : S extends { select: any } & (AvailabilityScheduleCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AvailabilityScheduleCountOutputType ? AvailabilityScheduleCountOutputType[P] : never
  } 
      : AvailabilityScheduleCountOutputType




  // Custom InputTypes

  /**
   * AvailabilityScheduleCountOutputType without action
   */
  export type AvailabilityScheduleCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AvailabilityScheduleCountOutputType
     */
    select?: AvailabilityScheduleCountOutputTypeSelect | null
  }



  /**
   * Count Type DateSlotCountOutputType
   */


  export type DateSlotCountOutputType = {
    timeSelects: number
    DaySlots: number
  }

  export type DateSlotCountOutputTypeSelect = {
    timeSelects?: boolean
    DaySlots?: boolean
  }

  export type DateSlotCountOutputTypeGetPayload<S extends boolean | null | undefined | DateSlotCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DateSlotCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DateSlotCountOutputTypeArgs)
    ? DateSlotCountOutputType 
    : S extends { select: any } & (DateSlotCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DateSlotCountOutputType ? DateSlotCountOutputType[P] : never
  } 
      : DateSlotCountOutputType




  // Custom InputTypes

  /**
   * DateSlotCountOutputType without action
   */
  export type DateSlotCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DateSlotCountOutputType
     */
    select?: DateSlotCountOutputTypeSelect | null
  }



  /**
   * Count Type TimeSelectCountOutputType
   */


  export type TimeSelectCountOutputType = {
    dateSlots: number
  }

  export type TimeSelectCountOutputTypeSelect = {
    dateSlots?: boolean
  }

  export type TimeSelectCountOutputTypeGetPayload<S extends boolean | null | undefined | TimeSelectCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TimeSelectCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TimeSelectCountOutputTypeArgs)
    ? TimeSelectCountOutputType 
    : S extends { select: any } & (TimeSelectCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TimeSelectCountOutputType ? TimeSelectCountOutputType[P] : never
  } 
      : TimeSelectCountOutputType




  // Custom InputTypes

  /**
   * TimeSelectCountOutputType without action
   */
  export type TimeSelectCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TimeSelectCountOutputType
     */
    select?: TimeSelectCountOutputTypeSelect | null
  }



  /**
   * Count Type CustomerCountOutputType
   */


  export type CustomerCountOutputType = {
    groupMeetings: number
    dateSlots: number
  }

  export type CustomerCountOutputTypeSelect = {
    groupMeetings?: boolean
    dateSlots?: boolean
  }

  export type CustomerCountOutputTypeGetPayload<S extends boolean | null | undefined | CustomerCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CustomerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CustomerCountOutputTypeArgs)
    ? CustomerCountOutputType 
    : S extends { select: any } & (CustomerCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CustomerCountOutputType ? CustomerCountOutputType[P] : never
  } 
      : CustomerCountOutputType




  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect | null
  }



  /**
   * Count Type GroupMeetingCountOutputType
   */


  export type GroupMeetingCountOutputType = {
    userOnGroupMeetings: number
  }

  export type GroupMeetingCountOutputTypeSelect = {
    userOnGroupMeetings?: boolean
  }

  export type GroupMeetingCountOutputTypeGetPayload<S extends boolean | null | undefined | GroupMeetingCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GroupMeetingCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (GroupMeetingCountOutputTypeArgs)
    ? GroupMeetingCountOutputType 
    : S extends { select: any } & (GroupMeetingCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof GroupMeetingCountOutputType ? GroupMeetingCountOutputType[P] : never
  } 
      : GroupMeetingCountOutputType




  // Custom InputTypes

  /**
   * GroupMeetingCountOutputType without action
   */
  export type GroupMeetingCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GroupMeetingCountOutputType
     */
    select?: GroupMeetingCountOutputTypeSelect | null
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
    name: string | null
    username: string | null
    firebaseUid: string | null
    subscription: string | null
    mobileNumber: string | null
    userLink: string | null
    job: string | null
    education: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    firebaseUid: string | null
    subscription: string | null
    mobileNumber: string | null
    userLink: string | null
    job: string | null
    education: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    firebaseUid: number
    subscription: number
    mobileNumber: number
    userLink: number
    job: number
    education: number
    createdAt: number
    updatedAt: number
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
    name?: true
    username?: true
    firebaseUid?: true
    subscription?: true
    mobileNumber?: true
    userLink?: true
    job?: true
    education?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    firebaseUid?: true
    subscription?: true
    mobileNumber?: true
    userLink?: true
    job?: true
    education?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    firebaseUid?: true
    subscription?: true
    mobileNumber?: true
    userLink?: true
    job?: true
    education?: true
    createdAt?: true
    updatedAt?: true
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
    name: string
    username: string
    firebaseUid: string
    subscription: string | null
    mobileNumber: string | null
    userLink: string | null
    job: string | null
    education: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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
    name?: boolean
    username?: boolean
    firebaseUid?: boolean
    subscription?: boolean
    mobileNumber?: boolean
    userLink?: boolean
    job?: boolean
    education?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventTypes?: boolean | User$eventTypesArgs
    billings?: boolean | User$billingsArgs
    userOnGroupMeetings?: boolean | User$userOnGroupMeetingsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    eventTypes?: boolean | User$eventTypesArgs
    billings?: boolean | User$billingsArgs
    userOnGroupMeetings?: boolean | User$userOnGroupMeetingsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'eventTypes' ? Array < EventTypeGetPayload<S['include'][P]>>  :
        P extends 'billings' ? Array < BillingGetPayload<S['include'][P]>>  :
        P extends 'userOnGroupMeetings' ? Array < UserOnGroupMeetingGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'eventTypes' ? Array < EventTypeGetPayload<S['select'][P]>>  :
        P extends 'billings' ? Array < BillingGetPayload<S['select'][P]>>  :
        P extends 'userOnGroupMeetings' ? Array < UserOnGroupMeetingGetPayload<S['select'][P]>>  :
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
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

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
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    eventTypes<T extends User$eventTypesArgs= {}>(args?: Subset<T, User$eventTypesArgs>): Prisma.PrismaPromise<Array<EventTypeGetPayload<T>>| Null>;

    billings<T extends User$billingsArgs= {}>(args?: Subset<T, User$billingsArgs>): Prisma.PrismaPromise<Array<BillingGetPayload<T>>| Null>;

    userOnGroupMeetings<T extends User$userOnGroupMeetingsArgs= {}>(args?: Subset<T, User$userOnGroupMeetingsArgs>): Prisma.PrismaPromise<Array<UserOnGroupMeetingGetPayload<T>>| Null>;

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
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
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
   * User.eventTypes
   */
  export type User$eventTypesArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    where?: EventTypeWhereInput
    orderBy?: Enumerable<EventTypeOrderByWithRelationInput>
    cursor?: EventTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EventTypeScalarFieldEnum>
  }


  /**
   * User.billings
   */
  export type User$billingsArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    where?: BillingWhereInput
    orderBy?: Enumerable<BillingOrderByWithRelationInput>
    cursor?: BillingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BillingScalarFieldEnum>
  }


  /**
   * User.userOnGroupMeetings
   */
  export type User$userOnGroupMeetingsArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    where?: UserOnGroupMeetingWhereInput
    orderBy?: Enumerable<UserOnGroupMeetingOrderByWithRelationInput>
    cursor?: UserOnGroupMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserOnGroupMeetingScalarFieldEnum>
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
   * Model EventType
   */


  export type AggregateEventType = {
    _count: EventTypeCountAggregateOutputType | null
    _avg: EventTypeAvgAggregateOutputType | null
    _sum: EventTypeSumAggregateOutputType | null
    _min: EventTypeMinAggregateOutputType | null
    _max: EventTypeMaxAggregateOutputType | null
  }

  export type EventTypeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
    timeDuration: number | null
    availabilityScheduleId: number | null
  }

  export type EventTypeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
    timeDuration: number | null
    availabilityScheduleId: number | null
  }

  export type EventTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    description: string | null
    price: number | null
    timeDuration: number | null
    availabilityScheduleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    description: string | null
    price: number | null
    timeDuration: number | null
    availabilityScheduleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventTypeCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    description: number
    price: number
    timeDuration: number
    availabilityScheduleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventTypeAvgAggregateInputType = {
    id?: true
    userId?: true
    price?: true
    timeDuration?: true
    availabilityScheduleId?: true
  }

  export type EventTypeSumAggregateInputType = {
    id?: true
    userId?: true
    price?: true
    timeDuration?: true
    availabilityScheduleId?: true
  }

  export type EventTypeMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    description?: true
    price?: true
    timeDuration?: true
    availabilityScheduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventTypeMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    description?: true
    price?: true
    timeDuration?: true
    availabilityScheduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventTypeCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    description?: true
    price?: true
    timeDuration?: true
    availabilityScheduleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventTypeAggregateArgs = {
    /**
     * Filter which EventType to aggregate.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: Enumerable<EventTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTypes
    **/
    _count?: true | EventTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTypeMaxAggregateInputType
  }

  export type GetEventTypeAggregateType<T extends EventTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateEventType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventType[P]>
      : GetScalarType<T[P], AggregateEventType[P]>
  }




  export type EventTypeGroupByArgs = {
    where?: EventTypeWhereInput
    orderBy?: Enumerable<EventTypeOrderByWithAggregationInput>
    by: EventTypeScalarFieldEnum[]
    having?: EventTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTypeCountAggregateInputType | true
    _avg?: EventTypeAvgAggregateInputType
    _sum?: EventTypeSumAggregateInputType
    _min?: EventTypeMinAggregateInputType
    _max?: EventTypeMaxAggregateInputType
  }


  export type EventTypeGroupByOutputType = {
    id: number
    name: string
    userId: number
    description: string
    price: number
    timeDuration: number
    availabilityScheduleId: number | null
    createdAt: Date
    updatedAt: Date
    _count: EventTypeCountAggregateOutputType | null
    _avg: EventTypeAvgAggregateOutputType | null
    _sum: EventTypeSumAggregateOutputType | null
    _min: EventTypeMinAggregateOutputType | null
    _max: EventTypeMaxAggregateOutputType | null
  }

  type GetEventTypeGroupByPayload<T extends EventTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EventTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTypeGroupByOutputType[P]>
            : GetScalarType<T[P], EventTypeGroupByOutputType[P]>
        }
      >
    >


  export type EventTypeSelect = {
    id?: boolean
    name?: boolean
    userId?: boolean
    description?: boolean
    price?: boolean
    timeDuration?: boolean
    availabilityScheduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
    eventTypeOnLocations?: boolean | EventType$eventTypeOnLocationsArgs
    availabilitySchedule?: boolean | AvailabilityScheduleArgs
    daySlots?: boolean | EventType$daySlotsArgs
    groupMeetings?: boolean | EventType$groupMeetingsArgs
    _count?: boolean | EventTypeCountOutputTypeArgs
  }


  export type EventTypeInclude = {
    user?: boolean | UserArgs
    eventTypeOnLocations?: boolean | EventType$eventTypeOnLocationsArgs
    availabilitySchedule?: boolean | AvailabilityScheduleArgs
    daySlots?: boolean | EventType$daySlotsArgs
    groupMeetings?: boolean | EventType$groupMeetingsArgs
    _count?: boolean | EventTypeCountOutputTypeArgs
  }

  export type EventTypeGetPayload<S extends boolean | null | undefined | EventTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EventType :
    S extends undefined ? never :
    S extends { include: any } & (EventTypeArgs | EventTypeFindManyArgs)
    ? EventType  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'eventTypeOnLocations' ? Array < EventTypeOnLocationGetPayload<S['include'][P]>>  :
        P extends 'availabilitySchedule' ? AvailabilityScheduleGetPayload<S['include'][P]> | null :
        P extends 'daySlots' ? Array < EventTypeOnDaySlotGetPayload<S['include'][P]>>  :
        P extends 'groupMeetings' ? Array < GroupMeetingGetPayload<S['include'][P]>>  :
        P extends '_count' ? EventTypeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (EventTypeArgs | EventTypeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'eventTypeOnLocations' ? Array < EventTypeOnLocationGetPayload<S['select'][P]>>  :
        P extends 'availabilitySchedule' ? AvailabilityScheduleGetPayload<S['select'][P]> | null :
        P extends 'daySlots' ? Array < EventTypeOnDaySlotGetPayload<S['select'][P]>>  :
        P extends 'groupMeetings' ? Array < GroupMeetingGetPayload<S['select'][P]>>  :
        P extends '_count' ? EventTypeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof EventType ? EventType[P] : never
  } 
      : EventType


  type EventTypeCountArgs = 
    Omit<EventTypeFindManyArgs, 'select' | 'include'> & {
      select?: EventTypeCountAggregateInputType | true
    }

  export interface EventTypeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one EventType that matches the filter.
     * @param {EventTypeFindUniqueArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EventTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'EventType'> extends True ? Prisma__EventTypeClient<EventTypeGetPayload<T>> : Prisma__EventTypeClient<EventTypeGetPayload<T> | null, null>

    /**
     * Find one EventType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventTypeFindUniqueOrThrowArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventTypeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EventTypeFindUniqueOrThrowArgs>
    ): Prisma__EventTypeClient<EventTypeGetPayload<T>>

    /**
     * Find the first EventType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeFindFirstArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EventTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'EventType'> extends True ? Prisma__EventTypeClient<EventTypeGetPayload<T>> : Prisma__EventTypeClient<EventTypeGetPayload<T> | null, null>

    /**
     * Find the first EventType that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeFindFirstOrThrowArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventTypeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EventTypeFindFirstOrThrowArgs>
    ): Prisma__EventTypeClient<EventTypeGetPayload<T>>

    /**
     * Find zero or more EventTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTypes
     * const eventTypes = await prisma.eventType.findMany()
     * 
     * // Get first 10 EventTypes
     * const eventTypes = await prisma.eventType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventTypeWithIdOnly = await prisma.eventType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventTypeFindManyArgs>(
      args?: SelectSubset<T, EventTypeFindManyArgs>
    ): Prisma.PrismaPromise<Array<EventTypeGetPayload<T>>>

    /**
     * Create a EventType.
     * @param {EventTypeCreateArgs} args - Arguments to create a EventType.
     * @example
     * // Create one EventType
     * const EventType = await prisma.eventType.create({
     *   data: {
     *     // ... data to create a EventType
     *   }
     * })
     * 
    **/
    create<T extends EventTypeCreateArgs>(
      args: SelectSubset<T, EventTypeCreateArgs>
    ): Prisma__EventTypeClient<EventTypeGetPayload<T>>

    /**
     * Create many EventTypes.
     *     @param {EventTypeCreateManyArgs} args - Arguments to create many EventTypes.
     *     @example
     *     // Create many EventTypes
     *     const eventType = await prisma.eventType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventTypeCreateManyArgs>(
      args?: SelectSubset<T, EventTypeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventType.
     * @param {EventTypeDeleteArgs} args - Arguments to delete one EventType.
     * @example
     * // Delete one EventType
     * const EventType = await prisma.eventType.delete({
     *   where: {
     *     // ... filter to delete one EventType
     *   }
     * })
     * 
    **/
    delete<T extends EventTypeDeleteArgs>(
      args: SelectSubset<T, EventTypeDeleteArgs>
    ): Prisma__EventTypeClient<EventTypeGetPayload<T>>

    /**
     * Update one EventType.
     * @param {EventTypeUpdateArgs} args - Arguments to update one EventType.
     * @example
     * // Update one EventType
     * const eventType = await prisma.eventType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventTypeUpdateArgs>(
      args: SelectSubset<T, EventTypeUpdateArgs>
    ): Prisma__EventTypeClient<EventTypeGetPayload<T>>

    /**
     * Delete zero or more EventTypes.
     * @param {EventTypeDeleteManyArgs} args - Arguments to filter EventTypes to delete.
     * @example
     * // Delete a few EventTypes
     * const { count } = await prisma.eventType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventTypeDeleteManyArgs>(
      args?: SelectSubset<T, EventTypeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTypes
     * const eventType = await prisma.eventType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventTypeUpdateManyArgs>(
      args: SelectSubset<T, EventTypeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventType.
     * @param {EventTypeUpsertArgs} args - Arguments to update or create a EventType.
     * @example
     * // Update or create a EventType
     * const eventType = await prisma.eventType.upsert({
     *   create: {
     *     // ... data to create a EventType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventType we want to update
     *   }
     * })
    **/
    upsert<T extends EventTypeUpsertArgs>(
      args: SelectSubset<T, EventTypeUpsertArgs>
    ): Prisma__EventTypeClient<EventTypeGetPayload<T>>

    /**
     * Count the number of EventTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeCountArgs} args - Arguments to filter EventTypes to count.
     * @example
     * // Count the number of EventTypes
     * const count = await prisma.eventType.count({
     *   where: {
     *     // ... the filter for the EventTypes we want to count
     *   }
     * })
    **/
    count<T extends EventTypeCountArgs>(
      args?: Subset<T, EventTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventTypeAggregateArgs>(args: Subset<T, EventTypeAggregateArgs>): Prisma.PrismaPromise<GetEventTypeAggregateType<T>>

    /**
     * Group by EventType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeGroupByArgs} args - Group by arguments.
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
      T extends EventTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTypeGroupByArgs['orderBy'] }
        : { orderBy?: EventTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for EventType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EventTypeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    eventTypeOnLocations<T extends EventType$eventTypeOnLocationsArgs= {}>(args?: Subset<T, EventType$eventTypeOnLocationsArgs>): Prisma.PrismaPromise<Array<EventTypeOnLocationGetPayload<T>>| Null>;

    availabilitySchedule<T extends AvailabilityScheduleArgs= {}>(args?: Subset<T, AvailabilityScheduleArgs>): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T> | Null>;

    daySlots<T extends EventType$daySlotsArgs= {}>(args?: Subset<T, EventType$daySlotsArgs>): Prisma.PrismaPromise<Array<EventTypeOnDaySlotGetPayload<T>>| Null>;

    groupMeetings<T extends EventType$groupMeetingsArgs= {}>(args?: Subset<T, EventType$groupMeetingsArgs>): Prisma.PrismaPromise<Array<GroupMeetingGetPayload<T>>| Null>;

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
   * EventType base type for findUnique actions
   */
  export type EventTypeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * Filter, which EventType to fetch.
     */
    where: EventTypeWhereUniqueInput
  }

  /**
   * EventType findUnique
   */
  export interface EventTypeFindUniqueArgs extends EventTypeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EventType findUniqueOrThrow
   */
  export type EventTypeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * Filter, which EventType to fetch.
     */
    where: EventTypeWhereUniqueInput
  }


  /**
   * EventType base type for findFirst actions
   */
  export type EventTypeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * Filter, which EventType to fetch.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: Enumerable<EventTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypes.
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypes.
     */
    distinct?: Enumerable<EventTypeScalarFieldEnum>
  }

  /**
   * EventType findFirst
   */
  export interface EventTypeFindFirstArgs extends EventTypeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EventType findFirstOrThrow
   */
  export type EventTypeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * Filter, which EventType to fetch.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: Enumerable<EventTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypes.
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypes.
     */
    distinct?: Enumerable<EventTypeScalarFieldEnum>
  }


  /**
   * EventType findMany
   */
  export type EventTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * Filter, which EventTypes to fetch.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: Enumerable<EventTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTypes.
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    distinct?: Enumerable<EventTypeScalarFieldEnum>
  }


  /**
   * EventType create
   */
  export type EventTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * The data needed to create a EventType.
     */
    data: XOR<EventTypeCreateInput, EventTypeUncheckedCreateInput>
  }


  /**
   * EventType createMany
   */
  export type EventTypeCreateManyArgs = {
    /**
     * The data used to create many EventTypes.
     */
    data: Enumerable<EventTypeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * EventType update
   */
  export type EventTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * The data needed to update a EventType.
     */
    data: XOR<EventTypeUpdateInput, EventTypeUncheckedUpdateInput>
    /**
     * Choose, which EventType to update.
     */
    where: EventTypeWhereUniqueInput
  }


  /**
   * EventType updateMany
   */
  export type EventTypeUpdateManyArgs = {
    /**
     * The data used to update EventTypes.
     */
    data: XOR<EventTypeUpdateManyMutationInput, EventTypeUncheckedUpdateManyInput>
    /**
     * Filter which EventTypes to update
     */
    where?: EventTypeWhereInput
  }


  /**
   * EventType upsert
   */
  export type EventTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * The filter to search for the EventType to update in case it exists.
     */
    where: EventTypeWhereUniqueInput
    /**
     * In case the EventType found by the `where` argument doesn't exist, create a new EventType with this data.
     */
    create: XOR<EventTypeCreateInput, EventTypeUncheckedCreateInput>
    /**
     * In case the EventType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTypeUpdateInput, EventTypeUncheckedUpdateInput>
  }


  /**
   * EventType delete
   */
  export type EventTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    /**
     * Filter which EventType to delete.
     */
    where: EventTypeWhereUniqueInput
  }


  /**
   * EventType deleteMany
   */
  export type EventTypeDeleteManyArgs = {
    /**
     * Filter which EventTypes to delete
     */
    where?: EventTypeWhereInput
  }


  /**
   * EventType.eventTypeOnLocations
   */
  export type EventType$eventTypeOnLocationsArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    where?: EventTypeOnLocationWhereInput
    orderBy?: Enumerable<EventTypeOnLocationOrderByWithRelationInput>
    cursor?: EventTypeOnLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EventTypeOnLocationScalarFieldEnum>
  }


  /**
   * EventType.daySlots
   */
  export type EventType$daySlotsArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnDaySlot
     */
    select?: EventTypeOnDaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnDaySlotInclude | null
    where?: EventTypeOnDaySlotWhereInput
    orderBy?: Enumerable<EventTypeOnDaySlotOrderByWithRelationInput>
    cursor?: EventTypeOnDaySlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EventTypeOnDaySlotScalarFieldEnum>
  }


  /**
   * EventType.groupMeetings
   */
  export type EventType$groupMeetingsArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    where?: GroupMeetingWhereInput
    orderBy?: Enumerable<GroupMeetingOrderByWithRelationInput>
    cursor?: GroupMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GroupMeetingScalarFieldEnum>
  }


  /**
   * EventType without action
   */
  export type EventTypeArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
  }



  /**
   * Model DaySlot
   */


  export type AggregateDaySlot = {
    _count: DaySlotCountAggregateOutputType | null
    _avg: DaySlotAvgAggregateOutputType | null
    _sum: DaySlotSumAggregateOutputType | null
    _min: DaySlotMinAggregateOutputType | null
    _max: DaySlotMaxAggregateOutputType | null
  }

  export type DaySlotAvgAggregateOutputType = {
    id: number | null
  }

  export type DaySlotSumAggregateOutputType = {
    id: number | null
  }

  export type DaySlotMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DaySlotMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DaySlotCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DaySlotAvgAggregateInputType = {
    id?: true
  }

  export type DaySlotSumAggregateInputType = {
    id?: true
  }

  export type DaySlotMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DaySlotMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DaySlotCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DaySlotAggregateArgs = {
    /**
     * Filter which DaySlot to aggregate.
     */
    where?: DaySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySlots to fetch.
     */
    orderBy?: Enumerable<DaySlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DaySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DaySlots
    **/
    _count?: true | DaySlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DaySlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DaySlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DaySlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DaySlotMaxAggregateInputType
  }

  export type GetDaySlotAggregateType<T extends DaySlotAggregateArgs> = {
        [P in keyof T & keyof AggregateDaySlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDaySlot[P]>
      : GetScalarType<T[P], AggregateDaySlot[P]>
  }




  export type DaySlotGroupByArgs = {
    where?: DaySlotWhereInput
    orderBy?: Enumerable<DaySlotOrderByWithAggregationInput>
    by: DaySlotScalarFieldEnum[]
    having?: DaySlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DaySlotCountAggregateInputType | true
    _avg?: DaySlotAvgAggregateInputType
    _sum?: DaySlotSumAggregateInputType
    _min?: DaySlotMinAggregateInputType
    _max?: DaySlotMaxAggregateInputType
  }


  export type DaySlotGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: DaySlotCountAggregateOutputType | null
    _avg: DaySlotAvgAggregateOutputType | null
    _sum: DaySlotSumAggregateOutputType | null
    _min: DaySlotMinAggregateOutputType | null
    _max: DaySlotMaxAggregateOutputType | null
  }

  type GetDaySlotGroupByPayload<T extends DaySlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DaySlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DaySlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DaySlotGroupByOutputType[P]>
            : GetScalarType<T[P], DaySlotGroupByOutputType[P]>
        }
      >
    >


  export type DaySlotSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventTypeSlots?: boolean | DaySlot$eventTypeSlotsArgs
    dateSlots?: boolean | DaySlot$dateSlotsArgs
    _count?: boolean | DaySlotCountOutputTypeArgs
  }


  export type DaySlotInclude = {
    eventTypeSlots?: boolean | DaySlot$eventTypeSlotsArgs
    dateSlots?: boolean | DaySlot$dateSlotsArgs
    _count?: boolean | DaySlotCountOutputTypeArgs
  }

  export type DaySlotGetPayload<S extends boolean | null | undefined | DaySlotArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DaySlot :
    S extends undefined ? never :
    S extends { include: any } & (DaySlotArgs | DaySlotFindManyArgs)
    ? DaySlot  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'eventTypeSlots' ? Array < EventTypeOnDaySlotGetPayload<S['include'][P]>>  :
        P extends 'dateSlots' ? Array < DaySlotOnDateSlotGetPayload<S['include'][P]>>  :
        P extends '_count' ? DaySlotCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DaySlotArgs | DaySlotFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'eventTypeSlots' ? Array < EventTypeOnDaySlotGetPayload<S['select'][P]>>  :
        P extends 'dateSlots' ? Array < DaySlotOnDateSlotGetPayload<S['select'][P]>>  :
        P extends '_count' ? DaySlotCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof DaySlot ? DaySlot[P] : never
  } 
      : DaySlot


  type DaySlotCountArgs = 
    Omit<DaySlotFindManyArgs, 'select' | 'include'> & {
      select?: DaySlotCountAggregateInputType | true
    }

  export interface DaySlotDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DaySlot that matches the filter.
     * @param {DaySlotFindUniqueArgs} args - Arguments to find a DaySlot
     * @example
     * // Get one DaySlot
     * const daySlot = await prisma.daySlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DaySlotFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DaySlotFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DaySlot'> extends True ? Prisma__DaySlotClient<DaySlotGetPayload<T>> : Prisma__DaySlotClient<DaySlotGetPayload<T> | null, null>

    /**
     * Find one DaySlot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DaySlotFindUniqueOrThrowArgs} args - Arguments to find a DaySlot
     * @example
     * // Get one DaySlot
     * const daySlot = await prisma.daySlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DaySlotFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DaySlotFindUniqueOrThrowArgs>
    ): Prisma__DaySlotClient<DaySlotGetPayload<T>>

    /**
     * Find the first DaySlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotFindFirstArgs} args - Arguments to find a DaySlot
     * @example
     * // Get one DaySlot
     * const daySlot = await prisma.daySlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DaySlotFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DaySlotFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DaySlot'> extends True ? Prisma__DaySlotClient<DaySlotGetPayload<T>> : Prisma__DaySlotClient<DaySlotGetPayload<T> | null, null>

    /**
     * Find the first DaySlot that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotFindFirstOrThrowArgs} args - Arguments to find a DaySlot
     * @example
     * // Get one DaySlot
     * const daySlot = await prisma.daySlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DaySlotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DaySlotFindFirstOrThrowArgs>
    ): Prisma__DaySlotClient<DaySlotGetPayload<T>>

    /**
     * Find zero or more DaySlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DaySlots
     * const daySlots = await prisma.daySlot.findMany()
     * 
     * // Get first 10 DaySlots
     * const daySlots = await prisma.daySlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const daySlotWithIdOnly = await prisma.daySlot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DaySlotFindManyArgs>(
      args?: SelectSubset<T, DaySlotFindManyArgs>
    ): Prisma.PrismaPromise<Array<DaySlotGetPayload<T>>>

    /**
     * Create a DaySlot.
     * @param {DaySlotCreateArgs} args - Arguments to create a DaySlot.
     * @example
     * // Create one DaySlot
     * const DaySlot = await prisma.daySlot.create({
     *   data: {
     *     // ... data to create a DaySlot
     *   }
     * })
     * 
    **/
    create<T extends DaySlotCreateArgs>(
      args: SelectSubset<T, DaySlotCreateArgs>
    ): Prisma__DaySlotClient<DaySlotGetPayload<T>>

    /**
     * Create many DaySlots.
     *     @param {DaySlotCreateManyArgs} args - Arguments to create many DaySlots.
     *     @example
     *     // Create many DaySlots
     *     const daySlot = await prisma.daySlot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DaySlotCreateManyArgs>(
      args?: SelectSubset<T, DaySlotCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DaySlot.
     * @param {DaySlotDeleteArgs} args - Arguments to delete one DaySlot.
     * @example
     * // Delete one DaySlot
     * const DaySlot = await prisma.daySlot.delete({
     *   where: {
     *     // ... filter to delete one DaySlot
     *   }
     * })
     * 
    **/
    delete<T extends DaySlotDeleteArgs>(
      args: SelectSubset<T, DaySlotDeleteArgs>
    ): Prisma__DaySlotClient<DaySlotGetPayload<T>>

    /**
     * Update one DaySlot.
     * @param {DaySlotUpdateArgs} args - Arguments to update one DaySlot.
     * @example
     * // Update one DaySlot
     * const daySlot = await prisma.daySlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DaySlotUpdateArgs>(
      args: SelectSubset<T, DaySlotUpdateArgs>
    ): Prisma__DaySlotClient<DaySlotGetPayload<T>>

    /**
     * Delete zero or more DaySlots.
     * @param {DaySlotDeleteManyArgs} args - Arguments to filter DaySlots to delete.
     * @example
     * // Delete a few DaySlots
     * const { count } = await prisma.daySlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DaySlotDeleteManyArgs>(
      args?: SelectSubset<T, DaySlotDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DaySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DaySlots
     * const daySlot = await prisma.daySlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DaySlotUpdateManyArgs>(
      args: SelectSubset<T, DaySlotUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DaySlot.
     * @param {DaySlotUpsertArgs} args - Arguments to update or create a DaySlot.
     * @example
     * // Update or create a DaySlot
     * const daySlot = await prisma.daySlot.upsert({
     *   create: {
     *     // ... data to create a DaySlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DaySlot we want to update
     *   }
     * })
    **/
    upsert<T extends DaySlotUpsertArgs>(
      args: SelectSubset<T, DaySlotUpsertArgs>
    ): Prisma__DaySlotClient<DaySlotGetPayload<T>>

    /**
     * Count the number of DaySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotCountArgs} args - Arguments to filter DaySlots to count.
     * @example
     * // Count the number of DaySlots
     * const count = await prisma.daySlot.count({
     *   where: {
     *     // ... the filter for the DaySlots we want to count
     *   }
     * })
    **/
    count<T extends DaySlotCountArgs>(
      args?: Subset<T, DaySlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DaySlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DaySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DaySlotAggregateArgs>(args: Subset<T, DaySlotAggregateArgs>): Prisma.PrismaPromise<GetDaySlotAggregateType<T>>

    /**
     * Group by DaySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotGroupByArgs} args - Group by arguments.
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
      T extends DaySlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DaySlotGroupByArgs['orderBy'] }
        : { orderBy?: DaySlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DaySlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDaySlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DaySlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DaySlotClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    eventTypeSlots<T extends DaySlot$eventTypeSlotsArgs= {}>(args?: Subset<T, DaySlot$eventTypeSlotsArgs>): Prisma.PrismaPromise<Array<EventTypeOnDaySlotGetPayload<T>>| Null>;

    dateSlots<T extends DaySlot$dateSlotsArgs= {}>(args?: Subset<T, DaySlot$dateSlotsArgs>): Prisma.PrismaPromise<Array<DaySlotOnDateSlotGetPayload<T>>| Null>;

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
   * DaySlot base type for findUnique actions
   */
  export type DaySlotFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * Filter, which DaySlot to fetch.
     */
    where: DaySlotWhereUniqueInput
  }

  /**
   * DaySlot findUnique
   */
  export interface DaySlotFindUniqueArgs extends DaySlotFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DaySlot findUniqueOrThrow
   */
  export type DaySlotFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * Filter, which DaySlot to fetch.
     */
    where: DaySlotWhereUniqueInput
  }


  /**
   * DaySlot base type for findFirst actions
   */
  export type DaySlotFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * Filter, which DaySlot to fetch.
     */
    where?: DaySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySlots to fetch.
     */
    orderBy?: Enumerable<DaySlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DaySlots.
     */
    cursor?: DaySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DaySlots.
     */
    distinct?: Enumerable<DaySlotScalarFieldEnum>
  }

  /**
   * DaySlot findFirst
   */
  export interface DaySlotFindFirstArgs extends DaySlotFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DaySlot findFirstOrThrow
   */
  export type DaySlotFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * Filter, which DaySlot to fetch.
     */
    where?: DaySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySlots to fetch.
     */
    orderBy?: Enumerable<DaySlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DaySlots.
     */
    cursor?: DaySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DaySlots.
     */
    distinct?: Enumerable<DaySlotScalarFieldEnum>
  }


  /**
   * DaySlot findMany
   */
  export type DaySlotFindManyArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * Filter, which DaySlots to fetch.
     */
    where?: DaySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySlots to fetch.
     */
    orderBy?: Enumerable<DaySlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DaySlots.
     */
    cursor?: DaySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySlots.
     */
    skip?: number
    distinct?: Enumerable<DaySlotScalarFieldEnum>
  }


  /**
   * DaySlot create
   */
  export type DaySlotCreateArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * The data needed to create a DaySlot.
     */
    data: XOR<DaySlotCreateInput, DaySlotUncheckedCreateInput>
  }


  /**
   * DaySlot createMany
   */
  export type DaySlotCreateManyArgs = {
    /**
     * The data used to create many DaySlots.
     */
    data: Enumerable<DaySlotCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DaySlot update
   */
  export type DaySlotUpdateArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * The data needed to update a DaySlot.
     */
    data: XOR<DaySlotUpdateInput, DaySlotUncheckedUpdateInput>
    /**
     * Choose, which DaySlot to update.
     */
    where: DaySlotWhereUniqueInput
  }


  /**
   * DaySlot updateMany
   */
  export type DaySlotUpdateManyArgs = {
    /**
     * The data used to update DaySlots.
     */
    data: XOR<DaySlotUpdateManyMutationInput, DaySlotUncheckedUpdateManyInput>
    /**
     * Filter which DaySlots to update
     */
    where?: DaySlotWhereInput
  }


  /**
   * DaySlot upsert
   */
  export type DaySlotUpsertArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * The filter to search for the DaySlot to update in case it exists.
     */
    where: DaySlotWhereUniqueInput
    /**
     * In case the DaySlot found by the `where` argument doesn't exist, create a new DaySlot with this data.
     */
    create: XOR<DaySlotCreateInput, DaySlotUncheckedCreateInput>
    /**
     * In case the DaySlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DaySlotUpdateInput, DaySlotUncheckedUpdateInput>
  }


  /**
   * DaySlot delete
   */
  export type DaySlotDeleteArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
    /**
     * Filter which DaySlot to delete.
     */
    where: DaySlotWhereUniqueInput
  }


  /**
   * DaySlot deleteMany
   */
  export type DaySlotDeleteManyArgs = {
    /**
     * Filter which DaySlots to delete
     */
    where?: DaySlotWhereInput
  }


  /**
   * DaySlot.eventTypeSlots
   */
  export type DaySlot$eventTypeSlotsArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnDaySlot
     */
    select?: EventTypeOnDaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnDaySlotInclude | null
    where?: EventTypeOnDaySlotWhereInput
    orderBy?: Enumerable<EventTypeOnDaySlotOrderByWithRelationInput>
    cursor?: EventTypeOnDaySlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EventTypeOnDaySlotScalarFieldEnum>
  }


  /**
   * DaySlot.dateSlots
   */
  export type DaySlot$dateSlotsArgs = {
    /**
     * Select specific fields to fetch from the DaySlotOnDateSlot
     */
    select?: DaySlotOnDateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotOnDateSlotInclude | null
    where?: DaySlotOnDateSlotWhereInput
    orderBy?: Enumerable<DaySlotOnDateSlotOrderByWithRelationInput>
    cursor?: DaySlotOnDateSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DaySlotOnDateSlotScalarFieldEnum>
  }


  /**
   * DaySlot without action
   */
  export type DaySlotArgs = {
    /**
     * Select specific fields to fetch from the DaySlot
     */
    select?: DaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotInclude | null
  }



  /**
   * Model DaySlotOnDateSlot
   */


  export type AggregateDaySlotOnDateSlot = {
    _count: DaySlotOnDateSlotCountAggregateOutputType | null
    _avg: DaySlotOnDateSlotAvgAggregateOutputType | null
    _sum: DaySlotOnDateSlotSumAggregateOutputType | null
    _min: DaySlotOnDateSlotMinAggregateOutputType | null
    _max: DaySlotOnDateSlotMaxAggregateOutputType | null
  }

  export type DaySlotOnDateSlotAvgAggregateOutputType = {
    id: number | null
    daySlotId: number | null
    dateSlotId: number | null
  }

  export type DaySlotOnDateSlotSumAggregateOutputType = {
    id: number | null
    daySlotId: number | null
    dateSlotId: number | null
  }

  export type DaySlotOnDateSlotMinAggregateOutputType = {
    id: number | null
    daySlotId: number | null
    dateSlotId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DaySlotOnDateSlotMaxAggregateOutputType = {
    id: number | null
    daySlotId: number | null
    dateSlotId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DaySlotOnDateSlotCountAggregateOutputType = {
    id: number
    daySlotId: number
    dateSlotId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DaySlotOnDateSlotAvgAggregateInputType = {
    id?: true
    daySlotId?: true
    dateSlotId?: true
  }

  export type DaySlotOnDateSlotSumAggregateInputType = {
    id?: true
    daySlotId?: true
    dateSlotId?: true
  }

  export type DaySlotOnDateSlotMinAggregateInputType = {
    id?: true
    daySlotId?: true
    dateSlotId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DaySlotOnDateSlotMaxAggregateInputType = {
    id?: true
    daySlotId?: true
    dateSlotId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DaySlotOnDateSlotCountAggregateInputType = {
    id?: true
    daySlotId?: true
    dateSlotId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DaySlotOnDateSlotAggregateArgs = {
    /**
     * Filter which DaySlotOnDateSlot to aggregate.
     */
    where?: DaySlotOnDateSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySlotOnDateSlots to fetch.
     */
    orderBy?: Enumerable<DaySlotOnDateSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DaySlotOnDateSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySlotOnDateSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySlotOnDateSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DaySlotOnDateSlots
    **/
    _count?: true | DaySlotOnDateSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DaySlotOnDateSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DaySlotOnDateSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DaySlotOnDateSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DaySlotOnDateSlotMaxAggregateInputType
  }

  export type GetDaySlotOnDateSlotAggregateType<T extends DaySlotOnDateSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateDaySlotOnDateSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDaySlotOnDateSlot[P]>
      : GetScalarType<T[P], AggregateDaySlotOnDateSlot[P]>
  }




  export type DaySlotOnDateSlotGroupByArgs = {
    where?: DaySlotOnDateSlotWhereInput
    orderBy?: Enumerable<DaySlotOnDateSlotOrderByWithAggregationInput>
    by: DaySlotOnDateSlotScalarFieldEnum[]
    having?: DaySlotOnDateSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DaySlotOnDateSlotCountAggregateInputType | true
    _avg?: DaySlotOnDateSlotAvgAggregateInputType
    _sum?: DaySlotOnDateSlotSumAggregateInputType
    _min?: DaySlotOnDateSlotMinAggregateInputType
    _max?: DaySlotOnDateSlotMaxAggregateInputType
  }


  export type DaySlotOnDateSlotGroupByOutputType = {
    id: number
    daySlotId: number
    dateSlotId: number
    createdAt: Date
    updatedAt: Date
    _count: DaySlotOnDateSlotCountAggregateOutputType | null
    _avg: DaySlotOnDateSlotAvgAggregateOutputType | null
    _sum: DaySlotOnDateSlotSumAggregateOutputType | null
    _min: DaySlotOnDateSlotMinAggregateOutputType | null
    _max: DaySlotOnDateSlotMaxAggregateOutputType | null
  }

  type GetDaySlotOnDateSlotGroupByPayload<T extends DaySlotOnDateSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DaySlotOnDateSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DaySlotOnDateSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DaySlotOnDateSlotGroupByOutputType[P]>
            : GetScalarType<T[P], DaySlotOnDateSlotGroupByOutputType[P]>
        }
      >
    >


  export type DaySlotOnDateSlotSelect = {
    id?: boolean
    daySlotId?: boolean
    dateSlotId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    daySlot?: boolean | DaySlotArgs
    dateSlot?: boolean | DateSlotArgs
  }


  export type DaySlotOnDateSlotInclude = {
    daySlot?: boolean | DaySlotArgs
    dateSlot?: boolean | DateSlotArgs
  }

  export type DaySlotOnDateSlotGetPayload<S extends boolean | null | undefined | DaySlotOnDateSlotArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DaySlotOnDateSlot :
    S extends undefined ? never :
    S extends { include: any } & (DaySlotOnDateSlotArgs | DaySlotOnDateSlotFindManyArgs)
    ? DaySlotOnDateSlot  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'daySlot' ? DaySlotGetPayload<S['include'][P]> :
        P extends 'dateSlot' ? DateSlotGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DaySlotOnDateSlotArgs | DaySlotOnDateSlotFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'daySlot' ? DaySlotGetPayload<S['select'][P]> :
        P extends 'dateSlot' ? DateSlotGetPayload<S['select'][P]> :  P extends keyof DaySlotOnDateSlot ? DaySlotOnDateSlot[P] : never
  } 
      : DaySlotOnDateSlot


  type DaySlotOnDateSlotCountArgs = 
    Omit<DaySlotOnDateSlotFindManyArgs, 'select' | 'include'> & {
      select?: DaySlotOnDateSlotCountAggregateInputType | true
    }

  export interface DaySlotOnDateSlotDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DaySlotOnDateSlot that matches the filter.
     * @param {DaySlotOnDateSlotFindUniqueArgs} args - Arguments to find a DaySlotOnDateSlot
     * @example
     * // Get one DaySlotOnDateSlot
     * const daySlotOnDateSlot = await prisma.daySlotOnDateSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DaySlotOnDateSlotFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DaySlotOnDateSlotFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DaySlotOnDateSlot'> extends True ? Prisma__DaySlotOnDateSlotClient<DaySlotOnDateSlotGetPayload<T>> : Prisma__DaySlotOnDateSlotClient<DaySlotOnDateSlotGetPayload<T> | null, null>

    /**
     * Find one DaySlotOnDateSlot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DaySlotOnDateSlotFindUniqueOrThrowArgs} args - Arguments to find a DaySlotOnDateSlot
     * @example
     * // Get one DaySlotOnDateSlot
     * const daySlotOnDateSlot = await prisma.daySlotOnDateSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DaySlotOnDateSlotFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DaySlotOnDateSlotFindUniqueOrThrowArgs>
    ): Prisma__DaySlotOnDateSlotClient<DaySlotOnDateSlotGetPayload<T>>

    /**
     * Find the first DaySlotOnDateSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotOnDateSlotFindFirstArgs} args - Arguments to find a DaySlotOnDateSlot
     * @example
     * // Get one DaySlotOnDateSlot
     * const daySlotOnDateSlot = await prisma.daySlotOnDateSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DaySlotOnDateSlotFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DaySlotOnDateSlotFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DaySlotOnDateSlot'> extends True ? Prisma__DaySlotOnDateSlotClient<DaySlotOnDateSlotGetPayload<T>> : Prisma__DaySlotOnDateSlotClient<DaySlotOnDateSlotGetPayload<T> | null, null>

    /**
     * Find the first DaySlotOnDateSlot that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotOnDateSlotFindFirstOrThrowArgs} args - Arguments to find a DaySlotOnDateSlot
     * @example
     * // Get one DaySlotOnDateSlot
     * const daySlotOnDateSlot = await prisma.daySlotOnDateSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DaySlotOnDateSlotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DaySlotOnDateSlotFindFirstOrThrowArgs>
    ): Prisma__DaySlotOnDateSlotClient<DaySlotOnDateSlotGetPayload<T>>

    /**
     * Find zero or more DaySlotOnDateSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotOnDateSlotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DaySlotOnDateSlots
     * const daySlotOnDateSlots = await prisma.daySlotOnDateSlot.findMany()
     * 
     * // Get first 10 DaySlotOnDateSlots
     * const daySlotOnDateSlots = await prisma.daySlotOnDateSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const daySlotOnDateSlotWithIdOnly = await prisma.daySlotOnDateSlot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DaySlotOnDateSlotFindManyArgs>(
      args?: SelectSubset<T, DaySlotOnDateSlotFindManyArgs>
    ): Prisma.PrismaPromise<Array<DaySlotOnDateSlotGetPayload<T>>>

    /**
     * Create a DaySlotOnDateSlot.
     * @param {DaySlotOnDateSlotCreateArgs} args - Arguments to create a DaySlotOnDateSlot.
     * @example
     * // Create one DaySlotOnDateSlot
     * const DaySlotOnDateSlot = await prisma.daySlotOnDateSlot.create({
     *   data: {
     *     // ... data to create a DaySlotOnDateSlot
     *   }
     * })
     * 
    **/
    create<T extends DaySlotOnDateSlotCreateArgs>(
      args: SelectSubset<T, DaySlotOnDateSlotCreateArgs>
    ): Prisma__DaySlotOnDateSlotClient<DaySlotOnDateSlotGetPayload<T>>

    /**
     * Create many DaySlotOnDateSlots.
     *     @param {DaySlotOnDateSlotCreateManyArgs} args - Arguments to create many DaySlotOnDateSlots.
     *     @example
     *     // Create many DaySlotOnDateSlots
     *     const daySlotOnDateSlot = await prisma.daySlotOnDateSlot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DaySlotOnDateSlotCreateManyArgs>(
      args?: SelectSubset<T, DaySlotOnDateSlotCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DaySlotOnDateSlot.
     * @param {DaySlotOnDateSlotDeleteArgs} args - Arguments to delete one DaySlotOnDateSlot.
     * @example
     * // Delete one DaySlotOnDateSlot
     * const DaySlotOnDateSlot = await prisma.daySlotOnDateSlot.delete({
     *   where: {
     *     // ... filter to delete one DaySlotOnDateSlot
     *   }
     * })
     * 
    **/
    delete<T extends DaySlotOnDateSlotDeleteArgs>(
      args: SelectSubset<T, DaySlotOnDateSlotDeleteArgs>
    ): Prisma__DaySlotOnDateSlotClient<DaySlotOnDateSlotGetPayload<T>>

    /**
     * Update one DaySlotOnDateSlot.
     * @param {DaySlotOnDateSlotUpdateArgs} args - Arguments to update one DaySlotOnDateSlot.
     * @example
     * // Update one DaySlotOnDateSlot
     * const daySlotOnDateSlot = await prisma.daySlotOnDateSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DaySlotOnDateSlotUpdateArgs>(
      args: SelectSubset<T, DaySlotOnDateSlotUpdateArgs>
    ): Prisma__DaySlotOnDateSlotClient<DaySlotOnDateSlotGetPayload<T>>

    /**
     * Delete zero or more DaySlotOnDateSlots.
     * @param {DaySlotOnDateSlotDeleteManyArgs} args - Arguments to filter DaySlotOnDateSlots to delete.
     * @example
     * // Delete a few DaySlotOnDateSlots
     * const { count } = await prisma.daySlotOnDateSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DaySlotOnDateSlotDeleteManyArgs>(
      args?: SelectSubset<T, DaySlotOnDateSlotDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DaySlotOnDateSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotOnDateSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DaySlotOnDateSlots
     * const daySlotOnDateSlot = await prisma.daySlotOnDateSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DaySlotOnDateSlotUpdateManyArgs>(
      args: SelectSubset<T, DaySlotOnDateSlotUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DaySlotOnDateSlot.
     * @param {DaySlotOnDateSlotUpsertArgs} args - Arguments to update or create a DaySlotOnDateSlot.
     * @example
     * // Update or create a DaySlotOnDateSlot
     * const daySlotOnDateSlot = await prisma.daySlotOnDateSlot.upsert({
     *   create: {
     *     // ... data to create a DaySlotOnDateSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DaySlotOnDateSlot we want to update
     *   }
     * })
    **/
    upsert<T extends DaySlotOnDateSlotUpsertArgs>(
      args: SelectSubset<T, DaySlotOnDateSlotUpsertArgs>
    ): Prisma__DaySlotOnDateSlotClient<DaySlotOnDateSlotGetPayload<T>>

    /**
     * Count the number of DaySlotOnDateSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotOnDateSlotCountArgs} args - Arguments to filter DaySlotOnDateSlots to count.
     * @example
     * // Count the number of DaySlotOnDateSlots
     * const count = await prisma.daySlotOnDateSlot.count({
     *   where: {
     *     // ... the filter for the DaySlotOnDateSlots we want to count
     *   }
     * })
    **/
    count<T extends DaySlotOnDateSlotCountArgs>(
      args?: Subset<T, DaySlotOnDateSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DaySlotOnDateSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DaySlotOnDateSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotOnDateSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DaySlotOnDateSlotAggregateArgs>(args: Subset<T, DaySlotOnDateSlotAggregateArgs>): Prisma.PrismaPromise<GetDaySlotOnDateSlotAggregateType<T>>

    /**
     * Group by DaySlotOnDateSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaySlotOnDateSlotGroupByArgs} args - Group by arguments.
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
      T extends DaySlotOnDateSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DaySlotOnDateSlotGroupByArgs['orderBy'] }
        : { orderBy?: DaySlotOnDateSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DaySlotOnDateSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDaySlotOnDateSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DaySlotOnDateSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DaySlotOnDateSlotClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    daySlot<T extends DaySlotArgs= {}>(args?: Subset<T, DaySlotArgs>): Prisma__DaySlotClient<DaySlotGetPayload<T> | Null>;

    dateSlot<T extends DateSlotArgs= {}>(args?: Subset<T, DateSlotArgs>): Prisma__DateSlotClient<DateSlotGetPayload<T> | Null>;

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
   * DaySlotOnDateSlot base type for findUnique actions
   */
  export type DaySlotOnDateSlotFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DaySlotOnDateSlot
     */
    select?: DaySlotOnDateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotOnDateSlotInclude | null
    /**
     * Filter, which DaySlotOnDateSlot to fetch.
     */
    where: DaySlotOnDateSlotWhereUniqueInput
  }

  /**
   * DaySlotOnDateSlot findUnique
   */
  export interface DaySlotOnDateSlotFindUniqueArgs extends DaySlotOnDateSlotFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DaySlotOnDateSlot findUniqueOrThrow
   */
  export type DaySlotOnDateSlotFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DaySlotOnDateSlot
     */
    select?: DaySlotOnDateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotOnDateSlotInclude | null
    /**
     * Filter, which DaySlotOnDateSlot to fetch.
     */
    where: DaySlotOnDateSlotWhereUniqueInput
  }


  /**
   * DaySlotOnDateSlot base type for findFirst actions
   */
  export type DaySlotOnDateSlotFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DaySlotOnDateSlot
     */
    select?: DaySlotOnDateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotOnDateSlotInclude | null
    /**
     * Filter, which DaySlotOnDateSlot to fetch.
     */
    where?: DaySlotOnDateSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySlotOnDateSlots to fetch.
     */
    orderBy?: Enumerable<DaySlotOnDateSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DaySlotOnDateSlots.
     */
    cursor?: DaySlotOnDateSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySlotOnDateSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySlotOnDateSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DaySlotOnDateSlots.
     */
    distinct?: Enumerable<DaySlotOnDateSlotScalarFieldEnum>
  }

  /**
   * DaySlotOnDateSlot findFirst
   */
  export interface DaySlotOnDateSlotFindFirstArgs extends DaySlotOnDateSlotFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DaySlotOnDateSlot findFirstOrThrow
   */
  export type DaySlotOnDateSlotFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DaySlotOnDateSlot
     */
    select?: DaySlotOnDateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotOnDateSlotInclude | null
    /**
     * Filter, which DaySlotOnDateSlot to fetch.
     */
    where?: DaySlotOnDateSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySlotOnDateSlots to fetch.
     */
    orderBy?: Enumerable<DaySlotOnDateSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DaySlotOnDateSlots.
     */
    cursor?: DaySlotOnDateSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySlotOnDateSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySlotOnDateSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DaySlotOnDateSlots.
     */
    distinct?: Enumerable<DaySlotOnDateSlotScalarFieldEnum>
  }


  /**
   * DaySlotOnDateSlot findMany
   */
  export type DaySlotOnDateSlotFindManyArgs = {
    /**
     * Select specific fields to fetch from the DaySlotOnDateSlot
     */
    select?: DaySlotOnDateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotOnDateSlotInclude | null
    /**
     * Filter, which DaySlotOnDateSlots to fetch.
     */
    where?: DaySlotOnDateSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DaySlotOnDateSlots to fetch.
     */
    orderBy?: Enumerable<DaySlotOnDateSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DaySlotOnDateSlots.
     */
    cursor?: DaySlotOnDateSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DaySlotOnDateSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DaySlotOnDateSlots.
     */
    skip?: number
    distinct?: Enumerable<DaySlotOnDateSlotScalarFieldEnum>
  }


  /**
   * DaySlotOnDateSlot create
   */
  export type DaySlotOnDateSlotCreateArgs = {
    /**
     * Select specific fields to fetch from the DaySlotOnDateSlot
     */
    select?: DaySlotOnDateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotOnDateSlotInclude | null
    /**
     * The data needed to create a DaySlotOnDateSlot.
     */
    data: XOR<DaySlotOnDateSlotCreateInput, DaySlotOnDateSlotUncheckedCreateInput>
  }


  /**
   * DaySlotOnDateSlot createMany
   */
  export type DaySlotOnDateSlotCreateManyArgs = {
    /**
     * The data used to create many DaySlotOnDateSlots.
     */
    data: Enumerable<DaySlotOnDateSlotCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DaySlotOnDateSlot update
   */
  export type DaySlotOnDateSlotUpdateArgs = {
    /**
     * Select specific fields to fetch from the DaySlotOnDateSlot
     */
    select?: DaySlotOnDateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotOnDateSlotInclude | null
    /**
     * The data needed to update a DaySlotOnDateSlot.
     */
    data: XOR<DaySlotOnDateSlotUpdateInput, DaySlotOnDateSlotUncheckedUpdateInput>
    /**
     * Choose, which DaySlotOnDateSlot to update.
     */
    where: DaySlotOnDateSlotWhereUniqueInput
  }


  /**
   * DaySlotOnDateSlot updateMany
   */
  export type DaySlotOnDateSlotUpdateManyArgs = {
    /**
     * The data used to update DaySlotOnDateSlots.
     */
    data: XOR<DaySlotOnDateSlotUpdateManyMutationInput, DaySlotOnDateSlotUncheckedUpdateManyInput>
    /**
     * Filter which DaySlotOnDateSlots to update
     */
    where?: DaySlotOnDateSlotWhereInput
  }


  /**
   * DaySlotOnDateSlot upsert
   */
  export type DaySlotOnDateSlotUpsertArgs = {
    /**
     * Select specific fields to fetch from the DaySlotOnDateSlot
     */
    select?: DaySlotOnDateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotOnDateSlotInclude | null
    /**
     * The filter to search for the DaySlotOnDateSlot to update in case it exists.
     */
    where: DaySlotOnDateSlotWhereUniqueInput
    /**
     * In case the DaySlotOnDateSlot found by the `where` argument doesn't exist, create a new DaySlotOnDateSlot with this data.
     */
    create: XOR<DaySlotOnDateSlotCreateInput, DaySlotOnDateSlotUncheckedCreateInput>
    /**
     * In case the DaySlotOnDateSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DaySlotOnDateSlotUpdateInput, DaySlotOnDateSlotUncheckedUpdateInput>
  }


  /**
   * DaySlotOnDateSlot delete
   */
  export type DaySlotOnDateSlotDeleteArgs = {
    /**
     * Select specific fields to fetch from the DaySlotOnDateSlot
     */
    select?: DaySlotOnDateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotOnDateSlotInclude | null
    /**
     * Filter which DaySlotOnDateSlot to delete.
     */
    where: DaySlotOnDateSlotWhereUniqueInput
  }


  /**
   * DaySlotOnDateSlot deleteMany
   */
  export type DaySlotOnDateSlotDeleteManyArgs = {
    /**
     * Filter which DaySlotOnDateSlots to delete
     */
    where?: DaySlotOnDateSlotWhereInput
  }


  /**
   * DaySlotOnDateSlot without action
   */
  export type DaySlotOnDateSlotArgs = {
    /**
     * Select specific fields to fetch from the DaySlotOnDateSlot
     */
    select?: DaySlotOnDateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotOnDateSlotInclude | null
  }



  /**
   * Model EventTypeOnDaySlot
   */


  export type AggregateEventTypeOnDaySlot = {
    _count: EventTypeOnDaySlotCountAggregateOutputType | null
    _avg: EventTypeOnDaySlotAvgAggregateOutputType | null
    _sum: EventTypeOnDaySlotSumAggregateOutputType | null
    _min: EventTypeOnDaySlotMinAggregateOutputType | null
    _max: EventTypeOnDaySlotMaxAggregateOutputType | null
  }

  export type EventTypeOnDaySlotAvgAggregateOutputType = {
    id: number | null
    eventTypeId: number | null
    daySlotId: number | null
  }

  export type EventTypeOnDaySlotSumAggregateOutputType = {
    id: number | null
    eventTypeId: number | null
    daySlotId: number | null
  }

  export type EventTypeOnDaySlotMinAggregateOutputType = {
    id: number | null
    eventTypeId: number | null
    daySlotId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventTypeOnDaySlotMaxAggregateOutputType = {
    id: number | null
    eventTypeId: number | null
    daySlotId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventTypeOnDaySlotCountAggregateOutputType = {
    id: number
    eventTypeId: number
    daySlotId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventTypeOnDaySlotAvgAggregateInputType = {
    id?: true
    eventTypeId?: true
    daySlotId?: true
  }

  export type EventTypeOnDaySlotSumAggregateInputType = {
    id?: true
    eventTypeId?: true
    daySlotId?: true
  }

  export type EventTypeOnDaySlotMinAggregateInputType = {
    id?: true
    eventTypeId?: true
    daySlotId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventTypeOnDaySlotMaxAggregateInputType = {
    id?: true
    eventTypeId?: true
    daySlotId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventTypeOnDaySlotCountAggregateInputType = {
    id?: true
    eventTypeId?: true
    daySlotId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventTypeOnDaySlotAggregateArgs = {
    /**
     * Filter which EventTypeOnDaySlot to aggregate.
     */
    where?: EventTypeOnDaySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypeOnDaySlots to fetch.
     */
    orderBy?: Enumerable<EventTypeOnDaySlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTypeOnDaySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypeOnDaySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypeOnDaySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTypeOnDaySlots
    **/
    _count?: true | EventTypeOnDaySlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventTypeOnDaySlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventTypeOnDaySlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTypeOnDaySlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTypeOnDaySlotMaxAggregateInputType
  }

  export type GetEventTypeOnDaySlotAggregateType<T extends EventTypeOnDaySlotAggregateArgs> = {
        [P in keyof T & keyof AggregateEventTypeOnDaySlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventTypeOnDaySlot[P]>
      : GetScalarType<T[P], AggregateEventTypeOnDaySlot[P]>
  }




  export type EventTypeOnDaySlotGroupByArgs = {
    where?: EventTypeOnDaySlotWhereInput
    orderBy?: Enumerable<EventTypeOnDaySlotOrderByWithAggregationInput>
    by: EventTypeOnDaySlotScalarFieldEnum[]
    having?: EventTypeOnDaySlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTypeOnDaySlotCountAggregateInputType | true
    _avg?: EventTypeOnDaySlotAvgAggregateInputType
    _sum?: EventTypeOnDaySlotSumAggregateInputType
    _min?: EventTypeOnDaySlotMinAggregateInputType
    _max?: EventTypeOnDaySlotMaxAggregateInputType
  }


  export type EventTypeOnDaySlotGroupByOutputType = {
    id: number
    eventTypeId: number
    daySlotId: number
    createdAt: Date
    updatedAt: Date
    _count: EventTypeOnDaySlotCountAggregateOutputType | null
    _avg: EventTypeOnDaySlotAvgAggregateOutputType | null
    _sum: EventTypeOnDaySlotSumAggregateOutputType | null
    _min: EventTypeOnDaySlotMinAggregateOutputType | null
    _max: EventTypeOnDaySlotMaxAggregateOutputType | null
  }

  type GetEventTypeOnDaySlotGroupByPayload<T extends EventTypeOnDaySlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EventTypeOnDaySlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTypeOnDaySlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTypeOnDaySlotGroupByOutputType[P]>
            : GetScalarType<T[P], EventTypeOnDaySlotGroupByOutputType[P]>
        }
      >
    >


  export type EventTypeOnDaySlotSelect = {
    id?: boolean
    eventTypeId?: boolean
    daySlotId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventType?: boolean | EventTypeArgs
    daySlot?: boolean | DaySlotArgs
  }


  export type EventTypeOnDaySlotInclude = {
    eventType?: boolean | EventTypeArgs
    daySlot?: boolean | DaySlotArgs
  }

  export type EventTypeOnDaySlotGetPayload<S extends boolean | null | undefined | EventTypeOnDaySlotArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EventTypeOnDaySlot :
    S extends undefined ? never :
    S extends { include: any } & (EventTypeOnDaySlotArgs | EventTypeOnDaySlotFindManyArgs)
    ? EventTypeOnDaySlot  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'eventType' ? EventTypeGetPayload<S['include'][P]> :
        P extends 'daySlot' ? DaySlotGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (EventTypeOnDaySlotArgs | EventTypeOnDaySlotFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'eventType' ? EventTypeGetPayload<S['select'][P]> :
        P extends 'daySlot' ? DaySlotGetPayload<S['select'][P]> :  P extends keyof EventTypeOnDaySlot ? EventTypeOnDaySlot[P] : never
  } 
      : EventTypeOnDaySlot


  type EventTypeOnDaySlotCountArgs = 
    Omit<EventTypeOnDaySlotFindManyArgs, 'select' | 'include'> & {
      select?: EventTypeOnDaySlotCountAggregateInputType | true
    }

  export interface EventTypeOnDaySlotDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one EventTypeOnDaySlot that matches the filter.
     * @param {EventTypeOnDaySlotFindUniqueArgs} args - Arguments to find a EventTypeOnDaySlot
     * @example
     * // Get one EventTypeOnDaySlot
     * const eventTypeOnDaySlot = await prisma.eventTypeOnDaySlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventTypeOnDaySlotFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EventTypeOnDaySlotFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'EventTypeOnDaySlot'> extends True ? Prisma__EventTypeOnDaySlotClient<EventTypeOnDaySlotGetPayload<T>> : Prisma__EventTypeOnDaySlotClient<EventTypeOnDaySlotGetPayload<T> | null, null>

    /**
     * Find one EventTypeOnDaySlot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventTypeOnDaySlotFindUniqueOrThrowArgs} args - Arguments to find a EventTypeOnDaySlot
     * @example
     * // Get one EventTypeOnDaySlot
     * const eventTypeOnDaySlot = await prisma.eventTypeOnDaySlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventTypeOnDaySlotFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EventTypeOnDaySlotFindUniqueOrThrowArgs>
    ): Prisma__EventTypeOnDaySlotClient<EventTypeOnDaySlotGetPayload<T>>

    /**
     * Find the first EventTypeOnDaySlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnDaySlotFindFirstArgs} args - Arguments to find a EventTypeOnDaySlot
     * @example
     * // Get one EventTypeOnDaySlot
     * const eventTypeOnDaySlot = await prisma.eventTypeOnDaySlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventTypeOnDaySlotFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EventTypeOnDaySlotFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'EventTypeOnDaySlot'> extends True ? Prisma__EventTypeOnDaySlotClient<EventTypeOnDaySlotGetPayload<T>> : Prisma__EventTypeOnDaySlotClient<EventTypeOnDaySlotGetPayload<T> | null, null>

    /**
     * Find the first EventTypeOnDaySlot that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnDaySlotFindFirstOrThrowArgs} args - Arguments to find a EventTypeOnDaySlot
     * @example
     * // Get one EventTypeOnDaySlot
     * const eventTypeOnDaySlot = await prisma.eventTypeOnDaySlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventTypeOnDaySlotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EventTypeOnDaySlotFindFirstOrThrowArgs>
    ): Prisma__EventTypeOnDaySlotClient<EventTypeOnDaySlotGetPayload<T>>

    /**
     * Find zero or more EventTypeOnDaySlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnDaySlotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTypeOnDaySlots
     * const eventTypeOnDaySlots = await prisma.eventTypeOnDaySlot.findMany()
     * 
     * // Get first 10 EventTypeOnDaySlots
     * const eventTypeOnDaySlots = await prisma.eventTypeOnDaySlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventTypeOnDaySlotWithIdOnly = await prisma.eventTypeOnDaySlot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventTypeOnDaySlotFindManyArgs>(
      args?: SelectSubset<T, EventTypeOnDaySlotFindManyArgs>
    ): Prisma.PrismaPromise<Array<EventTypeOnDaySlotGetPayload<T>>>

    /**
     * Create a EventTypeOnDaySlot.
     * @param {EventTypeOnDaySlotCreateArgs} args - Arguments to create a EventTypeOnDaySlot.
     * @example
     * // Create one EventTypeOnDaySlot
     * const EventTypeOnDaySlot = await prisma.eventTypeOnDaySlot.create({
     *   data: {
     *     // ... data to create a EventTypeOnDaySlot
     *   }
     * })
     * 
    **/
    create<T extends EventTypeOnDaySlotCreateArgs>(
      args: SelectSubset<T, EventTypeOnDaySlotCreateArgs>
    ): Prisma__EventTypeOnDaySlotClient<EventTypeOnDaySlotGetPayload<T>>

    /**
     * Create many EventTypeOnDaySlots.
     *     @param {EventTypeOnDaySlotCreateManyArgs} args - Arguments to create many EventTypeOnDaySlots.
     *     @example
     *     // Create many EventTypeOnDaySlots
     *     const eventTypeOnDaySlot = await prisma.eventTypeOnDaySlot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventTypeOnDaySlotCreateManyArgs>(
      args?: SelectSubset<T, EventTypeOnDaySlotCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventTypeOnDaySlot.
     * @param {EventTypeOnDaySlotDeleteArgs} args - Arguments to delete one EventTypeOnDaySlot.
     * @example
     * // Delete one EventTypeOnDaySlot
     * const EventTypeOnDaySlot = await prisma.eventTypeOnDaySlot.delete({
     *   where: {
     *     // ... filter to delete one EventTypeOnDaySlot
     *   }
     * })
     * 
    **/
    delete<T extends EventTypeOnDaySlotDeleteArgs>(
      args: SelectSubset<T, EventTypeOnDaySlotDeleteArgs>
    ): Prisma__EventTypeOnDaySlotClient<EventTypeOnDaySlotGetPayload<T>>

    /**
     * Update one EventTypeOnDaySlot.
     * @param {EventTypeOnDaySlotUpdateArgs} args - Arguments to update one EventTypeOnDaySlot.
     * @example
     * // Update one EventTypeOnDaySlot
     * const eventTypeOnDaySlot = await prisma.eventTypeOnDaySlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventTypeOnDaySlotUpdateArgs>(
      args: SelectSubset<T, EventTypeOnDaySlotUpdateArgs>
    ): Prisma__EventTypeOnDaySlotClient<EventTypeOnDaySlotGetPayload<T>>

    /**
     * Delete zero or more EventTypeOnDaySlots.
     * @param {EventTypeOnDaySlotDeleteManyArgs} args - Arguments to filter EventTypeOnDaySlots to delete.
     * @example
     * // Delete a few EventTypeOnDaySlots
     * const { count } = await prisma.eventTypeOnDaySlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventTypeOnDaySlotDeleteManyArgs>(
      args?: SelectSubset<T, EventTypeOnDaySlotDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTypeOnDaySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnDaySlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTypeOnDaySlots
     * const eventTypeOnDaySlot = await prisma.eventTypeOnDaySlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventTypeOnDaySlotUpdateManyArgs>(
      args: SelectSubset<T, EventTypeOnDaySlotUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventTypeOnDaySlot.
     * @param {EventTypeOnDaySlotUpsertArgs} args - Arguments to update or create a EventTypeOnDaySlot.
     * @example
     * // Update or create a EventTypeOnDaySlot
     * const eventTypeOnDaySlot = await prisma.eventTypeOnDaySlot.upsert({
     *   create: {
     *     // ... data to create a EventTypeOnDaySlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventTypeOnDaySlot we want to update
     *   }
     * })
    **/
    upsert<T extends EventTypeOnDaySlotUpsertArgs>(
      args: SelectSubset<T, EventTypeOnDaySlotUpsertArgs>
    ): Prisma__EventTypeOnDaySlotClient<EventTypeOnDaySlotGetPayload<T>>

    /**
     * Count the number of EventTypeOnDaySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnDaySlotCountArgs} args - Arguments to filter EventTypeOnDaySlots to count.
     * @example
     * // Count the number of EventTypeOnDaySlots
     * const count = await prisma.eventTypeOnDaySlot.count({
     *   where: {
     *     // ... the filter for the EventTypeOnDaySlots we want to count
     *   }
     * })
    **/
    count<T extends EventTypeOnDaySlotCountArgs>(
      args?: Subset<T, EventTypeOnDaySlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTypeOnDaySlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventTypeOnDaySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnDaySlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventTypeOnDaySlotAggregateArgs>(args: Subset<T, EventTypeOnDaySlotAggregateArgs>): Prisma.PrismaPromise<GetEventTypeOnDaySlotAggregateType<T>>

    /**
     * Group by EventTypeOnDaySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnDaySlotGroupByArgs} args - Group by arguments.
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
      T extends EventTypeOnDaySlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTypeOnDaySlotGroupByArgs['orderBy'] }
        : { orderBy?: EventTypeOnDaySlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventTypeOnDaySlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTypeOnDaySlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for EventTypeOnDaySlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EventTypeOnDaySlotClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    eventType<T extends EventTypeArgs= {}>(args?: Subset<T, EventTypeArgs>): Prisma__EventTypeClient<EventTypeGetPayload<T> | Null>;

    daySlot<T extends DaySlotArgs= {}>(args?: Subset<T, DaySlotArgs>): Prisma__DaySlotClient<DaySlotGetPayload<T> | Null>;

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
   * EventTypeOnDaySlot base type for findUnique actions
   */
  export type EventTypeOnDaySlotFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the EventTypeOnDaySlot
     */
    select?: EventTypeOnDaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnDaySlotInclude | null
    /**
     * Filter, which EventTypeOnDaySlot to fetch.
     */
    where: EventTypeOnDaySlotWhereUniqueInput
  }

  /**
   * EventTypeOnDaySlot findUnique
   */
  export interface EventTypeOnDaySlotFindUniqueArgs extends EventTypeOnDaySlotFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EventTypeOnDaySlot findUniqueOrThrow
   */
  export type EventTypeOnDaySlotFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnDaySlot
     */
    select?: EventTypeOnDaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnDaySlotInclude | null
    /**
     * Filter, which EventTypeOnDaySlot to fetch.
     */
    where: EventTypeOnDaySlotWhereUniqueInput
  }


  /**
   * EventTypeOnDaySlot base type for findFirst actions
   */
  export type EventTypeOnDaySlotFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the EventTypeOnDaySlot
     */
    select?: EventTypeOnDaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnDaySlotInclude | null
    /**
     * Filter, which EventTypeOnDaySlot to fetch.
     */
    where?: EventTypeOnDaySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypeOnDaySlots to fetch.
     */
    orderBy?: Enumerable<EventTypeOnDaySlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypeOnDaySlots.
     */
    cursor?: EventTypeOnDaySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypeOnDaySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypeOnDaySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypeOnDaySlots.
     */
    distinct?: Enumerable<EventTypeOnDaySlotScalarFieldEnum>
  }

  /**
   * EventTypeOnDaySlot findFirst
   */
  export interface EventTypeOnDaySlotFindFirstArgs extends EventTypeOnDaySlotFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EventTypeOnDaySlot findFirstOrThrow
   */
  export type EventTypeOnDaySlotFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnDaySlot
     */
    select?: EventTypeOnDaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnDaySlotInclude | null
    /**
     * Filter, which EventTypeOnDaySlot to fetch.
     */
    where?: EventTypeOnDaySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypeOnDaySlots to fetch.
     */
    orderBy?: Enumerable<EventTypeOnDaySlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypeOnDaySlots.
     */
    cursor?: EventTypeOnDaySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypeOnDaySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypeOnDaySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypeOnDaySlots.
     */
    distinct?: Enumerable<EventTypeOnDaySlotScalarFieldEnum>
  }


  /**
   * EventTypeOnDaySlot findMany
   */
  export type EventTypeOnDaySlotFindManyArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnDaySlot
     */
    select?: EventTypeOnDaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnDaySlotInclude | null
    /**
     * Filter, which EventTypeOnDaySlots to fetch.
     */
    where?: EventTypeOnDaySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypeOnDaySlots to fetch.
     */
    orderBy?: Enumerable<EventTypeOnDaySlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTypeOnDaySlots.
     */
    cursor?: EventTypeOnDaySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypeOnDaySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypeOnDaySlots.
     */
    skip?: number
    distinct?: Enumerable<EventTypeOnDaySlotScalarFieldEnum>
  }


  /**
   * EventTypeOnDaySlot create
   */
  export type EventTypeOnDaySlotCreateArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnDaySlot
     */
    select?: EventTypeOnDaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnDaySlotInclude | null
    /**
     * The data needed to create a EventTypeOnDaySlot.
     */
    data: XOR<EventTypeOnDaySlotCreateInput, EventTypeOnDaySlotUncheckedCreateInput>
  }


  /**
   * EventTypeOnDaySlot createMany
   */
  export type EventTypeOnDaySlotCreateManyArgs = {
    /**
     * The data used to create many EventTypeOnDaySlots.
     */
    data: Enumerable<EventTypeOnDaySlotCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * EventTypeOnDaySlot update
   */
  export type EventTypeOnDaySlotUpdateArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnDaySlot
     */
    select?: EventTypeOnDaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnDaySlotInclude | null
    /**
     * The data needed to update a EventTypeOnDaySlot.
     */
    data: XOR<EventTypeOnDaySlotUpdateInput, EventTypeOnDaySlotUncheckedUpdateInput>
    /**
     * Choose, which EventTypeOnDaySlot to update.
     */
    where: EventTypeOnDaySlotWhereUniqueInput
  }


  /**
   * EventTypeOnDaySlot updateMany
   */
  export type EventTypeOnDaySlotUpdateManyArgs = {
    /**
     * The data used to update EventTypeOnDaySlots.
     */
    data: XOR<EventTypeOnDaySlotUpdateManyMutationInput, EventTypeOnDaySlotUncheckedUpdateManyInput>
    /**
     * Filter which EventTypeOnDaySlots to update
     */
    where?: EventTypeOnDaySlotWhereInput
  }


  /**
   * EventTypeOnDaySlot upsert
   */
  export type EventTypeOnDaySlotUpsertArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnDaySlot
     */
    select?: EventTypeOnDaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnDaySlotInclude | null
    /**
     * The filter to search for the EventTypeOnDaySlot to update in case it exists.
     */
    where: EventTypeOnDaySlotWhereUniqueInput
    /**
     * In case the EventTypeOnDaySlot found by the `where` argument doesn't exist, create a new EventTypeOnDaySlot with this data.
     */
    create: XOR<EventTypeOnDaySlotCreateInput, EventTypeOnDaySlotUncheckedCreateInput>
    /**
     * In case the EventTypeOnDaySlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTypeOnDaySlotUpdateInput, EventTypeOnDaySlotUncheckedUpdateInput>
  }


  /**
   * EventTypeOnDaySlot delete
   */
  export type EventTypeOnDaySlotDeleteArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnDaySlot
     */
    select?: EventTypeOnDaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnDaySlotInclude | null
    /**
     * Filter which EventTypeOnDaySlot to delete.
     */
    where: EventTypeOnDaySlotWhereUniqueInput
  }


  /**
   * EventTypeOnDaySlot deleteMany
   */
  export type EventTypeOnDaySlotDeleteManyArgs = {
    /**
     * Filter which EventTypeOnDaySlots to delete
     */
    where?: EventTypeOnDaySlotWhereInput
  }


  /**
   * EventTypeOnDaySlot without action
   */
  export type EventTypeOnDaySlotArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnDaySlot
     */
    select?: EventTypeOnDaySlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnDaySlotInclude | null
  }



  /**
   * Model Location
   */


  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs = {
    where?: LocationWhereInput
    orderBy?: Enumerable<LocationOrderByWithAggregationInput>
    by: LocationScalarFieldEnum[]
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }


  export type LocationGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventTypeOnLocations?: boolean | Location$eventTypeOnLocationsArgs
    groupMeetings?: boolean | Location$groupMeetingsArgs
    _count?: boolean | LocationCountOutputTypeArgs
  }


  export type LocationInclude = {
    eventTypeOnLocations?: boolean | Location$eventTypeOnLocationsArgs
    groupMeetings?: boolean | Location$groupMeetingsArgs
    _count?: boolean | LocationCountOutputTypeArgs
  }

  export type LocationGetPayload<S extends boolean | null | undefined | LocationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Location :
    S extends undefined ? never :
    S extends { include: any } & (LocationArgs | LocationFindManyArgs)
    ? Location  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'eventTypeOnLocations' ? Array < EventTypeOnLocationGetPayload<S['include'][P]>>  :
        P extends 'groupMeetings' ? Array < GroupMeetingGetPayload<S['include'][P]>>  :
        P extends '_count' ? LocationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LocationArgs | LocationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'eventTypeOnLocations' ? Array < EventTypeOnLocationGetPayload<S['select'][P]>>  :
        P extends 'groupMeetings' ? Array < GroupMeetingGetPayload<S['select'][P]>>  :
        P extends '_count' ? LocationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Location ? Location[P] : never
  } 
      : Location


  type LocationCountArgs = 
    Omit<LocationFindManyArgs, 'select' | 'include'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LocationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LocationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Location'> extends True ? Prisma__LocationClient<LocationGetPayload<T>> : Prisma__LocationClient<LocationGetPayload<T> | null, null>

    /**
     * Find one Location that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LocationFindUniqueOrThrowArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LocationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LocationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Location'> extends True ? Prisma__LocationClient<LocationGetPayload<T>> : Prisma__LocationClient<LocationGetPayload<T> | null, null>

    /**
     * Find the first Location that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LocationFindFirstOrThrowArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LocationFindManyArgs>(
      args?: SelectSubset<T, LocationFindManyArgs>
    ): Prisma.PrismaPromise<Array<LocationGetPayload<T>>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
    **/
    create<T extends LocationCreateArgs>(
      args: SelectSubset<T, LocationCreateArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Create many Locations.
     *     @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     *     @example
     *     // Create many Locations
     *     const location = await prisma.location.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LocationCreateManyArgs>(
      args?: SelectSubset<T, LocationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
    **/
    delete<T extends LocationDeleteArgs>(
      args: SelectSubset<T, LocationDeleteArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LocationUpdateArgs>(
      args: SelectSubset<T, LocationUpdateArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LocationDeleteManyArgs>(
      args?: SelectSubset<T, LocationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LocationUpdateManyArgs>(
      args: SelectSubset<T, LocationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
    **/
    upsert<T extends LocationUpsertArgs>(
      args: SelectSubset<T, LocationUpsertArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LocationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    eventTypeOnLocations<T extends Location$eventTypeOnLocationsArgs= {}>(args?: Subset<T, Location$eventTypeOnLocationsArgs>): Prisma.PrismaPromise<Array<EventTypeOnLocationGetPayload<T>>| Null>;

    groupMeetings<T extends Location$groupMeetingsArgs= {}>(args?: Subset<T, Location$groupMeetingsArgs>): Prisma.PrismaPromise<Array<GroupMeetingGetPayload<T>>| Null>;

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
   * Location base type for findUnique actions
   */
  export type LocationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUnique
   */
  export interface LocationFindUniqueArgs extends LocationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location base type for findFirst actions
   */
  export type LocationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: Enumerable<LocationScalarFieldEnum>
  }

  /**
   * Location findFirst
   */
  export interface LocationFindFirstArgs extends LocationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * Location findMany
   */
  export type LocationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * Location create
   */
  export type LocationCreateArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }


  /**
   * Location createMany
   */
  export type LocationCreateManyArgs = {
    /**
     * The data used to create many Locations.
     */
    data: Enumerable<LocationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Location update
   */
  export type LocationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
  }


  /**
   * Location upsert
   */
  export type LocationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }


  /**
   * Location delete
   */
  export type LocationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
  }


  /**
   * Location.eventTypeOnLocations
   */
  export type Location$eventTypeOnLocationsArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    where?: EventTypeOnLocationWhereInput
    orderBy?: Enumerable<EventTypeOnLocationOrderByWithRelationInput>
    cursor?: EventTypeOnLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EventTypeOnLocationScalarFieldEnum>
  }


  /**
   * Location.groupMeetings
   */
  export type Location$groupMeetingsArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    where?: GroupMeetingWhereInput
    orderBy?: Enumerable<GroupMeetingOrderByWithRelationInput>
    cursor?: GroupMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GroupMeetingScalarFieldEnum>
  }


  /**
   * Location without action
   */
  export type LocationArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
  }



  /**
   * Model EventTypeOnLocation
   */


  export type AggregateEventTypeOnLocation = {
    _count: EventTypeOnLocationCountAggregateOutputType | null
    _avg: EventTypeOnLocationAvgAggregateOutputType | null
    _sum: EventTypeOnLocationSumAggregateOutputType | null
    _min: EventTypeOnLocationMinAggregateOutputType | null
    _max: EventTypeOnLocationMaxAggregateOutputType | null
  }

  export type EventTypeOnLocationAvgAggregateOutputType = {
    id: number | null
    eventTypeId: number | null
    locationId: number | null
  }

  export type EventTypeOnLocationSumAggregateOutputType = {
    id: number | null
    eventTypeId: number | null
    locationId: number | null
  }

  export type EventTypeOnLocationMinAggregateOutputType = {
    id: number | null
    eventTypeId: number | null
    locationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventTypeOnLocationMaxAggregateOutputType = {
    id: number | null
    eventTypeId: number | null
    locationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventTypeOnLocationCountAggregateOutputType = {
    id: number
    eventTypeId: number
    locationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventTypeOnLocationAvgAggregateInputType = {
    id?: true
    eventTypeId?: true
    locationId?: true
  }

  export type EventTypeOnLocationSumAggregateInputType = {
    id?: true
    eventTypeId?: true
    locationId?: true
  }

  export type EventTypeOnLocationMinAggregateInputType = {
    id?: true
    eventTypeId?: true
    locationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventTypeOnLocationMaxAggregateInputType = {
    id?: true
    eventTypeId?: true
    locationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventTypeOnLocationCountAggregateInputType = {
    id?: true
    eventTypeId?: true
    locationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventTypeOnLocationAggregateArgs = {
    /**
     * Filter which EventTypeOnLocation to aggregate.
     */
    where?: EventTypeOnLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypeOnLocations to fetch.
     */
    orderBy?: Enumerable<EventTypeOnLocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTypeOnLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypeOnLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypeOnLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTypeOnLocations
    **/
    _count?: true | EventTypeOnLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventTypeOnLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventTypeOnLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTypeOnLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTypeOnLocationMaxAggregateInputType
  }

  export type GetEventTypeOnLocationAggregateType<T extends EventTypeOnLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateEventTypeOnLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventTypeOnLocation[P]>
      : GetScalarType<T[P], AggregateEventTypeOnLocation[P]>
  }




  export type EventTypeOnLocationGroupByArgs = {
    where?: EventTypeOnLocationWhereInput
    orderBy?: Enumerable<EventTypeOnLocationOrderByWithAggregationInput>
    by: EventTypeOnLocationScalarFieldEnum[]
    having?: EventTypeOnLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTypeOnLocationCountAggregateInputType | true
    _avg?: EventTypeOnLocationAvgAggregateInputType
    _sum?: EventTypeOnLocationSumAggregateInputType
    _min?: EventTypeOnLocationMinAggregateInputType
    _max?: EventTypeOnLocationMaxAggregateInputType
  }


  export type EventTypeOnLocationGroupByOutputType = {
    id: number
    eventTypeId: number
    locationId: number
    createdAt: Date
    updatedAt: Date
    _count: EventTypeOnLocationCountAggregateOutputType | null
    _avg: EventTypeOnLocationAvgAggregateOutputType | null
    _sum: EventTypeOnLocationSumAggregateOutputType | null
    _min: EventTypeOnLocationMinAggregateOutputType | null
    _max: EventTypeOnLocationMaxAggregateOutputType | null
  }

  type GetEventTypeOnLocationGroupByPayload<T extends EventTypeOnLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EventTypeOnLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTypeOnLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTypeOnLocationGroupByOutputType[P]>
            : GetScalarType<T[P], EventTypeOnLocationGroupByOutputType[P]>
        }
      >
    >


  export type EventTypeOnLocationSelect = {
    id?: boolean
    eventTypeId?: boolean
    locationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventType?: boolean | EventTypeArgs
    location?: boolean | LocationArgs
  }


  export type EventTypeOnLocationInclude = {
    eventType?: boolean | EventTypeArgs
    location?: boolean | LocationArgs
  }

  export type EventTypeOnLocationGetPayload<S extends boolean | null | undefined | EventTypeOnLocationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EventTypeOnLocation :
    S extends undefined ? never :
    S extends { include: any } & (EventTypeOnLocationArgs | EventTypeOnLocationFindManyArgs)
    ? EventTypeOnLocation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'eventType' ? EventTypeGetPayload<S['include'][P]> :
        P extends 'location' ? LocationGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (EventTypeOnLocationArgs | EventTypeOnLocationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'eventType' ? EventTypeGetPayload<S['select'][P]> :
        P extends 'location' ? LocationGetPayload<S['select'][P]> :  P extends keyof EventTypeOnLocation ? EventTypeOnLocation[P] : never
  } 
      : EventTypeOnLocation


  type EventTypeOnLocationCountArgs = 
    Omit<EventTypeOnLocationFindManyArgs, 'select' | 'include'> & {
      select?: EventTypeOnLocationCountAggregateInputType | true
    }

  export interface EventTypeOnLocationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one EventTypeOnLocation that matches the filter.
     * @param {EventTypeOnLocationFindUniqueArgs} args - Arguments to find a EventTypeOnLocation
     * @example
     * // Get one EventTypeOnLocation
     * const eventTypeOnLocation = await prisma.eventTypeOnLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventTypeOnLocationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EventTypeOnLocationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'EventTypeOnLocation'> extends True ? Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>> : Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T> | null, null>

    /**
     * Find one EventTypeOnLocation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventTypeOnLocationFindUniqueOrThrowArgs} args - Arguments to find a EventTypeOnLocation
     * @example
     * // Get one EventTypeOnLocation
     * const eventTypeOnLocation = await prisma.eventTypeOnLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventTypeOnLocationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EventTypeOnLocationFindUniqueOrThrowArgs>
    ): Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>>

    /**
     * Find the first EventTypeOnLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnLocationFindFirstArgs} args - Arguments to find a EventTypeOnLocation
     * @example
     * // Get one EventTypeOnLocation
     * const eventTypeOnLocation = await prisma.eventTypeOnLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventTypeOnLocationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EventTypeOnLocationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'EventTypeOnLocation'> extends True ? Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>> : Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T> | null, null>

    /**
     * Find the first EventTypeOnLocation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnLocationFindFirstOrThrowArgs} args - Arguments to find a EventTypeOnLocation
     * @example
     * // Get one EventTypeOnLocation
     * const eventTypeOnLocation = await prisma.eventTypeOnLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventTypeOnLocationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EventTypeOnLocationFindFirstOrThrowArgs>
    ): Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>>

    /**
     * Find zero or more EventTypeOnLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnLocationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTypeOnLocations
     * const eventTypeOnLocations = await prisma.eventTypeOnLocation.findMany()
     * 
     * // Get first 10 EventTypeOnLocations
     * const eventTypeOnLocations = await prisma.eventTypeOnLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventTypeOnLocationWithIdOnly = await prisma.eventTypeOnLocation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventTypeOnLocationFindManyArgs>(
      args?: SelectSubset<T, EventTypeOnLocationFindManyArgs>
    ): Prisma.PrismaPromise<Array<EventTypeOnLocationGetPayload<T>>>

    /**
     * Create a EventTypeOnLocation.
     * @param {EventTypeOnLocationCreateArgs} args - Arguments to create a EventTypeOnLocation.
     * @example
     * // Create one EventTypeOnLocation
     * const EventTypeOnLocation = await prisma.eventTypeOnLocation.create({
     *   data: {
     *     // ... data to create a EventTypeOnLocation
     *   }
     * })
     * 
    **/
    create<T extends EventTypeOnLocationCreateArgs>(
      args: SelectSubset<T, EventTypeOnLocationCreateArgs>
    ): Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>>

    /**
     * Create many EventTypeOnLocations.
     *     @param {EventTypeOnLocationCreateManyArgs} args - Arguments to create many EventTypeOnLocations.
     *     @example
     *     // Create many EventTypeOnLocations
     *     const eventTypeOnLocation = await prisma.eventTypeOnLocation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventTypeOnLocationCreateManyArgs>(
      args?: SelectSubset<T, EventTypeOnLocationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventTypeOnLocation.
     * @param {EventTypeOnLocationDeleteArgs} args - Arguments to delete one EventTypeOnLocation.
     * @example
     * // Delete one EventTypeOnLocation
     * const EventTypeOnLocation = await prisma.eventTypeOnLocation.delete({
     *   where: {
     *     // ... filter to delete one EventTypeOnLocation
     *   }
     * })
     * 
    **/
    delete<T extends EventTypeOnLocationDeleteArgs>(
      args: SelectSubset<T, EventTypeOnLocationDeleteArgs>
    ): Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>>

    /**
     * Update one EventTypeOnLocation.
     * @param {EventTypeOnLocationUpdateArgs} args - Arguments to update one EventTypeOnLocation.
     * @example
     * // Update one EventTypeOnLocation
     * const eventTypeOnLocation = await prisma.eventTypeOnLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventTypeOnLocationUpdateArgs>(
      args: SelectSubset<T, EventTypeOnLocationUpdateArgs>
    ): Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>>

    /**
     * Delete zero or more EventTypeOnLocations.
     * @param {EventTypeOnLocationDeleteManyArgs} args - Arguments to filter EventTypeOnLocations to delete.
     * @example
     * // Delete a few EventTypeOnLocations
     * const { count } = await prisma.eventTypeOnLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventTypeOnLocationDeleteManyArgs>(
      args?: SelectSubset<T, EventTypeOnLocationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTypeOnLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTypeOnLocations
     * const eventTypeOnLocation = await prisma.eventTypeOnLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventTypeOnLocationUpdateManyArgs>(
      args: SelectSubset<T, EventTypeOnLocationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventTypeOnLocation.
     * @param {EventTypeOnLocationUpsertArgs} args - Arguments to update or create a EventTypeOnLocation.
     * @example
     * // Update or create a EventTypeOnLocation
     * const eventTypeOnLocation = await prisma.eventTypeOnLocation.upsert({
     *   create: {
     *     // ... data to create a EventTypeOnLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventTypeOnLocation we want to update
     *   }
     * })
    **/
    upsert<T extends EventTypeOnLocationUpsertArgs>(
      args: SelectSubset<T, EventTypeOnLocationUpsertArgs>
    ): Prisma__EventTypeOnLocationClient<EventTypeOnLocationGetPayload<T>>

    /**
     * Count the number of EventTypeOnLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnLocationCountArgs} args - Arguments to filter EventTypeOnLocations to count.
     * @example
     * // Count the number of EventTypeOnLocations
     * const count = await prisma.eventTypeOnLocation.count({
     *   where: {
     *     // ... the filter for the EventTypeOnLocations we want to count
     *   }
     * })
    **/
    count<T extends EventTypeOnLocationCountArgs>(
      args?: Subset<T, EventTypeOnLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTypeOnLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventTypeOnLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventTypeOnLocationAggregateArgs>(args: Subset<T, EventTypeOnLocationAggregateArgs>): Prisma.PrismaPromise<GetEventTypeOnLocationAggregateType<T>>

    /**
     * Group by EventTypeOnLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeOnLocationGroupByArgs} args - Group by arguments.
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
      T extends EventTypeOnLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTypeOnLocationGroupByArgs['orderBy'] }
        : { orderBy?: EventTypeOnLocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventTypeOnLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTypeOnLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for EventTypeOnLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EventTypeOnLocationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    eventType<T extends EventTypeArgs= {}>(args?: Subset<T, EventTypeArgs>): Prisma__EventTypeClient<EventTypeGetPayload<T> | Null>;

    location<T extends LocationArgs= {}>(args?: Subset<T, LocationArgs>): Prisma__LocationClient<LocationGetPayload<T> | Null>;

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
   * EventTypeOnLocation base type for findUnique actions
   */
  export type EventTypeOnLocationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * Filter, which EventTypeOnLocation to fetch.
     */
    where: EventTypeOnLocationWhereUniqueInput
  }

  /**
   * EventTypeOnLocation findUnique
   */
  export interface EventTypeOnLocationFindUniqueArgs extends EventTypeOnLocationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EventTypeOnLocation findUniqueOrThrow
   */
  export type EventTypeOnLocationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * Filter, which EventTypeOnLocation to fetch.
     */
    where: EventTypeOnLocationWhereUniqueInput
  }


  /**
   * EventTypeOnLocation base type for findFirst actions
   */
  export type EventTypeOnLocationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * Filter, which EventTypeOnLocation to fetch.
     */
    where?: EventTypeOnLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypeOnLocations to fetch.
     */
    orderBy?: Enumerable<EventTypeOnLocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypeOnLocations.
     */
    cursor?: EventTypeOnLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypeOnLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypeOnLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypeOnLocations.
     */
    distinct?: Enumerable<EventTypeOnLocationScalarFieldEnum>
  }

  /**
   * EventTypeOnLocation findFirst
   */
  export interface EventTypeOnLocationFindFirstArgs extends EventTypeOnLocationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EventTypeOnLocation findFirstOrThrow
   */
  export type EventTypeOnLocationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * Filter, which EventTypeOnLocation to fetch.
     */
    where?: EventTypeOnLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypeOnLocations to fetch.
     */
    orderBy?: Enumerable<EventTypeOnLocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypeOnLocations.
     */
    cursor?: EventTypeOnLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypeOnLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypeOnLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypeOnLocations.
     */
    distinct?: Enumerable<EventTypeOnLocationScalarFieldEnum>
  }


  /**
   * EventTypeOnLocation findMany
   */
  export type EventTypeOnLocationFindManyArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * Filter, which EventTypeOnLocations to fetch.
     */
    where?: EventTypeOnLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypeOnLocations to fetch.
     */
    orderBy?: Enumerable<EventTypeOnLocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTypeOnLocations.
     */
    cursor?: EventTypeOnLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypeOnLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypeOnLocations.
     */
    skip?: number
    distinct?: Enumerable<EventTypeOnLocationScalarFieldEnum>
  }


  /**
   * EventTypeOnLocation create
   */
  export type EventTypeOnLocationCreateArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * The data needed to create a EventTypeOnLocation.
     */
    data: XOR<EventTypeOnLocationCreateInput, EventTypeOnLocationUncheckedCreateInput>
  }


  /**
   * EventTypeOnLocation createMany
   */
  export type EventTypeOnLocationCreateManyArgs = {
    /**
     * The data used to create many EventTypeOnLocations.
     */
    data: Enumerable<EventTypeOnLocationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * EventTypeOnLocation update
   */
  export type EventTypeOnLocationUpdateArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * The data needed to update a EventTypeOnLocation.
     */
    data: XOR<EventTypeOnLocationUpdateInput, EventTypeOnLocationUncheckedUpdateInput>
    /**
     * Choose, which EventTypeOnLocation to update.
     */
    where: EventTypeOnLocationWhereUniqueInput
  }


  /**
   * EventTypeOnLocation updateMany
   */
  export type EventTypeOnLocationUpdateManyArgs = {
    /**
     * The data used to update EventTypeOnLocations.
     */
    data: XOR<EventTypeOnLocationUpdateManyMutationInput, EventTypeOnLocationUncheckedUpdateManyInput>
    /**
     * Filter which EventTypeOnLocations to update
     */
    where?: EventTypeOnLocationWhereInput
  }


  /**
   * EventTypeOnLocation upsert
   */
  export type EventTypeOnLocationUpsertArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * The filter to search for the EventTypeOnLocation to update in case it exists.
     */
    where: EventTypeOnLocationWhereUniqueInput
    /**
     * In case the EventTypeOnLocation found by the `where` argument doesn't exist, create a new EventTypeOnLocation with this data.
     */
    create: XOR<EventTypeOnLocationCreateInput, EventTypeOnLocationUncheckedCreateInput>
    /**
     * In case the EventTypeOnLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTypeOnLocationUpdateInput, EventTypeOnLocationUncheckedUpdateInput>
  }


  /**
   * EventTypeOnLocation delete
   */
  export type EventTypeOnLocationDeleteArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
    /**
     * Filter which EventTypeOnLocation to delete.
     */
    where: EventTypeOnLocationWhereUniqueInput
  }


  /**
   * EventTypeOnLocation deleteMany
   */
  export type EventTypeOnLocationDeleteManyArgs = {
    /**
     * Filter which EventTypeOnLocations to delete
     */
    where?: EventTypeOnLocationWhereInput
  }


  /**
   * EventTypeOnLocation without action
   */
  export type EventTypeOnLocationArgs = {
    /**
     * Select specific fields to fetch from the EventTypeOnLocation
     */
    select?: EventTypeOnLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeOnLocationInclude | null
  }



  /**
   * Model AvailabilitySchedule
   */


  export type AggregateAvailabilitySchedule = {
    _count: AvailabilityScheduleCountAggregateOutputType | null
    _avg: AvailabilityScheduleAvgAggregateOutputType | null
    _sum: AvailabilityScheduleSumAggregateOutputType | null
    _min: AvailabilityScheduleMinAggregateOutputType | null
    _max: AvailabilityScheduleMaxAggregateOutputType | null
  }

  export type AvailabilityScheduleAvgAggregateOutputType = {
    id: number | null
  }

  export type AvailabilityScheduleSumAggregateOutputType = {
    id: number | null
  }

  export type AvailabilityScheduleMinAggregateOutputType = {
    id: number | null
    name: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityScheduleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityScheduleCountAggregateOutputType = {
    id: number
    name: number
    timezone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvailabilityScheduleAvgAggregateInputType = {
    id?: true
  }

  export type AvailabilityScheduleSumAggregateInputType = {
    id?: true
  }

  export type AvailabilityScheduleMinAggregateInputType = {
    id?: true
    name?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityScheduleMaxAggregateInputType = {
    id?: true
    name?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityScheduleCountAggregateInputType = {
    id?: true
    name?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvailabilityScheduleAggregateArgs = {
    /**
     * Filter which AvailabilitySchedule to aggregate.
     */
    where?: AvailabilityScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySchedules to fetch.
     */
    orderBy?: Enumerable<AvailabilityScheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilitySchedules
    **/
    _count?: true | AvailabilityScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilityScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityScheduleMaxAggregateInputType
  }

  export type GetAvailabilityScheduleAggregateType<T extends AvailabilityScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilitySchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilitySchedule[P]>
      : GetScalarType<T[P], AggregateAvailabilitySchedule[P]>
  }




  export type AvailabilityScheduleGroupByArgs = {
    where?: AvailabilityScheduleWhereInput
    orderBy?: Enumerable<AvailabilityScheduleOrderByWithAggregationInput>
    by: AvailabilityScheduleScalarFieldEnum[]
    having?: AvailabilityScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityScheduleCountAggregateInputType | true
    _avg?: AvailabilityScheduleAvgAggregateInputType
    _sum?: AvailabilityScheduleSumAggregateInputType
    _min?: AvailabilityScheduleMinAggregateInputType
    _max?: AvailabilityScheduleMaxAggregateInputType
  }


  export type AvailabilityScheduleGroupByOutputType = {
    id: number
    name: string
    timezone: string
    createdAt: Date
    updatedAt: Date
    _count: AvailabilityScheduleCountAggregateOutputType | null
    _avg: AvailabilityScheduleAvgAggregateOutputType | null
    _sum: AvailabilityScheduleSumAggregateOutputType | null
    _min: AvailabilityScheduleMinAggregateOutputType | null
    _max: AvailabilityScheduleMaxAggregateOutputType | null
  }

  type GetAvailabilityScheduleGroupByPayload<T extends AvailabilityScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AvailabilityScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityScheduleGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilityScheduleSelect = {
    id?: boolean
    name?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventTypes?: boolean | AvailabilitySchedule$eventTypesArgs
    dateSlots?: boolean | AvailabilitySchedule$dateSlotsArgs
    _count?: boolean | AvailabilityScheduleCountOutputTypeArgs
  }


  export type AvailabilityScheduleInclude = {
    eventTypes?: boolean | AvailabilitySchedule$eventTypesArgs
    dateSlots?: boolean | AvailabilitySchedule$dateSlotsArgs
    _count?: boolean | AvailabilityScheduleCountOutputTypeArgs
  }

  export type AvailabilityScheduleGetPayload<S extends boolean | null | undefined | AvailabilityScheduleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AvailabilitySchedule :
    S extends undefined ? never :
    S extends { include: any } & (AvailabilityScheduleArgs | AvailabilityScheduleFindManyArgs)
    ? AvailabilitySchedule  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'eventTypes' ? Array < EventTypeGetPayload<S['include'][P]>>  :
        P extends 'dateSlots' ? Array < DateSlotGetPayload<S['include'][P]>>  :
        P extends '_count' ? AvailabilityScheduleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AvailabilityScheduleArgs | AvailabilityScheduleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'eventTypes' ? Array < EventTypeGetPayload<S['select'][P]>>  :
        P extends 'dateSlots' ? Array < DateSlotGetPayload<S['select'][P]>>  :
        P extends '_count' ? AvailabilityScheduleCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof AvailabilitySchedule ? AvailabilitySchedule[P] : never
  } 
      : AvailabilitySchedule


  type AvailabilityScheduleCountArgs = 
    Omit<AvailabilityScheduleFindManyArgs, 'select' | 'include'> & {
      select?: AvailabilityScheduleCountAggregateInputType | true
    }

  export interface AvailabilityScheduleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one AvailabilitySchedule that matches the filter.
     * @param {AvailabilityScheduleFindUniqueArgs} args - Arguments to find a AvailabilitySchedule
     * @example
     * // Get one AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AvailabilityScheduleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AvailabilityScheduleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AvailabilitySchedule'> extends True ? Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>> : Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T> | null, null>

    /**
     * Find one AvailabilitySchedule that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AvailabilityScheduleFindUniqueOrThrowArgs} args - Arguments to find a AvailabilitySchedule
     * @example
     * // Get one AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AvailabilityScheduleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AvailabilityScheduleFindUniqueOrThrowArgs>
    ): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>>

    /**
     * Find the first AvailabilitySchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleFindFirstArgs} args - Arguments to find a AvailabilitySchedule
     * @example
     * // Get one AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AvailabilityScheduleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AvailabilityScheduleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AvailabilitySchedule'> extends True ? Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>> : Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T> | null, null>

    /**
     * Find the first AvailabilitySchedule that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleFindFirstOrThrowArgs} args - Arguments to find a AvailabilitySchedule
     * @example
     * // Get one AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AvailabilityScheduleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AvailabilityScheduleFindFirstOrThrowArgs>
    ): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>>

    /**
     * Find zero or more AvailabilitySchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilitySchedules
     * const availabilitySchedules = await prisma.availabilitySchedule.findMany()
     * 
     * // Get first 10 AvailabilitySchedules
     * const availabilitySchedules = await prisma.availabilitySchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityScheduleWithIdOnly = await prisma.availabilitySchedule.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AvailabilityScheduleFindManyArgs>(
      args?: SelectSubset<T, AvailabilityScheduleFindManyArgs>
    ): Prisma.PrismaPromise<Array<AvailabilityScheduleGetPayload<T>>>

    /**
     * Create a AvailabilitySchedule.
     * @param {AvailabilityScheduleCreateArgs} args - Arguments to create a AvailabilitySchedule.
     * @example
     * // Create one AvailabilitySchedule
     * const AvailabilitySchedule = await prisma.availabilitySchedule.create({
     *   data: {
     *     // ... data to create a AvailabilitySchedule
     *   }
     * })
     * 
    **/
    create<T extends AvailabilityScheduleCreateArgs>(
      args: SelectSubset<T, AvailabilityScheduleCreateArgs>
    ): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>>

    /**
     * Create many AvailabilitySchedules.
     *     @param {AvailabilityScheduleCreateManyArgs} args - Arguments to create many AvailabilitySchedules.
     *     @example
     *     // Create many AvailabilitySchedules
     *     const availabilitySchedule = await prisma.availabilitySchedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AvailabilityScheduleCreateManyArgs>(
      args?: SelectSubset<T, AvailabilityScheduleCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AvailabilitySchedule.
     * @param {AvailabilityScheduleDeleteArgs} args - Arguments to delete one AvailabilitySchedule.
     * @example
     * // Delete one AvailabilitySchedule
     * const AvailabilitySchedule = await prisma.availabilitySchedule.delete({
     *   where: {
     *     // ... filter to delete one AvailabilitySchedule
     *   }
     * })
     * 
    **/
    delete<T extends AvailabilityScheduleDeleteArgs>(
      args: SelectSubset<T, AvailabilityScheduleDeleteArgs>
    ): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>>

    /**
     * Update one AvailabilitySchedule.
     * @param {AvailabilityScheduleUpdateArgs} args - Arguments to update one AvailabilitySchedule.
     * @example
     * // Update one AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AvailabilityScheduleUpdateArgs>(
      args: SelectSubset<T, AvailabilityScheduleUpdateArgs>
    ): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>>

    /**
     * Delete zero or more AvailabilitySchedules.
     * @param {AvailabilityScheduleDeleteManyArgs} args - Arguments to filter AvailabilitySchedules to delete.
     * @example
     * // Delete a few AvailabilitySchedules
     * const { count } = await prisma.availabilitySchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AvailabilityScheduleDeleteManyArgs>(
      args?: SelectSubset<T, AvailabilityScheduleDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilitySchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilitySchedules
     * const availabilitySchedule = await prisma.availabilitySchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AvailabilityScheduleUpdateManyArgs>(
      args: SelectSubset<T, AvailabilityScheduleUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AvailabilitySchedule.
     * @param {AvailabilityScheduleUpsertArgs} args - Arguments to update or create a AvailabilitySchedule.
     * @example
     * // Update or create a AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.upsert({
     *   create: {
     *     // ... data to create a AvailabilitySchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilitySchedule we want to update
     *   }
     * })
    **/
    upsert<T extends AvailabilityScheduleUpsertArgs>(
      args: SelectSubset<T, AvailabilityScheduleUpsertArgs>
    ): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T>>

    /**
     * Count the number of AvailabilitySchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleCountArgs} args - Arguments to filter AvailabilitySchedules to count.
     * @example
     * // Count the number of AvailabilitySchedules
     * const count = await prisma.availabilitySchedule.count({
     *   where: {
     *     // ... the filter for the AvailabilitySchedules we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityScheduleCountArgs>(
      args?: Subset<T, AvailabilityScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilitySchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityScheduleAggregateArgs>(args: Subset<T, AvailabilityScheduleAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityScheduleAggregateType<T>>

    /**
     * Group by AvailabilitySchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityScheduleGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilitySchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AvailabilityScheduleClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    eventTypes<T extends AvailabilitySchedule$eventTypesArgs= {}>(args?: Subset<T, AvailabilitySchedule$eventTypesArgs>): Prisma.PrismaPromise<Array<EventTypeGetPayload<T>>| Null>;

    dateSlots<T extends AvailabilitySchedule$dateSlotsArgs= {}>(args?: Subset<T, AvailabilitySchedule$dateSlotsArgs>): Prisma.PrismaPromise<Array<DateSlotGetPayload<T>>| Null>;

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
   * AvailabilitySchedule base type for findUnique actions
   */
  export type AvailabilityScheduleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * Filter, which AvailabilitySchedule to fetch.
     */
    where: AvailabilityScheduleWhereUniqueInput
  }

  /**
   * AvailabilitySchedule findUnique
   */
  export interface AvailabilityScheduleFindUniqueArgs extends AvailabilityScheduleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AvailabilitySchedule findUniqueOrThrow
   */
  export type AvailabilityScheduleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * Filter, which AvailabilitySchedule to fetch.
     */
    where: AvailabilityScheduleWhereUniqueInput
  }


  /**
   * AvailabilitySchedule base type for findFirst actions
   */
  export type AvailabilityScheduleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * Filter, which AvailabilitySchedule to fetch.
     */
    where?: AvailabilityScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySchedules to fetch.
     */
    orderBy?: Enumerable<AvailabilityScheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySchedules.
     */
    cursor?: AvailabilityScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySchedules.
     */
    distinct?: Enumerable<AvailabilityScheduleScalarFieldEnum>
  }

  /**
   * AvailabilitySchedule findFirst
   */
  export interface AvailabilityScheduleFindFirstArgs extends AvailabilityScheduleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AvailabilitySchedule findFirstOrThrow
   */
  export type AvailabilityScheduleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * Filter, which AvailabilitySchedule to fetch.
     */
    where?: AvailabilityScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySchedules to fetch.
     */
    orderBy?: Enumerable<AvailabilityScheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySchedules.
     */
    cursor?: AvailabilityScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySchedules.
     */
    distinct?: Enumerable<AvailabilityScheduleScalarFieldEnum>
  }


  /**
   * AvailabilitySchedule findMany
   */
  export type AvailabilityScheduleFindManyArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * Filter, which AvailabilitySchedules to fetch.
     */
    where?: AvailabilityScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySchedules to fetch.
     */
    orderBy?: Enumerable<AvailabilityScheduleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilitySchedules.
     */
    cursor?: AvailabilityScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySchedules.
     */
    skip?: number
    distinct?: Enumerable<AvailabilityScheduleScalarFieldEnum>
  }


  /**
   * AvailabilitySchedule create
   */
  export type AvailabilityScheduleCreateArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * The data needed to create a AvailabilitySchedule.
     */
    data: XOR<AvailabilityScheduleCreateInput, AvailabilityScheduleUncheckedCreateInput>
  }


  /**
   * AvailabilitySchedule createMany
   */
  export type AvailabilityScheduleCreateManyArgs = {
    /**
     * The data used to create many AvailabilitySchedules.
     */
    data: Enumerable<AvailabilityScheduleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AvailabilitySchedule update
   */
  export type AvailabilityScheduleUpdateArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * The data needed to update a AvailabilitySchedule.
     */
    data: XOR<AvailabilityScheduleUpdateInput, AvailabilityScheduleUncheckedUpdateInput>
    /**
     * Choose, which AvailabilitySchedule to update.
     */
    where: AvailabilityScheduleWhereUniqueInput
  }


  /**
   * AvailabilitySchedule updateMany
   */
  export type AvailabilityScheduleUpdateManyArgs = {
    /**
     * The data used to update AvailabilitySchedules.
     */
    data: XOR<AvailabilityScheduleUpdateManyMutationInput, AvailabilityScheduleUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilitySchedules to update
     */
    where?: AvailabilityScheduleWhereInput
  }


  /**
   * AvailabilitySchedule upsert
   */
  export type AvailabilityScheduleUpsertArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * The filter to search for the AvailabilitySchedule to update in case it exists.
     */
    where: AvailabilityScheduleWhereUniqueInput
    /**
     * In case the AvailabilitySchedule found by the `where` argument doesn't exist, create a new AvailabilitySchedule with this data.
     */
    create: XOR<AvailabilityScheduleCreateInput, AvailabilityScheduleUncheckedCreateInput>
    /**
     * In case the AvailabilitySchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityScheduleUpdateInput, AvailabilityScheduleUncheckedUpdateInput>
  }


  /**
   * AvailabilitySchedule delete
   */
  export type AvailabilityScheduleDeleteArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
    /**
     * Filter which AvailabilitySchedule to delete.
     */
    where: AvailabilityScheduleWhereUniqueInput
  }


  /**
   * AvailabilitySchedule deleteMany
   */
  export type AvailabilityScheduleDeleteManyArgs = {
    /**
     * Filter which AvailabilitySchedules to delete
     */
    where?: AvailabilityScheduleWhereInput
  }


  /**
   * AvailabilitySchedule.eventTypes
   */
  export type AvailabilitySchedule$eventTypesArgs = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventTypeInclude | null
    where?: EventTypeWhereInput
    orderBy?: Enumerable<EventTypeOrderByWithRelationInput>
    cursor?: EventTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EventTypeScalarFieldEnum>
  }


  /**
   * AvailabilitySchedule.dateSlots
   */
  export type AvailabilitySchedule$dateSlotsArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    where?: DateSlotWhereInput
    orderBy?: Enumerable<DateSlotOrderByWithRelationInput>
    cursor?: DateSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DateSlotScalarFieldEnum>
  }


  /**
   * AvailabilitySchedule without action
   */
  export type AvailabilityScheduleArgs = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityScheduleInclude | null
  }



  /**
   * Model DateSlot
   */


  export type AggregateDateSlot = {
    _count: DateSlotCountAggregateOutputType | null
    _avg: DateSlotAvgAggregateOutputType | null
    _sum: DateSlotSumAggregateOutputType | null
    _min: DateSlotMinAggregateOutputType | null
    _max: DateSlotMaxAggregateOutputType | null
  }

  export type DateSlotAvgAggregateOutputType = {
    id: number | null
    availabilityScheduleId: number | null
    custormerId: number | null
  }

  export type DateSlotSumAggregateOutputType = {
    id: number | null
    availabilityScheduleId: number | null
    custormerId: number | null
  }

  export type DateSlotMinAggregateOutputType = {
    id: number | null
    availabilityScheduleId: number | null
    status: string | null
    date: Date | null
    custormerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DateSlotMaxAggregateOutputType = {
    id: number | null
    availabilityScheduleId: number | null
    status: string | null
    date: Date | null
    custormerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DateSlotCountAggregateOutputType = {
    id: number
    availabilityScheduleId: number
    status: number
    date: number
    custormerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DateSlotAvgAggregateInputType = {
    id?: true
    availabilityScheduleId?: true
    custormerId?: true
  }

  export type DateSlotSumAggregateInputType = {
    id?: true
    availabilityScheduleId?: true
    custormerId?: true
  }

  export type DateSlotMinAggregateInputType = {
    id?: true
    availabilityScheduleId?: true
    status?: true
    date?: true
    custormerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DateSlotMaxAggregateInputType = {
    id?: true
    availabilityScheduleId?: true
    status?: true
    date?: true
    custormerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DateSlotCountAggregateInputType = {
    id?: true
    availabilityScheduleId?: true
    status?: true
    date?: true
    custormerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DateSlotAggregateArgs = {
    /**
     * Filter which DateSlot to aggregate.
     */
    where?: DateSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateSlots to fetch.
     */
    orderBy?: Enumerable<DateSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DateSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DateSlots
    **/
    _count?: true | DateSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DateSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DateSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DateSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DateSlotMaxAggregateInputType
  }

  export type GetDateSlotAggregateType<T extends DateSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateDateSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDateSlot[P]>
      : GetScalarType<T[P], AggregateDateSlot[P]>
  }




  export type DateSlotGroupByArgs = {
    where?: DateSlotWhereInput
    orderBy?: Enumerable<DateSlotOrderByWithAggregationInput>
    by: DateSlotScalarFieldEnum[]
    having?: DateSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DateSlotCountAggregateInputType | true
    _avg?: DateSlotAvgAggregateInputType
    _sum?: DateSlotSumAggregateInputType
    _min?: DateSlotMinAggregateInputType
    _max?: DateSlotMaxAggregateInputType
  }


  export type DateSlotGroupByOutputType = {
    id: number
    availabilityScheduleId: number | null
    status: string
    date: Date
    custormerId: number | null
    createdAt: Date
    updatedAt: Date
    _count: DateSlotCountAggregateOutputType | null
    _avg: DateSlotAvgAggregateOutputType | null
    _sum: DateSlotSumAggregateOutputType | null
    _min: DateSlotMinAggregateOutputType | null
    _max: DateSlotMaxAggregateOutputType | null
  }

  type GetDateSlotGroupByPayload<T extends DateSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DateSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DateSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DateSlotGroupByOutputType[P]>
            : GetScalarType<T[P], DateSlotGroupByOutputType[P]>
        }
      >
    >


  export type DateSlotSelect = {
    id?: boolean
    availabilityScheduleId?: boolean
    status?: boolean
    date?: boolean
    custormerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    availabilitySchedule?: boolean | AvailabilityScheduleArgs
    custormer?: boolean | CustomerArgs
    timeSelects?: boolean | DateSlot$timeSelectsArgs
    DaySlots?: boolean | DateSlot$DaySlotsArgs
    _count?: boolean | DateSlotCountOutputTypeArgs
  }


  export type DateSlotInclude = {
    availabilitySchedule?: boolean | AvailabilityScheduleArgs
    custormer?: boolean | CustomerArgs
    timeSelects?: boolean | DateSlot$timeSelectsArgs
    DaySlots?: boolean | DateSlot$DaySlotsArgs
    _count?: boolean | DateSlotCountOutputTypeArgs
  }

  export type DateSlotGetPayload<S extends boolean | null | undefined | DateSlotArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DateSlot :
    S extends undefined ? never :
    S extends { include: any } & (DateSlotArgs | DateSlotFindManyArgs)
    ? DateSlot  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'availabilitySchedule' ? AvailabilityScheduleGetPayload<S['include'][P]> | null :
        P extends 'custormer' ? CustomerGetPayload<S['include'][P]> | null :
        P extends 'timeSelects' ? Array < DateSlotOnTimeSelectGetPayload<S['include'][P]>>  :
        P extends 'DaySlots' ? Array < DaySlotOnDateSlotGetPayload<S['include'][P]>>  :
        P extends '_count' ? DateSlotCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DateSlotArgs | DateSlotFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'availabilitySchedule' ? AvailabilityScheduleGetPayload<S['select'][P]> | null :
        P extends 'custormer' ? CustomerGetPayload<S['select'][P]> | null :
        P extends 'timeSelects' ? Array < DateSlotOnTimeSelectGetPayload<S['select'][P]>>  :
        P extends 'DaySlots' ? Array < DaySlotOnDateSlotGetPayload<S['select'][P]>>  :
        P extends '_count' ? DateSlotCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof DateSlot ? DateSlot[P] : never
  } 
      : DateSlot


  type DateSlotCountArgs = 
    Omit<DateSlotFindManyArgs, 'select' | 'include'> & {
      select?: DateSlotCountAggregateInputType | true
    }

  export interface DateSlotDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DateSlot that matches the filter.
     * @param {DateSlotFindUniqueArgs} args - Arguments to find a DateSlot
     * @example
     * // Get one DateSlot
     * const dateSlot = await prisma.dateSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DateSlotFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DateSlotFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DateSlot'> extends True ? Prisma__DateSlotClient<DateSlotGetPayload<T>> : Prisma__DateSlotClient<DateSlotGetPayload<T> | null, null>

    /**
     * Find one DateSlot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DateSlotFindUniqueOrThrowArgs} args - Arguments to find a DateSlot
     * @example
     * // Get one DateSlot
     * const dateSlot = await prisma.dateSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DateSlotFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DateSlotFindUniqueOrThrowArgs>
    ): Prisma__DateSlotClient<DateSlotGetPayload<T>>

    /**
     * Find the first DateSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotFindFirstArgs} args - Arguments to find a DateSlot
     * @example
     * // Get one DateSlot
     * const dateSlot = await prisma.dateSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DateSlotFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DateSlotFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DateSlot'> extends True ? Prisma__DateSlotClient<DateSlotGetPayload<T>> : Prisma__DateSlotClient<DateSlotGetPayload<T> | null, null>

    /**
     * Find the first DateSlot that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotFindFirstOrThrowArgs} args - Arguments to find a DateSlot
     * @example
     * // Get one DateSlot
     * const dateSlot = await prisma.dateSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DateSlotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DateSlotFindFirstOrThrowArgs>
    ): Prisma__DateSlotClient<DateSlotGetPayload<T>>

    /**
     * Find zero or more DateSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DateSlots
     * const dateSlots = await prisma.dateSlot.findMany()
     * 
     * // Get first 10 DateSlots
     * const dateSlots = await prisma.dateSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dateSlotWithIdOnly = await prisma.dateSlot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DateSlotFindManyArgs>(
      args?: SelectSubset<T, DateSlotFindManyArgs>
    ): Prisma.PrismaPromise<Array<DateSlotGetPayload<T>>>

    /**
     * Create a DateSlot.
     * @param {DateSlotCreateArgs} args - Arguments to create a DateSlot.
     * @example
     * // Create one DateSlot
     * const DateSlot = await prisma.dateSlot.create({
     *   data: {
     *     // ... data to create a DateSlot
     *   }
     * })
     * 
    **/
    create<T extends DateSlotCreateArgs>(
      args: SelectSubset<T, DateSlotCreateArgs>
    ): Prisma__DateSlotClient<DateSlotGetPayload<T>>

    /**
     * Create many DateSlots.
     *     @param {DateSlotCreateManyArgs} args - Arguments to create many DateSlots.
     *     @example
     *     // Create many DateSlots
     *     const dateSlot = await prisma.dateSlot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DateSlotCreateManyArgs>(
      args?: SelectSubset<T, DateSlotCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DateSlot.
     * @param {DateSlotDeleteArgs} args - Arguments to delete one DateSlot.
     * @example
     * // Delete one DateSlot
     * const DateSlot = await prisma.dateSlot.delete({
     *   where: {
     *     // ... filter to delete one DateSlot
     *   }
     * })
     * 
    **/
    delete<T extends DateSlotDeleteArgs>(
      args: SelectSubset<T, DateSlotDeleteArgs>
    ): Prisma__DateSlotClient<DateSlotGetPayload<T>>

    /**
     * Update one DateSlot.
     * @param {DateSlotUpdateArgs} args - Arguments to update one DateSlot.
     * @example
     * // Update one DateSlot
     * const dateSlot = await prisma.dateSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DateSlotUpdateArgs>(
      args: SelectSubset<T, DateSlotUpdateArgs>
    ): Prisma__DateSlotClient<DateSlotGetPayload<T>>

    /**
     * Delete zero or more DateSlots.
     * @param {DateSlotDeleteManyArgs} args - Arguments to filter DateSlots to delete.
     * @example
     * // Delete a few DateSlots
     * const { count } = await prisma.dateSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DateSlotDeleteManyArgs>(
      args?: SelectSubset<T, DateSlotDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DateSlots
     * const dateSlot = await prisma.dateSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DateSlotUpdateManyArgs>(
      args: SelectSubset<T, DateSlotUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DateSlot.
     * @param {DateSlotUpsertArgs} args - Arguments to update or create a DateSlot.
     * @example
     * // Update or create a DateSlot
     * const dateSlot = await prisma.dateSlot.upsert({
     *   create: {
     *     // ... data to create a DateSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DateSlot we want to update
     *   }
     * })
    **/
    upsert<T extends DateSlotUpsertArgs>(
      args: SelectSubset<T, DateSlotUpsertArgs>
    ): Prisma__DateSlotClient<DateSlotGetPayload<T>>

    /**
     * Count the number of DateSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotCountArgs} args - Arguments to filter DateSlots to count.
     * @example
     * // Count the number of DateSlots
     * const count = await prisma.dateSlot.count({
     *   where: {
     *     // ... the filter for the DateSlots we want to count
     *   }
     * })
    **/
    count<T extends DateSlotCountArgs>(
      args?: Subset<T, DateSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DateSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DateSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DateSlotAggregateArgs>(args: Subset<T, DateSlotAggregateArgs>): Prisma.PrismaPromise<GetDateSlotAggregateType<T>>

    /**
     * Group by DateSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotGroupByArgs} args - Group by arguments.
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
      T extends DateSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DateSlotGroupByArgs['orderBy'] }
        : { orderBy?: DateSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DateSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDateSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DateSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DateSlotClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    availabilitySchedule<T extends AvailabilityScheduleArgs= {}>(args?: Subset<T, AvailabilityScheduleArgs>): Prisma__AvailabilityScheduleClient<AvailabilityScheduleGetPayload<T> | Null>;

    custormer<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

    timeSelects<T extends DateSlot$timeSelectsArgs= {}>(args?: Subset<T, DateSlot$timeSelectsArgs>): Prisma.PrismaPromise<Array<DateSlotOnTimeSelectGetPayload<T>>| Null>;

    DaySlots<T extends DateSlot$DaySlotsArgs= {}>(args?: Subset<T, DateSlot$DaySlotsArgs>): Prisma.PrismaPromise<Array<DaySlotOnDateSlotGetPayload<T>>| Null>;

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
   * DateSlot base type for findUnique actions
   */
  export type DateSlotFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * Filter, which DateSlot to fetch.
     */
    where: DateSlotWhereUniqueInput
  }

  /**
   * DateSlot findUnique
   */
  export interface DateSlotFindUniqueArgs extends DateSlotFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DateSlot findUniqueOrThrow
   */
  export type DateSlotFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * Filter, which DateSlot to fetch.
     */
    where: DateSlotWhereUniqueInput
  }


  /**
   * DateSlot base type for findFirst actions
   */
  export type DateSlotFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * Filter, which DateSlot to fetch.
     */
    where?: DateSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateSlots to fetch.
     */
    orderBy?: Enumerable<DateSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateSlots.
     */
    cursor?: DateSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateSlots.
     */
    distinct?: Enumerable<DateSlotScalarFieldEnum>
  }

  /**
   * DateSlot findFirst
   */
  export interface DateSlotFindFirstArgs extends DateSlotFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DateSlot findFirstOrThrow
   */
  export type DateSlotFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * Filter, which DateSlot to fetch.
     */
    where?: DateSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateSlots to fetch.
     */
    orderBy?: Enumerable<DateSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateSlots.
     */
    cursor?: DateSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateSlots.
     */
    distinct?: Enumerable<DateSlotScalarFieldEnum>
  }


  /**
   * DateSlot findMany
   */
  export type DateSlotFindManyArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * Filter, which DateSlots to fetch.
     */
    where?: DateSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateSlots to fetch.
     */
    orderBy?: Enumerable<DateSlotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DateSlots.
     */
    cursor?: DateSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateSlots.
     */
    skip?: number
    distinct?: Enumerable<DateSlotScalarFieldEnum>
  }


  /**
   * DateSlot create
   */
  export type DateSlotCreateArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * The data needed to create a DateSlot.
     */
    data: XOR<DateSlotCreateInput, DateSlotUncheckedCreateInput>
  }


  /**
   * DateSlot createMany
   */
  export type DateSlotCreateManyArgs = {
    /**
     * The data used to create many DateSlots.
     */
    data: Enumerable<DateSlotCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DateSlot update
   */
  export type DateSlotUpdateArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * The data needed to update a DateSlot.
     */
    data: XOR<DateSlotUpdateInput, DateSlotUncheckedUpdateInput>
    /**
     * Choose, which DateSlot to update.
     */
    where: DateSlotWhereUniqueInput
  }


  /**
   * DateSlot updateMany
   */
  export type DateSlotUpdateManyArgs = {
    /**
     * The data used to update DateSlots.
     */
    data: XOR<DateSlotUpdateManyMutationInput, DateSlotUncheckedUpdateManyInput>
    /**
     * Filter which DateSlots to update
     */
    where?: DateSlotWhereInput
  }


  /**
   * DateSlot upsert
   */
  export type DateSlotUpsertArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * The filter to search for the DateSlot to update in case it exists.
     */
    where: DateSlotWhereUniqueInput
    /**
     * In case the DateSlot found by the `where` argument doesn't exist, create a new DateSlot with this data.
     */
    create: XOR<DateSlotCreateInput, DateSlotUncheckedCreateInput>
    /**
     * In case the DateSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DateSlotUpdateInput, DateSlotUncheckedUpdateInput>
  }


  /**
   * DateSlot delete
   */
  export type DateSlotDeleteArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    /**
     * Filter which DateSlot to delete.
     */
    where: DateSlotWhereUniqueInput
  }


  /**
   * DateSlot deleteMany
   */
  export type DateSlotDeleteManyArgs = {
    /**
     * Filter which DateSlots to delete
     */
    where?: DateSlotWhereInput
  }


  /**
   * DateSlot.timeSelects
   */
  export type DateSlot$timeSelectsArgs = {
    /**
     * Select specific fields to fetch from the DateSlotOnTimeSelect
     */
    select?: DateSlotOnTimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotOnTimeSelectInclude | null
    where?: DateSlotOnTimeSelectWhereInput
    orderBy?: Enumerable<DateSlotOnTimeSelectOrderByWithRelationInput>
    cursor?: DateSlotOnTimeSelectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DateSlotOnTimeSelectScalarFieldEnum>
  }


  /**
   * DateSlot.DaySlots
   */
  export type DateSlot$DaySlotsArgs = {
    /**
     * Select specific fields to fetch from the DaySlotOnDateSlot
     */
    select?: DaySlotOnDateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaySlotOnDateSlotInclude | null
    where?: DaySlotOnDateSlotWhereInput
    orderBy?: Enumerable<DaySlotOnDateSlotOrderByWithRelationInput>
    cursor?: DaySlotOnDateSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DaySlotOnDateSlotScalarFieldEnum>
  }


  /**
   * DateSlot without action
   */
  export type DateSlotArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
  }



  /**
   * Model TimeSelect
   */


  export type AggregateTimeSelect = {
    _count: TimeSelectCountAggregateOutputType | null
    _avg: TimeSelectAvgAggregateOutputType | null
    _sum: TimeSelectSumAggregateOutputType | null
    _min: TimeSelectMinAggregateOutputType | null
    _max: TimeSelectMaxAggregateOutputType | null
  }

  export type TimeSelectAvgAggregateOutputType = {
    id: number | null
    startTime: number | null
    endTime: number | null
  }

  export type TimeSelectSumAggregateOutputType = {
    id: number | null
    startTime: number | null
    endTime: number | null
  }

  export type TimeSelectMinAggregateOutputType = {
    id: number | null
    startTime: number | null
    endTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimeSelectMaxAggregateOutputType = {
    id: number | null
    startTime: number | null
    endTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimeSelectCountAggregateOutputType = {
    id: number
    startTime: number
    endTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TimeSelectAvgAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
  }

  export type TimeSelectSumAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
  }

  export type TimeSelectMinAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimeSelectMaxAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimeSelectCountAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TimeSelectAggregateArgs = {
    /**
     * Filter which TimeSelect to aggregate.
     */
    where?: TimeSelectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSelects to fetch.
     */
    orderBy?: Enumerable<TimeSelectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeSelectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSelects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSelects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeSelects
    **/
    _count?: true | TimeSelectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeSelectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeSelectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeSelectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeSelectMaxAggregateInputType
  }

  export type GetTimeSelectAggregateType<T extends TimeSelectAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeSelect]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeSelect[P]>
      : GetScalarType<T[P], AggregateTimeSelect[P]>
  }




  export type TimeSelectGroupByArgs = {
    where?: TimeSelectWhereInput
    orderBy?: Enumerable<TimeSelectOrderByWithAggregationInput>
    by: TimeSelectScalarFieldEnum[]
    having?: TimeSelectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeSelectCountAggregateInputType | true
    _avg?: TimeSelectAvgAggregateInputType
    _sum?: TimeSelectSumAggregateInputType
    _min?: TimeSelectMinAggregateInputType
    _max?: TimeSelectMaxAggregateInputType
  }


  export type TimeSelectGroupByOutputType = {
    id: number
    startTime: number
    endTime: number
    createdAt: Date
    updatedAt: Date
    _count: TimeSelectCountAggregateOutputType | null
    _avg: TimeSelectAvgAggregateOutputType | null
    _sum: TimeSelectSumAggregateOutputType | null
    _min: TimeSelectMinAggregateOutputType | null
    _max: TimeSelectMaxAggregateOutputType | null
  }

  type GetTimeSelectGroupByPayload<T extends TimeSelectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TimeSelectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeSelectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeSelectGroupByOutputType[P]>
            : GetScalarType<T[P], TimeSelectGroupByOutputType[P]>
        }
      >
    >


  export type TimeSelectSelect = {
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dateSlots?: boolean | TimeSelect$dateSlotsArgs
    _count?: boolean | TimeSelectCountOutputTypeArgs
  }


  export type TimeSelectInclude = {
    dateSlots?: boolean | TimeSelect$dateSlotsArgs
    _count?: boolean | TimeSelectCountOutputTypeArgs
  }

  export type TimeSelectGetPayload<S extends boolean | null | undefined | TimeSelectArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TimeSelect :
    S extends undefined ? never :
    S extends { include: any } & (TimeSelectArgs | TimeSelectFindManyArgs)
    ? TimeSelect  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dateSlots' ? Array < DateSlotOnTimeSelectGetPayload<S['include'][P]>>  :
        P extends '_count' ? TimeSelectCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TimeSelectArgs | TimeSelectFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dateSlots' ? Array < DateSlotOnTimeSelectGetPayload<S['select'][P]>>  :
        P extends '_count' ? TimeSelectCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TimeSelect ? TimeSelect[P] : never
  } 
      : TimeSelect


  type TimeSelectCountArgs = 
    Omit<TimeSelectFindManyArgs, 'select' | 'include'> & {
      select?: TimeSelectCountAggregateInputType | true
    }

  export interface TimeSelectDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TimeSelect that matches the filter.
     * @param {TimeSelectFindUniqueArgs} args - Arguments to find a TimeSelect
     * @example
     * // Get one TimeSelect
     * const timeSelect = await prisma.timeSelect.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TimeSelectFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TimeSelectFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TimeSelect'> extends True ? Prisma__TimeSelectClient<TimeSelectGetPayload<T>> : Prisma__TimeSelectClient<TimeSelectGetPayload<T> | null, null>

    /**
     * Find one TimeSelect that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TimeSelectFindUniqueOrThrowArgs} args - Arguments to find a TimeSelect
     * @example
     * // Get one TimeSelect
     * const timeSelect = await prisma.timeSelect.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TimeSelectFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TimeSelectFindUniqueOrThrowArgs>
    ): Prisma__TimeSelectClient<TimeSelectGetPayload<T>>

    /**
     * Find the first TimeSelect that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSelectFindFirstArgs} args - Arguments to find a TimeSelect
     * @example
     * // Get one TimeSelect
     * const timeSelect = await prisma.timeSelect.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TimeSelectFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TimeSelectFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TimeSelect'> extends True ? Prisma__TimeSelectClient<TimeSelectGetPayload<T>> : Prisma__TimeSelectClient<TimeSelectGetPayload<T> | null, null>

    /**
     * Find the first TimeSelect that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSelectFindFirstOrThrowArgs} args - Arguments to find a TimeSelect
     * @example
     * // Get one TimeSelect
     * const timeSelect = await prisma.timeSelect.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TimeSelectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TimeSelectFindFirstOrThrowArgs>
    ): Prisma__TimeSelectClient<TimeSelectGetPayload<T>>

    /**
     * Find zero or more TimeSelects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSelectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeSelects
     * const timeSelects = await prisma.timeSelect.findMany()
     * 
     * // Get first 10 TimeSelects
     * const timeSelects = await prisma.timeSelect.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeSelectWithIdOnly = await prisma.timeSelect.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TimeSelectFindManyArgs>(
      args?: SelectSubset<T, TimeSelectFindManyArgs>
    ): Prisma.PrismaPromise<Array<TimeSelectGetPayload<T>>>

    /**
     * Create a TimeSelect.
     * @param {TimeSelectCreateArgs} args - Arguments to create a TimeSelect.
     * @example
     * // Create one TimeSelect
     * const TimeSelect = await prisma.timeSelect.create({
     *   data: {
     *     // ... data to create a TimeSelect
     *   }
     * })
     * 
    **/
    create<T extends TimeSelectCreateArgs>(
      args: SelectSubset<T, TimeSelectCreateArgs>
    ): Prisma__TimeSelectClient<TimeSelectGetPayload<T>>

    /**
     * Create many TimeSelects.
     *     @param {TimeSelectCreateManyArgs} args - Arguments to create many TimeSelects.
     *     @example
     *     // Create many TimeSelects
     *     const timeSelect = await prisma.timeSelect.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TimeSelectCreateManyArgs>(
      args?: SelectSubset<T, TimeSelectCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TimeSelect.
     * @param {TimeSelectDeleteArgs} args - Arguments to delete one TimeSelect.
     * @example
     * // Delete one TimeSelect
     * const TimeSelect = await prisma.timeSelect.delete({
     *   where: {
     *     // ... filter to delete one TimeSelect
     *   }
     * })
     * 
    **/
    delete<T extends TimeSelectDeleteArgs>(
      args: SelectSubset<T, TimeSelectDeleteArgs>
    ): Prisma__TimeSelectClient<TimeSelectGetPayload<T>>

    /**
     * Update one TimeSelect.
     * @param {TimeSelectUpdateArgs} args - Arguments to update one TimeSelect.
     * @example
     * // Update one TimeSelect
     * const timeSelect = await prisma.timeSelect.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TimeSelectUpdateArgs>(
      args: SelectSubset<T, TimeSelectUpdateArgs>
    ): Prisma__TimeSelectClient<TimeSelectGetPayload<T>>

    /**
     * Delete zero or more TimeSelects.
     * @param {TimeSelectDeleteManyArgs} args - Arguments to filter TimeSelects to delete.
     * @example
     * // Delete a few TimeSelects
     * const { count } = await prisma.timeSelect.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TimeSelectDeleteManyArgs>(
      args?: SelectSubset<T, TimeSelectDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeSelects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSelectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeSelects
     * const timeSelect = await prisma.timeSelect.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TimeSelectUpdateManyArgs>(
      args: SelectSubset<T, TimeSelectUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimeSelect.
     * @param {TimeSelectUpsertArgs} args - Arguments to update or create a TimeSelect.
     * @example
     * // Update or create a TimeSelect
     * const timeSelect = await prisma.timeSelect.upsert({
     *   create: {
     *     // ... data to create a TimeSelect
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeSelect we want to update
     *   }
     * })
    **/
    upsert<T extends TimeSelectUpsertArgs>(
      args: SelectSubset<T, TimeSelectUpsertArgs>
    ): Prisma__TimeSelectClient<TimeSelectGetPayload<T>>

    /**
     * Count the number of TimeSelects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSelectCountArgs} args - Arguments to filter TimeSelects to count.
     * @example
     * // Count the number of TimeSelects
     * const count = await prisma.timeSelect.count({
     *   where: {
     *     // ... the filter for the TimeSelects we want to count
     *   }
     * })
    **/
    count<T extends TimeSelectCountArgs>(
      args?: Subset<T, TimeSelectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeSelectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeSelect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSelectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeSelectAggregateArgs>(args: Subset<T, TimeSelectAggregateArgs>): Prisma.PrismaPromise<GetTimeSelectAggregateType<T>>

    /**
     * Group by TimeSelect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSelectGroupByArgs} args - Group by arguments.
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
      T extends TimeSelectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeSelectGroupByArgs['orderBy'] }
        : { orderBy?: TimeSelectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimeSelectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeSelectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeSelect.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TimeSelectClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dateSlots<T extends TimeSelect$dateSlotsArgs= {}>(args?: Subset<T, TimeSelect$dateSlotsArgs>): Prisma.PrismaPromise<Array<DateSlotOnTimeSelectGetPayload<T>>| Null>;

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
   * TimeSelect base type for findUnique actions
   */
  export type TimeSelectFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TimeSelect
     */
    select?: TimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSelectInclude | null
    /**
     * Filter, which TimeSelect to fetch.
     */
    where: TimeSelectWhereUniqueInput
  }

  /**
   * TimeSelect findUnique
   */
  export interface TimeSelectFindUniqueArgs extends TimeSelectFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TimeSelect findUniqueOrThrow
   */
  export type TimeSelectFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TimeSelect
     */
    select?: TimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSelectInclude | null
    /**
     * Filter, which TimeSelect to fetch.
     */
    where: TimeSelectWhereUniqueInput
  }


  /**
   * TimeSelect base type for findFirst actions
   */
  export type TimeSelectFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TimeSelect
     */
    select?: TimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSelectInclude | null
    /**
     * Filter, which TimeSelect to fetch.
     */
    where?: TimeSelectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSelects to fetch.
     */
    orderBy?: Enumerable<TimeSelectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSelects.
     */
    cursor?: TimeSelectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSelects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSelects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSelects.
     */
    distinct?: Enumerable<TimeSelectScalarFieldEnum>
  }

  /**
   * TimeSelect findFirst
   */
  export interface TimeSelectFindFirstArgs extends TimeSelectFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TimeSelect findFirstOrThrow
   */
  export type TimeSelectFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TimeSelect
     */
    select?: TimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSelectInclude | null
    /**
     * Filter, which TimeSelect to fetch.
     */
    where?: TimeSelectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSelects to fetch.
     */
    orderBy?: Enumerable<TimeSelectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSelects.
     */
    cursor?: TimeSelectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSelects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSelects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSelects.
     */
    distinct?: Enumerable<TimeSelectScalarFieldEnum>
  }


  /**
   * TimeSelect findMany
   */
  export type TimeSelectFindManyArgs = {
    /**
     * Select specific fields to fetch from the TimeSelect
     */
    select?: TimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSelectInclude | null
    /**
     * Filter, which TimeSelects to fetch.
     */
    where?: TimeSelectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSelects to fetch.
     */
    orderBy?: Enumerable<TimeSelectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeSelects.
     */
    cursor?: TimeSelectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSelects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSelects.
     */
    skip?: number
    distinct?: Enumerable<TimeSelectScalarFieldEnum>
  }


  /**
   * TimeSelect create
   */
  export type TimeSelectCreateArgs = {
    /**
     * Select specific fields to fetch from the TimeSelect
     */
    select?: TimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSelectInclude | null
    /**
     * The data needed to create a TimeSelect.
     */
    data: XOR<TimeSelectCreateInput, TimeSelectUncheckedCreateInput>
  }


  /**
   * TimeSelect createMany
   */
  export type TimeSelectCreateManyArgs = {
    /**
     * The data used to create many TimeSelects.
     */
    data: Enumerable<TimeSelectCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TimeSelect update
   */
  export type TimeSelectUpdateArgs = {
    /**
     * Select specific fields to fetch from the TimeSelect
     */
    select?: TimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSelectInclude | null
    /**
     * The data needed to update a TimeSelect.
     */
    data: XOR<TimeSelectUpdateInput, TimeSelectUncheckedUpdateInput>
    /**
     * Choose, which TimeSelect to update.
     */
    where: TimeSelectWhereUniqueInput
  }


  /**
   * TimeSelect updateMany
   */
  export type TimeSelectUpdateManyArgs = {
    /**
     * The data used to update TimeSelects.
     */
    data: XOR<TimeSelectUpdateManyMutationInput, TimeSelectUncheckedUpdateManyInput>
    /**
     * Filter which TimeSelects to update
     */
    where?: TimeSelectWhereInput
  }


  /**
   * TimeSelect upsert
   */
  export type TimeSelectUpsertArgs = {
    /**
     * Select specific fields to fetch from the TimeSelect
     */
    select?: TimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSelectInclude | null
    /**
     * The filter to search for the TimeSelect to update in case it exists.
     */
    where: TimeSelectWhereUniqueInput
    /**
     * In case the TimeSelect found by the `where` argument doesn't exist, create a new TimeSelect with this data.
     */
    create: XOR<TimeSelectCreateInput, TimeSelectUncheckedCreateInput>
    /**
     * In case the TimeSelect was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeSelectUpdateInput, TimeSelectUncheckedUpdateInput>
  }


  /**
   * TimeSelect delete
   */
  export type TimeSelectDeleteArgs = {
    /**
     * Select specific fields to fetch from the TimeSelect
     */
    select?: TimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSelectInclude | null
    /**
     * Filter which TimeSelect to delete.
     */
    where: TimeSelectWhereUniqueInput
  }


  /**
   * TimeSelect deleteMany
   */
  export type TimeSelectDeleteManyArgs = {
    /**
     * Filter which TimeSelects to delete
     */
    where?: TimeSelectWhereInput
  }


  /**
   * TimeSelect.dateSlots
   */
  export type TimeSelect$dateSlotsArgs = {
    /**
     * Select specific fields to fetch from the DateSlotOnTimeSelect
     */
    select?: DateSlotOnTimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotOnTimeSelectInclude | null
    where?: DateSlotOnTimeSelectWhereInput
    orderBy?: Enumerable<DateSlotOnTimeSelectOrderByWithRelationInput>
    cursor?: DateSlotOnTimeSelectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DateSlotOnTimeSelectScalarFieldEnum>
  }


  /**
   * TimeSelect without action
   */
  export type TimeSelectArgs = {
    /**
     * Select specific fields to fetch from the TimeSelect
     */
    select?: TimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeSelectInclude | null
  }



  /**
   * Model Customer
   */


  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs = {
    where?: CustomerWhereInput
    orderBy?: Enumerable<CustomerOrderByWithAggregationInput>
    by: CustomerScalarFieldEnum[]
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }


  export type CustomerGroupByOutputType = {
    id: number
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupMeetings?: boolean | Customer$groupMeetingsArgs
    dateSlots?: boolean | Customer$dateSlotsArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }


  export type CustomerInclude = {
    groupMeetings?: boolean | Customer$groupMeetingsArgs
    dateSlots?: boolean | Customer$dateSlotsArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }

  export type CustomerGetPayload<S extends boolean | null | undefined | CustomerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Customer :
    S extends undefined ? never :
    S extends { include: any } & (CustomerArgs | CustomerFindManyArgs)
    ? Customer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'groupMeetings' ? Array < GroupMeetingGetPayload<S['include'][P]>>  :
        P extends 'dateSlots' ? Array < DateSlotGetPayload<S['include'][P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CustomerArgs | CustomerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'groupMeetings' ? Array < GroupMeetingGetPayload<S['select'][P]>>  :
        P extends 'dateSlots' ? Array < DateSlotGetPayload<S['select'][P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Customer ? Customer[P] : never
  } 
      : Customer


  type CustomerCountArgs = 
    Omit<CustomerFindManyArgs, 'select' | 'include'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Customer'> extends True ? Prisma__CustomerClient<CustomerGetPayload<T>> : Prisma__CustomerClient<CustomerGetPayload<T> | null, null>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Customer'> extends True ? Prisma__CustomerClient<CustomerGetPayload<T>> : Prisma__CustomerClient<CustomerGetPayload<T> | null, null>

    /**
     * Find the first Customer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs>(
      args?: SelectSubset<T, CustomerFindManyArgs>
    ): Prisma.PrismaPromise<Array<CustomerGetPayload<T>>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs>(
      args: SelectSubset<T, CustomerCreateArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs>(
      args?: SelectSubset<T, CustomerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs>(
      args: SelectSubset<T, CustomerDeleteArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs>(
      args: SelectSubset<T, CustomerUpdateArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs>(
      args?: SelectSubset<T, CustomerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs>(
      args: SelectSubset<T, CustomerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs>(
      args: SelectSubset<T, CustomerUpsertArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    groupMeetings<T extends Customer$groupMeetingsArgs= {}>(args?: Subset<T, Customer$groupMeetingsArgs>): Prisma.PrismaPromise<Array<GroupMeetingGetPayload<T>>| Null>;

    dateSlots<T extends Customer$dateSlotsArgs= {}>(args?: Subset<T, Customer$dateSlotsArgs>): Prisma.PrismaPromise<Array<DateSlotGetPayload<T>>| Null>;

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
   * Customer base type for findUnique actions
   */
  export type CustomerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUnique
   */
  export interface CustomerFindUniqueArgs extends CustomerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer base type for findFirst actions
   */
  export type CustomerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }

  /**
   * Customer findFirst
   */
  export interface CustomerFindFirstArgs extends CustomerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs = {
    /**
     * The data used to create many Customers.
     */
    data: Enumerable<CustomerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer.groupMeetings
   */
  export type Customer$groupMeetingsArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    where?: GroupMeetingWhereInput
    orderBy?: Enumerable<GroupMeetingOrderByWithRelationInput>
    cursor?: GroupMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GroupMeetingScalarFieldEnum>
  }


  /**
   * Customer.dateSlots
   */
  export type Customer$dateSlotsArgs = {
    /**
     * Select specific fields to fetch from the DateSlot
     */
    select?: DateSlotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotInclude | null
    where?: DateSlotWhereInput
    orderBy?: Enumerable<DateSlotOrderByWithRelationInput>
    cursor?: DateSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DateSlotScalarFieldEnum>
  }


  /**
   * Customer without action
   */
  export type CustomerArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
  }



  /**
   * Model Billing
   */


  export type AggregateBilling = {
    _count: BillingCountAggregateOutputType | null
    _avg: BillingAvgAggregateOutputType | null
    _sum: BillingSumAggregateOutputType | null
    _min: BillingMinAggregateOutputType | null
    _max: BillingMaxAggregateOutputType | null
  }

  export type BillingAvgAggregateOutputType = {
    id: number | null
    subscriptionMonth: number | null
    subscriptionPrice: number | null
    userId: number | null
  }

  export type BillingSumAggregateOutputType = {
    id: number | null
    subscriptionMonth: number | null
    subscriptionPrice: number | null
    userId: number | null
  }

  export type BillingMinAggregateOutputType = {
    id: number | null
    subscriptionMonth: number | null
    subscriptionPrice: number | null
    userId: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillingMaxAggregateOutputType = {
    id: number | null
    subscriptionMonth: number | null
    subscriptionPrice: number | null
    userId: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillingCountAggregateOutputType = {
    id: number
    subscriptionMonth: number
    subscriptionPrice: number
    userId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillingAvgAggregateInputType = {
    id?: true
    subscriptionMonth?: true
    subscriptionPrice?: true
    userId?: true
  }

  export type BillingSumAggregateInputType = {
    id?: true
    subscriptionMonth?: true
    subscriptionPrice?: true
    userId?: true
  }

  export type BillingMinAggregateInputType = {
    id?: true
    subscriptionMonth?: true
    subscriptionPrice?: true
    userId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillingMaxAggregateInputType = {
    id?: true
    subscriptionMonth?: true
    subscriptionPrice?: true
    userId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillingCountAggregateInputType = {
    id?: true
    subscriptionMonth?: true
    subscriptionPrice?: true
    userId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillingAggregateArgs = {
    /**
     * Filter which Billing to aggregate.
     */
    where?: BillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: Enumerable<BillingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Billings
    **/
    _count?: true | BillingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillingMaxAggregateInputType
  }

  export type GetBillingAggregateType<T extends BillingAggregateArgs> = {
        [P in keyof T & keyof AggregateBilling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBilling[P]>
      : GetScalarType<T[P], AggregateBilling[P]>
  }




  export type BillingGroupByArgs = {
    where?: BillingWhereInput
    orderBy?: Enumerable<BillingOrderByWithAggregationInput>
    by: BillingScalarFieldEnum[]
    having?: BillingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillingCountAggregateInputType | true
    _avg?: BillingAvgAggregateInputType
    _sum?: BillingSumAggregateInputType
    _min?: BillingMinAggregateInputType
    _max?: BillingMaxAggregateInputType
  }


  export type BillingGroupByOutputType = {
    id: number
    subscriptionMonth: number
    subscriptionPrice: number
    userId: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BillingCountAggregateOutputType | null
    _avg: BillingAvgAggregateOutputType | null
    _sum: BillingSumAggregateOutputType | null
    _min: BillingMinAggregateOutputType | null
    _max: BillingMaxAggregateOutputType | null
  }

  type GetBillingGroupByPayload<T extends BillingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BillingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillingGroupByOutputType[P]>
            : GetScalarType<T[P], BillingGroupByOutputType[P]>
        }
      >
    >


  export type BillingSelect = {
    id?: boolean
    subscriptionMonth?: boolean
    subscriptionPrice?: boolean
    userId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
  }


  export type BillingInclude = {
    user?: boolean | UserArgs
  }

  export type BillingGetPayload<S extends boolean | null | undefined | BillingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Billing :
    S extends undefined ? never :
    S extends { include: any } & (BillingArgs | BillingFindManyArgs)
    ? Billing  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BillingArgs | BillingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Billing ? Billing[P] : never
  } 
      : Billing


  type BillingCountArgs = 
    Omit<BillingFindManyArgs, 'select' | 'include'> & {
      select?: BillingCountAggregateInputType | true
    }

  export interface BillingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Billing that matches the filter.
     * @param {BillingFindUniqueArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BillingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BillingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Billing'> extends True ? Prisma__BillingClient<BillingGetPayload<T>> : Prisma__BillingClient<BillingGetPayload<T> | null, null>

    /**
     * Find one Billing that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BillingFindUniqueOrThrowArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BillingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BillingFindUniqueOrThrowArgs>
    ): Prisma__BillingClient<BillingGetPayload<T>>

    /**
     * Find the first Billing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingFindFirstArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BillingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BillingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Billing'> extends True ? Prisma__BillingClient<BillingGetPayload<T>> : Prisma__BillingClient<BillingGetPayload<T> | null, null>

    /**
     * Find the first Billing that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingFindFirstOrThrowArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BillingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BillingFindFirstOrThrowArgs>
    ): Prisma__BillingClient<BillingGetPayload<T>>

    /**
     * Find zero or more Billings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Billings
     * const billings = await prisma.billing.findMany()
     * 
     * // Get first 10 Billings
     * const billings = await prisma.billing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billingWithIdOnly = await prisma.billing.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BillingFindManyArgs>(
      args?: SelectSubset<T, BillingFindManyArgs>
    ): Prisma.PrismaPromise<Array<BillingGetPayload<T>>>

    /**
     * Create a Billing.
     * @param {BillingCreateArgs} args - Arguments to create a Billing.
     * @example
     * // Create one Billing
     * const Billing = await prisma.billing.create({
     *   data: {
     *     // ... data to create a Billing
     *   }
     * })
     * 
    **/
    create<T extends BillingCreateArgs>(
      args: SelectSubset<T, BillingCreateArgs>
    ): Prisma__BillingClient<BillingGetPayload<T>>

    /**
     * Create many Billings.
     *     @param {BillingCreateManyArgs} args - Arguments to create many Billings.
     *     @example
     *     // Create many Billings
     *     const billing = await prisma.billing.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BillingCreateManyArgs>(
      args?: SelectSubset<T, BillingCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Billing.
     * @param {BillingDeleteArgs} args - Arguments to delete one Billing.
     * @example
     * // Delete one Billing
     * const Billing = await prisma.billing.delete({
     *   where: {
     *     // ... filter to delete one Billing
     *   }
     * })
     * 
    **/
    delete<T extends BillingDeleteArgs>(
      args: SelectSubset<T, BillingDeleteArgs>
    ): Prisma__BillingClient<BillingGetPayload<T>>

    /**
     * Update one Billing.
     * @param {BillingUpdateArgs} args - Arguments to update one Billing.
     * @example
     * // Update one Billing
     * const billing = await prisma.billing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BillingUpdateArgs>(
      args: SelectSubset<T, BillingUpdateArgs>
    ): Prisma__BillingClient<BillingGetPayload<T>>

    /**
     * Delete zero or more Billings.
     * @param {BillingDeleteManyArgs} args - Arguments to filter Billings to delete.
     * @example
     * // Delete a few Billings
     * const { count } = await prisma.billing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BillingDeleteManyArgs>(
      args?: SelectSubset<T, BillingDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Billings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Billings
     * const billing = await prisma.billing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BillingUpdateManyArgs>(
      args: SelectSubset<T, BillingUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Billing.
     * @param {BillingUpsertArgs} args - Arguments to update or create a Billing.
     * @example
     * // Update or create a Billing
     * const billing = await prisma.billing.upsert({
     *   create: {
     *     // ... data to create a Billing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Billing we want to update
     *   }
     * })
    **/
    upsert<T extends BillingUpsertArgs>(
      args: SelectSubset<T, BillingUpsertArgs>
    ): Prisma__BillingClient<BillingGetPayload<T>>

    /**
     * Count the number of Billings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingCountArgs} args - Arguments to filter Billings to count.
     * @example
     * // Count the number of Billings
     * const count = await prisma.billing.count({
     *   where: {
     *     // ... the filter for the Billings we want to count
     *   }
     * })
    **/
    count<T extends BillingCountArgs>(
      args?: Subset<T, BillingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Billing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillingAggregateArgs>(args: Subset<T, BillingAggregateArgs>): Prisma.PrismaPromise<GetBillingAggregateType<T>>

    /**
     * Group by Billing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingGroupByArgs} args - Group by arguments.
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
      T extends BillingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillingGroupByArgs['orderBy'] }
        : { orderBy?: BillingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Billing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BillingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * Billing base type for findUnique actions
   */
  export type BillingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * Filter, which Billing to fetch.
     */
    where: BillingWhereUniqueInput
  }

  /**
   * Billing findUnique
   */
  export interface BillingFindUniqueArgs extends BillingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Billing findUniqueOrThrow
   */
  export type BillingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * Filter, which Billing to fetch.
     */
    where: BillingWhereUniqueInput
  }


  /**
   * Billing base type for findFirst actions
   */
  export type BillingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * Filter, which Billing to fetch.
     */
    where?: BillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: Enumerable<BillingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billings.
     */
    cursor?: BillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billings.
     */
    distinct?: Enumerable<BillingScalarFieldEnum>
  }

  /**
   * Billing findFirst
   */
  export interface BillingFindFirstArgs extends BillingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Billing findFirstOrThrow
   */
  export type BillingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * Filter, which Billing to fetch.
     */
    where?: BillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: Enumerable<BillingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billings.
     */
    cursor?: BillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billings.
     */
    distinct?: Enumerable<BillingScalarFieldEnum>
  }


  /**
   * Billing findMany
   */
  export type BillingFindManyArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * Filter, which Billings to fetch.
     */
    where?: BillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: Enumerable<BillingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Billings.
     */
    cursor?: BillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    distinct?: Enumerable<BillingScalarFieldEnum>
  }


  /**
   * Billing create
   */
  export type BillingCreateArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * The data needed to create a Billing.
     */
    data: XOR<BillingCreateInput, BillingUncheckedCreateInput>
  }


  /**
   * Billing createMany
   */
  export type BillingCreateManyArgs = {
    /**
     * The data used to create many Billings.
     */
    data: Enumerable<BillingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Billing update
   */
  export type BillingUpdateArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * The data needed to update a Billing.
     */
    data: XOR<BillingUpdateInput, BillingUncheckedUpdateInput>
    /**
     * Choose, which Billing to update.
     */
    where: BillingWhereUniqueInput
  }


  /**
   * Billing updateMany
   */
  export type BillingUpdateManyArgs = {
    /**
     * The data used to update Billings.
     */
    data: XOR<BillingUpdateManyMutationInput, BillingUncheckedUpdateManyInput>
    /**
     * Filter which Billings to update
     */
    where?: BillingWhereInput
  }


  /**
   * Billing upsert
   */
  export type BillingUpsertArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * The filter to search for the Billing to update in case it exists.
     */
    where: BillingWhereUniqueInput
    /**
     * In case the Billing found by the `where` argument doesn't exist, create a new Billing with this data.
     */
    create: XOR<BillingCreateInput, BillingUncheckedCreateInput>
    /**
     * In case the Billing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillingUpdateInput, BillingUncheckedUpdateInput>
  }


  /**
   * Billing delete
   */
  export type BillingDeleteArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
    /**
     * Filter which Billing to delete.
     */
    where: BillingWhereUniqueInput
  }


  /**
   * Billing deleteMany
   */
  export type BillingDeleteManyArgs = {
    /**
     * Filter which Billings to delete
     */
    where?: BillingWhereInput
  }


  /**
   * Billing without action
   */
  export type BillingArgs = {
    /**
     * Select specific fields to fetch from the Billing
     */
    select?: BillingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillingInclude | null
  }



  /**
   * Model GroupMeeting
   */


  export type AggregateGroupMeeting = {
    _count: GroupMeetingCountAggregateOutputType | null
    _avg: GroupMeetingAvgAggregateOutputType | null
    _sum: GroupMeetingSumAggregateOutputType | null
    _min: GroupMeetingMinAggregateOutputType | null
    _max: GroupMeetingMaxAggregateOutputType | null
  }

  export type GroupMeetingAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
    customerId: number | null
    totalPrice: number | null
    eventTypeId: number | null
  }

  export type GroupMeetingSumAggregateOutputType = {
    id: number | null
    locationId: number | null
    customerId: number | null
    totalPrice: number | null
    eventTypeId: number | null
  }

  export type GroupMeetingMinAggregateOutputType = {
    id: number | null
    locationId: number | null
    customerId: number | null
    totalPrice: number | null
    timezone: string | null
    eventTypeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMeetingMaxAggregateOutputType = {
    id: number | null
    locationId: number | null
    customerId: number | null
    totalPrice: number | null
    timezone: string | null
    eventTypeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMeetingCountAggregateOutputType = {
    id: number
    locationId: number
    customerId: number
    totalPrice: number
    timezone: number
    eventTypeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupMeetingAvgAggregateInputType = {
    id?: true
    locationId?: true
    customerId?: true
    totalPrice?: true
    eventTypeId?: true
  }

  export type GroupMeetingSumAggregateInputType = {
    id?: true
    locationId?: true
    customerId?: true
    totalPrice?: true
    eventTypeId?: true
  }

  export type GroupMeetingMinAggregateInputType = {
    id?: true
    locationId?: true
    customerId?: true
    totalPrice?: true
    timezone?: true
    eventTypeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMeetingMaxAggregateInputType = {
    id?: true
    locationId?: true
    customerId?: true
    totalPrice?: true
    timezone?: true
    eventTypeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMeetingCountAggregateInputType = {
    id?: true
    locationId?: true
    customerId?: true
    totalPrice?: true
    timezone?: true
    eventTypeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupMeetingAggregateArgs = {
    /**
     * Filter which GroupMeeting to aggregate.
     */
    where?: GroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMeetings to fetch.
     */
    orderBy?: Enumerable<GroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMeetings
    **/
    _count?: true | GroupMeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupMeetingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupMeetingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMeetingMaxAggregateInputType
  }

  export type GetGroupMeetingAggregateType<T extends GroupMeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMeeting[P]>
      : GetScalarType<T[P], AggregateGroupMeeting[P]>
  }




  export type GroupMeetingGroupByArgs = {
    where?: GroupMeetingWhereInput
    orderBy?: Enumerable<GroupMeetingOrderByWithAggregationInput>
    by: GroupMeetingScalarFieldEnum[]
    having?: GroupMeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMeetingCountAggregateInputType | true
    _avg?: GroupMeetingAvgAggregateInputType
    _sum?: GroupMeetingSumAggregateInputType
    _min?: GroupMeetingMinAggregateInputType
    _max?: GroupMeetingMaxAggregateInputType
  }


  export type GroupMeetingGroupByOutputType = {
    id: number
    locationId: number
    customerId: number
    totalPrice: number
    timezone: string
    eventTypeId: number
    createdAt: Date
    updatedAt: Date
    _count: GroupMeetingCountAggregateOutputType | null
    _avg: GroupMeetingAvgAggregateOutputType | null
    _sum: GroupMeetingSumAggregateOutputType | null
    _min: GroupMeetingMinAggregateOutputType | null
    _max: GroupMeetingMaxAggregateOutputType | null
  }

  type GetGroupMeetingGroupByPayload<T extends GroupMeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GroupMeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMeetingGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMeetingGroupByOutputType[P]>
        }
      >
    >


  export type GroupMeetingSelect = {
    id?: boolean
    locationId?: boolean
    customerId?: boolean
    totalPrice?: boolean
    timezone?: boolean
    eventTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | LocationArgs
    customer?: boolean | CustomerArgs
    eventType?: boolean | EventTypeArgs
    userOnGroupMeetings?: boolean | GroupMeeting$userOnGroupMeetingsArgs
    _count?: boolean | GroupMeetingCountOutputTypeArgs
  }


  export type GroupMeetingInclude = {
    location?: boolean | LocationArgs
    customer?: boolean | CustomerArgs
    eventType?: boolean | EventTypeArgs
    userOnGroupMeetings?: boolean | GroupMeeting$userOnGroupMeetingsArgs
    _count?: boolean | GroupMeetingCountOutputTypeArgs
  }

  export type GroupMeetingGetPayload<S extends boolean | null | undefined | GroupMeetingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GroupMeeting :
    S extends undefined ? never :
    S extends { include: any } & (GroupMeetingArgs | GroupMeetingFindManyArgs)
    ? GroupMeeting  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'location' ? LocationGetPayload<S['include'][P]> :
        P extends 'customer' ? CustomerGetPayload<S['include'][P]> :
        P extends 'eventType' ? EventTypeGetPayload<S['include'][P]> :
        P extends 'userOnGroupMeetings' ? Array < UserOnGroupMeetingGetPayload<S['include'][P]>>  :
        P extends '_count' ? GroupMeetingCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (GroupMeetingArgs | GroupMeetingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'location' ? LocationGetPayload<S['select'][P]> :
        P extends 'customer' ? CustomerGetPayload<S['select'][P]> :
        P extends 'eventType' ? EventTypeGetPayload<S['select'][P]> :
        P extends 'userOnGroupMeetings' ? Array < UserOnGroupMeetingGetPayload<S['select'][P]>>  :
        P extends '_count' ? GroupMeetingCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof GroupMeeting ? GroupMeeting[P] : never
  } 
      : GroupMeeting


  type GroupMeetingCountArgs = 
    Omit<GroupMeetingFindManyArgs, 'select' | 'include'> & {
      select?: GroupMeetingCountAggregateInputType | true
    }

  export interface GroupMeetingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one GroupMeeting that matches the filter.
     * @param {GroupMeetingFindUniqueArgs} args - Arguments to find a GroupMeeting
     * @example
     * // Get one GroupMeeting
     * const groupMeeting = await prisma.groupMeeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupMeetingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GroupMeetingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GroupMeeting'> extends True ? Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>> : Prisma__GroupMeetingClient<GroupMeetingGetPayload<T> | null, null>

    /**
     * Find one GroupMeeting that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupMeetingFindUniqueOrThrowArgs} args - Arguments to find a GroupMeeting
     * @example
     * // Get one GroupMeeting
     * const groupMeeting = await prisma.groupMeeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupMeetingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GroupMeetingFindUniqueOrThrowArgs>
    ): Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>>

    /**
     * Find the first GroupMeeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMeetingFindFirstArgs} args - Arguments to find a GroupMeeting
     * @example
     * // Get one GroupMeeting
     * const groupMeeting = await prisma.groupMeeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupMeetingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GroupMeetingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GroupMeeting'> extends True ? Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>> : Prisma__GroupMeetingClient<GroupMeetingGetPayload<T> | null, null>

    /**
     * Find the first GroupMeeting that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMeetingFindFirstOrThrowArgs} args - Arguments to find a GroupMeeting
     * @example
     * // Get one GroupMeeting
     * const groupMeeting = await prisma.groupMeeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupMeetingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GroupMeetingFindFirstOrThrowArgs>
    ): Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>>

    /**
     * Find zero or more GroupMeetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMeetingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMeetings
     * const groupMeetings = await prisma.groupMeeting.findMany()
     * 
     * // Get first 10 GroupMeetings
     * const groupMeetings = await prisma.groupMeeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMeetingWithIdOnly = await prisma.groupMeeting.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupMeetingFindManyArgs>(
      args?: SelectSubset<T, GroupMeetingFindManyArgs>
    ): Prisma.PrismaPromise<Array<GroupMeetingGetPayload<T>>>

    /**
     * Create a GroupMeeting.
     * @param {GroupMeetingCreateArgs} args - Arguments to create a GroupMeeting.
     * @example
     * // Create one GroupMeeting
     * const GroupMeeting = await prisma.groupMeeting.create({
     *   data: {
     *     // ... data to create a GroupMeeting
     *   }
     * })
     * 
    **/
    create<T extends GroupMeetingCreateArgs>(
      args: SelectSubset<T, GroupMeetingCreateArgs>
    ): Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>>

    /**
     * Create many GroupMeetings.
     *     @param {GroupMeetingCreateManyArgs} args - Arguments to create many GroupMeetings.
     *     @example
     *     // Create many GroupMeetings
     *     const groupMeeting = await prisma.groupMeeting.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupMeetingCreateManyArgs>(
      args?: SelectSubset<T, GroupMeetingCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupMeeting.
     * @param {GroupMeetingDeleteArgs} args - Arguments to delete one GroupMeeting.
     * @example
     * // Delete one GroupMeeting
     * const GroupMeeting = await prisma.groupMeeting.delete({
     *   where: {
     *     // ... filter to delete one GroupMeeting
     *   }
     * })
     * 
    **/
    delete<T extends GroupMeetingDeleteArgs>(
      args: SelectSubset<T, GroupMeetingDeleteArgs>
    ): Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>>

    /**
     * Update one GroupMeeting.
     * @param {GroupMeetingUpdateArgs} args - Arguments to update one GroupMeeting.
     * @example
     * // Update one GroupMeeting
     * const groupMeeting = await prisma.groupMeeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupMeetingUpdateArgs>(
      args: SelectSubset<T, GroupMeetingUpdateArgs>
    ): Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>>

    /**
     * Delete zero or more GroupMeetings.
     * @param {GroupMeetingDeleteManyArgs} args - Arguments to filter GroupMeetings to delete.
     * @example
     * // Delete a few GroupMeetings
     * const { count } = await prisma.groupMeeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupMeetingDeleteManyArgs>(
      args?: SelectSubset<T, GroupMeetingDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMeetings
     * const groupMeeting = await prisma.groupMeeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupMeetingUpdateManyArgs>(
      args: SelectSubset<T, GroupMeetingUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupMeeting.
     * @param {GroupMeetingUpsertArgs} args - Arguments to update or create a GroupMeeting.
     * @example
     * // Update or create a GroupMeeting
     * const groupMeeting = await prisma.groupMeeting.upsert({
     *   create: {
     *     // ... data to create a GroupMeeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMeeting we want to update
     *   }
     * })
    **/
    upsert<T extends GroupMeetingUpsertArgs>(
      args: SelectSubset<T, GroupMeetingUpsertArgs>
    ): Prisma__GroupMeetingClient<GroupMeetingGetPayload<T>>

    /**
     * Count the number of GroupMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMeetingCountArgs} args - Arguments to filter GroupMeetings to count.
     * @example
     * // Count the number of GroupMeetings
     * const count = await prisma.groupMeeting.count({
     *   where: {
     *     // ... the filter for the GroupMeetings we want to count
     *   }
     * })
    **/
    count<T extends GroupMeetingCountArgs>(
      args?: Subset<T, GroupMeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupMeetingAggregateArgs>(args: Subset<T, GroupMeetingAggregateArgs>): Prisma.PrismaPromise<GetGroupMeetingAggregateType<T>>

    /**
     * Group by GroupMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMeetingGroupByArgs} args - Group by arguments.
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
      T extends GroupMeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMeetingGroupByArgs['orderBy'] }
        : { orderBy?: GroupMeetingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupMeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMeeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GroupMeetingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    location<T extends LocationArgs= {}>(args?: Subset<T, LocationArgs>): Prisma__LocationClient<LocationGetPayload<T> | Null>;

    customer<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

    eventType<T extends EventTypeArgs= {}>(args?: Subset<T, EventTypeArgs>): Prisma__EventTypeClient<EventTypeGetPayload<T> | Null>;

    userOnGroupMeetings<T extends GroupMeeting$userOnGroupMeetingsArgs= {}>(args?: Subset<T, GroupMeeting$userOnGroupMeetingsArgs>): Prisma.PrismaPromise<Array<UserOnGroupMeetingGetPayload<T>>| Null>;

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
   * GroupMeeting base type for findUnique actions
   */
  export type GroupMeetingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * Filter, which GroupMeeting to fetch.
     */
    where: GroupMeetingWhereUniqueInput
  }

  /**
   * GroupMeeting findUnique
   */
  export interface GroupMeetingFindUniqueArgs extends GroupMeetingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GroupMeeting findUniqueOrThrow
   */
  export type GroupMeetingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * Filter, which GroupMeeting to fetch.
     */
    where: GroupMeetingWhereUniqueInput
  }


  /**
   * GroupMeeting base type for findFirst actions
   */
  export type GroupMeetingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * Filter, which GroupMeeting to fetch.
     */
    where?: GroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMeetings to fetch.
     */
    orderBy?: Enumerable<GroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMeetings.
     */
    cursor?: GroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMeetings.
     */
    distinct?: Enumerable<GroupMeetingScalarFieldEnum>
  }

  /**
   * GroupMeeting findFirst
   */
  export interface GroupMeetingFindFirstArgs extends GroupMeetingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GroupMeeting findFirstOrThrow
   */
  export type GroupMeetingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * Filter, which GroupMeeting to fetch.
     */
    where?: GroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMeetings to fetch.
     */
    orderBy?: Enumerable<GroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMeetings.
     */
    cursor?: GroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMeetings.
     */
    distinct?: Enumerable<GroupMeetingScalarFieldEnum>
  }


  /**
   * GroupMeeting findMany
   */
  export type GroupMeetingFindManyArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * Filter, which GroupMeetings to fetch.
     */
    where?: GroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMeetings to fetch.
     */
    orderBy?: Enumerable<GroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMeetings.
     */
    cursor?: GroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMeetings.
     */
    skip?: number
    distinct?: Enumerable<GroupMeetingScalarFieldEnum>
  }


  /**
   * GroupMeeting create
   */
  export type GroupMeetingCreateArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * The data needed to create a GroupMeeting.
     */
    data: XOR<GroupMeetingCreateInput, GroupMeetingUncheckedCreateInput>
  }


  /**
   * GroupMeeting createMany
   */
  export type GroupMeetingCreateManyArgs = {
    /**
     * The data used to create many GroupMeetings.
     */
    data: Enumerable<GroupMeetingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GroupMeeting update
   */
  export type GroupMeetingUpdateArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * The data needed to update a GroupMeeting.
     */
    data: XOR<GroupMeetingUpdateInput, GroupMeetingUncheckedUpdateInput>
    /**
     * Choose, which GroupMeeting to update.
     */
    where: GroupMeetingWhereUniqueInput
  }


  /**
   * GroupMeeting updateMany
   */
  export type GroupMeetingUpdateManyArgs = {
    /**
     * The data used to update GroupMeetings.
     */
    data: XOR<GroupMeetingUpdateManyMutationInput, GroupMeetingUncheckedUpdateManyInput>
    /**
     * Filter which GroupMeetings to update
     */
    where?: GroupMeetingWhereInput
  }


  /**
   * GroupMeeting upsert
   */
  export type GroupMeetingUpsertArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * The filter to search for the GroupMeeting to update in case it exists.
     */
    where: GroupMeetingWhereUniqueInput
    /**
     * In case the GroupMeeting found by the `where` argument doesn't exist, create a new GroupMeeting with this data.
     */
    create: XOR<GroupMeetingCreateInput, GroupMeetingUncheckedCreateInput>
    /**
     * In case the GroupMeeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMeetingUpdateInput, GroupMeetingUncheckedUpdateInput>
  }


  /**
   * GroupMeeting delete
   */
  export type GroupMeetingDeleteArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
    /**
     * Filter which GroupMeeting to delete.
     */
    where: GroupMeetingWhereUniqueInput
  }


  /**
   * GroupMeeting deleteMany
   */
  export type GroupMeetingDeleteManyArgs = {
    /**
     * Filter which GroupMeetings to delete
     */
    where?: GroupMeetingWhereInput
  }


  /**
   * GroupMeeting.userOnGroupMeetings
   */
  export type GroupMeeting$userOnGroupMeetingsArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    where?: UserOnGroupMeetingWhereInput
    orderBy?: Enumerable<UserOnGroupMeetingOrderByWithRelationInput>
    cursor?: UserOnGroupMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserOnGroupMeetingScalarFieldEnum>
  }


  /**
   * GroupMeeting without action
   */
  export type GroupMeetingArgs = {
    /**
     * Select specific fields to fetch from the GroupMeeting
     */
    select?: GroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMeetingInclude | null
  }



  /**
   * Model UserOnGroupMeeting
   */


  export type AggregateUserOnGroupMeeting = {
    _count: UserOnGroupMeetingCountAggregateOutputType | null
    _avg: UserOnGroupMeetingAvgAggregateOutputType | null
    _sum: UserOnGroupMeetingSumAggregateOutputType | null
    _min: UserOnGroupMeetingMinAggregateOutputType | null
    _max: UserOnGroupMeetingMaxAggregateOutputType | null
  }

  export type UserOnGroupMeetingAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    groupMeetingId: number | null
  }

  export type UserOnGroupMeetingSumAggregateOutputType = {
    id: number | null
    userId: number | null
    groupMeetingId: number | null
  }

  export type UserOnGroupMeetingMinAggregateOutputType = {
    id: number | null
    userId: number | null
    groupMeetingId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserOnGroupMeetingMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    groupMeetingId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserOnGroupMeetingCountAggregateOutputType = {
    id: number
    userId: number
    groupMeetingId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserOnGroupMeetingAvgAggregateInputType = {
    id?: true
    userId?: true
    groupMeetingId?: true
  }

  export type UserOnGroupMeetingSumAggregateInputType = {
    id?: true
    userId?: true
    groupMeetingId?: true
  }

  export type UserOnGroupMeetingMinAggregateInputType = {
    id?: true
    userId?: true
    groupMeetingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserOnGroupMeetingMaxAggregateInputType = {
    id?: true
    userId?: true
    groupMeetingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserOnGroupMeetingCountAggregateInputType = {
    id?: true
    userId?: true
    groupMeetingId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserOnGroupMeetingAggregateArgs = {
    /**
     * Filter which UserOnGroupMeeting to aggregate.
     */
    where?: UserOnGroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroupMeetings to fetch.
     */
    orderBy?: Enumerable<UserOnGroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOnGroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroupMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOnGroupMeetings
    **/
    _count?: true | UserOnGroupMeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserOnGroupMeetingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserOnGroupMeetingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOnGroupMeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOnGroupMeetingMaxAggregateInputType
  }

  export type GetUserOnGroupMeetingAggregateType<T extends UserOnGroupMeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOnGroupMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOnGroupMeeting[P]>
      : GetScalarType<T[P], AggregateUserOnGroupMeeting[P]>
  }




  export type UserOnGroupMeetingGroupByArgs = {
    where?: UserOnGroupMeetingWhereInput
    orderBy?: Enumerable<UserOnGroupMeetingOrderByWithAggregationInput>
    by: UserOnGroupMeetingScalarFieldEnum[]
    having?: UserOnGroupMeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOnGroupMeetingCountAggregateInputType | true
    _avg?: UserOnGroupMeetingAvgAggregateInputType
    _sum?: UserOnGroupMeetingSumAggregateInputType
    _min?: UserOnGroupMeetingMinAggregateInputType
    _max?: UserOnGroupMeetingMaxAggregateInputType
  }


  export type UserOnGroupMeetingGroupByOutputType = {
    id: number
    userId: number
    groupMeetingId: number
    createdAt: Date
    updatedAt: Date
    _count: UserOnGroupMeetingCountAggregateOutputType | null
    _avg: UserOnGroupMeetingAvgAggregateOutputType | null
    _sum: UserOnGroupMeetingSumAggregateOutputType | null
    _min: UserOnGroupMeetingMinAggregateOutputType | null
    _max: UserOnGroupMeetingMaxAggregateOutputType | null
  }

  type GetUserOnGroupMeetingGroupByPayload<T extends UserOnGroupMeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserOnGroupMeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOnGroupMeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOnGroupMeetingGroupByOutputType[P]>
            : GetScalarType<T[P], UserOnGroupMeetingGroupByOutputType[P]>
        }
      >
    >


  export type UserOnGroupMeetingSelect = {
    id?: boolean
    userId?: boolean
    groupMeetingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
    groupMeeting?: boolean | GroupMeetingArgs
  }


  export type UserOnGroupMeetingInclude = {
    user?: boolean | UserArgs
    groupMeeting?: boolean | GroupMeetingArgs
  }

  export type UserOnGroupMeetingGetPayload<S extends boolean | null | undefined | UserOnGroupMeetingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserOnGroupMeeting :
    S extends undefined ? never :
    S extends { include: any } & (UserOnGroupMeetingArgs | UserOnGroupMeetingFindManyArgs)
    ? UserOnGroupMeeting  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'groupMeeting' ? GroupMeetingGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserOnGroupMeetingArgs | UserOnGroupMeetingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'groupMeeting' ? GroupMeetingGetPayload<S['select'][P]> :  P extends keyof UserOnGroupMeeting ? UserOnGroupMeeting[P] : never
  } 
      : UserOnGroupMeeting


  type UserOnGroupMeetingCountArgs = 
    Omit<UserOnGroupMeetingFindManyArgs, 'select' | 'include'> & {
      select?: UserOnGroupMeetingCountAggregateInputType | true
    }

  export interface UserOnGroupMeetingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserOnGroupMeeting that matches the filter.
     * @param {UserOnGroupMeetingFindUniqueArgs} args - Arguments to find a UserOnGroupMeeting
     * @example
     * // Get one UserOnGroupMeeting
     * const userOnGroupMeeting = await prisma.userOnGroupMeeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserOnGroupMeetingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserOnGroupMeetingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserOnGroupMeeting'> extends True ? Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>> : Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T> | null, null>

    /**
     * Find one UserOnGroupMeeting that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserOnGroupMeetingFindUniqueOrThrowArgs} args - Arguments to find a UserOnGroupMeeting
     * @example
     * // Get one UserOnGroupMeeting
     * const userOnGroupMeeting = await prisma.userOnGroupMeeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserOnGroupMeetingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserOnGroupMeetingFindUniqueOrThrowArgs>
    ): Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>>

    /**
     * Find the first UserOnGroupMeeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupMeetingFindFirstArgs} args - Arguments to find a UserOnGroupMeeting
     * @example
     * // Get one UserOnGroupMeeting
     * const userOnGroupMeeting = await prisma.userOnGroupMeeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserOnGroupMeetingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserOnGroupMeetingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserOnGroupMeeting'> extends True ? Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>> : Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T> | null, null>

    /**
     * Find the first UserOnGroupMeeting that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupMeetingFindFirstOrThrowArgs} args - Arguments to find a UserOnGroupMeeting
     * @example
     * // Get one UserOnGroupMeeting
     * const userOnGroupMeeting = await prisma.userOnGroupMeeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserOnGroupMeetingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserOnGroupMeetingFindFirstOrThrowArgs>
    ): Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>>

    /**
     * Find zero or more UserOnGroupMeetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupMeetingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOnGroupMeetings
     * const userOnGroupMeetings = await prisma.userOnGroupMeeting.findMany()
     * 
     * // Get first 10 UserOnGroupMeetings
     * const userOnGroupMeetings = await prisma.userOnGroupMeeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userOnGroupMeetingWithIdOnly = await prisma.userOnGroupMeeting.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserOnGroupMeetingFindManyArgs>(
      args?: SelectSubset<T, UserOnGroupMeetingFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserOnGroupMeetingGetPayload<T>>>

    /**
     * Create a UserOnGroupMeeting.
     * @param {UserOnGroupMeetingCreateArgs} args - Arguments to create a UserOnGroupMeeting.
     * @example
     * // Create one UserOnGroupMeeting
     * const UserOnGroupMeeting = await prisma.userOnGroupMeeting.create({
     *   data: {
     *     // ... data to create a UserOnGroupMeeting
     *   }
     * })
     * 
    **/
    create<T extends UserOnGroupMeetingCreateArgs>(
      args: SelectSubset<T, UserOnGroupMeetingCreateArgs>
    ): Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>>

    /**
     * Create many UserOnGroupMeetings.
     *     @param {UserOnGroupMeetingCreateManyArgs} args - Arguments to create many UserOnGroupMeetings.
     *     @example
     *     // Create many UserOnGroupMeetings
     *     const userOnGroupMeeting = await prisma.userOnGroupMeeting.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserOnGroupMeetingCreateManyArgs>(
      args?: SelectSubset<T, UserOnGroupMeetingCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserOnGroupMeeting.
     * @param {UserOnGroupMeetingDeleteArgs} args - Arguments to delete one UserOnGroupMeeting.
     * @example
     * // Delete one UserOnGroupMeeting
     * const UserOnGroupMeeting = await prisma.userOnGroupMeeting.delete({
     *   where: {
     *     // ... filter to delete one UserOnGroupMeeting
     *   }
     * })
     * 
    **/
    delete<T extends UserOnGroupMeetingDeleteArgs>(
      args: SelectSubset<T, UserOnGroupMeetingDeleteArgs>
    ): Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>>

    /**
     * Update one UserOnGroupMeeting.
     * @param {UserOnGroupMeetingUpdateArgs} args - Arguments to update one UserOnGroupMeeting.
     * @example
     * // Update one UserOnGroupMeeting
     * const userOnGroupMeeting = await prisma.userOnGroupMeeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserOnGroupMeetingUpdateArgs>(
      args: SelectSubset<T, UserOnGroupMeetingUpdateArgs>
    ): Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>>

    /**
     * Delete zero or more UserOnGroupMeetings.
     * @param {UserOnGroupMeetingDeleteManyArgs} args - Arguments to filter UserOnGroupMeetings to delete.
     * @example
     * // Delete a few UserOnGroupMeetings
     * const { count } = await prisma.userOnGroupMeeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserOnGroupMeetingDeleteManyArgs>(
      args?: SelectSubset<T, UserOnGroupMeetingDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnGroupMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupMeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOnGroupMeetings
     * const userOnGroupMeeting = await prisma.userOnGroupMeeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserOnGroupMeetingUpdateManyArgs>(
      args: SelectSubset<T, UserOnGroupMeetingUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserOnGroupMeeting.
     * @param {UserOnGroupMeetingUpsertArgs} args - Arguments to update or create a UserOnGroupMeeting.
     * @example
     * // Update or create a UserOnGroupMeeting
     * const userOnGroupMeeting = await prisma.userOnGroupMeeting.upsert({
     *   create: {
     *     // ... data to create a UserOnGroupMeeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOnGroupMeeting we want to update
     *   }
     * })
    **/
    upsert<T extends UserOnGroupMeetingUpsertArgs>(
      args: SelectSubset<T, UserOnGroupMeetingUpsertArgs>
    ): Prisma__UserOnGroupMeetingClient<UserOnGroupMeetingGetPayload<T>>

    /**
     * Count the number of UserOnGroupMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupMeetingCountArgs} args - Arguments to filter UserOnGroupMeetings to count.
     * @example
     * // Count the number of UserOnGroupMeetings
     * const count = await prisma.userOnGroupMeeting.count({
     *   where: {
     *     // ... the filter for the UserOnGroupMeetings we want to count
     *   }
     * })
    **/
    count<T extends UserOnGroupMeetingCountArgs>(
      args?: Subset<T, UserOnGroupMeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOnGroupMeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOnGroupMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupMeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserOnGroupMeetingAggregateArgs>(args: Subset<T, UserOnGroupMeetingAggregateArgs>): Prisma.PrismaPromise<GetUserOnGroupMeetingAggregateType<T>>

    /**
     * Group by UserOnGroupMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupMeetingGroupByArgs} args - Group by arguments.
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
      T extends UserOnGroupMeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOnGroupMeetingGroupByArgs['orderBy'] }
        : { orderBy?: UserOnGroupMeetingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserOnGroupMeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOnGroupMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOnGroupMeeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserOnGroupMeetingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    groupMeeting<T extends GroupMeetingArgs= {}>(args?: Subset<T, GroupMeetingArgs>): Prisma__GroupMeetingClient<GroupMeetingGetPayload<T> | Null>;

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
   * UserOnGroupMeeting base type for findUnique actions
   */
  export type UserOnGroupMeetingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * Filter, which UserOnGroupMeeting to fetch.
     */
    where: UserOnGroupMeetingWhereUniqueInput
  }

  /**
   * UserOnGroupMeeting findUnique
   */
  export interface UserOnGroupMeetingFindUniqueArgs extends UserOnGroupMeetingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserOnGroupMeeting findUniqueOrThrow
   */
  export type UserOnGroupMeetingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * Filter, which UserOnGroupMeeting to fetch.
     */
    where: UserOnGroupMeetingWhereUniqueInput
  }


  /**
   * UserOnGroupMeeting base type for findFirst actions
   */
  export type UserOnGroupMeetingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * Filter, which UserOnGroupMeeting to fetch.
     */
    where?: UserOnGroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroupMeetings to fetch.
     */
    orderBy?: Enumerable<UserOnGroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnGroupMeetings.
     */
    cursor?: UserOnGroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroupMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnGroupMeetings.
     */
    distinct?: Enumerable<UserOnGroupMeetingScalarFieldEnum>
  }

  /**
   * UserOnGroupMeeting findFirst
   */
  export interface UserOnGroupMeetingFindFirstArgs extends UserOnGroupMeetingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserOnGroupMeeting findFirstOrThrow
   */
  export type UserOnGroupMeetingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * Filter, which UserOnGroupMeeting to fetch.
     */
    where?: UserOnGroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroupMeetings to fetch.
     */
    orderBy?: Enumerable<UserOnGroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnGroupMeetings.
     */
    cursor?: UserOnGroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroupMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnGroupMeetings.
     */
    distinct?: Enumerable<UserOnGroupMeetingScalarFieldEnum>
  }


  /**
   * UserOnGroupMeeting findMany
   */
  export type UserOnGroupMeetingFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * Filter, which UserOnGroupMeetings to fetch.
     */
    where?: UserOnGroupMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroupMeetings to fetch.
     */
    orderBy?: Enumerable<UserOnGroupMeetingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOnGroupMeetings.
     */
    cursor?: UserOnGroupMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroupMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroupMeetings.
     */
    skip?: number
    distinct?: Enumerable<UserOnGroupMeetingScalarFieldEnum>
  }


  /**
   * UserOnGroupMeeting create
   */
  export type UserOnGroupMeetingCreateArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * The data needed to create a UserOnGroupMeeting.
     */
    data: XOR<UserOnGroupMeetingCreateInput, UserOnGroupMeetingUncheckedCreateInput>
  }


  /**
   * UserOnGroupMeeting createMany
   */
  export type UserOnGroupMeetingCreateManyArgs = {
    /**
     * The data used to create many UserOnGroupMeetings.
     */
    data: Enumerable<UserOnGroupMeetingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserOnGroupMeeting update
   */
  export type UserOnGroupMeetingUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * The data needed to update a UserOnGroupMeeting.
     */
    data: XOR<UserOnGroupMeetingUpdateInput, UserOnGroupMeetingUncheckedUpdateInput>
    /**
     * Choose, which UserOnGroupMeeting to update.
     */
    where: UserOnGroupMeetingWhereUniqueInput
  }


  /**
   * UserOnGroupMeeting updateMany
   */
  export type UserOnGroupMeetingUpdateManyArgs = {
    /**
     * The data used to update UserOnGroupMeetings.
     */
    data: XOR<UserOnGroupMeetingUpdateManyMutationInput, UserOnGroupMeetingUncheckedUpdateManyInput>
    /**
     * Filter which UserOnGroupMeetings to update
     */
    where?: UserOnGroupMeetingWhereInput
  }


  /**
   * UserOnGroupMeeting upsert
   */
  export type UserOnGroupMeetingUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * The filter to search for the UserOnGroupMeeting to update in case it exists.
     */
    where: UserOnGroupMeetingWhereUniqueInput
    /**
     * In case the UserOnGroupMeeting found by the `where` argument doesn't exist, create a new UserOnGroupMeeting with this data.
     */
    create: XOR<UserOnGroupMeetingCreateInput, UserOnGroupMeetingUncheckedCreateInput>
    /**
     * In case the UserOnGroupMeeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOnGroupMeetingUpdateInput, UserOnGroupMeetingUncheckedUpdateInput>
  }


  /**
   * UserOnGroupMeeting delete
   */
  export type UserOnGroupMeetingDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
    /**
     * Filter which UserOnGroupMeeting to delete.
     */
    where: UserOnGroupMeetingWhereUniqueInput
  }


  /**
   * UserOnGroupMeeting deleteMany
   */
  export type UserOnGroupMeetingDeleteManyArgs = {
    /**
     * Filter which UserOnGroupMeetings to delete
     */
    where?: UserOnGroupMeetingWhereInput
  }


  /**
   * UserOnGroupMeeting without action
   */
  export type UserOnGroupMeetingArgs = {
    /**
     * Select specific fields to fetch from the UserOnGroupMeeting
     */
    select?: UserOnGroupMeetingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserOnGroupMeetingInclude | null
  }



  /**
   * Model DateSlotOnTimeSelect
   */


  export type AggregateDateSlotOnTimeSelect = {
    _count: DateSlotOnTimeSelectCountAggregateOutputType | null
    _avg: DateSlotOnTimeSelectAvgAggregateOutputType | null
    _sum: DateSlotOnTimeSelectSumAggregateOutputType | null
    _min: DateSlotOnTimeSelectMinAggregateOutputType | null
    _max: DateSlotOnTimeSelectMaxAggregateOutputType | null
  }

  export type DateSlotOnTimeSelectAvgAggregateOutputType = {
    id: number | null
    dateSlotId: number | null
    timeSelectId: number | null
  }

  export type DateSlotOnTimeSelectSumAggregateOutputType = {
    id: number | null
    dateSlotId: number | null
    timeSelectId: number | null
  }

  export type DateSlotOnTimeSelectMinAggregateOutputType = {
    id: number | null
    dateSlotId: number | null
    timeSelectId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DateSlotOnTimeSelectMaxAggregateOutputType = {
    id: number | null
    dateSlotId: number | null
    timeSelectId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DateSlotOnTimeSelectCountAggregateOutputType = {
    id: number
    dateSlotId: number
    timeSelectId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DateSlotOnTimeSelectAvgAggregateInputType = {
    id?: true
    dateSlotId?: true
    timeSelectId?: true
  }

  export type DateSlotOnTimeSelectSumAggregateInputType = {
    id?: true
    dateSlotId?: true
    timeSelectId?: true
  }

  export type DateSlotOnTimeSelectMinAggregateInputType = {
    id?: true
    dateSlotId?: true
    timeSelectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DateSlotOnTimeSelectMaxAggregateInputType = {
    id?: true
    dateSlotId?: true
    timeSelectId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DateSlotOnTimeSelectCountAggregateInputType = {
    id?: true
    dateSlotId?: true
    timeSelectId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DateSlotOnTimeSelectAggregateArgs = {
    /**
     * Filter which DateSlotOnTimeSelect to aggregate.
     */
    where?: DateSlotOnTimeSelectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateSlotOnTimeSelects to fetch.
     */
    orderBy?: Enumerable<DateSlotOnTimeSelectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DateSlotOnTimeSelectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateSlotOnTimeSelects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateSlotOnTimeSelects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DateSlotOnTimeSelects
    **/
    _count?: true | DateSlotOnTimeSelectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DateSlotOnTimeSelectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DateSlotOnTimeSelectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DateSlotOnTimeSelectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DateSlotOnTimeSelectMaxAggregateInputType
  }

  export type GetDateSlotOnTimeSelectAggregateType<T extends DateSlotOnTimeSelectAggregateArgs> = {
        [P in keyof T & keyof AggregateDateSlotOnTimeSelect]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDateSlotOnTimeSelect[P]>
      : GetScalarType<T[P], AggregateDateSlotOnTimeSelect[P]>
  }




  export type DateSlotOnTimeSelectGroupByArgs = {
    where?: DateSlotOnTimeSelectWhereInput
    orderBy?: Enumerable<DateSlotOnTimeSelectOrderByWithAggregationInput>
    by: DateSlotOnTimeSelectScalarFieldEnum[]
    having?: DateSlotOnTimeSelectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DateSlotOnTimeSelectCountAggregateInputType | true
    _avg?: DateSlotOnTimeSelectAvgAggregateInputType
    _sum?: DateSlotOnTimeSelectSumAggregateInputType
    _min?: DateSlotOnTimeSelectMinAggregateInputType
    _max?: DateSlotOnTimeSelectMaxAggregateInputType
  }


  export type DateSlotOnTimeSelectGroupByOutputType = {
    id: number
    dateSlotId: number
    timeSelectId: number
    createdAt: Date
    updatedAt: Date
    _count: DateSlotOnTimeSelectCountAggregateOutputType | null
    _avg: DateSlotOnTimeSelectAvgAggregateOutputType | null
    _sum: DateSlotOnTimeSelectSumAggregateOutputType | null
    _min: DateSlotOnTimeSelectMinAggregateOutputType | null
    _max: DateSlotOnTimeSelectMaxAggregateOutputType | null
  }

  type GetDateSlotOnTimeSelectGroupByPayload<T extends DateSlotOnTimeSelectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DateSlotOnTimeSelectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DateSlotOnTimeSelectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DateSlotOnTimeSelectGroupByOutputType[P]>
            : GetScalarType<T[P], DateSlotOnTimeSelectGroupByOutputType[P]>
        }
      >
    >


  export type DateSlotOnTimeSelectSelect = {
    id?: boolean
    dateSlotId?: boolean
    timeSelectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dateSlot?: boolean | DateSlotArgs
    timeSelect?: boolean | TimeSelectArgs
  }


  export type DateSlotOnTimeSelectInclude = {
    dateSlot?: boolean | DateSlotArgs
    timeSelect?: boolean | TimeSelectArgs
  }

  export type DateSlotOnTimeSelectGetPayload<S extends boolean | null | undefined | DateSlotOnTimeSelectArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DateSlotOnTimeSelect :
    S extends undefined ? never :
    S extends { include: any } & (DateSlotOnTimeSelectArgs | DateSlotOnTimeSelectFindManyArgs)
    ? DateSlotOnTimeSelect  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dateSlot' ? DateSlotGetPayload<S['include'][P]> :
        P extends 'timeSelect' ? TimeSelectGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DateSlotOnTimeSelectArgs | DateSlotOnTimeSelectFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dateSlot' ? DateSlotGetPayload<S['select'][P]> :
        P extends 'timeSelect' ? TimeSelectGetPayload<S['select'][P]> :  P extends keyof DateSlotOnTimeSelect ? DateSlotOnTimeSelect[P] : never
  } 
      : DateSlotOnTimeSelect


  type DateSlotOnTimeSelectCountArgs = 
    Omit<DateSlotOnTimeSelectFindManyArgs, 'select' | 'include'> & {
      select?: DateSlotOnTimeSelectCountAggregateInputType | true
    }

  export interface DateSlotOnTimeSelectDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DateSlotOnTimeSelect that matches the filter.
     * @param {DateSlotOnTimeSelectFindUniqueArgs} args - Arguments to find a DateSlotOnTimeSelect
     * @example
     * // Get one DateSlotOnTimeSelect
     * const dateSlotOnTimeSelect = await prisma.dateSlotOnTimeSelect.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DateSlotOnTimeSelectFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DateSlotOnTimeSelectFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DateSlotOnTimeSelect'> extends True ? Prisma__DateSlotOnTimeSelectClient<DateSlotOnTimeSelectGetPayload<T>> : Prisma__DateSlotOnTimeSelectClient<DateSlotOnTimeSelectGetPayload<T> | null, null>

    /**
     * Find one DateSlotOnTimeSelect that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DateSlotOnTimeSelectFindUniqueOrThrowArgs} args - Arguments to find a DateSlotOnTimeSelect
     * @example
     * // Get one DateSlotOnTimeSelect
     * const dateSlotOnTimeSelect = await prisma.dateSlotOnTimeSelect.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DateSlotOnTimeSelectFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DateSlotOnTimeSelectFindUniqueOrThrowArgs>
    ): Prisma__DateSlotOnTimeSelectClient<DateSlotOnTimeSelectGetPayload<T>>

    /**
     * Find the first DateSlotOnTimeSelect that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotOnTimeSelectFindFirstArgs} args - Arguments to find a DateSlotOnTimeSelect
     * @example
     * // Get one DateSlotOnTimeSelect
     * const dateSlotOnTimeSelect = await prisma.dateSlotOnTimeSelect.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DateSlotOnTimeSelectFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DateSlotOnTimeSelectFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DateSlotOnTimeSelect'> extends True ? Prisma__DateSlotOnTimeSelectClient<DateSlotOnTimeSelectGetPayload<T>> : Prisma__DateSlotOnTimeSelectClient<DateSlotOnTimeSelectGetPayload<T> | null, null>

    /**
     * Find the first DateSlotOnTimeSelect that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotOnTimeSelectFindFirstOrThrowArgs} args - Arguments to find a DateSlotOnTimeSelect
     * @example
     * // Get one DateSlotOnTimeSelect
     * const dateSlotOnTimeSelect = await prisma.dateSlotOnTimeSelect.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DateSlotOnTimeSelectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DateSlotOnTimeSelectFindFirstOrThrowArgs>
    ): Prisma__DateSlotOnTimeSelectClient<DateSlotOnTimeSelectGetPayload<T>>

    /**
     * Find zero or more DateSlotOnTimeSelects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotOnTimeSelectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DateSlotOnTimeSelects
     * const dateSlotOnTimeSelects = await prisma.dateSlotOnTimeSelect.findMany()
     * 
     * // Get first 10 DateSlotOnTimeSelects
     * const dateSlotOnTimeSelects = await prisma.dateSlotOnTimeSelect.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dateSlotOnTimeSelectWithIdOnly = await prisma.dateSlotOnTimeSelect.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DateSlotOnTimeSelectFindManyArgs>(
      args?: SelectSubset<T, DateSlotOnTimeSelectFindManyArgs>
    ): Prisma.PrismaPromise<Array<DateSlotOnTimeSelectGetPayload<T>>>

    /**
     * Create a DateSlotOnTimeSelect.
     * @param {DateSlotOnTimeSelectCreateArgs} args - Arguments to create a DateSlotOnTimeSelect.
     * @example
     * // Create one DateSlotOnTimeSelect
     * const DateSlotOnTimeSelect = await prisma.dateSlotOnTimeSelect.create({
     *   data: {
     *     // ... data to create a DateSlotOnTimeSelect
     *   }
     * })
     * 
    **/
    create<T extends DateSlotOnTimeSelectCreateArgs>(
      args: SelectSubset<T, DateSlotOnTimeSelectCreateArgs>
    ): Prisma__DateSlotOnTimeSelectClient<DateSlotOnTimeSelectGetPayload<T>>

    /**
     * Create many DateSlotOnTimeSelects.
     *     @param {DateSlotOnTimeSelectCreateManyArgs} args - Arguments to create many DateSlotOnTimeSelects.
     *     @example
     *     // Create many DateSlotOnTimeSelects
     *     const dateSlotOnTimeSelect = await prisma.dateSlotOnTimeSelect.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DateSlotOnTimeSelectCreateManyArgs>(
      args?: SelectSubset<T, DateSlotOnTimeSelectCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DateSlotOnTimeSelect.
     * @param {DateSlotOnTimeSelectDeleteArgs} args - Arguments to delete one DateSlotOnTimeSelect.
     * @example
     * // Delete one DateSlotOnTimeSelect
     * const DateSlotOnTimeSelect = await prisma.dateSlotOnTimeSelect.delete({
     *   where: {
     *     // ... filter to delete one DateSlotOnTimeSelect
     *   }
     * })
     * 
    **/
    delete<T extends DateSlotOnTimeSelectDeleteArgs>(
      args: SelectSubset<T, DateSlotOnTimeSelectDeleteArgs>
    ): Prisma__DateSlotOnTimeSelectClient<DateSlotOnTimeSelectGetPayload<T>>

    /**
     * Update one DateSlotOnTimeSelect.
     * @param {DateSlotOnTimeSelectUpdateArgs} args - Arguments to update one DateSlotOnTimeSelect.
     * @example
     * // Update one DateSlotOnTimeSelect
     * const dateSlotOnTimeSelect = await prisma.dateSlotOnTimeSelect.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DateSlotOnTimeSelectUpdateArgs>(
      args: SelectSubset<T, DateSlotOnTimeSelectUpdateArgs>
    ): Prisma__DateSlotOnTimeSelectClient<DateSlotOnTimeSelectGetPayload<T>>

    /**
     * Delete zero or more DateSlotOnTimeSelects.
     * @param {DateSlotOnTimeSelectDeleteManyArgs} args - Arguments to filter DateSlotOnTimeSelects to delete.
     * @example
     * // Delete a few DateSlotOnTimeSelects
     * const { count } = await prisma.dateSlotOnTimeSelect.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DateSlotOnTimeSelectDeleteManyArgs>(
      args?: SelectSubset<T, DateSlotOnTimeSelectDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateSlotOnTimeSelects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotOnTimeSelectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DateSlotOnTimeSelects
     * const dateSlotOnTimeSelect = await prisma.dateSlotOnTimeSelect.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DateSlotOnTimeSelectUpdateManyArgs>(
      args: SelectSubset<T, DateSlotOnTimeSelectUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DateSlotOnTimeSelect.
     * @param {DateSlotOnTimeSelectUpsertArgs} args - Arguments to update or create a DateSlotOnTimeSelect.
     * @example
     * // Update or create a DateSlotOnTimeSelect
     * const dateSlotOnTimeSelect = await prisma.dateSlotOnTimeSelect.upsert({
     *   create: {
     *     // ... data to create a DateSlotOnTimeSelect
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DateSlotOnTimeSelect we want to update
     *   }
     * })
    **/
    upsert<T extends DateSlotOnTimeSelectUpsertArgs>(
      args: SelectSubset<T, DateSlotOnTimeSelectUpsertArgs>
    ): Prisma__DateSlotOnTimeSelectClient<DateSlotOnTimeSelectGetPayload<T>>

    /**
     * Count the number of DateSlotOnTimeSelects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotOnTimeSelectCountArgs} args - Arguments to filter DateSlotOnTimeSelects to count.
     * @example
     * // Count the number of DateSlotOnTimeSelects
     * const count = await prisma.dateSlotOnTimeSelect.count({
     *   where: {
     *     // ... the filter for the DateSlotOnTimeSelects we want to count
     *   }
     * })
    **/
    count<T extends DateSlotOnTimeSelectCountArgs>(
      args?: Subset<T, DateSlotOnTimeSelectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DateSlotOnTimeSelectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DateSlotOnTimeSelect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotOnTimeSelectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DateSlotOnTimeSelectAggregateArgs>(args: Subset<T, DateSlotOnTimeSelectAggregateArgs>): Prisma.PrismaPromise<GetDateSlotOnTimeSelectAggregateType<T>>

    /**
     * Group by DateSlotOnTimeSelect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateSlotOnTimeSelectGroupByArgs} args - Group by arguments.
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
      T extends DateSlotOnTimeSelectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DateSlotOnTimeSelectGroupByArgs['orderBy'] }
        : { orderBy?: DateSlotOnTimeSelectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DateSlotOnTimeSelectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDateSlotOnTimeSelectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DateSlotOnTimeSelect.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DateSlotOnTimeSelectClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dateSlot<T extends DateSlotArgs= {}>(args?: Subset<T, DateSlotArgs>): Prisma__DateSlotClient<DateSlotGetPayload<T> | Null>;

    timeSelect<T extends TimeSelectArgs= {}>(args?: Subset<T, TimeSelectArgs>): Prisma__TimeSelectClient<TimeSelectGetPayload<T> | Null>;

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
   * DateSlotOnTimeSelect base type for findUnique actions
   */
  export type DateSlotOnTimeSelectFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DateSlotOnTimeSelect
     */
    select?: DateSlotOnTimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotOnTimeSelectInclude | null
    /**
     * Filter, which DateSlotOnTimeSelect to fetch.
     */
    where: DateSlotOnTimeSelectWhereUniqueInput
  }

  /**
   * DateSlotOnTimeSelect findUnique
   */
  export interface DateSlotOnTimeSelectFindUniqueArgs extends DateSlotOnTimeSelectFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DateSlotOnTimeSelect findUniqueOrThrow
   */
  export type DateSlotOnTimeSelectFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DateSlotOnTimeSelect
     */
    select?: DateSlotOnTimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotOnTimeSelectInclude | null
    /**
     * Filter, which DateSlotOnTimeSelect to fetch.
     */
    where: DateSlotOnTimeSelectWhereUniqueInput
  }


  /**
   * DateSlotOnTimeSelect base type for findFirst actions
   */
  export type DateSlotOnTimeSelectFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DateSlotOnTimeSelect
     */
    select?: DateSlotOnTimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotOnTimeSelectInclude | null
    /**
     * Filter, which DateSlotOnTimeSelect to fetch.
     */
    where?: DateSlotOnTimeSelectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateSlotOnTimeSelects to fetch.
     */
    orderBy?: Enumerable<DateSlotOnTimeSelectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateSlotOnTimeSelects.
     */
    cursor?: DateSlotOnTimeSelectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateSlotOnTimeSelects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateSlotOnTimeSelects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateSlotOnTimeSelects.
     */
    distinct?: Enumerable<DateSlotOnTimeSelectScalarFieldEnum>
  }

  /**
   * DateSlotOnTimeSelect findFirst
   */
  export interface DateSlotOnTimeSelectFindFirstArgs extends DateSlotOnTimeSelectFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DateSlotOnTimeSelect findFirstOrThrow
   */
  export type DateSlotOnTimeSelectFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DateSlotOnTimeSelect
     */
    select?: DateSlotOnTimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotOnTimeSelectInclude | null
    /**
     * Filter, which DateSlotOnTimeSelect to fetch.
     */
    where?: DateSlotOnTimeSelectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateSlotOnTimeSelects to fetch.
     */
    orderBy?: Enumerable<DateSlotOnTimeSelectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateSlotOnTimeSelects.
     */
    cursor?: DateSlotOnTimeSelectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateSlotOnTimeSelects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateSlotOnTimeSelects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateSlotOnTimeSelects.
     */
    distinct?: Enumerable<DateSlotOnTimeSelectScalarFieldEnum>
  }


  /**
   * DateSlotOnTimeSelect findMany
   */
  export type DateSlotOnTimeSelectFindManyArgs = {
    /**
     * Select specific fields to fetch from the DateSlotOnTimeSelect
     */
    select?: DateSlotOnTimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotOnTimeSelectInclude | null
    /**
     * Filter, which DateSlotOnTimeSelects to fetch.
     */
    where?: DateSlotOnTimeSelectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateSlotOnTimeSelects to fetch.
     */
    orderBy?: Enumerable<DateSlotOnTimeSelectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DateSlotOnTimeSelects.
     */
    cursor?: DateSlotOnTimeSelectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateSlotOnTimeSelects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateSlotOnTimeSelects.
     */
    skip?: number
    distinct?: Enumerable<DateSlotOnTimeSelectScalarFieldEnum>
  }


  /**
   * DateSlotOnTimeSelect create
   */
  export type DateSlotOnTimeSelectCreateArgs = {
    /**
     * Select specific fields to fetch from the DateSlotOnTimeSelect
     */
    select?: DateSlotOnTimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotOnTimeSelectInclude | null
    /**
     * The data needed to create a DateSlotOnTimeSelect.
     */
    data: XOR<DateSlotOnTimeSelectCreateInput, DateSlotOnTimeSelectUncheckedCreateInput>
  }


  /**
   * DateSlotOnTimeSelect createMany
   */
  export type DateSlotOnTimeSelectCreateManyArgs = {
    /**
     * The data used to create many DateSlotOnTimeSelects.
     */
    data: Enumerable<DateSlotOnTimeSelectCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DateSlotOnTimeSelect update
   */
  export type DateSlotOnTimeSelectUpdateArgs = {
    /**
     * Select specific fields to fetch from the DateSlotOnTimeSelect
     */
    select?: DateSlotOnTimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotOnTimeSelectInclude | null
    /**
     * The data needed to update a DateSlotOnTimeSelect.
     */
    data: XOR<DateSlotOnTimeSelectUpdateInput, DateSlotOnTimeSelectUncheckedUpdateInput>
    /**
     * Choose, which DateSlotOnTimeSelect to update.
     */
    where: DateSlotOnTimeSelectWhereUniqueInput
  }


  /**
   * DateSlotOnTimeSelect updateMany
   */
  export type DateSlotOnTimeSelectUpdateManyArgs = {
    /**
     * The data used to update DateSlotOnTimeSelects.
     */
    data: XOR<DateSlotOnTimeSelectUpdateManyMutationInput, DateSlotOnTimeSelectUncheckedUpdateManyInput>
    /**
     * Filter which DateSlotOnTimeSelects to update
     */
    where?: DateSlotOnTimeSelectWhereInput
  }


  /**
   * DateSlotOnTimeSelect upsert
   */
  export type DateSlotOnTimeSelectUpsertArgs = {
    /**
     * Select specific fields to fetch from the DateSlotOnTimeSelect
     */
    select?: DateSlotOnTimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotOnTimeSelectInclude | null
    /**
     * The filter to search for the DateSlotOnTimeSelect to update in case it exists.
     */
    where: DateSlotOnTimeSelectWhereUniqueInput
    /**
     * In case the DateSlotOnTimeSelect found by the `where` argument doesn't exist, create a new DateSlotOnTimeSelect with this data.
     */
    create: XOR<DateSlotOnTimeSelectCreateInput, DateSlotOnTimeSelectUncheckedCreateInput>
    /**
     * In case the DateSlotOnTimeSelect was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DateSlotOnTimeSelectUpdateInput, DateSlotOnTimeSelectUncheckedUpdateInput>
  }


  /**
   * DateSlotOnTimeSelect delete
   */
  export type DateSlotOnTimeSelectDeleteArgs = {
    /**
     * Select specific fields to fetch from the DateSlotOnTimeSelect
     */
    select?: DateSlotOnTimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotOnTimeSelectInclude | null
    /**
     * Filter which DateSlotOnTimeSelect to delete.
     */
    where: DateSlotOnTimeSelectWhereUniqueInput
  }


  /**
   * DateSlotOnTimeSelect deleteMany
   */
  export type DateSlotOnTimeSelectDeleteManyArgs = {
    /**
     * Filter which DateSlotOnTimeSelects to delete
     */
    where?: DateSlotOnTimeSelectWhereInput
  }


  /**
   * DateSlotOnTimeSelect without action
   */
  export type DateSlotOnTimeSelectArgs = {
    /**
     * Select specific fields to fetch from the DateSlotOnTimeSelect
     */
    select?: DateSlotOnTimeSelectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateSlotOnTimeSelectInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AvailabilityScheduleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    timezone: 'timezone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvailabilityScheduleScalarFieldEnum = (typeof AvailabilityScheduleScalarFieldEnum)[keyof typeof AvailabilityScheduleScalarFieldEnum]


  export const BillingScalarFieldEnum: {
    id: 'id',
    subscriptionMonth: 'subscriptionMonth',
    subscriptionPrice: 'subscriptionPrice',
    userId: 'userId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillingScalarFieldEnum = (typeof BillingScalarFieldEnum)[keyof typeof BillingScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const DateSlotOnTimeSelectScalarFieldEnum: {
    id: 'id',
    dateSlotId: 'dateSlotId',
    timeSelectId: 'timeSelectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DateSlotOnTimeSelectScalarFieldEnum = (typeof DateSlotOnTimeSelectScalarFieldEnum)[keyof typeof DateSlotOnTimeSelectScalarFieldEnum]


  export const DateSlotScalarFieldEnum: {
    id: 'id',
    availabilityScheduleId: 'availabilityScheduleId',
    status: 'status',
    date: 'date',
    custormerId: 'custormerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DateSlotScalarFieldEnum = (typeof DateSlotScalarFieldEnum)[keyof typeof DateSlotScalarFieldEnum]


  export const DaySlotOnDateSlotScalarFieldEnum: {
    id: 'id',
    daySlotId: 'daySlotId',
    dateSlotId: 'dateSlotId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DaySlotOnDateSlotScalarFieldEnum = (typeof DaySlotOnDateSlotScalarFieldEnum)[keyof typeof DaySlotOnDateSlotScalarFieldEnum]


  export const DaySlotScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DaySlotScalarFieldEnum = (typeof DaySlotScalarFieldEnum)[keyof typeof DaySlotScalarFieldEnum]


  export const EventTypeOnDaySlotScalarFieldEnum: {
    id: 'id',
    eventTypeId: 'eventTypeId',
    daySlotId: 'daySlotId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventTypeOnDaySlotScalarFieldEnum = (typeof EventTypeOnDaySlotScalarFieldEnum)[keyof typeof EventTypeOnDaySlotScalarFieldEnum]


  export const EventTypeOnLocationScalarFieldEnum: {
    id: 'id',
    eventTypeId: 'eventTypeId',
    locationId: 'locationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventTypeOnLocationScalarFieldEnum = (typeof EventTypeOnLocationScalarFieldEnum)[keyof typeof EventTypeOnLocationScalarFieldEnum]


  export const EventTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    description: 'description',
    price: 'price',
    timeDuration: 'timeDuration',
    availabilityScheduleId: 'availabilityScheduleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventTypeScalarFieldEnum = (typeof EventTypeScalarFieldEnum)[keyof typeof EventTypeScalarFieldEnum]


  export const GroupMeetingScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    customerId: 'customerId',
    totalPrice: 'totalPrice',
    timezone: 'timezone',
    eventTypeId: 'eventTypeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupMeetingScalarFieldEnum = (typeof GroupMeetingScalarFieldEnum)[keyof typeof GroupMeetingScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TimeSelectScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TimeSelectScalarFieldEnum = (typeof TimeSelectScalarFieldEnum)[keyof typeof TimeSelectScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserOnGroupMeetingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    groupMeetingId: 'groupMeetingId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserOnGroupMeetingScalarFieldEnum = (typeof UserOnGroupMeetingScalarFieldEnum)[keyof typeof UserOnGroupMeetingScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    firebaseUid: 'firebaseUid',
    subscription: 'subscription',
    mobileNumber: 'mobileNumber',
    userLink: 'userLink',
    job: 'job',
    education: 'education',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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
    name?: StringFilter | string
    username?: StringFilter | string
    firebaseUid?: StringFilter | string
    subscription?: StringNullableFilter | string | null
    mobileNumber?: StringNullableFilter | string | null
    userLink?: StringNullableFilter | string | null
    job?: StringNullableFilter | string | null
    education?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    eventTypes?: EventTypeListRelationFilter
    billings?: BillingListRelationFilter
    userOnGroupMeetings?: UserOnGroupMeetingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    firebaseUid?: SortOrder
    subscription?: SortOrder
    mobileNumber?: SortOrder
    userLink?: SortOrder
    job?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventTypes?: EventTypeOrderByRelationAggregateInput
    billings?: BillingOrderByRelationAggregateInput
    userOnGroupMeetings?: UserOnGroupMeetingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    username?: string
    firebaseUid?: string
    mobileNumber?: string
    userLink?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    firebaseUid?: SortOrder
    subscription?: SortOrder
    mobileNumber?: SortOrder
    userLink?: SortOrder
    job?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    name?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    firebaseUid?: StringWithAggregatesFilter | string
    subscription?: StringNullableWithAggregatesFilter | string | null
    mobileNumber?: StringNullableWithAggregatesFilter | string | null
    userLink?: StringNullableWithAggregatesFilter | string | null
    job?: StringNullableWithAggregatesFilter | string | null
    education?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EventTypeWhereInput = {
    AND?: Enumerable<EventTypeWhereInput>
    OR?: Enumerable<EventTypeWhereInput>
    NOT?: Enumerable<EventTypeWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    userId?: IntFilter | number
    description?: StringFilter | string
    price?: IntFilter | number
    timeDuration?: IntFilter | number
    availabilityScheduleId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    eventTypeOnLocations?: EventTypeOnLocationListRelationFilter
    availabilitySchedule?: XOR<AvailabilityScheduleRelationFilter, AvailabilityScheduleWhereInput> | null
    daySlots?: EventTypeOnDaySlotListRelationFilter
    groupMeetings?: GroupMeetingListRelationFilter
  }

  export type EventTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    timeDuration?: SortOrder
    availabilityScheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    eventTypeOnLocations?: EventTypeOnLocationOrderByRelationAggregateInput
    availabilitySchedule?: AvailabilityScheduleOrderByWithRelationInput
    daySlots?: EventTypeOnDaySlotOrderByRelationAggregateInput
    groupMeetings?: GroupMeetingOrderByRelationAggregateInput
  }

  export type EventTypeWhereUniqueInput = {
    id?: number
  }

  export type EventTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    timeDuration?: SortOrder
    availabilityScheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventTypeCountOrderByAggregateInput
    _avg?: EventTypeAvgOrderByAggregateInput
    _max?: EventTypeMaxOrderByAggregateInput
    _min?: EventTypeMinOrderByAggregateInput
    _sum?: EventTypeSumOrderByAggregateInput
  }

  export type EventTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EventTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<EventTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EventTypeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    description?: StringWithAggregatesFilter | string
    price?: IntWithAggregatesFilter | number
    timeDuration?: IntWithAggregatesFilter | number
    availabilityScheduleId?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DaySlotWhereInput = {
    AND?: Enumerable<DaySlotWhereInput>
    OR?: Enumerable<DaySlotWhereInput>
    NOT?: Enumerable<DaySlotWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    eventTypeSlots?: EventTypeOnDaySlotListRelationFilter
    dateSlots?: DaySlotOnDateSlotListRelationFilter
  }

  export type DaySlotOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventTypeSlots?: EventTypeOnDaySlotOrderByRelationAggregateInput
    dateSlots?: DaySlotOnDateSlotOrderByRelationAggregateInput
  }

  export type DaySlotWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type DaySlotOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DaySlotCountOrderByAggregateInput
    _avg?: DaySlotAvgOrderByAggregateInput
    _max?: DaySlotMaxOrderByAggregateInput
    _min?: DaySlotMinOrderByAggregateInput
    _sum?: DaySlotSumOrderByAggregateInput
  }

  export type DaySlotScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DaySlotScalarWhereWithAggregatesInput>
    OR?: Enumerable<DaySlotScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DaySlotScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DaySlotOnDateSlotWhereInput = {
    AND?: Enumerable<DaySlotOnDateSlotWhereInput>
    OR?: Enumerable<DaySlotOnDateSlotWhereInput>
    NOT?: Enumerable<DaySlotOnDateSlotWhereInput>
    id?: IntFilter | number
    daySlotId?: IntFilter | number
    dateSlotId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    daySlot?: XOR<DaySlotRelationFilter, DaySlotWhereInput>
    dateSlot?: XOR<DateSlotRelationFilter, DateSlotWhereInput>
  }

  export type DaySlotOnDateSlotOrderByWithRelationInput = {
    id?: SortOrder
    daySlotId?: SortOrder
    dateSlotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    daySlot?: DaySlotOrderByWithRelationInput
    dateSlot?: DateSlotOrderByWithRelationInput
  }

  export type DaySlotOnDateSlotWhereUniqueInput = {
    id?: number
  }

  export type DaySlotOnDateSlotOrderByWithAggregationInput = {
    id?: SortOrder
    daySlotId?: SortOrder
    dateSlotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DaySlotOnDateSlotCountOrderByAggregateInput
    _avg?: DaySlotOnDateSlotAvgOrderByAggregateInput
    _max?: DaySlotOnDateSlotMaxOrderByAggregateInput
    _min?: DaySlotOnDateSlotMinOrderByAggregateInput
    _sum?: DaySlotOnDateSlotSumOrderByAggregateInput
  }

  export type DaySlotOnDateSlotScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DaySlotOnDateSlotScalarWhereWithAggregatesInput>
    OR?: Enumerable<DaySlotOnDateSlotScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DaySlotOnDateSlotScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    daySlotId?: IntWithAggregatesFilter | number
    dateSlotId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EventTypeOnDaySlotWhereInput = {
    AND?: Enumerable<EventTypeOnDaySlotWhereInput>
    OR?: Enumerable<EventTypeOnDaySlotWhereInput>
    NOT?: Enumerable<EventTypeOnDaySlotWhereInput>
    id?: IntFilter | number
    eventTypeId?: IntFilter | number
    daySlotId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    eventType?: XOR<EventTypeRelationFilter, EventTypeWhereInput>
    daySlot?: XOR<DaySlotRelationFilter, DaySlotWhereInput>
  }

  export type EventTypeOnDaySlotOrderByWithRelationInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    daySlotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventType?: EventTypeOrderByWithRelationInput
    daySlot?: DaySlotOrderByWithRelationInput
  }

  export type EventTypeOnDaySlotWhereUniqueInput = {
    id?: number
  }

  export type EventTypeOnDaySlotOrderByWithAggregationInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    daySlotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventTypeOnDaySlotCountOrderByAggregateInput
    _avg?: EventTypeOnDaySlotAvgOrderByAggregateInput
    _max?: EventTypeOnDaySlotMaxOrderByAggregateInput
    _min?: EventTypeOnDaySlotMinOrderByAggregateInput
    _sum?: EventTypeOnDaySlotSumOrderByAggregateInput
  }

  export type EventTypeOnDaySlotScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EventTypeOnDaySlotScalarWhereWithAggregatesInput>
    OR?: Enumerable<EventTypeOnDaySlotScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EventTypeOnDaySlotScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    eventTypeId?: IntWithAggregatesFilter | number
    daySlotId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type LocationWhereInput = {
    AND?: Enumerable<LocationWhereInput>
    OR?: Enumerable<LocationWhereInput>
    NOT?: Enumerable<LocationWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    eventTypeOnLocations?: EventTypeOnLocationListRelationFilter
    groupMeetings?: GroupMeetingListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventTypeOnLocations?: EventTypeOnLocationOrderByRelationAggregateInput
    groupMeetings?: GroupMeetingOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LocationScalarWhereWithAggregatesInput>
    OR?: Enumerable<LocationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LocationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EventTypeOnLocationWhereInput = {
    AND?: Enumerable<EventTypeOnLocationWhereInput>
    OR?: Enumerable<EventTypeOnLocationWhereInput>
    NOT?: Enumerable<EventTypeOnLocationWhereInput>
    id?: IntFilter | number
    eventTypeId?: IntFilter | number
    locationId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    eventType?: XOR<EventTypeRelationFilter, EventTypeWhereInput>
    location?: XOR<LocationRelationFilter, LocationWhereInput>
  }

  export type EventTypeOnLocationOrderByWithRelationInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventType?: EventTypeOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
  }

  export type EventTypeOnLocationWhereUniqueInput = {
    id?: number
  }

  export type EventTypeOnLocationOrderByWithAggregationInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventTypeOnLocationCountOrderByAggregateInput
    _avg?: EventTypeOnLocationAvgOrderByAggregateInput
    _max?: EventTypeOnLocationMaxOrderByAggregateInput
    _min?: EventTypeOnLocationMinOrderByAggregateInput
    _sum?: EventTypeOnLocationSumOrderByAggregateInput
  }

  export type EventTypeOnLocationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EventTypeOnLocationScalarWhereWithAggregatesInput>
    OR?: Enumerable<EventTypeOnLocationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EventTypeOnLocationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    eventTypeId?: IntWithAggregatesFilter | number
    locationId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AvailabilityScheduleWhereInput = {
    AND?: Enumerable<AvailabilityScheduleWhereInput>
    OR?: Enumerable<AvailabilityScheduleWhereInput>
    NOT?: Enumerable<AvailabilityScheduleWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    timezone?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    eventTypes?: EventTypeListRelationFilter
    dateSlots?: DateSlotListRelationFilter
  }

  export type AvailabilityScheduleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventTypes?: EventTypeOrderByRelationAggregateInput
    dateSlots?: DateSlotOrderByRelationAggregateInput
  }

  export type AvailabilityScheduleWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type AvailabilityScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvailabilityScheduleCountOrderByAggregateInput
    _avg?: AvailabilityScheduleAvgOrderByAggregateInput
    _max?: AvailabilityScheduleMaxOrderByAggregateInput
    _min?: AvailabilityScheduleMinOrderByAggregateInput
    _sum?: AvailabilityScheduleSumOrderByAggregateInput
  }

  export type AvailabilityScheduleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AvailabilityScheduleScalarWhereWithAggregatesInput>
    OR?: Enumerable<AvailabilityScheduleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AvailabilityScheduleScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    timezone?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DateSlotWhereInput = {
    AND?: Enumerable<DateSlotWhereInput>
    OR?: Enumerable<DateSlotWhereInput>
    NOT?: Enumerable<DateSlotWhereInput>
    id?: IntFilter | number
    availabilityScheduleId?: IntNullableFilter | number | null
    status?: StringFilter | string
    date?: DateTimeFilter | Date | string
    custormerId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    availabilitySchedule?: XOR<AvailabilityScheduleRelationFilter, AvailabilityScheduleWhereInput> | null
    custormer?: XOR<CustomerRelationFilter, CustomerWhereInput> | null
    timeSelects?: DateSlotOnTimeSelectListRelationFilter
    DaySlots?: DaySlotOnDateSlotListRelationFilter
  }

  export type DateSlotOrderByWithRelationInput = {
    id?: SortOrder
    availabilityScheduleId?: SortOrder
    status?: SortOrder
    date?: SortOrder
    custormerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    availabilitySchedule?: AvailabilityScheduleOrderByWithRelationInput
    custormer?: CustomerOrderByWithRelationInput
    timeSelects?: DateSlotOnTimeSelectOrderByRelationAggregateInput
    DaySlots?: DaySlotOnDateSlotOrderByRelationAggregateInput
  }

  export type DateSlotWhereUniqueInput = {
    id?: number
  }

  export type DateSlotOrderByWithAggregationInput = {
    id?: SortOrder
    availabilityScheduleId?: SortOrder
    status?: SortOrder
    date?: SortOrder
    custormerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DateSlotCountOrderByAggregateInput
    _avg?: DateSlotAvgOrderByAggregateInput
    _max?: DateSlotMaxOrderByAggregateInput
    _min?: DateSlotMinOrderByAggregateInput
    _sum?: DateSlotSumOrderByAggregateInput
  }

  export type DateSlotScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DateSlotScalarWhereWithAggregatesInput>
    OR?: Enumerable<DateSlotScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DateSlotScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    availabilityScheduleId?: IntNullableWithAggregatesFilter | number | null
    status?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    custormerId?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TimeSelectWhereInput = {
    AND?: Enumerable<TimeSelectWhereInput>
    OR?: Enumerable<TimeSelectWhereInput>
    NOT?: Enumerable<TimeSelectWhereInput>
    id?: IntFilter | number
    startTime?: IntFilter | number
    endTime?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    dateSlots?: DateSlotOnTimeSelectListRelationFilter
  }

  export type TimeSelectOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dateSlots?: DateSlotOnTimeSelectOrderByRelationAggregateInput
  }

  export type TimeSelectWhereUniqueInput = {
    id?: number
  }

  export type TimeSelectOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TimeSelectCountOrderByAggregateInput
    _avg?: TimeSelectAvgOrderByAggregateInput
    _max?: TimeSelectMaxOrderByAggregateInput
    _min?: TimeSelectMinOrderByAggregateInput
    _sum?: TimeSelectSumOrderByAggregateInput
  }

  export type TimeSelectScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TimeSelectScalarWhereWithAggregatesInput>
    OR?: Enumerable<TimeSelectScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TimeSelectScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    startTime?: IntWithAggregatesFilter | number
    endTime?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CustomerWhereInput = {
    AND?: Enumerable<CustomerWhereInput>
    OR?: Enumerable<CustomerWhereInput>
    NOT?: Enumerable<CustomerWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    groupMeetings?: GroupMeetingListRelationFilter
    dateSlots?: DateSlotListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupMeetings?: GroupMeetingOrderByRelationAggregateInput
    dateSlots?: DateSlotOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BillingWhereInput = {
    AND?: Enumerable<BillingWhereInput>
    OR?: Enumerable<BillingWhereInput>
    NOT?: Enumerable<BillingWhereInput>
    id?: IntFilter | number
    subscriptionMonth?: IntFilter | number
    subscriptionPrice?: IntFilter | number
    userId?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BillingOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionMonth?: SortOrder
    subscriptionPrice?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BillingWhereUniqueInput = {
    id?: number
  }

  export type BillingOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionMonth?: SortOrder
    subscriptionPrice?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillingCountOrderByAggregateInput
    _avg?: BillingAvgOrderByAggregateInput
    _max?: BillingMaxOrderByAggregateInput
    _min?: BillingMinOrderByAggregateInput
    _sum?: BillingSumOrderByAggregateInput
  }

  export type BillingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BillingScalarWhereWithAggregatesInput>
    OR?: Enumerable<BillingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BillingScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    subscriptionMonth?: IntWithAggregatesFilter | number
    subscriptionPrice?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GroupMeetingWhereInput = {
    AND?: Enumerable<GroupMeetingWhereInput>
    OR?: Enumerable<GroupMeetingWhereInput>
    NOT?: Enumerable<GroupMeetingWhereInput>
    id?: IntFilter | number
    locationId?: IntFilter | number
    customerId?: IntFilter | number
    totalPrice?: IntFilter | number
    timezone?: StringFilter | string
    eventTypeId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    eventType?: XOR<EventTypeRelationFilter, EventTypeWhereInput>
    userOnGroupMeetings?: UserOnGroupMeetingListRelationFilter
  }

  export type GroupMeetingOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    timezone?: SortOrder
    eventTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: LocationOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    eventType?: EventTypeOrderByWithRelationInput
    userOnGroupMeetings?: UserOnGroupMeetingOrderByRelationAggregateInput
  }

  export type GroupMeetingWhereUniqueInput = {
    id?: number
  }

  export type GroupMeetingOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    timezone?: SortOrder
    eventTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupMeetingCountOrderByAggregateInput
    _avg?: GroupMeetingAvgOrderByAggregateInput
    _max?: GroupMeetingMaxOrderByAggregateInput
    _min?: GroupMeetingMinOrderByAggregateInput
    _sum?: GroupMeetingSumOrderByAggregateInput
  }

  export type GroupMeetingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GroupMeetingScalarWhereWithAggregatesInput>
    OR?: Enumerable<GroupMeetingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GroupMeetingScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    locationId?: IntWithAggregatesFilter | number
    customerId?: IntWithAggregatesFilter | number
    totalPrice?: IntWithAggregatesFilter | number
    timezone?: StringWithAggregatesFilter | string
    eventTypeId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserOnGroupMeetingWhereInput = {
    AND?: Enumerable<UserOnGroupMeetingWhereInput>
    OR?: Enumerable<UserOnGroupMeetingWhereInput>
    NOT?: Enumerable<UserOnGroupMeetingWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    groupMeetingId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    groupMeeting?: XOR<GroupMeetingRelationFilter, GroupMeetingWhereInput>
  }

  export type UserOnGroupMeetingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupMeetingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    groupMeeting?: GroupMeetingOrderByWithRelationInput
  }

  export type UserOnGroupMeetingWhereUniqueInput = {
    id?: number
  }

  export type UserOnGroupMeetingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupMeetingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserOnGroupMeetingCountOrderByAggregateInput
    _avg?: UserOnGroupMeetingAvgOrderByAggregateInput
    _max?: UserOnGroupMeetingMaxOrderByAggregateInput
    _min?: UserOnGroupMeetingMinOrderByAggregateInput
    _sum?: UserOnGroupMeetingSumOrderByAggregateInput
  }

  export type UserOnGroupMeetingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserOnGroupMeetingScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserOnGroupMeetingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserOnGroupMeetingScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    groupMeetingId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DateSlotOnTimeSelectWhereInput = {
    AND?: Enumerable<DateSlotOnTimeSelectWhereInput>
    OR?: Enumerable<DateSlotOnTimeSelectWhereInput>
    NOT?: Enumerable<DateSlotOnTimeSelectWhereInput>
    id?: IntFilter | number
    dateSlotId?: IntFilter | number
    timeSelectId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    dateSlot?: XOR<DateSlotRelationFilter, DateSlotWhereInput>
    timeSelect?: XOR<TimeSelectRelationFilter, TimeSelectWhereInput>
  }

  export type DateSlotOnTimeSelectOrderByWithRelationInput = {
    id?: SortOrder
    dateSlotId?: SortOrder
    timeSelectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dateSlot?: DateSlotOrderByWithRelationInput
    timeSelect?: TimeSelectOrderByWithRelationInput
  }

  export type DateSlotOnTimeSelectWhereUniqueInput = {
    id?: number
  }

  export type DateSlotOnTimeSelectOrderByWithAggregationInput = {
    id?: SortOrder
    dateSlotId?: SortOrder
    timeSelectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DateSlotOnTimeSelectCountOrderByAggregateInput
    _avg?: DateSlotOnTimeSelectAvgOrderByAggregateInput
    _max?: DateSlotOnTimeSelectMaxOrderByAggregateInput
    _min?: DateSlotOnTimeSelectMinOrderByAggregateInput
    _sum?: DateSlotOnTimeSelectSumOrderByAggregateInput
  }

  export type DateSlotOnTimeSelectScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DateSlotOnTimeSelectScalarWhereWithAggregatesInput>
    OR?: Enumerable<DateSlotOnTimeSelectScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DateSlotOnTimeSelectScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    dateSlotId?: IntWithAggregatesFilter | number
    timeSelectId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutUserInput
    billings?: BillingCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutUserInput
    billings?: BillingUncheckedCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutUserNestedInput
    billings?: BillingUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutUserNestedInput
    billings?: BillingUncheckedUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeCreateInput = {
    name: string
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventTypesInput
    eventTypeOnLocations?: EventTypeOnLocationCreateNestedManyWithoutEventTypeInput
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutEventTypesInput
    daySlots?: EventTypeOnDaySlotCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateInput = {
    id?: number
    name: string
    userId: number
    description: string
    price: number
    timeDuration: number
    availabilityScheduleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedCreateNestedManyWithoutEventTypeInput
    daySlots?: EventTypeOnDaySlotUncheckedCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventTypesNestedInput
    eventTypeOnLocations?: EventTypeOnLocationUpdateManyWithoutEventTypeNestedInput
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutEventTypesNestedInput
    daySlots?: EventTypeOnDaySlotUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeNestedInput
    daySlots?: EventTypeOnDaySlotUncheckedUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeCreateManyInput = {
    id?: number
    name: string
    userId: number
    description: string
    price: number
    timeDuration: number
    availabilityScheduleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DaySlotCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeSlots?: EventTypeOnDaySlotCreateNestedManyWithoutDaySlotInput
    dateSlots?: DaySlotOnDateSlotCreateNestedManyWithoutDaySlotInput
  }

  export type DaySlotUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeSlots?: EventTypeOnDaySlotUncheckedCreateNestedManyWithoutDaySlotInput
    dateSlots?: DaySlotOnDateSlotUncheckedCreateNestedManyWithoutDaySlotInput
  }

  export type DaySlotUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeSlots?: EventTypeOnDaySlotUpdateManyWithoutDaySlotNestedInput
    dateSlots?: DaySlotOnDateSlotUpdateManyWithoutDaySlotNestedInput
  }

  export type DaySlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeSlots?: EventTypeOnDaySlotUncheckedUpdateManyWithoutDaySlotNestedInput
    dateSlots?: DaySlotOnDateSlotUncheckedUpdateManyWithoutDaySlotNestedInput
  }

  export type DaySlotCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DaySlotUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DaySlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DaySlotOnDateSlotCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    daySlot: DaySlotCreateNestedOneWithoutDateSlotsInput
    dateSlot: DateSlotCreateNestedOneWithoutDaySlotsInput
  }

  export type DaySlotOnDateSlotUncheckedCreateInput = {
    id?: number
    daySlotId: number
    dateSlotId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DaySlotOnDateSlotUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daySlot?: DaySlotUpdateOneRequiredWithoutDateSlotsNestedInput
    dateSlot?: DateSlotUpdateOneRequiredWithoutDaySlotsNestedInput
  }

  export type DaySlotOnDateSlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    daySlotId?: IntFieldUpdateOperationsInput | number
    dateSlotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DaySlotOnDateSlotCreateManyInput = {
    id?: number
    daySlotId: number
    dateSlotId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DaySlotOnDateSlotUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DaySlotOnDateSlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    daySlotId?: IntFieldUpdateOperationsInput | number
    dateSlotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnDaySlotCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    eventType: EventTypeCreateNestedOneWithoutDaySlotsInput
    daySlot: DaySlotCreateNestedOneWithoutEventTypeSlotsInput
  }

  export type EventTypeOnDaySlotUncheckedCreateInput = {
    id?: number
    eventTypeId: number
    daySlotId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeOnDaySlotUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EventTypeUpdateOneRequiredWithoutDaySlotsNestedInput
    daySlot?: DaySlotUpdateOneRequiredWithoutEventTypeSlotsNestedInput
  }

  export type EventTypeOnDaySlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    daySlotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnDaySlotCreateManyInput = {
    id?: number
    eventTypeId: number
    daySlotId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeOnDaySlotUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnDaySlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    daySlotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationCreateNestedManyWithoutLocationInput
    groupMeetings?: GroupMeetingCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedCreateNestedManyWithoutLocationInput
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUpdateManyWithoutLocationNestedInput
    groupMeetings?: GroupMeetingUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedUpdateManyWithoutLocationNestedInput
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnLocationCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    eventType: EventTypeCreateNestedOneWithoutEventTypeOnLocationsInput
    location: LocationCreateNestedOneWithoutEventTypeOnLocationsInput
  }

  export type EventTypeOnLocationUncheckedCreateInput = {
    id?: number
    eventTypeId: number
    locationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeOnLocationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EventTypeUpdateOneRequiredWithoutEventTypeOnLocationsNestedInput
    location?: LocationUpdateOneRequiredWithoutEventTypeOnLocationsNestedInput
  }

  export type EventTypeOnLocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnLocationCreateManyInput = {
    id?: number
    eventTypeId: number
    locationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeOnLocationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnLocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityScheduleCreateInput = {
    name: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutAvailabilityScheduleInput
    dateSlots?: DateSlotCreateNestedManyWithoutAvailabilityScheduleInput
  }

  export type AvailabilityScheduleUncheckedCreateInput = {
    id?: number
    name: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutAvailabilityScheduleInput
    dateSlots?: DateSlotUncheckedCreateNestedManyWithoutAvailabilityScheduleInput
  }

  export type AvailabilityScheduleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutAvailabilityScheduleNestedInput
    dateSlots?: DateSlotUpdateManyWithoutAvailabilityScheduleNestedInput
  }

  export type AvailabilityScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutAvailabilityScheduleNestedInput
    dateSlots?: DateSlotUncheckedUpdateManyWithoutAvailabilityScheduleNestedInput
  }

  export type AvailabilityScheduleCreateManyInput = {
    id?: number
    name: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityScheduleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateSlotCreateInput = {
    status?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutDateSlotsInput
    custormer?: CustomerCreateNestedOneWithoutDateSlotsInput
    timeSelects?: DateSlotOnTimeSelectCreateNestedManyWithoutDateSlotInput
    DaySlots?: DaySlotOnDateSlotCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotUncheckedCreateInput = {
    id?: number
    availabilityScheduleId?: number | null
    status?: string
    date: Date | string
    custormerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeSelects?: DateSlotOnTimeSelectUncheckedCreateNestedManyWithoutDateSlotInput
    DaySlots?: DaySlotOnDateSlotUncheckedCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutDateSlotsNestedInput
    custormer?: CustomerUpdateOneWithoutDateSlotsNestedInput
    timeSelects?: DateSlotOnTimeSelectUpdateManyWithoutDateSlotNestedInput
    DaySlots?: DaySlotOnDateSlotUpdateManyWithoutDateSlotNestedInput
  }

  export type DateSlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    custormerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSelects?: DateSlotOnTimeSelectUncheckedUpdateManyWithoutDateSlotNestedInput
    DaySlots?: DaySlotOnDateSlotUncheckedUpdateManyWithoutDateSlotNestedInput
  }

  export type DateSlotCreateManyInput = {
    id?: number
    availabilityScheduleId?: number | null
    status?: string
    date: Date | string
    custormerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DateSlotUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateSlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    custormerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeSelectCreateInput = {
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlots?: DateSlotOnTimeSelectCreateNestedManyWithoutTimeSelectInput
  }

  export type TimeSelectUncheckedCreateInput = {
    id?: number
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlots?: DateSlotOnTimeSelectUncheckedCreateNestedManyWithoutTimeSelectInput
  }

  export type TimeSelectUpdateInput = {
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlots?: DateSlotOnTimeSelectUpdateManyWithoutTimeSelectNestedInput
  }

  export type TimeSelectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlots?: DateSlotOnTimeSelectUncheckedUpdateManyWithoutTimeSelectNestedInput
  }

  export type TimeSelectCreateManyInput = {
    id?: number
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeSelectUpdateManyMutationInput = {
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeSelectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMeetings?: GroupMeetingCreateNestedManyWithoutCustomerInput
    dateSlots?: DateSlotCreateNestedManyWithoutCustormerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutCustomerInput
    dateSlots?: DateSlotUncheckedCreateNestedManyWithoutCustormerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMeetings?: GroupMeetingUpdateManyWithoutCustomerNestedInput
    dateSlots?: DateSlotUpdateManyWithoutCustormerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutCustomerNestedInput
    dateSlots?: DateSlotUncheckedUpdateManyWithoutCustormerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingCreateInput = {
    subscriptionMonth: number
    subscriptionPrice: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBillingsInput
  }

  export type BillingUncheckedCreateInput = {
    id?: number
    subscriptionMonth: number
    subscriptionPrice: number
    userId: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingUpdateInput = {
    subscriptionMonth?: IntFieldUpdateOperationsInput | number
    subscriptionPrice?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBillingsNestedInput
  }

  export type BillingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionMonth?: IntFieldUpdateOperationsInput | number
    subscriptionPrice?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingCreateManyInput = {
    id?: number
    subscriptionMonth: number
    subscriptionPrice: number
    userId: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingUpdateManyMutationInput = {
    subscriptionMonth?: IntFieldUpdateOperationsInput | number
    subscriptionPrice?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionMonth?: IntFieldUpdateOperationsInput | number
    subscriptionPrice?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMeetingCreateInput = {
    totalPrice: number
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutGroupMeetingsInput
    customer: CustomerCreateNestedOneWithoutGroupMeetingsInput
    eventType: EventTypeCreateNestedOneWithoutGroupMeetingsInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingUncheckedCreateInput = {
    id?: number
    locationId: number
    customerId: number
    totalPrice: number
    timezone: string
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingUpdateInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutGroupMeetingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutGroupMeetingsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutGroupMeetingsNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutGroupMeetingNestedInput
  }

  export type GroupMeetingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    eventTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutGroupMeetingNestedInput
  }

  export type GroupMeetingCreateManyInput = {
    id?: number
    locationId: number
    customerId: number
    totalPrice: number
    timezone: string
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMeetingUpdateManyMutationInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMeetingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    eventTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnGroupMeetingCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserOnGroupMeetingsInput
    groupMeeting: GroupMeetingCreateNestedOneWithoutUserOnGroupMeetingsInput
  }

  export type UserOnGroupMeetingUncheckedCreateInput = {
    id?: number
    userId: number
    groupMeetingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnGroupMeetingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserOnGroupMeetingsNestedInput
    groupMeeting?: GroupMeetingUpdateOneRequiredWithoutUserOnGroupMeetingsNestedInput
  }

  export type UserOnGroupMeetingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupMeetingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnGroupMeetingCreateManyInput = {
    id?: number
    userId: number
    groupMeetingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnGroupMeetingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnGroupMeetingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupMeetingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateSlotOnTimeSelectCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlot: DateSlotCreateNestedOneWithoutTimeSelectsInput
    timeSelect: TimeSelectCreateNestedOneWithoutDateSlotsInput
  }

  export type DateSlotOnTimeSelectUncheckedCreateInput = {
    id?: number
    dateSlotId: number
    timeSelectId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DateSlotOnTimeSelectUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlot?: DateSlotUpdateOneRequiredWithoutTimeSelectsNestedInput
    timeSelect?: TimeSelectUpdateOneRequiredWithoutDateSlotsNestedInput
  }

  export type DateSlotOnTimeSelectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateSlotId?: IntFieldUpdateOperationsInput | number
    timeSelectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateSlotOnTimeSelectCreateManyInput = {
    id?: number
    dateSlotId: number
    timeSelectId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DateSlotOnTimeSelectUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateSlotOnTimeSelectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateSlotId?: IntFieldUpdateOperationsInput | number
    timeSelectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    mode?: QueryMode
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
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
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

  export type EventTypeListRelationFilter = {
    every?: EventTypeWhereInput
    some?: EventTypeWhereInput
    none?: EventTypeWhereInput
  }

  export type BillingListRelationFilter = {
    every?: BillingWhereInput
    some?: BillingWhereInput
    none?: BillingWhereInput
  }

  export type UserOnGroupMeetingListRelationFilter = {
    every?: UserOnGroupMeetingWhereInput
    some?: UserOnGroupMeetingWhereInput
    none?: UserOnGroupMeetingWhereInput
  }

  export type EventTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOnGroupMeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    firebaseUid?: SortOrder
    subscription?: SortOrder
    mobileNumber?: SortOrder
    userLink?: SortOrder
    job?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    firebaseUid?: SortOrder
    subscription?: SortOrder
    mobileNumber?: SortOrder
    userLink?: SortOrder
    job?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    firebaseUid?: SortOrder
    subscription?: SortOrder
    mobileNumber?: SortOrder
    userLink?: SortOrder
    job?: SortOrder
    education?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    mode?: QueryMode
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
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EventTypeOnLocationListRelationFilter = {
    every?: EventTypeOnLocationWhereInput
    some?: EventTypeOnLocationWhereInput
    none?: EventTypeOnLocationWhereInput
  }

  export type AvailabilityScheduleRelationFilter = {
    is?: AvailabilityScheduleWhereInput | null
    isNot?: AvailabilityScheduleWhereInput | null
  }

  export type EventTypeOnDaySlotListRelationFilter = {
    every?: EventTypeOnDaySlotWhereInput
    some?: EventTypeOnDaySlotWhereInput
    none?: EventTypeOnDaySlotWhereInput
  }

  export type GroupMeetingListRelationFilter = {
    every?: GroupMeetingWhereInput
    some?: GroupMeetingWhereInput
    none?: GroupMeetingWhereInput
  }

  export type EventTypeOnLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventTypeOnDaySlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    timeDuration?: SortOrder
    availabilityScheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    timeDuration?: SortOrder
    availabilityScheduleId?: SortOrder
  }

  export type EventTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    timeDuration?: SortOrder
    availabilityScheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    timeDuration?: SortOrder
    availabilityScheduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    timeDuration?: SortOrder
    availabilityScheduleId?: SortOrder
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

  export type DaySlotOnDateSlotListRelationFilter = {
    every?: DaySlotOnDateSlotWhereInput
    some?: DaySlotOnDateSlotWhereInput
    none?: DaySlotOnDateSlotWhereInput
  }

  export type DaySlotOnDateSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DaySlotCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DaySlotAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DaySlotMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DaySlotMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DaySlotSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DaySlotRelationFilter = {
    is?: DaySlotWhereInput
    isNot?: DaySlotWhereInput
  }

  export type DateSlotRelationFilter = {
    is?: DateSlotWhereInput
    isNot?: DateSlotWhereInput
  }

  export type DaySlotOnDateSlotCountOrderByAggregateInput = {
    id?: SortOrder
    daySlotId?: SortOrder
    dateSlotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DaySlotOnDateSlotAvgOrderByAggregateInput = {
    id?: SortOrder
    daySlotId?: SortOrder
    dateSlotId?: SortOrder
  }

  export type DaySlotOnDateSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    daySlotId?: SortOrder
    dateSlotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DaySlotOnDateSlotMinOrderByAggregateInput = {
    id?: SortOrder
    daySlotId?: SortOrder
    dateSlotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DaySlotOnDateSlotSumOrderByAggregateInput = {
    id?: SortOrder
    daySlotId?: SortOrder
    dateSlotId?: SortOrder
  }

  export type EventTypeRelationFilter = {
    is?: EventTypeWhereInput
    isNot?: EventTypeWhereInput
  }

  export type EventTypeOnDaySlotCountOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    daySlotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeOnDaySlotAvgOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    daySlotId?: SortOrder
  }

  export type EventTypeOnDaySlotMaxOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    daySlotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeOnDaySlotMinOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    daySlotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeOnDaySlotSumOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    daySlotId?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type EventTypeOnLocationCountOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeOnLocationAvgOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    locationId?: SortOrder
  }

  export type EventTypeOnLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeOnLocationMinOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeOnLocationSumOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    locationId?: SortOrder
  }

  export type DateSlotListRelationFilter = {
    every?: DateSlotWhereInput
    some?: DateSlotWhereInput
    none?: DateSlotWhereInput
  }

  export type DateSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilityScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AvailabilityScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityScheduleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type DateSlotOnTimeSelectListRelationFilter = {
    every?: DateSlotOnTimeSelectWhereInput
    some?: DateSlotOnTimeSelectWhereInput
    none?: DateSlotOnTimeSelectWhereInput
  }

  export type DateSlotOnTimeSelectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DateSlotCountOrderByAggregateInput = {
    id?: SortOrder
    availabilityScheduleId?: SortOrder
    status?: SortOrder
    date?: SortOrder
    custormerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateSlotAvgOrderByAggregateInput = {
    id?: SortOrder
    availabilityScheduleId?: SortOrder
    custormerId?: SortOrder
  }

  export type DateSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    availabilityScheduleId?: SortOrder
    status?: SortOrder
    date?: SortOrder
    custormerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateSlotMinOrderByAggregateInput = {
    id?: SortOrder
    availabilityScheduleId?: SortOrder
    status?: SortOrder
    date?: SortOrder
    custormerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateSlotSumOrderByAggregateInput = {
    id?: SortOrder
    availabilityScheduleId?: SortOrder
    custormerId?: SortOrder
  }

  export type TimeSelectCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimeSelectAvgOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type TimeSelectMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimeSelectMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimeSelectSumOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BillingCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionMonth?: SortOrder
    subscriptionPrice?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillingAvgOrderByAggregateInput = {
    id?: SortOrder
    subscriptionMonth?: SortOrder
    subscriptionPrice?: SortOrder
    userId?: SortOrder
  }

  export type BillingMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionMonth?: SortOrder
    subscriptionPrice?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillingMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionMonth?: SortOrder
    subscriptionPrice?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillingSumOrderByAggregateInput = {
    id?: SortOrder
    subscriptionMonth?: SortOrder
    subscriptionPrice?: SortOrder
    userId?: SortOrder
  }

  export type GroupMeetingCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    timezone?: SortOrder
    eventTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMeetingAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    eventTypeId?: SortOrder
  }

  export type GroupMeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    timezone?: SortOrder
    eventTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMeetingMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    timezone?: SortOrder
    eventTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMeetingSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    eventTypeId?: SortOrder
  }

  export type GroupMeetingRelationFilter = {
    is?: GroupMeetingWhereInput
    isNot?: GroupMeetingWhereInput
  }

  export type UserOnGroupMeetingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupMeetingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserOnGroupMeetingAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupMeetingId?: SortOrder
  }

  export type UserOnGroupMeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupMeetingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserOnGroupMeetingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupMeetingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserOnGroupMeetingSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupMeetingId?: SortOrder
  }

  export type TimeSelectRelationFilter = {
    is?: TimeSelectWhereInput
    isNot?: TimeSelectWhereInput
  }

  export type DateSlotOnTimeSelectCountOrderByAggregateInput = {
    id?: SortOrder
    dateSlotId?: SortOrder
    timeSelectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateSlotOnTimeSelectAvgOrderByAggregateInput = {
    id?: SortOrder
    dateSlotId?: SortOrder
    timeSelectId?: SortOrder
  }

  export type DateSlotOnTimeSelectMaxOrderByAggregateInput = {
    id?: SortOrder
    dateSlotId?: SortOrder
    timeSelectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateSlotOnTimeSelectMinOrderByAggregateInput = {
    id?: SortOrder
    dateSlotId?: SortOrder
    timeSelectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateSlotOnTimeSelectSumOrderByAggregateInput = {
    id?: SortOrder
    dateSlotId?: SortOrder
    timeSelectId?: SortOrder
  }

  export type EventTypeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutUserInput>, Enumerable<EventTypeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutUserInput>
    createMany?: EventTypeCreateManyUserInputEnvelope
    connect?: Enumerable<EventTypeWhereUniqueInput>
  }

  export type BillingCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BillingCreateWithoutUserInput>, Enumerable<BillingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BillingCreateOrConnectWithoutUserInput>
    createMany?: BillingCreateManyUserInputEnvelope
    connect?: Enumerable<BillingWhereUniqueInput>
  }

  export type UserOnGroupMeetingCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutUserInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutUserInput>
    createMany?: UserOnGroupMeetingCreateManyUserInputEnvelope
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
  }

  export type EventTypeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutUserInput>, Enumerable<EventTypeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutUserInput>
    createMany?: EventTypeCreateManyUserInputEnvelope
    connect?: Enumerable<EventTypeWhereUniqueInput>
  }

  export type BillingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BillingCreateWithoutUserInput>, Enumerable<BillingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BillingCreateOrConnectWithoutUserInput>
    createMany?: BillingCreateManyUserInputEnvelope
    connect?: Enumerable<BillingWhereUniqueInput>
  }

  export type UserOnGroupMeetingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutUserInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutUserInput>
    createMany?: UserOnGroupMeetingCreateManyUserInputEnvelope
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventTypeUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutUserInput>, Enumerable<EventTypeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EventTypeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EventTypeCreateManyUserInputEnvelope
    set?: Enumerable<EventTypeWhereUniqueInput>
    disconnect?: Enumerable<EventTypeWhereUniqueInput>
    delete?: Enumerable<EventTypeWhereUniqueInput>
    connect?: Enumerable<EventTypeWhereUniqueInput>
    update?: Enumerable<EventTypeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EventTypeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EventTypeScalarWhereInput>
  }

  export type BillingUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BillingCreateWithoutUserInput>, Enumerable<BillingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BillingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BillingUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BillingCreateManyUserInputEnvelope
    set?: Enumerable<BillingWhereUniqueInput>
    disconnect?: Enumerable<BillingWhereUniqueInput>
    delete?: Enumerable<BillingWhereUniqueInput>
    connect?: Enumerable<BillingWhereUniqueInput>
    update?: Enumerable<BillingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BillingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BillingScalarWhereInput>
  }

  export type UserOnGroupMeetingUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutUserInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserOnGroupMeetingUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserOnGroupMeetingCreateManyUserInputEnvelope
    set?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    delete?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    update?: Enumerable<UserOnGroupMeetingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserOnGroupMeetingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserOnGroupMeetingScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventTypeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutUserInput>, Enumerable<EventTypeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EventTypeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EventTypeCreateManyUserInputEnvelope
    set?: Enumerable<EventTypeWhereUniqueInput>
    disconnect?: Enumerable<EventTypeWhereUniqueInput>
    delete?: Enumerable<EventTypeWhereUniqueInput>
    connect?: Enumerable<EventTypeWhereUniqueInput>
    update?: Enumerable<EventTypeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EventTypeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EventTypeScalarWhereInput>
  }

  export type BillingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BillingCreateWithoutUserInput>, Enumerable<BillingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BillingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BillingUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BillingCreateManyUserInputEnvelope
    set?: Enumerable<BillingWhereUniqueInput>
    disconnect?: Enumerable<BillingWhereUniqueInput>
    delete?: Enumerable<BillingWhereUniqueInput>
    connect?: Enumerable<BillingWhereUniqueInput>
    update?: Enumerable<BillingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BillingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BillingScalarWhereInput>
  }

  export type UserOnGroupMeetingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutUserInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserOnGroupMeetingUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserOnGroupMeetingCreateManyUserInputEnvelope
    set?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    delete?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    update?: Enumerable<UserOnGroupMeetingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserOnGroupMeetingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserOnGroupMeetingScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutEventTypesInput = {
    create?: XOR<UserCreateWithoutEventTypesInput, UserUncheckedCreateWithoutEventTypesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventTypesInput
    connect?: UserWhereUniqueInput
  }

  export type EventTypeOnLocationCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutEventTypeInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutEventTypeInput>
    createMany?: EventTypeOnLocationCreateManyEventTypeInputEnvelope
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
  }

  export type AvailabilityScheduleCreateNestedOneWithoutEventTypesInput = {
    create?: XOR<AvailabilityScheduleCreateWithoutEventTypesInput, AvailabilityScheduleUncheckedCreateWithoutEventTypesInput>
    connectOrCreate?: AvailabilityScheduleCreateOrConnectWithoutEventTypesInput
    connect?: AvailabilityScheduleWhereUniqueInput
  }

  export type EventTypeOnDaySlotCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<Enumerable<EventTypeOnDaySlotCreateWithoutEventTypeInput>, Enumerable<EventTypeOnDaySlotUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<EventTypeOnDaySlotCreateOrConnectWithoutEventTypeInput>
    createMany?: EventTypeOnDaySlotCreateManyEventTypeInputEnvelope
    connect?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
  }

  export type GroupMeetingCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutEventTypeInput>, Enumerable<GroupMeetingUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutEventTypeInput>
    createMany?: GroupMeetingCreateManyEventTypeInputEnvelope
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
  }

  export type EventTypeOnLocationUncheckedCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutEventTypeInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutEventTypeInput>
    createMany?: EventTypeOnLocationCreateManyEventTypeInputEnvelope
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
  }

  export type EventTypeOnDaySlotUncheckedCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<Enumerable<EventTypeOnDaySlotCreateWithoutEventTypeInput>, Enumerable<EventTypeOnDaySlotUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<EventTypeOnDaySlotCreateOrConnectWithoutEventTypeInput>
    createMany?: EventTypeOnDaySlotCreateManyEventTypeInputEnvelope
    connect?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
  }

  export type GroupMeetingUncheckedCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutEventTypeInput>, Enumerable<GroupMeetingUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutEventTypeInput>
    createMany?: GroupMeetingCreateManyEventTypeInputEnvelope
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutEventTypesNestedInput = {
    create?: XOR<UserCreateWithoutEventTypesInput, UserUncheckedCreateWithoutEventTypesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventTypesInput
    upsert?: UserUpsertWithoutEventTypesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutEventTypesInput, UserUncheckedUpdateWithoutEventTypesInput>
  }

  export type EventTypeOnLocationUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutEventTypeInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutEventTypeInput>
    upsert?: Enumerable<EventTypeOnLocationUpsertWithWhereUniqueWithoutEventTypeInput>
    createMany?: EventTypeOnLocationCreateManyEventTypeInputEnvelope
    set?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    disconnect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    delete?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    update?: Enumerable<EventTypeOnLocationUpdateWithWhereUniqueWithoutEventTypeInput>
    updateMany?: Enumerable<EventTypeOnLocationUpdateManyWithWhereWithoutEventTypeInput>
    deleteMany?: Enumerable<EventTypeOnLocationScalarWhereInput>
  }

  export type AvailabilityScheduleUpdateOneWithoutEventTypesNestedInput = {
    create?: XOR<AvailabilityScheduleCreateWithoutEventTypesInput, AvailabilityScheduleUncheckedCreateWithoutEventTypesInput>
    connectOrCreate?: AvailabilityScheduleCreateOrConnectWithoutEventTypesInput
    upsert?: AvailabilityScheduleUpsertWithoutEventTypesInput
    disconnect?: boolean
    delete?: boolean
    connect?: AvailabilityScheduleWhereUniqueInput
    update?: XOR<AvailabilityScheduleUpdateWithoutEventTypesInput, AvailabilityScheduleUncheckedUpdateWithoutEventTypesInput>
  }

  export type EventTypeOnDaySlotUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<Enumerable<EventTypeOnDaySlotCreateWithoutEventTypeInput>, Enumerable<EventTypeOnDaySlotUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<EventTypeOnDaySlotCreateOrConnectWithoutEventTypeInput>
    upsert?: Enumerable<EventTypeOnDaySlotUpsertWithWhereUniqueWithoutEventTypeInput>
    createMany?: EventTypeOnDaySlotCreateManyEventTypeInputEnvelope
    set?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    disconnect?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    delete?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    connect?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    update?: Enumerable<EventTypeOnDaySlotUpdateWithWhereUniqueWithoutEventTypeInput>
    updateMany?: Enumerable<EventTypeOnDaySlotUpdateManyWithWhereWithoutEventTypeInput>
    deleteMany?: Enumerable<EventTypeOnDaySlotScalarWhereInput>
  }

  export type GroupMeetingUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutEventTypeInput>, Enumerable<GroupMeetingUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutEventTypeInput>
    upsert?: Enumerable<GroupMeetingUpsertWithWhereUniqueWithoutEventTypeInput>
    createMany?: GroupMeetingCreateManyEventTypeInputEnvelope
    set?: Enumerable<GroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<GroupMeetingWhereUniqueInput>
    delete?: Enumerable<GroupMeetingWhereUniqueInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
    update?: Enumerable<GroupMeetingUpdateWithWhereUniqueWithoutEventTypeInput>
    updateMany?: Enumerable<GroupMeetingUpdateManyWithWhereWithoutEventTypeInput>
    deleteMany?: Enumerable<GroupMeetingScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutEventTypeInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutEventTypeInput>
    upsert?: Enumerable<EventTypeOnLocationUpsertWithWhereUniqueWithoutEventTypeInput>
    createMany?: EventTypeOnLocationCreateManyEventTypeInputEnvelope
    set?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    disconnect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    delete?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    update?: Enumerable<EventTypeOnLocationUpdateWithWhereUniqueWithoutEventTypeInput>
    updateMany?: Enumerable<EventTypeOnLocationUpdateManyWithWhereWithoutEventTypeInput>
    deleteMany?: Enumerable<EventTypeOnLocationScalarWhereInput>
  }

  export type EventTypeOnDaySlotUncheckedUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<Enumerable<EventTypeOnDaySlotCreateWithoutEventTypeInput>, Enumerable<EventTypeOnDaySlotUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<EventTypeOnDaySlotCreateOrConnectWithoutEventTypeInput>
    upsert?: Enumerable<EventTypeOnDaySlotUpsertWithWhereUniqueWithoutEventTypeInput>
    createMany?: EventTypeOnDaySlotCreateManyEventTypeInputEnvelope
    set?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    disconnect?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    delete?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    connect?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    update?: Enumerable<EventTypeOnDaySlotUpdateWithWhereUniqueWithoutEventTypeInput>
    updateMany?: Enumerable<EventTypeOnDaySlotUpdateManyWithWhereWithoutEventTypeInput>
    deleteMany?: Enumerable<EventTypeOnDaySlotScalarWhereInput>
  }

  export type GroupMeetingUncheckedUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutEventTypeInput>, Enumerable<GroupMeetingUncheckedCreateWithoutEventTypeInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutEventTypeInput>
    upsert?: Enumerable<GroupMeetingUpsertWithWhereUniqueWithoutEventTypeInput>
    createMany?: GroupMeetingCreateManyEventTypeInputEnvelope
    set?: Enumerable<GroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<GroupMeetingWhereUniqueInput>
    delete?: Enumerable<GroupMeetingWhereUniqueInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
    update?: Enumerable<GroupMeetingUpdateWithWhereUniqueWithoutEventTypeInput>
    updateMany?: Enumerable<GroupMeetingUpdateManyWithWhereWithoutEventTypeInput>
    deleteMany?: Enumerable<GroupMeetingScalarWhereInput>
  }

  export type EventTypeOnDaySlotCreateNestedManyWithoutDaySlotInput = {
    create?: XOR<Enumerable<EventTypeOnDaySlotCreateWithoutDaySlotInput>, Enumerable<EventTypeOnDaySlotUncheckedCreateWithoutDaySlotInput>>
    connectOrCreate?: Enumerable<EventTypeOnDaySlotCreateOrConnectWithoutDaySlotInput>
    createMany?: EventTypeOnDaySlotCreateManyDaySlotInputEnvelope
    connect?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
  }

  export type DaySlotOnDateSlotCreateNestedManyWithoutDaySlotInput = {
    create?: XOR<Enumerable<DaySlotOnDateSlotCreateWithoutDaySlotInput>, Enumerable<DaySlotOnDateSlotUncheckedCreateWithoutDaySlotInput>>
    connectOrCreate?: Enumerable<DaySlotOnDateSlotCreateOrConnectWithoutDaySlotInput>
    createMany?: DaySlotOnDateSlotCreateManyDaySlotInputEnvelope
    connect?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
  }

  export type EventTypeOnDaySlotUncheckedCreateNestedManyWithoutDaySlotInput = {
    create?: XOR<Enumerable<EventTypeOnDaySlotCreateWithoutDaySlotInput>, Enumerable<EventTypeOnDaySlotUncheckedCreateWithoutDaySlotInput>>
    connectOrCreate?: Enumerable<EventTypeOnDaySlotCreateOrConnectWithoutDaySlotInput>
    createMany?: EventTypeOnDaySlotCreateManyDaySlotInputEnvelope
    connect?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
  }

  export type DaySlotOnDateSlotUncheckedCreateNestedManyWithoutDaySlotInput = {
    create?: XOR<Enumerable<DaySlotOnDateSlotCreateWithoutDaySlotInput>, Enumerable<DaySlotOnDateSlotUncheckedCreateWithoutDaySlotInput>>
    connectOrCreate?: Enumerable<DaySlotOnDateSlotCreateOrConnectWithoutDaySlotInput>
    createMany?: DaySlotOnDateSlotCreateManyDaySlotInputEnvelope
    connect?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
  }

  export type EventTypeOnDaySlotUpdateManyWithoutDaySlotNestedInput = {
    create?: XOR<Enumerable<EventTypeOnDaySlotCreateWithoutDaySlotInput>, Enumerable<EventTypeOnDaySlotUncheckedCreateWithoutDaySlotInput>>
    connectOrCreate?: Enumerable<EventTypeOnDaySlotCreateOrConnectWithoutDaySlotInput>
    upsert?: Enumerable<EventTypeOnDaySlotUpsertWithWhereUniqueWithoutDaySlotInput>
    createMany?: EventTypeOnDaySlotCreateManyDaySlotInputEnvelope
    set?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    disconnect?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    delete?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    connect?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    update?: Enumerable<EventTypeOnDaySlotUpdateWithWhereUniqueWithoutDaySlotInput>
    updateMany?: Enumerable<EventTypeOnDaySlotUpdateManyWithWhereWithoutDaySlotInput>
    deleteMany?: Enumerable<EventTypeOnDaySlotScalarWhereInput>
  }

  export type DaySlotOnDateSlotUpdateManyWithoutDaySlotNestedInput = {
    create?: XOR<Enumerable<DaySlotOnDateSlotCreateWithoutDaySlotInput>, Enumerable<DaySlotOnDateSlotUncheckedCreateWithoutDaySlotInput>>
    connectOrCreate?: Enumerable<DaySlotOnDateSlotCreateOrConnectWithoutDaySlotInput>
    upsert?: Enumerable<DaySlotOnDateSlotUpsertWithWhereUniqueWithoutDaySlotInput>
    createMany?: DaySlotOnDateSlotCreateManyDaySlotInputEnvelope
    set?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    disconnect?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    delete?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    connect?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    update?: Enumerable<DaySlotOnDateSlotUpdateWithWhereUniqueWithoutDaySlotInput>
    updateMany?: Enumerable<DaySlotOnDateSlotUpdateManyWithWhereWithoutDaySlotInput>
    deleteMany?: Enumerable<DaySlotOnDateSlotScalarWhereInput>
  }

  export type EventTypeOnDaySlotUncheckedUpdateManyWithoutDaySlotNestedInput = {
    create?: XOR<Enumerable<EventTypeOnDaySlotCreateWithoutDaySlotInput>, Enumerable<EventTypeOnDaySlotUncheckedCreateWithoutDaySlotInput>>
    connectOrCreate?: Enumerable<EventTypeOnDaySlotCreateOrConnectWithoutDaySlotInput>
    upsert?: Enumerable<EventTypeOnDaySlotUpsertWithWhereUniqueWithoutDaySlotInput>
    createMany?: EventTypeOnDaySlotCreateManyDaySlotInputEnvelope
    set?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    disconnect?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    delete?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    connect?: Enumerable<EventTypeOnDaySlotWhereUniqueInput>
    update?: Enumerable<EventTypeOnDaySlotUpdateWithWhereUniqueWithoutDaySlotInput>
    updateMany?: Enumerable<EventTypeOnDaySlotUpdateManyWithWhereWithoutDaySlotInput>
    deleteMany?: Enumerable<EventTypeOnDaySlotScalarWhereInput>
  }

  export type DaySlotOnDateSlotUncheckedUpdateManyWithoutDaySlotNestedInput = {
    create?: XOR<Enumerable<DaySlotOnDateSlotCreateWithoutDaySlotInput>, Enumerable<DaySlotOnDateSlotUncheckedCreateWithoutDaySlotInput>>
    connectOrCreate?: Enumerable<DaySlotOnDateSlotCreateOrConnectWithoutDaySlotInput>
    upsert?: Enumerable<DaySlotOnDateSlotUpsertWithWhereUniqueWithoutDaySlotInput>
    createMany?: DaySlotOnDateSlotCreateManyDaySlotInputEnvelope
    set?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    disconnect?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    delete?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    connect?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    update?: Enumerable<DaySlotOnDateSlotUpdateWithWhereUniqueWithoutDaySlotInput>
    updateMany?: Enumerable<DaySlotOnDateSlotUpdateManyWithWhereWithoutDaySlotInput>
    deleteMany?: Enumerable<DaySlotOnDateSlotScalarWhereInput>
  }

  export type DaySlotCreateNestedOneWithoutDateSlotsInput = {
    create?: XOR<DaySlotCreateWithoutDateSlotsInput, DaySlotUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: DaySlotCreateOrConnectWithoutDateSlotsInput
    connect?: DaySlotWhereUniqueInput
  }

  export type DateSlotCreateNestedOneWithoutDaySlotsInput = {
    create?: XOR<DateSlotCreateWithoutDaySlotsInput, DateSlotUncheckedCreateWithoutDaySlotsInput>
    connectOrCreate?: DateSlotCreateOrConnectWithoutDaySlotsInput
    connect?: DateSlotWhereUniqueInput
  }

  export type DaySlotUpdateOneRequiredWithoutDateSlotsNestedInput = {
    create?: XOR<DaySlotCreateWithoutDateSlotsInput, DaySlotUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: DaySlotCreateOrConnectWithoutDateSlotsInput
    upsert?: DaySlotUpsertWithoutDateSlotsInput
    connect?: DaySlotWhereUniqueInput
    update?: XOR<DaySlotUpdateWithoutDateSlotsInput, DaySlotUncheckedUpdateWithoutDateSlotsInput>
  }

  export type DateSlotUpdateOneRequiredWithoutDaySlotsNestedInput = {
    create?: XOR<DateSlotCreateWithoutDaySlotsInput, DateSlotUncheckedCreateWithoutDaySlotsInput>
    connectOrCreate?: DateSlotCreateOrConnectWithoutDaySlotsInput
    upsert?: DateSlotUpsertWithoutDaySlotsInput
    connect?: DateSlotWhereUniqueInput
    update?: XOR<DateSlotUpdateWithoutDaySlotsInput, DateSlotUncheckedUpdateWithoutDaySlotsInput>
  }

  export type EventTypeCreateNestedOneWithoutDaySlotsInput = {
    create?: XOR<EventTypeCreateWithoutDaySlotsInput, EventTypeUncheckedCreateWithoutDaySlotsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutDaySlotsInput
    connect?: EventTypeWhereUniqueInput
  }

  export type DaySlotCreateNestedOneWithoutEventTypeSlotsInput = {
    create?: XOR<DaySlotCreateWithoutEventTypeSlotsInput, DaySlotUncheckedCreateWithoutEventTypeSlotsInput>
    connectOrCreate?: DaySlotCreateOrConnectWithoutEventTypeSlotsInput
    connect?: DaySlotWhereUniqueInput
  }

  export type EventTypeUpdateOneRequiredWithoutDaySlotsNestedInput = {
    create?: XOR<EventTypeCreateWithoutDaySlotsInput, EventTypeUncheckedCreateWithoutDaySlotsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutDaySlotsInput
    upsert?: EventTypeUpsertWithoutDaySlotsInput
    connect?: EventTypeWhereUniqueInput
    update?: XOR<EventTypeUpdateWithoutDaySlotsInput, EventTypeUncheckedUpdateWithoutDaySlotsInput>
  }

  export type DaySlotUpdateOneRequiredWithoutEventTypeSlotsNestedInput = {
    create?: XOR<DaySlotCreateWithoutEventTypeSlotsInput, DaySlotUncheckedCreateWithoutEventTypeSlotsInput>
    connectOrCreate?: DaySlotCreateOrConnectWithoutEventTypeSlotsInput
    upsert?: DaySlotUpsertWithoutEventTypeSlotsInput
    connect?: DaySlotWhereUniqueInput
    update?: XOR<DaySlotUpdateWithoutEventTypeSlotsInput, DaySlotUncheckedUpdateWithoutEventTypeSlotsInput>
  }

  export type EventTypeOnLocationCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutLocationInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutLocationInput>
    createMany?: EventTypeOnLocationCreateManyLocationInputEnvelope
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
  }

  export type GroupMeetingCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutLocationInput>, Enumerable<GroupMeetingUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutLocationInput>
    createMany?: GroupMeetingCreateManyLocationInputEnvelope
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
  }

  export type EventTypeOnLocationUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutLocationInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutLocationInput>
    createMany?: EventTypeOnLocationCreateManyLocationInputEnvelope
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
  }

  export type GroupMeetingUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutLocationInput>, Enumerable<GroupMeetingUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutLocationInput>
    createMany?: GroupMeetingCreateManyLocationInputEnvelope
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
  }

  export type EventTypeOnLocationUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutLocationInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<EventTypeOnLocationUpsertWithWhereUniqueWithoutLocationInput>
    createMany?: EventTypeOnLocationCreateManyLocationInputEnvelope
    set?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    disconnect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    delete?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    update?: Enumerable<EventTypeOnLocationUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<EventTypeOnLocationUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<EventTypeOnLocationScalarWhereInput>
  }

  export type GroupMeetingUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutLocationInput>, Enumerable<GroupMeetingUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<GroupMeetingUpsertWithWhereUniqueWithoutLocationInput>
    createMany?: GroupMeetingCreateManyLocationInputEnvelope
    set?: Enumerable<GroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<GroupMeetingWhereUniqueInput>
    delete?: Enumerable<GroupMeetingWhereUniqueInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
    update?: Enumerable<GroupMeetingUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<GroupMeetingUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<GroupMeetingScalarWhereInput>
  }

  export type EventTypeOnLocationUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<EventTypeOnLocationCreateWithoutLocationInput>, Enumerable<EventTypeOnLocationUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<EventTypeOnLocationCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<EventTypeOnLocationUpsertWithWhereUniqueWithoutLocationInput>
    createMany?: EventTypeOnLocationCreateManyLocationInputEnvelope
    set?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    disconnect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    delete?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    connect?: Enumerable<EventTypeOnLocationWhereUniqueInput>
    update?: Enumerable<EventTypeOnLocationUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<EventTypeOnLocationUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<EventTypeOnLocationScalarWhereInput>
  }

  export type GroupMeetingUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutLocationInput>, Enumerable<GroupMeetingUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<GroupMeetingUpsertWithWhereUniqueWithoutLocationInput>
    createMany?: GroupMeetingCreateManyLocationInputEnvelope
    set?: Enumerable<GroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<GroupMeetingWhereUniqueInput>
    delete?: Enumerable<GroupMeetingWhereUniqueInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
    update?: Enumerable<GroupMeetingUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<GroupMeetingUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<GroupMeetingScalarWhereInput>
  }

  export type EventTypeCreateNestedOneWithoutEventTypeOnLocationsInput = {
    create?: XOR<EventTypeCreateWithoutEventTypeOnLocationsInput, EventTypeUncheckedCreateWithoutEventTypeOnLocationsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutEventTypeOnLocationsInput
    connect?: EventTypeWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutEventTypeOnLocationsInput = {
    create?: XOR<LocationCreateWithoutEventTypeOnLocationsInput, LocationUncheckedCreateWithoutEventTypeOnLocationsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutEventTypeOnLocationsInput
    connect?: LocationWhereUniqueInput
  }

  export type EventTypeUpdateOneRequiredWithoutEventTypeOnLocationsNestedInput = {
    create?: XOR<EventTypeCreateWithoutEventTypeOnLocationsInput, EventTypeUncheckedCreateWithoutEventTypeOnLocationsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutEventTypeOnLocationsInput
    upsert?: EventTypeUpsertWithoutEventTypeOnLocationsInput
    connect?: EventTypeWhereUniqueInput
    update?: XOR<EventTypeUpdateWithoutEventTypeOnLocationsInput, EventTypeUncheckedUpdateWithoutEventTypeOnLocationsInput>
  }

  export type LocationUpdateOneRequiredWithoutEventTypeOnLocationsNestedInput = {
    create?: XOR<LocationCreateWithoutEventTypeOnLocationsInput, LocationUncheckedCreateWithoutEventTypeOnLocationsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutEventTypeOnLocationsInput
    upsert?: LocationUpsertWithoutEventTypeOnLocationsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<LocationUpdateWithoutEventTypeOnLocationsInput, LocationUncheckedUpdateWithoutEventTypeOnLocationsInput>
  }

  export type EventTypeCreateNestedManyWithoutAvailabilityScheduleInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutAvailabilityScheduleInput>, Enumerable<EventTypeUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutAvailabilityScheduleInput>
    createMany?: EventTypeCreateManyAvailabilityScheduleInputEnvelope
    connect?: Enumerable<EventTypeWhereUniqueInput>
  }

  export type DateSlotCreateNestedManyWithoutAvailabilityScheduleInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutAvailabilityScheduleInput>, Enumerable<DateSlotUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutAvailabilityScheduleInput>
    createMany?: DateSlotCreateManyAvailabilityScheduleInputEnvelope
    connect?: Enumerable<DateSlotWhereUniqueInput>
  }

  export type EventTypeUncheckedCreateNestedManyWithoutAvailabilityScheduleInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutAvailabilityScheduleInput>, Enumerable<EventTypeUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutAvailabilityScheduleInput>
    createMany?: EventTypeCreateManyAvailabilityScheduleInputEnvelope
    connect?: Enumerable<EventTypeWhereUniqueInput>
  }

  export type DateSlotUncheckedCreateNestedManyWithoutAvailabilityScheduleInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutAvailabilityScheduleInput>, Enumerable<DateSlotUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutAvailabilityScheduleInput>
    createMany?: DateSlotCreateManyAvailabilityScheduleInputEnvelope
    connect?: Enumerable<DateSlotWhereUniqueInput>
  }

  export type EventTypeUpdateManyWithoutAvailabilityScheduleNestedInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutAvailabilityScheduleInput>, Enumerable<EventTypeUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutAvailabilityScheduleInput>
    upsert?: Enumerable<EventTypeUpsertWithWhereUniqueWithoutAvailabilityScheduleInput>
    createMany?: EventTypeCreateManyAvailabilityScheduleInputEnvelope
    set?: Enumerable<EventTypeWhereUniqueInput>
    disconnect?: Enumerable<EventTypeWhereUniqueInput>
    delete?: Enumerable<EventTypeWhereUniqueInput>
    connect?: Enumerable<EventTypeWhereUniqueInput>
    update?: Enumerable<EventTypeUpdateWithWhereUniqueWithoutAvailabilityScheduleInput>
    updateMany?: Enumerable<EventTypeUpdateManyWithWhereWithoutAvailabilityScheduleInput>
    deleteMany?: Enumerable<EventTypeScalarWhereInput>
  }

  export type DateSlotUpdateManyWithoutAvailabilityScheduleNestedInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutAvailabilityScheduleInput>, Enumerable<DateSlotUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutAvailabilityScheduleInput>
    upsert?: Enumerable<DateSlotUpsertWithWhereUniqueWithoutAvailabilityScheduleInput>
    createMany?: DateSlotCreateManyAvailabilityScheduleInputEnvelope
    set?: Enumerable<DateSlotWhereUniqueInput>
    disconnect?: Enumerable<DateSlotWhereUniqueInput>
    delete?: Enumerable<DateSlotWhereUniqueInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
    update?: Enumerable<DateSlotUpdateWithWhereUniqueWithoutAvailabilityScheduleInput>
    updateMany?: Enumerable<DateSlotUpdateManyWithWhereWithoutAvailabilityScheduleInput>
    deleteMany?: Enumerable<DateSlotScalarWhereInput>
  }

  export type EventTypeUncheckedUpdateManyWithoutAvailabilityScheduleNestedInput = {
    create?: XOR<Enumerable<EventTypeCreateWithoutAvailabilityScheduleInput>, Enumerable<EventTypeUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<EventTypeCreateOrConnectWithoutAvailabilityScheduleInput>
    upsert?: Enumerable<EventTypeUpsertWithWhereUniqueWithoutAvailabilityScheduleInput>
    createMany?: EventTypeCreateManyAvailabilityScheduleInputEnvelope
    set?: Enumerable<EventTypeWhereUniqueInput>
    disconnect?: Enumerable<EventTypeWhereUniqueInput>
    delete?: Enumerable<EventTypeWhereUniqueInput>
    connect?: Enumerable<EventTypeWhereUniqueInput>
    update?: Enumerable<EventTypeUpdateWithWhereUniqueWithoutAvailabilityScheduleInput>
    updateMany?: Enumerable<EventTypeUpdateManyWithWhereWithoutAvailabilityScheduleInput>
    deleteMany?: Enumerable<EventTypeScalarWhereInput>
  }

  export type DateSlotUncheckedUpdateManyWithoutAvailabilityScheduleNestedInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutAvailabilityScheduleInput>, Enumerable<DateSlotUncheckedCreateWithoutAvailabilityScheduleInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutAvailabilityScheduleInput>
    upsert?: Enumerable<DateSlotUpsertWithWhereUniqueWithoutAvailabilityScheduleInput>
    createMany?: DateSlotCreateManyAvailabilityScheduleInputEnvelope
    set?: Enumerable<DateSlotWhereUniqueInput>
    disconnect?: Enumerable<DateSlotWhereUniqueInput>
    delete?: Enumerable<DateSlotWhereUniqueInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
    update?: Enumerable<DateSlotUpdateWithWhereUniqueWithoutAvailabilityScheduleInput>
    updateMany?: Enumerable<DateSlotUpdateManyWithWhereWithoutAvailabilityScheduleInput>
    deleteMany?: Enumerable<DateSlotScalarWhereInput>
  }

  export type AvailabilityScheduleCreateNestedOneWithoutDateSlotsInput = {
    create?: XOR<AvailabilityScheduleCreateWithoutDateSlotsInput, AvailabilityScheduleUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: AvailabilityScheduleCreateOrConnectWithoutDateSlotsInput
    connect?: AvailabilityScheduleWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutDateSlotsInput = {
    create?: XOR<CustomerCreateWithoutDateSlotsInput, CustomerUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDateSlotsInput
    connect?: CustomerWhereUniqueInput
  }

  export type DateSlotOnTimeSelectCreateNestedManyWithoutDateSlotInput = {
    create?: XOR<Enumerable<DateSlotOnTimeSelectCreateWithoutDateSlotInput>, Enumerable<DateSlotOnTimeSelectUncheckedCreateWithoutDateSlotInput>>
    connectOrCreate?: Enumerable<DateSlotOnTimeSelectCreateOrConnectWithoutDateSlotInput>
    createMany?: DateSlotOnTimeSelectCreateManyDateSlotInputEnvelope
    connect?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
  }

  export type DaySlotOnDateSlotCreateNestedManyWithoutDateSlotInput = {
    create?: XOR<Enumerable<DaySlotOnDateSlotCreateWithoutDateSlotInput>, Enumerable<DaySlotOnDateSlotUncheckedCreateWithoutDateSlotInput>>
    connectOrCreate?: Enumerable<DaySlotOnDateSlotCreateOrConnectWithoutDateSlotInput>
    createMany?: DaySlotOnDateSlotCreateManyDateSlotInputEnvelope
    connect?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
  }

  export type DateSlotOnTimeSelectUncheckedCreateNestedManyWithoutDateSlotInput = {
    create?: XOR<Enumerable<DateSlotOnTimeSelectCreateWithoutDateSlotInput>, Enumerable<DateSlotOnTimeSelectUncheckedCreateWithoutDateSlotInput>>
    connectOrCreate?: Enumerable<DateSlotOnTimeSelectCreateOrConnectWithoutDateSlotInput>
    createMany?: DateSlotOnTimeSelectCreateManyDateSlotInputEnvelope
    connect?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
  }

  export type DaySlotOnDateSlotUncheckedCreateNestedManyWithoutDateSlotInput = {
    create?: XOR<Enumerable<DaySlotOnDateSlotCreateWithoutDateSlotInput>, Enumerable<DaySlotOnDateSlotUncheckedCreateWithoutDateSlotInput>>
    connectOrCreate?: Enumerable<DaySlotOnDateSlotCreateOrConnectWithoutDateSlotInput>
    createMany?: DaySlotOnDateSlotCreateManyDateSlotInputEnvelope
    connect?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
  }

  export type AvailabilityScheduleUpdateOneWithoutDateSlotsNestedInput = {
    create?: XOR<AvailabilityScheduleCreateWithoutDateSlotsInput, AvailabilityScheduleUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: AvailabilityScheduleCreateOrConnectWithoutDateSlotsInput
    upsert?: AvailabilityScheduleUpsertWithoutDateSlotsInput
    disconnect?: boolean
    delete?: boolean
    connect?: AvailabilityScheduleWhereUniqueInput
    update?: XOR<AvailabilityScheduleUpdateWithoutDateSlotsInput, AvailabilityScheduleUncheckedUpdateWithoutDateSlotsInput>
  }

  export type CustomerUpdateOneWithoutDateSlotsNestedInput = {
    create?: XOR<CustomerCreateWithoutDateSlotsInput, CustomerUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDateSlotsInput
    upsert?: CustomerUpsertWithoutDateSlotsInput
    disconnect?: boolean
    delete?: boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutDateSlotsInput, CustomerUncheckedUpdateWithoutDateSlotsInput>
  }

  export type DateSlotOnTimeSelectUpdateManyWithoutDateSlotNestedInput = {
    create?: XOR<Enumerable<DateSlotOnTimeSelectCreateWithoutDateSlotInput>, Enumerable<DateSlotOnTimeSelectUncheckedCreateWithoutDateSlotInput>>
    connectOrCreate?: Enumerable<DateSlotOnTimeSelectCreateOrConnectWithoutDateSlotInput>
    upsert?: Enumerable<DateSlotOnTimeSelectUpsertWithWhereUniqueWithoutDateSlotInput>
    createMany?: DateSlotOnTimeSelectCreateManyDateSlotInputEnvelope
    set?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    disconnect?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    delete?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    connect?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    update?: Enumerable<DateSlotOnTimeSelectUpdateWithWhereUniqueWithoutDateSlotInput>
    updateMany?: Enumerable<DateSlotOnTimeSelectUpdateManyWithWhereWithoutDateSlotInput>
    deleteMany?: Enumerable<DateSlotOnTimeSelectScalarWhereInput>
  }

  export type DaySlotOnDateSlotUpdateManyWithoutDateSlotNestedInput = {
    create?: XOR<Enumerable<DaySlotOnDateSlotCreateWithoutDateSlotInput>, Enumerable<DaySlotOnDateSlotUncheckedCreateWithoutDateSlotInput>>
    connectOrCreate?: Enumerable<DaySlotOnDateSlotCreateOrConnectWithoutDateSlotInput>
    upsert?: Enumerable<DaySlotOnDateSlotUpsertWithWhereUniqueWithoutDateSlotInput>
    createMany?: DaySlotOnDateSlotCreateManyDateSlotInputEnvelope
    set?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    disconnect?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    delete?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    connect?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    update?: Enumerable<DaySlotOnDateSlotUpdateWithWhereUniqueWithoutDateSlotInput>
    updateMany?: Enumerable<DaySlotOnDateSlotUpdateManyWithWhereWithoutDateSlotInput>
    deleteMany?: Enumerable<DaySlotOnDateSlotScalarWhereInput>
  }

  export type DateSlotOnTimeSelectUncheckedUpdateManyWithoutDateSlotNestedInput = {
    create?: XOR<Enumerable<DateSlotOnTimeSelectCreateWithoutDateSlotInput>, Enumerable<DateSlotOnTimeSelectUncheckedCreateWithoutDateSlotInput>>
    connectOrCreate?: Enumerable<DateSlotOnTimeSelectCreateOrConnectWithoutDateSlotInput>
    upsert?: Enumerable<DateSlotOnTimeSelectUpsertWithWhereUniqueWithoutDateSlotInput>
    createMany?: DateSlotOnTimeSelectCreateManyDateSlotInputEnvelope
    set?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    disconnect?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    delete?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    connect?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    update?: Enumerable<DateSlotOnTimeSelectUpdateWithWhereUniqueWithoutDateSlotInput>
    updateMany?: Enumerable<DateSlotOnTimeSelectUpdateManyWithWhereWithoutDateSlotInput>
    deleteMany?: Enumerable<DateSlotOnTimeSelectScalarWhereInput>
  }

  export type DaySlotOnDateSlotUncheckedUpdateManyWithoutDateSlotNestedInput = {
    create?: XOR<Enumerable<DaySlotOnDateSlotCreateWithoutDateSlotInput>, Enumerable<DaySlotOnDateSlotUncheckedCreateWithoutDateSlotInput>>
    connectOrCreate?: Enumerable<DaySlotOnDateSlotCreateOrConnectWithoutDateSlotInput>
    upsert?: Enumerable<DaySlotOnDateSlotUpsertWithWhereUniqueWithoutDateSlotInput>
    createMany?: DaySlotOnDateSlotCreateManyDateSlotInputEnvelope
    set?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    disconnect?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    delete?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    connect?: Enumerable<DaySlotOnDateSlotWhereUniqueInput>
    update?: Enumerable<DaySlotOnDateSlotUpdateWithWhereUniqueWithoutDateSlotInput>
    updateMany?: Enumerable<DaySlotOnDateSlotUpdateManyWithWhereWithoutDateSlotInput>
    deleteMany?: Enumerable<DaySlotOnDateSlotScalarWhereInput>
  }

  export type DateSlotOnTimeSelectCreateNestedManyWithoutTimeSelectInput = {
    create?: XOR<Enumerable<DateSlotOnTimeSelectCreateWithoutTimeSelectInput>, Enumerable<DateSlotOnTimeSelectUncheckedCreateWithoutTimeSelectInput>>
    connectOrCreate?: Enumerable<DateSlotOnTimeSelectCreateOrConnectWithoutTimeSelectInput>
    createMany?: DateSlotOnTimeSelectCreateManyTimeSelectInputEnvelope
    connect?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
  }

  export type DateSlotOnTimeSelectUncheckedCreateNestedManyWithoutTimeSelectInput = {
    create?: XOR<Enumerable<DateSlotOnTimeSelectCreateWithoutTimeSelectInput>, Enumerable<DateSlotOnTimeSelectUncheckedCreateWithoutTimeSelectInput>>
    connectOrCreate?: Enumerable<DateSlotOnTimeSelectCreateOrConnectWithoutTimeSelectInput>
    createMany?: DateSlotOnTimeSelectCreateManyTimeSelectInputEnvelope
    connect?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
  }

  export type DateSlotOnTimeSelectUpdateManyWithoutTimeSelectNestedInput = {
    create?: XOR<Enumerable<DateSlotOnTimeSelectCreateWithoutTimeSelectInput>, Enumerable<DateSlotOnTimeSelectUncheckedCreateWithoutTimeSelectInput>>
    connectOrCreate?: Enumerable<DateSlotOnTimeSelectCreateOrConnectWithoutTimeSelectInput>
    upsert?: Enumerable<DateSlotOnTimeSelectUpsertWithWhereUniqueWithoutTimeSelectInput>
    createMany?: DateSlotOnTimeSelectCreateManyTimeSelectInputEnvelope
    set?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    disconnect?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    delete?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    connect?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    update?: Enumerable<DateSlotOnTimeSelectUpdateWithWhereUniqueWithoutTimeSelectInput>
    updateMany?: Enumerable<DateSlotOnTimeSelectUpdateManyWithWhereWithoutTimeSelectInput>
    deleteMany?: Enumerable<DateSlotOnTimeSelectScalarWhereInput>
  }

  export type DateSlotOnTimeSelectUncheckedUpdateManyWithoutTimeSelectNestedInput = {
    create?: XOR<Enumerable<DateSlotOnTimeSelectCreateWithoutTimeSelectInput>, Enumerable<DateSlotOnTimeSelectUncheckedCreateWithoutTimeSelectInput>>
    connectOrCreate?: Enumerable<DateSlotOnTimeSelectCreateOrConnectWithoutTimeSelectInput>
    upsert?: Enumerable<DateSlotOnTimeSelectUpsertWithWhereUniqueWithoutTimeSelectInput>
    createMany?: DateSlotOnTimeSelectCreateManyTimeSelectInputEnvelope
    set?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    disconnect?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    delete?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    connect?: Enumerable<DateSlotOnTimeSelectWhereUniqueInput>
    update?: Enumerable<DateSlotOnTimeSelectUpdateWithWhereUniqueWithoutTimeSelectInput>
    updateMany?: Enumerable<DateSlotOnTimeSelectUpdateManyWithWhereWithoutTimeSelectInput>
    deleteMany?: Enumerable<DateSlotOnTimeSelectScalarWhereInput>
  }

  export type GroupMeetingCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutCustomerInput>, Enumerable<GroupMeetingUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutCustomerInput>
    createMany?: GroupMeetingCreateManyCustomerInputEnvelope
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
  }

  export type DateSlotCreateNestedManyWithoutCustormerInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutCustormerInput>, Enumerable<DateSlotUncheckedCreateWithoutCustormerInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutCustormerInput>
    createMany?: DateSlotCreateManyCustormerInputEnvelope
    connect?: Enumerable<DateSlotWhereUniqueInput>
  }

  export type GroupMeetingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutCustomerInput>, Enumerable<GroupMeetingUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutCustomerInput>
    createMany?: GroupMeetingCreateManyCustomerInputEnvelope
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
  }

  export type DateSlotUncheckedCreateNestedManyWithoutCustormerInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutCustormerInput>, Enumerable<DateSlotUncheckedCreateWithoutCustormerInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutCustormerInput>
    createMany?: DateSlotCreateManyCustormerInputEnvelope
    connect?: Enumerable<DateSlotWhereUniqueInput>
  }

  export type GroupMeetingUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutCustomerInput>, Enumerable<GroupMeetingUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<GroupMeetingUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: GroupMeetingCreateManyCustomerInputEnvelope
    set?: Enumerable<GroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<GroupMeetingWhereUniqueInput>
    delete?: Enumerable<GroupMeetingWhereUniqueInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
    update?: Enumerable<GroupMeetingUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<GroupMeetingUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<GroupMeetingScalarWhereInput>
  }

  export type DateSlotUpdateManyWithoutCustormerNestedInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutCustormerInput>, Enumerable<DateSlotUncheckedCreateWithoutCustormerInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutCustormerInput>
    upsert?: Enumerable<DateSlotUpsertWithWhereUniqueWithoutCustormerInput>
    createMany?: DateSlotCreateManyCustormerInputEnvelope
    set?: Enumerable<DateSlotWhereUniqueInput>
    disconnect?: Enumerable<DateSlotWhereUniqueInput>
    delete?: Enumerable<DateSlotWhereUniqueInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
    update?: Enumerable<DateSlotUpdateWithWhereUniqueWithoutCustormerInput>
    updateMany?: Enumerable<DateSlotUpdateManyWithWhereWithoutCustormerInput>
    deleteMany?: Enumerable<DateSlotScalarWhereInput>
  }

  export type GroupMeetingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<GroupMeetingCreateWithoutCustomerInput>, Enumerable<GroupMeetingUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<GroupMeetingCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<GroupMeetingUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: GroupMeetingCreateManyCustomerInputEnvelope
    set?: Enumerable<GroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<GroupMeetingWhereUniqueInput>
    delete?: Enumerable<GroupMeetingWhereUniqueInput>
    connect?: Enumerable<GroupMeetingWhereUniqueInput>
    update?: Enumerable<GroupMeetingUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<GroupMeetingUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<GroupMeetingScalarWhereInput>
  }

  export type DateSlotUncheckedUpdateManyWithoutCustormerNestedInput = {
    create?: XOR<Enumerable<DateSlotCreateWithoutCustormerInput>, Enumerable<DateSlotUncheckedCreateWithoutCustormerInput>>
    connectOrCreate?: Enumerable<DateSlotCreateOrConnectWithoutCustormerInput>
    upsert?: Enumerable<DateSlotUpsertWithWhereUniqueWithoutCustormerInput>
    createMany?: DateSlotCreateManyCustormerInputEnvelope
    set?: Enumerable<DateSlotWhereUniqueInput>
    disconnect?: Enumerable<DateSlotWhereUniqueInput>
    delete?: Enumerable<DateSlotWhereUniqueInput>
    connect?: Enumerable<DateSlotWhereUniqueInput>
    update?: Enumerable<DateSlotUpdateWithWhereUniqueWithoutCustormerInput>
    updateMany?: Enumerable<DateSlotUpdateManyWithWhereWithoutCustormerInput>
    deleteMany?: Enumerable<DateSlotScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutBillingsInput = {
    create?: XOR<UserCreateWithoutBillingsInput, UserUncheckedCreateWithoutBillingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBillingsNestedInput = {
    create?: XOR<UserCreateWithoutBillingsInput, UserUncheckedCreateWithoutBillingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillingsInput
    upsert?: UserUpsertWithoutBillingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBillingsInput, UserUncheckedUpdateWithoutBillingsInput>
  }

  export type LocationCreateNestedOneWithoutGroupMeetingsInput = {
    create?: XOR<LocationCreateWithoutGroupMeetingsInput, LocationUncheckedCreateWithoutGroupMeetingsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutGroupMeetingsInput
    connect?: LocationWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutGroupMeetingsInput = {
    create?: XOR<CustomerCreateWithoutGroupMeetingsInput, CustomerUncheckedCreateWithoutGroupMeetingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutGroupMeetingsInput
    connect?: CustomerWhereUniqueInput
  }

  export type EventTypeCreateNestedOneWithoutGroupMeetingsInput = {
    create?: XOR<EventTypeCreateWithoutGroupMeetingsInput, EventTypeUncheckedCreateWithoutGroupMeetingsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutGroupMeetingsInput
    connect?: EventTypeWhereUniqueInput
  }

  export type UserOnGroupMeetingCreateNestedManyWithoutGroupMeetingInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutGroupMeetingInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutGroupMeetingInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutGroupMeetingInput>
    createMany?: UserOnGroupMeetingCreateManyGroupMeetingInputEnvelope
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
  }

  export type UserOnGroupMeetingUncheckedCreateNestedManyWithoutGroupMeetingInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutGroupMeetingInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutGroupMeetingInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutGroupMeetingInput>
    createMany?: UserOnGroupMeetingCreateManyGroupMeetingInputEnvelope
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
  }

  export type LocationUpdateOneRequiredWithoutGroupMeetingsNestedInput = {
    create?: XOR<LocationCreateWithoutGroupMeetingsInput, LocationUncheckedCreateWithoutGroupMeetingsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutGroupMeetingsInput
    upsert?: LocationUpsertWithoutGroupMeetingsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<LocationUpdateWithoutGroupMeetingsInput, LocationUncheckedUpdateWithoutGroupMeetingsInput>
  }

  export type CustomerUpdateOneRequiredWithoutGroupMeetingsNestedInput = {
    create?: XOR<CustomerCreateWithoutGroupMeetingsInput, CustomerUncheckedCreateWithoutGroupMeetingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutGroupMeetingsInput
    upsert?: CustomerUpsertWithoutGroupMeetingsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutGroupMeetingsInput, CustomerUncheckedUpdateWithoutGroupMeetingsInput>
  }

  export type EventTypeUpdateOneRequiredWithoutGroupMeetingsNestedInput = {
    create?: XOR<EventTypeCreateWithoutGroupMeetingsInput, EventTypeUncheckedCreateWithoutGroupMeetingsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutGroupMeetingsInput
    upsert?: EventTypeUpsertWithoutGroupMeetingsInput
    connect?: EventTypeWhereUniqueInput
    update?: XOR<EventTypeUpdateWithoutGroupMeetingsInput, EventTypeUncheckedUpdateWithoutGroupMeetingsInput>
  }

  export type UserOnGroupMeetingUpdateManyWithoutGroupMeetingNestedInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutGroupMeetingInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutGroupMeetingInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutGroupMeetingInput>
    upsert?: Enumerable<UserOnGroupMeetingUpsertWithWhereUniqueWithoutGroupMeetingInput>
    createMany?: UserOnGroupMeetingCreateManyGroupMeetingInputEnvelope
    set?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    delete?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    update?: Enumerable<UserOnGroupMeetingUpdateWithWhereUniqueWithoutGroupMeetingInput>
    updateMany?: Enumerable<UserOnGroupMeetingUpdateManyWithWhereWithoutGroupMeetingInput>
    deleteMany?: Enumerable<UserOnGroupMeetingScalarWhereInput>
  }

  export type UserOnGroupMeetingUncheckedUpdateManyWithoutGroupMeetingNestedInput = {
    create?: XOR<Enumerable<UserOnGroupMeetingCreateWithoutGroupMeetingInput>, Enumerable<UserOnGroupMeetingUncheckedCreateWithoutGroupMeetingInput>>
    connectOrCreate?: Enumerable<UserOnGroupMeetingCreateOrConnectWithoutGroupMeetingInput>
    upsert?: Enumerable<UserOnGroupMeetingUpsertWithWhereUniqueWithoutGroupMeetingInput>
    createMany?: UserOnGroupMeetingCreateManyGroupMeetingInputEnvelope
    set?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    disconnect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    delete?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    connect?: Enumerable<UserOnGroupMeetingWhereUniqueInput>
    update?: Enumerable<UserOnGroupMeetingUpdateWithWhereUniqueWithoutGroupMeetingInput>
    updateMany?: Enumerable<UserOnGroupMeetingUpdateManyWithWhereWithoutGroupMeetingInput>
    deleteMany?: Enumerable<UserOnGroupMeetingScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutUserOnGroupMeetingsInput = {
    create?: XOR<UserCreateWithoutUserOnGroupMeetingsInput, UserUncheckedCreateWithoutUserOnGroupMeetingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserOnGroupMeetingsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupMeetingCreateNestedOneWithoutUserOnGroupMeetingsInput = {
    create?: XOR<GroupMeetingCreateWithoutUserOnGroupMeetingsInput, GroupMeetingUncheckedCreateWithoutUserOnGroupMeetingsInput>
    connectOrCreate?: GroupMeetingCreateOrConnectWithoutUserOnGroupMeetingsInput
    connect?: GroupMeetingWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserOnGroupMeetingsNestedInput = {
    create?: XOR<UserCreateWithoutUserOnGroupMeetingsInput, UserUncheckedCreateWithoutUserOnGroupMeetingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserOnGroupMeetingsInput
    upsert?: UserUpsertWithoutUserOnGroupMeetingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserOnGroupMeetingsInput, UserUncheckedUpdateWithoutUserOnGroupMeetingsInput>
  }

  export type GroupMeetingUpdateOneRequiredWithoutUserOnGroupMeetingsNestedInput = {
    create?: XOR<GroupMeetingCreateWithoutUserOnGroupMeetingsInput, GroupMeetingUncheckedCreateWithoutUserOnGroupMeetingsInput>
    connectOrCreate?: GroupMeetingCreateOrConnectWithoutUserOnGroupMeetingsInput
    upsert?: GroupMeetingUpsertWithoutUserOnGroupMeetingsInput
    connect?: GroupMeetingWhereUniqueInput
    update?: XOR<GroupMeetingUpdateWithoutUserOnGroupMeetingsInput, GroupMeetingUncheckedUpdateWithoutUserOnGroupMeetingsInput>
  }

  export type DateSlotCreateNestedOneWithoutTimeSelectsInput = {
    create?: XOR<DateSlotCreateWithoutTimeSelectsInput, DateSlotUncheckedCreateWithoutTimeSelectsInput>
    connectOrCreate?: DateSlotCreateOrConnectWithoutTimeSelectsInput
    connect?: DateSlotWhereUniqueInput
  }

  export type TimeSelectCreateNestedOneWithoutDateSlotsInput = {
    create?: XOR<TimeSelectCreateWithoutDateSlotsInput, TimeSelectUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: TimeSelectCreateOrConnectWithoutDateSlotsInput
    connect?: TimeSelectWhereUniqueInput
  }

  export type DateSlotUpdateOneRequiredWithoutTimeSelectsNestedInput = {
    create?: XOR<DateSlotCreateWithoutTimeSelectsInput, DateSlotUncheckedCreateWithoutTimeSelectsInput>
    connectOrCreate?: DateSlotCreateOrConnectWithoutTimeSelectsInput
    upsert?: DateSlotUpsertWithoutTimeSelectsInput
    connect?: DateSlotWhereUniqueInput
    update?: XOR<DateSlotUpdateWithoutTimeSelectsInput, DateSlotUncheckedUpdateWithoutTimeSelectsInput>
  }

  export type TimeSelectUpdateOneRequiredWithoutDateSlotsNestedInput = {
    create?: XOR<TimeSelectCreateWithoutDateSlotsInput, TimeSelectUncheckedCreateWithoutDateSlotsInput>
    connectOrCreate?: TimeSelectCreateOrConnectWithoutDateSlotsInput
    upsert?: TimeSelectUpsertWithoutDateSlotsInput
    connect?: TimeSelectWhereUniqueInput
    update?: XOR<TimeSelectUpdateWithoutDateSlotsInput, TimeSelectUncheckedUpdateWithoutDateSlotsInput>
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

  export type EventTypeCreateWithoutUserInput = {
    name: string
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationCreateNestedManyWithoutEventTypeInput
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutEventTypesInput
    daySlots?: EventTypeOnDaySlotCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description: string
    price: number
    timeDuration: number
    availabilityScheduleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedCreateNestedManyWithoutEventTypeInput
    daySlots?: EventTypeOnDaySlotUncheckedCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeCreateOrConnectWithoutUserInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutUserInput, EventTypeUncheckedCreateWithoutUserInput>
  }

  export type EventTypeCreateManyUserInputEnvelope = {
    data: Enumerable<EventTypeCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type BillingCreateWithoutUserInput = {
    subscriptionMonth: number
    subscriptionPrice: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingUncheckedCreateWithoutUserInput = {
    id?: number
    subscriptionMonth: number
    subscriptionPrice: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingCreateOrConnectWithoutUserInput = {
    where: BillingWhereUniqueInput
    create: XOR<BillingCreateWithoutUserInput, BillingUncheckedCreateWithoutUserInput>
  }

  export type BillingCreateManyUserInputEnvelope = {
    data: Enumerable<BillingCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserOnGroupMeetingCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMeeting: GroupMeetingCreateNestedOneWithoutUserOnGroupMeetingsInput
  }

  export type UserOnGroupMeetingUncheckedCreateWithoutUserInput = {
    id?: number
    groupMeetingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnGroupMeetingCreateOrConnectWithoutUserInput = {
    where: UserOnGroupMeetingWhereUniqueInput
    create: XOR<UserOnGroupMeetingCreateWithoutUserInput, UserOnGroupMeetingUncheckedCreateWithoutUserInput>
  }

  export type UserOnGroupMeetingCreateManyUserInputEnvelope = {
    data: Enumerable<UserOnGroupMeetingCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type EventTypeUpsertWithWhereUniqueWithoutUserInput = {
    where: EventTypeWhereUniqueInput
    update: XOR<EventTypeUpdateWithoutUserInput, EventTypeUncheckedUpdateWithoutUserInput>
    create: XOR<EventTypeCreateWithoutUserInput, EventTypeUncheckedCreateWithoutUserInput>
  }

  export type EventTypeUpdateWithWhereUniqueWithoutUserInput = {
    where: EventTypeWhereUniqueInput
    data: XOR<EventTypeUpdateWithoutUserInput, EventTypeUncheckedUpdateWithoutUserInput>
  }

  export type EventTypeUpdateManyWithWhereWithoutUserInput = {
    where: EventTypeScalarWhereInput
    data: XOR<EventTypeUpdateManyMutationInput, EventTypeUncheckedUpdateManyWithoutEventTypesInput>
  }

  export type EventTypeScalarWhereInput = {
    AND?: Enumerable<EventTypeScalarWhereInput>
    OR?: Enumerable<EventTypeScalarWhereInput>
    NOT?: Enumerable<EventTypeScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    userId?: IntFilter | number
    description?: StringFilter | string
    price?: IntFilter | number
    timeDuration?: IntFilter | number
    availabilityScheduleId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BillingUpsertWithWhereUniqueWithoutUserInput = {
    where: BillingWhereUniqueInput
    update: XOR<BillingUpdateWithoutUserInput, BillingUncheckedUpdateWithoutUserInput>
    create: XOR<BillingCreateWithoutUserInput, BillingUncheckedCreateWithoutUserInput>
  }

  export type BillingUpdateWithWhereUniqueWithoutUserInput = {
    where: BillingWhereUniqueInput
    data: XOR<BillingUpdateWithoutUserInput, BillingUncheckedUpdateWithoutUserInput>
  }

  export type BillingUpdateManyWithWhereWithoutUserInput = {
    where: BillingScalarWhereInput
    data: XOR<BillingUpdateManyMutationInput, BillingUncheckedUpdateManyWithoutBillingsInput>
  }

  export type BillingScalarWhereInput = {
    AND?: Enumerable<BillingScalarWhereInput>
    OR?: Enumerable<BillingScalarWhereInput>
    NOT?: Enumerable<BillingScalarWhereInput>
    id?: IntFilter | number
    subscriptionMonth?: IntFilter | number
    subscriptionPrice?: IntFilter | number
    userId?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserOnGroupMeetingUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOnGroupMeetingWhereUniqueInput
    update: XOR<UserOnGroupMeetingUpdateWithoutUserInput, UserOnGroupMeetingUncheckedUpdateWithoutUserInput>
    create: XOR<UserOnGroupMeetingCreateWithoutUserInput, UserOnGroupMeetingUncheckedCreateWithoutUserInput>
  }

  export type UserOnGroupMeetingUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOnGroupMeetingWhereUniqueInput
    data: XOR<UserOnGroupMeetingUpdateWithoutUserInput, UserOnGroupMeetingUncheckedUpdateWithoutUserInput>
  }

  export type UserOnGroupMeetingUpdateManyWithWhereWithoutUserInput = {
    where: UserOnGroupMeetingScalarWhereInput
    data: XOR<UserOnGroupMeetingUpdateManyMutationInput, UserOnGroupMeetingUncheckedUpdateManyWithoutUserOnGroupMeetingsInput>
  }

  export type UserOnGroupMeetingScalarWhereInput = {
    AND?: Enumerable<UserOnGroupMeetingScalarWhereInput>
    OR?: Enumerable<UserOnGroupMeetingScalarWhereInput>
    NOT?: Enumerable<UserOnGroupMeetingScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    groupMeetingId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutEventTypesInput = {
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    billings?: BillingCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventTypesInput = {
    id?: number
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    billings?: BillingUncheckedCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventTypesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventTypesInput, UserUncheckedCreateWithoutEventTypesInput>
  }

  export type EventTypeOnLocationCreateWithoutEventTypeInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutEventTypeOnLocationsInput
  }

  export type EventTypeOnLocationUncheckedCreateWithoutEventTypeInput = {
    id?: number
    locationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeOnLocationCreateOrConnectWithoutEventTypeInput = {
    where: EventTypeOnLocationWhereUniqueInput
    create: XOR<EventTypeOnLocationCreateWithoutEventTypeInput, EventTypeOnLocationUncheckedCreateWithoutEventTypeInput>
  }

  export type EventTypeOnLocationCreateManyEventTypeInputEnvelope = {
    data: Enumerable<EventTypeOnLocationCreateManyEventTypeInput>
    skipDuplicates?: boolean
  }

  export type AvailabilityScheduleCreateWithoutEventTypesInput = {
    name: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlots?: DateSlotCreateNestedManyWithoutAvailabilityScheduleInput
  }

  export type AvailabilityScheduleUncheckedCreateWithoutEventTypesInput = {
    id?: number
    name: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlots?: DateSlotUncheckedCreateNestedManyWithoutAvailabilityScheduleInput
  }

  export type AvailabilityScheduleCreateOrConnectWithoutEventTypesInput = {
    where: AvailabilityScheduleWhereUniqueInput
    create: XOR<AvailabilityScheduleCreateWithoutEventTypesInput, AvailabilityScheduleUncheckedCreateWithoutEventTypesInput>
  }

  export type EventTypeOnDaySlotCreateWithoutEventTypeInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    daySlot: DaySlotCreateNestedOneWithoutEventTypeSlotsInput
  }

  export type EventTypeOnDaySlotUncheckedCreateWithoutEventTypeInput = {
    id?: number
    daySlotId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeOnDaySlotCreateOrConnectWithoutEventTypeInput = {
    where: EventTypeOnDaySlotWhereUniqueInput
    create: XOR<EventTypeOnDaySlotCreateWithoutEventTypeInput, EventTypeOnDaySlotUncheckedCreateWithoutEventTypeInput>
  }

  export type EventTypeOnDaySlotCreateManyEventTypeInputEnvelope = {
    data: Enumerable<EventTypeOnDaySlotCreateManyEventTypeInput>
    skipDuplicates?: boolean
  }

  export type GroupMeetingCreateWithoutEventTypeInput = {
    totalPrice: number
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutGroupMeetingsInput
    customer: CustomerCreateNestedOneWithoutGroupMeetingsInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingUncheckedCreateWithoutEventTypeInput = {
    id?: number
    locationId: number
    customerId: number
    totalPrice: number
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingCreateOrConnectWithoutEventTypeInput = {
    where: GroupMeetingWhereUniqueInput
    create: XOR<GroupMeetingCreateWithoutEventTypeInput, GroupMeetingUncheckedCreateWithoutEventTypeInput>
  }

  export type GroupMeetingCreateManyEventTypeInputEnvelope = {
    data: Enumerable<GroupMeetingCreateManyEventTypeInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventTypesInput = {
    update: XOR<UserUpdateWithoutEventTypesInput, UserUncheckedUpdateWithoutEventTypesInput>
    create: XOR<UserCreateWithoutEventTypesInput, UserUncheckedCreateWithoutEventTypesInput>
  }

  export type UserUpdateWithoutEventTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billings?: BillingUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billings?: BillingUncheckedUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventTypeOnLocationUpsertWithWhereUniqueWithoutEventTypeInput = {
    where: EventTypeOnLocationWhereUniqueInput
    update: XOR<EventTypeOnLocationUpdateWithoutEventTypeInput, EventTypeOnLocationUncheckedUpdateWithoutEventTypeInput>
    create: XOR<EventTypeOnLocationCreateWithoutEventTypeInput, EventTypeOnLocationUncheckedCreateWithoutEventTypeInput>
  }

  export type EventTypeOnLocationUpdateWithWhereUniqueWithoutEventTypeInput = {
    where: EventTypeOnLocationWhereUniqueInput
    data: XOR<EventTypeOnLocationUpdateWithoutEventTypeInput, EventTypeOnLocationUncheckedUpdateWithoutEventTypeInput>
  }

  export type EventTypeOnLocationUpdateManyWithWhereWithoutEventTypeInput = {
    where: EventTypeOnLocationScalarWhereInput
    data: XOR<EventTypeOnLocationUpdateManyMutationInput, EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeOnLocationsInput>
  }

  export type EventTypeOnLocationScalarWhereInput = {
    AND?: Enumerable<EventTypeOnLocationScalarWhereInput>
    OR?: Enumerable<EventTypeOnLocationScalarWhereInput>
    NOT?: Enumerable<EventTypeOnLocationScalarWhereInput>
    id?: IntFilter | number
    eventTypeId?: IntFilter | number
    locationId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AvailabilityScheduleUpsertWithoutEventTypesInput = {
    update: XOR<AvailabilityScheduleUpdateWithoutEventTypesInput, AvailabilityScheduleUncheckedUpdateWithoutEventTypesInput>
    create: XOR<AvailabilityScheduleCreateWithoutEventTypesInput, AvailabilityScheduleUncheckedCreateWithoutEventTypesInput>
  }

  export type AvailabilityScheduleUpdateWithoutEventTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlots?: DateSlotUpdateManyWithoutAvailabilityScheduleNestedInput
  }

  export type AvailabilityScheduleUncheckedUpdateWithoutEventTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlots?: DateSlotUncheckedUpdateManyWithoutAvailabilityScheduleNestedInput
  }

  export type EventTypeOnDaySlotUpsertWithWhereUniqueWithoutEventTypeInput = {
    where: EventTypeOnDaySlotWhereUniqueInput
    update: XOR<EventTypeOnDaySlotUpdateWithoutEventTypeInput, EventTypeOnDaySlotUncheckedUpdateWithoutEventTypeInput>
    create: XOR<EventTypeOnDaySlotCreateWithoutEventTypeInput, EventTypeOnDaySlotUncheckedCreateWithoutEventTypeInput>
  }

  export type EventTypeOnDaySlotUpdateWithWhereUniqueWithoutEventTypeInput = {
    where: EventTypeOnDaySlotWhereUniqueInput
    data: XOR<EventTypeOnDaySlotUpdateWithoutEventTypeInput, EventTypeOnDaySlotUncheckedUpdateWithoutEventTypeInput>
  }

  export type EventTypeOnDaySlotUpdateManyWithWhereWithoutEventTypeInput = {
    where: EventTypeOnDaySlotScalarWhereInput
    data: XOR<EventTypeOnDaySlotUpdateManyMutationInput, EventTypeOnDaySlotUncheckedUpdateManyWithoutDaySlotsInput>
  }

  export type EventTypeOnDaySlotScalarWhereInput = {
    AND?: Enumerable<EventTypeOnDaySlotScalarWhereInput>
    OR?: Enumerable<EventTypeOnDaySlotScalarWhereInput>
    NOT?: Enumerable<EventTypeOnDaySlotScalarWhereInput>
    id?: IntFilter | number
    eventTypeId?: IntFilter | number
    daySlotId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type GroupMeetingUpsertWithWhereUniqueWithoutEventTypeInput = {
    where: GroupMeetingWhereUniqueInput
    update: XOR<GroupMeetingUpdateWithoutEventTypeInput, GroupMeetingUncheckedUpdateWithoutEventTypeInput>
    create: XOR<GroupMeetingCreateWithoutEventTypeInput, GroupMeetingUncheckedCreateWithoutEventTypeInput>
  }

  export type GroupMeetingUpdateWithWhereUniqueWithoutEventTypeInput = {
    where: GroupMeetingWhereUniqueInput
    data: XOR<GroupMeetingUpdateWithoutEventTypeInput, GroupMeetingUncheckedUpdateWithoutEventTypeInput>
  }

  export type GroupMeetingUpdateManyWithWhereWithoutEventTypeInput = {
    where: GroupMeetingScalarWhereInput
    data: XOR<GroupMeetingUpdateManyMutationInput, GroupMeetingUncheckedUpdateManyWithoutGroupMeetingsInput>
  }

  export type GroupMeetingScalarWhereInput = {
    AND?: Enumerable<GroupMeetingScalarWhereInput>
    OR?: Enumerable<GroupMeetingScalarWhereInput>
    NOT?: Enumerable<GroupMeetingScalarWhereInput>
    id?: IntFilter | number
    locationId?: IntFilter | number
    customerId?: IntFilter | number
    totalPrice?: IntFilter | number
    timezone?: StringFilter | string
    eventTypeId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type EventTypeOnDaySlotCreateWithoutDaySlotInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    eventType: EventTypeCreateNestedOneWithoutDaySlotsInput
  }

  export type EventTypeOnDaySlotUncheckedCreateWithoutDaySlotInput = {
    id?: number
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeOnDaySlotCreateOrConnectWithoutDaySlotInput = {
    where: EventTypeOnDaySlotWhereUniqueInput
    create: XOR<EventTypeOnDaySlotCreateWithoutDaySlotInput, EventTypeOnDaySlotUncheckedCreateWithoutDaySlotInput>
  }

  export type EventTypeOnDaySlotCreateManyDaySlotInputEnvelope = {
    data: Enumerable<EventTypeOnDaySlotCreateManyDaySlotInput>
    skipDuplicates?: boolean
  }

  export type DaySlotOnDateSlotCreateWithoutDaySlotInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlot: DateSlotCreateNestedOneWithoutDaySlotsInput
  }

  export type DaySlotOnDateSlotUncheckedCreateWithoutDaySlotInput = {
    id?: number
    dateSlotId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DaySlotOnDateSlotCreateOrConnectWithoutDaySlotInput = {
    where: DaySlotOnDateSlotWhereUniqueInput
    create: XOR<DaySlotOnDateSlotCreateWithoutDaySlotInput, DaySlotOnDateSlotUncheckedCreateWithoutDaySlotInput>
  }

  export type DaySlotOnDateSlotCreateManyDaySlotInputEnvelope = {
    data: Enumerable<DaySlotOnDateSlotCreateManyDaySlotInput>
    skipDuplicates?: boolean
  }

  export type EventTypeOnDaySlotUpsertWithWhereUniqueWithoutDaySlotInput = {
    where: EventTypeOnDaySlotWhereUniqueInput
    update: XOR<EventTypeOnDaySlotUpdateWithoutDaySlotInput, EventTypeOnDaySlotUncheckedUpdateWithoutDaySlotInput>
    create: XOR<EventTypeOnDaySlotCreateWithoutDaySlotInput, EventTypeOnDaySlotUncheckedCreateWithoutDaySlotInput>
  }

  export type EventTypeOnDaySlotUpdateWithWhereUniqueWithoutDaySlotInput = {
    where: EventTypeOnDaySlotWhereUniqueInput
    data: XOR<EventTypeOnDaySlotUpdateWithoutDaySlotInput, EventTypeOnDaySlotUncheckedUpdateWithoutDaySlotInput>
  }

  export type EventTypeOnDaySlotUpdateManyWithWhereWithoutDaySlotInput = {
    where: EventTypeOnDaySlotScalarWhereInput
    data: XOR<EventTypeOnDaySlotUpdateManyMutationInput, EventTypeOnDaySlotUncheckedUpdateManyWithoutEventTypeSlotsInput>
  }

  export type DaySlotOnDateSlotUpsertWithWhereUniqueWithoutDaySlotInput = {
    where: DaySlotOnDateSlotWhereUniqueInput
    update: XOR<DaySlotOnDateSlotUpdateWithoutDaySlotInput, DaySlotOnDateSlotUncheckedUpdateWithoutDaySlotInput>
    create: XOR<DaySlotOnDateSlotCreateWithoutDaySlotInput, DaySlotOnDateSlotUncheckedCreateWithoutDaySlotInput>
  }

  export type DaySlotOnDateSlotUpdateWithWhereUniqueWithoutDaySlotInput = {
    where: DaySlotOnDateSlotWhereUniqueInput
    data: XOR<DaySlotOnDateSlotUpdateWithoutDaySlotInput, DaySlotOnDateSlotUncheckedUpdateWithoutDaySlotInput>
  }

  export type DaySlotOnDateSlotUpdateManyWithWhereWithoutDaySlotInput = {
    where: DaySlotOnDateSlotScalarWhereInput
    data: XOR<DaySlotOnDateSlotUpdateManyMutationInput, DaySlotOnDateSlotUncheckedUpdateManyWithoutDateSlotsInput>
  }

  export type DaySlotOnDateSlotScalarWhereInput = {
    AND?: Enumerable<DaySlotOnDateSlotScalarWhereInput>
    OR?: Enumerable<DaySlotOnDateSlotScalarWhereInput>
    NOT?: Enumerable<DaySlotOnDateSlotScalarWhereInput>
    id?: IntFilter | number
    daySlotId?: IntFilter | number
    dateSlotId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DaySlotCreateWithoutDateSlotsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeSlots?: EventTypeOnDaySlotCreateNestedManyWithoutDaySlotInput
  }

  export type DaySlotUncheckedCreateWithoutDateSlotsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeSlots?: EventTypeOnDaySlotUncheckedCreateNestedManyWithoutDaySlotInput
  }

  export type DaySlotCreateOrConnectWithoutDateSlotsInput = {
    where: DaySlotWhereUniqueInput
    create: XOR<DaySlotCreateWithoutDateSlotsInput, DaySlotUncheckedCreateWithoutDateSlotsInput>
  }

  export type DateSlotCreateWithoutDaySlotsInput = {
    status?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutDateSlotsInput
    custormer?: CustomerCreateNestedOneWithoutDateSlotsInput
    timeSelects?: DateSlotOnTimeSelectCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotUncheckedCreateWithoutDaySlotsInput = {
    id?: number
    availabilityScheduleId?: number | null
    status?: string
    date: Date | string
    custormerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeSelects?: DateSlotOnTimeSelectUncheckedCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotCreateOrConnectWithoutDaySlotsInput = {
    where: DateSlotWhereUniqueInput
    create: XOR<DateSlotCreateWithoutDaySlotsInput, DateSlotUncheckedCreateWithoutDaySlotsInput>
  }

  export type DaySlotUpsertWithoutDateSlotsInput = {
    update: XOR<DaySlotUpdateWithoutDateSlotsInput, DaySlotUncheckedUpdateWithoutDateSlotsInput>
    create: XOR<DaySlotCreateWithoutDateSlotsInput, DaySlotUncheckedCreateWithoutDateSlotsInput>
  }

  export type DaySlotUpdateWithoutDateSlotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeSlots?: EventTypeOnDaySlotUpdateManyWithoutDaySlotNestedInput
  }

  export type DaySlotUncheckedUpdateWithoutDateSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeSlots?: EventTypeOnDaySlotUncheckedUpdateManyWithoutDaySlotNestedInput
  }

  export type DateSlotUpsertWithoutDaySlotsInput = {
    update: XOR<DateSlotUpdateWithoutDaySlotsInput, DateSlotUncheckedUpdateWithoutDaySlotsInput>
    create: XOR<DateSlotCreateWithoutDaySlotsInput, DateSlotUncheckedCreateWithoutDaySlotsInput>
  }

  export type DateSlotUpdateWithoutDaySlotsInput = {
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutDateSlotsNestedInput
    custormer?: CustomerUpdateOneWithoutDateSlotsNestedInput
    timeSelects?: DateSlotOnTimeSelectUpdateManyWithoutDateSlotNestedInput
  }

  export type DateSlotUncheckedUpdateWithoutDaySlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    custormerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSelects?: DateSlotOnTimeSelectUncheckedUpdateManyWithoutDateSlotNestedInput
  }

  export type EventTypeCreateWithoutDaySlotsInput = {
    name: string
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventTypesInput
    eventTypeOnLocations?: EventTypeOnLocationCreateNestedManyWithoutEventTypeInput
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutEventTypesInput
    groupMeetings?: GroupMeetingCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateWithoutDaySlotsInput = {
    id?: number
    name: string
    userId: number
    description: string
    price: number
    timeDuration: number
    availabilityScheduleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeCreateOrConnectWithoutDaySlotsInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutDaySlotsInput, EventTypeUncheckedCreateWithoutDaySlotsInput>
  }

  export type DaySlotCreateWithoutEventTypeSlotsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlots?: DaySlotOnDateSlotCreateNestedManyWithoutDaySlotInput
  }

  export type DaySlotUncheckedCreateWithoutEventTypeSlotsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlots?: DaySlotOnDateSlotUncheckedCreateNestedManyWithoutDaySlotInput
  }

  export type DaySlotCreateOrConnectWithoutEventTypeSlotsInput = {
    where: DaySlotWhereUniqueInput
    create: XOR<DaySlotCreateWithoutEventTypeSlotsInput, DaySlotUncheckedCreateWithoutEventTypeSlotsInput>
  }

  export type EventTypeUpsertWithoutDaySlotsInput = {
    update: XOR<EventTypeUpdateWithoutDaySlotsInput, EventTypeUncheckedUpdateWithoutDaySlotsInput>
    create: XOR<EventTypeCreateWithoutDaySlotsInput, EventTypeUncheckedCreateWithoutDaySlotsInput>
  }

  export type EventTypeUpdateWithoutDaySlotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventTypesNestedInput
    eventTypeOnLocations?: EventTypeOnLocationUpdateManyWithoutEventTypeNestedInput
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutEventTypesNestedInput
    groupMeetings?: GroupMeetingUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateWithoutDaySlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type DaySlotUpsertWithoutEventTypeSlotsInput = {
    update: XOR<DaySlotUpdateWithoutEventTypeSlotsInput, DaySlotUncheckedUpdateWithoutEventTypeSlotsInput>
    create: XOR<DaySlotCreateWithoutEventTypeSlotsInput, DaySlotUncheckedCreateWithoutEventTypeSlotsInput>
  }

  export type DaySlotUpdateWithoutEventTypeSlotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlots?: DaySlotOnDateSlotUpdateManyWithoutDaySlotNestedInput
  }

  export type DaySlotUncheckedUpdateWithoutEventTypeSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlots?: DaySlotOnDateSlotUncheckedUpdateManyWithoutDaySlotNestedInput
  }

  export type EventTypeOnLocationCreateWithoutLocationInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    eventType: EventTypeCreateNestedOneWithoutEventTypeOnLocationsInput
  }

  export type EventTypeOnLocationUncheckedCreateWithoutLocationInput = {
    id?: number
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeOnLocationCreateOrConnectWithoutLocationInput = {
    where: EventTypeOnLocationWhereUniqueInput
    create: XOR<EventTypeOnLocationCreateWithoutLocationInput, EventTypeOnLocationUncheckedCreateWithoutLocationInput>
  }

  export type EventTypeOnLocationCreateManyLocationInputEnvelope = {
    data: Enumerable<EventTypeOnLocationCreateManyLocationInput>
    skipDuplicates?: boolean
  }

  export type GroupMeetingCreateWithoutLocationInput = {
    totalPrice: number
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutGroupMeetingsInput
    eventType: EventTypeCreateNestedOneWithoutGroupMeetingsInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingUncheckedCreateWithoutLocationInput = {
    id?: number
    customerId: number
    totalPrice: number
    timezone: string
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingCreateOrConnectWithoutLocationInput = {
    where: GroupMeetingWhereUniqueInput
    create: XOR<GroupMeetingCreateWithoutLocationInput, GroupMeetingUncheckedCreateWithoutLocationInput>
  }

  export type GroupMeetingCreateManyLocationInputEnvelope = {
    data: Enumerable<GroupMeetingCreateManyLocationInput>
    skipDuplicates?: boolean
  }

  export type EventTypeOnLocationUpsertWithWhereUniqueWithoutLocationInput = {
    where: EventTypeOnLocationWhereUniqueInput
    update: XOR<EventTypeOnLocationUpdateWithoutLocationInput, EventTypeOnLocationUncheckedUpdateWithoutLocationInput>
    create: XOR<EventTypeOnLocationCreateWithoutLocationInput, EventTypeOnLocationUncheckedCreateWithoutLocationInput>
  }

  export type EventTypeOnLocationUpdateWithWhereUniqueWithoutLocationInput = {
    where: EventTypeOnLocationWhereUniqueInput
    data: XOR<EventTypeOnLocationUpdateWithoutLocationInput, EventTypeOnLocationUncheckedUpdateWithoutLocationInput>
  }

  export type EventTypeOnLocationUpdateManyWithWhereWithoutLocationInput = {
    where: EventTypeOnLocationScalarWhereInput
    data: XOR<EventTypeOnLocationUpdateManyMutationInput, EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeOnLocationsInput>
  }

  export type GroupMeetingUpsertWithWhereUniqueWithoutLocationInput = {
    where: GroupMeetingWhereUniqueInput
    update: XOR<GroupMeetingUpdateWithoutLocationInput, GroupMeetingUncheckedUpdateWithoutLocationInput>
    create: XOR<GroupMeetingCreateWithoutLocationInput, GroupMeetingUncheckedCreateWithoutLocationInput>
  }

  export type GroupMeetingUpdateWithWhereUniqueWithoutLocationInput = {
    where: GroupMeetingWhereUniqueInput
    data: XOR<GroupMeetingUpdateWithoutLocationInput, GroupMeetingUncheckedUpdateWithoutLocationInput>
  }

  export type GroupMeetingUpdateManyWithWhereWithoutLocationInput = {
    where: GroupMeetingScalarWhereInput
    data: XOR<GroupMeetingUpdateManyMutationInput, GroupMeetingUncheckedUpdateManyWithoutGroupMeetingsInput>
  }

  export type EventTypeCreateWithoutEventTypeOnLocationsInput = {
    name: string
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventTypesInput
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutEventTypesInput
    daySlots?: EventTypeOnDaySlotCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateWithoutEventTypeOnLocationsInput = {
    id?: number
    name: string
    userId: number
    description: string
    price: number
    timeDuration: number
    availabilityScheduleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    daySlots?: EventTypeOnDaySlotUncheckedCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeCreateOrConnectWithoutEventTypeOnLocationsInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutEventTypeOnLocationsInput, EventTypeUncheckedCreateWithoutEventTypeOnLocationsInput>
  }

  export type LocationCreateWithoutEventTypeOnLocationsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMeetings?: GroupMeetingCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutEventTypeOnLocationsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutEventTypeOnLocationsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutEventTypeOnLocationsInput, LocationUncheckedCreateWithoutEventTypeOnLocationsInput>
  }

  export type EventTypeUpsertWithoutEventTypeOnLocationsInput = {
    update: XOR<EventTypeUpdateWithoutEventTypeOnLocationsInput, EventTypeUncheckedUpdateWithoutEventTypeOnLocationsInput>
    create: XOR<EventTypeCreateWithoutEventTypeOnLocationsInput, EventTypeUncheckedCreateWithoutEventTypeOnLocationsInput>
  }

  export type EventTypeUpdateWithoutEventTypeOnLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventTypesNestedInput
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutEventTypesNestedInput
    daySlots?: EventTypeOnDaySlotUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateWithoutEventTypeOnLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daySlots?: EventTypeOnDaySlotUncheckedUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type LocationUpsertWithoutEventTypeOnLocationsInput = {
    update: XOR<LocationUpdateWithoutEventTypeOnLocationsInput, LocationUncheckedUpdateWithoutEventTypeOnLocationsInput>
    create: XOR<LocationCreateWithoutEventTypeOnLocationsInput, LocationUncheckedCreateWithoutEventTypeOnLocationsInput>
  }

  export type LocationUpdateWithoutEventTypeOnLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMeetings?: GroupMeetingUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutEventTypeOnLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type EventTypeCreateWithoutAvailabilityScheduleInput = {
    name: string
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventTypesInput
    eventTypeOnLocations?: EventTypeOnLocationCreateNestedManyWithoutEventTypeInput
    daySlots?: EventTypeOnDaySlotCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateWithoutAvailabilityScheduleInput = {
    id?: number
    name: string
    userId: number
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedCreateNestedManyWithoutEventTypeInput
    daySlots?: EventTypeOnDaySlotUncheckedCreateNestedManyWithoutEventTypeInput
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeCreateOrConnectWithoutAvailabilityScheduleInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutAvailabilityScheduleInput, EventTypeUncheckedCreateWithoutAvailabilityScheduleInput>
  }

  export type EventTypeCreateManyAvailabilityScheduleInputEnvelope = {
    data: Enumerable<EventTypeCreateManyAvailabilityScheduleInput>
    skipDuplicates?: boolean
  }

  export type DateSlotCreateWithoutAvailabilityScheduleInput = {
    status?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    custormer?: CustomerCreateNestedOneWithoutDateSlotsInput
    timeSelects?: DateSlotOnTimeSelectCreateNestedManyWithoutDateSlotInput
    DaySlots?: DaySlotOnDateSlotCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotUncheckedCreateWithoutAvailabilityScheduleInput = {
    id?: number
    status?: string
    date: Date | string
    custormerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeSelects?: DateSlotOnTimeSelectUncheckedCreateNestedManyWithoutDateSlotInput
    DaySlots?: DaySlotOnDateSlotUncheckedCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotCreateOrConnectWithoutAvailabilityScheduleInput = {
    where: DateSlotWhereUniqueInput
    create: XOR<DateSlotCreateWithoutAvailabilityScheduleInput, DateSlotUncheckedCreateWithoutAvailabilityScheduleInput>
  }

  export type DateSlotCreateManyAvailabilityScheduleInputEnvelope = {
    data: Enumerable<DateSlotCreateManyAvailabilityScheduleInput>
    skipDuplicates?: boolean
  }

  export type EventTypeUpsertWithWhereUniqueWithoutAvailabilityScheduleInput = {
    where: EventTypeWhereUniqueInput
    update: XOR<EventTypeUpdateWithoutAvailabilityScheduleInput, EventTypeUncheckedUpdateWithoutAvailabilityScheduleInput>
    create: XOR<EventTypeCreateWithoutAvailabilityScheduleInput, EventTypeUncheckedCreateWithoutAvailabilityScheduleInput>
  }

  export type EventTypeUpdateWithWhereUniqueWithoutAvailabilityScheduleInput = {
    where: EventTypeWhereUniqueInput
    data: XOR<EventTypeUpdateWithoutAvailabilityScheduleInput, EventTypeUncheckedUpdateWithoutAvailabilityScheduleInput>
  }

  export type EventTypeUpdateManyWithWhereWithoutAvailabilityScheduleInput = {
    where: EventTypeScalarWhereInput
    data: XOR<EventTypeUpdateManyMutationInput, EventTypeUncheckedUpdateManyWithoutEventTypesInput>
  }

  export type DateSlotUpsertWithWhereUniqueWithoutAvailabilityScheduleInput = {
    where: DateSlotWhereUniqueInput
    update: XOR<DateSlotUpdateWithoutAvailabilityScheduleInput, DateSlotUncheckedUpdateWithoutAvailabilityScheduleInput>
    create: XOR<DateSlotCreateWithoutAvailabilityScheduleInput, DateSlotUncheckedCreateWithoutAvailabilityScheduleInput>
  }

  export type DateSlotUpdateWithWhereUniqueWithoutAvailabilityScheduleInput = {
    where: DateSlotWhereUniqueInput
    data: XOR<DateSlotUpdateWithoutAvailabilityScheduleInput, DateSlotUncheckedUpdateWithoutAvailabilityScheduleInput>
  }

  export type DateSlotUpdateManyWithWhereWithoutAvailabilityScheduleInput = {
    where: DateSlotScalarWhereInput
    data: XOR<DateSlotUpdateManyMutationInput, DateSlotUncheckedUpdateManyWithoutDateSlotsInput>
  }

  export type DateSlotScalarWhereInput = {
    AND?: Enumerable<DateSlotScalarWhereInput>
    OR?: Enumerable<DateSlotScalarWhereInput>
    NOT?: Enumerable<DateSlotScalarWhereInput>
    id?: IntFilter | number
    availabilityScheduleId?: IntNullableFilter | number | null
    status?: StringFilter | string
    date?: DateTimeFilter | Date | string
    custormerId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AvailabilityScheduleCreateWithoutDateSlotsInput = {
    name: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutAvailabilityScheduleInput
  }

  export type AvailabilityScheduleUncheckedCreateWithoutDateSlotsInput = {
    id?: number
    name: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutAvailabilityScheduleInput
  }

  export type AvailabilityScheduleCreateOrConnectWithoutDateSlotsInput = {
    where: AvailabilityScheduleWhereUniqueInput
    create: XOR<AvailabilityScheduleCreateWithoutDateSlotsInput, AvailabilityScheduleUncheckedCreateWithoutDateSlotsInput>
  }

  export type CustomerCreateWithoutDateSlotsInput = {
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMeetings?: GroupMeetingCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutDateSlotsInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMeetings?: GroupMeetingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutDateSlotsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutDateSlotsInput, CustomerUncheckedCreateWithoutDateSlotsInput>
  }

  export type DateSlotOnTimeSelectCreateWithoutDateSlotInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    timeSelect: TimeSelectCreateNestedOneWithoutDateSlotsInput
  }

  export type DateSlotOnTimeSelectUncheckedCreateWithoutDateSlotInput = {
    id?: number
    timeSelectId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DateSlotOnTimeSelectCreateOrConnectWithoutDateSlotInput = {
    where: DateSlotOnTimeSelectWhereUniqueInput
    create: XOR<DateSlotOnTimeSelectCreateWithoutDateSlotInput, DateSlotOnTimeSelectUncheckedCreateWithoutDateSlotInput>
  }

  export type DateSlotOnTimeSelectCreateManyDateSlotInputEnvelope = {
    data: Enumerable<DateSlotOnTimeSelectCreateManyDateSlotInput>
    skipDuplicates?: boolean
  }

  export type DaySlotOnDateSlotCreateWithoutDateSlotInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    daySlot: DaySlotCreateNestedOneWithoutDateSlotsInput
  }

  export type DaySlotOnDateSlotUncheckedCreateWithoutDateSlotInput = {
    id?: number
    daySlotId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DaySlotOnDateSlotCreateOrConnectWithoutDateSlotInput = {
    where: DaySlotOnDateSlotWhereUniqueInput
    create: XOR<DaySlotOnDateSlotCreateWithoutDateSlotInput, DaySlotOnDateSlotUncheckedCreateWithoutDateSlotInput>
  }

  export type DaySlotOnDateSlotCreateManyDateSlotInputEnvelope = {
    data: Enumerable<DaySlotOnDateSlotCreateManyDateSlotInput>
    skipDuplicates?: boolean
  }

  export type AvailabilityScheduleUpsertWithoutDateSlotsInput = {
    update: XOR<AvailabilityScheduleUpdateWithoutDateSlotsInput, AvailabilityScheduleUncheckedUpdateWithoutDateSlotsInput>
    create: XOR<AvailabilityScheduleCreateWithoutDateSlotsInput, AvailabilityScheduleUncheckedCreateWithoutDateSlotsInput>
  }

  export type AvailabilityScheduleUpdateWithoutDateSlotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutAvailabilityScheduleNestedInput
  }

  export type AvailabilityScheduleUncheckedUpdateWithoutDateSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutAvailabilityScheduleNestedInput
  }

  export type CustomerUpsertWithoutDateSlotsInput = {
    update: XOR<CustomerUpdateWithoutDateSlotsInput, CustomerUncheckedUpdateWithoutDateSlotsInput>
    create: XOR<CustomerCreateWithoutDateSlotsInput, CustomerUncheckedCreateWithoutDateSlotsInput>
  }

  export type CustomerUpdateWithoutDateSlotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMeetings?: GroupMeetingUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutDateSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type DateSlotOnTimeSelectUpsertWithWhereUniqueWithoutDateSlotInput = {
    where: DateSlotOnTimeSelectWhereUniqueInput
    update: XOR<DateSlotOnTimeSelectUpdateWithoutDateSlotInput, DateSlotOnTimeSelectUncheckedUpdateWithoutDateSlotInput>
    create: XOR<DateSlotOnTimeSelectCreateWithoutDateSlotInput, DateSlotOnTimeSelectUncheckedCreateWithoutDateSlotInput>
  }

  export type DateSlotOnTimeSelectUpdateWithWhereUniqueWithoutDateSlotInput = {
    where: DateSlotOnTimeSelectWhereUniqueInput
    data: XOR<DateSlotOnTimeSelectUpdateWithoutDateSlotInput, DateSlotOnTimeSelectUncheckedUpdateWithoutDateSlotInput>
  }

  export type DateSlotOnTimeSelectUpdateManyWithWhereWithoutDateSlotInput = {
    where: DateSlotOnTimeSelectScalarWhereInput
    data: XOR<DateSlotOnTimeSelectUpdateManyMutationInput, DateSlotOnTimeSelectUncheckedUpdateManyWithoutTimeSelectsInput>
  }

  export type DateSlotOnTimeSelectScalarWhereInput = {
    AND?: Enumerable<DateSlotOnTimeSelectScalarWhereInput>
    OR?: Enumerable<DateSlotOnTimeSelectScalarWhereInput>
    NOT?: Enumerable<DateSlotOnTimeSelectScalarWhereInput>
    id?: IntFilter | number
    dateSlotId?: IntFilter | number
    timeSelectId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DaySlotOnDateSlotUpsertWithWhereUniqueWithoutDateSlotInput = {
    where: DaySlotOnDateSlotWhereUniqueInput
    update: XOR<DaySlotOnDateSlotUpdateWithoutDateSlotInput, DaySlotOnDateSlotUncheckedUpdateWithoutDateSlotInput>
    create: XOR<DaySlotOnDateSlotCreateWithoutDateSlotInput, DaySlotOnDateSlotUncheckedCreateWithoutDateSlotInput>
  }

  export type DaySlotOnDateSlotUpdateWithWhereUniqueWithoutDateSlotInput = {
    where: DaySlotOnDateSlotWhereUniqueInput
    data: XOR<DaySlotOnDateSlotUpdateWithoutDateSlotInput, DaySlotOnDateSlotUncheckedUpdateWithoutDateSlotInput>
  }

  export type DaySlotOnDateSlotUpdateManyWithWhereWithoutDateSlotInput = {
    where: DaySlotOnDateSlotScalarWhereInput
    data: XOR<DaySlotOnDateSlotUpdateManyMutationInput, DaySlotOnDateSlotUncheckedUpdateManyWithoutDaySlotsInput>
  }

  export type DateSlotOnTimeSelectCreateWithoutTimeSelectInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlot: DateSlotCreateNestedOneWithoutTimeSelectsInput
  }

  export type DateSlotOnTimeSelectUncheckedCreateWithoutTimeSelectInput = {
    id?: number
    dateSlotId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DateSlotOnTimeSelectCreateOrConnectWithoutTimeSelectInput = {
    where: DateSlotOnTimeSelectWhereUniqueInput
    create: XOR<DateSlotOnTimeSelectCreateWithoutTimeSelectInput, DateSlotOnTimeSelectUncheckedCreateWithoutTimeSelectInput>
  }

  export type DateSlotOnTimeSelectCreateManyTimeSelectInputEnvelope = {
    data: Enumerable<DateSlotOnTimeSelectCreateManyTimeSelectInput>
    skipDuplicates?: boolean
  }

  export type DateSlotOnTimeSelectUpsertWithWhereUniqueWithoutTimeSelectInput = {
    where: DateSlotOnTimeSelectWhereUniqueInput
    update: XOR<DateSlotOnTimeSelectUpdateWithoutTimeSelectInput, DateSlotOnTimeSelectUncheckedUpdateWithoutTimeSelectInput>
    create: XOR<DateSlotOnTimeSelectCreateWithoutTimeSelectInput, DateSlotOnTimeSelectUncheckedCreateWithoutTimeSelectInput>
  }

  export type DateSlotOnTimeSelectUpdateWithWhereUniqueWithoutTimeSelectInput = {
    where: DateSlotOnTimeSelectWhereUniqueInput
    data: XOR<DateSlotOnTimeSelectUpdateWithoutTimeSelectInput, DateSlotOnTimeSelectUncheckedUpdateWithoutTimeSelectInput>
  }

  export type DateSlotOnTimeSelectUpdateManyWithWhereWithoutTimeSelectInput = {
    where: DateSlotOnTimeSelectScalarWhereInput
    data: XOR<DateSlotOnTimeSelectUpdateManyMutationInput, DateSlotOnTimeSelectUncheckedUpdateManyWithoutDateSlotsInput>
  }

  export type GroupMeetingCreateWithoutCustomerInput = {
    totalPrice: number
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutGroupMeetingsInput
    eventType: EventTypeCreateNestedOneWithoutGroupMeetingsInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingUncheckedCreateWithoutCustomerInput = {
    id?: number
    locationId: number
    totalPrice: number
    timezone: string
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutGroupMeetingInput
  }

  export type GroupMeetingCreateOrConnectWithoutCustomerInput = {
    where: GroupMeetingWhereUniqueInput
    create: XOR<GroupMeetingCreateWithoutCustomerInput, GroupMeetingUncheckedCreateWithoutCustomerInput>
  }

  export type GroupMeetingCreateManyCustomerInputEnvelope = {
    data: Enumerable<GroupMeetingCreateManyCustomerInput>
    skipDuplicates?: boolean
  }

  export type DateSlotCreateWithoutCustormerInput = {
    status?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutDateSlotsInput
    timeSelects?: DateSlotOnTimeSelectCreateNestedManyWithoutDateSlotInput
    DaySlots?: DaySlotOnDateSlotCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotUncheckedCreateWithoutCustormerInput = {
    id?: number
    availabilityScheduleId?: number | null
    status?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeSelects?: DateSlotOnTimeSelectUncheckedCreateNestedManyWithoutDateSlotInput
    DaySlots?: DaySlotOnDateSlotUncheckedCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotCreateOrConnectWithoutCustormerInput = {
    where: DateSlotWhereUniqueInput
    create: XOR<DateSlotCreateWithoutCustormerInput, DateSlotUncheckedCreateWithoutCustormerInput>
  }

  export type DateSlotCreateManyCustormerInputEnvelope = {
    data: Enumerable<DateSlotCreateManyCustormerInput>
    skipDuplicates?: boolean
  }

  export type GroupMeetingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: GroupMeetingWhereUniqueInput
    update: XOR<GroupMeetingUpdateWithoutCustomerInput, GroupMeetingUncheckedUpdateWithoutCustomerInput>
    create: XOR<GroupMeetingCreateWithoutCustomerInput, GroupMeetingUncheckedCreateWithoutCustomerInput>
  }

  export type GroupMeetingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: GroupMeetingWhereUniqueInput
    data: XOR<GroupMeetingUpdateWithoutCustomerInput, GroupMeetingUncheckedUpdateWithoutCustomerInput>
  }

  export type GroupMeetingUpdateManyWithWhereWithoutCustomerInput = {
    where: GroupMeetingScalarWhereInput
    data: XOR<GroupMeetingUpdateManyMutationInput, GroupMeetingUncheckedUpdateManyWithoutGroupMeetingsInput>
  }

  export type DateSlotUpsertWithWhereUniqueWithoutCustormerInput = {
    where: DateSlotWhereUniqueInput
    update: XOR<DateSlotUpdateWithoutCustormerInput, DateSlotUncheckedUpdateWithoutCustormerInput>
    create: XOR<DateSlotCreateWithoutCustormerInput, DateSlotUncheckedCreateWithoutCustormerInput>
  }

  export type DateSlotUpdateWithWhereUniqueWithoutCustormerInput = {
    where: DateSlotWhereUniqueInput
    data: XOR<DateSlotUpdateWithoutCustormerInput, DateSlotUncheckedUpdateWithoutCustormerInput>
  }

  export type DateSlotUpdateManyWithWhereWithoutCustormerInput = {
    where: DateSlotScalarWhereInput
    data: XOR<DateSlotUpdateManyMutationInput, DateSlotUncheckedUpdateManyWithoutDateSlotsInput>
  }

  export type UserCreateWithoutBillingsInput = {
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBillingsInput = {
    id?: number
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutUserInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBillingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBillingsInput, UserUncheckedCreateWithoutBillingsInput>
  }

  export type UserUpsertWithoutBillingsInput = {
    update: XOR<UserUpdateWithoutBillingsInput, UserUncheckedUpdateWithoutBillingsInput>
    create: XOR<UserCreateWithoutBillingsInput, UserUncheckedCreateWithoutBillingsInput>
  }

  export type UserUpdateWithoutBillingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBillingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutUserNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LocationCreateWithoutGroupMeetingsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutGroupMeetingsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutGroupMeetingsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutGroupMeetingsInput, LocationUncheckedCreateWithoutGroupMeetingsInput>
  }

  export type CustomerCreateWithoutGroupMeetingsInput = {
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlots?: DateSlotCreateNestedManyWithoutCustormerInput
  }

  export type CustomerUncheckedCreateWithoutGroupMeetingsInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dateSlots?: DateSlotUncheckedCreateNestedManyWithoutCustormerInput
  }

  export type CustomerCreateOrConnectWithoutGroupMeetingsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutGroupMeetingsInput, CustomerUncheckedCreateWithoutGroupMeetingsInput>
  }

  export type EventTypeCreateWithoutGroupMeetingsInput = {
    name: string
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventTypesInput
    eventTypeOnLocations?: EventTypeOnLocationCreateNestedManyWithoutEventTypeInput
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutEventTypesInput
    daySlots?: EventTypeOnDaySlotCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateWithoutGroupMeetingsInput = {
    id?: number
    name: string
    userId: number
    description: string
    price: number
    timeDuration: number
    availabilityScheduleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedCreateNestedManyWithoutEventTypeInput
    daySlots?: EventTypeOnDaySlotUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeCreateOrConnectWithoutGroupMeetingsInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutGroupMeetingsInput, EventTypeUncheckedCreateWithoutGroupMeetingsInput>
  }

  export type UserOnGroupMeetingCreateWithoutGroupMeetingInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserOnGroupMeetingsInput
  }

  export type UserOnGroupMeetingUncheckedCreateWithoutGroupMeetingInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnGroupMeetingCreateOrConnectWithoutGroupMeetingInput = {
    where: UserOnGroupMeetingWhereUniqueInput
    create: XOR<UserOnGroupMeetingCreateWithoutGroupMeetingInput, UserOnGroupMeetingUncheckedCreateWithoutGroupMeetingInput>
  }

  export type UserOnGroupMeetingCreateManyGroupMeetingInputEnvelope = {
    data: Enumerable<UserOnGroupMeetingCreateManyGroupMeetingInput>
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithoutGroupMeetingsInput = {
    update: XOR<LocationUpdateWithoutGroupMeetingsInput, LocationUncheckedUpdateWithoutGroupMeetingsInput>
    create: XOR<LocationCreateWithoutGroupMeetingsInput, LocationUncheckedCreateWithoutGroupMeetingsInput>
  }

  export type LocationUpdateWithoutGroupMeetingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutGroupMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type CustomerUpsertWithoutGroupMeetingsInput = {
    update: XOR<CustomerUpdateWithoutGroupMeetingsInput, CustomerUncheckedUpdateWithoutGroupMeetingsInput>
    create: XOR<CustomerCreateWithoutGroupMeetingsInput, CustomerUncheckedCreateWithoutGroupMeetingsInput>
  }

  export type CustomerUpdateWithoutGroupMeetingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlots?: DateSlotUpdateManyWithoutCustormerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutGroupMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlots?: DateSlotUncheckedUpdateManyWithoutCustormerNestedInput
  }

  export type EventTypeUpsertWithoutGroupMeetingsInput = {
    update: XOR<EventTypeUpdateWithoutGroupMeetingsInput, EventTypeUncheckedUpdateWithoutGroupMeetingsInput>
    create: XOR<EventTypeCreateWithoutGroupMeetingsInput, EventTypeUncheckedCreateWithoutGroupMeetingsInput>
  }

  export type EventTypeUpdateWithoutGroupMeetingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventTypesNestedInput
    eventTypeOnLocations?: EventTypeOnLocationUpdateManyWithoutEventTypeNestedInput
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutEventTypesNestedInput
    daySlots?: EventTypeOnDaySlotUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateWithoutGroupMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeNestedInput
    daySlots?: EventTypeOnDaySlotUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type UserOnGroupMeetingUpsertWithWhereUniqueWithoutGroupMeetingInput = {
    where: UserOnGroupMeetingWhereUniqueInput
    update: XOR<UserOnGroupMeetingUpdateWithoutGroupMeetingInput, UserOnGroupMeetingUncheckedUpdateWithoutGroupMeetingInput>
    create: XOR<UserOnGroupMeetingCreateWithoutGroupMeetingInput, UserOnGroupMeetingUncheckedCreateWithoutGroupMeetingInput>
  }

  export type UserOnGroupMeetingUpdateWithWhereUniqueWithoutGroupMeetingInput = {
    where: UserOnGroupMeetingWhereUniqueInput
    data: XOR<UserOnGroupMeetingUpdateWithoutGroupMeetingInput, UserOnGroupMeetingUncheckedUpdateWithoutGroupMeetingInput>
  }

  export type UserOnGroupMeetingUpdateManyWithWhereWithoutGroupMeetingInput = {
    where: UserOnGroupMeetingScalarWhereInput
    data: XOR<UserOnGroupMeetingUpdateManyMutationInput, UserOnGroupMeetingUncheckedUpdateManyWithoutUserOnGroupMeetingsInput>
  }

  export type UserCreateWithoutUserOnGroupMeetingsInput = {
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutUserInput
    billings?: BillingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserOnGroupMeetingsInput = {
    id?: number
    name: string
    username: string
    firebaseUid: string
    subscription?: string | null
    mobileNumber?: string | null
    userLink?: string | null
    job?: string | null
    education?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutUserInput
    billings?: BillingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserOnGroupMeetingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserOnGroupMeetingsInput, UserUncheckedCreateWithoutUserOnGroupMeetingsInput>
  }

  export type GroupMeetingCreateWithoutUserOnGroupMeetingsInput = {
    totalPrice: number
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutGroupMeetingsInput
    customer: CustomerCreateNestedOneWithoutGroupMeetingsInput
    eventType: EventTypeCreateNestedOneWithoutGroupMeetingsInput
  }

  export type GroupMeetingUncheckedCreateWithoutUserOnGroupMeetingsInput = {
    id?: number
    locationId: number
    customerId: number
    totalPrice: number
    timezone: string
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMeetingCreateOrConnectWithoutUserOnGroupMeetingsInput = {
    where: GroupMeetingWhereUniqueInput
    create: XOR<GroupMeetingCreateWithoutUserOnGroupMeetingsInput, GroupMeetingUncheckedCreateWithoutUserOnGroupMeetingsInput>
  }

  export type UserUpsertWithoutUserOnGroupMeetingsInput = {
    update: XOR<UserUpdateWithoutUserOnGroupMeetingsInput, UserUncheckedUpdateWithoutUserOnGroupMeetingsInput>
    create: XOR<UserCreateWithoutUserOnGroupMeetingsInput, UserUncheckedCreateWithoutUserOnGroupMeetingsInput>
  }

  export type UserUpdateWithoutUserOnGroupMeetingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutUserNestedInput
    billings?: BillingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserOnGroupMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    subscription?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    userLink?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutUserNestedInput
    billings?: BillingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupMeetingUpsertWithoutUserOnGroupMeetingsInput = {
    update: XOR<GroupMeetingUpdateWithoutUserOnGroupMeetingsInput, GroupMeetingUncheckedUpdateWithoutUserOnGroupMeetingsInput>
    create: XOR<GroupMeetingCreateWithoutUserOnGroupMeetingsInput, GroupMeetingUncheckedCreateWithoutUserOnGroupMeetingsInput>
  }

  export type GroupMeetingUpdateWithoutUserOnGroupMeetingsInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutGroupMeetingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutGroupMeetingsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutGroupMeetingsNestedInput
  }

  export type GroupMeetingUncheckedUpdateWithoutUserOnGroupMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    eventTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateSlotCreateWithoutTimeSelectsInput = {
    status?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilitySchedule?: AvailabilityScheduleCreateNestedOneWithoutDateSlotsInput
    custormer?: CustomerCreateNestedOneWithoutDateSlotsInput
    DaySlots?: DaySlotOnDateSlotCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotUncheckedCreateWithoutTimeSelectsInput = {
    id?: number
    availabilityScheduleId?: number | null
    status?: string
    date: Date | string
    custormerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    DaySlots?: DaySlotOnDateSlotUncheckedCreateNestedManyWithoutDateSlotInput
  }

  export type DateSlotCreateOrConnectWithoutTimeSelectsInput = {
    where: DateSlotWhereUniqueInput
    create: XOR<DateSlotCreateWithoutTimeSelectsInput, DateSlotUncheckedCreateWithoutTimeSelectsInput>
  }

  export type TimeSelectCreateWithoutDateSlotsInput = {
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeSelectUncheckedCreateWithoutDateSlotsInput = {
    id?: number
    startTime: number
    endTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeSelectCreateOrConnectWithoutDateSlotsInput = {
    where: TimeSelectWhereUniqueInput
    create: XOR<TimeSelectCreateWithoutDateSlotsInput, TimeSelectUncheckedCreateWithoutDateSlotsInput>
  }

  export type DateSlotUpsertWithoutTimeSelectsInput = {
    update: XOR<DateSlotUpdateWithoutTimeSelectsInput, DateSlotUncheckedUpdateWithoutTimeSelectsInput>
    create: XOR<DateSlotCreateWithoutTimeSelectsInput, DateSlotUncheckedCreateWithoutTimeSelectsInput>
  }

  export type DateSlotUpdateWithoutTimeSelectsInput = {
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutDateSlotsNestedInput
    custormer?: CustomerUpdateOneWithoutDateSlotsNestedInput
    DaySlots?: DaySlotOnDateSlotUpdateManyWithoutDateSlotNestedInput
  }

  export type DateSlotUncheckedUpdateWithoutTimeSelectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    custormerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DaySlots?: DaySlotOnDateSlotUncheckedUpdateManyWithoutDateSlotNestedInput
  }

  export type TimeSelectUpsertWithoutDateSlotsInput = {
    update: XOR<TimeSelectUpdateWithoutDateSlotsInput, TimeSelectUncheckedUpdateWithoutDateSlotsInput>
    create: XOR<TimeSelectCreateWithoutDateSlotsInput, TimeSelectUncheckedCreateWithoutDateSlotsInput>
  }

  export type TimeSelectUpdateWithoutDateSlotsInput = {
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeSelectUncheckedUpdateWithoutDateSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: IntFieldUpdateOperationsInput | number
    endTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeCreateManyUserInput = {
    id?: number
    name: string
    description: string
    price: number
    timeDuration: number
    availabilityScheduleId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillingCreateManyUserInput = {
    id?: number
    subscriptionMonth: number
    subscriptionPrice: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnGroupMeetingCreateManyUserInput = {
    id?: number
    groupMeetingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUpdateManyWithoutEventTypeNestedInput
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutEventTypesNestedInput
    daySlots?: EventTypeOnDaySlotUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeNestedInput
    daySlots?: EventTypeOnDaySlotUncheckedUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateManyWithoutEventTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingUpdateWithoutUserInput = {
    subscriptionMonth?: IntFieldUpdateOperationsInput | number
    subscriptionPrice?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionMonth?: IntFieldUpdateOperationsInput | number
    subscriptionPrice?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingUncheckedUpdateManyWithoutBillingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionMonth?: IntFieldUpdateOperationsInput | number
    subscriptionPrice?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnGroupMeetingUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMeeting?: GroupMeetingUpdateOneRequiredWithoutUserOnGroupMeetingsNestedInput
  }

  export type UserOnGroupMeetingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupMeetingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnGroupMeetingUncheckedUpdateManyWithoutUserOnGroupMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupMeetingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnLocationCreateManyEventTypeInput = {
    id?: number
    locationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeOnDaySlotCreateManyEventTypeInput = {
    id?: number
    daySlotId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMeetingCreateManyEventTypeInput = {
    id?: number
    locationId: number
    customerId: number
    totalPrice: number
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeOnLocationUpdateWithoutEventTypeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutEventTypeOnLocationsNestedInput
  }

  export type EventTypeOnLocationUncheckedUpdateWithoutEventTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeOnLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnDaySlotUpdateWithoutEventTypeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daySlot?: DaySlotUpdateOneRequiredWithoutEventTypeSlotsNestedInput
  }

  export type EventTypeOnDaySlotUncheckedUpdateWithoutEventTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    daySlotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnDaySlotUncheckedUpdateManyWithoutDaySlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    daySlotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMeetingUpdateWithoutEventTypeInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutGroupMeetingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutGroupMeetingsNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutGroupMeetingNestedInput
  }

  export type GroupMeetingUncheckedUpdateWithoutEventTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutGroupMeetingNestedInput
  }

  export type GroupMeetingUncheckedUpdateManyWithoutGroupMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnDaySlotCreateManyDaySlotInput = {
    id?: number
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DaySlotOnDateSlotCreateManyDaySlotInput = {
    id?: number
    dateSlotId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeOnDaySlotUpdateWithoutDaySlotInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EventTypeUpdateOneRequiredWithoutDaySlotsNestedInput
  }

  export type EventTypeOnDaySlotUncheckedUpdateWithoutDaySlotInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnDaySlotUncheckedUpdateManyWithoutEventTypeSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DaySlotOnDateSlotUpdateWithoutDaySlotInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlot?: DateSlotUpdateOneRequiredWithoutDaySlotsNestedInput
  }

  export type DaySlotOnDateSlotUncheckedUpdateWithoutDaySlotInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateSlotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DaySlotOnDateSlotUncheckedUpdateManyWithoutDateSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateSlotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeOnLocationCreateManyLocationInput = {
    id?: number
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMeetingCreateManyLocationInput = {
    id?: number
    customerId: number
    totalPrice: number
    timezone: string
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeOnLocationUpdateWithoutLocationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EventTypeUpdateOneRequiredWithoutEventTypeOnLocationsNestedInput
  }

  export type EventTypeOnLocationUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMeetingUpdateWithoutLocationInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutGroupMeetingsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutGroupMeetingsNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutGroupMeetingNestedInput
  }

  export type GroupMeetingUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    eventTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutGroupMeetingNestedInput
  }

  export type EventTypeCreateManyAvailabilityScheduleInput = {
    id?: number
    name: string
    userId: number
    description: string
    price: number
    timeDuration: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DateSlotCreateManyAvailabilityScheduleInput = {
    id?: number
    status?: string
    date: Date | string
    custormerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeUpdateWithoutAvailabilityScheduleInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventTypesNestedInput
    eventTypeOnLocations?: EventTypeOnLocationUpdateManyWithoutEventTypeNestedInput
    daySlots?: EventTypeOnDaySlotUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateWithoutAvailabilityScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    timeDuration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypeOnLocations?: EventTypeOnLocationUncheckedUpdateManyWithoutEventTypeNestedInput
    daySlots?: EventTypeOnDaySlotUncheckedUpdateManyWithoutEventTypeNestedInput
    groupMeetings?: GroupMeetingUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type DateSlotUpdateWithoutAvailabilityScheduleInput = {
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    custormer?: CustomerUpdateOneWithoutDateSlotsNestedInput
    timeSelects?: DateSlotOnTimeSelectUpdateManyWithoutDateSlotNestedInput
    DaySlots?: DaySlotOnDateSlotUpdateManyWithoutDateSlotNestedInput
  }

  export type DateSlotUncheckedUpdateWithoutAvailabilityScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    custormerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSelects?: DateSlotOnTimeSelectUncheckedUpdateManyWithoutDateSlotNestedInput
    DaySlots?: DaySlotOnDateSlotUncheckedUpdateManyWithoutDateSlotNestedInput
  }

  export type DateSlotUncheckedUpdateManyWithoutDateSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    custormerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateSlotOnTimeSelectCreateManyDateSlotInput = {
    id?: number
    timeSelectId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DaySlotOnDateSlotCreateManyDateSlotInput = {
    id?: number
    daySlotId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DateSlotOnTimeSelectUpdateWithoutDateSlotInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSelect?: TimeSelectUpdateOneRequiredWithoutDateSlotsNestedInput
  }

  export type DateSlotOnTimeSelectUncheckedUpdateWithoutDateSlotInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeSelectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateSlotOnTimeSelectUncheckedUpdateManyWithoutTimeSelectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeSelectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DaySlotOnDateSlotUpdateWithoutDateSlotInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    daySlot?: DaySlotUpdateOneRequiredWithoutDateSlotsNestedInput
  }

  export type DaySlotOnDateSlotUncheckedUpdateWithoutDateSlotInput = {
    id?: IntFieldUpdateOperationsInput | number
    daySlotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DaySlotOnDateSlotUncheckedUpdateManyWithoutDaySlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    daySlotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateSlotOnTimeSelectCreateManyTimeSelectInput = {
    id?: number
    dateSlotId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DateSlotOnTimeSelectUpdateWithoutTimeSelectInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateSlot?: DateSlotUpdateOneRequiredWithoutTimeSelectsNestedInput
  }

  export type DateSlotOnTimeSelectUncheckedUpdateWithoutTimeSelectInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateSlotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateSlotOnTimeSelectUncheckedUpdateManyWithoutDateSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateSlotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMeetingCreateManyCustomerInput = {
    id?: number
    locationId: number
    totalPrice: number
    timezone: string
    eventTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DateSlotCreateManyCustormerInput = {
    id?: number
    availabilityScheduleId?: number | null
    status?: string
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupMeetingUpdateWithoutCustomerInput = {
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutGroupMeetingsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutGroupMeetingsNestedInput
    userOnGroupMeetings?: UserOnGroupMeetingUpdateManyWithoutGroupMeetingNestedInput
  }

  export type GroupMeetingUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationId?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    timezone?: StringFieldUpdateOperationsInput | string
    eventTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userOnGroupMeetings?: UserOnGroupMeetingUncheckedUpdateManyWithoutGroupMeetingNestedInput
  }

  export type DateSlotUpdateWithoutCustormerInput = {
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilitySchedule?: AvailabilityScheduleUpdateOneWithoutDateSlotsNestedInput
    timeSelects?: DateSlotOnTimeSelectUpdateManyWithoutDateSlotNestedInput
    DaySlots?: DaySlotOnDateSlotUpdateManyWithoutDateSlotNestedInput
  }

  export type DateSlotUncheckedUpdateWithoutCustormerInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityScheduleId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSelects?: DateSlotOnTimeSelectUncheckedUpdateManyWithoutDateSlotNestedInput
    DaySlots?: DaySlotOnDateSlotUncheckedUpdateManyWithoutDateSlotNestedInput
  }

  export type UserOnGroupMeetingCreateManyGroupMeetingInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnGroupMeetingUpdateWithoutGroupMeetingInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserOnGroupMeetingsNestedInput
  }

  export type UserOnGroupMeetingUncheckedUpdateWithoutGroupMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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