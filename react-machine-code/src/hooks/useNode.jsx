const useNode = () => {
  const insertNode = function (tree, commentID, item) {
    if (tree.id === commentID) {
      tree.items.pusg({
        id: new Date().getTime(),
        name: item,
        items: [],
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, commentID, item);
    });
    return { ...tree, items: latestNode };
  };
  return { insertNode, editNode, deleteNode };
};

export default useNode;
