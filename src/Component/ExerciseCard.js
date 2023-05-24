import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Pagination, Stack, Typography } from "@mui/material";

function ExerciseCard({item}) {
  return (
    <Link to={`/exercise/${item.id}`} className="exercise-card">
      <img src={item.gifUrl} alt="exercise" Loading="lazy"></img>
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {item.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {item.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="21px"
      >
        {item.name}
      </Typography>

      
    </Link>
  );
}

export default ExerciseCard
