
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
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <input
            placeholder="Full Name"
          />

          <input
            placeholder="Email Address"
          />

          <input
            placeholder="Age"
          />

           <select defaultValue="">
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
           </select>

           <select defaultValue="">
            <option value="" disabled>
              Do you have a home office setup? (Yes/No)
            </option>
            <option>Yes</option>
            <option>No</option>
           </select>

           <input
            placeholder="Typing Speed (WPM)"
          />

           <select defaultValue="">
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
            placeholder="Languages Spoken"
          />
          
           <input
            placeholder="Availability (Hours per Week)"
          />

         <select defaultValue="">
            <option value="" disabled>
              Preferred Shift
            </option>
            <option>Morning (6am - 12pm)</option>
            <option>Afternoon (12pm - 6pm)</option>
            <option>Evening (6pm - 12am)</option>
            <option>Night (12am - 6am)</option>
          </select>

          <select defaultValue="">
            <option value="" disabled>
              Sales Experience
            </option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <textarea
            placeholder="Why we should hire you"
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