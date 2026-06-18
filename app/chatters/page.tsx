
export default function Chatters() {
  return (
    <>

       <main>
  <section
    style={{
      maxWidth: "900px",
      width: "100%",
      padding: "120px 20px",
    }}
  >
        <h1>Join Noctive</h1>

        <p>
          Become part of an elite
          performance-driven team.
        </p>

        <form
         action="https://formspree.io/f/xgobbjoj"
         method="POST"
         style={{
         display: "flex",
         flexDirection: "column",
         gap: "20px",
         width: "100%",
         maxWidth: "600px",
  }}
>
          <input
          name="fullName"
            placeholder="Full Name"
            required
          />

          <input 
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

            <input 
            name="telegram"
            placeholder="Telegram Username"
            required
          />

           <input
            name="age"
            placeholder="Age"
            type="number"
            min={18}
            max={99}
            required
          />

           <select name="country" defaultValue="" required>
            <option value="" disabled>
              Country of Residence
            </option>
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>Kenya</option>
            <option>India  </option>
            <option>South Africa</option>
            <option>Philippines</option>
            <option>Nigeria</option>
            <option>Other</option>
            {/* Add more countries as needed */}
            required
           </select>

           <select name="homeOffice" defaultValue="" required>
            <option value="" disabled>
              Do you have a home office setup? (Yes/No)
            </option>
            <option>Yes</option>
            <option>No</option>
           </select>

           <input
            name="typingSpeed"
            placeholder="Typing Speed (WPM)"
            type="number"
            min={30}
            max={200}
            required
          />

           <select name="chatExperience" defaultValue="">
             <option value="" disabled>
               Chat Moderation Experience
             </option>
             <option>No Experience</option>
             <option>Less than 6 Months</option>
             <option>6 Months - 1 Year</option>
             <option>1 - 2 Years</option>
             <option>2+ Years</option>
            </select>

           <input
            name="languages"
            placeholder="Languages Spoken"
            required
          />
          
           <input
            name="availability"
            placeholder="Availability (Hours per Week)"
            required
          />

         <select name="preferredShift" defaultValue="">
            <option value="" disabled>
              Preferred Shift
            </option>
            <option>Morning (6am - 12pm)</option>
            <option>Afternoon (12pm - 6pm)</option>
            <option>Evening (6pm - 12am)</option>
            <option>Night (12am - 6am)</option>
            <option>Flexible</option>
            required
          </select>

          <select name="salesExperience" defaultValue="">
            <option value="" disabled>
              Sales Experience
            </option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            required
          </select>

          <textarea
            name="whyHireYou"
            placeholder="Why we should hire you"
            rows={6}
            required
          />

          <button>
            Apply Now
          </button>
        </form>
        </section>
      </main>
    </>
  );
}