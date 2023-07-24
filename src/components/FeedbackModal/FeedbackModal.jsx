import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Controller, useForm } from "react-hook-form";
import { Rating } from "@smastrom/react-rating";

const FeedbackModal = ({ isOpen, closeModal }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-8 text-center"
                  >
                    Add a review
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text">Your Message</span>
                      </label>
                      <textarea
                        {...register("message", { required: true })}
                        className="textarea textarea-bordered h-24 w-full mb-4"
                        placeholder="Enter your message"
                      ></textarea>
                      {errors.message && (
                        <span className="text-red-400 text-xs">
                          Message is required.
                        </span>
                      )}
                      <label className="label">
                        <span className="label-text">Rating</span>
                      </label>
                      <Controller
                        control={control}
                        name="rating"
                        rules={{
                          validate: (rating) => rating > 0,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <Rating
                            style={{ maxWidth: 180, marginBottom: 40 }}
                            value={value}
                            isRequired
                            onChange={onChange}
                            visibleLabelId="rating_label"
                            onBlur={onBlur}
                          />
                        )}
                      />
                      {errors.rating && (
                        <span className="text-red-400 text-xs">
                          Rating is required.
                        </span>
                      )}
                    </div>

                    <div className=" flex justify-between items-center w-full">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-warning px-4 py-2 text-sm font-medium text-blue-900 hover:bg-yellow-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                      <button
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FeedbackModal;
