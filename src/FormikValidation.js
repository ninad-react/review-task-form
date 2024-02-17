
import { ErrorMessage, Field, Form, Formik } from "formik"
import "./FormValidation.css";

function FormikValidation() {

  const initialValues = {
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    Gender: "",
    skills:"",
    country: "",
  }

  return (
    <div className="container">
      <h1>Form Validation with Formik and Yup Library</h1>

      <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
      >

        <Form>

          <div className="input">
            <label>Enter Name </label>
            <Field type="text" name="name"/>
          </div>

          <div className="input">
            <label>Enter Age </label>
            <Field type="number" name="age"/>
          </div>

          <div className="input">
            <label>Enter password </label>
            <Field type="text" name="password"/>
          </div>

          <div className="radio">
            <label>Gender -</label>

            <Field type="radio" name="gender" value="Male"/>
            <label>Male</label>

            <Field type="radio" name="gender" value="Female"/>
            <label>Female</label>

            <Field type="radio" name="gender" value="Other"/>
            <label>Other</label>
          </div>


            <label>Skills - </label>

            <Field type="checkbox" name="skills" value="JavaScript"/>
            <label>JavaScript</label>

            <Field type="checkbox" name="skills" value="Java"/>
            <label>Java</label>

            <Field type="checkbox" name="skills" value="Python"/>
            <label>Python</label>

          <div className="input">
            <button type="submit">Submit</button>
          </div>

        </Form>
      </Formik>

    </div>
  )
}

export default FormikValidation