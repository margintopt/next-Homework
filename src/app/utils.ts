import React from 'react';

export function getTop(e: any) {
  var offset = e.offsetTop;
  if (e.offsetParent != null) offset += getTop(e.offsetParent);
  return offset;
}

export function getLeft(e: any) {
  var offset = e.offsetLeft;
  if (e.offsetParent != null) offset += getLeft(e.offsetParent);
  return offset;
}

export function clearEventBubble(e: React.MouseEvent) {
  e.stopPropagation();
  e.preventDefault();
}

export function scroll() {
  if (window.pageYOffset) {
    return {
      scrollLeft: window.pageXOffset,
      scrollTop: window.pageYOffset,
    };
  } else if (document.compatMode === 'CSS1Compat') {
    return {
      scrollLeft: document.documentElement.scrollLeft,
      scrollTop: document.documentElement.scrollTop,
    };
  }

  return {
    scrollLeft: document.body.scrollLeft,
    scrollTop: document.body.scrollTop,
  };
}

export function isInPath(target: HTMLElement, wrapper: Record<string, any>) {
  const iOffLeft = target.offsetLeft;
  const iOffTop = target.offsetTop;
  const iLeft = target.offsetWidth + iOffLeft;
  const iTop = target.offsetHeight + iOffTop;

  return (
    iLeft > wrapper.left &&
    iTop > wrapper.top &&
    iOffLeft < wrapper.left + wrapper.width &&
    iOffTop < wrapper.top + wrapper.height
  );
}

export function getContinuousNumber(arr: number[]) {
  if (!arr.length) return [];
  let result: number[][] = [];
  let i = 0;
  result[i] = [arr[0]];
  arr.reduce((pre, cur) => {
    cur - pre === 1 ? result[i].push(cur) : (result[++i] = [cur]);
    return cur;
  });

  return result;
}

export function getIntAndRemainder(data: number) {
  const int = parseInt(String(data / 2));
  const remainder = data % 2;

  return { int, remainder };
}

export function generateArray(start: number, end: number) {
  return Array.from(new Array(end + 1).keys()).slice(start);
}
