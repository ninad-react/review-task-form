import { Field, Form, Formik } from "formik";
import "./FormValidation.css";
import * as yup from "yup";
import RedErrorMessage from "./RedErrorMessage";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  dateOfBirth:"",
  gender: "",
  skills: [],
  country: "",
};

function FormikValidation() {
  const NewValidations = yup.object({
    firstName: yup.string().required("Please enter first name").min(3).max(10).matches(/^[^\d]+$/, 'First name cannot contain numbers'),
    lastName: yup.string().min(3).max(15).required("Please enter last name").matches(/^[^\d]+$/, 'Last name cannot contain numbers'),
    email: yup.string().required().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Enter valid Email"),
    password: yup.string().required().min(7).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Enter Strong Password").required("Please Enter password"),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Both passwords must match'),
    gender: yup.string().required(),
    skills: yup.array().min(1),
    country: yup.string().required("Please select country"),
    dateOfBirth: yup.date().required('Date of Birth is Required').max(new Date(), 'Please enter proper birth date')
  });

  return (
    <div className="formik-container">
      <div className="container">
        <h1>Form Validation with Formik and Yup Library</h1>

        <Formik
          validationSchema={NewValidations}
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}>
          <Form>
            <div className="input">
              <label>Enter First Name </label>
              <Field type="text" name="firstName" />
              <RedErrorMessage name="firstName" />
            </div>

            <div className="input">
              <label>Enter Last Name </label>
              <Field type="text" name="lastName" />
              <RedErrorMessage name="lastName" />
            </div>

            <div className="input">
              <label>Enter Email </label>
              <Field type="text" name="email" />
              <RedErrorMessage name="email" />
            </div>

            
            <div className="input">
              <label>Enter password </label>
              <Field type="text" name="password" />
              <RedErrorMessage name="password" />
            </div>

            <div className="input">
              <label>Confirm password </label>
              <Field type="text" name="confirmPassword" />
              <RedErrorMessage name="confirmPassword" />
            </div>

            <div className="dob">
              <label>Date of Birth</label>
              <Field type="date" name="dateOfBirth"/>
              <RedErrorMessage name="dateOfBirth" />
            </div>
            
            <div className="input">
              <div className="radio">
                <label>Gender -</label>

                <Field type="radio" name="gender" value="Male" />
                <label>Male</label>

                <Field type="radio" name="gender" value="Female" />
                <label>Female</label>

                <Field type="radio" name="gender" value="Other" />
                <label>Other</label>
                
              </div>
              <RedErrorMessage name="gender"/>
            </div>

            
            

            <label>Skills - </label>

            <Field type="checkbox" name="skills" value="JavaScript" />
            <label>JavaScript</label>

            <Field type="checkbox" name="skills" value="Java" />
            <label>Java</label>

            <Field type="checkbox" name="skills" value="Python" />
            <label>Python</label>

            <RedErrorMessage name="skills"/>

            <div className="select">
              <label>Country: </label>
              <Field name="country" as="select">
                <option value="select">Select</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </Field>
            </div>
              <RedErrorMessage name="country"/>

            <div className="input">
              <button type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default FormikValidation;