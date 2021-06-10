import React, { FC } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import "./DateFilter.scss";

interface DateFilterProps {
  fromDate: Date;
  toDate: Date;
  handleFromDate: (date: Date | null) => void;
  handleToDate: (date: Date | null) => void;
}

export const DateFilter: FC<DateFilterProps> = (props) => {
  return (
    <div className="calendars-container">
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="С какой даты"
        value={props.fromDate}
        onChange={props.handleFromDate}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="По какую дату"
        value={props.toDate}
        onChange={props.handleToDate}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </div>
  );
};
