// This function as magic as it is possible.
// The issue related to Nivo (mostly to D3)

// The problem is that when we need to represent data which length is
// less than 3, or when we need to represent only one sequence in line
// chart and all values in "Y" axis of that particular sequence are
// the same, "nivo" charts don't work with mesh. 🤦‍♂️

const canUseMesh = (from, to, list) => !(
  (to - from + 1 < 3) ||
  (list.length === 1 && list[0].data.every((item, _, arr) => item.y === arr[0].y))
);

export default canUseMesh;
