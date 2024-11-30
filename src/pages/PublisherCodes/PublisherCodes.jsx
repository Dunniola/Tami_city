import { useState } from "react";
import { User, Copy, Check, Code, ExternalLink } from "lucide-react";
import { useAuthContext } from "../../context/AuthContext";
import Sidebar from "../../components/General/Sidebar";

const adSizes = [
  { name: "Medium Rectangle", width: 300, height: 250 },
  { name: "Leaderboard", width: 728, height: 90 },
  { name: "Skyscraper", width: 160, height: 600 },
  { name: "Large Rectangle", width: 336, height: 280 },
];

export default function PublisherCodes() {
  const { user } = useAuthContext();
  const [copiedSize, setCopiedSize] = useState(null);
  const publisherId = user?.publisher_id;

  const copyToClipboard = (code, sizeName) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedSize(sizeName);
      setTimeout(() => setCopiedSize(null), 2000);
    });
  };

  const generateIframeCode = (width, height) => {
    return `<iframe src="https://adclick.mboard.net/ad.js?publisher_id=${publisherId}&size=${width}x${height}" width="${width}" height="${height}" frameborder="0"></iframe>`;
  };

  return (
    <>
      <Sidebar>
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 nice-scrollbar">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Your Ad Integration Codes
            </h1>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 rounded-full p-3">
                    <User className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Welcome, {user?.email}!
                    </h2>
                    <p className="text-sm text-gray-500">
                      Publisher ID: {publisherId}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {adSizes.map((size) => (
                    <div key={size.name} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {size.name} ({size.width}x{size.height})
                      </h3>
                      <div className="bg-gray-900 rounded-md p-4 mb-4 relative">
                        <pre
                          className="text-sm text-white overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700"
                          style={{ maxHeight: "150px" }}
                        >
                          <code>
                            {generateIframeCode(size.width, size.height)}
                          </code>
                        </pre>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              generateIframeCode(size.width, size.height),
                              size.name
                            )
                          }
                          className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          aria-label="Copy code"
                        >
                          {copiedSize === size.name ? (
                            <Check className="h-5 w-5" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      <div className="flex items-center justify-between bg-blue-50 p-4 rounded-md">
                        <p className="text-sm text-blue-700 font-medium">
                          {copiedSize === size.name
                            ? "Code copied to clipboard!"
                            : "Click the button to copy your unique ad code"}
                        </p>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              generateIframeCode(size.width, size.height),
                              size.name
                            )
                          }
                          className={`flex items-center justify-center px-4 py-2 ${
                            copiedSize === size.name
                              ? "bg-green-500"
                              : "bg-blue-500"
                          } text-white rounded-md hover:bg-opacity-90 transition-colors`}
                        >
                          {copiedSize === size.name ? (
                            <>
                              <Check className="h-5 w-5 mr-2" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="h-5 w-5 mr-2" />
                              Copy Code
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Integration Instructions
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>
                      Choose the ad size that best fits your website layout.
                    </li>
                    <li>Copy the iframe code for your chosen size.</li>
                    <li>
                      Open your website's HTML file or content management
                      system.
                    </li>
                    <li>Paste the code where you want the ad to appear.</li>
                    <li>Save and publish your changes.</li>
                    <li>The ad should now be visible on your website!</li>
                  </ol>
                  <div className="p-4 bg-yellow-50 rounded-md">
                    <div className="flex items-start">
                      <Code className="h-6 w-6 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm text-yellow-700">
                        For optimal performance, we recommend placing the ad in
                        a visible area of your website, such as the sidebar or
                        within the main content area. Experiment with different
                        sizes to find what works best for your layout.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      View full integration guide
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}
