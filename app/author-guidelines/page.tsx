import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import heroImage from "@/assets/author-guidelines-hero.jpg";
import PageHeader from "../components/pageHeader";

const AuthorGuidelines = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      
      <PageHeader title="Author Guidelines" imageUrl="2147768642.jpg"/>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Disclaimer Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Disclaimer</h2>
          <div className="prose max-w-none text-foreground/80">
            <p className="mb-4 leading-relaxed">
              All statements of opinions, findings, conclusions or recommendations are those of the author(s) and do not necessarily reflect the views of the 
              publisher. The publisher makes no representation, express or implied, with regard to the accuracy of the information contained in the publication and 
              cannot accept any legal responsibility or liability for errors or omissions that may be made. The publisher makes no warranty, express or implied, with 
              respect to the material contained herein. The final decision regarding acceptance of manuscripts rests solely with the Editorial Board.
            </p>
          </div>
        </section>

        {/* Aims Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Aims</h2>
          <div className="prose max-w-none text-foreground/80">
            <p className="leading-relaxed">
              ABUTH Pharma Journal welcomes original contributions covering diverse aspects of pharmaceutical science including pharmaceutical, biomedical sciences, and life 
              sciences broadly. We aim to provide an outstanding forum for the communication and discussion of data, methods and findings from research in 
              pharmaceutical disciplines. Original contributions should be evidence-based, scholarly and of high quality for the advancement of knowledge in the respective 
              research areas.
            </p>
          </div>
        </section>

        {/* Ethical Considerations Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Ethical Considerations</h2>
          
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Guidelines on Publishing and Research Ethics in Pharma Journal
            </h3>
            <div className="prose max-w-none text-foreground/80">
              <p className="mb-6 leading-relaxed">
                The ABUTH Pharma Journal is committed to uphold the ethical standards of publishing. We expect that all manuscripts submitted. Rigorous efforts 
                to ensure and maintain high standards of publication ethics and to prevent misconduct. We take issues of copyright infringement, plagiarism or other breaches 
                of best practice in publication seriously. We seek to protect the rights of our authors and we always investigate claims of plagiarism or misuse of 
                published articles. Equally, we seek to protect the reputation of the journal against malpractice. Submitted articles may be checked with duplication-
                checking software. Where an article, for example, is found to have plagiarized other work or included third-party copyright material without permission or with 
                insufficient acknowledgement, or where the authorship of the article is contested, we reserve the right to take action including, but not limited to: publishing an 
                erratum or corrigendum (correction); retracting the article; taking up the matter with the head of department or dean of the authors institution and/or relevant 
                academic bodies or societies; banning the author from submission to the journal or all journals for a period; taking appropriate legal action.
              </p>
              
              <p className="mb-6 leading-relaxed">
                All the Pharma Journals editorial board members should avoid any actual or potential conflict of interest relating to the content; when in 
                doubt they should declare it:
              </p>

              <ul className="ml-6 space-y-2 list-disc">
                <li>Clinical Pharmacy and Hospital Pharmacy, Clinical Laboratory, Management, Pharmaceutical Medicine, Pharmacoepidemiology, Pharmacokinetics, Pharmacodynamics, Pharmaceutical Technology</li>
                <li>Bioix Manufacturing</li>
                <li>Clinical Pharmacokinetics & Pharmacodynamics</li>
                <li>Clinical Pharmacology & Pharmacokinetic Methodology</li>
                <li>Drug Informations</li>
                <li>Hospital and Institutional Practice and Specialty Pharmacy</li>
              </ul>

              <p className="mt-6 leading-relaxed">
                <strong>Conclusions:</strong> ABUTH Pharma Journal accepts all types of peer review as long as editors informed with this type when they submit it to 
                subject to peer review of at least two reviewers along as facilities or experts in the particular/related interdisciplinary subject area assigned by our 
                editors.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="mb-3 font-semibold text-foreground">Manuscript Submission</h4>
              <p className="text-foreground/80 leading-relaxed">
                Manuscripts are submitted online and will be handled as quickly as possible to guarantee a clear processing and to permit forwarding of 
                galley proofs.
              </p>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-foreground">Manuscript Style</h4>
              <p className="text-foreground/80 leading-relaxed">
                The Language of the journal is English. Each manuscript should be typed double-spaced on A4 ( 21 x 29.7cm ) paper with 3 cm margins at the end 
                of each side. The pages should be numbered consecutively at the bottom of the page and should be arranged in the following order: title page, abstract, 
                introduction, materials and methods, results, discussion, conclusion, acknowledgements, and references.
              </p>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-foreground">First page of manuscript</h4>
              <p className="text-foreground/80 leading-relaxed">
                The first page should include: The journal, author names, their names, author affiliations and addresses including corresponding author; brief, 
                descriptive and clear title reflecting the main theme of the work; complete address and phone, e-mail or affiliation.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Manuscript Submission Form */}
        <section className="mb-12">
          <Card className="border-border/20 shadow-lg">
            <CardHeader className="bg-muted/30">
              <CardTitle className="text-2xl font-bold text-center">Manuscript Submission Form</CardTitle>
              <p className="text-center text-muted-foreground mt-2">
                Please download and complete all of the required fields below. Fill and resubmit the form completed form below.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="manuscript-title">Manuscript Title</Label>
                    <Input 
                      id="manuscript-title" 
                      placeholder="Enter manuscript title" 
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="author-name">Author Name</Label>
                    <Input 
                      id="author-name" 
                      placeholder="Enter author name" 
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="manuscript-statement">Manuscript Statement</Label>
                    <Input 
                      id="manuscript-statement" 
                      placeholder="Brief statement" 
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="manuscript-file">Manuscript File</Label>
                    <Input 
                      id="manuscript-file" 
                      type="file" 
                      accept=".pdf,.doc,.docx" 
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="running-title">Running Title</Label>
                    <Input 
                      id="running-title" 
                      placeholder="Short running title" 
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="abstract">Abstract</Label>
                  <Textarea 
                    id="abstract" 
                    placeholder="Enter abstract (maximum 250 to 300 words, unstructured but appropriate for the type of research presented)"
                    className="mt-2 min-h-32"
                  />
                </div>

                <div>
                  <Label htmlFor="language-of-manuscript">Language of Manuscript</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="additional-notes">Additional Notes</Label>
                  <Textarea 
                    id="additional-notes" 
                    placeholder="Any additional information or notes"
                    className="mt-2 min-h-24"
                  />
                </div>

                <div className="flex justify-center pt-6">
                  <Button type="submit" size="lg" className="px-12">
                    Submit Manuscript
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default AuthorGuidelines;