import React, { Suspense } from "react";
// import Lazy1 from "./Lazy1";
// import Lazy2 from "./Lazy2";
// import Lazy3 from "./Lazy3";
const Lazy1 = React.lazy(() => import("./Lazy1"));
const Lazy2 = React.lazy(() => import("./Lazy2"));
const Lazy3 = React.lazy(() => import("./Lazy3"));

// const Lazy1 = React.lazy(
//   () =>
//     new Promise((resolve, reject) =>
//       setTimeout(() => resolve(import("./Lazy1")), 500)
//     )
// );
// const Lazy2 = React.lazy(
//   () =>
//     new Promise((resolve, reject) =>
//       setTimeout(() => resolve(import("./Lazy2")), 1500)
//     )
// );
// const Lazy3 = React.lazy(
//   () =>
//     new Promise((resolve, reject) =>
//       setTimeout(() => resolve(import("./Lazy3")), 3000)
//     )
// );

export default function Lazy() {
  return (
    <>
      <Suspense fallback={() => <h3>loading...</h3>}>
        <Lazy1 />
      </Suspense>
      <Suspense fallback={() => <h3>loading...</h3>}>
        <Lazy2 />
      </Suspense>
      <Suspense fallback={() => <h3>loading...</h3>}>
        <Lazy3 />
      </Suspense>
    </>
  );
}
