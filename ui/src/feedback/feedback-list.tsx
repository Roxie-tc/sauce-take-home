import {useEffect, useState} from "react";
import {Feedback, feedbacksQuery} from "./api.ts";


export default function FeedbackList() {
  const [page, setPage] = useState(1);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [totalPages, setTotalPages] = useState(1);
  const [per_page, setper_page] = useState(5);

  useEffect(() => {
    feedbacksQuery(page, per_page).then((result) => {
      setFeedbacks(result.feedbacks.values)
      setTotalPages(result.feedbacks.totalPages);
    });
  }, [page, per_page]);
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setper_page(Number(event.target.value));
    setPage(1); 
  };
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Feedback</h1>
      {feedbacks.map((feedback) => (
        <button key={feedback.id} className="bg-slate-700 bg-opacity-20 hover:bg-opacity-30 cursor-pointer rounded-lg py-2 px-4 text-left">
          <p className="text-red-300">{feedback.text}</p>
          <div>
            {feedback.highlights?.map((highlight) => (
              <div>
              <div key={highlight.id}>
                <p className="text-gray-100">
                  <strong>Quote:</strong> {highlight.quote}
                </p>
                <p className="text-gray-100">
                  <strong>Summary:</strong> {highlight.summary}
                </p>
              </div>
              </div>
            ))}

          </div>
        </button>
      ))}
      <div>
        <label htmlFor="perPageSelect" className="text-gray-300 mr-2">
          Items per page:
        </label>
        <select
          id="perPageSelect"
          className="bg-slate-700 text-gray-200 rounded px-2 py-1"
          value={per_page}
          onChange={handlePerPageChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-4">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-600"
        >
          Previous
        </button>
        <span className="text-gray-200">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-600"
        >
          Next
        </button>
      </div>   
    </div>
  );
}