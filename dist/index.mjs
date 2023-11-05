import e, { useState as r, useRef as y, useEffect as h } from "react";
import { createChat as R, getLLMResponse as I } from "@persistajs/core";
const k = ({ isOpen: s, hasCloseBtn: u = !0, onClose: o, children: l, apiKey: f, actionId: g }) => {
  const [d, c] = r(s), n = y(null), m = () => {
    o && o(), c(!1);
  }, i = (a) => {
    a.key === "Escape" && m();
  };
  return h(() => {
    c(s);
  }, [s]), h(() => {
    const a = n.current;
    a && (d ? a.showModal() : a.close());
  }, [d]), /* @__PURE__ */ e.createElement(
    "dialog",
    {
      ref: n,
      onKeyDown: i,
      style: {
        // padding: "2rem",
        position: "relative",
        boxShadow: "hsl(0 0% 0% / 10%) 0 0 0.5rem 0.25rem",
        border: "2px solid black",
        borderRadius: "8px",
        padding: "12px"
      }
    },
    u && /* @__PURE__ */ e.createElement("button", { onClick: o, className: "exit-button" }, "X"),
    l
  );
}, q = ({
  isOpen: s,
  actionId: u,
  endTimeoutDuration: o = 2e3,
  onClose: l = () => {
  },
  apiKey: f,
  onPositiveResult: g = (n) => {
  },
  onNegativeResult: d = (n) => {
  },
  onResponse: c = (n) => {
  }
}) => {
  const [n, m] = r(!0), [i, a] = r(!1), [x, N] = r(""), [b, p] = r(""), [M, L] = r(""), [v, E] = r(!1);
  h(() => {
    s && (m(!0), R(u, f).then((t) => {
      N(t.data.response), L(t.data.id), p(""), E(!1), m(!1);
    }));
  }, [s]);
  const w = () => {
    a(!0), I(M, b, f).then((t) => {
      if (a(!1), N(t.data.response), p(""), c && c(t.data), t.data.status === 1) {
        E(!0), g(t.data), setTimeout(() => {
          l();
        }, o);
        return;
      }
      if (t.data.status === -1) {
        E(!0), d(t.data), setTimeout(() => {
          l();
        }, o);
        return;
      }
    });
  };
  return /* @__PURE__ */ e.createElement(k, { hasCloseBtn: !0, isOpen: s, onClose: l }, n ? /* @__PURE__ */ e.createElement("div", { className: "loader-contaier" }, /* @__PURE__ */ e.createElement("span", { className: "loader" })) : /* @__PURE__ */ e.createElement("div", { className: "container" }, /* @__PURE__ */ e.createElement("h3", { className: "heading" }), /* @__PURE__ */ e.createElement("p", { className: "prompt-query" }, i ? /* @__PURE__ */ e.createElement("span", { className: "loader" }) : x), !v && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "text-area-container" }, /* @__PURE__ */ e.createElement(
    "textarea",
    {
      className: "prompt-answer",
      placeholder: "Some text...",
      value: b,
      onChange: (t) => p(t.target.value)
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "footer" }, /* @__PURE__ */ e.createElement("button", { className: "submit-button", disabled: i, onClick: w }, "submit")))));
};
export {
  q as PersistaModal
};
