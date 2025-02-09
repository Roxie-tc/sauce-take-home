import {useEffect, useState} from "react";
import {Feedback, feedbacksQuery} from "./api.ts";


export default function FeedbackList() {
  const [page, setPage] = useState(1);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])

  useEffect(() => {
    feedbacksQuery(page, 10).then((result) => setFeedbacks(result.feedbacks.values));
  }, [page]);

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
    </div>
  );
}