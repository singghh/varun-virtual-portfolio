import { useState, FormEvent } from "react";
import { Mail, Phone, Send, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="text-center mb-6 text-gray-500">
          Have a project in mind or just want to connect? Feel free to reach
          out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
          {/* Contact Form */}
          {/* <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                Thank you for your message! I'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  ) : (
                    <Send className="h-5 w-5 mr-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div> */}

          {/* Contact Info */}
          <div className="space-y-6 lg:mt-8">
            <div className="bg-white rounded-xl shadow-sm p-6 card-hover animate-fade-in">
              <div className="flex">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="vaarunsingghh@gmail.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    vaarunsingghh@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 card-hover animate-fade-in-delayed-2">
              <div className="flex">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Telangana, India</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 animate-fade-in-delayed-3">
              <h3 className="font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/bamla-varun-singh-b05245259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/singghh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
