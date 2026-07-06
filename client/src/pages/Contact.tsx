import { useState } from "react";
import { motion} from "framer-motion";
import type {Variants} from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Define form validation schema using Zod
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(4, { message: "Subject must be at least 4 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact Form Submitted Data:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="p-3 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-2xl inline-block mb-4"
          >
            <MessageSquare size={24} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            Get in <span className="text-blue-500">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg opacity-75"
          >
            Have questions about features, pricing, or scaling enterprise teams? Drop us a line.
          </motion.p>
        </header>

        {/* Dynamic Context Split Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Column: Essential Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="opacity-70 text-sm">
                Our support crew typically responds within a few business hours.
              </p>
            </motion.div>

            <div className="space-y-6">
              {/* Card - Email */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-5 rounded-2xl glass border border-black/10 dark:border-white/10"
              >
                <div className="p-3 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-xl">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase opacity-50 tracking-wider">Email Us</p>
                  <a href="mailto:support@taskflow.com" className="font-medium hover:text-blue-500 transition">
                    support@taskflow.com
                  </a>
                </div>
              </motion.div>

              {/* Card - HQ Location */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-5 rounded-2xl glass border border-black/10 dark:border-white/10"
              >
                <div className="p-3 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-xl">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase opacity-50 tracking-wider">Headquarters</p>
                  <p className="font-medium">San Francisco, CA (Distributed Globally)</p>
                </div>
              </motion.div>

              {/* Card - Operating Hours */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-5 rounded-2xl glass border border-black/10 dark:border-white/10"
              >
                <div className="p-3 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-xl">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase opacity-50 tracking-wider">Business Hours</p>
                  <p className="font-medium">Monday – Friday, 9AM – 6PM EST</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Container */}
          <div className="lg:col-span-7">
            <motion.div
              variants={itemVariants}
              className="p-8 md:p-10 rounded-3xl glass border border-black/10 dark:border-white/10 shadow-xl backdrop-blur-md relative overflow-hidden"
            >
              {isSubmitted ? (
                /* Success Feedback Animation View */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="inline-flex p-4 bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20 mb-2">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold">Message Dispatched!</h3>
                  <p className="opacity-70 max-w-sm mx-auto text-sm leading-relaxed">
                    Thank you for reaching out. A TaskFlow productivity expert will review your request and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-sm font-medium transition border border-black/10 dark:border-white/10"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                /* Interactive Request Form Capture */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium opacity-80">Your Name</label>
                      <input
                        type="text"
                        {...register("name")}
                        className={`w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border text-sm transition outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
                          errors.name ? "border-red-500" : "border-black/10 dark:border-white/10"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium opacity-80">Email Address</label>
                      <input
                        type="email"
                        {...register("email")}
                        className={`w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border text-sm transition outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
                          errors.email ? "border-red-500" : "border-black/10 dark:border-white/10"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium opacity-80">Subject</label>
                    <input
                      type="text"
                      {...register("subject")}
                      className={`w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border text-sm transition outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
                        errors.subject ? "border-red-500" : "border-black/10 dark:border-white/10"
                      }`}
                      placeholder="How can we optimize your workflow?"
                    />
                    {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium opacity-80">Message</label>
                    <textarea
                      rows={5}
                      {...register("message")}
                      className={`w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border text-sm transition outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none ${
                        errors.message ? "border-red-500" : "border-black/10 dark:border-white/10"
                      }`}
                      placeholder="Tell us more about your team requirements..."
                    />
                    {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-blue-600 text-white font-semibold transition hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2 text-sm shadow-lg shadow-blue-600/10 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
