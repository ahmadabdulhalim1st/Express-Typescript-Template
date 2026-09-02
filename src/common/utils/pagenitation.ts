// utils/pagination.js

/**
 * Pagination helper for Express applications
 * @param {Array} data - The full dataset to paginate
 * @param {Object} options - Pagination options
 * @param {number} options.page - Current page number (default: 1)
 * @param {number} options.limit - Items per page (default: 10)
 * @returns {Object} Paginated result with metadata
 */

export const paginate = ({
  totalItems,
  page = 1,
  limit = 10,
}: {
  totalItems: number;
  page?: number;
  limit?: number;
}): {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextPage: number | null;
  previousPage: number | null;
  startIndex: number;
  endIndex: number;
} => {
  const skip = (page - 1) * limit;
  return {
    currentPage: page,
    totalItems,
    itemsPerPage: limit,
    hasNextPage: limit < totalItems,
    hasPreviousPage: page > 1,
    nextPage: limit < totalItems ? page + 1 : null,
    previousPage: page > 1 ? page - 1 : null,
    startIndex: skip + 1,
    endIndex: Math.min(skip + limit, totalItems),
  };
};
