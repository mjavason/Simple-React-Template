export const getPageNumbers = (
  currentPage: number = 1,
  totalPages: number = 1,
) => {
  const pages = [];
  const maxVisiblePages = 5;

  if (totalPages <= maxVisiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  pages.push(1);

  let startPage = currentPage - 1;
  let endPage = currentPage + 1;

  if (currentPage <= 2) {
    startPage = 2;
    endPage = 4;
  } else if (currentPage >= totalPages - 1) {
    startPage = totalPages - 3;
    endPage = totalPages - 1;
  }

  if (startPage > 2) {
    pages.push("...");
  }

  for (let i = startPage; i <= endPage; i++) {
    if (i > 1 && i < totalPages) {
      pages.push(i);
    }
  }

  if (endPage < totalPages - 1) {
    pages.push("...");
  }

  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
};
