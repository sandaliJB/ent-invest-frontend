import React from "react";
import TopNav from "../layout/TopNav";
import Footer from "../layout/Footer";

const entrepreneurs = [
  {
    id: 1,
    name: "John Doe",
    industry: "Technology",
    fundingRequired: "$500,000",
    description: "Founder of a groundbreaking AI startup.",
  },
  {
    id: 2,
    name: "Jane Smith",
    industry: "Healthcare",
    fundingRequired: "$1,000,000",
    description: "Revolutionizing telemedicine services.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    industry: "Retail",
    fundingRequired: "$750,000",
    description: "Building a sustainable fashion brand.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    industry: "Retail",
    fundingRequired: "$750,000",
    description: "Building a sustainable fashion brand.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    industry: "Retail",
    fundingRequired: "$750,000",
    description: "Building a sustainable fashion brand.",
  },
  // Add more entrepreneurs as needed
];

const Invester: React.FC = () => {
  return (
    <div className="hero_area">
      <TopNav />
      <div className="container-fluid bg-light py-5">
        <h2 className="text-center mb-5">Investers</h2>
        <div className="row g-4">
          {entrepreneurs.map((entrepreneur) => (
            <div className="col-lg-4 col-md-6 my-3" key={entrepreneur.id}>
              <div className="card h-100 shadow-sm">
                <div className="row">
                  <div className="col-4">
                    <img
                      src="./images/client-2.jpg"
                      alt={entrepreneur.name}
                      style={{ height: "300px", width: "300px" }}
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{entrepreneur.name}</h5>
                    <h6 className="text-muted">{entrepreneur.industry}</h6>
                    <p className="card-text mt-2">{entrepreneur.description}</p>
                    <p>
                      <strong>Funding Required:</strong>{" "}
                      {entrepreneur.fundingRequired}
                    </p>
                    <div className="mt-auto">
                      <a
                        className="btn btn-primary me-2"
                        style={{ borderRadius: "20px" }}
                      >
                        Contact
                      </a>
                      <a
                        href="/investProfile"
                        className="btn btn-outline-primary mx-2"
                        style={{ borderRadius: "20px" }}
                      >
                        View Profile
                      </a>
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
