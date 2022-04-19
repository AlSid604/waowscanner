import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function App() {
  const [data, setData] = React.useState("Not Found");

  const newAudio = new Audio(
    "https://www.myinstants.com/media/sounds/anime-wow-sound-effect.mp3"
  );

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) {
            setData(result.text);
            newAudio.play();
          } else setData("Not Found");
        }}
      />
      <p>{data}</p>
    </>
  );
}

export default App;
