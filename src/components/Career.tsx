import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BE in Computer Science & Engineering</h4>
                <h5>SJC Institute of Technology — GPA: 8</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Pursuing a Bachelor of Engineering in Computer Science and
              Engineering, building a strong foundation in software development,
              data structures, algorithms, and web technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Deloitte</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked as a Software Developer at Deloitte, contributing to the
              development and maintenance of scalable enterprise applications.
              Collaborated with cross-functional teams to implement backend
              logic, optimize performance, and ensure secure, high-quality
              solutions. Actively participated in code reviews, testing, and
              deployment while gaining hands-on experience with Agile workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Achievements & Certifications</h4>
                <h5>Hackathons, Ideathons & Competitions</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Organized a college technical fest. Participated in a 24-hour
              national-level hackathon. Secured 1st place in a Web Development
              and GPT-based competition. Certified in UI/UX, CISCO, and
              participated in Green Mind National Hackathon and Ideathon events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
