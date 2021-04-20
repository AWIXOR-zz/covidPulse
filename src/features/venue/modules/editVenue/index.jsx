import React, { useContext, useState } from 'react'
import { Grid, Step, StepLabel, Stepper } from '@material-ui/core'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  // FormikConfig,
  // FormikValues,
} from 'formik'
import * as Yup from 'yup'
import Spinner from 'react-spinkit'
import Container from 'ui/components/Container'
import InputField from 'ui/components/InputField'
import ErrorField from 'ui/components/ErrorField'
import Button from 'ui/components/Button'
import Card from 'ui/components/Card'
import SEO from 'ui/components/SEO'
import { useParams } from 'react-router-dom'
import { VenueContext } from 'features/search/providers/VenueProvider'
import useDispatchUser from 'features/auth/hooks/useDispatchUser'
import { EditVenueDetails } from 'features/venue/actions'

import {
  Wrapper,
  // Center,
  Title,
  CardWrapper,
} from 'features/auth/components/shared-style'

export default function EditVenue() {
  const { id } = useParams()
  const value = useContext(VenueContext)

  const [venues] = value.venues
  const venueDetails = venues.filter((venue) => {
    return venue.id.toString() === id.toString()
  })

  const {
    fullAddress,
    venueName,
    description,
    venueType,
    location,
    score,
    capacity,
    details,
  } = venueDetails[0]
  console.log(venueName)
  const dispatchUser = useDispatchUser()
  const [mechanicalVentilation, setMechanicalVentilation] = useState('')
  const handleChange = (e) => {
    setMechanicalVentilation(e.target.value)
  }
  return (
    <Container>
      <SEO url="/edit-venue" title="Edit venue" />
      <Wrapper>
        <FormikStepper
          // enableReinitialize
          initialValues={{
            venueName: venueName,
            description: description,
            venueType: venueType,

            venueCapacity: details.venueCapacity,
            capacityLimit: details.capacityLimit,
            indoorCapacity: details.outdoorIndoorCapacity.indoor,
            outdoorCapacity: details.outdoorIndoorCapacity.outdoor,
            timeSpentAtVenue: details.timeSpentAtVenue,

            naturalVentilation: '',
            mechanicalVentilation: '',
            airCirculation: 'No',

            tables: '',
            tablesSeperation: '',
            plexiglass: '',

            handSanitizer: '',
            disinfection: '',
            physicalMenus: '',
            masks: '',

            talking: '',
            singing: '',
            dancing: '',
            alcoholConsumption: '',
          }}
          onSubmit={async (
            {
              venueName,
              description,
              venueType,

              venueCapacity,
              capacityLimit,
              indoorCapacity,
              outdoorCapacity,
              timeSpentAtVenue,

              naturalVentilation,
              mechanicalVentilation,
              airCirculation,

              tables,
              tablesSeperation,
              plexiglass,

              handSanitizer,
              disinfection,
              physicalMenus,
              masks,

              talking,
              singing,
              dancing,
              alcoholConsumption,
            },

            { setSubmitting, setFieldError }
          ) => {
            try {
              EditVenueDetails({
                dispatchUser,
                setFieldError,
                setSubmitting,
                values: {
                  venueName: venueName,
                  description: description,
                  venueType: venueType,
                  details: {
                    venueCapacity: venueCapacity,
                    capacityLimit: capacityLimit,
                    outdoorIndoorCapacity: {
                      indoor: indoorCapacity,
                      outdoor: outdoorCapacity,
                    },
                    ventilation: {
                      natural: naturalVentilation,
                      mechanical: mechanicalVentilation,
                    },
                    socialDistancingMeasures: {
                      tables: tables,
                      plexiglass: plexiglass,
                    },
                    hygieneMeasures: {
                      handSanitizer: handSanitizer,
                      disinfection: disinfection,
                      physicalMenus: physicalMenus,
                    },
                    masks: masks,
                    alcoholConsumption: alcoholConsumption,
                    activities: {
                      talking: talking,
                      singing: singing,
                      dancing: dancing,
                    },
                    timeSpentAtVenue: timeSpentAtVenue,
                  },
                },
              })
            } catch (err) {
              setSubmitting(false)
            }
          }}
        >
          <FormikStep
            label="Business Information"
            validationSchema={Yup.object().shape({
              venueName: Yup.string().required(),
              description: Yup.string().required(),
              venueType: Yup.string().required(),
            })}
          >
            <InputField label="Venue Name">
              <Field type="text" name="venueName" placeholder="Venue Name" />
              <ErrorMessage component={ErrorField} name="venueName" />
            </InputField>
            <InputField label="Description">
              <Field
                type="text"
                name="description"
                placeholder="Bried description"
              />
              <ErrorMessage component={ErrorField} name="description" />
            </InputField>
            <InputField label="Venue Type">
              <Field
                type="text"
                name="venueType"
                placeholder="What type of venue are you?"
              />
              <ErrorMessage component={ErrorField} name="venueType" />
            </InputField>
          </FormikStep>
          <FormikStep
            label="Capacity"
            validationSchema={Yup.object().shape({
              venueCapacity: Yup.number().required(),
              capacityLimit: Yup.number().required(),
              indoorCapacity: Yup.number().required(),
              outdoorCapacity: Yup.number().required(),
            })}
          >
            <InputField label="Venue Capacity">
              <Field
                type="number"
                name="venueCapacity"
                placeholder="What is the capacity of your venue?"
              />
              <ErrorMessage component={ErrorField} name="venueCapacity" />
            </InputField>
            <InputField label="Capacity Limit">
              <Field
                type="number"
                name="capacityLimit"
                placeholder="What is the COVID-19 capacity limit(%)?"
              />
              <ErrorMessage component={ErrorField} name="capacityLimit" />
            </InputField>
            <InputField label="Indoor Capacity">
              <Field
                type="number"
                name="indoorCapacity"
                placeholder="What is your indoor capacity?"
              />
              <ErrorMessage component={ErrorField} name="indoorCapacity" />
            </InputField>
            <InputField label="Outdoor Capacity">
              <Field
                type="number"
                name="outdoorCapacity"
                placeholder="What is the outdoor capacity?"
              />
              <ErrorMessage component={ErrorField} name="outdoorCapacity" />
            </InputField>
            <InputField label="Time spent at venue in minutes">
              <Field
                type="number"
                name="timeSpentAtVenue"
                placeholder="How long do people usually spend at your venue?"
              />
              <ErrorMessage component={ErrorField} name="timeSpentAtVenue" />
            </InputField>
          </FormikStep>
          <FormikStep
            label="Ventilation"
            validationSchema={Yup.object().shape({
              naturalVentilation: Yup.string().required(),
              mechanicalVentilation: Yup.string().required(),
              airCirculation: Yup.string().required(),
            })}
          >
            <InputField label="Natural Ventilation">
              <Field as="select" name="naturalVentilation">
                <option
                  value=""
                  label="Do you have natural ventilation which provides fresh air? (windows / doors)?"
                />
                <option value="Yes" label="Yes" />
                <option value="No" label="No" />
              </Field>
              <ErrorMessage component={ErrorField} name="naturalVentilation" />
            </InputField>
            <InputField label="Mechanical Ventilation">
              <Field
                as="select"
                name="mechanicalVentilation"
                onClick={handleChange}
              >
                <option value="" label="Do you use fans or AC?" />
                <option value="Yes" label="Yes" />
                <option value="No" label="No" />
              </Field>
              <ErrorMessage
                component={ErrorField}
                name="mechanicalVentilation"
              />
            </InputField>
            {mechanicalVentilation === 'Yes' ? (
              <InputField label="Air Circulation">
                <Field as="select" name="airCirculation" defaultValue="No">
                  <option
                    value=""
                    label="If you have fans / AC, do they recirculate indoor air or source it from outside?"
                  />
                  <option value="Yes" label="Yes" />
                  <option value="No" label="No" />
                </Field>
                <ErrorMessage component={ErrorField} name="airCirculation" />
              </InputField>
            ) : null}
          </FormikStep>
          <FormikStep
            label="Social Distancing"
            validationSchema={Yup.object().shape({
              tables: Yup.string().required(),
              tablesSeperation: Yup.string().required(),
              plexiglass: Yup.string().required(),
            })}
          >
            <InputField label="Tables">
              <Field as="select" name="tables">
                <option
                  value=""
                  label="Do guests sit at tables at the venue?"
                />
                <option value="Yes" label="Yes" />
                <option value="No" label="No" />
              </Field>
              <ErrorMessage component={ErrorField} name="tables" />
            </InputField>
            <InputField label="Tables Seperation">
              <Field as="select" name="tablesSeperation">
                <option
                  value=""
                  label="If yes, are the table seperated in a way which allows for social distancing?"
                />
                <option value="Yes" label="Yes" />
                <option value="No" label="No" />
              </Field>
              <ErrorMessage component={ErrorField} name="tablesSeperation" />
            </InputField>
            <InputField label="Plexiglass">
              <Field as="select" name="plexiglass">
                <option
                  value=""
                  label="Do you have plexiglass at places where social distancing cannot be enforced (bar / cashier etc.)?"
                />
                <option value="Yes" label="Yes" />
                <option value="No" label="No" />
              </Field>
              <ErrorMessage component={ErrorField} name="plexiglass" />
            </InputField>
          </FormikStep>
          <FormikStep
            label="Hygiene Measures"
            validationSchema={Yup.object().shape({
              handSanitizer: Yup.string().required(),
              disinfection: Yup.string().required(),
              physicalMenus: Yup.string().required(),
              masks: Yup.string().required(),
            })}
          >
            <InputField label="Hand Sanitizer">
              <Field as="select" name="handSanitizer">
                <option
                  value=""
                  label="Do you provide guests with hand sanitizer?"
                />
                <option value="Yes" label="Yes" />
                <option value="No" label="No" />
              </Field>
              <ErrorMessage component={ErrorField} name="handSanitizer" />
            </InputField>
            <InputField label="Disinfection">
              <Field as="select" name="disinfection">
                <option
                  value=""
                  label="Do you regularly disinfect tables and other surfaces guests interact with?"
                />
                <option value="Yes" label="Yes" />
                <option value="No" label="No" />
              </Field>
              <ErrorMessage component={ErrorField} name="disinfection" />
            </InputField>
            <InputField label="Physical Menus">
              <Field as="select" name="physicalMenus">
                <option
                  value=""
                  label="Do you provide guests with physical menus which are shared with other guests?"
                />
                <option value="Yes" label="Yes" />
                <option value="No" label="No" />
              </Field>
              <ErrorMessage component={ErrorField} name="physical Menus" />
            </InputField>
            <InputField label="Masks">
              <Field as="select" name="masks">
                <option
                  value=""
                  label="Are guests required to wear masks while at the venue?"
                />
                <option value="Yes" label="Yes" />
                <option value="No" label="No" />
                <option value="NotAlways" label="Not always" />
              </Field>
              <ErrorMessage component={ErrorField} name="masks" />
            </InputField>
          </FormikStep>
          <FormikStep
            label="Activities"
            validationSchema={Yup.object().shape({
              talking: Yup.string().required(),
              singing: Yup.string().required(),
              dancing: Yup.string().required(),
              alcoholConsumption: Yup.string().required(),
            })}
          >
            <InputField label="Talking">
              <Field as="select" name="talking">
                <option
                  value=""
                  label="Are guests likely to engage in long conversations while at the venue?"
                />
                <option value="Yes" label="Yes" />
                <option value="No" label="No" />
              </Field>
              <ErrorMessage component={ErrorField} name="talking" />
            </InputField>
            <InputField label="Singing">
              <Field as="select" name="singing">
                <option
                  value=""
                  label="Are guests likely to sing while at the venue?"
                />
                <option value="Yes" label="Yes" />
                <option value="No" label="No" />
              </Field>
              <ErrorMessage component={ErrorField} name="singing" />
            </InputField>
            <InputField label="Dancing">
              <Field as="select" name="dancing">
                <option
                  value=""
                  label="Are guests likely to dance or engage in physical activity while at the venue?"
                />
                <option value="Yes" label="Yes" />
                <option value="No" label="No" />
              </Field>
              <ErrorMessage component={ErrorField} name="dancing" />
            </InputField>
            <InputField label="Alcohol Consumption">
              <Field as="select" name="alcoholConsumption">
                <option
                  value=""
                  label="Do you sell or provide alcoholic beverages to the guests?"
                />
                <option
                  value="Yes alongside meals"
                  label="Yes, served alongside meals"
                />
                <option
                  value="Yes as primary function"
                  label="Yes, served as primary function (bar, nightclub)"
                />
                <option value="No" label="No" />
              </Field>
              <ErrorMessage component={ErrorField} name="alcoholConsumption" />
            </InputField>
          </FormikStep>
          <FormikStep
            label="Contact Details"
            validationSchema={Yup.object().shape({
              fullName: Yup.string().required(),
              email: Yup.string().email().required(),
              phoneNumber: Yup.string().required(),
            })}
          >
            <InputField label="Full Name">
              <Field type="text" name="fullName" placeholder="Full Name" />
              <ErrorMessage component={ErrorField} name="fullName" />
            </InputField>
            <InputField label="Email">
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage component={ErrorField} name="email" />
            </InputField>
            <InputField label="Phone Number">
              <Field
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
              />
              <ErrorMessage component={ErrorField} name="phoneNumber" />
            </InputField>
          </FormikStep>
          <FormikStep
            label="Address"
            validationSchema={Yup.object().shape({
              fullAddress: Yup.string().required(),
              postcode: Yup.string().required(),
              city: Yup.string().required(),
            })}
          >
            <InputField label="Full Address">
              <Field
                type="text"
                name="fullAddress"
                placeholder="Full Address"
              />
              <ErrorMessage component={ErrorField} name="fullAddress" />
            </InputField>
            <InputField label="Postcode">
              <Field type="text" name="postcode" placeholder="Postcode" />
              <ErrorMessage component={ErrorField} name="postcode" />
            </InputField>
            <InputField label="City">
              <Field type="text" name="city" placeholder="City" />
              <ErrorMessage component={ErrorField} name="city" />
            </InputField>
          </FormikStep>
          <FormikStep
            label="Password"
            validationSchema={Yup.object().shape({
              password: Yup.string().required(),
              confirmPassword: Yup.string().when('password', {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref('password')],
                  'Passwords do not match'
                ),
              }),
            })}
          >
            <InputField label="Password">
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage component={ErrorField} name="password" />
            </InputField>
            <InputField label="Confirm Password">
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <ErrorMessage component={ErrorField} name="confirmPassword" />
            </InputField>
          </FormikStep>
        </FormikStepper>
      </Wrapper>
    </Container>
  )
}

export function FormikStep({ children }) {
  return <>{children}</>
}

export function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children)
  const [step, setStep] = useState(0)
  const currentChild = childrenArray[step]
  const [completed, setCompleted] = useState(false)

  function isLastStep() {
    return step === childrenArray.length - 1
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers)
          setCompleted(true)
        } else {
          setStep((s) => s + 1)
          helpers.setTouched({})
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Title>Sign up</Title>
          <CardWrapper as={Card}>
            <Stepper alternativeLabel activeStep={step}>
              {childrenArray.map((child, index) => (
                <Step
                  key={child.props.label}
                  completed={step > index || completed}
                >
                  <StepLabel>{child.props.label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {currentChild}

            <Grid container spacing={2} justify="center">
              {step > 0 ? (
                <Grid item>
                  <Button
                    size="large"
                    variant="secondary"
                    disabled={isSubmitting}
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                  >
                    Back
                  </Button>
                </Grid>
              ) : null}
              <Grid item>
                <Button
                  size="large"
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Spinner name="circle" color="white" />
                  ) : isLastStep() ? (
                    'Submit'
                  ) : (
                    'Next'
                  )}
                </Button>
              </Grid>
            </Grid>
          </CardWrapper>
        </Form>
      )}
    </Formik>
  )
}
