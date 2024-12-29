export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <div className="prose dark:prose-invert text-foreground">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          This Cookie Policy explains how BarberStyle Essentials uses cookies
          and similar technologies to recognize you when you visit our website.
          It explains what these technologies are and why we use them, as well
          as your rights to control our use of them.
        </p>
        <h2>What are cookies?</h2>
        <p>
          Cookies are small data files that are placed on your computer or
          mobile device when you visit a website. Cookies are widely used by
          website owners in order to make their websites work, or to work more
          efficiently, as well as to provide reporting information.
        </p>
        <h2>Why do we use cookies?</h2>
        <p>
          We use cookies for several reasons. Some cookies are required for
          technical reasons in order for our website to operate, and we refer to
          these as "essential" or "strictly necessary" cookies. Other cookies
          enable us to track and target the interests of our users to enhance
          the experience on our website. Third parties serve cookies through our
          website for advertising, analytics and other purposes.
        </p>
        <h2>Types of cookies we use</h2>
        <ul>
          <li>
            Essential cookies: These cookies are strictly necessary to provide
            you with services available through our website and to use some of
            its features.
          </li>
          <li>
            Performance and functionality cookies: These cookies are used to
            enhance the performance and functionality of our website but are
            non-essential to their use.
          </li>
          <li>
            Analytics and customization cookies: These cookies collect
            information that is used either in aggregate form to help us
            understand how our website is being used or how effective our
            marketing campaigns are, or to help us customize our website for
            you.
          </li>
          <li>
            Advertising cookies: These cookies are used to make advertising
            messages more relevant to you.
          </li>
        </ul>
        <h2>How can you control cookies?</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You
          can set or amend your web browser controls to accept or refuse
          cookies. If you choose to reject cookies, you may still use our
          website though your access to some functionality and areas of our
          website may be restricted.
        </p>
        <h2>Changes to this Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time in order to
          reflect, for example, changes to the cookies we use or for other
          operational, legal or regulatory reasons. Please therefore re-visit
          this Cookie Policy regularly to stay informed about our use of cookies
          and related technologies.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about our use of cookies or other
          technologies, please email us at privacy@barberstyleessentials.com.
        </p>
      </div>
    </div>
  );
}
