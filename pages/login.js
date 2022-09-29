import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  console.log(errors);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Layout title="Login">
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}>
        <FormControl sx={{ m: 1 }}>
          <TextField
            {...register("user", {
              required: "This field is required",
              maxLength: 15,
            })}
            id="user"
            type="text"
            label="User"
            variant="outlined"
            error={errors.user ? true : false}
            helperText={
              errors.user?.message ||
              (errors.user?.type === "maxLength" &&
                "The username can't have contains more of 15 characters")
            }
          />
        </FormControl>

        <FormControl sx={{ m: 1 }}>
          <TextField
            {...register("password", { required: "Please enter a valid user name" })}
            error={errors.password ? true : false}
            helperText={errors.password?.message}
            label="Password"
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

        <Button
          sx={{ m: 1 }}
          variant="contained"
          disableElevation
          type="submit">
          Login
        </Button>
      </form>
    </Layout>
  );
};

export default Login;
