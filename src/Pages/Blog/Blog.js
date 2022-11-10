import React from "react";

const Blog = () => {
  return (
    <div>
      <h3 className="text-center my-5 text-3xl font-bold">Blog page</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="m-4 border-2 rounded p-4 bg-slate-200">
          <h2 className="text-2xl my-2 font-bold">What is cors?</h2>
          <p className="text-xl">
            CORS stands for Cross-Origin Resource Sharing. It allows us to relax
            the security applied to an API. This is done by bypassing the
            Access-Control-Allow-Origin headers, which specify which origins can
            access the API.
            <br />
            In other words, CORS is a browser security feature that restricts
            cross-origin HTTP requests with other servers and specifies which
            domains access your resources.
          </p>
        </div>
        <div className="m-4 border-2 rounded p-4 bg-slate-200">
          <h2 className="text-2xl my-2 font-bold">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p className="text-xl">
            The Firebase Realtime Database lets you build rich, collaborative
            applications by allowing secure access to the database directly from
            client-side code. Data is persisted locally, and even while offline,
            realtime events continue to fire, giving the end user a responsive
            experience.
          </p>
          <h5>**Use these 6 user authentication types to Emplement.</h5>
          <p>
            1. Password-based authentication. 2. Two-factor/multifactor
            authentication. 3. Biometric authentication. 4. Single sign-on. 5.
            Token-based authentication. 6. Certificate-based authentication.
          </p>
        </div>
        <div className="m-4 border-2 rounded p-4 bg-slate-200">
          <h2 className="text-2xl my-2 font-bold">
            How does the private route work?
          </h2>
          <p className="text-xl">
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property.
          </p>
        </div>
        <div className="m-4 border-2 rounded p-4 bg-slate-200">
          <h2 className="text-2xl my-2 font-bold">
            what is node? How does Node work?
          </h2>
          <p className="text-xl">
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
