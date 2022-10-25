import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useState } from "react";
import useAxios from "../hooks/useAxios";

const Practice = () => {
  const [words, setWords] = useState([]);
  const [response, error, loading] = useAxios({
    url: "https://english-practice-b0834-default-rtdb.firebaseio.com/wordList.json",
  });

  // as we get the response from firebase as object and we need an array of words
  const loadedWords = [];
  for (const key in response) {
    loadedWords.push({
      id: key,
      word: response[key].word,
      pos: response[key].pos,
    });
  }
  setWords(loadedWords);

  // to handle loading state
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  // to handle error state
  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something Went Wrong!
      </Typography>
    );
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <Box>
      <Typography variant="h4">Categorize the following word </Typography>
      <Typography mt={5}>
        {words.map((word) => {
          word = { word };
        })}
      </Typography>
      <Box mt={2}>
        <Button>Noun</Button>
      </Box>
      <Box mt={2}>
        <Button>Adverb</Button>
      </Box>
      <Box mt={2}>
        <Button>Adjective</Button>
      </Box>
      <Box mt={2}>
        <Button>Verb</Button>
      </Box>
      <Box mt={5}>Score:</Box>
    </Box>
  );
};

export default Practice;
