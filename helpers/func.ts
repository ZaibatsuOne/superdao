export const bgPreviewCard = (index: number) => {
  switch (index) {
    case 0:
      return "bg-blue";
    case 1:
      return "bg-purpleLight";
    case 2:
      return "bg-yellow";
    default:
      return "bg-purple";
  }
};
