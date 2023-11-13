import React, { useReducer, useEffect, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import Title from "../UI/Title/Title";
import IconButton from "../UI/Buttons/IconButton/IconButton";
import emailjs from "emailjs-com";
import { NAVIGATION_MODE } from "../../constants/navigation";
import { useNavigationContext } from "../../context/navigation-context";

const initialState = {
  nameIsValid: false,
  emailIsValid: false,
  messageIsValid: false,
  subjectIsValid: false,
};

const contactMeReducer = (state = initialState, action) => {
  if (action.type === "NAME") {
    return { ...state, nameIsValid: action.name.trim().length >= 3 };
  }

  if (action.type === "EMAIL") {
    return { ...state, emailIsValid: action.email.includes("@") };
  }

  if (action.type === "SUBJECT") {
    return { ...state, subjectIsValid: action.subject.trim().length >= 3 };
  }

  if (action.type === "MESSAGE") {
    return { ...state, messageIsValid: action.message.trim().length >= 3 };
  }

  if (action.type === "RESET") {
    return initialState;
  }

  return initialState;
};

const ContactMeForm = () => {
  const [contactMeState, dispatchContactMe] = useReducer(
    contactMeReducer,
    initialState
  );
  const [formState, setFormState] = useState(false);
  const { changeNavigationMode } = useNavigationContext();
  const API_KEY = process.env.REACT_APP_EMAIL_JS_API_KEY;
  const SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;

  useEffect(() => {
    const finalFormstate =
      contactMeState.nameIsValid &&
      contactMeState.emailIsValid &&
      contactMeState.messageIsValid &&
      contactMeState.subjectIsValid;
    setFormState(finalFormstate);
  }, [
    contactMeState.nameIsValid,
    contactMeState.emailIsValid,
    contactMeState.messageIsValid,
    contactMeState.subjectIsValid,
  ]);

  const changeVisibility = (isVisible) => {
    changeNavigationMode(NAVIGATION_MODE.CONTACT_ME, isVisible);
  };

  const onNameBlur = (event) => {
    dispatchContactMe({ type: "NAME", name: event.target.value });
  };

  const onEmailBlur = (event) => {
    dispatchContactMe({ type: "EMAIL", email: event.target.value });
  };

  const onSubjectBlur = (event) => {
    dispatchContactMe({ type: "SUBJECT", subject: event.target.value });
  };

  const onMessageBlur = (event) => {
    dispatchContactMe({ type: "MESSAGE", message: event.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, API_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    dispatchContactMe({ type: "RESET" });
  };

  return (
    <VisibilitySensor onChange={changeVisibility}>
      <div className="contact-me-container" id="contactMe">
        <Title heading="Contact Me" />
        <form className="contact-me-form" onSubmit={sendEmail}>
          <input
            className="input-field"
            placeholder="Name"
            type="text"
            name="from_name"
            onBlur={onNameBlur}
          />
          <input
            className="input-field"
            placeholder="Email"
            type="text"
            name="from_email"
            onBlur={onEmailBlur}
          />
          <input
            className="input-field"
            placeholder="Subject"
            type="text"
            name="subject"
            onBlur={onSubjectBlur}
          />
          <textarea
            className="text-area-field"
            placeholder="Message"
            name="message"
            onBlur={onMessageBlur}
          />
          <div className="button-container">
            <IconButton
              icon="paper-plane"
              caption="Send Message"
              disabled={!formState}
            />
          </div>
        </form>
      </div>
    </VisibilitySensor>
  );
};

export default ContactMeForm;
