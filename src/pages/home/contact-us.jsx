import { useState } from "react";
import TextField from "@/ui/text-field";
import { SolidButton } from "@/ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

const contactMethods = ["Instagram", "Facebook"];

export default function ContactUs({}) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    contactMethod: contactMethods[0],
    contactValue: "",
  });

  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(undefined);

  function sendContactEmail() {
    setSubmitting(true);
    fetch("/api/contact-form", {
      method: "post",
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          setMessage(
            "There was an error, please email us at someone@someplace.com instead."
          );
        }
        setMessage("Thanks for reaching, we will contact you soon!");
      });
  }

  return (
    <div className="bg-brown-100 md:p-16 md:my-8 md:relative">
      <div className="flex items-center flex-col-reverse md:flex-row">
        <div className="md:w-1/2 md:p-0 p-8 z-50 bg-brown-100 w-5/6 mx-auto -mt-8 md:mt-0  md:mx-8">
          <div className="text-center text-3xl md:text-5xl font-light">
            Let's capture your story together.
          </div>
          <p className="text-center my-8 tracking-normal leading-normal text-base md:text-3xl font-light">
            The celebration of you starts here. Let's discuss the portrait
            session of your dreams, so we can make it a reality. We can't wait
            to meet you!
          </p>

          <div className="flex justify-center z-40 md:relative flex-col space-y-3">
            {message ? (
              <p>{message}</p>
            ) : (
              <div>
                <TextField
                  placeholder="Your name"
                  value={values.name}
                  onChange={(name) =>
                    setValues((prev) => ({
                      ...prev,
                      name,
                    }))
                  }
                />
                <TextField
                  placeholder="Email"
                  value={values.email}
                  onChange={(email) =>
                    setValues((prev) => ({
                      ...prev,
                      email,
                    }))
                  }
                />

                <div className="relative">
                  <div
                    className="block w-full border-gray-200 border-2 p-3 focus:outline-none focus:ring bg-white"
                    onClick={() => setOpen((prev) => !prev)}>
                    <div className="flex items-center">
                      <div className="flex-grow">{values.contactMethod}</div>
                      <div>
                        {!open ? (
                          <ChevronDownIcon className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronUpIcon className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {open && (
                    <div className="absolute block w-full border-gray-200 border-2 border-t-0 p-3 focus:outline-none focus:ring bg-white">
                      {contactMethods.map((cm) => (
                        <div
                          onClick={() => {
                            setValues((prev) => ({
                              ...prev,
                              contactMethod: cm,
                            }));
                            setOpen(false);
                          }}>
                          {cm}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <TextField
                  placeholder="Instagram namer or facebook url"
                  value={values.contactValue}
                  onChange={(contactValue) =>
                    setValues((prev) => ({
                      ...prev,
                      contactValue,
                    }))
                  }
                />

                <SolidButton onClick={() => !submitting && sendContactEmail()}>
                  Connect with us
                </SolidButton>
              </div>
            )}
          </div>
        </div>

        <div className="md:w-1/2 w-full flex justify-center">
          <img src="/photos/tati.png" />
        </div>
      </div>
    </div>
  );
}
