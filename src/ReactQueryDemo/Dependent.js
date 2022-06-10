import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function Dependent({ emailId }) {
  // Fetch user by given email id.
  const fetchUserByEmail = (emailId) => {
    return axios(`http://localhost:3004/fans/${emailId}`);
  };

  // Fetch words written by particular user.
  const fetchWordsById = (wordsId) => {
    return axios(`http://localhost:3004/fanWords/${wordsId}`);
  };

  const { data: user } = useQuery(["user-detail", emailId], () =>
    fetchUserByEmail(emailId)
  );
  console.log("user :>> ", user?.data?.id);

  const fanWordsId = user?.data?.fanWordsId;
  const result = useQuery(
    ["words", fanWordsId],
    () => fetchWordsById(fanWordsId),
    {
      // It enable the query when fanWordsId is not empty.(Initially call with null in react-query devtool)
      enabled: !!fanWordsId,
    }
  );
  console.log("result :>> ", result?.data?.data?.words);

  return (
    <>
      <h3>User: {emailId}</h3>
      <div>
        <h4>Fans comments: </h4>
        <ul>
          {result?.data?.data?.words?.map((el, i) => {
            return <li key={i}>{el}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
