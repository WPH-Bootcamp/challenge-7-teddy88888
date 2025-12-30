import { ContactInput } from "../ui/ContactInput";

export const ContactSection = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Sisi Kiri: Heading & Info */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            LET'S DISCUSS YOUR IDEAS <br />
            <span className="text-[#FF5733]"></span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-md">
            Ceritakan kebutuhan bisnis Anda. Tim ahli kami siap membantu Anda
            membangun solusi IT yang cerdas dan terukur.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-[#FF5733] border border-zinc-800">
                📧
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">
                  Email Us
                </p>
                <p className="text-white font-medium">hello@techcorp.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-[#FF5733] border border-zinc-800">
                📞
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">
                  Call Us
                </p>
                <p className="text-white font-medium">+62 812 3456 7890</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sisi Kanan: Form (Dark Mode Container) */}
        <div className="w-full lg:w-1/2 bg-[#0A0A0A] p-8 md:p-12 rounded-[40px] border border-zinc-800 shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactInput label="First Name" placeholder="John" />
              <ContactInput label="Last Name" placeholder="Doe" />
            </div>

            <ContactInput
              label="Email Address"
              type="email"
              placeholder="john@example.com"
            />

            <div className="space-y-4">
              <p className="text-zinc-400 text-sm ml-1">
                Services you're interested in:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Web Dev", "Mobile App", "Cloud", "Cybersecurity"].map(
                  (service) => (
                    <label
                      key={service}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          className="peer w-5 h-5 accent-[#FF5733] bg-zinc-900 border-zinc-800 rounded appearance-none border checked:bg-[#FF5733] checked:border-[#FF5733] transition-all"
                        />
                        <svg
                          className="absolute w-3 h-3 text-white hidden peer-checked:block left-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-400 group-hover:text-white transition-colors text-sm">
                        {service}
                      </span>
                    </label>
                  )
                )}
              </div>
            </div>

            <ContactInput
              label="Message"
              isTextArea
              placeholder="Tell us more about your project..."
            />

            <button className="w-full bg-[#FF5733] text-white py-4 rounded-full font-bold text-lg hover:bg-[#E04E2C] transition-all transform active:scale-95 shadow-lg shadow-[#FF5733]/20 mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
