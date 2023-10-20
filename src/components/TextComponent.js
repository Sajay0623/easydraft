import Button from "@mui/material/Button";

function TextItem({ name, age, index, updateDetails }) {
  // console.log(name , age , index , updateDetails)
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <Button onClick={() => updateDetails(index)}>
        Reset Details
      </Button>
    </div>
  );
}

export default TextItem;
