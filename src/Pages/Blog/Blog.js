import React from "react";
import useSetTitle from "../../hook/useSetTitle";

const Blog = () => {
  useSetTitle("Blog");
  return (
    <div>
      <h3 className="text-center my-5 text-3xl font-bold">Blog page</h3>
      <div className="m-4 border-2 rounded p-4 bg-slate-200 ">
        <h2 className="text-2xl my-2 font-bold">
          How does NodeJS handle multiple requests at the same time?
        </h2>
        <p className="text-xl mb-5">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue.
        </p>
        <p className="text-xl">
          If NodeJS can process the request without I/O blocking then the event
          loop would itself process the request and sends the response back to
          the client by itself. But, it is possible to process multiple requests
          parallelly using the NodeJS cluster module or worker_threads module.
        </p>
      </div>
      <div className="m-4 border-2 rounded p-4 bg-slate-200 ">
        <h2 className="text-2xl my-2 font-bold">
          What is the difference between javascript and NodeJS?
        </h2>
        <h2 className="text-2xl my-2 font-bold">JAVASCRIPT</h2>
        <p className="text-xl">
          It is an accessible, bridge, parsed, lightweight, reactive, and web
          apps programming language.
        </p>
        <p className="text-xl">
          It's a programming language, after all. Any browser with a competent
          browser engine will operate.
        </p>
        <p className="text-xl">
          It's most commonly used on client-side servers.
        </p>
        <p className="text-xl">
          The node community does not care about JavaScript.
        </p>
        <p className="text-xl">
          TypedJS, RamdaJS, and other JavaScript frameworks are examples.
        </p>
        <h2 className="text-2xl my-2 font-bold">NODE JS</h2>
        <p className="text-xl">
          It's a bridge, open-source Js runtime environment for executing Js on
          the server.
        </p>
        <p className="text-xl">
          It's a JavaScript translator and environment that includes some
          valuable libraries for JavaScript programming.
        </p>
        <p className="text-xl">It's mainly popular on the server-side.</p>
        <p className="text-xl">
          All node projects represent the JavaScript community.
        </p>
        <p className="text-xl">
          Nodejs modules include Lodash and Express. All of these modules must
          be imported from npm.
        </p>
      </div>
      <div className="m-4 border-2 rounded p-4 bg-slate-200 ">
        <h2 className="text-2xl my-2 font-bold">
          What is JWT, and how does it work?
        </h2>
        <p className="text-xl mb-5">
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>
        <p className="text-xl">
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted.
        </p>
      </div>
      <div className="m-4 border-2 rounded p-4 bg-slate-200 h-max">
        <h2 className="text-2xl my-2 font-bold">
          Difference between SQL and NoSQL?
        </h2>
        <h2 className="text-xl my-2 font-bold">
          SQL vs NoSQL: Five Main Differences
        </h2>
        <p>1. Language</p>
        <p>2. Scalability</p>
        <p>3. Structure</p>
        <p>4. Properties</p>
        <p>5. Support and communities</p>

        <h2 className="text-xl my-2 font-bold">1.Language</h2>
        <p className="text-xl">
          SQL has been around for over 40 years, so it is recognizable,
          documented, and widely-used. Safe and versatile, it’s particularly
          well suited for complex queries. However, SQL restricts the user to
          working within a predefined tabular schema, and more care must be
          taken to organize and understand the data before it is used.
        </p>
        <h2 className="text-xl my-2 font-bold">2.Scalability</h2>
        <p className="text-xl">
          Most SQL databases can be scaled vertically, by increasing the
          processing power of existing hardware. NoSQL databases use a
          master-slave architecture which scales better horizontally, with
          additional servers or nodes.
        </p>
        <h2 className="text-xl my-2 font-bold">3.Structure</h2>
        <p className="text-xl">
          SQL database schemata always represent relational, tabular data, with
          rules about consistency and integrity. They contain tables with
          columns (attributes) and rows (records), and keys have constrained
          logical relationships.
        </p>
        <h2 className="text-xl my-2 font-bold">4.Properties</h2>
        <p className="text-xl">
          At a high level, SQL and NoSQL comply with separate rules for
          resolving transactions. RDBMSs must exhibit four “ACID” properties:
          <p>
            <span className="font-bold">Atomicity </span> means all transactions
            must succeed or fail completely. They cannot be partially-complete,
            even in the case of system failure.
          </p>
          <p>
            <span className="font-bold">Isolation </span>
            prevents concurrent transactions from affecting each other.
            Transactions must result in the same final state as if they were run
            sequentially, even if they were run in parallel.
          </p>
        </p>
        <h2 className="text-xl my-2 font-bold">5.Support and communities</h2>
        <p className="text-xl">
          SQL databases represent massive communities, stable codebases, and
          proven standards. Multitudes of examples are posted online and experts
          are available to support those new to programming relational data.
        </p>
        <p className="text-xl">
          NoSQL technologies are being adopted quickly, but communities remain
          smaller and more fractured. However, many SQL languages are
          proprietary or associated with large single-vendors, while NoSQL
          communities benefit from open systems and concerted commitment to
          onboarding users.
        </p>
      </div>
    </div>
  );
};

export default Blog;
