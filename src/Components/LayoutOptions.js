export const layouts = {
  lg: [
    { i: "a", x: 0, y: 0, w: 6, h: 8 }, // Single component on large screens
    { i: "b", x: 6, y: 0, w: 6, h: 8 }, // Two side by side on large screens
    { i: "c", x: 0, y: 6, w: 12, h: 8 }, // Two side by side on large screens
  ],

  sm: [
    { i: "a", x: 0, y: 0, w: 6, h: 8 }, // Single component on small screens
    { i: "b", x: 0, y: 6, w: 6, h: 8 }, // Single component on small screens
    { i: "c", x: 0, y: 12, w: 6, h: 8 }, // Single component on small screens
  ],
  xs: [
    { i: "a", x: 0, y: 0, w: 4, h: 8 }, // Single component on extra small screens
    { i: "b", x: 0, y: 6, w: 4, h: 8 }, // Single component on extra small screens
    { i: "c", x: 0, y: 12, w: 4, h: 8 }, // Single component on extra small screens
  ],
  xxs: [
    { i: "a", x: 0, y: 0, w: 2, h: 8 }, // Single component on extra extra small screens
    { i: "b", x: 0, y: 6, w: 2, h: 8 }, // Single component on extra extra small screens
    { i: "c", x: 0, y: 12, w: 2, h: 8 }, // Single component on extra extra small screens
  ],
};
