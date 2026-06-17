
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
            placeholder="Agency Name"
          />


          <input
            placeholder="Email Address"
          />

          <select defaultValue="">
            <option value="" disabled>
              Monthly Revenue
            </option>
            <option>under $5,000</option>
            <option>$5,001 - $20,000</option>
            <option>$20,001 - $50,000</option>
            <option>$50,001 - $100,000</option>
            <option>$100,001+</option>
          </select>

          <select defaultValue="">
            <option value="" disabled>
              Number of Models Managed
            </option>
            <option>1-5</option>
            <option>6-20</option>
            <option>21-50</option>
            <option>51-100</option>
            <option>100+</option>
          </select>

          <select defaultValue="">
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
            placeholder="Biggest Bottle Neck in Your Business"
          />

          <textarea
            placeholder="Tell us about your business"
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