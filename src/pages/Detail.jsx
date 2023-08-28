import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const BookDetailPage = () => {
  const params = useParams();
  const firebase = useFirebase();
  useEffect(() => {
    firebase
      .getBookById(params.bookId)
      .then((value) => console.log(value.data()));
  }, []);
  console.log(params);
  return <div>BookDetailPage</div>;
};

export default BookDetailPage;
