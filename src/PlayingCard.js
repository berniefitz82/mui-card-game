import { useState, useEffect, useRef } from "react";
import {
  BsFillSuitHeartFill,
  BsFillSuitClubFill,
  BsFillSuitSpadeFill,
  BsFillSuitDiamondFill,
} from "react-icons/bs";
import { GiCardJoker } from "react-icons/gi";
import CardBack from "./card-back.png";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


function SuitIcon({ suit, style }) {
  if (suit === "Hearts") {
    return <BsFillSuitHeartFill style={style} />;
  } else if (suit === "Diamonds") {
    return <BsFillSuitDiamondFill style={style} />;
  } else if (suit === "Spades") {
    return <BsFillSuitSpadeFill style={style} />;
  } else if (suit === "Clubs") {
    return <BsFillSuitClubFill style={style} />;
  } else {
    // If no suit is given then we can just put out little joker faces
    return <GiCardJoker style={style} />;
  }
}

function PlayingCard({ suit, value }) {
  const myRef = useRef(null);
  const iconSize = "40px";
  const [suitColor, setSuitColor] = useState("red");

  function flipCard() {
    if (myRef.current.style.transform) {
      myRef.current.style.transform = "";
    } else {
      myRef.current.style.transform = "rotateY(180deg)";
    }
  }

  useEffect(() => {
    suit === "Hearts" || suit === "Diamonds"
      ? setSuitColor("red")
      : setSuitColor("black");
  }, [suit]);

  return (
    <Box sx={{ transformStyle: "preserve-3d" }}>
      <Paper
        id="theCard"
        ref={myRef}
        onClick={flipCard}
        elevation={24}
        style={{
          transformStyle: "preserve-3d",
          transition: "all 0.5s ease",
          transform: "rotateY(180deg)",
        }}
        sx={{
          width: "240px",
          height: "336px",
          border: "2px solid transparent",
          position: "relative",
          backgroundColor: "#F2F2F2",
          borderRadius: "10px",

        }}
      >
        <Box id="theFront" sx={{ backfaceVisibility: "hidden" }}>
          <Typography top="0px" left="5px" margin="0px" position="absolute" fontSize="50px" color={suitColor} variant="h1" component="h1">
            {value}
          </Typography>
          <SuitIcon
            suit={suit}
            style={{
              fontSize: iconSize,
              position: "absolute",
              margin: "0px",
              top: "50px",
              left: "50px",
              color: suitColor,
            }}
          />

          <SuitIcon
            suit={suit}
            style={{
              fontSize: iconSize,
              position: "absolute",
              margin: "0px",
              top: "75px",
              left: "100px",
              color: suitColor,
            }}
          />

          <SuitIcon
            suit={suit}
            style={{
              fontSize: iconSize,
              position: "absolute",
              margin: "0px",
              top: "50px",
              left: "150px",
              color: suitColor,
            }}
          />

          <SuitIcon
            suit={suit}
            style={{
              fontSize: iconSize,
              position: "absolute",
              margin: "0px",
              top: "100px",
              left: "50px",
              color: suitColor,
            }}
          />
          <SuitIcon
            suit={suit}
            style={{
              fontSize: iconSize,
              position: "absolute",
              margin: "0px",
              top: "100px",
              left: "150px",
              color: suitColor,
            }}
          />
          <Typography transform="rotate(180deg)" bottom="0px" right="5px" margin="0px" position="absolute" fontSize="50px" color={suitColor} variant="h1" component="h1">
            {value}
          </Typography>
          <SuitIcon
            suit={suit}
            style={{
              fontSize: iconSize,
              position: "absolute",
              margin: "0px",
              bottom: "50px",
              left: "50px",
              color: suitColor,
              transform: "rotate(180deg)",
            }}
          />

          <SuitIcon
            suit={suit}
            style={{
              fontSize: iconSize,
              position: "absolute",
              margin: "0px",
              bottom: "100px",
              left: "50px",
              color: suitColor,
              transform: "rotate(180deg)",
            }}
          />

          <SuitIcon
            suit={suit}
            style={{
              fontSize: iconSize,
              position: "absolute",
              margin: "0px",
              bottom: "75px",
              left: "100px",
              color: suitColor,
              transform: "rotate(180deg)",
            }}
          />

          <SuitIcon
            suit={suit}
            style={{
              fontSize: iconSize,
              position: "absolute",
              margin: "0px",
              bottom: "50px",
              left: "150px",
              color: suitColor,
              transform: "rotate(180deg)",
            }}
          />

          <SuitIcon
            suit={suit}
            style={{
              fontSize: iconSize,
              position: "absolute",
              margin: "0px",
              bottom: "100px",
              left: "150px",
              color: suitColor,
              transform: "rotate(180deg)",
            }}
          />
        </Box>

        <Box
          sx={{
            m: "10px", width: "216px",
            height: "312px", border: "2px solid red",
            borderRadius: "12px",
            backgroundImage: "url(" + CardBack + ")",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        ></Box>
      </Paper>
    </Box>
  );
}

export default PlayingCard;
