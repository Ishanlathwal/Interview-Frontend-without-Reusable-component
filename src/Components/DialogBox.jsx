import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  useUpdateComponent1DataMutation,
  useUpdateComponent2DataMutation,
  useUpdateComponent3DataMutation,
} from "../Rtk Query/RtkQuery";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

// eslint-disable-next-line react/prop-types
const DialogBox = ({ open, submitReviewToggle, componentName, id }) => {
  const [
    update,
    {
      isSuccess: c1Success,
      isLoading: c1Isloading,
      isError: c1IsError,
      error: c1Error,
    }, 
  ] = useUpdateComponent1DataMutation();
  const [
    update2,
    {
      isSuccess: c2Success,
      isLoading: c2Isloading,
      isError: c2IsError,
      error: c2Error,
    },
  ] = useUpdateComponent2DataMutation();

  const [
    update3,
    {
      isSuccess: c3Success,
      isLoading: c3Isloading,
      isError: c3IsError,
      error: c3Error,
    },
  ] = useUpdateComponent3DataMutation();

  const [data, setData] = useState("");

  useEffect(() => {
    if (c1IsError) {
      toast.error(c1Error?.data?.message);
    }
    if (c2IsError) {
      toast.error(c2Error?.data?.message);
    }
    if (c3IsError) {
      toast.error(c3Error?.data?.message);
    }
    if (c1Success || c2Success || c3Success) {
      toast.success("Data Updated successfully");
    }
  }, [
    c1Error?.data?.message,
    c1IsError,
    c1Success,
    c2Error?.data?.message,
    c2IsError,
    c2Success,
    c3Error?.data?.message,
    c3IsError,
    c3Success,
  ]);

  //////////////////

  const submit = (e) => {
    e.preventDefault();
    if (componentName === "component1") {
      const dataUpdate = {
        component1: data,
      };
      update({ id, data: dataUpdate });
      setData("");
      submitReviewToggle();
    }
    if (componentName === "component2") {
      const dataUpdate = {
        component2: data,
      };
      update2({ id, data: dataUpdate });
      setData("");
      submitReviewToggle();
    }

    if (componentName === "component3") {
      const dataUpdate = {
        component3: data,
      };
      update3({ id, data: dataUpdate });
      setData("");
      submitReviewToggle();
    }
  };
  if (c1Isloading || c2Isloading || c3Isloading) return <Loader />;

  return (
    <>
      <Dialog
        aria-labelledby="simple-dialog-title"
        open={open}
        onClose={() => submitReviewToggle()}>
        <DialogTitle>Update Data</DialogTitle>
        <DialogContent className="submitDialog">
          <input
            type="text"
            onChange={(e) => setData(e.target.value)}
            value={data}
            placeholder="Update Data"
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => submitReviewToggle()}>
            Cancel
          </Button>
          <Button color="primary" onClick={submit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogBox;
