import e, { useState as n, useRef as R, useEffect as h } from "react";
import { createChat as I, getLLMResponse as k } from "@persistajs/core";
const C = ({ isOpen: s, hasCloseBtn: u = !0, onClose: o, children: l, apiKey: f, actionId: N }) => {
  const [d, c] = n(s), r = R(null), i = () => {
    o && o(), c(!1);
  }, m = (a) => {
    a.key === "Escape" && i();
  };
  return h(() => {
    c(s);
  }, [s]), h(() => {
    const a = r.current;
    a && (d ? a.showModal() : a.close());
  }, [d]), /* @__PURE__ */ e.createElement(
    "dialog",
    {
      ref: r,
      onKeyDown: m,
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
}, A = ({
  isOpen: s,
  actionId: u,
  endTimeoutDuration: o = 2e3,
  onClose: l = () => {
  },
  apiKey: f,
  onPositiveResult: N = (r) => {
  },
  onNegativeResult: d = (r) => {
  },
  onResponse: c = (r) => {
  }
}) => {
  const [r, i] = n(!0), [m, a] = n(!1), [x, g] = n(""), [b, p] = n(""), [w, y] = n(""), [M, E] = n(!1);
  async function L() {
    let t = await I(u, f);
    g(t.data.response), y(t.data.id), p(""), E(!1), i(!1);
  }
  h(() => {
    s && (i(!0), L());
  }, [s]);
  const v = async () => {
    a(!0);
    let t = await k(w, b, f);
    if (a(!1), g(t.data.response), p(""), c && c(t.data), t.data.status === 1) {
      E(!0), N(t.data), setTimeout(() => {
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
  };
  return /* @__PURE__ */ e.createElement(C, { hasCloseBtn: !0, isOpen: s, onClose: l }, r ? /* @__PURE__ */ e.createElement("div", { className: "loader-contaier" }, /* @__PURE__ */ e.createElement("span", { className: "loader" })) : /* @__PURE__ */ e.createElement("div", { className: "container" }, /* @__PURE__ */ e.createElement("h3", { className: "heading" }), /* @__PURE__ */ e.createElement("p", { className: "prompt-query" }, m ? /* @__PURE__ */ e.createElement("span", { className: "loader" }) : x), !M && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "text-area-container" }, /* @__PURE__ */ e.createElement(
    "textarea",
    {
      className: "prompt-answer",
      placeholder: "Some text...",
      value: b,
      onChange: (t) => p(t.target.value)
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "footer" }, /* @__PURE__ */ e.createElement("button", { className: "submit-button", disabled: m, onClick: v }, "submit")))));
};
export {
  A as PersistaModal
};
