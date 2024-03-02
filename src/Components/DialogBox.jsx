/* eslint-disable react/prop-types */
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

// Reusable dialog box component
const DialogBox = ({ open, submitReviewToggle, componentName, id }) => {
  // Update end point for component 1
  const [
    update,
    {
      isSuccess: c1Success,
      isLoading: c1Isloading,
      isError: c1IsError,
      error: c1Error,
    },
  ] = useUpdateComponent1DataMutation();

  // Update end point for component 2
  const [
    update2,
    {
      isSuccess: c2Success,
      isLoading: c2Isloading,
      isError: c2IsError,
      error: c2Error,
    },
  ] = useUpdateComponent2DataMutation();

  // Update end point for component 3
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

  // Use effects for toasts

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

  // Submit data handler for all 3 components. Save data based on component name condition
  const submit = (e) => {
    e.preventDefault();
    if (data.trim() === "") {
      toast.error("Please enter a valid value");
      return;
    }
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
            required
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
