import { Inter } from "next/font/google";
import { useReducer } from "react";
import { ACTION_TYPES } from "@/reducers/postActionTypes";
import { INITIAL_STATE, postReducer } from "@/reducers/postReducer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    // FETCH_START
    dispatch({ type: ACTION_TYPES.FETCH_START });

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        // FETCH_SUCCESS
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        //FETCH_ERROR
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      });
  };
  return (
    <main
      className={`flex min-h-screen bg-gray-200 flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <button onClick={handleFetch}>
          {state.loading ? "Wait..." : "Fetch the post"}
        </button>
        <p>{state.post?.title}</p>
        <span>{state.error && "Something went wrong!"}</span>
      </div>
    </main>
  );
}
