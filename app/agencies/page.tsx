
export default function Agencies() {
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
        <h1>Hire Noctive Chatters</h1>

        <p>
          Scale your business with
          trained professionals.
        </p>

         <form
           action="https://formspree.io/f/xeewwbgd"
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
            name="agencyName"
            placeholder="Agency Name"
            required
          />


          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            name="telegram"
            placeholder="Telegram Username"
          />

          <select name="monthlyRevenue" defaultValue="">
            <option value="" disabled>
              Monthly Revenue
            </option>
            <option>under $5,000</option>
            <option>$5,001 - $20,000</option>
            <option>$20,001 - $50,000</option>
            <option>$50,001 - $100,000</option>
            <option>$100,001+</option>
          </select>

          <select name="modelsManaged" defaultValue="">
            <option value="" disabled>
              Number of Models Managed
            </option>
            <option>1-5</option>
            <option>6-20</option>
            <option>21-50</option>
            <option>51-100</option>
            <option>100+</option>
          </select>

          <select name="currentTeamSize" defaultValue="">
            <option value="" disabled>
              Current team size
            </option>
            <option>1-5</option>
            <option>6-20</option>
            <option>21-50</option>
            <option>51-100</option>
            <option>100+</option>
           </select>


          <textarea
            name="biggestBottleneck"
            placeholder="Biggest Bottle Neck in Your Business"
          />

          <textarea
            name="businessDetails"
            placeholder="Tell us about your business"
            rows={6}
            required
          />

          <button>
            Submit Application
          </button>
        </form>
      </section>
      </main>
    </>
  );
}