import Link from "next/link";
import PageHeader from "../components/pageHeader";
import JournalArticlesComp from "../components/JournalArticles";

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
          <JournalArticlesComp />
        </div>
      </main>
    </div>
  );
};


export default JournalArticles;