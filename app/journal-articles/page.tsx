import Link from "next/link";
import PageHeader from "../components/pageHeader";

const articlesData = [
  {
    id: 1,
    author: "NM Danjuma",
    title: "Pharmacy Education and Curriculum Review for Contemporary Pharmacy Practice",
    journal: "ABUTH Pharma Journal (2023)",
    volume: "Vol. 1",
    issue: "No. 1",
    pages: "pp. 12-15",
    hasPdf: true
  },
  {
    id: 2,
    author: "Olurishe et al.",
    title: "Evaluation of the Impact of Medication Therapy Management (MTM)Intervention Services on Therapeutic Outcomes of Patients with Multiple Chronic Medical Conditions (MCMC)",
    journal: "ABUTH Pharma Journal (2023)",
    volume: "Vol. 1",
    issue: "No. 1",
    pages: "pp. 16-26",
    hasPdf: true
  },
  {
    id: 3,
    author: "Popoola et al.",
    title: "Antimicrobial Resistance Pattern Amongst In-patients in a Tertiary HealthCare Facility in Northern Nigeria",
    journal: "ABUTH Pharma Journal (2023)",
    volume: "Vol. 1",
    issue: "No. 1", 
    pages: "pp. 27-36",
    hasPdf: true
  },
  {
    id: 4,
    author: "Odiba et al.",
    title: "Knowledge and Practices Related to Adverse Drug Reaction Reporting and Pharmacovigilance among Health Care Workers at different Levels of Health Care and Community Pharmacies in Zaria, North-West Nigeria",
    journal: "ABUTH Pharma Journal (2023)",
    volume: "Vol. 1",
    issue: "No. 1",
    pages: "pp. 37-45",
    hasPdf: true
  },
  {
    id: 5,
    author: "Olurishe et al.",
    title: "Medication Errors in Patients with Enteral Feeding Tube in a Tertiary HealthCare Facility in Zaria, North-West Nigeria",
    journal: "ABUTH Pharma Journal (2023)",
    volume: "Vol. 1",
    issue: "No. 1",
    pages: "pp. 46-55",
    hasPdf: true
  },
  {
    id: 6,
    author: "Odiba et al.",
    title: "Antibiotics Prescription Pattern in Intensive Care and Medical Emergency Units of a Tertiary Health Care Facility in Zaria, North-West Nigeria",
    journal: "ABUTH Pharma Journal (2023)",
    volume: "Vol. 1",
    issue: "No. 1",
    pages: "pp. 56-63",
    hasPdf: true
  }
];

const JournalArticles = () => {
  return (
    <div className="min-h-screen bg-background">      
      {/* Hero Section */}
      <PageHeader title="Journal Articles" imageUrl="articles_bg.jpg"/>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Disclaimer */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Disclaimer:</strong> The papers below are intended for private viewing by the page owner or those who otherwise have legitimate access to them. No part of it may in any form or by any electronic, mechanical, photocopying, recording, or any other means be reproduced, stored in a retrieval system or be broadcast or transmitted without the prior permission of the respective publishers. If your organization has a valid subscription of the journals, click on the DOI link for the legitimate copy of the papers.
          </p>
        </div>

        {/* Year Section */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <span className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold">
              2023
            </span>
          </div>
          
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">2023</h2>
          
          {/* Articles List */}
          <div className="space-y-8">
            {articlesData.map((article) => (
              <div key={article.id} className="border-b border-border pb-6 last:border-b-0">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="md:col-span-1">
                    <p className="font-medium text-foreground">{article.author}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-lg font-medium text-foreground mb-2 leading-relaxed">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      <em>{article.journal}</em> <strong>{article.volume}</strong>, {article.issue}, {article.pages}.
                      {article.hasPdf && (
                        <span className="ml-2">
                          <Link href="#" className="text-primary hover:text-primary/80 font-medium">
                            📄 PDF
                          </Link>
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};


export default JournalArticles;