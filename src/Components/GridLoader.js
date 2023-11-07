import { GridLoader } from "react-spinners";

export default function GridLoaderSpinner() {
    return (
      <>
        <div style={{ width: "100px", margin: "auto", paddingTop: "8rem", display: "block" }}>
        <GridLoader
            color="#9A7D0A"
            cssOverride={{}}
            loading
            margin={6}
            size={100}
            speedMultiplier={1.1}
            width={6}
            />        
        </div>
      </>
    );
  }