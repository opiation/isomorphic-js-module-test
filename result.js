// @ts-check

/**
 * @typedef {Object} Err
 * @property {E} error
 * @property {"Err"} tag
 * @template E
 */

/**
 * @typedef {Object} Ok
 * @property {A} value
 * @property {"Ok"} tag
 * @template A
 */

/**
 * @typedef {Err<E> | Ok<A>} Result
 * @template A
 * @template E
 */

/**
 * @param {E} error
 * @returns {Err<E>}
 * @template E
 */
function err(error) {
  return { error, tag: "Err" };
}

/**
 * @param {Result<A, unknown>} result
 * @returns {result is Ok<A>}
 * @template A
 */
function isOk(result) {
  return result.tag === "Ok";
}

/**
 * @param {(error: E) => B} onErr
 * @param {(value: A) => B} onOk
 * @returns {(result: Result<A, E>) => B}
 * @template A
 * @template E
 * @template B
 */
function match(onErr, onOk) {
  return (result) => isOk(result) ? onOk(result.value) : onErr(result.error);
}

/**
 * @param {A} value
 * @returns {Ok<A>}
 * @template A
 */
function ok(value) {
  return { tag: "Ok", value };
}

export const Result = {
  err,
  isOk,
  match,
  ok,
};
