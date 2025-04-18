import { useState } from "react";
import { Award, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface CertificateProps {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

const Certificate = ({ title, issuer, date, link }: CertificateProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 card-hover">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-primary/10 rounded-full">
          <Award className="h-6 w-6 text-primary" />
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="View certificate"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-1">{issuer}</p>
      <p className="text-sm text-muted-foreground">{date}</p>
    </div>
  );
};

const Certificates = () => {
  const certificates = [
    {
      title: "Full Stack Web Developer Intern",
      issuer: "QualiZeal",
      date: "2024",
      link: "https://drive.google.com/file/d/1iSuLJTuEGsGyowommCwYfXl11aE6SGFs/view?usp=sharing",
    },
    {
      title: "Basics of Blockchain",
      issuer: "CourseEra",
      date: "2021",
      link: "https://www.coursera.org/account/accomplishments/verify/2GBV83PQFYSS",
    },
    {
      title: "SQL Basic",
      issuer: "HackerRank",
      date: "2023",
      link: "https://www.hackerrank.com/certificates/2ff3ff7b1876",
    },
    {
      title: "SQL Intermediate",
      issuer: "HackerRank",
      date: "2025",
      link: "https://www.hackerrank.com/certificates/e882d097bef6",
    },
    {
      title: "REST API Development(Intermediate)",
      issuer: "HackerRank",
      date: "2025",
      link: "https://www.hackerrank.com/certificates/58bf5c22c8d1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(certificates.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if ((prevIndex + 1) * itemsPerPage >= certificates.length) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return totalPages - 1;
      }
      return prevIndex - 1;
    });
  };

  const displayedCertificates = certificates.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section id="certificates" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center">Certificates</h2>
        <p className="text-center text-gray-500 mb-6">
          Credentials that validate my expertise and knowledge
        </p>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {displayedCertificates.map((cert, index) => (
              <Certificate
                key={index}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                link={cert.link}
              />
            ))}
          </div>

          {certificates.length > itemsPerPage && (
            <div className="flex justify-center mt-8 gap-3">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Previous certificates"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx
                        ? "w-6 bg-primary"
                        : "w-2 bg-primary/30"
                    }`}
                    aria-label={`Go to page ${idx + 1}`}
                  ></button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Next certificates"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
