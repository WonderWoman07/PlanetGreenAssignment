import React from "react";

const TandCModal = ({ setShowTerms }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 text-start">
      <div className="bg-white rounded-2xl w-full max-w-xl max-h-xl overflow-y-auto p-0 shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-start flex">
            <span className="text-gray-800 mr-1">Terms </span>
            <span className="text-gray-500 ml-1">& Conditions</span>
          </h2>
          <div className="text-gray-600 text-sm space-y-4">
            <p>
              These Terms and Conditions ("Terms", "Terms and Conditions")
              govern your relationship with the Service and the agreement that
              operates between You and the Company.
            </p>
            <p>
              Your access to and use of the Service is conditioned on Your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users, and others who access or use the Service.
            </p>
            <p>
              By accessing or using the Service You agree to be bound by these
              Terms. If You disagree with any part of these terms then You may
              not access the Service.
            </p>
            <p>
              You represent that you are over the age of 18. The Company does
              not permit those under 18 to use the Service.
            </p>
            <p>
              Your access to and use of the Service is also conditioned on Your
              acceptance of and compliance with the Privacy Policy of the
              Company. Our Privacy Policy describes Our policies and procedures
              on the collection, use and disclosure of Your personal information
              when You use the Application or the Website and tells You about
              Your privacy rights and how the law protects You. Please read Our
              Privacy Policy carefully before using Our Service.
            </p>
          </div>
          <div className="mt-6 flex justify-start">
            <button
              onClick={() => setShowTerms(false)}
              className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TandCModal;
