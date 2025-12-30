export const Contact = () => (
  <section className="bg-black py-24 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-white text-4xl font-bold mb-4">
        Ready to Start? Let's Talk.
      </h2>
      <p className="text-zinc-500 mb-12">
        Tell us what you need, and we'll get back to you soon.
      </p>

      <form className="space-y-6 text-left">
        <div>
          <label className="block text-sm text-zinc-400 mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-4 border rounded-xl focus:outline-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-400 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 border rounded-xl focus:outline-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-400 mb-2">Message</label>
          <textarea
            rows={4}
            placeholder="Enter your message"
            className="w-full p-4 border rounded-xl focus:outline-orange-500"
          />
        </div>

        {/* Services Checkbox */}
        <div className="grid grid-cols-2 gap-4">
          {[
            "Web Development",
            "Cloud Solutions",
            "Mobile App Development",
            "Software Development",
            "UI/UX Design",
            "Other",
          ].map((service) => (
            <label
              key={service}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input type="checkbox" className="w-5 h-5 accent-[#FF5733]" />
              <span className="text-zinc-500 text-sm">{service}</span>
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-[#FF5733] text-white py-4 rounded-full font-bold text-lg hover:shadow-lg transition"
        >
          Send
        </button>
      </form>
    </div>
  </section>
);
