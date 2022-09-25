import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import styles from "./FilterSports.module.css";

const FilterSports = ({ sportsName, onCheckboxClick }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Sports</h3>
      {sportsName.map((sport, index) => {
        return (
            <FormGroup key={index}>
              <FormControlLabel
                sx={{textTransform: "capitalize", m: "0.1rem"}}
                control={<Checkbox/>}
                label={sport}
                name={sport}
                checked={sportsName[sport]}
                onChange={(e) =>
                  onCheckboxClick(e.target.name, e.target.checked)
                }
              />
            </FormGroup>
        );
      })}
    </div>
  );
};

export default FilterSports;


{/* <div
  key={index}
  className={styles.sportsCheckbox}>
  <label
    htmlFor={sport}
    style={{ textTransform: "capitalize" }}>
    {sport}
  </label>
  <input
    id={sport}
    name={sport}
    type="checkbox"
    checked={sportsName[sport]}
    onChange={(e) =>
      onCheckboxClick(e.target.name, e.target.checked)
    }
  />
</div> */}