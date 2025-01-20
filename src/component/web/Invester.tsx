import React, { useEffect, useState } from "react";
import axios from "axios";
import TopNav from "../layout/TopNav";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

const Invester: React.FC = () => {
  const [investors, setInvestors] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/investment/getAllInvestors");
        setInvestors(response.data);
        //console.log(response.data);
      } catch (err) {
        console.error("Error fetching investors", err);
        setError("Failed to fetch investors.");
      }
    };

    fetchInvestors();
  }, []);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }
  return (
    <div className="hero_area">
      <TopNav />
      <div className="container-fluid bg-light py-5">
        <h2 className="text-center mb-5">Investers</h2>
        <div className="row g-4">
          {investors.map((ivt) => (
            <div className="col-lg-4 col-md-6 my-3" key={ivt.investmentId}>
              <div className="card h-100 shadow-sm">
                <div className="row">
                  <div className="col-4">
                    {ivt.imageData && (
                    <img
                      src={`data:${ivt.contentType};base64,${ivt.imageData}`}
                      className="img-fluid"
                      alt={ivt.investorName}
                    />
                  )}
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{ivt.investorName}</h5>
                    <h6 className="text-muted">{ivt.investorJob}</h6>
                    <p className="card-text mt-2">{ivt.investorInterest}</p>
                    <p>
                      <strong>Funding Required:</strong>{" "}
                      {ivt.budgetLimit}
                    </p>
                    <div className="mt-auto">
                      <a
                        className="btn btn-primary me-2"
                        style={{ borderRadius: "20px" }}
                      >
                        Contact
                      </a>
                      <Link
                        to={`/investProfile/${ivt.investmentId}`}
                        className="btn btn-outline-primary mx-2"
                        style={{ borderRadius: "20px" }}
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Invester;