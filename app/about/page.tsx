import journalCover from "@/assets/journal-cover.jpg";
import PageHeader from "../components/pageHeader";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}

<PageHeader title="About Us" imageUrl="about_page_bg.jpg"/>

      {/* Journal History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Journal Cover */}
            <div className="flex justify-center">
              <img
                src={
                  "/frontcover.jpg"
                }
                alt="ABUTHJ Pharma Journal Cover"
                className="max-w-md w-full shadow-lg rounded-lg"
              />
            </div>

            {/* Journal History Content */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Journal History
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Journal of ABUTHJ was founded in 2020 in line with the mission
                  with the pioneer Chairman, Board of Editors as Prof. Nubiu M.
                  Danjuma Department of Pharmacology and Therapeutics, ABUTHJ
                  and currently, Chief Editor-in-Chief. The wide acceptance of
                  the peer edition stimulated the need for an optimal edition
                  particularly geared on clinical and management research
                  communicating both with practising clinicians.
                </p>
                <p>
                  Proceeding editorial editions Open Access-Continua in 2024
                  (Volume 1) with digitising the print edition and subsequent
                  publication of other online editions on a volume per year
                  basis.
                </p>
                <p>
                  Copies of the print versions are available at the Drug
                  Information Centre, Department of Pharmaceutical Services,
                  Ahmadu Bello University Teaching Hospital, Zaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Scope Section */}
<section className="relative py-16">
  <div className="grid lg:grid-cols-2">

    {/* Journal Mission */}
    <div className="relative isolate p-12 text-primary-foreground overflow-hidden">
      {/* background image */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url('/about_bg_1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* blue overlay */}
      <div className="absolute inset-0 bg-blue-900/70 -z-10" />
      
      <div className="relative">
        <h2 className="text-3xl font-bold mb-6">Journal Mission</h2>
        <p className="leading-relaxed mb-8">
          To foster multi-disciplinary research and collaboration among
          practicing pharmacists, pharmaceutical scientists, pharmaceutical
          industries and the healthcare sector towards improvement in
          management outcomes, as well as provide an international forum for
          the communication and dissemination of research recommendations and
          opinion in pharmacy practice and related disciplines. Furthermore,
          to promote pharmacy practice research for the advancement of
          pharmacy profession and enhancing the competencies of practicing
          pharmacists.
        </p>

        <h3 className="text-2xl font-bold mb-4">Journal Vision</h3>
        <p className="leading-relaxed">
          To be a highly rated peer-reviewed pharmacy journal.
        </p>
      </div>
    </div>

    {/* Journal Scope */}
    <div className="relative isolate p-12 text-white overflow-hidden">
      {/* background image (same as left or different if needed) */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url('/about_bg_2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* red overlay */}
      <div className="absolute inset-0 bg-red-900/70 -z-10" />

      <div className="relative">
        <h2 className="text-3xl font-bold mb-6">Journal Scope</h2>
        <p className="leading-relaxed mb-6">
          ABUTH Pharma Journal publishes original research papers, critical
          reviews, personal views, and short communications in the following
          areas:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            Clinical Pharmacy and Hospital Practice, Pharmaceutical Care,
            Medicine Management, Pharmacoeconomics, pharmacy management,
            Public Health Pharmacy and Pharmacy Education and Training.
          </li>
          <li>Clinical and Experimental Pharmacology and Toxicology</li>
          <li>Clinical Pharmaceutics &amp; Pharmaceutical Microbiology</li>
          <li>Drug Development</li>
          <li>
            Other aspects of Pharmacy Practice such as Community Pharmacy
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Editorial Boards Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Editorial Board */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Editorial Board
              </h2>

              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Editor in Chief
                  </h3>
                  <p className="text-muted-foreground">
                    Dr. Comfort Olutosin (Ph.D, FPCPharm)
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Deputy editor-in-chief
                  </h3>
                  <p className="text-muted-foreground">
                    Dr. Yakira Onalo (PharmD, MPH, FPCPharm)
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Review editors
                  </h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Dr. Abdullahi Abubakar (PharmD, MSc, FPCPharm)</p>
                    <p>Dr. Ehun John (PharmD, MSc, FPCPharm)</p>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Production editors
                  </h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Pharm. Mubaraq Ahmed (B.Pharm)</p>
                    <p>Pharm. Ishaq Adamu (B.Pharm)</p>
                    <p>Pharm. Muhammad Usman (B.Pharm)</p>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Editorial assistant
                  </h3>
                  <p className="text-muted-foreground">
                    Pharm. Olanrewon Fayemi (B.Pharm, FPCPharm)
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Advisory Board */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Editorial Advisory Board
              </h2>

              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Prof. Nubiu M. Danjuma – Chairman, Board of Editors
                  </h3>
                  <p className="text-muted-foreground">
                    Professor of Pharmacology and Therapeutics and Director of
                    Vaccines, Antimicron and Natural Toxins Research Centre
                    (VANTRC), Ahmadu Bello University, Zaria Nigeria.
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Prof. Valentine Odili (Ph.D, FPCPharm)
                  </h3>
                  <p className="text-muted-foreground">
                    Professor of Clinical Pharmacy and Editor-in-Chief, Journal
                    of Science and Practice of Pharmacy, University of Benin,
                    Benin City, Edo State.
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Dr. Ibrahim Bello (M.Sc, FPCPharm)
                  </h3>
                  <p className="text-muted-foreground">
                    Director of Pharmaceutical Services (c Drugs Information,
                    Education and Research, University of Ilorin Teaching
                    Hospital, Ilorin, Kwara State.
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Dr. Muhammed A. Zayyad (Ph.D)
                  </h3>
                  <p className="text-muted-foreground">
                    Associate Professor, Department of Clinical Pharmacy and
                    Pharmacy Practice, Ahmadu Bello University, Zaria, Nigeria.
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Dr. Uwimana Ezechiel (Ph.D, FPCPharm)
                  </h3>
                  <p className="text-muted-foreground">
                    Senior Lecturer, Department of Clinical Pharmacy and
                    Bio-Pharmacy, University of Uyo, Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
