import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function Contact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        emailjs.send(
            'service_lo6jfu3',   // Replace with your EmailJS Service ID
            'template_0skbc8i',  // Replace with your EmailJS Template ID
            data,
            'nnqi1Opb8I6t3vKxq'  // Replace with your EmailJS Public Key
        ).then(() => {
            alert('Message sent successfully!');
            reset(); // Clear the input fields
        }).catch((error) => {
            console.error('Error:', error);
            alert('Failed to send message! Please try again later.');
        });
    };

    return (
        <div className="flex items-center justify-center flex-col sm:py-10 sm:flex-row h-fit w-full px-5 mt-10 sm:mt-0">
            <form onSubmit={handleSubmit(onSubmit)} className="inline-block p-6 rounded-lg shadow-lg w-full max-w-md bg-light-green-100">
                <h2 className="text-green-500 text-[30px] font-bold mb-4">Contact Us</h2>

                <div className="mb-4">
                    <label className="block text-green-500 text-[20px] ">Name</label>
                    <input
                        type="text"
                        {...register('name', { required: true })}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-green-500 text-[20px] ">Email</label>
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-green-500 text-[20px] ">Message</label>
                    <textarea
                        {...register('message', { required: true })}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                    {errors.message && <span className="text-red-500">This field is required</span>}
                </div>

                <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
                    Submit
                </button>
            </form>

            <div className='flex flex-col justify-start items-center font-bold  sm:w-1/2 sm:h-[370px]'>

                <p className="text-green-500 text-[30px] font-bold mb-4">Social media</p>
                <div className='flex gap-5'>
                    <a href="https://www.instagram.com/nishanth_.dev/" target='_block'>
                        <img
                            src={`https://skillicons.dev/icons?i=instagram`}
                            alt="instagram"
                            className="w-16 h-16 mb-2"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/nishanthnaa52/" target='_block'>
                        <img
                            src={`https://skillicons.dev/icons?i=linkedin`}
                            alt="linkedin"
                            className="w-16 h-16 mb-2"
                        />
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Contact;