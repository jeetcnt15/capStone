import useStore from '../store/useStore';

const Pagination = () => {
  const { page, setPage } = useStore();

  return (
    <div className="flex justify-between">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Previous
      </button>
      <span>Page {page}</span>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
