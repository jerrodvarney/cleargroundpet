import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import DogCountCards from '../cards/DogCountCards';
import FrequencyCards from '../cards/FrequencyCards';
import './quote-form.scss';

const GATE_LOCATIONS = [
  { value: '', label: 'Select Gate Location' },
  { value: 'left', label: 'Left Side' },
  { value: 'right', label: 'Right Side' },
  { value: 'back', label: 'Back Gate' },
  { value: 'none', label: 'No Gate / Open Access' },
  { value: 'other', label: 'Other (describe in comments)' },
];

export default function QuoteForm({ zipCode }) {
  // STEP 1 STATE
  const [quote, setQuote] = useState({
    zip: '',
    coupon: '',
    numDogs: 1,
    frequency: 'weekly',
    phone: '',
  });

  const [step, setStep] = useState(1);

  // STEP 2 STATE
  const [signup, setSignup] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: 'NV',
    dogNames: [''],
    gateLocation: '',
    comments: '',
  });

  const [addons, setAddons] = useState({
    deodorizing: false,
    deodorizingFrequency: 'weekly',
  });

  // HELPERS
  const formatUsPhone = (digits) => {
    const d = digits.slice(0, 10);
    if (d.length <= 3) return d;
    if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  };

  // if valid returns true, otherwise displays the errors to user and doesnt move to step 2
  const validatePayload = (payload) => true;

  // STEP 1 HANDLERS
  const handleZipChange = (e) => {
    const zip = e.target.value.replace(/\D/g, '').slice(0, 5);
    setQuote((prev) => ({ ...prev, zip }));
  };

  const handlePhoneChange = (e) => {
    const phone = e.target.value.replace(/\D/g, '').slice(0, 10);
    setQuote((prev) => ({ ...prev, phone }));
  };

  const handleCouponChange = (e) => {
    setQuote((prev) => ({ ...prev, coupon: e.target.value }));
  };

  const handleStep1Submit = (e) => {
    e.preventDefault();

    const payload = {
      ...quote,
      coupon: quote.coupon.trim(),
    };

    if (validatePayload(payload)) setStep(2);
  };

  // STEP 2 HANDLERS
  const handleSignupChange = (key) => (e) => {
    setSignup((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();

    const payload = {
      ...signup,
      ...quote,
      coupon: quote.coupon.trim(),
      addons,
    };

    console.log(payload);
  };

  // ON MOUNT
  useEffect(() => {
    if (zipCode) {
      setQuote((prev) => ({ ...prev, zip: String(zipCode) }));
    }
  }, [zipCode]);

  return (
    <div id="quote-form-container">
      <h2>Get an Instant Quote</h2>

      {/* STEP 1 */}
      <form id="form1" className="quote-form" onSubmit={handleStep1Submit}>
        <label htmlFor="zip">
          Zip Code
          <input
            id="zip"
            name="zip"
            value={quote.zip}
            onChange={handleZipChange}
            inputMode="numeric"
            autoComplete="postal-code"
            placeholder="89135"
            maxLength={5}
            disabled
            required
          />
        </label>

        <label htmlFor="coupon">
          Coupon Code
          <input
            id="coupon"
            name="coupon"
            value={quote.coupon}
            onChange={handleCouponChange}
            autoComplete="off"
          />
        </label>

        <DogCountCards
          value={quote.numDogs}
          onChange={(numDogs) => setQuote((prev) => ({ ...prev, numDogs }))}
        />

        <FrequencyCards
          value={quote.frequency}
          onChange={(frequency) => setQuote((prev) => ({ ...prev, frequency }))}
        />

        <label htmlFor="phone">
          Phone Number*
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formatUsPhone(quote.phone)}
            onChange={handlePhoneChange}
            inputMode="numeric"
            autoComplete="tel"
            placeholder="(702) 555-1234"
            minLength={10}
            required
          />
        </label>

        {step === 1 && (
        <>
          <div className="disclosure">
            <div className="disclosure-row">
              <FaCheck className="disclosure-icon" />
              <p>
                By providing my phone number, I agree to receive calls and text messages
                from ClearGround Pet Services, including for marketing purposes.
                Messaging frequency varies and message and data rates may apply.
              </p>
            </div>
            <div className="disclosure-row">
              <FaCheck className="disclosure-icon" />
              <p>
                You may reply STOP to opt out of future messages,
                or reply HELP for more information.
              </p>
            </div>
          </div>

          <label className="checkbox-label" htmlFor="privacy">
            <input
              id="privacy"
              name="privacy"
              className="form-checkbox"
              type="checkbox"
              required
            />
            By checking this box I agree to the Privacy Policy
          </label>

          <button type="submit">Get Free Quote</button>
        </>
        )}
      </form>

      {/* STEP 2 */}
      {step === 2 ? (
        <div className="step2">

          {/* <QuoteEstimate /> */}
          <div>QUOTE ESTIMATE CARD</div>

          <h3>Sign Up Now!</h3>
          <form id="form2" className="quote-form" onSubmit={handleStep2Submit}>
            <div className="two-col">
              <label htmlFor="firstName">
                First Name*
                <input
                  id="firstName"
                  name="firstName"
                  value={signup.firstName}
                  onChange={handleSignupChange('firstName')}
                  required
                />
              </label>

              <label htmlFor="lastName">
                Last Name*
                <input
                  id="lastName"
                  name="lastName"
                  value={signup.lastName}
                  onChange={handleSignupChange('lastName')}
                  required
                />
              </label>
            </div>

            <label htmlFor="email">
              Your Email Address*
              <input
                id="email"
                name="email"
                type="email"
                value={signup.email}
                onChange={handleSignupChange('email')}
                autoComplete="email"
                required
              />
            </label>

            <label htmlFor="address">
              Home Address*
              <input
                id="address"
                name="address"
                value={signup.address}
                onChange={handleSignupChange('address')}
                autoComplete="street-address"
                required
              />
            </label>

            <div className="two-col">
              <label htmlFor="city">
                City*
                <input
                  id="city"
                  name="city"
                  value={signup.city}
                  onChange={handleSignupChange('city')}
                  autoComplete="address-level2"
                  required
                />
              </label>

              <label htmlFor="state">
                State*
                <select
                  id="state"
                  name="state"
                  value={signup.state}
                  onChange={handleSignupChange('state')}
                  required
                >
                  <option key="nevada" value="NV">Nevada - NV</option>
                </select>
              </label>
            </div>

            {/* ADD DOGS NAME INPUTS BASED ON NUMDOGS */}

            <label htmlFor="gateLocation">
              Where is your gate located?
              <select
                id="gateLocation"
                name="gateLocation"
                value={signup.gateLocation}
                onChange={handleSignupChange('gateLocation')}
              >
                {GATE_LOCATIONS.map((g) => (
                  <option key={g.value} value={g.value}>
                    {g.label}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="comments">
              Additional Comments
              <textarea
                id="comments"
                name="comments"
                value={signup.comments}
                onChange={handleSignupChange('comments')}
                rows={4}
              />
            </label>

            {/* Add-ons for deodorizing frequency */}
            {/* <AddonsCard /> */}
            <div>ADDONS CARD</div>

            <label className="checkbox-label" htmlFor="terms">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
              />
              I agree to the Terms of Service*
              {/* MUST LINK TO TERMS OF SERVICE MODAL */}
            </label>

            <div className="form-btm">
              <p>
                After clicking get started, you will be redirected to our
                payment processor to set up your subscription
              </p>
              <button type="submit">
                Get Started
              </button>
            </div>

          </form>
        </div>
      )
        : null}
    </div>
  );
}
