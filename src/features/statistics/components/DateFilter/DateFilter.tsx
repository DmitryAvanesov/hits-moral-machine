import React, {FC} from 'react';
import {KeyboardDatePicker} from "@material-ui/pickers";

interface DateFilterProps {
    fromDate: Date;
    toDate: Date;
    handleFromDate: (date: Date | null) => void;
    handleToDate: (date: Date | null) => void;
}

export const DateFilter: FC<DateFilterProps> = (props) => {

    return (
        <div>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={props.fromDate}
                onChange={props.handleFromDate}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            to
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={props.toDate}
                onChange={props.handleToDate}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </div>
    )
}
