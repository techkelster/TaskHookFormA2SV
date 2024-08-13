import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "./Modal";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const form = useForm<FormValues>();
  const [isModalOpen, setModalOpen] = useState(false);
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [formData, setFormData] = useState<FormValues | null>(null);

  const onSubmit = (data: FormValues) => {
    setFormData(data);
    setModalOpen(true);
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>
        <label htmlFor="name" className="label-f">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: {
              value: true,
              message: "Name is required",
            },
          })}
        />
        <p className="error">{errors.name?.message}</p>

        <label htmlFor="email" className="label-f">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email format",
            },
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />
        <p className="error">{errors.email?.message}</p>

        <label htmlFor="message" className="label-f">
          Message
        </label>
        <textarea
          id="message"
          cols={30}
          rows={10}
          {...register("message", {
            required: {
              value: true,
              message: "Message is required",
            },
          })}
        ></textarea>
        <p className="error">{errors.message?.message}</p>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>

      {isModalOpen && formData && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          name={formData.name}
          email={formData.email}
          message={formData.message}
        />
      )}
    </div>
  );
};
