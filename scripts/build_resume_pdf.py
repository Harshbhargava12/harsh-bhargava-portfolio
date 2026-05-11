#!/usr/bin/env python3
"""Generate public/harshresume.pdf from resume text (no external template)."""
from pathlib import Path

try:
    from fpdf import FPDF
except ImportError as e:
    raise SystemExit("Install fpdf2: pip install fpdf2") from e

OUT = Path(__file__).resolve().parent.parent / "public" / "harshresume.pdf"


class PDF(FPDF):
    def header(self):
        self.set_font("Helvetica", "B", 16)
        self.cell(0, 10, "Harsh Bhargava", ln=True)
        self.set_font("Helvetica", "", 10)
        self.set_text_color(60, 60, 60)
        self.multi_cell(
            0,
            5,
            "Email: harshbhargava20@gmail.com  |  Phone: +91 9179288450\n"
            "LinkedIn: linkedin.com/in/harsh-bhargava-885a00347  |  GitHub: github.com/Harshbhargava12",
        )
        self.ln(4)
        self.set_draw_color(200, 200, 200)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(6)
        self.set_text_color(0, 0, 0)

    def section(self, title):
        self.set_font("Helvetica", "B", 12)
        self.cell(0, 8, title, ln=True)
        self.set_font("Helvetica", "", 10)

    def body_text(self, text):
        self.multi_cell(0, 5, text)
        self.ln(3)


def main():
    pdf = PDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()

    pdf.section("Career objective")
    pdf.body_text(
        "Motivated and curious Computer Science student eager to apply classroom learning to real-world "
        "projects. Passionate about exploring innovative solutions, building practical skills, and "
        "contributing meaningfully to a forward-thinking organization."
    )

    pdf.section("Education")
    pdf.body_text(
        "B.Tech in Computer Science & Engineering (Expected 2027)\n"
        "Jaypee Institute of Engineering and Technology, Guna - CGPA 5.90 (up to 6th semester).\n\n"
        "Class XII (2023) - Vandana Convent School, Guna, MP (CBSE) - 70.30%.\n\n"
        "Class X (2021) - Vandana Convent School, Guna, MP (CBSE) - 75.00%."
    )

    pdf.section("Technical skills")
    pdf.body_text(
        "Programming: Core Java, C++, Python\n"
        "Web: HTML, CSS, JavaScript\n"
        "Database: MySQL\n"
        "Tools: GitHub, Visual Studio Code, CodeBlocks\n"
        "Concepts: DSA, OOPS, RDBMS, Operating Systems, Computer Networks\n"
        "Frameworks / libraries: TensorFlow, Keras, OpenCV, NumPy"
    )

    pdf.section("Projects")
    pdf.body_text(
        "Brain Tumor Detection - AI-based system for detecting brain tumors from medical imaging using "
        "machine learning for accurate and early diagnosis. (Python, TensorFlow, OpenCV, NumPy.)\n\n"
        "Daily Report Management System - For National Fertilizers Limited (NFL), Vijaypur: streamlined "
        "data entry, reporting, and real-time monitoring of plant operations. (JSP, Servlets, Tomcat, Oracle.)"
    )

    pdf.section("Internships")
    pdf.body_text(
        "Report Management Intern - NFL, Vijaypur (On-site, Jun 2025 - Jul 2025)\n"
        "SQL queries, stored procedures, views; database design, data cleaning, performance tuning.\n\n"
        "AI Intern - Edunet Foundation (Remote, Dec 2025 - Feb 2026)\n"
        "Microsoft & SAP TechSaksham program: ML fundamentals, computer vision, real-time data processing."
    )

    pdf.section("Certifications")
    pdf.body_text(
        "Blockchain for Enterprises - Infosys\n"
        "Web Development - Infosys\n"
        "AI Agents for AI - Udemy"
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
