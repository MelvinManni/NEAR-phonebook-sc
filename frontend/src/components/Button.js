import React from "react";

export default function Button({ loading, children, ...rest }) {
  return (
    <button disabled={loading} {...rest}>
      {loading ? <img src="./gear.svg" width="30px" alt="" /> : children}
    </button>
  );
}
