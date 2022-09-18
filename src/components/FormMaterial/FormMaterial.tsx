import React, { FC, ReactFragment } from 'react'

import { useForm, Controller, SubmitHandler } from 'react-hook-form'

import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import cnFormMaterial from './FormMaterial.classname'

import './FormMaterial.css'

type TDataUser = {
  username?: string
  email?: string
  password?: string
  confirmPassword?: string
  gender?: string
  city?: string
}

const FormMaterial: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm<TDataUser>({
    mode: 'onTouched',
  })

  const onSubmit: SubmitHandler<TDataUser> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <Container maxWidth="xs" className={cnFormMaterial()}>
      <h1 className={cnFormMaterial('Title')}>Gign up</h1>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className={cnFormMaterial('Form')}
      >
        {/* username */}
        <Controller
          name="username"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...register('username', {
                required: 'Required field',
                minLength: {
                  value: 5,
                  message: 'Minimum of 5 characters',
                },
              })}
              error={!!errors?.username}
              helperText={
                errors?.username
                  ? (errors.username.message as ReactFragment)
                  : null
              }
              className={cnFormMaterial('Field', { input: true })}
              variant="outlined"
              color="secondary"
              label="Username"
              multiline
              fullWidth
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.onChange(e)
              }
            />
          )}
        />

        {/*  email */}
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...register('email', {
                required: 'Required field',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              error={!!errors?.email}
              helperText={
                errors?.email ? (errors.email.message as ReactFragment) : null
              }
              variant="outlined"
              color="secondary"
              label="E-mail"
              multiline
              fullWidth
              className={cnFormMaterial('Field', { input: true })}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.onChange(e)
              }
            />
          )}
        />

        {/* password */}
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...register('password', {
                required: 'Required field',
                minLength: {
                  value: 7,
                  message: 'Minimum of 7 symbols',
                },
              })}
              error={!!errors?.password}
              helperText={
                errors?.password
                  ? (errors.password.message as ReactFragment)
                  : null
              }
              variant="outlined"
              color="secondary"
              label="Password"
              type="password"
              multiline
              fullWidth
              className={cnFormMaterial('Field', { input: true })}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.onChange(e)
              }
            />
          )}
        />

        {/* confirm password */}
        <Controller
          name="confirmPassword"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              security="password"
              {...register('confirmPassword', {
                required: 'Required field',
                validate: (value) => {
                  const { password } = getValues()
                  return password === value || `Passwords don't match`
                },
              })}
              error={!!errors?.confirmPassword}
              helperText={
                errors?.confirmPassword
                  ? (errors.confirmPassword.message as ReactFragment)
                  : null
              }
              variant="outlined"
              color="secondary"
              label="Confirm password"
              type="password"
              multiline
              fullWidth
              className={cnFormMaterial('Field', { input: true })}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.onChange(e)
              }
            />
          )}
        />

        {/* city */}
        <FormControl
          fullWidth
          className={cnFormMaterial('Field', { select: true })}
        >
          <InputLabel color="secondary" error={!!errors?.city}>
            Your city
          </InputLabel>
          <Controller
            name="city"
            defaultValue=""
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <Select
                labelId="city"
                {...register('city', {
                  required: 'Choose a city',
                })}
                label="Your city"
                multiline
                color="secondary"
                defaultValue=""
                error={!!errors?.city}
                onChange={(e) => field.onChange(e)}
              >
                <MenuItem value="">
                  <em>Choose city</em>
                </MenuItem>
                <MenuItem value="Moscow">Moscow</MenuItem>
                <MenuItem value="Kazan">Kazan</MenuItem>
                <MenuItem value="Samara">Samara</MenuItem>
                <MenuItem value="Sochi">Sochi</MenuItem>
              </Select>
            )}
          />
          <FormHelperText error>{errors.city?.message}</FormHelperText>
        </FormControl>

        {/* gender */}
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <FormControl
              fullWidth
              className={cnFormMaterial('Field', { checkbox: true })}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                color="secondary"
              >
                Gender
              </FormLabel>
              <RadioGroup
                {...register('gender')}
                defaultValue="female"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  field.onChange(e)
                }
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                row
              >
                <FormControlLabel
                  value="female"
                  control={<Radio color="secondary" />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio color="secondary" />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          )}
        />

        <Button
          type="submit"
          variant="outlined"
          color="secondary"
          size="large"
          fullWidth
          disabled={!isValid}
        >
          Outlined
        </Button>
      </form>
    </Container>
  )
}

export default FormMaterial
