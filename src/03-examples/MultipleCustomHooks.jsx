import React from "react";
import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from "./";
 
export const MultipleCustomHooks = () => {
  const { increment, counter, reset, decrement } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter === 0 ? 1 : counter}`
  );

  //   const { quote, author } = !!data && data[0]

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote data={data} />}
      <button
        onClick={() => decrement(1)}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Back Quote
      </button>
      <button
        onClick={() => reset()}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Reset Quote
      </button>
      <button
        onClick={() => increment(1)}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Next Quote
      </button>
    </>
  );
};
