const getFirstSelector = selector => document.querySelector(selector);

const nestedTarget = () => document.querySelector('#nested div.target');

const deepestChild = () => {
  let node = document.querySelector('#grand-node');
  let [nextNode] = node.children;

  while (nextNode) {
    node = nextNode;
    [nextNode] = node.children;
  }
  return node;
};

const increaseRankBy = (n) => {
  const rankedLists = document.querySelectorAll('.ranked-list');

  rankedLists.forEach((list) => {
    const { children } = list;
    const childrenArray = Array.from(children);
    childrenArray.forEach((child) => {
      child.innerHTML = parseFloat(child.innerHTML) + parseFloat(n);
    });
  });
};
