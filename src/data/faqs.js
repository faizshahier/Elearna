/* FAQ page: five questions per category (from the FAQ design) */
export const faqCategories = [
  {
    name: "Enrollment and registration",
    items: [
      {
        q: "How do I enroll in an online course?",
        a: "Open the course you like, press “Subscribe” or “Buy Course”, create your free account and pick a payment option. You get access right after checkout.",
      },
      {
        q: "What are the benefits of online learning?",
        a: "You learn at your own pace, from anywhere, and can replay any lesson. Most courses also include projects and a certificate.",
      },
      {
        q: "Are there any prerequisites for enrolling in online courses?",
        a: "Most beginner courses need no experience. Advanced courses list any required skills on the course page under “Target audience”.",
      },
      {
        q: "What should I do if I forget my password?",
        a: "Click “Login”, then “Forgot password”. We email you a reset link that is valid for 30 minutes.",
      },
      {
        q: "Can I enroll in multiple courses at once?",
        a: "Yes. There is no limit — your dashboard keeps track of progress in every course separately.",
      },
    ],
  },
  {
    name: "Technical requirements",
    items: [
      {
        q: "What kind of internet connection do I need?",
        a: "A stable connection of at least 5 Mbps is enough for HD video. On slower connections the player lowers the quality automatically.",
      },
      {
        q: "Can I use the learning website offline?",
        a: "Reading pages and quizzes need a connection. Premium plan members can download videos in the mobile app and watch them offline.",
      },
      {
        q: "How do I enable or disable cookies in my browser?",
        a: "Open your browser settings, go to Privacy or Site settings, and allow or block cookies there. Login needs cookies turned on for this site.",
      },
      {
        q: "Does the learning website support multiple languages?",
        a: "The website is in English. Many courses also have subtitles in Spanish, French, Arabic and more — see the course page for the list.",
      },
      {
        q: "Can I use a VPN to access the learning website?",
        a: "Yes. A VPN works fine; if videos load slowly, try a server closer to your real location.",
      },
    ],
  },
  {
    name: "Assessments and grading",
    items: [
      {
        q: "How is my performance assessed in the courses?",
        a: "Each course has short quizzes after lessons and a final project. Together they make up your course grade.",
      },
      {
        q: "When will I receive my grades?",
        a: "Quizzes are graded instantly. Final projects are reviewed by the instructor within five working days.",
      },
      {
        q: "Can I see my grades for each assessment?",
        a: "Yes. Your dashboard shows the score for every quiz and project, plus your overall course grade.",
      },
      {
        q: "How do I know what I need to improve on?",
        a: "Each quiz shows which answers were wrong and links back to the lesson that covers them. Project reviews include written feedback.",
      },
      {
        q: "What happens if I miss an assessment or deadline?",
        a: "Most courses are self-paced, so there is no penalty. For courses with fixed dates, contact the instructor to ask for an extension.",
      },
    ],
  },
  {
    name: "Communication and support",
    items: [
      {
        q: "How can I contact support if I have a problem?",
        a: "Use the form on the Contact page or email info@example.com. We reply within one working day.",
      },
      {
        q: "How do I report technical issues with the website?",
        a: "Send a short description and a screenshot through the Contact page. Include your browser and device so we can reproduce it.",
      },
      {
        q: "Can I access support through live chat?",
        a: "Live chat is available for Premium plan members, 24/7. Other plans get email support.",
      },
      {
        q: "How do I access the knowledge base or help center?",
        a: "Start with this FAQ page. Each course page also has its own FAQ tab with course-specific answers.",
      },
      {
        q: "How can I escalate a support issue if it’s not resolved?",
        a: "Reply to your support email and ask for escalation. A senior team member will follow up within two working days.",
      },
    ],
  },
  {
    name: "Certificates and degrees",
    items: [
      {
        q: "Are the certificates and degrees accredited?",
        a: "Certificates show the skills you completed. Some partner courses also count toward university credit — check the course page.",
      },
      {
        q: "Can I earn a certificate or degree entirely online?",
        a: "Yes. All lessons, assessments and the certificate itself are completed and issued online.",
      },
      {
        q: "How can I verify the authenticity of my certificate or degree?",
        a: "Every certificate has a unique link and ID. Anyone can open the link to confirm it is real.",
      },
      {
        q: "Can I request a physical copy of my certificate or degree?",
        a: "You can download a high-resolution PDF and print it yourself at any time.",
      },
      {
        q: "What should I do if I lose my certificate or degree?",
        a: "Nothing is lost — log in and download it again from your dashboard whenever you need it.",
      },
    ],
  },
];

/* Short list shown on the Pricing and Contact pages (the questions those designs show) */
export const pricingFaqs = [
  faqCategories[0].items[0],
  faqCategories[0].items[2],
  {
    q: "What are the technical requirements for online learning?",
    a: "A modern browser (Chrome, Edge, Firefox or Safari), a stable internet connection of at least 5 Mbps and speakers or headphones.",
  },
  {
    q: "What if I encounter technical difficulties?",
    a: "Reload the page first. If the problem stays, contact support from the Contact page and include a screenshot.",
  },
  {
    q: "Are there live classes, or can I learn at my own pace?",
    a: "Most courses are self-paced. Some include optional live Q&A sessions, listed on the Events page.",
  },
];
