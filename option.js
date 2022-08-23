// @ts-check

class None {
  /** @readonly */
  tag = "None";

  /** @private */
  constructor() {}

  /**
   * @readonly
   * @type {Readonly<None>}
   */
  static singleton = new None();
}

/**
 * @template A
 */
class Some {
  /** @readonly */
  tag = "Some";

  /**
   * @param {A} value
   * @private
   */
  constructor(value) {
    /**
     * @readonly
     * @type {A}
     */
    this.value = value;
  }

  /**
   * @param {A} value
   * @returns {Some<A>}
   * @template A
   */
  static of(value) {
    return new Some(value);
  }
}

/**
 * @typedef {None | Some<A>} Option
 *   An `Option` is a container that either represents _something_
 * ({@link Some}) or _nothing ({@link None}).
 *
 * @template A
 */

/**
 * Is the given {@link Option} `candidate` {@link Some} value of type `A`?
 *
 * @param {Option<A>} candidate
 * @returns {candidate is Some<A>}
 * @template A
 */
function isSome(candidate) {
  return candidate.tag === "Some";
}

/**
 * @param {(value: A) => B} f
 * @returns {(option: Option<A>) => Option<B>}
 * @template A
 * @template B
 */
function map(f) {
  return (option) => isSome(option) ? some(f(option.value)) : none;
}

/** @type {Readonly<None>} */
const none = None.singleton;

/**
 * @param {A} value
 * @returns {Option<A>}
 * @template A
 */
function of(value) {
  return Some.of(value);
}

/**
 * @param {A} value
 * @returns {Some<A>}
 * @template A
 */
function some(value) {
  return Some.of(value);
}

/**
 * A namespace for interacting with {@link Option}s.
 */
export const Option = {
  isSome,
  map,
  none,
  of,
  some,
};
