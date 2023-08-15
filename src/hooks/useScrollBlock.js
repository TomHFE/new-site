import { useRef } from "react";

// document type variable
const safeDocument = typeof document !== "undefined" ? document : {};

/**
 * Usage:
 * const [blockScroll, allowScroll] = useScrollBlock();
 */

export default function useScrollBlock() {
  // scrollBlocked ref
  const scrollBlocked = useRef();
  // element variable
  const html = safeDocument.documentElement;
  // body variable
  const { body } = safeDocument;
  // block scroll function
  const blockScroll = () => {
    // conditional to check for body or scrollBlocked
    if (!body || !body.style || scrollBlocked.current) return;
    // scroll bar width
    const scrollBarWidth = window.innerWidth - html.clientWidth;
    // additional padding for scroll
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue("padding-right")
      ) || 0;

    /**
     * 1. Fixes a bug in iOS and desktop Safari whereby setting
     *    `overflow: hidden` on the html/body does not prevent scrolling.
     * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
     *    scroll if an `overflow-x` style is also applied to the body.
     */

    // prevent overflow and movement of scroll

    html.style.position = "relative"; /* [1] */
    html.style.overflow = "hidden"; /* [2] */
    body.style.position = "relative"; /* [1] */
    body.style.overflow = "hidden"; /* [2] */
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    // state scroll blocked as true

    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    // check for body and scroll blocked
    if (!body || !body.style || !scrollBlocked.current) return;
    // delete all overflow decisions
    html.style.position = "";
    html.style.overflow = "";
    body.style.position = "";
    body.style.overflow = "";
    body.style.paddingRight = "";
    // state scroll blocked as false
    scrollBlocked.current = false;
  };
  // array of options
  return [blockScroll, allowScroll];
}
