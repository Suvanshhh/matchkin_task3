import React, { useState } from "react";
import OTPRequestForm from "./components/OTPRequestForm";
import OTPVerifyForm from "./components/OTPVerifyForm";
import ProjectMatchForm from "./components/ProjectMatchForm";
import MatchResults from "./components/MatchResults";

function App() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [results, setResults] = useState(null);

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <h2>Matchkin Demo</h2>
      {step === 1 && (
        <OTPRequestForm
          onRequested={(e, r) => {
            setEmail(e);
            setRole(r);
            setStep(2);
          }}
        />
      )}
      {step === 2 && (
        <OTPVerifyForm
          email={email}
          onVerified={() => setStep(3)}
        />
      )}
      {step === 3 && (
        <ProjectMatchForm
          onResults={res => {
            setResults(res);
            setStep(4);
          }}
        />
      )}
      {step === 4 && <MatchResults results={results} />}
    </div>
  );
}

export default App;
