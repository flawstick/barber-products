export default function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Accessibility Statement</h1>
      <div className="prose dark:prose-invert text-foreground">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          BarberStyle Essentials is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
        </p>
        <h2>Measures to support accessibility</h2>
        <p>
          BarberStyle Essentials takes the following measures to ensure accessibility of our website:
        </p>
        <ul>
          <li>Include accessibility as part of our mission statement.</li>
          <li>Integrate accessibility into our procurement practices.</li>
          <li>Provide continual accessibility training for our staff.</li>
          <li>Include people with disabilities in our design personas.</li>
        </ul>
        <h2>Conformance status</h2>
        <p>
          The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. BarberStyle Essentials is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
        </p>
        <h2>Feedback</h2>
        <p>
          We welcome your feedback on the accessibility of BarberStyle Essentials. Please let us know if you encounter accessibility barriers on our website:
        </p>
        <ul>
          <li>Phone: [Your phone number]</li>
          <li>E-mail: accessibility@barberstyleessentials.com</li>
          <li>Visitor Address: [Your physical address]</li>
        </ul>
        <p>
          We try to respond to feedback within 5 business days.
        </p>
        <h2>Compatibility with browsers and assistive technology</h2>
        <p>
          BarberStyle Essentials is designed to be compatible with the following assistive technologies:
        </p>
        <ul>
          <li>Latest versions of screen readers including JAWS, NVDA, and VoiceOver</li>
          <li>Speech recognition software</li>
          <li>Latest versions of popular browsers including Chrome, Firefox, Safari, and Edge</li>
        </ul>
        <h2>Technical specifications</h2>
        <p>
          Accessibility of BarberStyle Essentials relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
        </p>
        <ul>
          <li>HTML</li>
          <li>WAI-ARIA</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <h2>Assessment approach</h2>
        <p>
          BarberStyle Essentials assessed the accessibility of this website by the following approaches:
        </p>
        <ul>
          <li>Self-evaluation</li>
          <li>External evaluation</li>
        </ul>
        <h2>Limitations and alternatives</h2>
        <p>
          Despite our best efforts to ensure accessibility of BarberStyle Essentials, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.
        </p>
        <p>
          Known limitations for BarberStyle Essentials:
        </p>
        <ol>
          <li>Comments from users: Comments may contain user-generated content that is not accessible. We monitor these comments and attempt to fix issues as soon as we become aware of them.</li>
          <li>Uploaded images: Some images uploaded by users might lack appropriate alternative text. We strive to correct this as soon as we become aware of the issue.</li>
        </ol>
      </div>
    </div>
  )
}


