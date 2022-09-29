import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Signup.module.css";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  getCitiesData,
  getCountryData,
  getStatesData,
} from "../services/countriesData";

const Signup = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm();

  const errorMsg = {
    passRegEx:
      "The password must be between 8 and 16 characters long, with at least one digit, at least one lowercase letter, and at least one uppercase letter.",
    fieldRequired: "This field is required",
    emailRegEx: "Please put a valid email",
    maxLength: "The last name field cannot contain more than 25 characters",
    phone: "Put a valid phone number",
    checkbox: "You must accept the terms and conditions to continue",
    selects: "Please select an option",
  };

  const {
    passRegEx,
    emailRegEx,
    fieldRequired,
    maxLength,
    phone,
    checkbox,
    selects,
  } = errorMsg;

  const onSubmit = (data) => console.log(data, "Enviado");

  console.log(errors);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const getCountry = async () => setCountries(await getCountryData());

    getCountry();
  }, []);

  const getStates = async (country) => {
    setStates(await getStatesData(country));
  };

  const getCities = async (state) => {
    setCities(await getCitiesData(state));
  };

  return (
    <Layout title="Sign Up">
      <h1>Sign Up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}>
        <div className={styles.nameDiv}>
          <FormControl sx={{ m: 1, flex: "auto" }}>
            <TextField
              {...register("name", {
                required: fieldRequired,
                maxLength: 25,
              })}
              type="text"
              label="Name"
              variant="outlined"
              error={Boolean(errors.name)}
              helperText={
                errors.name?.message ||
                (errors.name?.type === "maxLength" && maxLength)
              }
            />
          </FormControl>
          <FormControl sx={{ m: 1, flex: "auto" }}>
            <TextField
              {...register("lastname", {
                required: fieldRequired,
                maxLength: 25,
              })}
              type="text"
              label="Last Name"
              variant="outlined"
              error={Boolean(errors.lastname)}
              helperText={
                errors.lastname?.message ||
                (errors.lastname?.type === "maxLength" && maxLength)
              }
            />
          </FormControl>
        </div>

        <FormControl sx={{ m: 1 }}>
          <TextField
            {...register("email", {
              required: fieldRequired,
              pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
            })}
            type="text"
            label="e-mail"
            variant="outlined"
            error={Boolean(errors.email)}
            helperText={
              errors.email?.message ||
              (errors.email?.type === "pattern" && emailRegEx)
            }
          />
        </FormControl>

        <div className={styles.password}>
          <FormControl sx={{ m: 1, flex: "auto" }}>
            <TextField
              {...register("password", {
                required: fieldRequired,
                pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
              })}
              error={Boolean(errors.password)}
              helperText={
                errors.password?.message ||
                (errors.password?.type === "pattern" && passRegEx)
              }
              label="New Password"
              id="password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1, flex: "auto" }}>
            <TextField
              {...register("confirmpassword", {
                required: fieldRequired,
                pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || "Passwords should match!";
                  },
                },
              })}
              error={Boolean(errors.confirmpassword)}
              helperText={
                errors.confirmpassword?.message ||
                (errors.confirmpassword?.type === "pattern" && passRegEx)
              }
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </div>

        <h3 style={{ textAlign: "center", color: "gray" }}>Shipping Address</h3>

        <FormControl
          sx={{ m: 1 }}
          error={Boolean(errors.country)}>
          <InputLabel id="country">Select your country</InputLabel>
          <Select
            labelId="country"
            label="Select your country"
            onClick={(e) => getStates(watch("country"))}
            value={watch("country") || ""}
            {...register("country", {
              required: selects,
            })}>
            {countries.length > 0 &&
              countries.map((el) => (
                <MenuItem
                  key={el.short}
                  value={el.name}>{`${el.name} (+${el.phone})`}</MenuItem>
              ))}
          </Select>
          {errors.country && (
            <FormHelperText>{errors.country?.message}</FormHelperText>
          )}
        </FormControl>

        {states.length > 0 && (
          <FormControl
            sx={{ m: 1 }}
            error={Boolean(errors.state)}>
            <InputLabel id="state">Select your state</InputLabel>
            <Select
              labelId="state"
              label="Select your state"
              onClick={(e) => getCities(watch("state"))}
              value={watch("state") || ""}
              {...register("state", { required: selects })}>
              {states.length > 0 &&
                states.map((el) => (
                  <MenuItem
                    key={el.state_name}
                    value={el.state_name}>
                    {el.state_name}
                  </MenuItem>
                ))}
            </Select>
            {errors.state && (
              <FormHelperText>{errors.state?.message}</FormHelperText>
            )}
          </FormControl>
        )}

        {cities.length > 0 && (
          <FormControl
            sx={{ m: 1 }}
            error={Boolean(errors.city)}>
            <InputLabel id="city">Select your city</InputLabel>
            <Select
              labelId="city"
              label="Select your city"
              value={watch("city") || ""}
              {...register("city", { required: selects })}>
              {cities.length > 0 &&
                cities.map((el) => (
                  <MenuItem
                    key={el.city_name}
                    value={el.city_name}>
                    {el.city_name}
                  </MenuItem>
                ))}
            </Select>
            {errors.state && (
              <FormHelperText>{errors.city?.message}</FormHelperText>
            )}
          </FormControl>
        )}

        <FormControl sx={{ m: 1 }}>
          <TextField
            {...register("phone", {
              required: fieldRequired,
              pattern:
                /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/,
            })}
            type="text"
            label="Phone number"
            variant="outlined"
            error={Boolean(errors.phone)}
            helperText={
              errors.phone?.message ||
              (errors.phone?.type === "pattern" && phone)
            }
          />
        </FormControl>

        <FormControl
          required
          error={Boolean(errors.checkbox)}
          component="fieldset"
          sx={{ m: 3 }}
          variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox {...register("checkbox", { required: true })} />
              }
              label="Do you accept the terms and conditions?"
            />
          </FormGroup>
          {errors.checkbox && <FormHelperText>{checkbox}</FormHelperText>}
        </FormControl>

        <Button
          sx={{ m: 1 }}
          variant="contained"
          disableElevation
          type="submit">
          Register
        </Button>
      </form>
    </Layout>
  );
};

export default Signup;
